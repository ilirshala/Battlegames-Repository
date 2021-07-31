import React, { useState } from "react";
import "../../Styles/Shared/CartMenu.scss";
import CloseIcon from "@material-ui/icons/Close";
import MyButton from "./MyButton";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../Redux/StateProvider";
import { getBasketTotal } from "../../Redux/reducer";
import CheckoutProduct from "./CheckoutProduct";
import { useHistory } from "react-router-dom";

function CartMenu({ closeFunction }) {
  const history = useHistory();
  const [{ basket }] = useStateValue();
  return (
    <div className='cartMenu'>
      <div className='cartMenu__header'>
        <h4>Your Shopping Cart</h4>
        <CloseIcon onClick={closeFunction} />
      </div>
      <div className='cartContainer'>
        {basket?.length === 0 ? (
          <h2 id='shoppingBasketEmpty'>Shopping basket is empty</h2>
        ) : (
          <>
            {basket?.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                />
              );
            })}
          </>
        )}
      </div>
      <div className='cartMenu__price'>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <div className='subtotal'>
                <p>Subtotal:</p>
                <h5>{value}</h5>
              </div>

              <div className='subtotal'>
                <p>Items in cart:</p>
                <h5>{basket.length}</h5>
              </div>
              <div className='total'>
                <p>Total</p>
                <h5>{value}</h5>
              </div>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeperator={true}
          prefix={"$"}
        />

        <MyButton name='view cart' onClick={() => history.push("/viewCart")} />
      </div>
    </div>
  );
}

export default CartMenu;
