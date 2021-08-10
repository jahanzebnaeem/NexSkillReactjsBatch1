import React from "react";
import ReactDOM from "react-dom";

const name = "Jahanzeb";
const currentDate = new Date();
// console.log(currentDate);
const year = currentDate.getFullYear();
// console.log(year);

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Jahanzeb Naeem.
//Copyright 2019.
