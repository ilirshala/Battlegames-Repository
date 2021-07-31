import React from "react";
import "../../Styles/Shared/SupportMenu.scss";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import ControlCameraOutlinedIcon from "@material-ui/icons/ControlCameraOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import { Link } from "react-router-dom";

function SupportMenu() {
  return (
    <div className='supportMenu'>
      <ul>
        <li>
          <Link to='/support-help'>
            {" "}
            <HeadsetMicOutlinedIcon /> <p>Help</p>
          </Link>
        </li>
        <li>
          <Link to='/forums'>
            <ForumOutlinedIcon />
            <p>Forums</p>
          </Link>
        </li>
        <li>
          <Link to='/faq'>
            <ContactSupportOutlinedIcon />
            <p>FAQs</p>
          </Link>
        </li>
        <li>
          <Link to=''>
            <ControlCameraOutlinedIcon />
            <p>Accessibility</p>
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            {" "}
            <GroupOutlinedIcon />
            <p>Contacts</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SupportMenu;
