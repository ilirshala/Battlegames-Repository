import React from "react";
import "../../../Styles/Pages/Career/CareerThird.scss";
import JobsCard from "./JobsCard";
import { firstList, secondList } from "./careerList";
import MyButton from "../../Shared/MyButton";

function CareerThird() {
  return (
    <div className='careerThird'>
      <div className='homeSecond__line'></div>
      <h1>Open positions by categories</h1>
      <div className='careerThird__row'>
        {firstList.map((card, key) => {
          return (
            <JobsCard
              key={key}
              img={card.img}
              title={card.title}
              positions={card.position}
              path={card.path}
            />
          );
        })}
      </div>
      <div className='careerThird__row'>
        {secondList.map((card, key) => {
          return (
            <JobsCard
              key={key}
              img={card.img}
              title={card.title}
              positions={card.position}
            />
          );
        })}
      </div>
      <MyButton name='View all' />
    </div>
  );
}

export default CareerThird;
