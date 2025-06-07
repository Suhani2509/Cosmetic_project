import React from 'react'
import Img from '../shared/commondata'

const Slidingbar = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" style={{width:"1000px", margin:"auto", marginTop:"-10px"}}>
                
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Img.img2} class="d-block w-100" alt="img1" height="500px" style={{opacity:"0.7"}} />
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{textShadow:"1px 1px 3px black"}}>Beauty Blossom Mascara</h5>
        <h2 style={{color:"lightblue" ,textShadow:"1px 1px 5px black"}}>Monsoon sale!!! 50% off on Mascara</h2>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Img.img1} class="d-block w-100" alt="img2" height="500px"/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{textShadow:"1px 1px 3px black"}}>Buy any Product</h5>
        <h2 style={{color:"plum" ,textShadow:"1px 1px 4px black"}}>Starts from just 399/-</h2>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Img.img3} class="d-block w-100" alt="img3" height="500px" />
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{textShadow:"1px 1px 3px black"}}>Beauty Blossom Special offer!!!</h5>
        <h2 style={{color:"beige" ,textShadow:"1px 1px 4px black"}}>Buy 1 cream and get 1 compact free!!</h2>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>
    )
}

export default Slidingbar
