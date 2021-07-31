import React from "react";
import VisualContainer from "../Components/Pages/Visual/VisualContainer";
import VisualHeader from "../Components/Pages/Visual/VisualHeader";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

function VisualDesign() {
  return (
    <div>
      <Navbar />
      <VisualHeader />
      <VisualContainer />
      <Footer />
    </div>
  );
}

export default VisualDesign;
