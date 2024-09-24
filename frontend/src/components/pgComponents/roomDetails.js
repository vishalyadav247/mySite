import * as React from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function RoomDetails({room}) {

  const serverUrl = process.env.REACT_APP_SERVER_URL;
    const [guest, setGuest] = useState({});
    useEffect(() => {
        const getGuest = async () => {
            const payload = {
                currentGuest: room.currentGuest
            };
            const response = await axios.post(`${serverUrl}/api/get-guest`, payload, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            setGuest(response.data.guest)
        }
        getGuest()
    }, [])

  const path = useParams();
  // console.log(path)
  const [activeTab1, setActiveTab1] = React.useState('guestInfo');



  return (
    <>
      <div className='roomDetails'>
        <h1>{room.roomName}</h1>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <Button size="small" variant={activeTab1 === 'guestInfo'?"contained":"outlined"} sx={{ textTransform: "capitalize" }} onClick={() => setActiveTab1('guestInfo')}>
            Guest Info
          </Button>
          <Button size="small" variant={activeTab1 === 'rentBills'?"contained":"outlined"} sx={{ textTransform: "capitalize" }} onClick={() => setActiveTab1('rentBills')}>
            Rent Bills
          </Button>
          <Button size="small" variant={activeTab1 === 'electricityBills'?"contained":"outlined"} sx={{ textTransform: "capitalize" }} onClick={() => setActiveTab1('electricityBills')}>
            Electricity Bills
          </Button>
        </div>


        {activeTab1 === 'guestInfo' && (
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
              <td>{guest.checkIn}</td>
            </tr>
            <tr>
              <th>Total Duration</th>
              <td></td>
            </tr>
            <tr>
              <th>Electricity Paid </th>
              <td></td>
            </tr>
            <tr>
              <th>Rent Paid</th>
              <td></td>
            </tr>
          </table>
        )}

        {activeTab1 === 'rentBills' && (
             <table className='roomDetailsTable'>
             <thead>
               <tr>
                 <th>Month</th>
                 <th>Guest</th>
                 <th>Amt (Rs)</th>
               </tr>
             </thead>
             <tbody>
             <tr>
               <td>August 2024</td>
               <td>Vishal yadav</td>
               <td>2000</td>
             </tr>
             <tr>
               <td>July 2024</td>
               <td>Vishal yadav</td>
               <td>2000</td>
             </tr>
             <tr>
               <td>June 2024</td>
               <td>Vishal yadav</td>
               <td>2000</td>
             </tr>
             </tbody>
           </table>
        )}

        {activeTab1 === 'electricityBills' && (
          <table className='roomDetailsTable'>
            <thead>
              <tr>
                <th>Date (From - To)</th>
                <th>Start</th>
                <th>End</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>24/ 1 Aug - tracking</td>
              <td>320</td>
              <td>-</td>
              <td> - </td>
            </tr>
            <tr>
              <td>24/ 1 July - 31 July</td>
              <td>11</td>
              <td>320</td>
              <td>110</td>
            </tr>
            <tr>
              <td>24/ 1 June - 31 June</td>
              <td>90</td>
              <td>210</td>
              <td>120</td>
            </tr>
            </tbody>
          </table>
        )}

      </div>
    </>
  );
}
