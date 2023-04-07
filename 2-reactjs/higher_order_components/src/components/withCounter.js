import React, { useState } from 'react';

const withCounter = (WrappedComponent, incrementNumber) => {
  const WithCounter = (props) => {


    const [countObject, setCountObject] = useState({ count: 0 });
    const incrementCount = () => {
      setCountObject(
        (prevState) => ({
          ...prevState,
          count: prevState.count + incrementNumber,
        })
      );
    };


    return (
      <>
        <WrappedComponent 
          name="Keyur" 
          countObject={countObject} 
          incrementCount={incrementCount} 
          {...props}
        />
      </>
    )
  };
  return WithCounter;
};

export default withCounter;