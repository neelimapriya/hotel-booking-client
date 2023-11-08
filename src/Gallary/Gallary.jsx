import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
import cover from '../assets/6970138.jpg'
import { Helmet } from "react-helmet";

const Gallary = () => {
    const [photos, setPhotos]=useState()
    useEffect(()=>{
        fetch('http://localhost:5000/photo')
        .then(res=>res.json())
        .then(data=>setPhotos(data))
    },[])
    return (
        <div>
             <Helmet>
        <title>Lartisien | Gallery</title>
      </Helmet>
            <div className=" ">
                <img className="w-screen h-[400px]" src={cover} alt="" />
                <div className="   flex items-center justify-center  ">
                <h2 className="text-4xl justify-center font-serif font-bold bg-black w-full mx-auto flex text-yellow-600 py-2">Gallery Of LARTISIEN</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {
                photos?.map(photo=><GalleryCard key={photo._id} photo={photo}></GalleryCard>)
            }
            </div>
        </div>
    );
};

export default Gallary;