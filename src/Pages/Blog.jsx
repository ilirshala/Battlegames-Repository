import React from "react";
import BlogContainer from "../Components/Pages/Blog/BlogContainer";
import BlogHeader from "../Components/Pages/Blog/BlogHeader";
import BlogSecond from "../Components/Pages/Blog/BlogSecond";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

function Blog() {
  return (
    <div>
      <Navbar blog=' 4px solid #00b7ff' />
      <BlogHeader />
      <BlogSecond />
      <BlogContainer />
      <Footer />
    </div>
  );
}

export default Blog;
