import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Shared/MyButton.scss";

function MyButton({ name, className, icon, img, onClick, link, disable }) {
  return (
    <button onClick={onClick} className={`${className} myButton`}>
      <Link to={link}>
        <img src={img} alt='' />
        {icon}
        {name}
      </Link>
    </button>
  );
}

export default MyButton;
