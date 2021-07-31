import React from "react";
import "../../../Styles/Pages/Home/HomeThird.scss";
import MyButton from "../..//Shared/MyButton";
import BlogCard from "../../Shared/BlogCard";
import logo from "../../../Assets/svg/logo.svg";
import blogImg from "../../../Assets/blogImg.webp";

function HomeThird() {
  return (
    <div className='homeThird'>
      <div className='homeThird__line'></div>
      <h1>Read our blog</h1>
      <div className='homeThird__row'>
        <BlogCard
          bgImg={blogImg}
          subtitle='NEWS'
          title='An Update Regarding Fights® Anti Cheat Programs'
          paragraf='We have zero tolerance for cheaters across all Battle Games. Our focus is to combat both cheaters and cheat providers.'
        />
        <div className='homeThird__right'>
          <div className='homeThirdRight__header'>
            <h3>POPULAR TOPICS</h3>
          </div>
          <div className='homeThirdRight__col'>
            <div className='img'></div>

            <div className='homeThirdCol__con'>
              <div className='homeThirdCol__one'>
                <h4>Gaming tips</h4>
                <h3>What Are the Benefits of Video Games?</h3>
                <p>
                  As a video game player, you interact with each fictional
                  world, often derived from myths and legends.
                </p>
              </div>
              <MyButton name='Read More' link='/firstArticle' />
            </div>
          </div>
          <div className='homeThirdRight__col col2'>
            <div className='img'></div>
            <div className='homeThirdCol__con'>
              <div className='homeThirdCol__one'>
                <h4>PS5</h4>

                <h3>Monster Arena:World Out now on PS5</h3>
                <p>
                  Play Monster Fight: Out now on PS5. Learn more about the game
                  and all the new adventures.
                </p>
              </div>
              <MyButton name='Read More' link='/firstArticle' />
            </div>
          </div>
          <div className='homeThirdRight__col col3'>
            <div className='img'>
              <img src={logo} alt='' />
              <h3>Battle Games</h3>
            </div>
            <div className='homeThirdCol__con'>
              <div className='homeThirdCol__one'>
                <h4>NEWS</h4>

                <h3>Battle Games's Play for All Charity Gaming Event</h3>
                <p>
                  Play For All was a huge success, not only because it supported
                  charities close to our hearts.
                </p>
              </div>
              <MyButton name='Read More' link='/firstArticle' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeThird;
