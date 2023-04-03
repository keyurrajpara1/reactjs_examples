import React, { useState } from 'react';

const App = () => {
	let time = new Date().toLocaleTimeString();
	const [currentTime, setCurrentTime] = useState(time);
	const getCurrentTime = () => {
		time = new Date().toLocaleTimeString();
		setCurrentTime(time);
	};
	return (
		<>
			<h1> {currentTime} </h1>
			<button onClick={getCurrentTime}> Get Time </button>
		</>
	);
};

export default App;