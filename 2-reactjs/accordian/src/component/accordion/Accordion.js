import React, {useState} from 'react';
import { questions } from './api';
import "./accordion.css";
import MyAccordion from './MyAccordion';
const Accordion = () => {
	const [data, setData] = useState(questions);
	return (
		<>
			<section className="main-div">
			<h1>React Interview Questions</h1>
			{
				data.map((currentValue, index, arr) => {
					const { id } = currentValue;
					return <MyAccordion key={id} {...currentValue} />
				})
			}
			</section>
		</>
	)
}
export default Accordion;