import React from "react";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import ShopNavbar from "../Components/Pages/Shop/ShopNavbar";
import AllProductsHeader from "../Components/Pages/AllProducts/AllProductsHeader";
import AllProductsFilter from "../Components/Pages/AllProducts/AllProductsFilter";
import ProductsContainer from "../Components/Pages/AllProducts/ProductsContainer";
import PageNumber from "../Components/Shared/PageNumber";
import ShopFourth from "../Components/Pages/Shop/ShopFourth";

function AllProducts() {
  return (
    <div>
      <Navbar shop=' 4px solid #00b7ff' />
      <ShopNavbar />
      <AllProductsHeader />
      <AllProductsFilter />
      <ProductsContainer />
      <PageNumber />
      <ShopFourth />
      <Footer />
    </div>
  );
}

export default AllProducts;
