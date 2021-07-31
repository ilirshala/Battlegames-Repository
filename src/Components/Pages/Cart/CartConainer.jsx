import React from "react";
import "../../../Styles/Pages/Cart/CartContainer.scss";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CreditCardOutlinedIcon from "@material-ui/icons/CreditCardOutlined";
import CartProduct from "./CartProduct";
import { cartList } from "./cartList";
import CartOrder from "./CartOrder";
import { getBasketTotal } from "../../../Redux/reducer";
import { useStateValue } from "../../../Redux/StateProvider";

function CartConainer() {
  const [{ basket }] = useStateValue();
  return (
    <div className='cartContainer'>
      <div className='cartContainer__description'>
        <div className='cartContainer__cart'>
          <ShoppingCartOutlinedIcon />
          <p>Your Cart</p>
        </div>
        <div className='cart__line'></div>
        <div className='cartContainer__details'>
          <DescriptionOutlinedIcon />
          <p>Billing Details</p>
        </div>
        <div className='cartGray__line'></div>
        <div className='cartContainer__payment'>
          <CreditCardOutlinedIcon />
          <p>Payment</p>
        </div>
      </div>
      <h1>Your Shopping Cart</h1>
      <div className='cartContainer__container'>
        <div className='productsContainer'>
          <div className='productDescription'>
            <p>Product</p>
            <p>Quantity</p>
            <p>Price</p>
          </div>
          {basket?.length === 0 ? (
            <h2>Shopping cart is empty</h2>
          ) : (
            <>
              {basket?.map((item) => {
                return (
                  <CartProduct
                    id={item.id}
                    title={item.title}
                    img={item.image}
                    price={item.price}
                    quantity={item.quantity}
                    printed={item.description}
                  />
                );
              })}
            </>
          )}
        </div>
        <div className='orderSummary'>
          {basket?.length === 0 ? <h1>No Order</h1> : <CartOrder />}
        </div>
      </div>
    </div>
  );
}

export default CartConainer;
