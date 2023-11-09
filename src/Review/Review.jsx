

import { useLoaderData } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxios from '../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import ReviewCard from './ReviewCard';
import Marquee from 'react-fast-marquee';



const Review = () => {
  const { loading } = useContext(AuthContext);
  // const data =useLoaderData()
  // console.log(data)
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5173/reviewItem/all')
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  // console.log(review);


  const axios = useAxios();

  const getReview = async () => {
    // console.log(price);
    const res = await axios.get('/reviewItem');

    return res;
  };

  const { data,
      }
       = useQuery({
    queryKey: ['review'],
    queryFn: getReview,
  });
console.log(data?.data)


    return (
        <div className='max-w-5xl mx-auto mt-10'>
             <h2 className="text-3xl font-serif font-semibold text-orange-800 text-center underline">
          Reviews
        </h2>
            <Marquee className=''>
              {
                data?.data?.map(item=> <ReviewCard key={item._id} item={item}></ReviewCard>)
              }
            </Marquee>
        </div>
    );
};

export default Review;