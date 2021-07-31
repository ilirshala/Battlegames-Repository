import React, { useState } from "react";
import "../../Styles/Shared/NavbarResp.scss";
import logo from "../../Assets/svg/logo.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import home from "../../Assets/svg/home.svg";
import games from "../../Assets/svg/games.svg";
import shop from "../../Assets/svg/shop.svg";
import about from "../../Assets/svg/about.svg";
import blog from "../../Assets/svg/blog.svg";
import support from "../../Assets/svg/support.svg";
import MyButton from "./MyButton";

//games Icons
import game1 from "../../Assets/svg/game1.svg";
import game2 from "../../Assets/svg/game2.svg";
import game3 from "../../Assets/svg/game3.svg";
import game4 from "../../Assets/svg/game4.svg";
import game5 from "../../Assets/svg/game5.svg";
import game6 from "../../Assets/svg/game6.svg";
import game7 from "../../Assets/svg/game7.svg";
import game8 from "../../Assets/svg/game8.svg";

//support icons
import help from "../../Assets/svg/help.svg";
import forums from "../../Assets/svg/forums.svg";
import faq from "../../Assets/svg/faq.svg";
import accesibility from "../../Assets/svg/accesibility.svg";
import contacts from "../../Assets/svg/contacts.svg";

function NavbarResp({ closeMenu }) {
  const [showGames, setShowGames] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  return (
    <div className='navbarResp'>
      <div className='navbarRespHeader'>
        <div className='navbarResp__logo'>
          <Link to='/'>
            <img src={logo} alt='' />
            <h1>Battle Games</h1>
          </Link>
        </div>
        <CloseIcon onClick={closeMenu} />
      </div>
      <div className='navbarResp__content'>
        <div className='nabarRespLink'>
          <h4>
            <Link to='/'>
              <img src={home} alt='' /> Home
            </Link>
          </h4>
        </div>
        <div className='nabarRespLink' onClick={() => setShowGames(!showGames)}>
          <h4>
            <img src={games} alt='' />
            <Link to='/games'>Games</Link>
          </h4>
          <ExpandMoreIcon />
        </div>
        <ul id='gamesUl' style={{ display: showGames ? "block" : "none" }}>
          <li>
            <Link to='/monsterArena'>
              <img src={game1} alt='' />
              Monster Arena: World
            </Link>
          </li>
          <li>
            <img src={game2} alt='' />
            War Arena: Titan Wars
          </li>
          <li>
            <img src={game3} alt='' />
            Battle Arena: Legends
          </li>
          <li>
            <img src={game4} alt='' />
            Battle Arena: Chess
          </li>
          <li>
            <img src={game5} alt='' />
            Puzzle Arena: Sphere
          </li>
          <li>
            <img src={game6} alt='' />
            Glymber
          </li>
          <li>
            <img src={game7} alt='' />
            Swimaze
          </li>
          <li>
            <img src={game8} alt='' />
            Battle Games App
          </li>
        </ul>
        <div className='nabarRespLink'>
          <h4>
            <Link to='/shop'>
              <img src={shop} alt='' /> Shop
            </Link>
          </h4>
        </div>
        <div className='nabarRespLink'>
          <h4>
            <Link to='/about'>
              <img src={about} alt='' /> About
            </Link>
          </h4>
        </div>
        <div className='nabarRespLink'>
          <h4>
            <Link to='/blog'>
              <img src={blog} alt='' /> Blog
            </Link>
          </h4>
        </div>
        <div
          className='nabarRespLink'
          onClick={() => setShowSupport(!showSupport)}>
          <h4>
            <img src={support} alt='' />
            Support
          </h4>
          <ExpandMoreIcon />
        </div>
        <ul id='forumList' style={{ display: showSupport ? "block" : "none" }}>
          <li>
            <Link to='/support-help'>
              <img src={help} alt='' />
              Help
            </Link>
          </li>
          <li>
            <Link to='/forums'>
              <img src={forums} alt='' />
              Forums
            </Link>
          </li>
          <li>
            <Link to='/faq'>
              <img src={faq} alt='' />
              Faq
            </Link>
          </li>
          <li>
            <img src={accesibility} alt='' />
            Accessibility
          </li>
          <li>
            <Link to='/contact'>
              <img src={contacts} alt='' />
              Contacts
            </Link>
          </li>
        </ul>
        <div className='navbarRespButtons'>
          <MyButton name='login' className='loginButton' />
          <MyButton name='Signup' className='signupButton' />
        </div>
      </div>
    </div>
  );
}

export default NavbarResp;
