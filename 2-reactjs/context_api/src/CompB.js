import React, { useContext } from "react";
import CompC from "./CompC";

import { contextForFirstname, contextForLastname } from "./App";

const CompB = () => {
	const firstName = useContext(contextForFirstname);
	const lastName = useContext(contextForLastname);
	return (
		<>
			<h1>
				My name is {firstName} {lastName.lastName}
			</h1>
			<CompC />
		</>
	);
};
export default CompB;