import React from "react";
import "../../Styles/Shared/BlogCard.scss";
import MyButton from "./MyButton";
import { useHistory } from "react-router-dom";

function BlogCard({ bgImg, subtitle, title, paragraf }) {
  const history = useHistory();
  return (
    <div
      className='homeThird__left'
      style={{ backgroundImage: `url(${bgImg})` }}>
      <div className='homeThirdLeft__con'>
        <h4>{subtitle}</h4>
        <div className='headerLeftCon__col'>
          <div className='headerLeftCol__one'>
            <h3>{title}</h3>
            <p>{paragraf}</p>
          </div>
          <MyButton name='Read More' link='/firstArticle' />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
