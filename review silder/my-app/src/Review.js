import React, { useState } from "react";

import Person from "./Data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = Person[index];

  const checkNum = (indexNum) => {
    if (indexNum > Person.length - 1) {
      console.log("fif");
      return (indexNum = 0);
    }
    if (indexNum < 0) {
      return Person.length - 1;
    }
    return indexNum;
  };
  const NextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      console.log(newIndex, "in set index");
      return checkNum(newIndex);
    });
  };
  const PrevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNum(newIndex);
    });
  };
  return (
    <div>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={image} className="person-img" />
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={PrevReview}>
            prev
          </button>
          <button className="next-btn" onClick={NextReview}>
            next
          </button>
        </div>
        <button className="random-btn">random review</button>
      </article>

    </div>
  );
};
export default Review;
