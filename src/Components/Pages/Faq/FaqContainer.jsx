import { ChevronRight } from "@material-ui/icons";
import React, { useState } from "react";
import "../../../Styles/Pages/Faq/FaqContainer.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MyButton from "../../Shared/MyButton";

function FaqContainer() {
  const [firstAns, setFirstAns] = useState(false);
  const [secAns, setSecAns] = useState(false);
  const [thirdAns, setThirdAns] = useState(false);
  const [fourthAns, setFourthAns] = useState(false);
  const [fifthAns, setFifthAns] = useState(false);
  return (
    <div className='faqContainer'>
      <div className='navSupport'>
        Support <ChevronRight /> Faq
      </div>
      <div className='homeSecond__line'></div>
      <h1>Frequently Asked Questions</h1>
      <div className='question'>
        <div className='questionOpen' onClick={() => setFirstAns(!firstAns)}>
          <h5>Which are the gaming platforms available?</h5>
          <KeyboardArrowDownIcon style={{ display: firstAns ? "none" : "" }} />
          <KeyboardArrowUpIcon
            id='upChevron'
            onClick={() => setFirstAns(!firstAns)}
            style={{ display: firstAns ? "block" : "" }}
          />
        </div>
        <hr />
        <div className='answer' style={{ display: firstAns ? "flex" : "" }}>
          <p>
            Different smart gadgets are running on different operating systems
            or platforms and the popular ones are Smartphone: Apple iOS,
            Android, Windows. For Desktop: PC (Windows), Mac & Linux. And
            Online: Browser and Facebook games.
          </p>
        </div>
      </div>
      <br />
      <div className='question'>
        <div className='questionOpen' onClick={() => setSecAns(!secAns)}>
          <h5>What are the tools & technologies used for game development?</h5>
          <KeyboardArrowDownIcon style={{ display: secAns ? "none" : "" }} />
          <KeyboardArrowUpIcon
            id='upChevron'
            onClick={() => setSecAns(!secAns)}
            style={{ display: secAns ? "block" : "" }}
          />
        </div>
        <hr />
        <div className='answer' style={{ display: secAns ? "flex" : "" }}>
          <p>
            he wide world of mobile game development requires a sound knowledge
            of most of the popular game engines. Our game development team
            embeds their creatively brilliant game themes in the technical
            specifications of the following popular programming Tools and game
            engines:
          </p>
          <br />
          <ul>
            <li>- Cocos 2D</li>
            <li>- Cocos 2D-X</li>
            <li>- Unity 3D</li>
            <li>- Box2D</li>
            <li>- ChipMunk</li>
            <li>- Corona</li>
            <li>- OpenAL</li>
            <li>- Steam Programming</li>
            <li>- OpenGL ES(1.1- 2.0+)</li>
          </ul>
        </div>
      </div>
      <br />
      <div className='question'>
        <div className='questionOpen' onClick={() => setThirdAns(!thirdAns)}>
          <h5>I play your games. How can I share feedback or report a bug?</h5>
          <KeyboardArrowDownIcon style={{ display: thirdAns ? "none" : "" }} />
          <KeyboardArrowUpIcon
            id='upChevron'
            onClick={() => setThirdAns(!thirdAns)}
            style={{ display: thirdAns ? "block" : "" }}
          />
        </div>
        <hr />
        <div className='answer' style={{ display: thirdAns ? "flex" : "" }}>
          <p>
            You can send feedback, bug reports, fan mail, and more on our
            Contact Page. We love hearing from our players!
          </p>
        </div>
      </div>
      <br />
      <div className='question'>
        <div className='questionOpen' onClick={() => setFourthAns(!fourthAns)}>
          <h5>I have a game idea, can I contact Battle Games?</h5>
          <KeyboardArrowDownIcon style={{ display: fourthAns ? "none" : "" }} />
          <KeyboardArrowUpIcon
            id='upChevron'
            onClick={() => setFourthAns(!fourthAns)}
            style={{ display: fourthAns ? "block" : "" }}
          />
        </div>
        <hr />
        <div className='answer' style={{ display: fourthAns ? "flex" : "" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus molestiae nesciunt eaque iure sit consequatur natus esse
            distinctio, tempora debitis.
          </p>
        </div>
      </div>
      <br />
      <div className='question'>
        <div className='questionOpen' onClick={() => setFifthAns(!fifthAns)}>
          <h5>I want to work at Battle Games.</h5>
          <KeyboardArrowDownIcon style={{ display: fifthAns ? "none" : "" }} />
          <KeyboardArrowUpIcon
            id='upChevron'
            onClick={() => setFifthAns(!fifthAns)}
            style={{ display: fifthAns ? "block" : "" }}
          />
        </div>
        <hr />
        <div className='answer' style={{ display: fifthAns ? "flex" : "" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus molestiae nesciunt eaque iure sit consequatur natus esse
            distinctio, tempora debitis.
          </p>
        </div>
      </div>
      <br />
      <div className='question'>
        <div className='questionOpen'>
          <h5>What kind of payments are accepted?</h5>
          <KeyboardArrowDownIcon />
        </div>
        <hr />
      </div>
      <br />
      <div className='question'>
        <div className='questionOpen'>
          <h5>I forgot my account password?</h5>
          <KeyboardArrowDownIcon />
        </div>
        <hr />
      </div>
      <br />
      <div className='question'>
        <div className='questionOpen'>
          <h5>Need support regarding games?</h5>
          <KeyboardArrowDownIcon />
        </div>
        <hr />
      </div>
      <br />
      <div className='question'>
        <div className='questionOpen'>
          <h5>Can I delete my account?</h5>
          <KeyboardArrowDownIcon />
        </div>
        <hr />
      </div>
      <br />
      <br />
      <br />
      <div className='faqBanner'>
        <h3>Still have a question?</h3>
        <p>
          Can't find what you need for? Contact us for any further information
        </p>
        <MyButton name='Contact us' />
      </div>
    </div>
  );
}

export default FaqContainer;
