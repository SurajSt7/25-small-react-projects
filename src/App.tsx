import React from "react";
import "./App.css";
import Accordion from "./Components/Accordion/index.tsx";
import RandomColors from "./Components/random-colors/index.tsx";
import StarRating from "./Components/star-rating/index.tsx";

const App = () => {
  return (
    <div className="App">
      {/* Accordion Component */}

      {/* <Accordion /> */}

      {/* Random Color Generator Component */}

      {/* <RandomColors /> */}

      {/* Star Rating Component */}
      <StarRating noOfStars={5} />
    </div>
  );
};

export default App;
