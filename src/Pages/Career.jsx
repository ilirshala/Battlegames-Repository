import React from "react";
import CareerFifth from "../Components/Pages/Career/CareerFifth";
import CareerFourth from "../Components/Pages/Career/CareerFourth";
import CareerHeader from "../Components/Pages/Career/CareerHeader";
import CareerSecond from "../Components/Pages/Career/CareerSecond";
import CareerThird from "../Components/Pages/Career/CareerThird";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

function Career() {
  return (
    <div>
      <Navbar />
      <CareerHeader />
      <CareerSecond />
      <CareerThird />
      <CareerFourth />
      <CareerFifth />
      <Footer />
    </div>
  );
}

export default Career;
