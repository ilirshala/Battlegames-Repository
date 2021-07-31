import React from "react";
import "../../../Styles/Pages/Games/GamesContainer.scss";
import GamesCategories from "./GamesCategories";
import GamesRight from "./GamesRight";

function GamesContainer() {
  return (
    <div className='gamesContainer'>
      <div className='gamesContainer__categories'>
        <GamesCategories />
      </div>
      <div className='gamesContainer__right'>
        <GamesRight />
      </div>
    </div>
  );
}

export default GamesContainer;
