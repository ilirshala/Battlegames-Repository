import React from "react";
import FaqContainer from "../Components/Pages/Faq/FaqContainer";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
function Faq() {
  return (
    <div>
      <Navbar support=' 4px solid #00b7ff' />
      <FaqContainer />
      <Footer />
    </div>
  );
}

export default Faq;
