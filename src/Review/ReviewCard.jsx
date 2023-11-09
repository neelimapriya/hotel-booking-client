import { FaStar } from "react-icons/fa";



const ReviewCard = ({ item }) => {
  return (
    <div>
      <div>
        {" "}
        <div className="ml-2 shadow-lg  relative flex flex-col mt-10 text-gray-700 bg-slate-100  w-52 rounded-xl bg-clip-border">
          <div className="p-6 ">
            <div className="flex justify-start items-center">
              <img className="w-8 h-8 rounded-full" src={item.photo} alt="" />

              <h5 className="block ml-3 mb-2 font-serif text-xs antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {item.name}
              </h5>
            </div>
            <div className="flex items-center gap-1 mb-2">
              <p className="text-xs  ">Rating: {item.rating}</p>{" "}
              <FaStar className="text-orange-500 animate-pulse"></FaStar>
            </div>
            <p className="text-[10px]">Date: {item.time}</p>
            <p className="block mt-1  text-sm text-slate-700 antialiased  leading-relaxed ">
              {item.text}
            </p>
          </div>
          <div className="p-6 pt-0"></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
