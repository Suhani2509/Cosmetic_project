import React from 'react'
import Navbar from '../component/Navbar'
import Img from '../shared/commondata'
import Footer from '../component/Footer'

const Blush = () => {
    return (
        <div>
            <Navbar/>

            <img src={Img.blushbg} style={{margin:"20px"}} className="w-70 d-block" alt="Responsive" />
            <center><h4 style={{fontWeight:"400"}}>BLUSH STORE</h4></center>

            <div className="container mt-5">
                <div className="row g-4 justify-content-center">
                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.nybaeblush} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Nybae pro blush+highlighter</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Blush and highlighter combo</p>
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
                            <img src={Img.maybellineblush} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Maybelline new york blush</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Maybelline New york new fit me blush</p>
                                <h5 className="text-center" style={{marginTop:"-15px"}} >₹849/-</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.lakmeblush} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Lakme Natural Blush</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Lakme Face it natural blush</p>
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
                            <img src={Img.marsblush} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Mars Liquid Blush Hour</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}> Dewy-Matte Finish blush</p>
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
            </div>

            <img src={Img.blushbg2} style={{margin:"30px"}} className="w-70 d-block" alt="Responsive" />

            <div className="container mt-5">
                <div className="row g-4 justify-content-center">
                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.nybaesunset} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Nybae Sunset Skyline Blush</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Cloudy    Pink skyline blush</p>
                                <h5 className="d-inline">₹144/-</h5>
                                <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹240</p>
                                <h5 className="d-inline text-success float-end">40% off</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white" }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.insightblush} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Insight Blush</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Insight Cosmetic blush stick</p>
                                <h5 className="text-center" style={{marginTop:"-15px"}} >₹350/-</h5>
                                <div className="text-center mt-2">
                                    <button className="btn" style={{ backgroundColor: "rgb(209 0 118)", color: "white", marginTop:"17px"}}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 p-0">
                            <img src={Img.swissblush} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Swiss Blush Pallate</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}>Swiss variant color blushes</p>
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
                            <img src={Img.maybellinefitme} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body p-2">
                                <h6 className="text-center">Maybelline New york Fit me</h6>
                                <p className="text-center" style={{ fontSize: "15px", fontWeight: "300" }}> Maybelline new york mono blush </p>
                                <h5 className="d-inline">₹389/-</h5>
                                <p className="d-inline ms-2" style={{ fontSize:"17px",textDecoration:"line-through"}}>₹599</p>
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

export default Blush
