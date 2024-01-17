import Nav from "@/components/layout/Nav";
import properties from '/public/json/propertiesJSON'
import Link from "next/link";
import NumberInput from "@/components/layout/NumberInput";
import Footer from "@/components/layout/Footer";


export default function OfferProperty({ params }) {

    const [propertie] = properties.filter(proper => proper.id == params.id)

    const f = new Intl.NumberFormat(undefined, {
        currency: "COP",
        style: "currency",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })

    return (
        <>
            <main className="flex min-h-screen flex-col items-center">

                {/* NAV */}
                <Nav />
                <div className="container">
                    <div className="about-content " style={{ backgroundColor: "#F8F8F8", padding: "70px 100px" }}>
                        <div className="mx-auto" style={{width: "100%", maxWidth: "780px"}}>
                            <div className="section-title d-flex flex-column align-items-center">
                                <div className="section-sub-titile ms-0 fs-5 text-center" >
                                    <h4>Cógido: {propertie.code}</h4>
                                </div>
                                <div className="section-main-title about d-flex text-center">
                                    <h2>{propertie.type} - </h2>
                                    <h2 className='fw-normal'> {propertie.location} </h2>
                                </div>
                            </div>

                            <div className="d-flex justify-between">
                                <div className='service-discription2 d-flex flex-column'>
                                    <p>Avalúo</p>
                                    <h2 className="mt-0" style={{ fontSize: "32px" }}>{f.format(propertie.appraisal)}</h2>
                                </div>
                                <div className='service-discription2 d-flex flex-column'>
                                    <p>Oferta mínima</p>
                                    <h3 className="mt-0" style={{ fontSize: "32px" }}>{f.format(propertie.minimumOffer)}</h3>
                                </div>
                                <div className='service-discription2 d-flex flex-column'>
                                    <p>Oferta máxima</p>
                                    <h3 className="mt-0" style={{ fontSize: "32px" }}>{f.format(propertie.minimumOffer)}</h3>
                                </div>

                            </div>

                            <div className="mt-5">
                                <form action="" className=" d-flex flex-column align-items-center">
                                    <div className="form-group">
                                        <p className="text-center mt-4">Realiza tu oferta entre el valor mínimo y máximo:</p>
                                        <NumberInput />

                                    </div>

                                    <div className="about-info  gap-2 mt-4">

                                        <div className="hamilton-btn">
                                            <Link href={`/propertiesDetails/${propertie.id}`}>Cancelar</Link>
                                        </div>
                                        <div className="hamilton-btn about2">
                                            <Link href={`/offerProperty/${propertie.id}`}>Realizar pago</Link>
                                        </div>
                                    </div>
                                </form>

                            </div>

                        </div>


                    </div>

                </div>

                <Footer />
            </main>
        </>
    )
}