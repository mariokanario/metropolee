"use client";
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const Slider = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>

            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src="/img/properties/1.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/properties/2.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/properties/3.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/properties/4.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/properties/1.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/properties/2.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/properties/3.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/properties/4.png" />
                </SwiperSlide>
               
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/img/properties/1.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/properties/2.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/properties/3.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/properties/4.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/properties/1.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/properties/2.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/properties/3.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/properties/4.png" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider