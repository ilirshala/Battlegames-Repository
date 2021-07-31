import React from "react";
import "../../../Styles/Pages/Privacy/PrivacyContainer.scss";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { list3 } from "../Terms/termsList";
import privacy1 from "../../../Assets/svg/privacy1.svg";

function PrivacyContainer() {
  const [showP1, setShowP1] = React.useState(false);
  const [showP3, setShowP3] = React.useState(false);
  const [showP4, setShowP4] = React.useState(false);
  const [showP5, setShowP5] = React.useState(false);
  const [showP6, setShowP6] = React.useState(false);
  const [showP7, setShowP7] = React.useState(false);
  return (
    <div className='privacyContainer'>
      <h1>Battle Games Online Privacy Policy</h1>
      <p>
        Battle Games respects the privacy of its players and online visitors;
        and recognizes the importance of providing a secure environment for
        them. We have adopted a company-wide online Privacy Policy (“Privacy
        Policy”) that explains how we collect, store, and use the information
        you provide us. This Privacy Policy details how Blizzard safeguards the
        privacy of its online visitors and does not apply to information that
        may be collected by Battle Games offline, including but not limited to
        employment related interactions. When you click a link to other sites
        from a Battle Games website, this Privacy Policy does not apply to, and
        cannot control the activities on, those other sites. We highly recommend
        that you read the privacy policy of any third party website you may be
        directed to before providing any personally identifiable information.
      </p>
      <div className='listContainer'>
        <h2
          style={{ color: showP1 ? "white" : "" }}
          onClick={() => setShowP1(!showP1)}>
          <div>1. What personal information is?</div>
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        {list3.map((item, key) => {
          return (
            <div
              className='list'
              key={key}
              style={{ display: showP1 ? "flex" : "" }}>
              <div className='img'>
                <img src={item.img} alt='' />
              </div>
              <div>
                <h4>{item.title}</h4>
                <h5>{item.paragraf}</h5>
              </div>
            </div>
          );
        })}

        <h2
          style={{ color: showP3 ? "white" : "" }}
          onClick={() => setShowP3(!showP3)}>
          <div>2. What type of communications?</div>
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        {list3.map((item, key) => {
          return (
            <div
              className='list'
              key={key}
              style={{ display: showP3 ? "flex" : "" }}>
              <div className='img'>
                <img src={item.img} alt='' />
              </div>
              <div>
                <h4>{item.title}</h4>
                <h5>{item.paragraf}</h5>
              </div>
            </div>
          );
        })}
        <h2
          style={{ color: showP4 ? "white" : "" }}
          onClick={() => setShowP4(!showP4)}>
          <div>Who is collecting your information?</div>
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        {list3.map((item, key) => {
          return (
            <div
              className='list'
              key={key}
              style={{ display: showP4 ? "flex" : "" }}>
              <div className='img'>
                <img src={item.img} alt='' />
              </div>
              <div>
                <h4>{item.title}</h4>
                <h5>{item.paragraf}</h5>
              </div>
            </div>
          );
        })}
        <h2
          style={{ color: showP5 ? "white" : "" }}
          onClick={() => setShowP5(!showP5)}>
          <div>4. With whom may your personal ?</div>
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        {list3.map((item, key) => {
          return (
            <div
              className='list'
              key={key}
              style={{ display: showP5 ? "flex" : "" }}>
              <div className='img'>
                <img src={item.img} alt='' />
              </div>
              <div>
                <h4>{item.title}</h4>
                <h5>{item.paragraf}</h5>
              </div>
            </div>
          );
        })}
        <h2>
          <div>5. What choices do you have regarding?</div>
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        <h2
          style={{ color: showP6 ? "white" : "" }}
          onClick={() => setShowP6(!showP6)}>
          <div>6. Children and Parents</div>
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        {list3.map((item, key) => {
          return (
            <div
              className='list'
              key={key}
              style={{ display: showP6 ? "flex" : "" }}>
              <div className='img'>
                <img src={item.img} alt='' />
              </div>
              <div>
                <h4>{item.title}</h4>
                <h5>{item.paragraf}</h5>
              </div>
            </div>
          );
        })}
        <h2>
          <div>7. What are tracking technologies?</div>
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        <h2
          style={{ color: showP7 ? "white" : "" }}
          onClick={() => setShowP7(!showP7)}>
          <div>8. What are Internet Protocol addresses?</div>
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        {list3.map((item, key) => {
          return (
            <div
              className='list'
              key={key}
              style={{ display: showP7 ? "flex" : "" }}>
              <div className='img'>
                <img src={item.img} alt='' />
              </div>
              <div>
                <h4>{item.title}</h4>
                <h5>{item.paragraf}</h5>
              </div>
            </div>
          );
        })}
        <h2>
          <div>9. How secure is your personal information?</div>
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
        <h2>
          <div>10. Help for People with Disabilities</div>
          <div className='icon'>
            <ExpandMoreRoundedIcon />
          </div>
        </h2>
      </div>
    </div>
  );
}

export default PrivacyContainer;
