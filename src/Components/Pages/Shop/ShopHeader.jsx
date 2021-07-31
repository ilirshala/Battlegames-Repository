import React from "react";
import "../../../Styles/Pages/Shop/ShopHeader.scss";
import ShopNavbar from "./ShopNavbar";
import MyButton from "../../Shared/MyButton";
import fotoLeft from "../../../Assets/fotoLeft.webp";
import fotoMiddle from "../../../Assets/fotoMiddle.webp";
import fotoRight from "../../../Assets/fotoRight.webp";
import Carousel from "react-elastic-carousel";

function ShopHeader() {
  return (
    <div className='shopHeader'>
      <ShopNavbar />
      <h1>Individual Collection</h1>
      <MyButton className='redButton' name='get 15% off' />
      <Carousel>
        <div className='productsOnSale'>
          <img src={fotoLeft} alt='' />
          <img className='smDeviceNone' src={fotoMiddle} alt='' />
          <img className='smDeviceNone' src={fotoRight} alt='' />
        </div>
        <div className='productsOnSale'>
          <img className='smDeviceNone' src={fotoLeft} alt='' />
          <img src={fotoMiddle} alt='' />
          <img className='smDeviceNone' src={fotoRight} alt='' />
        </div>
        <div className='productsOnSale'>
          <img className='smDeviceNone' src={fotoLeft} alt='' />
          <img className='smDeviceNone' src={fotoMiddle} alt='' />
          <img src={fotoRight} alt='' />
        </div>
      </Carousel>
      <p>Discover newest collection of Battle Games</p>
      <MyButton className='blackButton' name='SHOP NOW' />
    </div>
  );
}

export default ShopHeader;
