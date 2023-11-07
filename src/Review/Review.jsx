
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Review = () => {
 
  



    return (
        <div className='max-w-5xl mx-auto'>
            <h2>Review</h2>
            <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/3cMbYTv/hilton-memphis-cr-courtesy.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/3cMbYTv/hilton-memphis-cr-courtesy.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/3cMbYTv/hilton-memphis-cr-courtesy.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/3cMbYTv/hilton-memphis-cr-courtesy.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
        </div>
    );
};

export default Review;