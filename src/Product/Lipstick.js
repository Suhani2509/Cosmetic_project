import React from 'react'
import Img from '../shared/commondata'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Lipstick = () => {
    return (
        <div style={{backgroundColor:"rgb(255 24 24 / 32%)"}}>
            <Navbar />
            <img src={Img.lipstickbg} className="w-100 d-block" alt="Responsive" />

            <div className="container mt-5">
                <h3 className="text-center mb-4">All Products</h3>

                {/* Row 1 */}
                <div className="row g-4 justify-content-center">
                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.kaybeauty} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Kay Beauty Hydra Creme Lipstick</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Hydrating Lipstick with long wear.</p>
                                <h5 className="d-inline">₹236/-</h5>
                                <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹239</p>
                                <h5 className="d-inline text-success float-end">5% off</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.charlotte} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Charlotte Tilbury Matte Resolution</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Matte Lipstick with deep pigment.</p>
                                <h5 className="text-center" style={{marginTop:"-15px"}} >₹999/-</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.lakmeforever} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Lakme Forever Matte Lipstick</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}> Long lasting Matte Lipstick.</p>
                                <h5 className="d-inline">₹319/-</h5>
                                <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹375</p>
                                <h5 className="d-inline text-success float-end">15% off</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.maybelline} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Maybelline Superstay Matte Ink</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Bold pigment and long wear.</p>
                                <h5 className="d-inline">₹359/-</h5>
                                <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹599</p>
                                <h5 className="d-inline text-success float-end">40% off</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="row g-4 justify-content-center mt-1">
                    
                  <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.nykalipstick} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Nykaa creme matte lipstick</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Nykaa Cosmetics So Creme!!</p>
                                <h5 className="d-inline">₹214/-</h5>
                                <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹329</p>
                                <h5 className="d-inline text-success float-end">35% off</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.mars} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Mars Matte Lipstick Box</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>3 varied shades of Matte Lipstick.</p>
                                <h5 className="d-inline">₹389/-</h5>
                                <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹447</p>
                                <h5 className="d-inline text-success float-end">13% off</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.swiss} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Swiss Beauty Mac</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Creme Mac Finishing.</p>
                                <h5 className="d-inline">₹269/-</h5>
                                <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹300</p>
                                <h5 className="d-inline text-success float-end">10% off</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.mac} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">M.A.C MACximal Matte Lipstick</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>12HRS silly Matte Lipstick.</p>
                                <center><h5 className="d-inline" style={{ marginTop:"15px"}}>₹2550/-</h5></center>
                                {/* <p className="d-inline ms-2">₹375</p> */}
                                {/* <h5 className="d-inline text-success float-end">15% off</h5> */}
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white"}}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <img src={Img.lipstickbanner} className="w-100 d-block mt-3" alt="Responsive" />

            <div className="container mt-5">
                
                <div className="row g-4 justify-content-center">
                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.nybae} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">NyBae 5 in 1 Lipstick</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Creamy matte lip crayon</p>
                                <h5 className="d-inline">₹229/-</h5>
                                <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹399</p>
                                <h5 className="d-inline text-success float-end">5% off</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.maybellinestay} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Maybelline Super Stay</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Long lasting liquid lipstick.</p>
                                <h5 className="text-center" style={{marginTop:"-15px"}} >₹849/-</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.sugar} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Sugar Matte Lipstick</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Transproof and Smudgeproof lipstick.</p>
                                <h5 className="d-inline">₹562/-</h5>
                                <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹749</p>
                                <h5 className="d-inline text-success float-end">25% off</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.blueheaven} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Blue Heaven Matte</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Long lasting,Hydrating Mini lipstick</p>
                                <h5 className="d-inline">₹299/-</h5>
                                <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹399</p>
                                <h5 className="d-inline text-success float-end">25% off</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="row g-4 justify-content-center mt-1">
                    
                  <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.swissbeauty} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Swiss Beauty Lip Palatte</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Lip Pallate Multi color</p>
                                <h5 className="d-inline">₹309/-</h5>
                                <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹469</p>
                                <h5 className="d-inline text-success float-end">35% off</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.renee} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Renne Stay Forever Lipstick</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Liquid Lipstick Combos.</p>
                                <h5 className="d-inline">₹599/-</h5>
                                <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹750</p>
                                <h5 className="d-inline text-success float-end">20% off</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.insight} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Insight Non-Transfer Lip color</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Red room shade lipstick.</p>
                                <h5 className="d-inline">₹229/-</h5>
                                <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹299</p>
                                <h5 className="d-inline text-success float-end">23% off</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.swiss3} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Swiss Beauty Color Change</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Color changing Lip Gel</p>
                                <h5 className="d-inline">₹214/-</h5>
                                <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹329</p>
                                <h5 className="d-inline text-success float-end">35% off</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
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

export default Lipstick
