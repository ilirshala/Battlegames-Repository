import React from "react";
import "../../../Styles/Pages/Cart/CartOrder.scss";
import MyButton from "../../Shared/MyButton";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../Redux/StateProvider";
import { getBasketTotal } from "../../../Redux/reducer";

function CartOrder({
  displayButton,
  displayCoupon,
  displayCopyright,
  displayPrivacy,
  buttonDisable,
}) {
  const [{ basket }] = useStateValue();

  let history = useHistory();
  return (
    <>
      <div className='cartOrder'>
        <div className='cartOrder__header'>
          <h3>Order Summary</h3>
        </div>
        {basket?.map((item) => {
          return (
            <div className='orderProduct'>
              <div>
                <h4>{item.title}</h4>
                <p>TShirt</p>
              </div>
              <h3>{item.price}$</h3>
            </div>
          );
        })}
        <div className='productCoupon' style={{ display: `${displayCoupon}` }}>
          <h4>Coupon</h4>
          <div className='couponInput'>
            <input type='text' placeholder='Enter Your Code' />
            <MyButton name='Apply' />
          </div>
        </div>
        <div className='cartOtherThings'>
          <ul>
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <li>
                    <p>Subtotal</p> <span>{value}</span>
                  </li>
                  <li>
                    <p>Shipping</p> <span>0$</span>
                  </li>
                  <li>
                    <h4>Total</h4> <h3>{value}</h3>
                  </li>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeperator={true}
              prefix={"$"}
            />
          </ul>
          <div style={{ display: `${displayButton}` }}>
            <MyButton
              disable={buttonDisable}
              onClick={() => history.push("/billingDetails")}
              name='Place order'
            />
          </div>
          <p style={{ display: `${displayCopyright}` }}>
            By clicking Place Order, you accept our <span>refund policy.</span>
          </p>
        </div>
      </div>
      <div className='privacy' style={{ display: `${displayPrivacy}` }}>
        <p>Security policy</p>
        <p>Return policy</p>
        <p>Delivery policy</p>
      </div>
    </>
  );
}

export default CartOrder;
