import React from "react";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import ApiContainer from "../Components/Pages/Api/ApiContainer";
import ApiBanner from "../Components/Pages/Api/ApiBanner";

function Api() {
  return (
    <div>
      <Navbar />
      <ApiContainer />
      <ApiBanner />
      <Footer />
    </div>
  );
}

export default Api;
