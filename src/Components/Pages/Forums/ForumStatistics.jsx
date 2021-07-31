import React from "react";
import "../../../Styles/Pages/Forums/ForumStatistics.scss";

function ForumStatistics() {
  return (
    <div className='forumStatistics'>
      <div className='forumLatest__header'>
        <h3>Forums Statistics</h3>
      </div>
      <div className='forumStatistics__lists'>
        <ul>
          <li>
            <h5>Threads:</h5>
            <p>544,456</p>
          </li>
          <li>
            <h5>Posts:</h5>
            <p>1,345,652</p>
          </li>
          <li>
            <h5>Members:</h5>
            <p>945,235</p>
          </li>
          <li>
            <h5>Active Members:</h5>
            <p>134,578</p>
          </li>
          <li>
            <h5>Newest Member:</h5>
            <p>
              <span>Dreadlight</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ForumStatistics;
