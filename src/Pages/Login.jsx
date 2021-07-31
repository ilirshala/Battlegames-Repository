import React from "react";
import LoginPage from "../Components/Pages/Login/LoginPage";
import Footer from "../Components/Shared/Footer";

function Login() {
  return (
    <div>
      <LoginPage />
      <Footer displayHeader='none' />
    </div>
  );
}

export default Login;
