// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let cssStyle = {};
let currentDate = new Date(2020, 5, 5, 10);
let currentHour = currentDate.getHours();
let greetingMessage = "";
if(currentHour >= 1 && currentHour < 12){
  greetingMessage = "Good Morning";
  cssStyle.color = 'green';
}
else if(currentHour >= 12 && currentHour < 19){
  greetingMessage = "Good Afternoon";
  cssStyle.color = 'orange';
}
else{
  greetingMessage = "Good Night";
  cssStyle.color = 'black';
}
ReactDOM.render(
  <>
    <div>
      <h1>Hello Maam, <span style={cssStyle}>{greetingMessage}</span></h1>
    </div>
  </>,
  document.getElementById("root")
);