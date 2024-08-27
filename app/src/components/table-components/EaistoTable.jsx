import React from 'react'

function EaistoTable({data}) {
    console.log('EaistoTable')
    console.log(data)
    if (data.count === 0) {
        return (
            <>
                <h1>Информация о документах контроля (ДК)</h1>
                <h2>{data.message}</h2>
            </>
        );
    }
    return (
        <>
            <h1>Информация о документах контроля (ДК)</h1>
            {data.records.map((record, index) => (
                <table key={index}>
                    <tbody>
                        <tr>
                            <th>Номер записи</th>
                            <td>{record.num}</td>
                        </tr>
                        <tr>
                            <th>Дата окончания ДК</th>
                            <td>{record.dcExpirationDate}</td>
                        </tr>
                        <tr>
                            <th>Адрес выдачи ДК</th>
                            <td>{record.pointAddress}</td>
                        </tr>
                        <tr>
                            <th>ID Оператора (ОТО)</th>
                            <td>{record.operatorName}</td>
                        </tr>
                        <tr>
                            <th>Показания одометра</th>
                            <td>{record.odometerValue}</td>
                        </tr>
                        <tr>
                            <th>Номер ДК</th>
                            <td>{record.dcNumber}</td>
                        </tr>
                        <tr>
                            <th>Дата выдачи ДК</th>
                            <td>{record.dcDate}</td>
                        </tr>
                        <tr>
                            <th>VIN ТС</th>
                            <td>{record.vin}</td>
                        </tr>
                        <tr>
                            <th>Марка ТС</th>
                            <td>{record.brand}</td>
                        </tr>
                        <tr>
                            <th>Модель ТС</th>
                            <td>{record.model}</td>
                        </tr>

                    </tbody>
                </table>
            ))}
            {/* Предыдущие ДК */}
            <h2>Предыдущие ДК</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Номер ДК</th>
                        <th>Дата выдачи ДК</th>
                        <th>Дата окончания ДК</th>
                        <th>Показания одометра</th>
                    </tr>
                    {data.records.map((record, index) => (
                        <React.Fragment key={index}>
                            {record.previousDcs.map(dc => (
                                <tr key={dc.dcNumber}>
                                    <td>{dc.dcNumber}</td>
                                    <td>{dc.dcDate}</td>
                                    <td>{dc.dcExpirationDate}</td>
                                    <td>{dc.odometerValue}</td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>

        </>
    )
}
export default EaistoTable