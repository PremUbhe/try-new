'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const data = ["slider 1", "slider 2", "slider 3", "slider 4"]

const Swipers = () => {
  return (
    <div className='my-10'>
        <Swiper
        className='h-52'
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        // navigation
        autoplay={true}
        loop={true}
        pagination={{ clickable: true }}
        >
            {data.map((conent, index)=>{
                return (
                    <SwiperSlide key={index}>
                        <div className="card bg-gray">
                            {conent}
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
  )
}

export default Swipers