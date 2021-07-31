import React from "react";
import ArticleContainer from "../Components/Pages/BlogArticle/ArticleContainer";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

function FirstArticle() {
  return (
    <div>
      <Navbar />
      <ArticleContainer />
      <Footer />
    </div>
  );
}

export default FirstArticle;
