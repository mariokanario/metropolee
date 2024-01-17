import Link from 'next/link';
import React from 'react'
import { BiLocationPlus, BiRightArrow, BiRightArrowAlt, BiShareAlt } from "react-icons/bi";
import { IoPersonAddOutline, IoPersonOutline } from 'react-icons/io5';


const PropertiesCard = ({ id, title, price, image, description, location, type, appraisal, minimumOffer, participants, participantsInside }) => {

    const f = new Intl.NumberFormat(undefined, {
        currency: "COP",
        style: "currency",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })

    return (
        <div className="service-single-box">
            <div className="service-thumb">
                <img src={image} alt="" />
                <div className="service-rate">
                    <h4> 30d : 04h : 52m <span></span></h4>
                </div>
            </div>
            <div className="service-content">
                <div className="service-titile mb-3">
                    <h4>
                        <Link href={`propertiesDetails/${id}`}>
                            {type} - <span className='fw-normal'> {location} </span>
                        </Link>
                    </h4>
                </div>
                <div className='service-discription2'>
                    <h2>{f.format(appraisal)}</h2>
                    <p>Avalúo</p>
                </div>
                <div className='service-discription2'>
                    <h3>{f.format(minimumOffer)}</h3>
                    <p>Oferta mínima</p>
                </div>

                <div className="service-faciliti mt-4">
                    <ul className='ps-0'>
                        <li>
                            <div className="service-icon-thumb flex items-center gap-2">
                                <IoPersonOutline /> Part.:
                                <span className='fw-bold'>{participantsInside}</span>
                            </div>
                        </li>
                        <li>
                            <div className="service-icon-thumb flex items-center gap-2">
                                <IoPersonAddOutline /> Máximo:
                                <span className='fw-bold'>{participants}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* <div className='service-discription2'>
                        <p>Participantes: </p>
                        <h3>{participants}</h3>
                    </div> */}

                {/* <div className="service-discription">
                        <p>
                            {description}
                        </p>
                    </div> */}
                {/* <div className="service-faciliti">
                        <ul>
                            <li>
                                <div className="service-icon-thumb">
                                    <img src="/img/service/service-icon1.png" alt="" />
                                </div>
                                <span>4 Room</span>
                            </li>
                            <li>
                                <div className="service-icon-thumb">
                                    <img src="/img/service/service-icon2.png" alt="" />
                                </div>
                                <span>Bathroom</span>
                            </li>
                            <li>
                                <div className="service-icon-thumb">
                                    <img src="/img/service/service-icon3.png" alt="" />
                                </div>
                                <span>Carage</span>
                            </li>
                        </ul>
                    </div> */}
                {/* <div className="service-adress">
                        <div className="service-location flex">
                            <BiLocationPlus
                                className='font-normal text-3xl text-teal-300'
                            />
                            <span>
                                 {location}
                            </span>
                        </div>
                        <button className="service-icon">
                            <span className='flex justify-center'>
                                <BiShareAlt />
                                </span>
                        </button>
                    </div> */}
                <div>
                    <div className="feature-btn d-flex gap-1">
                        <Link className='w-75 btn1' href={`propertiesDetails/${id}`}>
                            Participar <BiRightArrowAlt />
                        </Link>
                        <a className='w-25 btn2' href="#"> <BiShareAlt /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertiesCard