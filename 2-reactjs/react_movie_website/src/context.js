import React, { useContext, useState, useEffect } from 'react';

export const API_URL = `https://www.omdbapi.com/?&apikey=${process.env.REACT_APP_MOVIE_KEY}`;

const AppContext = React.createContext();
const AppContext1 = React.createContext();

const AppProvider = ({children}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [movie, setMovie] = useState([]);
	const [isError, setIsError] = useState({ show: false, message: "" });
	const [query, setQuery] = useState("titanic");

	const getMovies = async (apiUrl) => {
		setIsLoading(true);
		try{
			const response = await fetch(apiUrl);
			const responseData = await response.json();
			console.log(responseData);
			if(responseData.Response === "True"){
				setIsLoading(false);
				setMovie(responseData.Search);
				setIsError({
					show: false,
					message: ""
				});
			}
			else{
				setIsError({
					show: true,
					message: responseData.Error
				});
				setMovie([]);
				setIsLoading(false);
			}
		}
		catch(error){
			console.log(error);
		}
	};

	// debouncing in react js
	useEffect(() => {
		let timeOut = setTimeout(() => {
			getMovies(`${API_URL}&s=${query}`);
		}, 500);
		console.log("set");
		return () => {
			clearTimeout(timeOut);
			console.log("clear");
		};
	}, [query]);

	return <AppContext.Provider value={{ isLoading, movie, isError, query, setQuery }}>
		{children}
	</AppContext.Provider>
};
const AppProvider1 = ({children}) => {
	return <AppContext1.Provider value="Keyur1">
		{children}
	</AppContext1.Provider>
};

const useGlobalContext = () => {
	return useContext(AppContext);
};
const useGlobalContext1 = () => {
	return useContext(AppContext1);
};

export { AppContext, AppProvider, useGlobalContext, AppProvider1, useGlobalContext1 };