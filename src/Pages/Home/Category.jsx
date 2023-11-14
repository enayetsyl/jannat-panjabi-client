import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/15.jpg'
import image3 from '../../assets/18.jpg'
import image4 from '../../assets/4.jpg'
import image5 from '../../assets/5.jpg'
import image6 from '../../assets/6.jpg'
import image7 from '../../assets/7.jpg'
import image8 from '../../assets/8.jpg'
import image9 from '../../assets/9.jpg'
import image10 from '../../assets/10.jpg'
import image11 from '../../assets/11.jpg'


const Category = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-32 mt-10"
      >
        <SwiperSlide>
          <img src={image1} alt="" className=''/>
         <div className='drop-shadow-lg'>
         <h1 className='text-center text-3xl font-bold text-white -mt-32'>Patiala Suit</h1>
         </div>
        
          </SwiperSlide>
        <SwiperSlide>
          <img src={image8} alt="" />
          <h1 className='text-center text-3xl font-bold text-white -mt-32 '>Phulkari Embroidery</h1>
          </SwiperSlide>
        <SwiperSlide>
          <img src={image7} alt="" />
          <h1 className='text-center text-3xl font-bold text-white -mt-32 '>Popular</h1>
          </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
          <h1 className='text-center text-3xl font-bold text-white -mt-32 '>Churidar Kurta</h1>
          </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
          <h1 className='text-center text-3xl font-bold text-white -mt-32 '>Turban</h1>
          </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
          <h1 className='text-center text-3xl font-bold text-white -mt-32 '>Punjabi Wedding Attire</h1>
          </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="" />
          <h1 className='text-center text-3xl font-bold text-white -mt-32 '>Patiala Suit</h1>
          </SwiperSlide>
        <SwiperSlide>
          <img src={image6} alt="" />
          <h1 className='text-center text-3xl font-bold text-white -mt-32 '>Turban</h1>
          </SwiperSlide>
        <SwiperSlide>
          <img src={image7} alt="" />
          <h1 className='text-center text-3xl font-bold text-white -mt-32 '>Punjabi Wedding Attire</h1>
          </SwiperSlide>
        <SwiperSlide>
          <img src={image8} alt="" />
          <h1 className='text-center text-3xl font-bold text-white -mt-32 '>Churidar Kurta</h1>
          </SwiperSlide>
        <SwiperSlide>
          <img src={image9} alt="" />
          <h1 className='text-center text-3xl font-bold text-white -mt-32 '>Punjabi Wedding Attire</h1>
          </SwiperSlide>
        <SwiperSlide>
          <img src={image10} alt="" />
          <h1 className='text-center text-3xl font-bold text-white -mt-32 '>Patiala Suit</h1>
          </SwiperSlide>
        <SwiperSlide>
          <img src={image11} alt="" />
          <h1 className='text-center text-3xl font-bold text-white -mt-32 mb-32 '>Turban</h1>
          </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Category;