import React from "react";
import logo from "../../../Assets/svg/logo.svg";
import MailIcon from "@material-ui/icons/Mail";
import MyButton from "../../Shared/MyButton";
import "../../../Styles/Pages/ForgotPass/ForgotPassPage.scss";
import { Link } from "react-router-dom";

function ForgotPassPage() {
  return (
    <div className='forgotPass'>
      <div className='loginLogo'>
        <Link to='/'>
          <img src={logo} alt='' />
          <h3>Battle Games</h3>
        </Link>
      </div>
      <div className='forgotPassContainer'>
        <div className='loginHeader'>
          <h4>Reset Password</h4>
        </div>
        <div className='loginInput'>
          <MailIcon />
          <input type='text' placeholder='Enter email' />
        </div>
        <MyButton name='RESET' />
      </div>
    </div>
  );
}

export default ForgotPassPage;
