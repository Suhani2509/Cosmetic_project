import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <Navbar/>
            <div>
    <li className="nav-item dropdown mx-2 position-static">
      <Link
        className="nav-link dropdown-toggle"
        to="#"
        id="productsDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Products
      </Link>

      <div className="dropdown-menu w-100 mt-0 shadow p-4" aria-labelledby="productsDropdown">
        <div className="row">
          {/* Makeup */}
          <div className="col-md-3">
            <h6 className="text-uppercase">Makeup</h6>
            <ul className="list-unstyled">
              <li><Link to="/products/foundation">Foundation</Link></li>
              <li><Link to="/products/lipstick">Lipstick</Link></li>
              <li><Link to="/products/concealer">Concealer</Link></li>
              <li><Link to="/products/eyeliner">Eyeliner</Link></li>
            </ul>
          </div>

          {/* Skin */}
          <div className="col-md-3">
            <h6 className="text-uppercase">Skin</h6>
            <ul className="list-unstyled">
              <li><Link to="/products/moisturizers">Moisturizers</Link></li>
              <li><Link to="/products/serums">Serums</Link></li>
              <li><Link to="/products/face-wash">Face Wash</Link></li>
              <li><Link to="/products/scrubs">Scrubs</Link></li>
            </ul>
          </div>

          {/* Hair */}
          <div className="col-md-3">
            <h6 className="text-uppercase">Hair</h6>
            <ul className="list-unstyled">
              <li><Link to="/products/shampoo">Shampoo</Link></li>
              <li><Link to="/products/conditioner">Conditioner</Link></li>
              <li><Link to="/products/hair-oil">Hair Oil</Link></li>
              <li><Link to="/products/hair-mask">Hair Mask</Link></li>
            </ul>
          </div>

          {/* Appliances */}
          <div className="col-md-3">
            <h6 className="text-uppercase">Appliances</h6>
            <ul className="list-unstyled">
              <li><Link to="/products/hair-dryer">Hair Dryer</Link></li>
              <li><Link to="/products/straightener">Straightener</Link></li>
              <li><Link to="/products/curling-iron">Curling Iron</Link></li>
              <li><Link to="/products/trimmers">Trimmers</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </li>

    </div>
    </div>
  );
}

export default Products
