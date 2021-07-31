import React from "react";
import HomeFifth from "../Components/Pages/Home/HomeFifth";
import HomeFourth from "../Components/Pages/Home/HomeFourth";
import HomeHeader from "../Components/Pages/Home/HomeHeader";
import HomeSecond from "../Components/Pages/Home/HomeSecond";
import HomeSeventh from "../Components/Pages/Home/HomeSeventh";
import HomeSixth from "../Components/Pages/Home/HomeSixth";
import HomeThird from "../Components/Pages/Home/HomeThird";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//homeheader stuffs
import homeHeaderBg from "../Assets/homeHeaderBg.webp";
import homeHeader2 from "../Assets/homeHeader2.jpg";
import warArena from "../Assets/warArena.jpg";
import warArena3 from "../Assets/warArena3.jpg";
import homeHeaderVideo from "../Assets/homeHeaderVideo.mp4";
import "./Home.scss";

function Home() {
  return (
    <div>
      <Navbar home=' 4px solid #00b7ff' />
      <Carousel>
        <HomeHeader
          poster={homeHeaderBg}
          bgVideon={homeHeaderVideo}
          title='Monster Arena: World'
        />
        <HomeHeader
          poster={warArena3}
          bgVideon={homeHeaderVideo}
          title='War Arena: Titan Wars'
        />
        <HomeHeader
          poster={warArena}
          bgVideon={homeHeaderVideo}
          title='Battle Arena: Legends'
        />
        <HomeHeader
          poster={warArena3}
          bgVideon={homeHeaderVideo}
          title='Battle Arena: Chess'
        />
      </Carousel>

      <HomeSecond />
      <HomeThird />
      <HomeFourth />
      <HomeFifth />
      <HomeSixth />
      <HomeSeventh />
      <Footer />
    </div>
  );
}

export default Home;
