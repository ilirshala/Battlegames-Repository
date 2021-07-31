import React from "react";
import "../../../Styles/Pages/Search/SearchPage.scss";
import SearchIcon from "@material-ui/icons/Search";
import MyButton from "../../Shared/MyButton";
function SearchPage() {
  return (
    <div className='searchPage'>
      <h1>Search</h1>
      <div className='searchInput'>
        <SearchIcon />
        <input type='text' placeholder='Enter Keyword' />
        <MyButton name='search' />
      </div>
    </div>
  );
}

export default SearchPage;
