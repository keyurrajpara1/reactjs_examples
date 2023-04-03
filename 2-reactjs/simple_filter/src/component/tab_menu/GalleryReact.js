import React, {useState} from 'react';
import Menu from "./menu";
import MenuItems from "./MenuItems";
import CatMenu from "./CatMenu";
const allCatValues = [
	...new Set(
		Menu.map((currentValue) => {
			return currentValue.category;
		})
	), 
	"all"
];
const GalleryReact = () => {
	const[items, setItems] = useState(Menu);
	const[catItems, setCatItems] = useState(allCatValues);
	console.log(items);
	const filterMenu = (category) => {
		if(category=="all"){
			setItems(Menu);
			return;
		}
		const updatedItems = Menu.filter((currentValue, index, arr) => {
			return currentValue.category===category;
		});
		setItems(updatedItems);
	};
	return (
		<>
			<h1>Order your favorite dish</h1>
			<hr />
			<CatMenu filterMenu={filterMenu} catItems={catItems} />

			{/* main items section */}
			<MenuItems items={items} />
		</>
	)
}
export default GalleryReact;