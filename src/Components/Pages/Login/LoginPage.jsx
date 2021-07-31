import React from "react";
import "../../../Styles/Pages/Login/LoginPage.scss";
import logo from "../../../Assets/svg/logo.svg";
import MailIcon from "@material-ui/icons/Mail";
import LockIcon from "@material-ui/icons/Lock";
import MyButton from "../../Shared/MyButton";
import facebook from "../../../Assets/facebook.webp";
import instagram from "../../../Assets/instagram.webp";
import twitch from "../../../Assets/twitch.webp";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className='loginPage'>
      <div className='loginLogo'>
        <Link to='/'>
          <img src={logo} alt='' />
          <h3>Battle Games</h3>
        </Link>
      </div>
      <div className='loginFormContainer'>
        <div className='loginHeader'>
          <h4>Log In</h4>
        </div>
        <p>
          Don't have an account?{" "}
          <span>
            <Link to='signup'>Create one</Link>
          </span>
        </p>
        <div className='loginInput'>
          <MailIcon />
          <input type='text' placeholder='Enter email' />
        </div>
        <div className='loginInput'>
          <LockIcon />
          <input type='password' placeholder='Password' />
        </div>

        <MyButton name='Log In' />
        <p>
          <span>
            <Link to='/forgotPass'>Forgot password?</Link>
          </span>
        </p>
        <p>Log In With</p>
        <div className='loginWith'>
          <div className='loginApp'>
            <img src={facebook} alt='' />
          </div>
          <div className='loginApp'>
            <img src={twitch} alt='' />
          </div>
          <div className='loginApp'>
            <img src={instagram} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
