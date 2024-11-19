import React, { useContext } from 'react'
import { TextField, Box, Button } from '@mui/material'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RoomContext } from '../../useContext/roomContext';

const serverUrl = process.env.REACT_APP_SERVER_URL;

function Checkin() {

    const navigate = useNavigate();
    const {refreshAllRooms} = useContext(RoomContext)

    const {roomName} = useParams();

    const createCheckin = async (event) => {
        event.preventDefault();
        const form = await event.currentTarget;
        const data = new FormData(form);
        for (let [key, value] of data.entries()) {
            console.log(`${key}: ${value}`);
        }

        const payload = {
            name:data.get('name').trim(),
            phone:data.get('phone').trim(),
            jobProfile:data.get('jobProfile').trim(),
            adhaarId:data.get('adhaarId').trim(),
            workPlace:data.get('workPlace').trim(),
            room:data.get('room').trim()
        }

        try {
            let response = await axios.post(`${serverUrl}/api/create-guest`, payload, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            // Check response status and handle accordingly
            if (response.status === 409) {
                alert(response.data.message || 'Guest already exists');
            } else if (response.status === 201) {
                form.reset(); // Reset the form if the room is successfully added
                toast.success('Checkin Successfully.')
                refreshAllRooms()
                setTimeout(() => {
                    navigate('/pg/allRooms')
                }, 1000);
            }

        } catch (error) {
            console.log('error in creating Guest', error)
        }

    }
    return (
        <div>
            <p>{roomName} - Checkin process...</p>
            <Box component="form" noValidate sx={{ mt: 1, display: "flex", flexDirection: "column", maxWidth: "400px" }} onSubmit={createCheckin}>
                <TextField
                    margin="normal"
                    required
                    size="small"
                    id="name"
                    label="Name"
                    name="name"
                    type="text"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    size="small"
                    id="password"
                    label="Phone"
                    name="phone"
                    type="phone"
                    autoComplete="current-password"
                />
                <TextField
                    margin="normal"
                    required
                    size="small"
                    id="jobProfile"
                    label="Job Profile"
                    name="jobProfile"
                    type="text"
                />
                <TextField
                    margin="normal"
                    required
                    size="small"
                    id="workPlace"
                    label="Work Place"
                    name="workPlace"
                    type="text"
                />
                <TextField
                    margin="normal"
                    required
                    size="small"
                    id="adhaarId"
                    label="Adhaar Id"
                    name="adhaarId"
                    type="text"
                />
               <TextField
                    margin="normal"
                    required
                    size="small"
                    id="room"
                    label="room"
                    name="room"
                    type="hidden"
                    value={roomName}
                    sx={{visibility:"hidden"}}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Check-In Now
                </Button>

            </Box>
        </div>
    )
}

export default Checkin;
