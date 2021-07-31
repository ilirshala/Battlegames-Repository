import { ChevronRight } from "@material-ui/icons";
import React from "react";
import "../../../Styles/Pages/Forums/ForumsHeader.scss";

function ForumsHeader() {
  return (
    <div className='forumsHeader'>
      <div className='navSupport'>
        Support <ChevronRight /> Forums
      </div>
      <h1>All Forums</h1>
    </div>
  );
}

export default ForumsHeader;
