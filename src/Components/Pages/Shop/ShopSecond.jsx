import React from "react";
import "../../../Styles/Pages/Shop/ShopSecond.scss";
import ShopSecondCard from "../../Shared/ShopSecondCard";
import { shopFirstList } from "./shopProducts";
import Carousel from "react-elastic-carousel";

function ShopSecond() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1450, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1750, itemsToShow: 4, itemsToScroll: 3 },
  ];
  return (
    <div className='shopSecond'>
      <div className='homeSecond__line'></div>
      <h1>What's New?</h1>
      <Carousel breakPoints={breakPoints}>
        {shopFirstList.map((product, key) => {
          return (
            <ShopSecondCard img={product.img} title={product.title} key={key} />
          );
        })}
      </Carousel>
    </div>
  );
}

export default ShopSecond;
