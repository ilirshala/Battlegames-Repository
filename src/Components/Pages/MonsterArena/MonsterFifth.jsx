import React from "react";
import "../../../Styles/Pages/MonsterArena/MonsterFifth.scss";
import MyButton from "../../Shared/MyButton";
import apple from "../../../Assets/svg/apple.svg";
import desktop from "../../../Assets/svg/desktop.svg";

function MonsterFifth() {
  return (
    <div className='monsterFifth'>
      <h3>Ready to play?</h3>
      <h1>Monster Arena: World</h1>
      <MyButton name='play now free' />
      <div className='monsterApps'>
        <div>
          <img src={apple} alt='' />
        </div>
        <div>
          <img src={desktop} alt='' />
        </div>
      </div>
    </div>
  );
}

export default MonsterFifth;
