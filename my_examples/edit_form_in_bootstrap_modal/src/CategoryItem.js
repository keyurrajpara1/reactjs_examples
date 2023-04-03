import React, {useState} from 'react';

const CategoryItem = (props) => {
  // console.log(props);
  return (
    <>
      <h3>Category List</h3>
      <ul>
        {props.items.map((currentValue, index, arr) => (
          <li key={currentValue.id}>
            {currentValue.name}
            <button onClick={() => { props.eventEditFunction(currentValue); }}>Edit</button>
            <button onClick={() => { props.eventDeleteFunction(currentValue.id); }}>X</button>
          </li>
        ))}
      </ul>
    </>
  )
}
export default CategoryItem;