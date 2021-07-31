import React from "react";
import "../../../Styles/Pages/Signup/SignupPage.scss";
import logo from "../../../Assets/svg/logo.svg";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import LockIcon from "@material-ui/icons/Lock";
import MyButton from "../../Shared/MyButton";

function SignupPage() {
  return (
    <div className='signupPage'>
      <div className='signupLogo'>
        <Link to='/'>
          <img src={logo} alt='' />
          <h3>Battle Games</h3>
        </Link>
      </div>
      <div className='signupFormContainer'>
        <div className='signupHeader'>
          <h4>Sign Up</h4>
        </div>
        <p>
          Do you have an account?{" "}
          <span>
            <Link to='/login'>Log In</Link>
          </span>
        </p>
        <div className='signupInput'>
          <PersonIcon />
          <input type='text' placeholder='Username' />
        </div>
        <div className='signupInput'>
          <MailIcon />
          <input type='text' placeholder='Email' />
        </div>
        <div className='signupInput'>
          <LockIcon />
          <input type='password' placeholder='Password' />
        </div>
        <div className='signupInput'>
          <LockIcon />
          <input type='password' placeholder='Confirm Password' />
        </div>
        <MyButton name='Sign Up' />
        <p>
          By signing up you are agreeing to DoubleHead Games Inc's <br />
          <span>Privacy Policy</span> and <span>Terms of Service</span>.
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
