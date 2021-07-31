import React from "react";
import "../../../Styles/Pages/MonsterArena/MonsterNav.scss";
import apple from "../../../Assets/svg/apple.svg";
import desktop from "../../../Assets/svg/desktop.svg";
import MyButton from "../../Shared/MyButton";
import { Link } from "react-router-dom";

function MonsterNav({ link1, link2, link3, link4, link5, link6 }) {
  return (
    <div className='monsterNav'>
      <div className='monsterNav__list'>
        <ul>
          <Link to='/monsterArena'>
            <li style={{ background: `${link1}` }}>Overview</li>
          </Link>
          <Link to='/monsterScreenshot'>
            <li style={{ background: `${link2}` }}>Screenshots</li>
          </Link>
          <Link to='monsterVideos'>
            {" "}
            <li style={{ background: `${link3}` }}>Videos</li>
          </Link>
          <Link to='/monsterSystems'>
            <li style={{ background: `${link4}` }}>System Requirements</li>
          </Link>
          <Link to='/monsterContent'>
            <li style={{ background: `${link5}` }}>Additional Content</li>
          </Link>
          <Link to='monsterNews'>
            {" "}
            <li style={{ background: `${link6}` }}>News</li>
          </Link>
        </ul>
      </div>
      <div className='monsterDownload'>
        <div className='monsterApps'>
          <div>
            <img src={apple} alt='' />
          </div>
          <div>
            <img src={desktop} alt='' />
          </div>
        </div>
        <MyButton name='DOwnaload' />
      </div>
    </div>
  );
}

export default MonsterNav;
