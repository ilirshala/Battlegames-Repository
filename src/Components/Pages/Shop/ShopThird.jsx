import React from "react";
import "../../../Styles/Pages/Shop/ShopThird.scss";
import ProductCard from "../../Shared/ProductCard";
import { products } from "./shopProducts";
import Carousel from "react-elastic-carousel";
import MyButton from "../../Shared/MyButton";
import { useHistory } from "react-router-dom";

function ShopThird() {
  const history = useHistory();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 3 },
    { width: 1450, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1750, itemsToShow: 4, itemsToScroll: 3 },
  ];
  return (
    <div className='shopThird'>
      <div className='homeSecond__line'></div>
      <h1>Featured Products</h1>
      <Carousel breakPoints={breakPoints}>
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
      </Carousel>
      <MyButton name='View All' link='/allProducts' />
    </div>
  );
}

export default ShopThird;
