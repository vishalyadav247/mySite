import React, { useEffect } from 'react';
import HeaderDiv from '../components/HeaderDiv';
import Room from '../components/pgComponents/room';
import { TextField, Box, Button } from '@mui/material'
import axios from 'axios';
import RoomDetails from '../components/pgComponents/roomDetails';
import Checkin from '../components/pgComponents/checkin';

function Pg() {

    const [activeTab, setActiveTab] = React.useState('allRooms');
    const [selectedRoom, setSelectedRoom] = React.useState(null);
    const [allRooms, setAllRooms] = React.useState([]);

    const serverUrl = process.env.REACT_APP_SERVER_URL;
    useEffect(() => {
        const fetchAllRoomDetails = async () => {
            try {
                let response = await axios(`${serverUrl}/api/get-allRooms`);
                if (response.status == 200) {
                    console.log(response.data.rooms)
                    setAllRooms(response.data.rooms)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllRoomDetails();
    }, [activeTab])
    // useEffect(() => {

    // }, [allRooms])

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
            <HeaderDiv />
            <section style={{ backgroundColor: "#e0e0e0" }}>

                <div className='siteWidth pgWrapper'>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                        <Button size="medium" variant={activeTab === 'allRooms' || activeTab === 'roomDetails' ? "contained" : "outlined"} sx={{ textTransform: "capitalize" }} onClick={() => setActiveTab('allRooms')}>
                            All Rooms
                        </Button>
                        <Button size="medium" variant={activeTab === 'allGuests' ? "contained" : "outlined"} sx={{ textTransform: "capitalize" }} onClick={() => setActiveTab('allGuests')}>
                            All Guests
                        </Button>
                        <Button size="medium" variant={activeTab === 'addRoom' ? "contained" : "outlined"} sx={{ textTransform: "capitalize" }} onClick={() => { setActiveTab('addRoom'); }}>
                            Add Room
                        </Button>
                    </div>
                    {activeTab === 'allRooms' ? (
                        <div className='allRooms'>
                            <div>
                                {allRooms.map((element, index) => (<Room
                                    key={index}
                                    room={element}
                                    onClick={
                                        element.currentGuest
                                            ? () => {
                                                setActiveTab('roomDetails');
                                                setSelectedRoom(element);
                                            }
                                            : () => {
                                                setActiveTab('roomCheckin');
                                                setSelectedRoom(element);
                                            }
                                    }
                                />))}
                            </div>
                        </div>
                    ) : ""}
                    {activeTab === 'roomDetails' && (
                        <RoomDetails room={selectedRoom} />
                    )}
                    {activeTab === 'roomCheckin' && (
                        <>
                            <Checkin room={selectedRoom} />
                        </>
                    )}
                    {activeTab === 'allGuests' ? (
                        <div className='allGuests'>
                            <h1>
                                All guests
                            </h1>
                        </div>
                    ) : ""}
                    {activeTab === 'addRoom' ? (
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
                    ) : ""}
                </div>
            </section>
        </>
    )
}

export default Pg; 
