import React from "react";
import "../../../Styles/Pages/Api/ApiContainer.scss";
import JobsCard from "../Career/JobsCard";
import api1 from "../../../Assets/svg/api1.svg";
import api2 from "../../../Assets/svg/api2.svg";
import api3 from "../../../Assets/svg/api3.svg";
import { thirdList } from "../Career/careerList";

function ApiContainer() {
  return (
    <div className='apiContainer'>
      <h1>API</h1>
      <div className='apiContainer__nav'>
        <h2>API Access</h2>
        <h2>Documentation</h2>
        <h2>Forums</h2>
        <h2>Help</h2>
      </div>
      <h3>
        Our Developer Portal enables you to connect with other developers from
        around the world and use our APIs to craft the best-in-class products
        for your community.
      </h3>
      <div className='apiContainer__row'>
        {thirdList.map((card, key) => {
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
    </div>
  );
}

export default ApiContainer;
