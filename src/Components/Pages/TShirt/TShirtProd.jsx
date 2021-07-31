import React from "react";
import "../../../Styles/Pages/TShirt/TShirtProd.scss";
import Carousel from "react-elastic-carousel";
import ProductCard from "../../Shared/ProductCard";
import { feauturedProd } from "../Shop/shopProducts";

function TShirtProd() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 3 },
    { width: 1450, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1750, itemsToShow: 4, itemsToScroll: 3 },
  ];
  return (
    <div className='tshirtProd'>
      <div className='homeSecond__line'></div>
      <h1>Related Products</h1>
      <Carousel breakPoints={breakPoints}>
        {feauturedProd.map((product, key) => {
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
    </div>
  );
}

export default TShirtProd;
