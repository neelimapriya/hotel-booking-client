
import { useLoaderData } from "react-router-dom";
import moment from 'moment';


import { DatePicker } from 'antd';
import { useContext, useEffect, useState } from "react";
import RoomReview from "./RoomReview";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import SingleRoomReview from "./SingleRoomReview";

const RoomDetails = () => {
  const {User}=useContext(AuthContext)
    const email=User?.email;
  const { RangePicker } = DatePicker;

  const [checkin, setCheckin]=useState()
  const [checkout, setCheckout]=useState()

  const loadedData = useLoaderData();
  // console.log(loadedData);
  const {
    availability,
    description,
    img1,
    img2,
    img3,
    price,
    price2,
    size,
    title,
    code
  } = loadedData;
 

  console.log(code)
  console.log(checkout)
  const filterDate=(dates)=>{
    console.log(moment(dates[0]).format('DD-MM-YYYY'))
    console.log(moment(dates[1]).format('DD-MM-YYYY'))
    setCheckin(moment(dates[0]).format('DD-MM-YYYY'))
    setCheckout(moment(dates[1]).format('DD-MM-YYYY'))
  }
const object={img1, price,size, title,checkin, checkout,email, code}
  const handleAddBooking=()=>{
    fetch('http://localhost:5000/api/v1/user/create-bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(object)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId && checkin && checkout){
                Swal.fire(
                    'Booked!',
                    'Room Booked successfully!',
                    'success'
                  )
                 
            }else{
              Swal.fire(
                'Oopps!',
                'You Have to select Date!',
                'error'
              )
            }
           
        })

       

  }

   

  return (
    <div className="mt-5 mb-20">
        <h2 className="  text-3xl text-center font-serif  text-orange-700">{title}</h2>
        <hr  className="max-w-[250px] mx-auto "/>
        
      <div className=" mt-5">
       
       <div className="w-3/4 mx-auto grid md:grid-cols-3 gap-5">
       <img className="md:h-72" src={img1} alt="" />
       <img className="md:h-72" src={img2} alt="" />
       <img className="md:h-72" src={img3} alt="" />
       </div>
        {/* date */}
        <div className="grid mt-3 items-center justify-center  ">
      <div className="outline grid-cols-3">
        <div className="flex justify-center gap-8 text-lg font-serif bg-orange-800 text-white">
          <p>Check In</p>
          <p>Check Out</p>
        </div>
      <RangePicker  format='DD-MM-YYYY' onChange={filterDate} />
      </div>
        </div>

        <div className="grid md:grid-cols-3 max-w-6xl mx-auto">
        <div className="mt-5">
            <h2 className="text-2xl font-serif text-center text-orange-700 mb-2">ROOM Description</h2>
            <p className="w-2/3 mx-auto ">{description}</p>
        </div>
        <div className="mt-5">
            <h2  className="text-2xl font-serif text-center text-orange-700 mb-2">ROOM FACILITIES</h2>
            <div className="grid grid-cols-2 text-center">
                <p>-Aircondition</p>
                <p>-Safety Vault</p>
                <p>-Coffee and tea</p>
                <p>-Flat screen TV</p>
                <p>-Free Wi-Fi</p>
                <p>-Hair dryer</p>
                <p>-Bathroom amenities</p>
                <p>-Mini Bar</p>
            </div>
        </div>
        <div className="mt-5 text-center">
        <h2 className="text-2xl font-serif text-center text-orange-700 mb-2">Room Details</h2>
        <p className=" text-lg">Price per night </p>
          <p className="text-lg">
            Before: ${" "}
            <span
              className="text-orange-600 line-through"
            >
              {price2}
            </span>
          </p>
          <p className="text-lg">After: $ <span className="text-orange-600">{price}</span></p>
          <p className="text-lg">Room Size: <span className="text-orange-600">{size}</span></p>
          <p className="text-lg">Available: <span className="text-orange-600">{availability}</span> Rooms</p>
        </div>
        </div>
        
      </div>
       <div className=" flex justify-center mx-auto">
       <button  onClick={handleAddBooking} className="btn bg-black text-white hover:bg-slate-600 w-2/4 mx-auto">Book</button>
       </div>
     <RoomReview title={title} code={code}></RoomReview>
    
    </div>
  );
};

export default RoomDetails;
