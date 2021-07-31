import React from "react";
import HelpSupportContainer from "../Components/Pages/HelpSupport/HelpSupportContainer";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

function SupportHelp() {
  return (
    <div>
      <Navbar support=' 4px solid #00b7ff' />
      <HelpSupportContainer />
      <Footer />
    </div>
  );
}

export default SupportHelp;
