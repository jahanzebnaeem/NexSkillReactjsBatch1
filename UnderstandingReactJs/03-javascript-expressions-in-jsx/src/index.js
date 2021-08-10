// jshint esversion:6
import React from "react";
import ReactDOM from "react-dom";

const fname = "Jahanzeb";
const lname = "Naeem";
const luckyNumber = 4;

ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}</h1>
    <p>Your lucky Number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
