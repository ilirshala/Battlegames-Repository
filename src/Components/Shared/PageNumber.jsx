import React from "react";
import "../../Styles/Shared/PageNumber.scss";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function PageNumber() {
  return (
    <div className='webinarFifth'>
      <div className='webinarFifth__col'>
        <ChevronLeftIcon />
      </div>
      <div className='webinarFifth__col' id='selected__one'>
        <p>1</p>
      </div>
      <div className='webinarFifth__col'>
        <p>2</p>
      </div>
      <div className='webinarFifth__col'>
        <p>3</p>
      </div>
      <div className='webinarFifth__col'>
        <p>4</p>
      </div>
      <div className='webinarFifth__col'>
        <p>5</p>
      </div>
      <div className='webinarFifth__col'>
        <p>...</p>
      </div>
      <div className='webinarFifth__col'>
        <p>15</p>
      </div>
      <div className='webinarFifth__col'>
        <ChevronRightIcon />
      </div>
    </div>
  );
}

export default PageNumber;
