import React from 'react'
import { BiLocationPlus, BiPencil, BiPhone, BiUser } from 'react-icons/bi'
import { IoMailOutline } from 'react-icons/io5'

const Contact = () => {
  return (
    <>
          <div className="apartment-area">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="section-title text-center">
                              <div className="section-sub-thumb">
                                  <img src="/img/s-title-shape.png" alt="" />
                              </div>
                              <div className="section-sub-titile">
                                  <h4>Dejanos asesorarte</h4>
                              </div>
                              <div className="section-sub-thumb">
                                  <img src="/img/s-title-shape.png" alt="" />
                              </div>
                              <div className="section-main-title">
                                  <h2>Contacto</h2>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-6 col-md-12">
                          <div className="apartment-box">
                              <div className="apartment-content">
                                  <p>Escribenos y un asesor se estará comunicando contigo.</p>
                              </div>
                              <form id="tech-time" className='mt-5'>
                                  <div className="row align-items-center">
                                      <div className="col-lg-6 col-md-6">
                                          <div className="form-box inner">
                                              <input type="text" name="name" placeholder="Nombre" />
                                              <BiUser className='ico' />
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6">
                                          <div className="form-box inner">
                                              <input type="text" name="email" placeholder="Correo" />
                                              <IoMailOutline className='ico' />
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6">
                                          <div className="form-box inner">
                                              <input type="text" name="number" placeholder="Teléfono" />
                                              <BiPhone className='ico' />
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6">
                                          <div className="form-box inner">
                                              <input type="text" name="name" placeholder="Ciudad" />
                                              <BiLocationPlus className='ico' />
                                          </div>
                                      </div>
                                      <div className="col-lg-12">
                                          <div className="form-box inner">
                                              <textarea name="massage" id="massage" cols="30" rows="10" placeholder="Como podemos ayudarte? "></textarea>
                                              <BiPencil className='ico' />
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6">
                                          <div className="form-box-button">
                                              <button type="Submit">Enviar</button>
                                          </div>
                                      </div>

                                  </div>
                              </form>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                          <div className="apartmnet-thumb">
                              <img src="/img/contact/apartment-thumb.png" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Contact