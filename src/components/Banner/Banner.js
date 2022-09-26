import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import requests from '../../api/requests';

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const request = await axios.get(requests.fetchNowPlaying);

		const movieId =
			request.data.results[
				Math.floor(Math.random() * request.data.results.length)
			].id;

		const { data: movieDtail } = await axios.get(`movie/${movieId}`, {
			params: { append_to_response: 'videos' },
		});
		setMovie(movieDtail);
	};

	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	};

	return (
		<div>
			<header
				className='banner'
				style={{
					backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
					backgroundPosition: 'top center',
					backgroundSize: 'cover',
				}}>
				<div className='banner-contents'>
					<h1 className='banner-contents-title'>
						{movie.title || movie.name || movie.original_name}
					</h1>

					<div className='banner-contents-buttons'>
						<button className='banner-button play'>Play</button>
						<button className='banner-button info'>More Information</button>
					</div>

					<h1 className='banner-contents-description'>
						{truncate(movie.overview, 100)}
					</h1>
				</div>
				<div className='banner-fadeBottom' />
			</header>
		</div>
	);
};

export default Banner;
