import React, { useState } from 'react';
import withCounter from "./withCounter";

const HoverCounter = (props) => {
  return (
    <>
      <div>
        <h2 onMouseOver={props.incrementCount}>{props.name1} {props.name} Hovered {props.countObject.count} times</h2>
      </div>
    </>
  )
}

export default withCounter(HoverCounter, 10);