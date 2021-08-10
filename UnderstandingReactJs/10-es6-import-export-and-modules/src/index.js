import React from "react";
import ReactDOM from "react-dom";
// import Pi, { doublePi, triplePi } from "./math";
import * as Pi from "./math";

// console.log(Pi);

ReactDOM.render(
  <ul>
    {/* <li>{Pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li> */}
    <li>{Pi.default}</li>
    <li>{Pi.doublePi()}</li>
    <li>{Pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
