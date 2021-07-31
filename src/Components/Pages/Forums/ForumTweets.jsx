import React from "react";
import "../../../Styles/Pages/Forums/ForumTweets.scss";
import TwitterIcon from "@material-ui/icons/Twitter";
import logo from "../../../Assets/svg/logo.svg";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import forum11 from "../../../Assets/forum11.webp";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";

function ForumTweets() {
  return (
    <div className='forumTweets'>
      <div className='forumTweets__header'>
        <h3>Tweets @battlegames</h3>
        <TwitterIcon />
      </div>
      <div className='tweetsDetails'>
        <div className='logoPlace'>
          <img src={logo} alt='' />
        </div>
        <h5>Battle Games</h5>
        <CheckCircleIcon />
        <span>@BattleGames</span>
      </div>
      <p>Announcing the new Battle Games Connect </p>

      <div className='postDetails'>
        <img src={forum11} alt='' />
        <div>
          <h5>Battle Games Connect ...</h5>
          <p>Welcome to Battle Games...</p>
          <h4>
            <span>battlegames.com/connect</span>
          </h4>
        </div>
      </div>
      <div className='postLikes'>
        <div>
          <FavoriteBorderIcon />
          <ShareIcon />
        </div>
        <div>
          <p>April 24, 2021</p>
        </div>
      </div>
    </div>
  );
}

export default ForumTweets;
