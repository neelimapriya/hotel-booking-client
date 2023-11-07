

const RoomReview = () => {
    return (
        <div>
             {/* review */}
      <div className="mt-10 bg-slate-300 w-4/5 lg:w-2/4 mx-auto">
      <form  className="grid justify-center">
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
            <button className="btn bg-black hover:bg-slate-600 text-white w-1/3 mx-auto">Send</button>
      </form>
      </div>
        </div>
    );
};

export default RoomReview;