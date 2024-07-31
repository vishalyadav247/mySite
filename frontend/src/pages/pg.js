import React from 'react';
import HeaderDiv from '../components/HeaderDiv';
import Room from '../components/pgComponents/room';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Pg() {
    const roomObj = [
        {
            room: "Room 1",
            name: "vishal yadav",
            phone: "7669664266",
        },
        {
            room: "Room 2",
            name: "vishal yadav",
            phone: "7669664266",
        },
        {
            room: "Room 3",
            name: "vishal yadav",
            phone: "7669664266",
        },
        {
            room: "Room 4",
            name: "vishal yadav",
            phone: "7669664266",
        },
        {
            room: "Room 5",
            name: "vishal yadav",
            phone: "7669664266",
        },
        {
            room: "Room 6",
            name: "vishal yadav",
            phone: "7669664266",
        },
        {
            room: "Room 7",
            name: "vishal yadav",
            phone: "7669664266",
        },
        {
            room: "Room 8",
            name: "vishal yadav",
            phone: "7669664266",
        },
        {
            room: "Room 9",
            name: "vishal yadav",
            phone: "7669664266",
        }
    ]
    return (
        <>
            <HeaderDiv />
            <section style={{ backgroundColor: "#e0e0e0" }}>
                <div className='allRooms siteWidth'>
                    <div>
                        <Button variant="outlined"><Link to="/addRoom">Add Room</Link></Button>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "15px",marginTop:"30px" }}>
                        {roomObj.map((element) => (<Room roomName={element.room} roomUser={element.name} roomUserPhone={element.phone} />))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pg;
