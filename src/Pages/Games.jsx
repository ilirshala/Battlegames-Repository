import React from "react";
import HomeFourth from "../Components/Pages/Home/HomeFourth";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import GamesContainer from "../Components/Pages/Games/GamesContainer";

function Games() {
  return (
    <div>
      <Navbar games=' 4px solid #00b7ff' />
      <HomeFourth />
      <GamesContainer />
      <Footer />
    </div>
  );
}

export default Games;
