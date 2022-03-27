import React, { useState } from 'react';

const App = () => {
	let time = new Date().toLocaleTimeString();

	const [currentTime, setCurrentTime] = useState(time);

	const myTimer = () => {
		time = new Date().toLocaleTimeString();
		setCurrentTime(time);
	};
	
	setInterval(myTimer, 1000);
	
	return (
		<>
			<h1> {time} </h1>
		</>
	);
};

export default App;