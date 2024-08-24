import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import gateImg from '../../images/gate.webp';
import { Link } from 'react-router-dom';
import Person2Icon from '@mui/icons-material/Person2';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Button from '@mui/material/Button';

export default function Room({ roomDetails }) {
    const roomName = roomDetails.room;
    return (
        <Link to={`/pg/${(roomName).replace(" ", "_")}`} style={{ textDecoration: "none" }}>
            <Card sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 3fr" }, height: "100%" }}>

                <CardMedia
                    image={gateImg}
                    title="green iguana"
                />
                <div style={{ padding: "12px 15px 15px 14px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "165px" }}>
                    <Typography sx={{ m: 0, mb: 2, display: "flex", justifyContent: "space-between" }}>{roomDetails.room}{roomDetails.name ? "" : <span style={{ fontSize: "14px", marginLeft: "20px", backgroundColor: "#00c82b", padding: "2px 7px 4px 7px", borderRadius: "3px", color: "#fff" }}>Available</span>}</Typography>
                    {roomDetails.name ? (
                        <>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "10px" }} >
                                <Typography sx={{ display: "flex", gap: "10px", alignItems: "center" }} style={{fontSize:"14px"}}><Person2Icon /> {roomDetails.name} </Typography>
                                <Typography sx={{ display: "flex", gap: "10px", alignItems: "center" }} style={{fontSize:"14px"}}> Rent Paid - August 24</Typography>
                                <Typography sx={{ display: "flex", gap: "10px", alignItems: "center" }} style={{fontSize:"14px"}}>
                                    <LocalPhoneIcon />
                                    <a href={`tel:${roomDetails.phone}`} style={{ textDecoration: "none", color: "inherit" }} onClick={(e) => { e.preventDefault() }}>
                                        {roomDetails.phone}
                                    </a>
                                </Typography>
                                <Typography sx={{ display: "flex", gap: "10px", alignItems: "center" }} style={{fontSize:"14px"}}> Electricity Paid - 15Aug 24</Typography>
                            </div>
                            <div style={{ display: "flex", marginTop: "25px", gap: "10px" }}>
                                <Button size="small" variant="outlined" sx={{}} >Pay Rent</Button>
                                <Button size="small" variant="outlined" sx={{}} >Pay Electricity</Button>
                                <Button size="small" variant="outlined" sx={{}} >Check-Out</Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button size="small" variant="outlined" >Check-in</Button>
                        </>
                    )}
                </div>

            </Card>
        </Link>
    );
}
