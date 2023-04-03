import React, {useReducer} from 'react';
const initialState = 0;
const reducer = (state, action) => {
	console.log(state, action);
	if(action.type === "Increment"){
		return state + 1;
	}
	else if(action.type === "Decrement"){
		return state - 1;
	}
	return state;
}
const UseReducerHook1 = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<h1>Hello UseReducerHook</h1>

			<h1>{state}</h1>
			
			<button className="btn" onClick={
				() => dispatch({type: "Increment"})
			}>
				Increment
			</button>

			<button className="btn" onClick={
				() => dispatch({type: "Decrement"})
			}>
				Decrement
			</button>
		</div>
	)
}
export default UseReducerHook1;