import React from 'react';
import SlotMachineComponent from './SlotMachineComponent';

const App = () => {
  return (
  	<>
      <h1 className="headingStyle"> Welcome to <span style={{ fontWeight: "bold" }}> Slot Machine Game </span> </h1>
      <div className="slotMachine">
	      <SlotMachineComponent x='1' y='1' z='1' />
	      <SlotMachineComponent x='1' y='2' z='3' />
	      <SlotMachineComponent x='2' y='2' z='2' />
      </div>
  	</>
  );
};

export default App;