import React from "react";
import MonsterContentContainer from "../Components/Pages/MonsterArena/MonsterContent/MonsterContentContainer";
import MonsterHeader from "../Components/Pages/MonsterArena/MonsterHeader";
import MonsterNav from "../Components/Pages/MonsterArena/MonsterNav";
import MonsterSixth from "../Components/Pages/MonsterArena/MonsterSixth";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

function MonsterContent() {
  return (
    <div>
      <Navbar games=' 4px solid #00b7ff' />
      <MonsterHeader />
      <MonsterNav link5='rgba(255, 235, 235, 0.25)' />
      <MonsterContentContainer />
      <MonsterSixth />
      <Footer />
    </div>
  );
}

export default MonsterContent;
