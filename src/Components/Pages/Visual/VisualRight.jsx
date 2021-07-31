import React from "react";
import "../../../Styles/Pages/Visual/VisualRight.scss";
import VisualCard from "./VisualCard";
import { list1 } from "./visualList.js";

function VisualRight() {
  return (
    <div className='visualRight'>
      <div className='homeSecond__line'></div>
      <h1>Opened Positions</h1>
      <div className='position'>
        <div className='ux'>
          <h4>UX/UI</h4>
          <h4>X</h4>
        </div>
        <h4>Clear All</h4>
      </div>
      {list1.map((item, key) => {
        return (
          <VisualCard title={item.title} project={item.project} key={key} />
        );
      })}
    </div>
  );
}

export default VisualRight;
