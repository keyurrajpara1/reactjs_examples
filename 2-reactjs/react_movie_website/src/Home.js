import React, { useContext } from "react";

// import { AppContext } from "./context";
import { useGlobalContext } from "./context";
import { useGlobalContext1 } from "./context";

import Search from "./Search";
import Movies from "./Movies";

const Home = () => {
	// const name = useContext(AppContext);
	const name = useGlobalContext();
	const name1 = useGlobalContext1();
	return <>
		<div>My home page</div>
		{/* <p>{name}</p> */}
		<p>{name1}</p>
		<Search />
		<Movies />
	</>;
};
export default Home;