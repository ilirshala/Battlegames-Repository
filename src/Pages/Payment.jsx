import React from "react";
import PaymentContainer from "../Components/Pages/Payment/PaymentContainer";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

function Payment() {
  return (
    <div>
      <Navbar />
      <PaymentContainer />
      <Footer />
    </div>
  );
}

export default Payment;
