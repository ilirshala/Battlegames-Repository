import React from "react";
import "../../../Styles/Pages/Career/CareerHeader.scss";
import SearchIcon from "@material-ui/icons/Search";
import MyButton from "../../Shared/MyButton";

function CareerHeader() {
  return (
    <div className='careerHeader'>
      <h1>Join our epic team</h1>
      <div className='searchInput'>
        <SearchIcon />
        <input type='text' placeholder='Search Jobs' />
        <MyButton name='search' />
      </div>
    </div>
  );
}

export default CareerHeader;
