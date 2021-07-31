import React from "react";
import MonsterHeader from "../Components/Pages/MonsterArena/MonsterHeader";
import MonsterNav from "../Components/Pages/MonsterArena/MonsterNav";
import MonsterNewsContainer from "../Components/Pages/MonsterArena/MonsterNews/MonsterNewsContainer";
import MonsterSixth from "../Components/Pages/MonsterArena/MonsterSixth";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

function MonsterNews() {
  return (
    <div>
      <Navbar games=' 4px solid #00b7ff' />
      <MonsterHeader />
      <MonsterNav link6='rgba(255, 235, 235, 0.25)' />
      <MonsterNewsContainer />
      <MonsterSixth />
      <Footer />
    </div>
  );
}

export default MonsterNews;
