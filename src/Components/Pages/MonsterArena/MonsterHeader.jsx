import React from "react";
import "../../../Styles/Pages/MonsterArena/MonsterHeader.scss";
import MyButton from "../../Shared/MyButton";

function MonsterHeader() {
  return (
    <div className='monsterHeader'>
      <h1>Monster Arena: World</h1>
      <MyButton name='Free to play' />
    </div>
  );
}

export default MonsterHeader;
