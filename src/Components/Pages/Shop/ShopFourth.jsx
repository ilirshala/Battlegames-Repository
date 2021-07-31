import React from "react";
import "../../../Styles/Pages/Shop/ShopFourth.scss";
import productCard1 from "../../../Assets/productCard1.webp";
import shirt1 from "../../../Assets/shirt1.webp";
import shopFourth3 from "../../../Assets/shopFourth3.png";
import shopFourth4 from "../../../Assets/shopFourth4.png";
import { Link } from "react-router-dom";

function ShopFourth() {
  return (
    <div className='shopFourth'>
      <p>Shop by categories</p>
      <div className='shopFourth__row'>
        <div className='shopFourth__col'>
          <img src={productCard1} alt='' />
          <p>Hoodies</p>
        </div>
        <Link to='/tshirt'>
          <div className='shopFourth__col'>
            <img src={shirt1} alt='' />
            <p>T-shirts</p>
          </div>
        </Link>
        <div className='shopFourth__col'>
          <img src={shopFourth3} alt='' />
          <p>Accessories</p>
        </div>
        <div className='shopFourth__col'>
          <img src={shopFourth4} alt='' />
          <p>Arts</p>
        </div>
      </div>
    </div>
  );
}

export default ShopFourth;
