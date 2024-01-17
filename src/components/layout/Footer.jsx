import React from 'react'
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi'

const Footer = () => {
  return (
    <>
          <section className="py-12 w-100" style={{ backgroundColor: "#1D3557" }}>
              <div className="container mx-auto">
                  <div className="grid grid-cols-3 lg:gap-10">

                      <div className="col-span-3 md:col-span-1">
                          <div className="mr-12 flex justify-center">
                              {/* <h4 className="text-white mb-6 text-[23px]">Metropolee</h4>
                <p className="text-white/50 dark:text-gray-300">
                  Potencia tu inversión con remates judiciales.
                </p> */}
                              <img src="/img/logo_white.png" className='w-[200px]' alt="" />
                          </div>
                      </div>

                      <div className="col-span-3 md:col-span-1 grid align-middle">
                          {/* <p className="mt-3 text-white dark:text-gray-50">Siguenos:</p> */}
                          <div className="">
                              <div className="footer-socilal-title">
                                  <h4>Nuestras redes</h4>
                              </div>
                              <div className="footer-social">

                                  <ul className='flex gap-3  p-0'>
                                      <li>
                                          <a href="https://www.facebook.com/metropoleecompany" target='_blanck'>
                                              <i><BiLogoInstagram className='uil uil-facebook-f' /></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="https://www.instagram.com/metropoleecompany/" target='_blanck'>
                                              <i ><BiLogoFacebook className='uil uil-facebook-f' /></i>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>


                      <div className="col-span-3 md:col-span-1 grid items-start" >
                          <div className="">
                              <div className="footer-socilal-title">
                                  <h4>Copy Right</h4>
                              </div>
                              <p className="text-white/50 dark:text-gray-300">
                                  2024
                                  © Todos los derechos reservados por Metropolee
                              </p>
                          </div>
                      </div>

                  </div>
              </div>
          </section>

          <footer className="py-6 w-100 border-t border-gray-100/10" style={{ backgroundColor: "#1D3557" }}>
              <div className="container mx-auto">
                  <div className="text-center">
                      {/* <p className="mb-0 text-center text-white/50">
              2024
              © Todos los derechos reservados por Metropolee
            </p> */}
                  </div>
              </div>
          </footer>
    </>
  )
}

export default Footer