import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { API_URL } from "./context";

const SingleMovie = () => {
	const { id } = useParams();

	const [isLoading, setIsLoading] = useState(true);
	const [movie, setMovie] = useState("");
	const [isError, setIsError] = useState({ show: false, message: "" });

	const getMovies = async (apiUrl) => {
		setIsLoading(true);
		try{
			const response = await fetch(apiUrl);
			const responseData = await response.json();
			console.log(responseData);
			if(responseData.Response === "True"){
				setIsLoading(false);
				setMovie(responseData);
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
			getMovies(`${API_URL}&i=${id}`);
		}, 500);
		console.log("set");
		return () => {
			clearTimeout(timeOut);
			console.log("clear");
		};
	}, [id]);

	if (isLoading) {
		return (
			<section className="movie-section ">
				<div className="loading">Loading....</div>;
			</section>
		);
	}

	if(isError.show){
		return (
			<div className="card-error">
				<p>{isError.show && isError.message}</p>
			</div>
		);
	}

	return (
		<section className="movie-section">
			<div className="movie-card">
				<figure>
					<img src={movie.Poster} alt="" />
				</figure>
				<div className="card-content">
					<p className="title">{movie.Title}</p>
					<p className=""></p>
					<p className="card-text">{movie.Released}</p>
					<p className="card-text">{movie.Genre}</p>
					<p className="card-text">{movie.imdbRating} / 10</p>
					<p className="card-text">{movie.Country}</p>
					<NavLink to="/" className="back-btn">
						Go Back
					</NavLink>
				</div>
			</div>
		</section>
	);
};
export default SingleMovie;