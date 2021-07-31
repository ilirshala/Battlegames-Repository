import React from "react";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import CartContainer from "../Components/Pages/Cart/CartConainer";

function ViewCart() {
  return (
    <div>
      <Navbar />
      <CartContainer />
      <Footer />
    </div>
  );
}

export default ViewCart;
