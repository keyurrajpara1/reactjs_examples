import React from 'react';
const MenuItems = (props) => {
	return (
		<>
			{/* main items section */}
			{
				props.items.map((currentValue, index, arr) => {
					const {id, name, image, description, price} = currentValue;
					return (
						<ul key={index}>
							<li>{name}</li>
							<li>{image}</li>
							<li>{description}</li>
							<li>{price}</li>
						</ul>
					)
				})
			}
		</>
	)
}
export default MenuItems;