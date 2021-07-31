import React from "react";
import MonsterHeader from "../Components/Pages/MonsterArena/MonsterHeader";
import MonsterNav from "../Components/Pages/MonsterArena/MonsterNav";
import MonsterScreenCon from "../Components/Pages/MonsterArena/MonsterScreenshot/MonsterScreenCon";
import MonsterSixth from "../Components/Pages/MonsterArena/MonsterSixth";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

function MonsterScreenshot() {
  return (
    <div>
      <Navbar games=' 4px solid #00b7ff' />
      <MonsterHeader />
      <MonsterNav link2='rgba(255, 235, 235, 0.25)' />
      <MonsterScreenCon />
      <MonsterSixth />
      <Footer />
    </div>
  );
}

export default MonsterScreenshot;
