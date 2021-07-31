import React from "react";
import "../../../Styles/Pages/AllProducts/ProductsContainer.scss";
import {
  products,
  productRow2,
  productRow3,
  productRow4,
} from "../Shop/shopProducts";
import ProductCard from "../../Shared/ProductCard";

function ProductsContainer() {
  return (
    <div className='productsContainer'>
      <div className='productsContainer__row'>
        {products.map((product, key) => {
          return (
            <ProductCard
              id={product.id}
              displayAction={product.displayAction}
              action={product.action}
              img={product.img}
              title={product.title}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
              key={key}
            />
          );
        })}
      </div>
      <div className='productsContainer__row'>
        {productRow2.map((product, key) => {
          return (
            <ProductCard
              id={product.id}
              displayAction={product.displayAction}
              action={product.action}
              img={product.img}
              title={product.title}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
              key={key}
            />
          );
        })}
      </div>
      <div className='productsContainer__row'>
        {productRow3.map((product, key) => {
          return (
            <ProductCard
              id={product.id}
              displayAction={product.displayAction}
              action={product.action}
              img={product.img}
              title={product.title}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
              key={key}
            />
          );
        })}
      </div>
      <div className='productsContainer__row'>
        {productRow4.map((product, key) => {
          return (
            <ProductCard
              id={product.id}
              displayAction={product.displayAction}
              action={product.action}
              img={product.img}
              title={product.title}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsContainer;
