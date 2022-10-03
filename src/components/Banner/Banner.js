import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import requests from '../../api/requests';
import styled from 'styled-components';

const Banner = () => {
	const [movie, setMovie] = useState([]);
	const [isClicked, setIsClicked] = useState(false);

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

	if (!isClicked) {
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
							<button
								className='banner-button play'
								onClick={() => setIsClicked(true)}>
								Play
							</button>
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
	} else {
		return (
			<Container>
				<HomeConatainer>
					<Iframe
						width='640'
						height='360'
						src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
						title='YouTube video player'
						frameborder='0'
						allow='autoplay; fullscreen'
						allowfullscreen></Iframe>
				</HomeConatainer>
			</Container>
		);
	}
};
const Iframe = styled.iframe`
	width: 100%;
	height: 100%;
	z-index: -1;
	opacity: 0.65;
	border: none;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100vh;
`;

const HomeConatainer = styled.div`
	width: 100%;
	height: 1000%;
`;

export default Banner;
