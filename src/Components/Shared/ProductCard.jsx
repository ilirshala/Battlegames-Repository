import React from "react";
import "../../Styles/Shared/ProductCard.scss";
import MyButton from "./MyButton";
import { useStateValue } from "../../Redux/StateProvider";

function ProductCard({
  id,
  quantity,
  displayAction,
  action,
  img,
  title,
  description,
  price,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: img,
        quantity: quantity,
      },
    });
  };

  console.log(price);

  return (
    <div className='productCard'>
      <div className='productCard__img'>
        <div
          className='productCard__actions'
          style={{ display: `${displayAction}` }}>
          <h6>{action}</h6>
        </div>

        <img src={img} alt='' />
      </div>
      <h5>{title}</h5>
      <p>{description}</p>
      <h4>${price}</h4>
      <MyButton name='Add to cart' onClick={addToBasket} />
    </div>
  );
}

export default ProductCard;
