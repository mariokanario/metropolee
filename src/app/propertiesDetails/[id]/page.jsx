import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import React from 'react'
import { BiRightArrowAlt, BiShareAlt } from 'react-icons/bi'
import { IoPersonAddOutline, IoPersonOutline } from 'react-icons/io5'
import { LuBath, LuBed } from "react-icons/lu";
import { TbCarGarage } from "react-icons/tb";
import { RxSize } from "react-icons/rx"
import properties from '/public/json/propertiesJSON'
import { useRouter } from 'next/navigation'
import Slider from '@/components/properties/Slider'
import Link from 'next/link'


const page = ({ params }) => {

    const [propertie] = properties.filter(proper => proper.id == params.id)

    const f = new Intl.NumberFormat(undefined, {
        currency: "COP",
        style: "currency",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })

    return (

        <main className="flex min-h-screen flex-col items-center justify-between">

            {/* NAV */}

            <Nav />

            <div className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-images">
                                <div className="about-thumb">
                                    <Slider />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content ml-10 p-3" style={{ backgroundColor: "#F8F8F8" }}>
                                <div className="section-title">
                                    <div className="section-sub-titile ms-0 fs-5" >
                                        <h4>Cógido: {propertie.code}</h4>
                                    </div>
                                    <div className="section-main-title about d-flex">
                                        <h2>{propertie.type} - </h2>
                                        <h2 className='fw-normal'> {propertie.location} </h2>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='service-discription2'>
                                        <h2 style={{ fontSize: "40px" }}>{f.format(propertie.appraisal)}</h2>
                                        <p>Avalúo</p>
                                    </div>
                                    <div className='service-discription2'>
                                        <h3 style={{ fontSize: "32px" }}>{f.format(propertie.minimumOffer)}</h3>
                                        <p>Oferta mínima</p>
                                    </div>

                                    <div className='service-discription2'>
                                        <h3>30 %</h3>
                                        <p>Utilidad aproximada</p>
                                    </div>
                                    <div className='service-discription2 mt-4'>
                                        <h3>{propertie.participants}</h3>
                                        <p>Participantes actuales</p>
                                    </div>
                                    <div className='service-discription2'>
                                        <h3>{propertie.participantsInside}</h3>
                                        <p>Participantes necesarios</p>
                                    </div>

                                </div>



                                <div className="process-ber-plugin mt-4 mb-0">
                                    <span className="process-bar">Porcentaje de recolecta</span>
                                    <div id="bar1" className="barfiller">
                                        <div className="tipWrap d-inline">
                                            <span className="tip" style={{ left: "88%", transition: "left 3s ease-in-out 0s;" }}>79%</span>
                                        </div>
                                        <span className="fill" data-percentage="60" style={{ background: "rgb(22, 181, 151)", width: "88%", transition: "width 3s ease-in-out 0s" }}></span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between gap-3">
                                    <div className="service-rate2 mb-5">
                                        <p>Tiempo aproximado del remate</p>
                                        <h4> 30d : 04h : 52m <span></span></h4>
                                    </div>
                                    <div className="service-rate2 mb-5">
                                        <p>Tiempo aproximado para la venta</p>
                                        <h4> 30d : 04h : 52m <span></span></h4>
                                    </div>
                                </div>


                                <div className="about-info  gap-2">
                                    <div className="hamilton-btn about2">
                                        <Link href={`/offerProperty/${propertie.id}`}>Participar</Link>
                                    </div>
                                    <div className="d-flex">
                                        <a className='share-btn' href="#">
                                            <BiShareAlt />
                                        </a>
                                    </div>
                                </div>



                                <article className='section-main-title'>

                                    <div className="service-faciliti mt-5">
                                        <h2>Detalles del proyecto</h2>
                                        <ul className='ps-0 my-3'>
                                            <li>
                                                <div className="service-icon-thumb flex items-center gap-2">
                                                    <RxSize /> Área:
                                                    <span className='fw-bold'>80m<sup>2</sup></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="service-icon-thumb flex items-center gap-2">
                                                    <TbCarGarage /> Parqueadero:
                                                    <span className='fw-bold'>1</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="service-icon-thumb flex items-center gap-2">
                                                    <LuBath />  Baños:
                                                    <span className='fw-bold'>2</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="service-icon-thumb flex items-center gap-2">
                                                    <LuBed /> Habitaciones:
                                                    <span className='fw-bold'>4</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <p>Proyecto ubicado en el municipio de Caldas cerca al parque principal.

                                        Montpellier cuenta con rutas de transporte público que conectan la estación del Metro de La Estrella y el urbanismo de la zona. Esta ubicado cerca a tiendas comerciales reconocidas tales como Kokorico, Mimos, D1, Tostao, entre otros; y cuenta con colegios y universidades a su alrededor.</p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </main>
    )
}

export default page