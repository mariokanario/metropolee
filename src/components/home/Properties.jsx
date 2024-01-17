"use client"
import React, { useEffect, useState } from 'react'
import PropertiesCard from '../properties/PropertiesCard'
import { Swiper, SwiperSlide, Scrollbar, A11y } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/a11y'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import properties from '/public/json/propertiesJSON'
import Link from 'next/link'

const Properties = () => {



    return (
        <div className="service-area container-fluid">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <div className="section-sub-thumb">
                                <img src="/img/s-title-shape.png" alt="" />
                            </div>
                            <div className="section-sub-titile">
                                <h4>Lista de nuestros últimos remates</h4>
                            </div>
                            <div className="section-sub-thumb">
                                <img src="/img/s-title-shape.png" alt="" />
                            </div>
                            <div className="section-main-title">
                                <h2>Últimos remates</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={3}
                        // navigation
                        autoplay
                        pagination={{ clickable: true }}
                    >
                        {
                            properties.slice(0, 6).map((propertie, i) => (

                                <div className="col-lg-4" key={i}>
                                    <SwiperSlide key={i}>
                                        <PropertiesCard

                                            title={propertie.title}
                                            price={propertie.price}
                                            image={propertie.image}
                                            description={propertie.description}
                                            location={propertie.location}
                                            type={propertie.type}
                                            appraisal={propertie.appraisal}
                                            minimumOffer={propertie.minimumOffer}
                                            participants={propertie.participants}
                                            participantsInside={propertie.participantsInside}
                                            id={propertie.id}
                                        />
                                    </SwiperSlide>
                                </div>
                            ))
                        }
                    </Swiper>
                </div>


                <div className="slider-button style-two mt-5 text-center">
                    <button className="hamilton-btn slider style-two">
                        <Link
                            className='white'
                            href={'/propertiesList'}>
                            Ver todas
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Properties