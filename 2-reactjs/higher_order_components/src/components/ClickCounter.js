import React, { useState } from 'react';
import withCounter from "./withCounter";

const ClickCounter = (props) => {
  return (
    <>
      <div>
        <button onClick={props.incrementCount}>{props.name1} {props.name} Clicked {props.countObject.count} times</button>
      </div>
    </>
  )
}

export default withCounter(ClickCounter, 5);