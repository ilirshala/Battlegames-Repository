import React from "react";
import "../../Styles/Shared/ShopSecondCard.scss";
import MyButton from "./MyButton";
function ShopSecondCard({ img, title }) {
  return (
    <div className='shopSecondCard'>
      <img src={img} alt='' />
      <p>{title}</p>
      <MyButton name='buy now' />
    </div>
  );
}

export default ShopSecondCard;
