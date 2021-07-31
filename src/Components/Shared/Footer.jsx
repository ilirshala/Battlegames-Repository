import React, { useState } from "react";
import "../../Styles/Shared/Footer.scss";
import FooterApps from "./FooterApps";
import logo from "../../Assets/svg/logo.svg";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import MyButton from "../Shared/MyButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FooterLanguage from "../Shared/FooterLanguage";
import ReactFlagsSelect, { Us } from "react-flags-select";
import ReactLanguageSelect from "react-languages-select";
import { Link } from "react-router-dom";

function Footer({ displayHeader }) {
  const [showList1, setShowList1] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [showList3, setShowList3] = useState(false);
  const [showList4, setShowList4] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <>
      <div className='footerHeader' style={{ display: `${displayHeader}` }}>
        <h3>Join our community on</h3>
        <FooterApps />
      </div>
      <div className='footer'>
        <div className='footer__container'>
          <div className='footer__left'>
            <div className='footerLogo'>
              <img src={logo} alt='' />
              <h3>Battle Games</h3>
            </div>
            <p>
              Join the next generation of entertainment. Receive exclusive VIP
              treatment as a member of our community and player base.
            </p>
            <div className='footerInput'>
              <MailOutlineIcon />
              <input type='text' placeholder='Your email' />
              <MyButton name='subscribe' />
            </div>
            <p>
              By clicking "Subscribe" you are agreeing to Battle Games Inc's
              Privacy Policy and Terms of Service.
            </p>
          </div>
          <div className='footer__right'>
            <div className='list'>
              <h4 onClick={() => setShowList1(!showList1)}>
                Company <ExpandMoreIcon />
              </h4>
              <ul style={{ display: showList1 ? "block" : "" }}>
                <li>
                  <Link to='/about'>About Us</Link>
                </li>
                <li>
                  <Link to='/career'>Career</Link>
                </li>
                <li>Support</li>
                <li>
                  <Link to='/allProducts'>Online Shop</Link>
                </li>
                <li>Partners</li>
              </ul>
            </div>
            <div className='list'>
              <h4 onClick={() => setShowList2(!showList2)}>
                Games <ExpandMoreIcon />
              </h4>
              <ul style={{ display: showList2 ? "block" : "" }}>
                <li>
                  <Link to='/games'>Popular Games</Link>
                </li>
                <li>
                  <Link to='/monsterArena'>Free to Play</Link>
                </li>
                <li>Download Games</li>
                <li>Newest Games</li>
                <li>Game Support</li>
              </ul>
            </div>
            <div className='list'>
              <h4 onClick={() => setShowList3(!showList3)}>
                Legal <ExpandMoreIcon />
              </h4>
              <ul style={{ display: showList3 ? "block" : "" }}>
                <li>
                  <Link to='terms-of-use'>Terms of Use</Link>
                </li>
                <li>
                  <Link to='privacy-policy'>Privacy Policy</Link>
                </li>
                <li>
                  <Link to='support-help'>Help Center</Link>
                </li>
                <li>
                  <Link to='/cookies'>Cookie Settings</Link>
                </li>
                <li>
                  <Link to='/api'>API</Link>
                </li>
              </ul>
            </div>
            <div className='list'>
              <h4 onClick={() => setShowList4(!showList4)}>
                Quick Links <ExpandMoreIcon />
              </h4>
              <ul style={{ display: showList4 ? "block" : "" }}>
                <li>
                  <Link to='/contact'>Contact Us</Link>
                </li>
                <li>Battle Games App</li>
                <li>
                  <Link to='/faq'>FAQs</Link>
                </li>
                <li>
                  <Link to='/forums'>Forums</Link>
                </li>
                <li>Security</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footerDown'>
          <div className='copyright'>
            <p>© 2021 Battle Games. All Rights Reserved.</p>
          </div>
          <div className='languages'>
            <FooterLanguage />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
