import React from "react";
import { contextForFirstname, contextForLastname } from "./App";

const CompC = () => {
	return (
		<>
			<contextForFirstname.Consumer>
				{(firstName) => {
					//return <h1>My name is {firstName}</h1>;
					return (
						<>
							<contextForLastname.Consumer>
								{(lastName) => {
									return <h1>My name is {firstName} {lastName.lastName}</h1>;
								}}
							</contextForLastname.Consumer>
						</>
					)
				}}
			</contextForFirstname.Consumer>
		</>
	);
};
export default CompC;