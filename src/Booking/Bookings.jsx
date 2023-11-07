import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxios from '../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import BookingCard from './BookingCard';
const Bookings = () => {
    const {User}=useContext(AuthContext)
    const email=User?.email;
    console.log(email)

   const axios=useAxios()
   const {data:bookings}=useQuery({
    queryKey:['booking'],
    queryFn:async()=>{
        const res=await axios.get(`/user/bookings?email=${email}`)
        return res;
    }
   })
   console.log(bookings?.data)
  


 
    return (
        <div>
            <div>
                {
                    bookings?.data?.length==0 && <div>
                        <h2>Your Bookings is empty.</h2>
                        <div className='flex justify-center mt-5 items-center gap-2 underline underline-offset-1'><FaArrowLeft></FaArrowLeft><Link to='/room'> You can visit our available Rooms! </Link></div>
                    </div>
                }
            </div>
            <h2 className='bg-orange-800 text-3xl font-serif text-center text-white py-3 '>Your Bookings : {bookings?.data?.length} Rooms</h2>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto'>
                {
                    bookings?.data?.map(books=><BookingCard key={books._id} books={books}></BookingCard>)
                }
            </div>

        </div>
    );
};

export default Bookings;