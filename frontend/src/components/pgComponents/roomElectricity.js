import React from 'react';
import { readDate } from '../../services/functions';

function RoomElectricity({room, guest}) {
    const electricityBills = room.electricityBills;
    return (
        <table className='roomDetailsTable'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Reading Start</th>
                    <th>Reading End</th>
                    <th>Guest</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {electricityBills && electricityBills.map((bill, index) => (
                    <tr>
                        <td>{readDate(bill.date)}</td>
                        <td>{readDate(bill.from)}</td>
                        <td>{readDate(bill.to)}</td>
                        <td>{bill.startReading}</td>
                        <td>{bill.endReading}</td>
                        <td>{bill.guest}</td>
                        <td>{bill.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default RoomElectricity
