import React from "react";
import MyButton from "../../Shared/MyButton";
import "../../../Styles/Pages/Blog/BlogCards.scss";
import { Link } from "react-router-dom";

function BlogCards({ bgImg, title }) {
  return (
    <div className='blogCards' style={{ backgroundImage: `url(${bgImg})` }}>
      <div className='blogCards__con'>
        <div className='blogCardsHeader'>
          <div className='blogCards__date'>12.04.2021</div>
          <span style={{ color: "white", fontSize: "30px" }}>&#8226;</span>

          <p>By Battle Games</p>
        </div>
        <div className='blogCards__col'>
          <div className='blogCards__one'>
            <p>{title}</p>
          </div>
          <MyButton name='Read More' link='/firstArticle' />
        </div>
      </div>
    </div>
  );
}

export default BlogCards;
