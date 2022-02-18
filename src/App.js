import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [fontHeight, setFontHeight] = useState("1em");

  console.log({ fontHeight });

  const changeToFour = () => {
    setFontHeight("4em");
  };

  const changeToTwo = () => {
    setFontHeight("2em");
  };

  const changeToOne = () => {
    setFontHeight("1em");
  };

  return (
    <div>
      <button onClick={changeToFour}> h1 </button>
      <button onClick={changeToTwo}> h2 </button>
      <button onClick={changeToOne}> Back to normal </button>

      <div style={{ fontSize: fontHeight }}>
        I am a complan girl! {fontHeight}{" "}
      </div>
    </div>
  );
}
