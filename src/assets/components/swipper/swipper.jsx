import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';

import './index.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Swipper() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='slider_first'>
            <div className='slider_first_text'>
              <p>SUMMER 2023</p>
              <h1>New Arrial Colletion</h1>
              <button>Explore now</button>
            </div>
            <div className='slider_first_image'><img src='https://demo-kalles-4-1.myshopify.com/cdn/shop/files/slider-01.jpg?v=1652056793'></img></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider_second'>
            <div className='slider_second_image'><img src='https://demo-kalles-4-1.myshopify.com/cdn/shop/files/slide3.jpg?v=1682405064&width=2000'></img></div>
            <div className='slider_second_text'>
              <p>SUMMER 2023</p>
              <h1>New Arrial Colletion</h1>
              <button>Explore now</button>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider_third'>
            <div className='slider_third_text'>
              <p>SUMMER 2023</p>
              <h1>New Arrial Colletion</h1>
              <button>Explore now</button>
            </div>
            <div className='slider_third_image'><img src='https://demo-kalles-4-1.myshopify.com/cdn/shop/files/slide2.jpg?v=1682405064&width=2000'></img></div>
          </div>
        </SwiperSlide>


      </Swiper>
    </>
  );
}