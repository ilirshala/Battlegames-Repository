import React from "react";
import "../../../Styles/Pages/Visual/VisualCard.scss";

function VisualCard({ title, project, time }) {
  return (
    <div className='visualCard'>
      <h2>{title}</h2>
      <div className='line'></div>
      <h3>
        <span>UX/UI</span>
      </h3>
      <p>{project}</p>
      <p>Full Time</p>
    </div>
  );
}

export default VisualCard;
