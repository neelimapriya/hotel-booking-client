import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxios from "../hooks/useAxios";
import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const RoomDetails = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
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
  } = loadedData;

  return (
    <div className="my-5">
        <h2 className="  text-3xl text-center font-serif  text-orange-700">{title}</h2>
        <hr  className="max-w-[250px] mx-auto "/>
        
      <div className=" mt-5">
       
       <div className="w-3/4 mx-auto grid md:grid-cols-3 gap-5">
       <img className="md:h-72" src={img1} alt="" />
       <img className="md:h-72" src={img2} alt="" />
       <img className="md:h-72" src={img3} alt="" />
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
    </div>
  );
};

export default RoomDetails;
