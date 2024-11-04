import React from 'react'
import { TextField, Box, Button } from '@mui/material'
import axios from 'axios';
const serverUrl = process.env.REACT_APP_SERVER_URL;


function AddRoom() {
    const createRoom = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);

        const payload = {
            roomName: data.get('roomName').trim() // Ensure the name is trimmed
        };

        try {
            let response = await axios.post(`${serverUrl}/api/add-room`, payload, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });

            // Check response status and handle accordingly
            if (response.status === 409) {
                alert(response.data.message || 'Room already exists');
            } else if (response.status === 201) {
                form.reset(); // Reset the form if the room is successfully added
                alert(response.data.message || 'Room successfully added');
            }

        } catch (error) {
            console.error('An error occurred:', error);

            // Handle different types of errors
            if (error.response) {
                // Server responded with a status other than 2xx
                alert(error.response.data.message || 'An error occurred while creating the room.');
            } else if (error.request) {
                // Request was made but no response received
                alert('No response received from the server.');
            } else {
                // Something else happened
                alert('An error occurred while creating the room. Please try again.');
            }
        }
    };

    return (
        <>
            <div>
                <p>Add new room</p>
                <Box component="form" noValidate sx={{ mt: 1, display: "flex", flexDirection: "column", maxWidth: "400px" }} onSubmit={createRoom}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="roomName"
                        label="Room Name"
                        name="roomName"
                        autoComplete="roomName"
                        autoFocus
                        size='small'
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Room
                    </Button>

                </Box>
            </div>
        </>
    )
}

export default AddRoom;
