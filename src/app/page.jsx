// import './home.css'
import Properties from '@/components/home/Properties'
import Nav from '@/components/layout/Nav';
import Header from '@/components/layout/Header';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      {/* NAV */}

      <Nav />

      {/* HEADER */}

      <Header />

      {/* SECTION 1 */}

      <div className="about-area mt-[120px]" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <div className="section-sub-thumb">
                  <img src="/img/s-title-shape.png" alt="" />
                </div>
                <div className="section-sub-titile about  ">
                  <h4>Qué hacemos</h4>
                </div>
                <div className="section-main-title about my-5 mt-3">
                  <h2>Consultoría de estrategia de inversión única</h2>
                </div>
              </div>

              <div className="about-single-box">
                <div className="about-icon">
                  <img src="/img/about/about-icon.png" alt="" />
                </div>
                <div className="about-text">
                  <h4>Asesoramiento experto y apoyo de una comunidad comprometida.</h4>
                </div>
              </div>

              <div className="about-single-box">
                <div className="about-icon">
                  <img src="/img/about/about-icon1.png" alt="" />
                </div>
                <div className="about-text">
                  <h4>Potencial de retorno de inversión significativo gracias a la colaboración.</h4>
                </div>
              </div>

              <div className="about-single-box">
                <div className="about-icon">
                  <img src="/img/about/about-icon2.png" alt="" />
                </div>
                <div className="about-text">
                  <h4>Acceso exclusivo a propiedades y bienes en remates judiciales.</h4>
                </div>
              </div>

              <div className="about-single-box">
                <div className="about-icon">
                  <img src="/img/about/about-icon.png" alt="" />
                </div>
                <div className="about-text">
                  <h4>Inversión asequible para todos los presupuestos.</h4>
                </div>
              </div>

            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-images">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="about-shape">
                      <img src="/img/about/about-shape1.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="about-shape">
                      <img src="/img/about/about-shape2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="about-thumb">
                      <img src="/img/about/about-thumb.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}

      <Properties />

      {/* CONTACT US */}

      <Contact />

      {/* FOOTER */}

      <Footer />


    </main>
  )
}
