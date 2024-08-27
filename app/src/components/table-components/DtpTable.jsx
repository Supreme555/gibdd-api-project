import React from 'react'


function DtpTable({data}) {
    console.log('DtpTable')
    console.log(data)
    if (data.count === 0) {
        return (
            <>
                <h1>Информация о ДТП</h1>
                <h2>{data.message}</h2>
            </>
        );
    }
    return (
        <>
            <h1>Информация о ДТП</h1>

            {/* Итерация по массиву records */}
            {data.records.map((record, index) => (
                <table key={index}>
                    <tbody>
                        <tr>
                            <th>Номер ДТП</th>
                            <td>{record.num}</td>
                        </tr>
                        <tr>
                            <th>Дата ДТП</th>
                            <td>{record.AccidentDateTime}</td>
                        </tr>
                        <tr>
                            <th>Повреждения ТС</th>
                            <td>{record.VehicleDamageState}</td>
                        </tr>
                        <tr>
                            <th>Номер инцидента</th>
                            <td>{record.AccidentNumber}</td>
                        </tr>
                        <tr>
                            <th>Тип ДТП</th>
                            <td>{record.AccidentType}</td>
                        </tr>
                        <tr>
                            <th>Марка ТС</th>
                            <td>{record.VehicleMark}</td>
                        </tr>
                        <tr>
                            <th>Год выпуска ТС</th>
                            <td>{record.VehicleYear}</td>
                        </tr>
                        <tr>
                            <th>Место ДТП</th>
                            <td>{record.AccidentPlace}</td>
                        </tr>
                        <tr>
                            <th>Модель ТС</th>
                            <td>{record.VehicleModel}</td>
                        </tr>
                        <tr>
                            <th>Владелец</th>
                            <td>{record.OwnerOkopf}</td>
                        </tr>
                        <tr>
                            <th>Регион владения</th>
                            <td>{record.RegionName}</td>
                        </tr>
                        <tr>
                            <th>Карта нанесенного ущерба</th>
                            <td><a href={record.DamagePointsSVG} target="_blank" rel="noopener noreferrer">Открыть карту ущерба</a></td>
                        </tr>
                        <tr>
                            <th>Изображение нанесенного ущерба</th>
                            {record.DamagePointsIMG === null ? <td><a href={record.DamagePointsIMG} target="_blank" rel="noopener noreferrer">Открыть изображение ущерба (действует 15 минут)</a></td> : <td>Нету</td>}
                        </tr>
                        <tr>
                            <th>Карта нанесенного ущерба + описание</th>
                            <td><a href={record.DamagePointsSVGdesc} target="_blank" rel="noopener noreferrer">Открыть карту ущерба с описанием</a></td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </>
    )
}
export default DtpTable