import React from "react";
import "../../../Styles/Pages/MonsterArena/MonsterFourth.scss";

function MonsterFourth() {
  return (
    <div className='monsterFourth'>
      <div className='monsterFourth__left'>
        <h1>Game Overview</h1>
        <p>Battle gigantic monsters in epic locales.</p>
        <p>
          As a hunter, you'll take on quests to hunt monsters in a variety of
          habitats. Take down these monsters and receive materials that you can
          use to create stronger weapons and armor in order to hunt even more
          dangerous monsters.
        </p>
        <p>
          In Monster Arena: World, the latest installment in the series, you can
          enjoy the ultimate hunting experience, using everything at your
          disposal to hunt monsters in a new world teeming with surprises and
          excitement.
        </p>
      </div>
      <div className='monsterFourth__right'>
        <div className='monsterFourthContainer'>
          <ul>
            <li>
              <h3>Type:</h3> <p>Open World Action Adventure</p>
            </li>
            <li>
              <h3>Languages:</h3>{" "}
              <p>English, German, Spanish, Russian, Italian,</p>
            </li>
            <li>
              <h3>Age:</h3> <p>16+</p>
            </li>
            <li>
              <h3>Publisher:</h3> <p>Battle Games</p>
            </li>
            <li>
              <h3>Release date:</h3> <p>20/05/2020</p>
            </li>
            <li>
              <h3>Publisher:</h3> <p>Battle Games</p>
            </li>
            <li>
              <h3>Developer:</h3> <p>Battle Games</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MonsterFourth;
