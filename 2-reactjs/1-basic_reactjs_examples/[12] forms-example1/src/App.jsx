import React, { useState } from 'react';

const App = () => {
	const [currentFirstName, setFirstName] = useState();
	const [currentLastName, setLastName] = useState();

	const [myFirstName, setMyFirstName] = useState();
	const [myLastName, setMyLastName] = useState();

	const inputFirstNameEvent = (event) => {
		let inputValue = event.target.value;
		setFirstName(inputValue);
	};

	const inputLastNameEvent = (event) => {
		let inputValue = event.target.value;
		setLastName(inputValue);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setMyFirstName(currentFirstName);
		setMyLastName(currentLastName);
	};
	return (
		<>
			<div>
				<form onSubmit={onSubmit}>
					<div>
						<h1>Hello {myFirstName} {myLastName}</h1>
						<input type="text" placeholder="Enter First Name" onChange={inputFirstNameEvent} value={currentFirstName} />
						<br />
						<input type="text" placeholder="Enter Last Name" onChange={inputLastNameEvent} value={currentLastName} />
						<br />
						<button type="submit">Click Me</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default App;