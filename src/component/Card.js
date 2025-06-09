import React, { useImperativeHandle } from 'react'
import Img from '../shared/commondata'
import "./Card.css"

const Card = () => {
    return (
           

        <div style={{marginTop:"50px"}}>

          <center><h2 style={{wordSpacing:"10px",letterSpacing:"10px", fontWeight:"400"}}>SALE IS LIVE</h2></center>
        <div class="cardcontainer" style={{marginLeft:"100px", marginTop:"50px"}}>
        {/* // <div className="d-flex overflow-auto gap-5" style={{marginLeft:"100px"}}> */}
        
           
<div style={{width:"15rem"}}>
  <img src={Img.highlighter} class="card-img-top" alt="serum" height="250px"/>
  <div>
    <p class="desc-container">Golden-toned highlighter with micro-shimmer particles for a radiant and luminous finish | 6g</p>
    <div class="price-container">
        <h5>₹399</h5>
        <p class="price-cont">₹799</p>
        <h5 style={{color:"green"}}>50% off</h5>


    </div>
  </div>
</div>

{/* Card 5 - lipstick*/}
<div style={{ width: "15rem" }}>
  <img src={Img.lipstick} className="card-img-top" alt="product5" height="250px" />
  <div>
    <p className="desc-container">Long-wear liquid lipstick with bold color payoff and a transfer-proof matte finish | 4.5ml</p>
    <div className="price-container">
      <h5>₹499</h5>
      <p className="price-cont">₹599</p>
      <h5 style={{ color: "green" }}>15% off</h5>
    </div>
  </div>
</div>

{/* Card 6 */}
<div style={{ width: "15rem" }}>
  <img src={Img.mascara} className="card-img-top" alt="product6" height="250px" />
  <div>
    <p className="desc-container">Lightweight, water-resistant mascara with intense black pigment for fuller-looking lashes | 9ml</p>
    <div className="price-container">
      <h5>₹252</h5>
      <p className="price-cont">₹450</p>
      <h5 style={{ color: "green" }}>44% off</h5>
    </div>
  </div>
</div>

{/* Card 7 - eyeshadow*/}
<div style={{ width: "15rem" }}>
  <img src={Img.eyeshadow} className="card-img-top" alt="product5" height="250px" />
  <div>
    <p className="desc-container">Soft matte powder blush with a silky texture that blends easily for a natural glow | 5g</p>
    <div className="price-container">
      <h5>₹252</h5>
      <p className="price-cont">₹450</p>
      <h5 style={{ color: "green" }}>44% off</h5>
    </div>
  </div>
</div>

{/* Card 8 - eyebrow pencil */}
<div style={{ width: "15rem" }}>
  <img src={Img.eyebrow} className="card-img-top" alt="product6" height="250px" />
  <div>
    <p className="desc-container">Precision brow pencil with a fine tip for shaping and filling brows naturally | 0.25g</p>
    <div className="price-container">
      <h5>₹236</h5>
      <p className="price-cont">₹239</p>
      <h5 style={{ color: "green" }}>5% off</h5>
    </div>
  </div>
</div>

{/* Card 9 - toner*/}
<div style={{ width: "15rem" }}>
  <img src={Img.toner} className="card-img-top" alt="product5" height="250px" />
  <div>
    <p className="desc-container">Refreshing toner infused with pure rose water to hydrate and tighten pores gently | 100ml</p>
    <div className="price-container">
      <h5>₹190</h5>
      <p className="price-cont">₹325</p>
      <h5 style={{ color: "green" }}>44% off</h5>
    </div>
  </div>
</div>

{/* Card 10 - primer */}
<div style={{ width: "15rem" }}>
  <img src={Img.primer} className="card-img-top" alt="product6" height="250px" />
  <div>
    <p className="desc-container">Oil-free primer that minimizes pores, smoothens texture, and extends makeup wear | 25ml</p>
    <div className="price-container">
      <h5>₹499</h5>
      <p className="price-cont">₹599</p>
      <h5 style={{ color: "green" }}>20% off</h5>
    </div>
  </div>
</div>

{/* Card 11 - liptint*/}
<div style={{ width: "15rem" }}>
  <img src={Img.liptint} className="card-img-top" alt="product5" height="250px" />
  <div>
    <p className="desc-container">Dual-use tint with a sheer berry color for a dewy, natural flush on lips and cheeks | 10ml</p>
    <div className="price-container">
      <h5>₹252</h5>
      <p className="price-cont">₹399</p>
      <h5 style={{ color: "green" }}>30% off</h5>
    </div>
  </div>
</div>




  </div>
    </div>

    )
}

export default Card
