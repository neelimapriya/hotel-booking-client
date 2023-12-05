import { useEffect } from "react";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const RoomsCard = ({ rooms }) => {
  const { title, img1, price,availability, price2, size, description, _id, code } = rooms;
  
  const [review, setReview] = useState();

  useEffect(() => {
    fetch(`https://hotel-server-wheat.vercel.app/reviewItem/${code}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [code]);

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="relative flex card-compact   border border-amber-800 h-[450px] md:h-[300px]"
      >
        <figure className="w-2/3">
          <img className="w-full h-full" src={img1} alt="room" />
        </figure>
        <div className="card-body w-1/3 text-start">
          <h2 className="card-title font-serif text-2xl font-thin text-amber-800">
            {title}
          </h2>
          <hr />
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
          <p className="text-base">Room Size: <span className="text-orange-600 text-base">{size}</span></p>
          <p>Reviews: <span className="text-orange-600">{review?.length}</span></p>
         
          <Link to={`/room/${_id}`}>
            <div className="card-actions md:text-2xl  flex items-center ">
              <h2 className="font-semibold text-orange-700">Book Now</h2>
              <BsArrowRight></BsArrowRight>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;
