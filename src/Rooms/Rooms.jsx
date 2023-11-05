import { useEffect, useState } from "react";
import RoomsCard from "./RoomsCard";



const Rooms = () => {
    const [roomData, setRoomData]=useState()
    useEffect(()=>{
        fetch('http://localhost:5000/room')
        .then(res=>res.json())
        .then(data=>setRoomData(data))
    },[])
    return (
        <div>
            <h2>Rooms </h2>
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl mx-auto">
                {
                    roomData?.map(rooms=><RoomsCard key={rooms._id} rooms={rooms}></RoomsCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;