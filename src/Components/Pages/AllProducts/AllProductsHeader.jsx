import React from "react";
import "../../../Styles/Pages/AllProducts/AllProductsHeader.scss";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
function AllProductsHeader() {
  return (
    <div className='allProductsHeader'>
      <h4>
        Shop <ChevronRightIcon /> All Products{" "}
      </h4>
      <h1>All Products</h1>
    </div>
  );
}

export default AllProductsHeader;
