import { Avatar } from "@material-ui/core";
import React from "react";
import "../../../Styles/Pages/Forums/ForumLatest.scss";
import latestCol2 from "../../../Assets/latestCol2.png";
import latestCol3 from "../../../Assets/latestCol3.png";
import latestCol4 from "../../../Assets/latestCol4.png";

function ForumLatest() {
  return (
    <div className='forumLatest'>
      <div className='forumLatest__header'>
        <h3>Latest Threeads</h3>
      </div>
      <div className='forumsLatest__col'>
        <div className='forumsLatestCol__profile'>
          <Avatar src='https://i.pinimg.com/236x/9e/ed/7b/9eed7b50a6915e51aaf3df183104f710.jpg' />
          <p>
            <span>user13291</span> started a thread [Missing Content]
            <span> im missing the 10424</span> file in PC in
            <span> Battle Games Forum</span>
          </p>
        </div>
        <div className='colTimeStamp'>
          <h3>1 min ago</h3>
          <div className='viewers'>
            <h3>0 views</h3>
            <div></div>
            <h3>0 replies</h3>
          </div>
        </div>
        <hr />
      </div>
      <div className='forumsLatest__col'>
        <div className='forumsLatestCol__profile'>
          <Avatar src={latestCol2} />
          <p>
            <span>user13291</span> started a thread [Missing Content]
            <span> im missing the 10424</span> file in PC in
            <span> Battle Games Forum</span>
          </p>
        </div>
        <div className='colTimeStamp'>
          <h3>1 min ago</h3>
          <div className='viewers'>
            <h3>0 views</h3>
            <div></div>
            <h3>0 replies</h3>
          </div>
        </div>
        <hr />
      </div>
      <div className='forumsLatest__col'>
        <div className='forumsLatestCol__profile'>
          <Avatar src={latestCol3} />
          <p>
            <span>user13291</span> started a thread [Missing Content]
            <span> im missing the 10424</span> file in PC in
            <span> Battle Games Forum</span>
          </p>
        </div>
        <div className='colTimeStamp'>
          <h3>1 min ago</h3>
          <div className='viewers'>
            <h3>0 views</h3>
            <div></div>
            <h3>0 replies</h3>
          </div>
        </div>
        <hr />
      </div>
      <div className='forumsLatest__col'>
        <div className='forumsLatestCol__profile'>
          <Avatar src={latestCol4} />
          <p>
            <span>user13291</span> started a thread [Missing Content]
            <span> im missing the 10424</span> file in PC in
            <span> Battle Games Forum</span>
          </p>
        </div>
        <div className='colTimeStamp'>
          <h3>1 min ago</h3>
          <div className='viewers'>
            <h3>0 views</h3>
            <div></div>
            <h3>0 replies</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForumLatest;
