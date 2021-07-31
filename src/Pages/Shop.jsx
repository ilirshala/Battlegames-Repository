import React from "react";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import ShopHeader from "../Components/Pages/Shop/ShopHeader";
import ShopSecond from "../Components/Pages/Shop/ShopSecond";
import ShopThird from "../Components/Pages/Shop/ShopThird";
import ShopFourth from "../Components/Pages/Shop/ShopFourth";

function Shop() {
  return (
    <div>
      <Navbar shop=' 4px solid #00b7ff' />
      <ShopHeader />
      <ShopSecond />
      <ShopThird />
      <ShopFourth />
      <Footer />
    </div>
  );
}

export default Shop;
