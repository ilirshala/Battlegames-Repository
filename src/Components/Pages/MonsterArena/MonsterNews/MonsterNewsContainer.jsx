import React from "react";
import "../../../../Styles/Pages/MonsterArena/MonsterNews/MonsterNewsContainer.scss";
import MonsterNewsCard from "./MonsterNewsCard";
import { newsList1, newsList2 } from "./monsterrNewsList";
import MyButton from "../../../Shared/MyButton";

function MonsterNewsContainer() {
  return (
    <div className='monsterNewsContainer'>
      <div className='homeSecond__line'></div>
      <h1>Monster Arena: World News</h1>
      <div className='monsterNews__row'>
        {newsList1.map((list, key) => {
          return (
            <MonsterNewsCard
              bgImage={list.bgImage}
              title={list.title}
              subtitle={list.subtitle}
              paragraf={list.paragraf}
              key={key}
            />
          );
        })}
      </div>
      <div className='monsterNews__row'>
        {newsList2.map((list, key) => {
          return (
            <MonsterNewsCard
              bgImage={list.bgImage}
              title={list.title}
              subtitle={list.subtitle}
              paragraf={list.paragraf}
              key={key}
            />
          );
        })}
      </div>
      <MyButton name='load more' />
    </div>
  );
}

export default MonsterNewsContainer;
