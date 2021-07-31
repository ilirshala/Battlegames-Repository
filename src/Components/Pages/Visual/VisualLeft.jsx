import React from "react";
import "../../../Styles/Pages/Visual/VisualLeft.scss";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import MyButton from "../../Shared/MyButton";

function VisualLeft() {
  return (
    <div className='visualLeft'>
      <div className='visualChecks'>
        <h3>Category</h3>
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Art / Animation</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Audio / Sound</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Analytics / Research</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Broadcast</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Community Development</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Editorial</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Finance / Accounting</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Game Design</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Game Development</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Production</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Marketing</label>
        <br />
        <br />
        <input type='checkbox' checked />
        <label htmlFor=''>UI / UX</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Human Resources</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Quality Assurance</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Business Development</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Narrative Design / Games Writing</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Management</label>
      </div>
      <div className='visualChecks'>
        <h3>Hiring Type</h3>
        <input type='checkbox' />
        <label htmlFor=''>Regular</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Temporary Worker</label>
        <br />
        <br />
      </div>
      <div className='visualChecks'>
        <h3>Employment</h3>
        <input type='checkbox' />
        <label htmlFor=''>Full Time</label>
        <br />
        <br />
        <input type='checkbox' />
        <label htmlFor=''>Part Time</label>
        <br />
        <br />
      </div>
      <div className='jobAlert'>
        <h2>Create a Job Alert</h2>
        <p>Get email notification for new opened positions</p>
        <div className='emailInput'>
          <MailOutlineIcon />
          <input type='text' placeholder='Enter Email' />
        </div>
        <div className='buttonDis'>
          <MyButton name='Create Job Alert' />
        </div>
      </div>
    </div>
  );
}

export default VisualLeft;
