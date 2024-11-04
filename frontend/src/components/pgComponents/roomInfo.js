import React from 'react';
import { readDate } from '../../services/functions';

export default function RoomInfo({ room, guest }) {

    function getDuration(checkInTimestamp) {
        const checkInDate = new Date(checkInTimestamp * 1000);  // Convert timestamp to Date object
        const currentDate = new Date();  // Current date

        let years = currentDate.getFullYear() - checkInDate.getFullYear();
        let months = currentDate.getMonth() - checkInDate.getMonth();
        let days = currentDate.getDate() - checkInDate.getDate();

        // Adjust for negative days
        if (days < 0) {
            months--;
            // Get the last day of the previous month
            const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            days += lastMonth.getDate();
        }

        // Adjust for negative months
        if (months < 0) {
            years--;
            months += 12;
        }

        return `${years > 0 ? years + " year" : ''} ${months > 0 ? months + " month" : ''} ${days > 0 ? days + " days" : ''}`;
    }

    return (
        <table className='roomDetailsTable'>
            <tr>
                <th>Guest Name</th>
                <td>{guest.guestName}</td>
            </tr>
            <tr>
                <th>Phone Number</th>
                <td>{guest.phone}</td>
            </tr>
            <tr>
                <th>Job Profile</th>
                <td>{guest.jobProfile}</td>
            </tr>
            <tr>
                <th>Work Place</th>
                <td>{guest.workPlace}</td>
            </tr>
            <tr>
                <th>Adhaar ID</th>
                <td>{guest.adhaarId}</td>
            </tr>
            <tr>
                <th>Check-In Date</th>
                <td>{readDate(guest.checkIn)}</td>
            </tr>
            <tr>
                <th>Total Duration</th>
                <td>{getDuration(guest.checkIn)}</td>
            </tr>
            <tr>
                <th>Previous Rent paid</th>
                <td>{room.rentBills && room.rentBills.length > 0 ? readDate(room.rentBills[room.rentBills.length - 1].to) : 'N/A'}</td>
            </tr>
            <tr>
                <th>Previous Electricity paid </th>
                <td>{room.electricityBills && room.electricityBills.length > 0 ? readDate(room.electricityBills[room.electricityBills.length - 1].to) : 'N/A'}</td>
            </tr>

        </table>

    )
}

