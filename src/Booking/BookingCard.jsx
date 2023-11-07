import { MdDelete } from 'react-icons/md';
import { LuPencilLine } from 'react-icons/lu';

const BookingCard = ({ books }) => {
  const { img1, price, size, title, checkin, checkout } = books;
  return (
    <div>
      <div className="w-60 mt-10 bg-slate-100 rounded-lg">
        <div className="">
          <h5 className="mt-3 text-2xl font-serif font-semibold text-orange-800 text-center mb-2">
            {title}
          </h5>
          <img className="rounded-lg" src={img1} />
        </div>
        <div className=" text-black ">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="text-black text-md">
                  <th>check in date</th>
                  <th>check out date</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>{checkin}</td>
                  <td>{checkout}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-around">
            <p>Price: <span className="text-orange-800">${price}</span></p>
            <p>size: <span className="text-orange-800">{size}</span></p>
          </div>
        </div>
        <div className="p-2 pt-0 text-sm text-black ">
         <div className='flex items-center justify-around gap-4'><button>Update booking date</button><LuPencilLine className='mt-2 text-2xl'></LuPencilLine></div>
         <div className='flex items-center gap-4 justify-around'><button>Cancel your booking</button><MdDelete className='mt-2 text-red-600 text-2xl'></MdDelete></div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
