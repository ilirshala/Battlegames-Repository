import React from "react";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import ShopNavbar from "../Components/Pages/Shop/ShopNavbar";
import TShirtContainer from "../Components/Pages/TShirt/TShirtContainer";

function TShirt() {
  return (
    <div>
      <Navbar shop=' 4px solid #00b7ff' />
      <ShopNavbar />
      <TShirtContainer />
      <Footer />
    </div>
  );
}

export default TShirt;
