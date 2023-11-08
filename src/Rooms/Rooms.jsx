import { useContext, useState } from "react";
import RoomsCard from "./RoomsCard";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../Provider/AuthProvider";

const Rooms = () => {
  //   const [roomData, setRoomData] = useState();
  const [price, setPrice] = useState('');
  const { loading } = useContext(AuthContext);
  const axios = useAxios();

  const getRooms = async () => {
    console.log(price);
    const res = await axios.get(`/room?sortField=price&sortOrder=${price}`);

    return res;
  };

  const { data,
     isLoading, 
     isError,
      error }
       = useQuery({
    queryKey: ['room', price],
    queryFn: getRooms,
  });

  console.log(data);

  if (isLoading) {
    return loading;
  }
  if (isError) {
    return 
  }

  console.log(price);

  return (
    <div className="text-center mt-10 ">
      <h2 className="text-amber-800 text-2xl  font-serif">“Our Luxury Rooms & Suits” </h2>
      <p className="text-md w-full md:w-1/2 mx-auto mb-5">
        Dedicated To Providing Our Guests With The Exceptional Services. Our
        Timeless Hotel Evokes A Unique Sense Of Understand Elegence Of Modern
        Glamour That Can Only Be Found In Our Guest Rooms. Our Roomes Offer All
        The Luxury And Comforts You would Expect -And You would Only Dream Of
      </p>
      <div className="form-control w-52 mx-auto mb-2">
        {/* <label className="label" >
                    <span className="label-text">Price</span>
                </label> */}
        <select
          className="input input-bordered"
          onChange={(e) => setPrice(e.target.value)}
         
        >
          <option disabled selected>
            Choose One
          </option>
          <option value="asc">Price low to high</option>
          <option value="desc">Price high to low</option>
        </select>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl mx-auto px-5">
        {data?.data?.map((rooms) => (
          <RoomsCard key={rooms._id} rooms={rooms}></RoomsCard>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
