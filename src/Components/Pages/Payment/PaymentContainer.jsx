import React from "react";
import "../../../Styles/Pages/Payment/PaymentContainer.scss";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CreditCardOutlinedIcon from "@material-ui/icons/CreditCardOutlined";
import visa from "../../../Assets/svg/visa.svg";
import paypal from "../../../Assets/svg/paypal.svg";
import appleGray from "../../../Assets/svg/appleGray.svg";
import CartOrder from "../Cart/CartOrder";
import MyButton from "../../Shared/MyButton";

function PaymentContainer() {
  return (
    <div className='paymentContainer'>
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
      <h1>Payment Options</h1>
      <br />
      <div className='paymentContainer__container'>
        <>
          <div className='paymentCard'>
            <div className='paymentCard__header'>
              <img src={visa} alt='' />
              <h4>Credit Card</h4>
            </div>
            <div className='paymentFirst'>
              <div>
                <label htmlFor=''>
                  Card Number <span>*</span>
                </label>
                <br />
                <input type='text' placeholder='4242 4242 4242' />
              </div>
              <div>
                <label htmlFor=''>
                  Security Code<span>*</span>
                </label>
                <br />
                <input type='text' placeholder='123' />
              </div>
              <div>
                <span>&#8505;</span>
                <p>The 3 digit security code on the back of your card.</p>
              </div>
            </div>
            <div className='paymentFirst'>
              <div>
                <label htmlFor=''>
                  Card Holder <span>*</span>
                </label>
                <br />
                <input type='text' placeholder='Name on Card' />
              </div>
              <div>
                <label htmlFor=''>
                  Expire Date <span>*</span>
                </label>
                <br />
                <input type='text' placeholder='MM' />
              </div>
              <div className='date'>
                <br />
                <input type='text' placeholder='YY' />
              </div>
            </div>
            <div className='checkBox'>
              <input type='checkbox' name='' id='' />
              <p>Remember my payment details</p>
            </div>
            <div className='paypal'>
              <img src={paypal} alt='' />
              <p>Paypal</p>
            </div>
            <div className='paypal'>
              <img src={appleGray} alt='' />
              <p>Apple Pay</p>
            </div>
            <MyButton name='order now' />
          </div>
        </>
        <div className='paymentOrder'>
          <CartOrder
            displayButton='none'
            displayCopyright='none'
            displayCoupon='none'
            displayPrivacy='none'
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentContainer;
