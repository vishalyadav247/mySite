import * as React from 'react';
import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Person2Icon from '@mui/icons-material/Person2';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import PayRent from './payRent';
import PayElectricity from './payElectricity';
import { readDate } from '../../services/functions';
import axios from 'axios';
import { RoomContext } from '../../useContext/roomContext';
import { toast } from 'react-toastify';

const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function Room({ room }) {

    const navigate = useNavigate();
    const { refreshAllRooms } = useContext(RoomContext);
    const roomWrapper = {
        padding: "10px 13px 13px 12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "187px",
        border: "1px solid rgb(190 191 193)"
    }
    const availableBadge = {
        fontSize: "14px",
        backgroundColor: "#00c82b",
        padding: "2px 7px 4px 7px",
        borderRadius: "3px", color: "#fff"
    }
    const roomBadge = {
        fontSize: "14px",
        backgroundColor: "tomato",
        padding: "2px 7px 4px 7px",
        borderRadius: "3px", color: "#fff"
    }

    const checkout = async()=>{
        try {
            const payload = {
                currentGuest:room.currentGuest,
                roomName:room.roomName
            }
            const response = await axios.put(`${serverUrl}/api/guest-checkout`,payload,{
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            console.log(response)
            toast.success('Checkout Successfully.')
            refreshAllRooms()
        } catch (error) {
            console.log('error in checkout',error)
        }

    }


    return (

        <div style={{ height: "100%", position: "relative" }}>
            <div style={roomWrapper}>
                <Typography onClick={() => {
                    navigate(`/pg/allRooms/${(room.roomName).replace(" ", "_")}`)
                }} sx={{ m: 0, mb: 2, display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                    {room.currentGuest ? (
                        <span style={roomBadge}>{room.roomName}</span>
                    ) : (
                        <span style={availableBadge}>Available</span>
                    )}
                </Typography>
                {room.currentGuest ? (
                    <>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "10px" }} >
                            <Typography sx={{ display: "flex", gap: "10px", alignItems: "center" }} style={{ fontSize: "14px" }}>
                                <Person2Icon /> {room.currentGuest}
                            </Typography>
                            <Typography sx={{ display: "flex", gap: "10px", alignItems: "center" }} style={{ fontSize: "14px",textTransform:'capitalize' }}>
                                Rent Paid - {room.rentBills && room.rentBills.length > 0 ? readDate(room.rentBills[room.rentBills.length - 1].to) : 'N/A'}
                            </Typography>
                            <Typography sx={{ display: "flex", gap: "10px", alignItems: "center" }} style={{ fontSize: "14px" }}>
                                <LocalPhoneIcon />
                                <a href={`tel:${room.guestContact}`} style={{ textDecoration: "none", color: "inherit" }} onClick={(e) => { e.preventDefault() }}>
                                    {room.guestContact}
                                </a>
                            </Typography>
                            <Typography sx={{ display: "flex", gap: "10px", alignItems: "center" }} style={{ fontSize: "14px" }}>
                                Electricity Paid - {room.electricityBills && room.electricityBills.length > 0 ? readDate(room.electricityBills[room.electricityBills.length - 1].to) : 'N/A'}
                            </Typography>
                        </div>
                        <div style={{ display: "flex", marginTop: "25px", gap: "10px" }}>
                            <PayRent room={room} />
                            <PayElectricity room={room}/>
                            <Button size="small" variant="outlined" onClick={checkout} sx={{}} >Check-Out</Button>
                        </div>
                    </>
                ) : (
                    <>
                        <Button size="small" variant="outlined" sx={{ width: "fit-content" }} onClick={() => navigate(`/pg/checkin/${room.roomName}`)}>
                            Check-in
                        </Button>
                    </>
                )}
            </div>

        </div>
    );
}
