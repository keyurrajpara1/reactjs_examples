import React, {useEffect, useState} from 'react';
const UseEffectHook2 = () => {
	const [width, setWidth] = useState(window.screen.width);
	const resizeEvent = () => {
		setWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener("resize", resizeEvent);

		return () => {
			window.removeEventListener("resize", resizeEvent);
		}
	});
	return (
		<div>
			<p>The actual size of the window is:</p>
			<h1>{width}</h1>
		</div>
	)
}
export default UseEffectHook2;