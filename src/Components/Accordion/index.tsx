import React, { useState } from "react";
import data from "./data.ts";
import "./style.css";

const Accordion = () => {
  const [selected, setSelected] = useState<string>("");
  const [multiSeelected, setMultiSelected] = useState<string[]>([]);
  const [enableMS, setEnableMS] = useState<boolean>(false);

  const handleSingleSelection = (id: string) => {
    console.log(id);
    setSelected(id === selected ? "" : id);
  };

  function multiSelection(id: string) {
    let copyMultiple = [...multiSeelected];
    const currentIndex = copyMultiple.indexOf(id);

    console.log("currentIndex: ", enableMS);
    if (currentIndex === -1) copyMultiple.push(id);
    else copyMultiple.splice(currentIndex, 1);
    setMultiSelected(copyMultiple);
  }
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMS(!enableMS)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.question}>
              <div
                onClick={
                  enableMS
                    ? () => multiSelection(item.question)
                    : () => handleSingleSelection(item.question)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.question ||
              multiSeelected.indexOf(item.question) !== -1 ? (
                <div className="title">
                  <p>A. {item.A}</p>
                  <p>B. {item.B}</p>
                  <p>C. {item.C}</p>
                  <p>D. {item.D}</p>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <>No Data Found..!</>
        )}
      </div>
    </div>
  );
};

export default Accordion;
// #mobileAppDevelopment
// #frontEndDev
// #collaboration
// #cleanCode
// #newTechnologies
