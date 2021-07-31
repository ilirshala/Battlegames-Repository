import React, { useState } from "react";
import "../../../../Styles/Pages/MonsterArena/MonsterSystem/MonsterSystemCon.scss";
import MonsterSystemCard from "./MonsterSystemCard";
import { windowsList, macList } from "./monsterSystemCardList";

function MonsterSystemCon() {
  const windowsBr = <div className='windowsBr'></div>;
  const macBr = <div className='macBr'></div>;

  const [windowsH, setWindowsH] = useState("");
  const [macH, setMacH] = useState("");
  const [systemTitle, setSystemTitle] = useState("Windows");

  const [br, setBr] = useState(windowsBr);

  const windowsCard = (
    <div className='monsterSystem__container'>
      <h2>{systemTitle}</h2>
      {windowsList.map((item, key) => {
        return (
          <MonsterSystemCard
            minimumSystem={item.minimumSystem}
            minimumCpu={item.minimumCpu}
            minimumMemory={item.minimumMemory}
            minimumGraphics={item.minimumGraphics}
            minimumNetwork={item.minimumNetwork}
            minimumStorage={item.minimumStorage}
            minimumSound={item.minimumSound}
            recomendedSys={item.recomendedSys}
            recomendedCpu={item.recomendedCpu}
            recomendedMemory={item.recomendedMemory}
            recomendedNetwork={item.recomendedNetwork}
            recomendedGraphics={item.recomendedGraphics}
            recomendedStorage={item.recomendedStorage}
            recomendedSound={item.recomendedSound}
            key={key}
          />
        );
      })}
    </div>
  );

  const macCard = (
    <div className='monsterSystem__container'>
      <h2>{systemTitle}</h2>
      {macList.map((item, key) => {
        return (
          <MonsterSystemCard
            minimumSystem={item.minimumSystem}
            minimumCpu={item.minimumCpu}
            minimumMemory={item.minimumMemory}
            minimumGraphics={item.minimumGraphics}
            minimumNetwork={item.minimumNetwork}
            minimumStorage={item.minimumStorage}
            minimumSound={item.minimumSound}
            recomendedSys={item.recomendedSys}
            recomendedCpu={item.recomendedCpu}
            recomendedMemory={item.recomendedMemory}
            recomendedNetwork={item.recomendedNetwork}
            recomendedGraphics={item.recomendedGraphics}
            recomendedStorage={item.recomendedStorage}
            recomendedSound={item.recomendedSound}
            key={key}
          />
        );
      })}
    </div>
  );

  const [container, setContainer] = useState(windowsCard);

  const setMacBr = () => {
    setBr(macBr);
    setWindowsH("gray");
    setMacH("white");
    setSystemTitle("Windows");
    setContainer(macCard);
  };
  const setWindowsBr = () => {
    setBr(windowsBr);
    setWindowsH("white");
    setMacH("gray");
    setSystemTitle("Mac");
    setContainer(windowsCard);
  };

  return (
    <div className='monsterSystemCon'>
      <div className='monsterSystems__header'>
        <div className='homeSecond__line'></div>
        <h1>Featured & Recommended</h1>
        <div className='systemChoice'>
          <h2
            className='activeH'
            style={{ color: `${windowsH}` }}
            onClick={setWindowsBr}>
            Windows
          </h2>
          <h2 style={{ color: `${macH}` }} onClick={setMacBr}>
            Mac
          </h2>
        </div>
        {br}
      </div>
      {container}
    </div>
  );
}

export default MonsterSystemCon;
