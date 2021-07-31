import React from "react";
import "../../../Styles/Pages/Home/HomeSixth.scss";
import TestimonialCard from "../../Shared/TestimonialCard";
import Carousel from "react-elastic-carousel";
import { testimonialList } from "./testimonialList";
import MyButton from "../../Shared/MyButton";

function HomeSixth() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1450, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1750, itemsToShow: 4, itemsToScroll: 3 },
  ];
  return (
    <div className='homeSixth'>
      <h1>What people say about us</h1>
      <div className='homeSixth__row'>
        <Carousel breakPoints={breakPoints}>
          {testimonialList.map((item, key) => {
            return (
              <TestimonialCard
                logoColor={item.logoColor}
                person={item.person}
                testi={item.testi}
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

export default HomeSixth;
