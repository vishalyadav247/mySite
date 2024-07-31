import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import gateImg from '../../images/gate.webp';
import { Link } from 'react-router-dom';

export default function Room({ roomName, roomUser, roomUserPhone }) {
    return (
        <Link to={`/pg/${roomName.replace(" ","_")}`} >
            <Card sx={{ display: "grid", gridTemplateColumns: "1fr 3fr", backgroundColor: "#9acce3" }}>
                <CardMedia
                    image={gateImg}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {roomName}
                    </Typography>
                    <Typography color="text.secondary" style={{ marginBottom: "3px" }}>
                        {roomUser}
                    </Typography>
                    <Typography color="text.secondary">
                        {roomUserPhone}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}
