import React from 'react';
import Img from '../shared/commondata';

const Slidingbar = () => {
    return (
        <div className="container-fluid px-0">
            <div 
                id="carouselExampleCaptions" 
                className="carousel slide" 
                data-bs-ride="carousel"
            >
                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                {/* Carousel Slides */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img 
                            src={Img.img2} 
                            className="d-block w-100" 
                            alt="img1" 
                            style={{ height: "500px", objectFit: "cover", opacity: "0.7" }} 
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 style={{ textShadow: "1px 1px 3px black" }}>Beauty Blossom Mascara</h5>
                            <h2 style={{ color: "lightblue", textShadow: "1px 1px 5px black" }}>
                                Monsoon sale!!! 50% off on Mascara
                            </h2>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img 
                            src={Img.courosel} 
                            className="d-block w-100" 
                            alt="img2" 
                            style={{ height: "500px", objectFit: "cover" }} 
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 style={{ textShadow: "1px 1px 3px black" }}>Buy any Product</h5>
                            <h2 style={{ color: "plum", textShadow: "1px 1px 4px black" }}>
                                Starts from just 399/-
                            </h2>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img 
                            src={Img.img3} 
                            className="d-block w-100" 
                            alt="img3" 
                            style={{ height: "500px", objectFit: "cover" }} 
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 style={{ textShadow: "1px 1px 3px black" }}>Beauty Blossom Special offer!!!</h5>
                            <h2 style={{ color: "beige", textShadow: "1px 1px 4px black" }}>
                                Buy 1 cream and get 1 compact free!!
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Carousel Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slidingbar;
