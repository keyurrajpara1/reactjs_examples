import React, {useState} from 'react';
const UseStateHook1 = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1>Hello UseStateHook</h1>

			<h1>{count}</h1>
			
			<button className="btn" onClick={
				() => setCount(count + 1)
			}>
				Increment
			</button>

			<button className="btn" onClick={
				() => setCount(count - 1)
			}>
				Decrement
			</button>
		</div>
	)
}
export default UseStateHook1;