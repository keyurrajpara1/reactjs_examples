import React, {useState, useRef, useEffect} from "react";
import axios from "axios";
import Data from "./data";
import "./App.css"
function App() {
	const [items, setItems] = useState(Data);
	//save reference for dragItem and dragOverItem
	const dragItem = useRef(null);
	const dragOverItem = useRef(null);
	//const handle drag sorting
	const handleSort = () => {
		//duplicate items
		let _items = [...items];

		//remove and save the dragged item content
		const draggedItemContent = _items.splice(dragItem.current, 1)[0];

		//switch the position
		_items.splice(dragOverItem.current, 0, draggedItemContent);

		//reset the position ref
		dragItem.current = null;
		dragOverItem.current = null;

		console.log(items);
		console.log(_items);

		let isArrayDifferent = isArrayDifferentFun(items, _items);

		if(isArrayDifferent){
			//update the actual array
			setItems(_items);
		}
	}

	const isArrayDifferentFun = ((firstArray, secondArray) => {
        let isArrayDifferent = false;
        firstArray.forEach((currentValue, index, arr) => {
            if(firstArray[index]["id"] !== secondArray[index]["id"]) {
                isArrayDifferent = true;
                return;
            }
        });
        return isArrayDifferent;
    });
	
	useEffect(() => {
		updateMerchantCategoryOrder();
	}, [items]);

	const updateMerchantCategoryOrder = async() => {
		let new_merchant_category_order = items.map((currentValue, index, arr)=>{
			return currentValue.id;
		});
		
		console.log("new_merchant_category_order: " + JSON.stringify(new_merchant_category_order));

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbC56YW1wb2l0YS1sdi5jb21cL2FwaVwvbWVyY2hhbnRzXC9sb2dpbiIsImlhdCI6MTY4MDAwMjUxOCwiZXhwIjoxNjgwMDg4OTE4LCJuYmYiOjE2ODAwMDI1MTgsImp0aSI6IkpmdDlWbEtQTEdDWHRiV0siLCJzdWIiOjI5MzAsInBydiI6IjkzYmRjYzU4ZGQwMWNlMzZlYzU2ZTMyYjViYjU4MGQ4MzAzMmZkMTgifQ.SUU8JJs1ZnDgRBK63lgn_g1M1vNF6G1ajLaH_JqjSdo'
			},
			credentials: true
		};

		axios
			.post(
				'http://local.zampoita-lv.com/api/merchants/menu/custom/categories/update-merchant-category-order',
				{
					new_merchant_category_order
				},
	      		config
      		)
			.then(res => {
				console.log("Res: " + res);
			})
			.catch(err => {
				console.error(err)
			});
	};
	return (
		<div className="app">
			<h2>Category List</h2>
			<div className="list-container">
				{items.map((item, index) => (
					<div
						key={index}
						className="list-item"
						draggable
						onDragStart={(e) => (dragItem.current = index)}
						onDragEnter={(e) => (dragOverItem.current = index)}
						onDragEnd={handleSort}
						onDragOver={(e) => e.preventDefault()}>
						<i className="fa-solid fa-bars"></i>
						<h3>{item.name}</h3>
					</div>
				))}
			</div>
		</div>
	)
}
export default App