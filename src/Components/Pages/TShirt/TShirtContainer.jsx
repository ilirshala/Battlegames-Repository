import { ChevronRight } from "@material-ui/icons";
import React from "react";
import "../../../Styles/Pages/TShirt/TShirtContainer.scss";
import tshirtCol1 from "../../../Assets/tshirtCol1.webp";
import tshirtCol2 from "../../../Assets/tshirtCol2.webp";
import tshirtCol3 from "../../../Assets/tshirtCol3.webp";
import tshirtCol4 from "../../../Assets/tshirtCol4.webp";
import bigTshirt from "../../../Assets/bigTshirt.webp";
import MyButton from "../../Shared/MyButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShareIcon from "@material-ui/icons/Share";
import TShirtDescription from "./TShirtDescription";
import TShirtProd from "./TShirtProd";

function TShirtContainer() {
  return (
    <>
      <div className='tshirtContainer'>
        <div className='navSupport'>
          Shop <ChevronRight /> Featured Products <ChevronRight />
          <span>Battle Games Printed T-shirt</span>
        </div>
        <div className='tshirt__shirts'>
          <div className='tshirt__row'>
            <div className='tshirt__col'>
              <img src={tshirtCol1} alt='' />
            </div>
            <div className='tshirt__col'>
              <img src={tshirtCol2} alt='' />
            </div>
            <div className='tshirt__col'>
              <img src={tshirtCol3} alt='' />
            </div>
            <div className='tshirt__col'>
              <img src={tshirtCol4} alt='' />
            </div>
          </div>
          <div className='bigTshirt'>
            <img src={bigTshirt} alt='' />
          </div>
          <div className='otherShirtContainer'>
            <h2>Battle Games Printed T-Shirt</h2>
            <p>SIZE</p>
            <div className='sizeRow'>
              <button className='sizeCol'>XS</button>
              <button className='sizeCol'>S</button>
              <button className='sizeCol'>M</button>
              <button className='sizeCol'>L</button>
              <button className='sizeCol'>XL</button>
              <button className='sizeCol'>2XL</button>
            </div>
            <p>Color</p>
            <div className='sizeRow'>
              <button className='colorPicker'></button>
              <button className='colorPicker'></button>
              <button className='colorPicker'></button>
              <button className='colorPicker'></button>
            </div>
            <p>QUANTITY</p>
            <div className='quantityGrid'>
              <div className='item1'>-</div>
              <div className='item2'>1</div>
              <div className='item1'>+</div>
            </div>
            <div className='priceProcess'>
              <h3>$19.90</h3>
              <MyButton icon={<ShoppingCartIcon />} name='Add to cart' />
              <ShareIcon />
            </div>
          </div>
        </div>
      </div>
      <TShirtDescription />
      <TShirtProd />
    </>
  );
}

export default TShirtContainer;
