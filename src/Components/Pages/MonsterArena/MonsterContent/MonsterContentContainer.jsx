import React from "react";
import "../../../../Styles/Pages/MonsterArena/MonsterContent/MonsterContentContainer.scss";
import MonsterContentCard from "./MonsterContentCard";
import { firstList, secondList } from "./monsterContentList";

function MonsterContentContainer() {
  return (
    <div className='monsterContentContainer'>
      <div className='homeSecond__line'></div>
      <h1>Aditional Content</h1>
      <div className='monsterContent__row'>
        {firstList.map((item, key) => {
          return (
            <MonsterContentCard
              bgImage={item.bgImage}
              opacity={item.opacity}
              displayBlue={item.displayBlue}
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              key={key}
            />
          );
        })}
      </div>
      <div className='monsterContent__row'>
        {secondList.map((item, key) => {
          return (
            <MonsterContentCard
              bgImage={item.bgImage}
              opacity={item.opacity}
              displayBlue={item.displayBlue}
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MonsterContentContainer;
