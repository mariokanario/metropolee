import React from 'react'

const Header = () => {
    return (
        <>
            <section className="container-fluid  banner-area">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 my-[100px]" style={{ marginTop: "100px" }}>

                            <div className="slider-title-shape">
                                <img src="/img/s-title-shape.png" alt="" />
                            </div>
                            <div className="slider-sub-title style-two">
                                <h4>Invierte en conjunto.</h4>
                            </div>
                            <div className="slider-main-title style-two">
                                <h1>Potencia tu inversión con remates judiciales.</h1>
                            </div>
                            <div className="slider-discripton style-two">
                                <p>La transparencia y la seguridad es nuestro compromiso. Sueña en grande, invierte de manera inteligente con Metropolee.  </p>
                            </div>
                            <div className="slider-button style-two">
                                <div className="hamilton-btn slider style-two">
                                    <a href="#">Iniciar</a>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-4 col-md-6 col-sm-4">
                                    <div className="counter-single-box">
                                        <div className="counter-content">
                                            <h4 className="counter fw-bold">100</h4>
                                            <span> +</span>
                                            <p>Inversionistas</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-4">
                                    <div className="counter-single-box">
                                        <div className="counter-content">
                                            <h4 className="counter fw-bold">20</h4>
                                            <span> +</span>
                                            <p>Remates en curso</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-4">
                                    <div className="counter-single-box">
                                        <div className="counter-content">
                                            <h4 className="counter fw-bold">100</h4>
                                            <span> +</span>
                                            <p>Remates finalizados</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 d-none d-sm-block ">
                            <div className='relative h-100' style={{width: "48vw"}}>
                                <div className="absolute header-img w-100 h-100 top-0 left-0"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="container-fluid" style={{ backgroundImage: "url(/img/header.jpg)" }}>
              <div className="container">

                  <div className="row">
                      <div className="col-lg-6 col-md-12">
                          <div className="my-16">
                              <div className="slider-title-shape">
                                  <img src="/img/title-shape.png" alt="" />
                              </div>
                              <div className="slider-sub-title">
                                  <h4>We can help you realize your dream of a new home</h4>
                              </div>
                              <div className="slider-main-title">
                                  <h1>The Leading Real Estate</h1>
                                  <h1>Rental Marketplace.</h1>
                              </div>
                              <div className="slider-discripton">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                      gravida. Risus commodo viverra maecenas accumsan lacus vel.</p>
                              </div>
                              <div className="slider-button">
                                  <div className="hamilton-btn slider">
                                      <a href="#">Our Services</a>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </section> */}
        </>
    )
}

export default Header