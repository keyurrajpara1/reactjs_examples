import React, { useState } from 'react';

const App = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: ''
	});

	const inputEvent = (event) => {
		let {value:inputValue, name:inputName} = event.target;

		// React setState previous value
		setFormData((previousValue) => {
			// console.log(previousValue);
			return {
				...previousValue,
				[inputName]: inputValue
			};
			/*if(inputName==='firstName'){
				return {
					firstName: inputValue,
					lastName: previousValue.lastName
				};
			}
			else if(inputName==='lastName'){
				return {
					firstName: previousValue.firstName,
					lastName: inputValue
				};
			}*/
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		alert("Form submitted");
	};
	return (
		<>
			<div>
				<form onSubmit={onSubmit}>
					<div>
						<h1>Hello {formData.firstName} {formData.lastName}</h1>
						<input type="text" name="firstName" placeholder="Enter First Name" onChange={inputEvent} value={formData.firstName} />
						<br />
						<input type="text"name="lastName" placeholder="Enter Last Name" onChange={inputEvent} value={formData.lastName} />
						<br />
						<button type="submit">Click Me</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default App;