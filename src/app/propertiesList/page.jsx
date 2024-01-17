"use client"

import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import React, { useEffect, useState } from 'react'
import properties from '/public/json/propertiesJSON'
import PropertiesCard from '@/components/properties/PropertiesCard'

const page = () => {

    const perPage = 6;
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);

    const [propertiesList, setPropertiesList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
        const currentPageProperties = properties.slice(startIndex, endIndex);
        setTotalPages(Math.ceil(properties.length / perPage));
        setPropertiesList([...propertiesList, ...currentPageProperties]);
    }, [page]);

    return (

        <main className="flex min-h-screen flex-col items-center justify-between">

            {/* NAV */}

            <Nav />

            <div className="catagori-area container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <div className="section-sub-thumb">
                                    <img src="/img/s-title-shape.png" alt="" />
                                </div>
                                <div className="section-sub-titile testi">
                                    <h4>Lista de todos los remates</h4>
                                </div>
                                <div className="section-sub-thumb">
                                    <img src="/img/s-title-shape.png" alt="" />
                                </div>
                                <div className="section-main-title testi">
                                    <h2>Remates</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="catagori-search-box">
                            <div className="catagori-search-title">
                                <h4>Filtrar búsqueda</h4>
                            </div>
                            <div className="search-contents ">
                                <form method="GET">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="catagori-title">
                                                <h4>Categoría</h4>
                                            </div>
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="Property Category">
                                                    <option>Todas las categorías</option>
                                                    <option>Predio Rural</option>
                                                    <option>Apartamento</option>
                                                    <option>Casa</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="catagori-title">
                                                <h4>Ciudad</h4>
                                            </div>
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="All City">
                                                    <option>Todas las ciudades</option>
                                                    <option>Manizales</option>
                                                    <option>Pereira</option>
                                                    <option>Medellín</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="catagori-title">
                                                <h4>Palabra clave</h4>
                                            </div>
                                            <div className="form-group">
                                                <input className="selectpicker search-fields" name="Category Area" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-area container-fluid">
                <div className="container">

                    {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <div className="section-sub-thumb">
                                    <img src="/img/s-title-shape.png" alt="" />
                                </div>
                                <div className="section-sub-titile">
                                    <h4>Lista de todos los remates</h4>
                                </div>
                                <div className="section-sub-thumb">
                                    <img src="/img/s-title-shape.png" alt="" />
                                </div>
                                <div className="section-main-title">
                                    <h2>Remates</h2>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="row">
                        {
                            propertiesList.map((propertie, i) => (
                                <div className="col-lg-4">
                                    <PropertiesCard
                                        key={i}
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
                                </div>
                            ))
                        }
                    </div>

                    {totalPages !== page &&
                        <div className="slider-button style-two mt-5 text-center">
                            <button className="hamilton-btn slider style-two">
                                <a
                                    className='white'
                                    onClick={() => setPage(page + 1)}>
                                    {loading ? 'Cargando...' : 'Ver más'}
                                </a>
                            </button>
                        </div>
                    }
                </div>
            </div>

            <Footer />

        </main>
    )
}

export default page