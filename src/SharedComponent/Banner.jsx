import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'
import banner5 from '../assets/banner5.jpg'



const Banner = () => {
  return (
    <div >
      <Carousel>
                <div className='h-[90vh]'>
                    <img src={banner1} className='object-cover' />
                </div>
                <div className='h-[90vh]'>
                    <img src={banner2} className='object-cover' />
                </div>
                <div className='h-[90vh]'>
                    <img src={banner3} className='object-cover'/>
                </div>
                <div className='h-[90vh]'> 
                    <img src={banner4} className='object-cover'/>
                </div>
                <div className='h-[90vh]'>
                    <img src={banner5} className='object-cover'/>
                </div>
               
            </Carousel>
    </div>
  );
};

export default Banner;