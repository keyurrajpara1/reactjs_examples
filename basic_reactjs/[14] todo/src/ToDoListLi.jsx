import React from 'react';

const ToDoListLi = (props) => {
	return (
		<>
			<div className="todoStyle">
				<i className="fa fa-times" aria-hidden="true" onClick={() => {
					props.onClickk(props.id);
				}} />
				<li>
					{props.currentValue}
				</li>
			</div>
		</>
	);
};

export default ToDoListLi;