import React from 'react';
import { readDate } from '../../services/functions';

function RoomRent({ room, guest }) {
    const rentBills = room.rentBills;
    console.log(rentBills)
    return (
        <table className='roomDetailsTable'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Guest</th>
                    <th>Amt (Rs)</th>
                </tr>
            </thead>
            <tbody>
                {rentBills.map( (bill,index) => (
                    <tr key={index}>
                        <td>{readDate(bill.date)}</td>
                        <td>{readDate(bill.from)}</td>
                        <td>{readDate(bill.to)}</td>
                        <td>{bill.guest}</td>
                        <td>{bill.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default RoomRent
