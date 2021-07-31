import React from "react";
import AboutFifth from "../Components/Pages/About/AboutFifth";
import AboutFourth from "../Components/Pages/About/AboutFourth";
import AboutHeader from "../Components/Pages/About/AboutHeader";
import AboutSecond from "../Components/Pages/About/AboutSecond";
import AboutThird from "../Components/Pages/About/AboutThird";
import HomeSixth from "../Components/Pages/Home/HomeSixth";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

function About() {
  return (
    <div>
      <Navbar about=' 4px solid #00b7ff' />
      <AboutHeader />
      <AboutSecond />
      <AboutThird />
      <HomeSixth />
      <AboutFourth />
      <AboutFifth />
      <Footer />
    </div>
  );
}

export default About;
