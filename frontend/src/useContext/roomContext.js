import React,{useState, useEffect, createContext} from 'react';
import axios from 'axios';

const serverUrl = process.env.REACT_APP_SERVER_URL;
export const RoomContext = createContext();

export default function RoomProvider({children}) {

    const [allRooms, setAllRooms] = useState([]);
    const [refresh,setRefrest] = useState(false);

    const fetchAllRooms = async () => {
        try {
            let response = await axios(`${serverUrl}/api/all-rooms`);
            if (response.status === 200) {
                setAllRooms(response.data.rooms)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllRooms();
    }, [refresh])

    const refreshAllRooms = ()=>{
        setRefrest(!refresh)
    }
    return (
        <RoomContext.Provider value={{allRooms,refreshAllRooms}}>
            {children}
        </RoomContext.Provider>
    )
}
