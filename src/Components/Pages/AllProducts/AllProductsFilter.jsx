import React from "react";
import "../../../Styles/Pages/AllProducts/AllProductsFilter.scss";
import BorderAllIcon from "@material-ui/icons/BorderAll";
import ListIcon from "@material-ui/icons/List";
function AllProductsFilter() {
  return (
    <div className='allProductsFilter'>
      <div className='filters'>
        <p>Filter:</p>
        <select name='custom' id=''>
          <option value='0'>Custom</option>
          <option value='1'>Custom2</option>
          <option value='2'>Custom3</option>
          <option value='3'>Custom4</option>
          <option value='4'>Custom5</option>
        </select>
        <select name='brand' id=''>
          <option value='0'>Brand</option>
          <option value='1'>Brand2</option>
          <option value='2'>Brand3</option>
          <option value='3'>Brand4</option>
          <option value='4'>Brand5</option>
        </select>
        <select name='collection' id=''>
          <option value='0'>Collection</option>
          <option value='1'>Collection2</option>
          <option value='2'>Collection3</option>
          <option value='3'>Collection4</option>
          <option value='4'>Collection5</option>
        </select>
        <select name='size' id=''>
          <option value='0'>Size</option>
          <option value='1'>XS</option>
          <option value='2'>S</option>
          <option value='3'>M</option>
          <option value='4'>L</option>
          <option value='5'>XXL</option>
          <option value='6'>XXXL</option>
        </select>
        <select name='color' id=''>
          <option value='0'>Color</option>
          <option value='1'>Red</option>
          <option value='2'>Black</option>
          <option value='3'>White</option>
          <option value='4'>Gray</option>
          <option value='5'>Blue</option>
          <option value='6'>Purple</option>
        </select>
        <select name='price' id=''>
          <option value='0'>Price</option>
          <option value='1'>Price2</option>
          <option value='2'>Price3</option>
          <option value='3'>Price4</option>
          <option value='4'>Price5</option>
        </select>
      </div>
      <div className='sortBy'>
        <p>Sort by:</p>
        <select name='price' id=''>
          <option value='0'>Best Selling</option>
          <option value='1'>Low to High</option>
          <option value='2'>High to Low</option>
          <option value='3'>Latest</option>
          <option value='4'>Last Offers</option>
        </select>
        <div className='sortBy__others'>
          <BorderAllIcon className='blueIcon' />
          <ListIcon />
        </div>
      </div>
    </div>
  );
}

export default AllProductsFilter;
