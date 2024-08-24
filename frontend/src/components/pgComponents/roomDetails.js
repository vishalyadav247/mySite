import * as React from 'react';
import { useParams } from 'react-router-dom';
import HeaderDiv from '../HeaderDiv';
import Button from '@mui/material/Button';


export default function RoomDetails() {

  const path = useParams();
  console.log(path)
  const [activeTab, setActiveTab] = React.useState('guestInfo');

  const details = {
    room: "Room 1",
    guest: "vishal yadav",
    phone: "7669664266",
    adhaarID: "754086896355",
    checkinDate: "15 August 2024",
    guestImg: "/static/media/weare.c205013abd053522770a.jpg",
    totalDuration: "1 year 2 months",
    payments: "clear",
    jobProfile: "Contractor",
    workPlace: "DSM Sugar Mill",
    lastPayment: "2000",
    lastElectricityReading: "210"
  }


  return (
    <>
      <HeaderDiv />
      <div className='roomDetails'>
        <div className='roomDetailHeader'>
          <h1 style={{ margin: "0" }}>{details.room}</h1>
          <img src={details.guestImg} alt={'Guest'} />
        </div>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <Button size="small" variant="outlined" sx={{ textTransform: "capitalize" }} onClick={() => setActiveTab('guestInfo')}>
            Guest Info
          </Button>
          <Button size="small" variant="outlined" sx={{ textTransform: "capitalize" }} onClick={() => setActiveTab('rentBills')}>
            Rent Bills
          </Button>
          <Button size="small" variant="outlined" sx={{ textTransform: "capitalize" }} onClick={() => setActiveTab('electricityBills')}>
            Electricity Bills
          </Button>
        </div>


        {activeTab === 'guestInfo' && (
          <table className='roomDetailsTable'>
            <tr>
              <th>Guest Name</th>
              <td>{details.guest}</td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>{details.phone}</td>
            </tr>
            <tr>
              <th>Job Profile</th>
              <td>{details.jobProfile}</td>
            </tr>
            <tr>
              <th>Work Place</th>
              <td>{details.workPlace}</td>
            </tr>
            <tr>
              <th>Adhaar ID</th>
              <td>{details.adhaarID}</td>
            </tr>
            <tr>
              <th>Check-In Date</th>
              <td>{details.checkinDate}</td>
            </tr>
            <tr>
              <th>Total Duration</th>
              <td>{details.totalDuration}</td>
            </tr>
            <tr>
              <th>Electricity Paid </th>
              <td>24 August (320 Rs)</td>
            </tr>
            <tr>
              <th>Rent Paid</th>
              <td>August (2000 Rs)</td>
            </tr>
          </table>
        )}

        {activeTab === 'rentBills' && (
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

        {activeTab === 'electricityBills' && (
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
              <td>{details.lastElectricityReading}</td>
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
