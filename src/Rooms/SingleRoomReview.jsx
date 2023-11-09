import { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa';

const SingleRoomReview = ({ code, title }) => {
  // const ReviewData=useLoaderData()
  // console.log(ReviewData)
  const [review, setReview] = useState();

  useEffect(() => {
    fetch(`https://hotel-server-wheat.vercel.app/reviewItem/${code}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [code]);
  // console.log(review);

  return (
    <div className="mt-10 mb-10">
      <div>
        <h2 className="text-3xl font-serif font-semibold text-orange-800 text-center underline">
          Reviews
        </h2>
      </div>
      <div className="grid grid-cols-3 max-w-6xl mx-auto">
        {review?.map((item) => (
          <div key={item._id}>
            <div className=" ">
              {/* <div className="flex">
                            <img className="w-10 rounded-full" src={item.photo} alt="" />
                            <h2>
                                {item.name}
                            </h2>
                        </div> */}
              <div className="shadow-lg  relative flex flex-col mt-10 text-gray-700 bg-white  w-72 rounded-xl bg-clip-border">
                <div className="p-6 ">
                  <div className="flex ">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={item.photo}
                      alt=""
                    />
                    
                    <h5 className="block ml-3 mb-2 font-serif text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {item.name}
                    </h5>
                   
                   
                  </div>
                  <div className="flex items-center gap-1">
                  <p className="text-base ">Rating: {item.rating}</p> <FaStar className="text-orange-500"></FaStar>
                  </div>
                  <p className="text-sm">Date: {item.time}</p>
                  <p className="block mt-2 font-serif text-lg text-black antialiased font-light leading-relaxed text-inherit">
                   Category: {item.title}
                  </p>
                  <p className="block  text-base text-slate-500 antialiased  leading-relaxed ">
                    {item.text}
                  </p>
                </div>
                <div className="p-6 pt-0">
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleRoomReview;
