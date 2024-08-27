import React, { useState, useEffect } from 'react'
import styles from '../assets/GibddComp.module.css'
import axios from 'axios'
import GibddTable from './table-components/GibddTable';
import WantedTable from './table-components/WantedTable';
import RestrictTable from './table-components/RestrictTable';
import DtpTable from './table-components/DtpTable';
import EaistoTable from './table-components/EaistoTable';

function GibddComp() {
    // Состояние для хранения VIN-номера, типа проверки, типа компонента, данных ответа, и статуса загрузки
    const [vin, setVin] = useState('1FMEU73EX6UB13848');
    const [checkType, setCheckType] = useState('gibdd');
    const [compType, setCompType] = useState(' ')
    const [responseData, setResponseData] = useState(' ');
    const [isLoading, setIsLoading] = useState('Поиск по VIN номеру');

    // Обработчик изменения типа проверки (выбор пользователя)
    const handleOptionChange = (event) => {
        setCheckType(event.target.value);
    };

    // Обработчик изменения VIN-номера (ввод пользователя)
    const handleInputChange = (event) => {
        setVin(event.target.value);
    };

    // Функция для поиска данных по VIN-номеру
    const Search = async () => {
        setResponseData('');
        setCompType('');
        setIsLoading(' ')
        if (vin.length !== 17) { return; } // Проверка корректности длины VIN-номера
        try {
            setIsLoading('Загрузка...')
            const { data } = await axios.post('http://localhost:3001/api', { input: { vin, checkType } });
            // надо будет заменить 
            console.log(data.message)
            setResponseData(data.message); // Установка полученных данных
            setCompType(checkType) // Установка типа компонента на основе выбранного типа проверки
            console.log('status 200');
        } catch (error) {
            setIsLoading('Не удалось получить данные с сервера! Пожалуйста, повторите запрос позднее.');
            console.error('status 400', error);
        }
    };

    return (
        <div className={styles.main}>
            <h2 className={styles.title}>Введите VIN автомобиля (ГИБДД)</h2>
            <div className={styles.inputs}>
                {/* Поле ввода VIN-номера с динамическим изменением цвета границы в зависимости от корректности ввода */}
                <input 
                    type="text" 
                    id="vinInput" 
                    placeholder="VIN автомобиля" 
                    value={vin} 
                    onChange={handleInputChange} 
                    style={{ borderColor: vin.length === 17 ? 'initial' : 'red' }} 
                />
                {/* Выпадающий список для выбора типа проверки */}
                <select 
                    className={styles.formControl} 
                    id="checkType" 
                    value={checkType} 
                    onChange={handleOptionChange}>
                    <option value="gibdd">Основная информация по VIN номеру</option>
                    {/* <option value="gibddv2">Основная информация по VIN номеру v2</option> */}
                    <option value="restrict">Наличие ограничений</option>
                    <option value="wanted">Нахождение в розыске</option>
                    <option value="dtp">Участие в дорожно-транспортных происшествиях</option>
                    <option value="eaisto">Проверка диагностических карт, пробег</option>
                </select>
                {/* Кнопка для запуска поиска */}
                <button onClick={() => { Search() }}>Поиск</button>
            </div>
            <div className={styles.output} id="outputElement">
                {/* Динамическое отображение таблицы в зависимости от выбранного типа проверки */}
                {
                    (() => {
                        switch (compType) {
                            case 'gibdd':
                                console.log('gibdd')
                                return <div><GibddTable data={responseData} /></div>
                            case 'wanted':
                                console.log('wanted')
                                return <div><WantedTable data={responseData} /></div>
                            case 'restrict':
                                console.log('restrict')
                                return <div><RestrictTable data={responseData} /></div>
                            case 'dtp':
                                console.log('dtp')
                                return <div><DtpTable data={responseData} /></div>
                            case 'eaisto':
                                console.log('eaisto')
                                return <div><EaistoTable data={responseData} /></div>
                            default:
                                // console.log('default')
                                return <div>{isLoading}</div>;
                        }
                    })()
                }
            </div>
        </div>
    )
}

export default GibddComp;
