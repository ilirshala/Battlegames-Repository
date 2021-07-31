import React from "react";
import "../../../Styles/Pages/Cart/CartProduct.scss";
import { useStateValue } from "../../../Redux/StateProvider";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

function CartProduct({ id, img, title, price, quantity, printed }) {
  const [{ basket }, dispatch] = useStateValue();

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
    <div className='cartProduct'>
      <div className='cartImg_details'>
        <img src={img} alt='' />
        <div>
          <h4>{title}</h4>
          <p>Battle Games</p>
        </div>
      </div>
      <div className='cartProduct__quantity'>
        <div>
          <RemoveOutlinedIcon onClick={subQuantity} />
        </div>
        <h4>{quantity}</h4>
        <div>
          <AddOutlinedIcon onClick={addQuantity} />
        </div>
      </div>
      <div className='cartProduct__price'>
        <h3>{price}$</h3>
      </div>
      <div className='cartProduct__remove'>
        <DeleteForeverOutlinedIcon onClick={removeFromBasket} />
      </div>
    </div>
  );
}

export default CartProduct;
