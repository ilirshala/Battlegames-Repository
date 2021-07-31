import React from "react";
import "../../Styles/Shared/ShoppingCard.scss";
import shirt1 from "../../Assets/shirt1.webp";

function ShoppingCard({ bgImg, title, price }) {
  return (
    <div className='shoppingCard' style={{ backgroundImage: `url(${bgImg})` }}>
      <h3>{title}</h3>
      <h2>{price}</h2>
      <div className='sizes'>
        <div className='size'>
          <h4>S</h4>
        </div>
        <div className='size'>
          <h4>M</h4>
        </div>
        <div className='size'>
          <h4>L</h4>
        </div>
        <div className='size'>
          <h4>XL</h4>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCard;
