import React from "react";
import MonsterHeader from "../Components/Pages/MonsterArena/MonsterHeader";
import MonsterNav from "../Components/Pages/MonsterArena/MonsterNav";
import MonsterSixth from "../Components/Pages/MonsterArena/MonsterSixth";
import MonsterVideosCon from "../Components/Pages/MonsterArena/MonsterVideos/MonsterVideosCon";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

function MonsterVideos() {
  return (
    <div>
      <Navbar games=' 4px solid #00b7ff' />
      <MonsterHeader />
      <MonsterNav link3='rgba(255, 235, 235, 0.25)' />
      <MonsterVideosCon />
      <MonsterSixth />
      <Footer />
    </div>
  );
}

export default MonsterVideos;
