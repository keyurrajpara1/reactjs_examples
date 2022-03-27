import React, { useState } from 'react';

const App = () => {
	const backgroundColor = '#696969';
	const buttonName = 'Click Me';

	const [currentBackgroundColor, setBackgroundColor] = useState(backgroundColor);
	const [currentButtonName, setButtonName] = useState(buttonName);

	const changeBackgroundColor = () => {
		let newBackgroundColor = "#34495e";
		let newButtonName = "Ouch!!";
		setBackgroundColor(newBackgroundColor);
		setButtonName(newButtonName);
	};

	const reset = () => {
		let newBackgroundColor = "#696969";
		let newButtonName = "Click Me";
		setBackgroundColor(newBackgroundColor);
		setButtonName(newButtonName);
	};

	return (
		<>
			<div style={{ backgroundColor: currentBackgroundColor }}>
				{/*<button onClick={changeBackgroundColor} onDoubleClick={reset}> {currentButtonName} </button>*/}
				<button onMouseEnter={changeBackgroundColor} onMouseLeave={reset}> {currentButtonName} </button>
			</div>
		</>
	);
};

export default App;