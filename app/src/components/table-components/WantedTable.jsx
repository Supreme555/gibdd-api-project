import React, { useState, useEffect } from 'react'

function WantedTable({data}) {
    console.log('WantedTable')
    console.log(data)
    if (data.count === 0) {
        return (
            <>
                <h1>Информация о транспортном средстве в розыске</h1>
                <h2>{data.message}</h2>
            </>
        );
    }
    return (
        <>
            <h1>Информация о транспортном средстве в розыске</h1>

            {data.records.map((record, index) => (
                <table key={index}>
                    <tbody>
                        <tr>
                            <th>Порядковый номер</th>
                            <td>{record.num}</td>
                        </tr>
                        <tr>
                            <th>Регион инициатора розыска</th>
                            <td>{record.w_reg_inic}</td>
                        </tr>
                        <tr>
                            <th>Номер двигателя</th>
                            <td>{record.w_dvig}</td>
                        </tr>
                        <tr>
                            <th>Марка (модель) ТС</th>
                            <td>{record.w_model}</td>
                        </tr>
                        <tr>
                            <th>Государственный номер</th>
                            <td>{record.w_reg_zn}</td>
                        </tr>
                        <tr>
                            <th>Шасси</th>
                            <td>{record.w_shassi}</td>
                        </tr>
                        <tr>
                            <th>Дата постоянного учета в розыске</th>
                            <td>{record.w_data_pu}</td>
                        </tr>
                        <tr>
                            <th>VIN ТС</th>
                            <td>{record.w_vin}</td>
                        </tr>
                        <tr>
                            <th>Год ТС</th>
                            <td>{record.w_god_vyp}</td>
                        </tr>
                        <tr>
                            <th>Вид участника</th>
                            <td>{record.w_vid_uch}</td>
                        </tr>
                        <tr>
                            <th>Уникальный идентификатор</th>
                            <td>{record.w_un_gic}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </>
    )
}
export default WantedTable