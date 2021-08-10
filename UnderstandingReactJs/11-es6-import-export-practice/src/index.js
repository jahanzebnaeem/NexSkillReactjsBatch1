import React from "react";
import ReactDOM from "react-dom";
// import { add, subtract, multiply, divide } from "./calculator";
import * as Calculate from "./calculator";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{Calculate.add(1, 2)}</li>
    <li>{Calculate.multiply(2, 3)}</li>
    <li>{Calculate.subtract(7, 2)}</li>
    <li>{Calculate.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
