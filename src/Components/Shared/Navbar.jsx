import React, { useState, useEffect, useRef } from "react";
import "../../Styles/Shared/Navbar.scss";
import logo from "../../Assets/svg/logo.svg";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory } from "react-router-dom";
import SupportMenu from "./SupportMenu";
import GamesMenu from "./GamesMenu";
import CartMenu from "./CartMenu";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import NavbarResp from "./NavbarResp";
import CloseIcon from "@material-ui/icons/Close";
import { useStateValue } from "../../Redux/StateProvider";

function Navbar({ home, games, shop, about, blog, support }) {
  const [{ basket }] = useStateValue();
  let history = useHistory();
  const [showSupportMenu, setShowSupportMenu] = useState(false);
  const [showGamesMenu, setShowGamesMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const wrapperRef = useRef(null);
  const shoppingRef = useRef(null);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  //this is for mobile menu click outside close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowNavbar(showNavbar);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  //this is for shoping Cart  click outside close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (shoppingRef.current && !shoppingRef.current.contains(event.target)) {
        setShowCart(showCart);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [shoppingRef]);

  showNavbar ? disableBodyScroll(document) : enableBodyScroll(document);
  return (
    <>
      <div
        className='supportMegaMenu'
        style={{ display: showSupportMenu ? "block" : "" }}
        onMouseLeave={() => setShowSupportMenu(!showSupportMenu)}>
        <SupportMenu />
      </div>
      <div
        className='gamesMegaMenu'
        style={{ display: showGamesMenu ? "block" : "" }}
        onMouseLeave={() => setShowGamesMenu(!showGamesMenu)}>
        <h4>Games</h4>
        <GamesMenu />
      </div>
      <div
        ref={shoppingRef}
        className='shoppingCart'
        style={{ transform: showCart ? "translateX(0)" : "" }}>
        <CartMenu closeFunction={() => setShowCart(!showCart)} />
      </div>
      <div
        ref={wrapperRef}
        className='mobileMenu'
        style={{ transform: showNavbar ? "translateX(0)" : "" }}>
        <NavbarResp closeMenu={() => setShowNavbar(!showNavbar)} />
      </div>
      <div className={navbar ? "navbar navbarActive" : "navbar"}>
        <div className='navbar__content'>
          <div className='navbar__logo'>
            <Link to='/'>
              <img src={logo} alt='' />
              <h3>Battle Games</h3>
            </Link>
          </div>

          <div className='navbar__list'>
            <ul>
              <Link to='/'>
                <li style={{ borderTop: `${home}` }}>Home</li>
              </Link>
              <Link to='/games'>
                <li
                  style={{ borderTop: `${games}` }}
                  onMouseOver={() => setShowGamesMenu(!showGamesMenu)}>
                  Games
                  <ArrowDropDownIcon />
                </li>
              </Link>
              <Link to='/shop'>
                {" "}
                <li style={{ borderTop: `${shop}` }}>Shop</li>
              </Link>
              <Link to='/about'>
                <li style={{ borderTop: `${about}` }}>About</li>
              </Link>
              <Link to='/blog'>
                <li style={{ borderTop: `${blog}` }}>Blog</li>
              </Link>
              <li
                style={{ borderTop: `${support}` }}
                onClick={() => setShowSupportMenu(!showSupportMenu)}>
                Support <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
          <div
            className='navbar__right'
            style={{ display: showNavbar ? "none" : "" }}>
            <div className='shoppingCardItems'>
              <ShoppingCartOutlinedIcon
                onClick={() => setShowCart(!showCart)}
              />
              <span>{basket?.length}</span>
            </div>
            <Link to='/search'>
              <SearchOutlinedIcon id='searchIcon' />
            </Link>

            <button
              className='loginButton'
              onClick={() => history.push("/login")}>
              Log in
            </button>
            <button
              className='signupButton'
              onClick={() => history.push("/signup")}>
              SignUp
            </button>
          </div>
          <div className='burgerIcon'>
            <MenuIcon
              style={{
                display: showNavbar ? "none" : "",
                transition: "0.2s linear",
              }}
              onClick={() => setShowNavbar(!showNavbar)}
            />
            <CloseIcon
              style={{
                display: showNavbar ? "" : "none",
                transition: "0.2s linear",
              }}
              onClick={() => setShowNavbar(!showNavbar)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
