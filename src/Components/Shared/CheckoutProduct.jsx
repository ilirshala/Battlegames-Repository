import React from "react";
import "../../Styles/Shared/CheckoutProduct.scss";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { IconButton } from "@material-ui/core";
import { useStateValue } from "../../Redux/StateProvider";

function CheckoutProduct({ id, title, price, image, quantity }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(quantity);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const addQuantity = () => {
    dispatch({
      type: "ADD_QUANTITY",
      id: id,
    });
  };
  const subQuantity = () => {
    dispatch({
      type: "SUB_QUANTITY",
      id: id,
    });
  };
  return (
    <div className='cartMenu__item'>
      <img src={image} alt='' />
      <div className='cartItem__con'>
        <div className='cartItem__header'>
          <h5>{title}</h5>
          <DeleteForeverOutlinedIcon onClick={removeFromBasket} />
        </div>
        <p>Games</p>
        <div className='cartItem__price'>
          <div className='cartItem__quantity'>
            <IconButton onClick={subQuantity}>-</IconButton>
            <h4>{quantity}</h4>
            <IconButton onClick={addQuantity}>+</IconButton>
          </div>
          <h4>{price}$</h4>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
