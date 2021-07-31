import { SearchOutlined } from "@material-ui/icons";
import React from "react";
import "../../../Styles/Pages/Blog/BlogCategories.scss";

function BlogCategories() {
  return (
    <div className='blogCategories'>
      <div className='blogInput'>
        <SearchOutlined />
        <input type='text' placeholder='Search Blog' />
      </div>
      <input type='checkbox' name='' id='' />
      <label htmlFor=''>All articles</label>
      <br />
      <br />
      <input type='checkbox' name='' id='' />
      <label htmlFor=''>The Ultimate Guide</label>
      <br />
      <br />
      <input type='checkbox' name='' id='' />
      <label htmlFor=''>Gaming Tips</label>
      <br />
      <br />
      <input type='checkbox' name='' id='' />
      <label htmlFor=''>Battle Games - Behind the Scenes </label>
      <br />
      <br />
      <input type='checkbox' name='' id='' />
      <label htmlFor=''>Insights</label>
      <br />
      <br />
      <input type='checkbox' name='' id='' />
      <label htmlFor=''>Community</label>
      <br />
      <br />
      <input type='checkbox' name='' id='' />
      <label htmlFor=''>Reviews</label>
      <br />
      <br />
      <input type='checkbox' name='' id='' />
      <label htmlFor=''>Shop</label>
      <br />
      <br />
      <input type='checkbox' name='' id='' />
      <label htmlFor=''>Games Blog</label>
      <br />
    </div>
  );
}

export default BlogCategories;
