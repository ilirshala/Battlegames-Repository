import React from "react";
import "../../../Styles/Pages/Contact/ContactContainer.scss";
import MailIcon from "@material-ui/icons/Mail";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MyButton from "../../Shared/MyButton";

function ContactContainer() {
  return (
    <div className='contactContainer'>
      <div className='contactForm'>
        <form
          action=''
          onSubmit={() => {
            alert("Please wait for provider");
          }}>
          {" "}
          <div className='contactHeader'>
            <h4>Contact</h4>
          </div>
          <div className='contactInput'>
            <MailIcon />
            <input type='text' placeholder='Email' />
          </div>
          <div className='contactInput'>
            <MailIcon />
            <input type='text' placeholder='Subject' />
          </div>
          <select name='' id=''>
            <option value=''>I need help with</option>
            <option value='0'>Games</option>
            <option value='1'>Monitor</option>
            <option value='2'>Cpu</option>
          </select>
          <div className='descriptionInput'>
            <textarea id='' cols='30' rows='10'>
              Description
            </textarea>
            <div className='attachFile'>
              <AttachFileIcon />
              <input type='file' name='' id='' title=' Hellop World' />
            </div>
          </div>
          <p>
            Please enter the details of your request. Please include as much
            detail as possible! If it would be easier to show us the problem
            than type it out, feel free to attach a screenshot.
          </p>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactContainer;
