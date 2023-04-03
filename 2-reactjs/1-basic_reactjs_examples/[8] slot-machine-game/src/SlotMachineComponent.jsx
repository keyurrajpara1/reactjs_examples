import React from 'react';
const SlotMachineComponent = (props) => {
	/*let x = '1';
	let y = '1';
	let z = '11';*/
	let {x, y, z} = props;

	if( (x===y) && (y===z) ){
		return (
			<>
				<div className="slotInner">
					<h1> {x} {y} {z} </h1>
					<h1> This is matching. </h1>
					<hr />
				</div>
				<hr />
			</>
		)
	}
	else{
		return (
			<>
				<div className="slotInner">
					<h1> {x} {y} {z} </h1>
					<h1> This is not matching. </h1>
					<hr />
				</div>
				<hr />
			</>
		)
	}
};
export default SlotMachineComponent;