import React, { useState } from 'react';
import ToDoListLi from './ToDoListLi';

const App = () => {
	const [inputItem, setInputItem] = useState();
	const [listItems, setListItem] = useState([]);

	const inputEvent = (event) => {
		setInputItem(event.target.value);
	};
	const addInputItem = (event) => {
		setListItem((old) => {
			return [...old, inputItem];
		});
		setInputItem("");
	};
	const deleteListItem = (indexOfItem) => {
		console.log("Deleted");
		setListItem((old) => {
			return old.filter((currentValue, index, arr) => {
				/*if(indexOfItem !== index){
					return currentValue;
				}*/
				return indexOfItem !== index;
			});
		});
	};
	return (
		<>
			<div className="divMain">
				<div className="divCenter">
					<br />
					<h1> ToDo List</h1>
					<br />
					<input type='text' placeholder='Add a Items' onChange={inputEvent} value={inputItem} />
					<button onClick={addInputItem}> + </button>
					<ol>
					{
						listItems.map((currentValue, index, arr) => {
							return <ToDoListLi key={index} id={index} currentValue={currentValue} onClickk={deleteListItem} />;
						})
					}
					</ol>
				</div>
			</div>
		</>
	);
};

export default App;