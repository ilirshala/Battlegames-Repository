import React from "react";
import "../../../Styles/Pages/Visual/VisualHeader.scss";
import SearchIcon from "@material-ui/icons/Search";
import MyButton from "../../Shared/MyButton";

function VisualHeader() {
  return (
    <div className='visualHeader'>
      <h1>Find your role</h1>
      <div className='searchInput'>
        <SearchIcon />
        <input type='text' placeholder='Search Jobs' />
        <MyButton name='search' />
      </div>
    </div>
  );
}

export default VisualHeader;
