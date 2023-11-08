import { FaStar } from "react-icons/fa";



const ReviewCard = ({ item }) => {
  return (
    <div>
      <div>
        {" "}
        <div className="shadow-lg  relative flex flex-col mt-10 text-gray-700 bg-slate-300  w-52 rounded-xl bg-clip-border">
          <div className="p-6 ">
            <div className="flex ">
              <img className="w-10 h-10 rounded-full" src={item.photo} alt="" />

              <h5 className="block ml-3 mb-2 font-serif text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {item.name}
              </h5>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-base ">Rating: {item.rating}</p>{" "}
              <FaStar className="text-orange-500"></FaStar>
            </div>

            <p className="block  text-base text-slate-500 antialiased  leading-relaxed ">
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
