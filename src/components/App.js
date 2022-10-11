import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here

  const [setcounter, issetCounter] = useState(0);

  let changeCounter = (event) => {
    if (event.key == "Enter") {
      if (isNaN(event.target.value)) {
        issetCounter(0);
      } else {
        issetCounter(parseInt(event.target.value));
      }
    }
  };

  useEffect(() => {
    const i = setInterval(() => {
      if (setcounter === 0) {
        issetCounter(0);
      }
      if (setcounter !== 0) {
        issetCounter(setcounter - 1);
      }
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, [setcounter]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={changeCounter} /> sec.
        </h1>
      </div>
      <div id="current-time">{setcounter}</div>
    </div>
  );
};

export default App;
