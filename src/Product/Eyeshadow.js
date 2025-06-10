import React from 'react'
import Navbar from '../component/Navbar'
import Img from '../shared/commondata'
import Footer from '../component/Footer'

const Eyeshadow = () => {
    return (
        <div style={{backgroundColor:"#f3e5f5 "}}>
            <Navbar/>

        <img src={Img.Eyeshadowbg} style={{margin:"auto", marginTop:"10px"}} className="w-70 d-block"alt="Responsive" />
          <center><h4 style={{fontWeight:"350", letterSpacing:"3px", marginTop:"20px"}}>ALL EYESHADOW PRODUCTS</h4></center>

          <div className="container mt-5">
                          <div className="row g-4 justify-content-center">
                              <div className="col-md-3">
                                  <div className="card border-0 p-0">
                                      <img src={Img.marsdanceeyeshadow} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                                      <div className="card-body p-2">
                                          <h6 className="text-center">MARS 12 Shades Dance of Joy Eyeshadow Palette</h6>
                                          <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>A versatile palette with joyful, blendable shades for everyday glam.</p>
                                          <h5 className="d-inline">₹260/-</h5>
                                          <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹299</p>
                                          <h5 className="d-inline text-success float-end">13% off</h5>
                                          <div className="text-center mt-2">
                                              <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
          
                              <div className="col-md-3">
                                  <div className="card border-0 p-0">
                                      <img src={Img.swisseyeshadow} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                                      <div className="card-body p-2">
                                          <h6 className="text-center">Swiss Beauty Ultimate Eyeshadow Palette Kit – Multi </h6>
                                          <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Highly pigmented shades perfect for bold and everyday eye looks.</p>
                                          <h5 className="d-inline">₹383/-</h5>
                                          <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹425</p>
                                          <h5 className="d-inline text-success float-end">10% off</h5>
                                          <div className="text-center mt-2">
                                              <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
          
                              <div className="col-md-3">
                                  <div className="card border-0 p-0">
                                      <img src={Img.hilaryeyeshadow} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                                      <div className="card-body p-2">
                                          <h6 className="text-center">Hilary Rhoda Perfection Eyeshadow Palette</h6>
                                          <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Affordable palette with smooth texture for soft to striking eye makeup.</p>
                                          <h5 className="d-inline">₹383/-</h5>
                                          <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹425</p>
                                          <h5 className="d-inline text-success float-end">10% off</h5>
                                          <div className="text-center mt-2">
                                              <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
          
                              <div className="col-md-3">
                                  <div className="card border-0 p-0">
                                      <img src={Img.marsdanceeyeshadow} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                                      <div className="card-body p-2">
                                          <h6 className="text-center">MARS 12 Shades Eyeshadow</h6>
                                          <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}> Turn heads with rich pigments and playful hues. Ideal for festive glam or bold daily wear.</p>
                                          <center><h5 className="d-inline" >₹499/-</h5></center>
                                          
                                          <div className="text-center mt-2">
                                              <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
  
  <img src={Img.eyeshadowbg2} style={{margin:"20px 0 10px -40px"}} className="w-70"/>

                          <div className="container mt-5">
                            <div className='row g-4 justify-content-center'>
                                <div className="col-md-3">
                                  <div className="card border-0 p-0">
                                      <img src={Img.swissbeautyultimate} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                                      <div className="card-body p-2">
                                          <h6 className="text-center">Swiss Beauty Ultimate Eyeshadow Palette</h6>
                                          <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}> Smooth textures, stunning color best for effortless daily makeup looks.</p>
                                          <center><h5 className="d-inline" >₹699/-</h5></center>
                                          
                                          <div className="text-center mt-2">
                                              <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>  

                        <div className="col-md-3">
                                  <div className="card border-0 p-0">
                                      <img src={Img.rhodaeyeshadow} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                                      <div className="card-body p-2">
                                          <h6 className="text-center">Hilary Rhoda Perfection Eyeshadow Palette</h6>
                                          <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}> Affordable elegance with versatile shades,suit both beginners and pros</p>
                                          <center><h5 className="d-inline" >₹689/-</h5></center>
                                          
                                          <div className="text-center mt-2">
                                              <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                        <div className="col-md-3">
                                  <div className="card border-0 p-0">
                                      <img src={Img.maybellineeyeshadow} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                                      <div className="card-body p-2">
                                          <h6 className="text-center">Maybelline New York Color Rivals Eyeshadow Duo</h6>
                                          <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}> Vibrant duo shades crafted for bold, long-lasting eye looks.</p>
                                          <center><h5 className="d-inline" >₹876/-</h5></center>
                                          
                                          <div className="text-center mt-2">
                                              <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>    


                         <div className="col-md-3">
                                  <div className="card border-0 p-0">
                                      <img src={Img.blueheaveneyeshadow} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                                      <div className="card-body p-2">
                                          <h6 className="text-center">Blue Heaven Bling 9 in 1 Eyeshadow Palette</h6>
                                          <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>9 richly pigmented shades designed for eye transformations.</p>
                                          <h5 className="d-inline">₹391/-</h5>
                                          <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹449</p>
                                          <h5 className="d-inline text-success float-end">13% off</h5>
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

export default Eyeshadow
