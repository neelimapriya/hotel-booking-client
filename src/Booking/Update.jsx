import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();
  // console.log(data);
  const { img1, price, size, title, checkin, checkout, _id } = data;

  const handleUpdate=(e)=>{
    e.preventDefault();
    const form = e.target;
    const checkin = form.checkin.value;
    const checkout = form.checkout.value;

    const updatedData={ img1, price, size, title, checkin, checkout }

    fetch(`https://hotel-server-wheat.vercel.app/updateBooking/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "Date Updated successfully!", "success");
          form.reset();
        }
      });
  }
  return (
    <div className="p-3 w-[600px] mx-auto flex shadow-lg mt-10">
      <div className="  rounded-lg">
        <img src={img1} alt="" />
      </div>
      <div className=" text-center space-y-2">
      <h5 className=" text-2xl font-serif font-semibold text-orange-800 text-center mb-2">
            {title}
          </h5>
          <p>
              Price: <span className="text-orange-800">${price}</span>
            </p>
            <p>
              size: <span className="text-orange-800">{size}</span>
            </p>
        <form onSubmit={handleUpdate}>
          <div>
            <label className="text-xl font-serif">check in date</label>
            <input className="input outline" type="date" name="checkin" defaultValue={checkin} required />
          </div>

          <div className="mt-2">
            <label className="text-xl font-serif">check out date</label>
            <input className="input outline"
              type="date"
              format='DD-MM-YYYY'
              name="checkout"
              defaultValue={checkout}
              required
            />
          </div>
          <input type="submit" value="UPDATE" className="btn mt-2 bg-black text-white w-full"/>
        </form>
      </div>
    </div>
  );
};

export default Update;
