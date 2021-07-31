import React from "react";
import SearchPage from "../Components/Pages/Search/SearchPage";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

function Search() {
  return (
    <div>
      <Navbar home=' 4px solid #00b7ff' />
      <SearchPage />
      <Footer displayHeader='none' />
    </div>
  );
}

export default Search;
