import React from "react";
import "../../../Styles/Pages/Visual/VisualContainer.scss";
import VisualLeft from "./VisualLeft";
import VisualRight from "./VisualRight";

function VisualContainer() {
  return (
    <div className='visualContainer'>
      <div className='visualContainer__left'>
        <VisualLeft />
      </div>
      <div className='visualContainer__right'>
        <VisualRight />
      </div>
    </div>
  );
}

export default VisualContainer;
