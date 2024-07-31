import React from 'react'
import { useParams } from 'react-router-dom';

function RoomDetails() {

const path = useParams();
console.log(path)


  return (
    <div>
     hi
    </div>
  )
}

export default RoomDetails;
