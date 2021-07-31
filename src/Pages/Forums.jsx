import React from "react";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import ForumsHeader from "../Components/Pages/Forums/ForumsHeader";
import ForumsContainer from "../Components/Pages/Forums/ForumsContainer";

function Forums() {
  return (
    <div>
      <Navbar support=' 4px solid #00b7ff' />
      <ForumsHeader />
      <ForumsContainer />
      <Footer />
    </div>
  );
}

export default Forums;
