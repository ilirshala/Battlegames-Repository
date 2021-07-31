import React from "react";
import "../../../Styles/Pages/TShirt/TShirtDescription.scss";
import table from "../../../Assets/table.JPG";
import { useState } from "react";

function TShirtDescription() {
  const [content, setContent] = useState(null);
  const description = (
    <div className='descriptionThings'>
      <p>
        Directly from the Battle Games New 2021 Collection, this t-shirt is
        everything you've dreamed of and more. It feels soft and lightweight,
        with the right amount of stretch. It's comfortable and flattering for
        both men and women.
      </p>
      <ul>
        <li>
          100% combed and ring-spun cotton (Heather colors contain polyester)
        </li>
        <li>Fabric weight: 4.2 oz (142 g/m2)</li>
        <li>Pre-shrunk fabric</li>
        <li>Shoulder-to-shoulder taping</li>
        <li>Side-seamed</li>
      </ul>
    </div>
  );
  const size = (
    <div className='descriptionThings'>
      <img src={table} alt='' />
    </div>
  );
  const reviews = (
    <div className='descriptionThings'>
      <h4>
        (No reviews yet) <span>Write a review</span>
      </h4>
    </div>
  );
  return (
    <>
      <div className='tshirtDescription'>
        <div>
          <button onClick={() => setContent(description)}>Description</button>
          <button onClick={() => setContent(size)}>Size Guide</button>
          <button onClick={() => setContent(reviews)}>Reviews</button>
        </div>
      </div>
      {content}
    </>
  );
  {
  }
}

export default TShirtDescription;
