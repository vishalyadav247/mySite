import React from 'react';
import HeaderDiv from '../components/HeaderDiv';
import Room from '../components/pgComponents/room';
import Button from '@mui/material/Button';


function Pg() {

    const [activeTab, setActiveTab] = React.useState('guestInfo');

    const roomObj = [
        {
            room: "Room 1",
            name: "vishal yadav",
            phone: "7669664266",
            adhaarID: "754086896355",
            guestImg: "null"
        },
        {
            room: "Room 2",
            name: "",
            phone: "",
            adhaarID: "",
            guestImg: ""
        },
        {
            room: "Room 3",
            name: "vishal yadav",
            phone: "7669664266",
            adhaarID: "754086896355",
            guestImg: "null"
        },
        {
            room: "Room 4",
            name: "vishal yadav",
            phone: "7669664266",
            adhaarID: "754086896355",
            guestImg: "null"
        },
        {
            room: "Room 5",
            name: "vishal yadav",
            phone: "7669664266",
            adhaarID: "754086896355",
            guestImg: "null"
        },
        {
            room: "Room 6",
            name: "vishal yadav",
            phone: "7669664266",
            adhaarID: "754086896355",
            guestImg: "null"
        },
        {
            room: "Room 7",
            name: "vishal yadav",
            phone: "7669664266",
            adhaarID: "754086896355",
            guestImg: "null"
        },
        {
            room: "Room 8",
            name: "vishal yadav",
            phone: "7669664266",
            adhaarID: "754086896355",
            guestImg: "null"
        },
        {
            room: "Room 9",
            name: "vishal yadav",
            phone: "7669664266",
            adhaarID: "754086896355",
            guestImg: "null"
        }
    ]
    return (
        <>
            <HeaderDiv />
            <section style={{ backgroundColor: "#e0e0e0" }}>

                <div className='siteWidth pgWrapper'>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                        <Button size="small" variant="outlined" sx={{ textTransform: "capitalize" }} onClick={() => setActiveTab('guestInfo')}>
                            All Rooms
                        </Button>
                        <Button size="small" variant="outlined" sx={{ textTransform: "capitalize" }} onClick={() => setActiveTab('rentBills')}>
                            All Guests
                        </Button>
                        <Button size="medium" variant="outlined" sx={{ textTransform: "capitalize" }} onClick={() => setActiveTab('electricityBills')}>
                            Add Room
                        </Button>
                    </div>
                    <div className='allRooms'>
                        <div>
                        {roomObj.map((element) => (<Room roomDetails={element} />))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pg; 
