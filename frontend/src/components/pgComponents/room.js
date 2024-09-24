import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Person2Icon from '@mui/icons-material/Person2';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Room({ room, onClick }) {
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
    return (

        <Card sx={{ height: "100%" }} onClick={onClick}>

            <div style={{ padding: "10px 13px 13px 12px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "175px" }}>
                <Typography sx={{ m: 0, mb: 2, display: "flex", justifyContent: "space-between" }}>{room.roomName}{room.currentGuest ? "" : <span style={{ fontSize: "14px", marginLeft: "20px", backgroundColor: "#00c82b", padding: "2px 7px 4px 7px", borderRadius: "3px", color: "#fff" }}>Available</span>}</Typography>
                {room.currentGuest ? (
                    <>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "10px" }} >
                            <Typography sx={{ display: "flex", gap: "10px", alignItems: "center" }} style={{ fontSize: "14px" }}><Person2Icon /> {guest.guestName} </Typography>
                            <Typography sx={{ display: "flex", gap: "10px", alignItems: "center" }} style={{ fontSize: "14px" }}> Rent Paid - </Typography>
                            <Typography sx={{ display: "flex", gap: "10px", alignItems: "center" }} style={{ fontSize: "14px" }}>
                                <LocalPhoneIcon />
                                <a href={`tel:${guest.phone}`} style={{ textDecoration: "none", color: "inherit" }} onClick={(e) => { e.preventDefault() }}>
                                    {guest.phone}
                                </a>
                            </Typography>
                            <Typography sx={{ display: "flex", gap: "10px", alignItems: "center" }} style={{ fontSize: "14px" }}> Electricity Paid - </Typography>
                        </div>
                        <div style={{ display: "flex", marginTop: "25px", gap: "10px" }}>
                            <Button size="small" variant="outlined" sx={{}} >Pay Rent</Button>
                            <Button size="small" variant="outlined" sx={{}} >Pay Electricity</Button>
                            <Button size="small" variant="outlined" sx={{}} >Check-Out</Button>
                        </div>
                    </>
                ) : (
                    <>
                        <Button size="small" variant="outlined" sx={{ width: "fit-content" }}>Check-in</Button>
                    </>
                )}
            </div>

        </Card>
    );
}
