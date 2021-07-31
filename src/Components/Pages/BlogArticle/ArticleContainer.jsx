import React from "react";
import "../../../Styles/Pages/BlogArticle/ArticleContainer.scss";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Article from "./Article";

function ArticleContainer() {
  return (
    <div className='articleContainer'>
      <div className='articleHeader'>
        <div>
          <h1>Monster Arena: World Review</h1>
        </div>
      </div>
      <div className='articleLink'>
        <div>
          <p>
            Blog <ChevronRightIcon /> Monster Arena: World Review
          </p>
          <p id='centerP'>
            <span>Battle Games Blog</span>
            <FiberManualRecordIcon fontSize='small' />
            12.04.2021
            <FiberManualRecordIcon fontSize='small' />
            By Davis
          </p>
        </div>
      </div>
      <div className='articleCon'>
        <Article />
      </div>
    </div>
  );
}

export default ArticleContainer;
