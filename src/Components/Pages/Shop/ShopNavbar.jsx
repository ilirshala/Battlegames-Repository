import React from "react";
import "../../../Styles/Pages/Shop/ShopNavbar.scss";
import SearchIcon from "@material-ui/icons/Search";

function ShopNavbar() {
  return (
    <div className='shopNavbar'>
      <ul>
        <li>What's New?</li>
        <li>Limited Editions</li>
        <li>Clothing</li>
        <li>Accessories</li>
        <li>Collections</li>
        <li>Arts</li>
        <li>Size Guide</li>
        <li>Contact Us</li>
      </ul>
      <div className='searchInput'>
        <SearchIcon />
        <input type='text' placeholder='What are you looking for?' />
      </div>
    </div>
  );
}

export default ShopNavbar;
