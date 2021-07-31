import React from "react";
import "../../../Styles/Pages/Blog/BlogContainer.scss";
import BlogCards from "./BlogCards";
import BlogCategories from "./BlogCategories";
import blogCards1 from "../../../Assets/blogCards1.png";
import blogCards2 from "../../../Assets/blogCards2.png";
import blogCards3 from "../../../Assets/blogCards3.png";
import otherCard1 from "../../../Assets/otherCard1.png";
import otherCard2 from "../../../Assets/otherCard2.png";
import otherCard3 from "../../../Assets/otherCard3.png";
import arenaCardPerson from "../../../Assets/arenaCardPerson.webp";
import MyButton from "../../Shared/MyButton";
import arenaSecondCardPerson from "../../../Assets/arenaSecondCardPerson.webp";
import MailIcon from "@material-ui/icons/Mail";

function BlogContainer() {
  return (
    <div className='blogContainer'>
      <div className='categories'>
        <h3>Categories</h3>
        <BlogCategories />
      </div>
      <div className='blogCardsContainer'>
        <h3>All Articles</h3>
        <BlogCards bgImg={blogCards1} title='Monster Arena: World Review' />
        <BlogCards bgImg={blogCards2} title='Brave Little Girl Review' />
        <BlogCards
          bgImg={blogCards3}
          title='Newest additions to Battle Games Shop'
        />
      </div>
      <div className='other'>
        <h2> HEll</h2>
        <div
          className='otherCard1'
          style={{ backgroundImage: `url(${otherCard1})` }}>
          <h5>Subscribe to Battle Games Blog</h5>
          <div className='otherCard__input'>
            <MailIcon />
            <input type='text' placeholder='ENTER EMAIL' />
          </div>
          <MyButton name='subscribe' />
        </div>
        <div
          className='otherCard2'
          style={{ backgroundImage: `url(${otherCard2})` }}>
          <h3>Battle Arena: Chess</h3>
          <img src={arenaCardPerson} alt='' />
          <MyButton name='play now' />
        </div>
        <div
          className='otherCard3'
          style={{ backgroundImage: `url(${otherCard3})` }}>
          <h3>Battle Arena: Legends</h3>
          <img src={arenaSecondCardPerson} alt='' />
          <MyButton name='play now' />
        </div>
      </div>
    </div>
  );
}

export default BlogContainer;
