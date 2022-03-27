import React, { useState } from 'react';

const App = () => {
	const [count, setCount] = useState(1);

	const incrementNumber = () => {
		setCount(count+1);
	};

	const decrementNumber = () => {
		setCount(count-1);
	};

	return (
		<>
			<h1> {count} </h1>
			<button onClick={incrementNumber}> Increment Number </button>
			<button onClick={decrementNumber}> Decrement Number </button>
		</>
	);
};

export default App;