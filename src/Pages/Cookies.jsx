import React from "react";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import CookiesContainer from "../Components/Pages/Cookies/CookiesContainer";

function Cookies() {
  return (
    <div>
      <Navbar />
      <CookiesContainer />
      <Footer />
    </div>
  );
}

export default Cookies;
