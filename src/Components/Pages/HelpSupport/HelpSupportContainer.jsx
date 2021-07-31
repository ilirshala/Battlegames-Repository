import { ChevronRight, Search } from "@material-ui/icons";
import React from "react";
import "../../../Styles/Pages/HelpSupport/HelpSupportContainer.scss";
import HelpCard from "../../Shared/HelpCard";
import MyButton from "../../Shared/MyButton";
import { helpList, helpList2 } from "./helpList";

function HelpSupportContainer() {
  return (
    <div className='helpSupportContainer'>
      <div className='navSupport'>
        Support <ChevronRight /> Help
      </div>
      <div className='homeSecond__line'></div>
      <h1>Welcome to the Customer Support!</h1>
      <div className='searchInput'>
        <Search />
        <input type='text' placeholder=' Search' />
        <MyButton name='search' />
      </div>
      <h3>What do you need help with?</h3>
      <div className='helpSupport__row'>
        {helpList.map((item, key) => {
          return <HelpCard img={item.img} paragraf={item.paragraf} key={key} />;
        })}
      </div>
      <div className='helpSupport__row'>
        {helpList2.map((item, key) => {
          return <HelpCard img={item.img} paragraf={item.paragraf} key={key} />;
        })}
      </div>
      <h3 id='trending'>Trending Topics</h3>

      <div className='topicLists'>
        <ul>
          <h4>Getting Started</h4>
          <li>
            {" "}
            <ChevronRight />
            Guides
          </li>
          <li>
            {" "}
            <ChevronRight />
            Account Settings
          </li>
          <li>
            {" "}
            <ChevronRight />
            Editors Basics
          </li>
        </ul>
        <ul>
          <h4>Games</h4>
          <li>
            {" "}
            <ChevronRight />
            System Files
          </li>
          <li>
            {" "}
            <ChevronRight />
            System Requirements
          </li>
          <li>
            {" "}
            <ChevronRight />
            Supported Languages
          </li>
        </ul>
        <ul>
          <h4>Security</h4>
          <li>
            {" "}
            <ChevronRight />
            Device Sync
          </li>
          <li>
            {" "}
            <ChevronRight />
            2-step Verification
          </li>
          <li>
            {" "}
            <ChevronRight />
            Connected Services
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HelpSupportContainer;
