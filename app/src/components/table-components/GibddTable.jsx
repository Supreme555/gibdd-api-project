import React from 'react'

function GibddTable({data}) {
    console.log('GibddTable')
    console.log(data)
    if (data.found === false) {
        return (
            <>
                <h1>Информация о транспортном средстве и история регистраций</h1>
                <h2>{data.message}</h2>
            </>
        );
    }
    return (
        <>
            <h1>Информация о транспортном средстве и история регистраций</h1>

            <h2>Основные данные о ТС</h2>
            <table>
                <tbody>
                    <tr>
                        <th>VIN</th>
                        <td>{data.vehicle.vin}</td>
                    </tr>
                    <tr>
                        <th>Номер кузова</th>
                        <td>{data.vehicle.bodyNumber}</td>
                    </tr>
                    <tr>
                        <th>Номер двигателя</th>
                        <td>{data.vehicle.engineNumber}</td>
                    </tr>
                    <tr>
                        <th>Модель</th>
                        <td>{data.vehicle.model}</td>
                    </tr>
                    <tr>
                        <th>Цвет</th>
                        <td>{data.vehicle.color}</td>
                    </tr>
                    <tr>
                        <th>Год выпуска</th>
                        <td>{data.vehicle.year}</td>
                    </tr>
                    <tr>
                        <th>Объем двигателя (см³)</th>
                        <td>{data.vehicle.engineVolume}</td>
                    </tr>
                    <tr>
                        <th>Мощность (л.с.)</th>
                        <td>{data.vehicle.powerHp}</td>
                    </tr>
                    <tr>
                        <th>Мощность (кВт)</th>
                        <td>{data.vehicle.powerKwt}</td>
                    </tr>
                    <tr>
                        <th>Категория</th>
                        <td>{data.vehicle.category}</td>
                    </tr>
                    <tr>
                        <th>Тип</th>
                        <td>{data.vehicle.type}</td>
                    </tr>
                    <tr>
                        <th>Тип информации</th>
                        <td>{data.vehicle.typeinfo}</td>
                    </tr>
                </tbody>
            </table>

            <h2>История регистраций</h2>
            {data.ownershipPeriod.map((period, index) => (
                <table key={index}>
                    <tbody>
                        <tr>
                            <th>История регистрации {index + 1}</th>
                            <td>
                                <strong>Последняя операция:</strong> {period.lastOperationInfo}<br />
                                <strong>Тип владельца:</strong> {period.simplePersonTypeInfo}<br />
                                <strong>Владел с:</strong> {period.from}<br />
                                <strong>Владел до:</strong> {period.to === 'null' ? 'настоящее время' : period.to}<br />
                                <strong>Период владения:</strong> {period.period}
                            </td>
                        </tr>
                    </tbody>
                </table>
            ))}

            {/* <h2>Информация о запросе</h2>
            <table>
                <tr>
                    <th>Списание за запрос</th>
                    <td>{data.inquiry.price}</td>
                </tr>
                <tr>
                    <th>Баланс после текущего запроса</th>
                    <td>{data.inquiry.balance}</td>
                </tr>
                <tr>
                    <th>Скорость запроса</th>
                    <td>{data.inquiry.speed}</td>
                </tr>
                <tr>
                    <th>Попыток</th>
                    <td>{data.inquiry.attempts}</td>
                </tr>
            </table> */}
        </>
    )
}
export default GibddTable