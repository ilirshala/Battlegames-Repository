import React from "react";
import "../../../Styles/Pages/Career/JobsCard.scss";
import { useHistory } from "react-router-dom";

function JobsCard({ img, title, positions, path }) {
  const history = useHistory();
  return (
    <div className='jobsCard' onClick={() => history.push(`${path}`)}>
      <div className='homeSecond__line jobs'></div>
      <img src={img} alt='' />
      <h4>{title}</h4>
      <p>{positions}</p>
    </div>
  );
}

export default JobsCard;
