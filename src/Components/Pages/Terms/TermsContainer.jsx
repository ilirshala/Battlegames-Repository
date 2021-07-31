import React from "react";
import "../../../Styles/Pages/Terms/TermsContainer.scss";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { list1, list2 } from "./termsList.js";

function TermsContainer() {
  const [showP1, setShowP1] = React.useState(false);
  const [showP3, setShowP3] = React.useState(false);
  const [showP4, setShowP4] = React.useState(false);
  const [showP5, setShowP5] = React.useState(false);
  const [showP6, setShowP6] = React.useState(false);
  const [showP7, setShowP7] = React.useState(false);
  return (
    <div className='termsContainer'>
      <h1>Terms of Use for Battle Games Website</h1>
      <p>
        Thank you for visiting this website (this “Site”). Battle Games is
        referred to herein as “Battle”, “we,” or “us”). Please read these Terms
        of Use (this “Agreement”) carefully before using this Site. If you do
        not agree to all of the terms contained herein, please do not use the
        Site.
      </p>
      <br />
      <p>
        PLEASE NOTE THAT THE SECTION BELOW TITLED “GOVERNING LAW AND DISPUTE
        RESOLUTION” CONTAINS A BINDING ARBITRATION AGREEMENT AND CLASS ACTION
        WAIVER. THEY AFFECT YOUR LEGAL RIGHTS. PLEASE READ THEM.
      </p>
      <h3>LAST REVISED: June 19, 2018</h3>
      <div className='listContainer'>
        <h2
          style={{ color: showP1 ? "white" : "" }}
          onClick={() => setShowP1(!showP1)}>
          Use of the Site
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        {list1.map((list, key) => {
          return (
            <>
              <p style={{ display: showP1 ? "block" : "none" }} key={key}>
                {list.p1}
              </p>
              <p style={{ display: showP1 ? "block" : "none" }} key={key}>
                {list.p2}
              </p>
              <p style={{ display: showP1 ? "block" : "none" }} key={key}>
                {list.p3}
              </p>
            </>
          );
        })}
        <h2
          style={{ color: showP3 ? "white" : "" }}
          onClick={() => setShowP3(!showP3)}>
          Your Obligations
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        {list2.map((item, key) => {
          return (
            <p style={{ display: showP3 ? "block" : "none" }} key={key}>
              {item.p1}
            </p>
          );
        })}
        <h2
          style={{ color: showP4 ? "white" : "" }}
          onClick={() => setShowP4(!showP4)}>
          Disclaimer of Warranties
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        {list2.map((item, key) => {
          return (
            <p style={{ display: showP4 ? "block" : "none" }} key={key}>
              {item.p1}
            </p>
          );
        })}
        <h2
          style={{ color: showP5 ? "white" : "" }}
          onClick={() => setShowP5(!showP5)}>
          User Submissions
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        {list2.map((item, key) => {
          return (
            <p style={{ display: showP5 ? "block" : "none" }} key={key}>
              {item.p1}
            </p>
          );
        })}
        <h2>
          Battle Games Ownership
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        <h2
          style={{ color: showP6 ? "white" : "" }}
          onClick={() => setShowP6(!showP6)}>
          Limitation of Liability and Indemnity
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        {list2.map((item, key) => {
          return (
            <p style={{ display: showP6 ? "block" : "none" }} key={key}>
              {item.p1}
            </p>
          );
        })}
        <h2>
          Governing Law and Dispute Resolution
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        <h2
          style={{ color: showP7 ? "white" : "" }}
          onClick={() => setShowP7(!showP7)}>
          Miscellaneous
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        {list2.map((item, key) => {
          return (
            <p style={{ display: showP7 ? "block" : "none" }} key={key}>
              {item.p1}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default TermsContainer;
