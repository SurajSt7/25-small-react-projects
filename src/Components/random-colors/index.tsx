import React, { useEffect, useState } from "react";
import "./style.css";
const RandomColors = () => {
  const [colorType, setColorType] = useState("HEX");
  const [color, setColor] = useState("");

  function generateRandomColor() {
    if (colorType === "HEX") {
      setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
    } else {
      setColor(
        "rgb(" +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          ")"
      );
    }
  }
  useEffect(() => {
    generateRandomColor();
  }, [colorType]);

  return (
    <div
      onClick={() => generateRandomColor()}
      style={{ backgroundColor: color, height: "100vh", width: "100vw" }}
    >
      <button>Generate Random Colors</button>
      <button onClick={() => setColorType("HEX")}>Create HEX Color</button>
      <button onClick={() => setColorType("RGB")}>Create RGB Color</button>
      <p className="color">{colorType === "HEX" ? "HEX Colors" : "RGB Color"}</p>
      <p className="color">{color}</p>
    </div>
  );
};

export default RandomColors;
