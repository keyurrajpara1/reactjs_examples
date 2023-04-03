import React from 'react';
const CatMenu = (props) => {
	return (
		<>
			{
				props.catItems.map((currentValue, index) => {
					return <button key={index} onClick={() => props.filterMenu(currentValue)}>{currentValue}</button>
				})
			}
			{/*
			<button onClick={() => filterItem('breakfast')}>Breakfast</button>
			<button onClick={() => filterItem('lunch')}>Lunch</button>
			<button onClick={() => filterItem('evening')}>Evening</button>
			<button onClick={() => filterItem('dinner')}>Dinner</button>
			<button onClick={() => setItems(Menu)}>All</button>
			*/}
		</>
	)
}
export default CatMenu;