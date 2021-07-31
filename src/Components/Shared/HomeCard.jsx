import React from "react";
import "../../Styles/Shared/HomeCard.scss";
import MyButton from "../../Components/Shared/MyButton";
import { useStateValue } from "../../Redux/StateProvider";

function HomeCard({ id, title, paragraf, oldPrice, price, bgImage, quantity }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: bgImage,
        quantity: quantity,
      },
    });
  };
  return (
    <div className='homeCard' style={{ backgroundImage: `url(${bgImage})` }}>
      <h4>{title}</h4>
      <p>{paragraf}</p>
      <MyButton name='Play Now' />
    </div>
  );
}

export default HomeCard;
