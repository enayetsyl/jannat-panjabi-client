import Rating from "react-rating";
import Heading from "../../SharedComponent/Heading";
import { FaQuoteLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
    .then(res => res.json())
    .then(data => {
      setReviews(data)
      setLoading(false)
    })
  },[])
  return (
    <div>
        <Heading
        smallText={'--What Our Clients Say--'}
        headingText={"testimonials"}
        ></Heading>
        <div>
          {
            loading ? (
              <p>Item is loading</p>
            ):
            (
              <Swiper
              cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper "
            >
             {
              reviews.map(review =>  <SwiperSlide key={review._id}>
               <div className="px-20 text-center py-20 space-y-5">
             <div className="text-[#cd9003]">
             <Rating
  style={{ maxWidth: 180
  }}
  initialRating={review.rating}
  readonly

  /> 
             </div>
 <div className="flex justify-center ">
 <FaQuoteLeft className="h-24 w-24 text-black"></FaQuoteLeft>
 </div>
               <p className="text-black text-xl">{review.details}</p>
               <p className="text-[#cd9003] text-3xl font-medium">{review.name}</p>
</div>
              </SwiperSlide>
              
               )
             }
            </Swiper>
            )
          }
        </div>

          
    </div>
  );
};

export default Testimonial;