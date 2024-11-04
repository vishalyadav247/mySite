import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { RoomContext } from '../../useContext/roomContext';
import RoomInfo from './roomInfo';
import RoomRent from './roomRent';
import RoomElectricity from './roomElectricity';
import { Box } from '@mui/material';

const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function RoomDetails() {

  const { roomName } = useParams();
  const {allRooms} = useContext(RoomContext);
  const [guest, setGuest] = useState({});
  const [room, setRoom] = useState({});
  const [isVisible, setIsVisible] = useState('roomInfo');

  useEffect(()=>{
    const matchedRoom = allRooms.find(room => room.roomName === roomName.replace("_", " "));
    setRoom(matchedRoom);
  },[])
  // First useEffect: Set room when allRooms or roomName changes
  useEffect(() => {
    console.log('che', room)
  }, [room]);

  // Second useEffect: Fetch guest data when the room changes
  useEffect(() => {
    if (room && room.currentGuest) {
      const getGuest = async () => {
        const payload = {
          currentGuest: room.currentGuest
        };
        const response = await axios.post(`${serverUrl}/api/get-guest`, payload, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        setGuest(response.data.guest);
      };
      getGuest();
    }
  }, [room]);

  const detailTab = {
    margin: "0",
    padding: "8px 10px",
    borderBottom: "2px solid #fff",
    cursor: "pointer"
  }

  return (
    <>
      <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr", height: "calc(100vh - 150px)", gap: "20px" }}>
        <Box className='roomDetails' sx={{ display: "grid", gridTemplateColumns: "180px auto", gap: "5px" }}>
          <Box sx={{ background: 'rgb(234 234 234)' }}>
            <p className={isVisible === 'roomInfo' ? 'tabActive' : ''} style={detailTab} onClick={() => setIsVisible('roomInfo')}>Room Info</p>
            <p className={isVisible === 'rentDetails' ? 'tabActive' : ''} style={detailTab} onClick={() => setIsVisible('rentDetails')}>Rent Details</p>
            <p className={isVisible === 'electricityDetails' ? 'tabActive' : ''} style={detailTab} onClick={() => setIsVisible('electricityDetails')}>Electricity Details</p>
          </Box>
          <div>
            {isVisible === 'roomInfo' && <RoomInfo room={room} guest={guest} />}
            {isVisible === 'rentDetails' && <RoomRent room={room} guest={guest} />}
            {isVisible === 'electricityDetails' && <RoomElectricity room={room} guest={guest} />}
          </div>
        </Box>
        <Box sx={{ border: "1px solid #000" }}>

        </Box>
      </Box>
    </>
  );
}
