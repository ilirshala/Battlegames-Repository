import React from "react";
import "../../../Styles/Pages/Home/HomeFifth.scss";
import ShoppingCard from "../../Shared/ShoppingCard";
import Carousel from "react-elastic-carousel";
import { shoppingList } from "./shoppingList";
import MyButton from "../../Shared/MyButton";

function HomeFifth() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1450, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1750, itemsToShow: 4, itemsToScroll: 3 },
  ];
  return (
    <div className='homeFifth'>
      <div className='homeSecond__line'></div>
      <h1>Check out Battle Games shop</h1>
      <div className='homeSecond__carousel'>
        <Carousel breakPoints={breakPoints}>
          {shoppingList.map((item, key) => {
            return (
              <ShoppingCard
                bgImg={item.bgImg}
                title={item.title}
                price={item.price}
                key={key}
              />
            );
          })}
        </Carousel>
      </div>
      <MyButton class='myButton' name='View All' />
    </div>
  );
}

export default HomeFifth;
