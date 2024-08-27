import React from 'react'

function RestrictTable({data}) {
    console.log('RestrictTable')
    console.log(data)
    if (data.count === 0) {
        return (
            <>
                <h1>Информация о штрафе</h1>
                <h2>{data.message}</h2>
            </>
        );
    }
    return (
        <>
            <h1>Информация о штрафе</h1>

            {/* Итерация по массиву records */}
            {data.records.map((record, index) => (
                <table key={index}>
                    <tbody>
                        <tr>
                            <th>Порядковый номер штрафа</th>
                            <td>{record.num}</td>
                        </tr>
                        <tr>
                            <th>Регион</th>
                            <td>{record.regname}</td>
                        </tr>
                        <tr>
                            <th>Основание ограничения</th>
                            <td>{record.osnOgr}</td>
                        </tr>
                        <tr>
                            <th>Ключ ГИБДД</th>
                            <td>{record.gid}</td>
                        </tr>
                        <tr>
                            <th>Год транспортного средства</th>
                            <td>{record.tsyear}</td>
                        </tr>
                        <tr>
                            <th>VIN транспортного средства</th>
                            <td>{record.tsVIN}</td>
                        </tr>
                        <tr>
                            <th>Дата наложения ограничения</th>
                            <td>{record.dateogr}</td>
                        </tr>
                        <tr>
                            <th>Вид ограничения</th>
                            <td>{record.ogrkodinfo}</td>
                        </tr>
                        <tr>
                            <th>Марка (модель) ТС</th>
                            <td>{record.tsmodel}</td>
                        </tr>
                        <tr>
                            <th>Номер кузова</th>
                            <td>{record.tsKuzov}</td>
                        </tr>
                        <tr>
                            <th>Срок окончания ограничения</th>
                            <td>{record.dateadd}</td>
                        </tr>
                        <tr>
                            <th>Телефон инициатора</th>
                            <td>{record.phone}</td>
                        </tr>
                        <tr>
                            <th>Кем наложено</th>
                            <td>{record.divtypeinfo}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </>
    )
}
export default RestrictTable