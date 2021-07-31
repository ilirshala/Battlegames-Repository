import React from "react";
import "../../../../Styles/Pages/MonsterArena/MonsterSystem/MonsterSystemCard.scss";

function MonsterSystemCard({
  minimumSystem,
  minimumCpu,
  minimumMemory,
  minimumGraphics,
  minimumNetwork,
  minimumStorage,
  minimumSound,

  recomendedSys,
  recomendedCpu,
  recomendedMemory,
  recomendedNetwork,
  recomendedGraphics,
  recomendedStorage,
  recomendedSound,
}) {
  return (
    <div className='monsterSystemCard'>
      <div className='monsterSystemCard__left'>
        <div className='monsterSystemCardLeft__header'>
          <h3>Minimum</h3>
        </div>
        <div className='monsterSystemCardLeft__list'>
          <ul>
            <li>
              <h4>OS</h4>
              <p>{minimumSystem}</p>
            </li>
            <li>
              <h4>Processor</h4>
              <p>{minimumCpu}</p>
            </li>
            <li>
              <h4>Memory</h4>
              <p>{minimumMemory}</p>
            </li>
            <li>
              <h4>Graphics</h4>
              <p>{minimumGraphics}</p>
            </li>
            <li>
              <h4>Network</h4>
              <p>{minimumNetwork}</p>
            </li>
            <li>
              <h4>Storage</h4>
              <p>{minimumStorage}</p>
            </li>
            <li>
              <h4>Sound Card</h4>
              <p>{minimumSound}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='monsterSystemCard__right'>
        <div className='monsterSystemCardRight__header'>
          <h3>Recomended</h3>
        </div>
        <div className='monsterSystemCardRight__list'>
          <ul>
            <li>
              <h4>OS</h4>
              <p>{recomendedSys}</p>
            </li>
            <li>
              <h4>Processor</h4>
              <p>{recomendedCpu}</p>
            </li>
            <li>
              <h4>Memory</h4>
              <p>{recomendedMemory}</p>
            </li>
            <li>
              <h4>Graphics</h4>
              <p>{recomendedGraphics}</p>
            </li>
            <li>
              <h4>Network</h4>
              <p>{recomendedNetwork}</p>
            </li>
            <li>
              <h4>Storage</h4>
              <p>{recomendedStorage}</p>
            </li>
            <li>
              <h4>Sound Card</h4>
              <p>{recomendedSound}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MonsterSystemCard;
