import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import SingleRoomReview from "./SingleRoomReview";



const RoomReview = ({code, title}) => {
  // const { carts } = useContext(CartContext)
 
  const [carts, setCarts] = useState([]);
  const { User } = useContext(AuthContext);
  const email = User?.email;
  const name =User?.displayName;
  const photo =User?.photoURL;


  useEffect(() => {
    fetch(`http://localhost:5000/user/bookings?email=${email}`)
      .then((response) => response.json())
      .then((data) => setCarts(data));
  }, [email]);


  
  const handleSubmitReview=(e)=>{
    e.preventDefault();
    const form = e.target;
    const text = form.text.value;
    const rating = form.rating.value;
    const object ={text, rating,code,photo,name, title}
    console.log(object)

    fetch('http://localhost:5000/review',{
      method:'POST',
      headers:{
          'content-type':'application/json'
      },
      body: JSON.stringify(object)
  })
  .then(res=>res.json())
  .then(data=>{
      console.log(data)
      if(data.insertedId){
          Swal.fire(
              'Thank You!',
              'Your Review added successfully!',
              'success'
            )
            form.reset();
      }
  })

  }
  


    return (
        <div>
             {/* review */}
      <div  className="mt-10 bg-slate-300 w-4/5 lg:w-2/4 mx-auto">
      <form onSubmit={handleSubmitReview} className="grid justify-center">
      <label className="label grid justify-center">
            <span className="text-xl font-serif">If you booked this room you can write review </span>
              
            </label>
            <div className="grid grid-cols-2 justify-center items-center ">
           <div className="pl-3">
           <span className="label-text font-serif">Write review</span>
            <textarea
              className=" flex justify-center border-black  p-2 mx-auto "
              id="text"
              name="text"
              rows="4"
              cols="50"
              required
            ></textarea>
           </div>
             <div className="form-control  mr-3 mx-auto">
                  <label className="label">
                    <span className="label-text">Ratings </span>
                  </label>
                  <label className="input-group">
                    <select
                      
                      name="rating"
                      className="select w-full select-bordered"
                    >
                      <option disabled selected>
                        rate
                      </option>
                      <option>1</option>
                      <option>1.5</option>
                      <option>2</option>
                      <option>2.5</option>
                      <option>3</option>
                      <option>3.5</option>
                      <option>4</option>
                      <option>4.5</option>
                      <option>5</option>
                    </select>
                  </label>
                </div>
            </div>
            <input type="submit" value='Send' className="btn active bg-black hover:bg-slate-600 text-white w-1/3 mx-auto"/>
      </form>
      </div>
      <div>
      <SingleRoomReview code={code} ></SingleRoomReview>
     </div>
        </div>
    );
};

export default RoomReview;