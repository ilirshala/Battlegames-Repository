import React from "react";
import "../../Styles/Shared/GamesMenu.scss";
import gameCol1 from "../../Assets/gameCol1.webp";
import gameCol2 from "../../Assets/gameCol2.webp";
import gameCol3 from "../../Assets/gameCol3.webp";
import gameCol4 from "../../Assets/gameCol4.webp";
import gameCol5 from "../../Assets/gameCol5.webp";
import gameCol6 from "../../Assets/gameCol6.webp";
import gameCol7 from "../../Assets/gameCol7.webp";
import MyButton from "../Shared/MyButton";
import ControlCameraOutlinedIcon from "@material-ui/icons/ControlCameraOutlined";
import logoBlue from "../../Assets/svg/logoBlue.svg";
import { Link } from "react-router-dom";

function GamesMenu() {
  return (
    <div className='gameMenu'>
      <ul>
        <Link to='/monsterArena'>
          <li className='gameList1'>
            <p>Monster Arena: World</p>
            <h4>Monster Arena: World</h4>
          </li>
        </Link>
        <Link to='/monsterArena'>
          {" "}
          <li className='gameList2'>
            <p>War Arena: Titan Wars</p>
            <img src={gameCol2} alt='' />
          </li>
        </Link>
        <Link to='/monsterArena'>
          {" "}
          <li className='gameList3'>
            <p>Battle Arena:Legends</p>
            <img src={gameCol3} alt='' />
          </li>
        </Link>
      </ul>
      <ul>
        <Link to='/monsterArena'>
          {" "}
          <li className='gameList4'>
            <p>Battle Arena: Chess</p>
            <h3>Battle Arena: Chess</h3>
          </li>
        </Link>
        <Link to='/monsterArena'>
          {" "}
          <li className='gameList5'>
            <p>Puzzle Arena: Sphere</p>
            <img src={gameCol5} alt='' />
          </li>
        </Link>
        <Link to='/monsterArena'>
          {" "}
          <li className='gameList6'>
            <p>Glymber</p>
            <img src={gameCol6} alt='' />
          </li>
        </Link>
      </ul>
      <ul className='fixList'>
        <Link to='/monsterArena'>
          {" "}
          <li className='gameList7'>
            <p>Swimaze</p>
            <img src={gameCol7} alt='' />
          </li>
        </Link>

        <li style={{ visibility: "hidden" }}></li>
        <li style={{ visibility: "hidden" }}></li>
      </ul>
      <div className='moreGames'>
        <MyButton icon={<ControlCameraOutlinedIcon />} name='View all games' />
        <MyButton img={logoBlue} name='Battle Games App' />
      </div>
    </div>
  );
}

export default GamesMenu;
