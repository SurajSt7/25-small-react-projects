import React, { useState } from "react";

import "./style.css";

type StarRatingProps = {
  noOfStars: number;
};
const StarRating = (prop: StarRatingProps) => {
  const { noOfStars = 5 } = prop;
  const [hover, setHover] = useState<number>(0);
  const [star, setStar] = useState<number>(0);

  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <div
            key={index}
            className={index <= (hover || star) ? "active" : "inactive"}
            onMouseOver={() => setHover(index)}
            onMouseLeave={() => setHover(star)}
            onClick={() => setStar(index === star ? 0 : index)}
          >
            &#9733;
          </div>
        );
      })}
    </div>
  );
};
export default StarRating;
