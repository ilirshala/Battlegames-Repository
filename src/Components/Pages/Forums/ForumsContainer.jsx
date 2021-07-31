import React from "react";
import "../../../Styles/Pages/Forums/ForumsContainer.scss";
import SearchIcon from "@material-ui/icons/Search";
import BorderAllIcon from "@material-ui/icons/BorderAll";
import ListIcon from "@material-ui/icons/List";
import ForumsCard from "./ForumsCard";
import { forumList1, forumList2, forumList3, forumList4 } from "./forumsList";
import ForumLatest from "./ForumLatest";
import ForumTweets from "./ForumTweets";
import ForumActive from "./ForumActive";
import ForumStatistics from "./ForumStatistics";
import MyButton from "../../Shared/MyButton";

function ForumsContainer() {
  return (
    <div className='forumsContainer'>
      <div className='forumsContainer__left'>
        <div className='forumsContainer__header'>
          <div className='forumsConHeader__input'>
            <SearchIcon />
            <input type='text' placeholder='Search Forums' />
          </div>
          <div className='sortBy__others'>
            <BorderAllIcon className='blueIcon' />
            <ListIcon />
          </div>
        </div>
        <div className='forumsContainer__row'>
          {forumList1.map((item, key) => {
            return (
              <ForumsCard
                key={key}
                bgImg={item.bgImg}
                title={item.title}
                bigTitle={item.bigTitle}
              />
            );
          })}
        </div>
        <div className='forumsContainer__row'>
          {forumList2.map((item, key) => {
            return (
              <ForumsCard
                key={key}
                bgImg={item.bgImg}
                title={item.title}
                bigTitle={item.bigTitle}
              />
            );
          })}
        </div>
        <div className='forumsContainer__row'>
          {forumList3.map((item, key) => {
            return (
              <ForumsCard
                key={key}
                bgImg={item.bgImg}
                title={item.title}
                bigTitle={item.bigTitle}
              />
            );
          })}
        </div>
        <div className='forumsContainer__row'>
          {forumList4.map((item, key) => {
            return (
              <ForumsCard
                key={key}
                bgImg={item.bgImg}
                title={item.title}
                bigTitle={item.bigTitle}
                opacity={item.opacity}
              />
            );
          })}
        </div>
        <MyButton name='load more' />
      </div>
      <div className='forumsContainer__right'>
        <ForumLatest />
        <ForumTweets />
        <ForumActive />
        <ForumStatistics />
      </div>
    </div>
  );
}

export default ForumsContainer;
