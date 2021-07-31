import React from "react";
import "../../../Styles/Pages/Blog/BlogSecond.scss";
import MyButton from "../..//Shared/MyButton";
import BlogCard from "../../Shared/BlogCard";
import blogCard2 from "../../../Assets/blogCard2.webp";
import { useHistory } from "react-router";

function BlogSecond() {
  const history = useHistory();

  return (
    <div className='blogSecond'>
      <div className='blogSecond__line'></div>
      <h1>Latest Posts</h1>
      <div className='blogSecond__row'>
        <BlogCard
          bgImg={blogCard2}
          subtitle='By Battle Games'
          title='An Update Regarding Fights® Anti Cheat Programs'
          paragraf='We have zero tolerance for cheaters across all Battle Games. Our focus is to combat both cheaters and cheat providers. '
        />
        <div className='blogSecond__right'>
          <div className='blogSecondRight__header'>
            <h3>POPULAR TOPICS</h3>
          </div>
          <div className='blogSecondRight__col'>
            <div className='blogSecondCol__con'>
              <div className='blogSecondCol__one'>
                <div className='blogColHeader'>
                  <div className='date'>
                    <h5>12.04.2021</h5>
                  </div>
                  <span>&#8226;</span>
                  <p>ByBattle Games</p>
                </div>
                <h3>What Are the Benefits of Video Games?</h3>
                <p>
                  As a video game player, you interact with each fictional
                  world, often derived from myths and legends..
                </p>
              </div>
              <MyButton name='Read More' link='/firstArticle' />
            </div>
          </div>
          <div className='blogSecondRight__col col2'>
            <div className='blogSecondCol__con'>
              <div className='blogSecondCol__one'>
                <div className='blogColHeader'>
                  <div className='date'>
                    <h5>12.04.2021</h5>
                  </div>
                  <span>&#8226;</span>
                  <p>ByBattle Games</p>
                </div>
                <h3>Battle Games has a merch store!</h3>
                <p>
                  Since the beginning, we’ve been hard at work creating a line
                  of brand new cutting edge gamer gear.
                </p>
              </div>
              <MyButton name='Read More' link='/firstArticle' />
            </div>
          </div>
          <div className='blogSecondRight__col col3'>
            <div className='blogSecondCol__con'>
              <div className='blogSecondCol__one'>
                <div className='blogColHeader'>
                  <div className='date'>
                    <h5>12.04.2021</h5>
                  </div>
                  <span>&#8226;</span>
                  <p>ByBattle Games</p>
                </div>

                <h3>The Soothing Psychology of Completing Tasks in Games</h3>
                <p>The Soothing Psychology of Completing Tasks in Games</p>
              </div>
              <MyButton name='Read More' link='/firstArticle' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSecond;
