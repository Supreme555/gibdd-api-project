const express = require('express');
const cors = require('cors');
const axios = require('axios');
const morgan = require('morgan');
require('dotenv').config(); // Подключение переменных окружения из файла .env

const PORT = process.env.PORT || 3001; // Установка порта из переменных окружения или использование значения по умолчанию
const API_TOKEN = process.env.API_TOKEN; // Получение API токена из переменных окружения

const app = express();

app.use(cors()); // Подключение CORS для разрешения запросов с других доменов
app.use(express.json()); // Парсинг JSON-запросов
app.use(morgan('combined')); // Логгирование HTTP-запросов в консоль

// Запуск сервера на указанном порту
app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});

// Обработка POST-запросов к API на маршруте /api
app.post('/api', async (req, res) => {
    try {
        const { input } = req.body; // Извлечение данных из тела запроса
        console.log('Received input:', input.vin); // Логгирование полученного VIN-номера
        console.log('Received input:', input.checkType); // Логгирование полученного типа проверки
        const msg = await takeVinInfo(input); // Вызов функции для получения данных по VIN
        res.json({ message: msg }); // Отправка данных обратно клиенту в формате JSON
    } catch (e) {
        console.error('Error:', e); // Логгирование ошибки, если она произошла
        res.status(500).json({ error: e.message }); // Отправка ответа с кодом ошибки 500 и сообщением об ошибке
    }
});

// Асинхронная функция для получения информации по VIN-номеру
async function takeVinInfo(input) {
    const { checkType: selected, vin: vin_code } = input; // Деструктуризация данных из запроса

    const data = {
        type: selected, // Тип проверки (например, 'gibdd', 'restrict', 'wanted')
        vin: vin_code, // VIN-номер автомобиля
        token: API_TOKEN, // API токен для авторизации
    };

    // Формирование URL для запроса к стороннему API
    const url = `https://api-cloud.ru/api/gibdd.php?${new URLSearchParams(data).toString()}`;

    try {
        // Выполнение GET-запроса с использованием axios
        const response = await axios.get(url, {
            timeout: 120000, // Установка таймаута 120 секунд
        });
        console.log('Data content:', response.data); // Логгирование полученных данных
        return response.data; // Возвращение данных в вызывающую функцию
    } catch (error) {
        console.error(`Ошибка при получении данных: ${error}`); // Логгирование ошибки, если запрос не удался
        return { error: 'Ошибка при получении данных' }; // Возвращение ошибки в формате JSON
    }
}
