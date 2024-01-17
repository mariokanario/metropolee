import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 container-fluid ">
                <div className="container bg-white">
                    <div className="logo">
                        <Link href={"/"}>
                            <img src="/img/logo.png" className='w-[120px]' alt="" />
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse header-menu py-0" id="navbarNavAltMarkup">
                        <ul className="navbar-nav mx-auto">
                            <li className='nav-item'>
                                <Link className="nav-link" aria-current="page" href={"/"}>Inicio</Link>
                            </li>
                            <li className='nav-item'>
                                <a className="nav-link disabled" aria-current="page" href="#">Empresa</a>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link " aria-current="page" href="/propertiesList">Remates</Link>
                            </li>
                            <li className='nav-item'>
                                <a className="nav-link disabled" aria-current="page" href="#">Contacto</a>
                            </li>
                        </ul>
                        <div className="hamilton-btn">
                            <a href="contact.html">Ingresar</a>
                        </div>
                    </div>
                </div>
            </nav>
            
            {/* <header className="header-area" id="sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="/img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="header-menu">
                                <ul>
                                    <li><a href="#">Home <i className="bi bi-chevron-down"></i></a>

                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="#">Services <i className="bi bi-chevron-down"></i></a>

                                    </li>
                                    <li><a href="#">Pages <i className="bi bi-chevron-down"></i></a>

                                    </li>
                                    <li><a href="#">Blog <i className="bi bi-chevron-down"></i></a>

                                    </li>
                                    <li><a href="contact.html">Contacts</a></li>
                                </ul>
                                <div className="hamilton-btn">
                                    <a href="contact.html">Get a Quout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="mobile-menu-area sticky-menu" id="navbar">
                <div className="mobile-menu">
                    <div className="mobile-logo">
                        <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                    </div>
                    <div className="side-menu-info">
                        <div className="sidebar-menu">
                            <a className="navSidebar-button" href="#"><i className="bi bi-justify-right"></i></a>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Nav