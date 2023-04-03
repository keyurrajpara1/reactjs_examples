import React, {useEffect, useState} from 'react';
const UseEffectHook1 = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		if(count > 0){
			document.title = `Chat (${count})`;
		}
		else{
			document.title = `Chat`;
		}
		console.log("inside UseEffectHook");
	// }, []); // run only first time
	}, [count]); // run only when count value change
	console.log("outside UseEffectHook");
	return (
		<div>
			<h1>Hello UseEffectHook</h1>
			<h1>{count}</h1>
			<button className="btn" onClick={
				() => setCount(count + 1)
			}>Click</button>
		</div>
	)
}
export default UseEffectHook1;