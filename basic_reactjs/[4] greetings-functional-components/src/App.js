import React from 'react';
import './index.css';
function App(){
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
  return (
    <>
      <div>
        <h1>Hello Maam, <span style={cssStyle}>{greetingMessage}</span></h1>
      </div>
    </>
  )
}
export default App;