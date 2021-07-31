import React from "react";
import "../../../Styles/Pages/Billing/BillingContainer.scss";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CreditCardOutlinedIcon from "@material-ui/icons/CreditCardOutlined";
import MyButton from "../../Shared/MyButton";
import CartOrder from "../Cart/CartOrder";
import { useHistory } from "react-router-dom";

function BillingContainer() {
  let history = useHistory();
  return (
    <div className='billingContainer'>
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
      <h1>Billing Details</h1>
      <div className='billingContainer__container'>
        <div className='billingDetails__left'>
          <div className='fullName'>
            <div>
              <label>
                First Name <span>*</span>
              </label>
              <br />
              <input type='text' placeholder='Enter First Name' />
            </div>
            <div>
              <label>
                Last Name <span>*</span>
              </label>
              <br />
              <input type='text' placeholder='Enter Last Name' />
            </div>
          </div>
          <br />
          <div className='inputs'>
            <label>
              Country <span>*</span>
            </label>
            <br />
            <select name='' id=''>
              <option value='0'>United States US</option>
              <option value='1'>England</option>
              <option value='2'>France</option>
              <option value='3'>China</option>
              <option value='4'>Turkey</option>
            </select>
          </div>
          <br />
          <div className='inputs'>
            <label htmlFor=''>
              Street Address <span>*</span>
            </label>
            <input type='text' placeholder='House number and street name' />
          </div>
          <br />
          <div className='inputs'>
            <label htmlFor=''>
              City<span>*</span>
            </label>
            <input type='text' placeholder='Enter City' />
          </div>
          <br />
          <div className='inputs'>
            <label>
              State <span>*</span>
            </label>
            <br />
            <select name='' id=''>
              <option value='0'>United States US</option>
              <option value='1'>England</option>
              <option value='2'>France</option>
              <option value='3'>China</option>
              <option value='4'>Turkey</option>
            </select>
          </div>
          <br />
          <div className='inputs'>
            <label htmlFor=''>
              Zip Code<span>*</span>
            </label>
            <input type='text' placeholder='Enter Zip Code' />
          </div>
          <br />
          <div className='inputs'>
            <label htmlFor=''>
              Phone<span>*</span>
            </label>
            <input type='tel' placeholder='(+1)' />
          </div>
          <br />
          <div className='inputs'>
            <label htmlFor=''>
              Email<span>*</span>
            </label>
            <input type='email' placeholder='Enter Email' />
          </div>
          <MyButton name='Continue' onClick={() => history.push("/payment")} />
        </div>
        <div className='billingDetails__right'>
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

export default BillingContainer;
