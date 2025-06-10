import React from 'react'
import Navbar from '../component/Navbar'
import Img from '../shared/commondata'
import Footer from '../component/Footer'

const Foundation = () => {
    return (
        <div style={{backgroundColor:"#fff9c48c"}}>
            <Navbar/>

        <img src={Img.foundationbg} style={{margin:"10px 20px 10px 70px"}} className="w-70 d-block"alt="Responsive" />
          <center><h4 style={{fontWeight:"350", letterSpacing:"3px", marginTop:"20px"}}>BUY ONLINE FOUNDATIONS</h4></center>

          <div className="container mt-5">
                          <div className="row g-4 justify-content-center">
                              <div className="col-md-3">
                                  <div className="card border-0 p-0">
                                      <img src={Img.kayfoundation} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                                      <div className="card-body p-2">
                                          <h6 className="text-center">Kay Beauty hydrating rich foundation</h6>
                                          <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Hydrating foundation enriched with nourishing ingredients</p>
                                          <h5 className="d-inline">₹974/-</h5>
                                          <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹1229</p>
                                          <h5 className="d-inline text-success float-end">25% off</h5>
                                          <div className="text-center mt-2">
                                              <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
          
                              <div className="col-md-3">
                                  <div className="card border-0 p-0">
                                      <img src={Img.maybellinefoundation} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                                      <div className="card-body p-2">
                                          <h6 className="text-center">Maybelline newyork super stay foundation </h6>
                                          <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Lumi-matte liquid foundation with high coverage</p>
                                          <h5 className="d-inline">₹619/-</h5>
                                          <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹825</p>
                                          <h5 className="d-inline text-success float-end">25% off</h5>
                                          <div className="text-center mt-2">
                                              <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
          
                              <div className="col-md-3">
                                  <div className="card border-0 p-0">
                                      <img src={Img.lakmefoundation} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                                      <div className="card-body p-2">
                                          <h6 className="text-center">Lakme Xtraordin-Airy Mousse Foundation</h6>
                                          <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Feather-light matte mousse foundation for natural finish.</p>
                                          <h5 className="d-inline">₹699/-</h5>
                                          <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹999</p>
                                          <h5 className="d-inline text-success float-end">30% off</h5>
                                          <div className="text-center mt-2">
                                              <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
          
                              <div className="col-md-3">
                                  <div className="card border-0 p-0">
                                      <img src={Img.charlottefoundation} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                                      <div className="card-body p-2">
                                          <h6 className="text-center">Charlotte Tilbury Airbrush Flawless Foundation</h6>
                                          <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}> Flawless finish foundation with full coverage and long wear.</p>
                                          <center><h5 className="d-inline" >₹4900/-</h5></center>
                                          
                                          <div className="text-center mt-2">
                                              <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="container mt-5">
                            <div className='row g-4 justify-content-center'>
                                <div className="col-md-3">
                                  <div className="card border-0 p-0">
                                      <img src={Img.esteelauder} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                                      <div className="card-body p-2">
                                          <h6 className="text-center">Estee Lauder Double Wear Foundation</h6>
                                          <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}> Stay-in-place foundation offering matte finish and all-day coverage.</p>
                                          <center><h5 className="d-inline" >₹5200/-</h5></center>
                                          
                                          <div className="text-center mt-2">
                                              <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>  

                        <div className="col-md-3">
                                  <div className="card border-0 p-0">
                                      <img src={Img.hudabeauty} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                                      <div className="card-body p-2">
                                          <h6 className="text-center">Huda Beauty Easy Blur Foundation</h6>
                                          <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}> Blurring foundation for a smooth, filter-like complexion.</p>
                                          <center><h5 className="d-inline" >₹3380/-</h5></center>
                                          
                                          <div className="text-center mt-2">
                                              <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                        <div className="col-md-3">
                                  <div className="card border-0 p-0">
                                      <img src={Img.smashboxfoundation} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                                      <div className="card-body p-2">
                                          <h6 className="text-center">Smashbox Halo Healthy Glow All-In-One</h6>
                                          <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}> Moisturizer and foundation hybrid with SPF 25 for radiant skin </p>
                                          <center><h5 className="d-inline" >₹1710/-</h5></center>
                                          
                                          <div className="text-center mt-2">
                                              <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>    


                         <div className="col-md-3">
                                  <div className="card border-0 p-0">
                                      <img src={Img.nykaafoundation} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                                      <div className="card-body p-2">
                                          <h6 className="text-center">Nykaa All Day Matte Long Wear Liquid Foundation</h6>
                                          <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Matte finish foundation that offers long-lasting coverage</p>
                                          <h5 className="d-inline">₹422/-</h5>
                                          <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹649</p>
                                          <h5 className="d-inline text-success float-end">35% off</h5>
                                          <div className="text-center mt-2">
                                              <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </div> 
                            </div>
                          </div>
                      </div>

                      <Footer/>
        </div>
    )
}

export default Foundation
