import React from "react";
import MonsterFifth from "../Components/Pages/MonsterArena/MonsterFifth";
import MonsterFourth from "../Components/Pages/MonsterArena/MonsterFourth";
import MonsterHeader from "../Components/Pages/MonsterArena/MonsterHeader";
import MonsterNav from "../Components/Pages/MonsterArena/MonsterNav";
import MonsterSecond from "../Components/Pages/MonsterArena/MonsterSecond";
import MonsterSixth from "../Components/Pages/MonsterArena/MonsterSixth";
import MonsterThird from "../Components/Pages/MonsterArena/MonsterThird";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

function MonsterArena() {
  return (
    <div>
      <Navbar games=' 4px solid #00b7ff' />
      <MonsterHeader />
      <MonsterNav link1='rgba(255, 235, 235, 0.25)' />
      <MonsterSecond />
      <MonsterThird />
      <MonsterFourth />
      <MonsterFifth />
      <MonsterSixth />
      <Footer />
    </div>
  );
}

export default MonsterArena;
