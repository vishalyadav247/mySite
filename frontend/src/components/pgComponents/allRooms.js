import React, { useContext } from 'react';
import Room from './room';
import { RoomContext } from '../../useContext/roomContext';

function AllRooms() {

    const {allRooms} = useContext(RoomContext);

    return (
        <>
            <div className='allRooms'>
                <div>
                    {allRooms.map((room, index) => (
                        <Room key={index} room={room} />)
                    )}
                </div>
            </div>
        </>
    )
}

export default AllRooms;
