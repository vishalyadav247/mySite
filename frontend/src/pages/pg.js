import React from 'react';
import { Button } from '@mui/material'
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

export default function Pg() {

    const navigate = useNavigate();

    return (
        <>
            <section>
                <div className='pgWrapper' style={{padding:'0 10px'}}>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "10px",background:"rgb(235, 236, 237)",padding:"8px 5px" }}>
                        <HomeIcon fontSize='large' onClick={(e) => navigate('/')} sx={{ cursor: "pointer" }} />
                        <Button size="medium" variant="outlined" sx={{ textTransform: "capitalize" }} onClick={() => navigate('/pg/allRooms')}>All Rooms</Button>
                        <Button size="medium" variant="outlined" sx={{ textTransform: "capitalize" }} onClick={() => navigate('/pg/allGuests')}>All Guests</Button>
                        <Button size="medium" variant="outlined" sx={{ textTransform: "capitalize" }} onClick={() => navigate('/pg/add-room')}>Add New Room</Button>
                    </div>
                    <Outlet />
                </div>
            </section>
        </>
    )
}

