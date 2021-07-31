import React from "react";
import SignupPage from "../Components/Pages/Signup/SignupPage";
import Footer from "../Components/Shared/Footer";

function Signup() {
  return (
    <div>
      <SignupPage />
      <Footer displayHeader='none' />
    </div>
  );
}

export default Signup;
