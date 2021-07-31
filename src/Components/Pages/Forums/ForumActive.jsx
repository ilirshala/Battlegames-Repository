import React from "react";
import "../../../Styles/Pages/Forums/ForumActive.scss";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";

function ForumActive() {
  return (
    <div className='forumActive'>
      <div className='forumLatest__header'>
        <h3>Currently Active Users</h3>
      </div>
      <div className='forumActive__con'>
        <GroupOutlinedIcon />
        <p>
          There are currently 4379 users online. (552 members and 3827 guests)
        </p>
      </div>
    </div>
  );
}

export default ForumActive;
