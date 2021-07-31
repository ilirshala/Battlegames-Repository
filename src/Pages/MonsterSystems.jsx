import React from "react";
import MonsterHeader from "../Components/Pages/MonsterArena/MonsterHeader";
import MonsterNav from "../Components/Pages/MonsterArena/MonsterNav";
import MonsterSystemCon from "../Components/Pages/MonsterArena/MonsterSystem/MonsterSystemCon";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import MonsterSixth from "../Components/Pages/MonsterArena/MonsterSixth";

function MonsterSystems() {
  return (
    <div>
      <Navbar games=' 4px solid #00b7ff' />
      <MonsterHeader />
      <MonsterNav link4='rgba(255, 235, 235, 0.25)' />
      <MonsterSystemCon />

      <MonsterSixth />

      <Footer />
    </div>
  );
}

export default MonsterSystems;
