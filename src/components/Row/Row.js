import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import MovieModal from '../MovieModal';
// import MovieModal from '../Moviemodal';

const Row = ({ title, fetchUrl, isLargeRow, id }) => {
	const [movies, setMovies] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [movieSelected, setMovieSelected] = useState({});

	useEffect(() => {
		fetchMoviedata();
	}, []);

	const fetchMoviedata = async () => {
		const request = await axios.get(fetchUrl);
		console.log(request);
		setMovies(request.data.results);
	};

	const handleCllck = (movie) => {
		setModalOpen(true);
		//핸들클릭할때 무비의 정보도 보내주기 위해서 state 생성
		setMovieSelected(movie);
	};

	return (
		<section>
			<h2>{title}</h2>
			<div className='slider'>
				<div className='slider__arrow-left'>
					<span
						className='arrow'
						onClick={() => {
							document.getElementById(id).scrollLeft -= window.innerWidth - 80;
						}}>
						{'<'}
					</span>
				</div>
				<div id='id' className='row__posters'>
					{movies.map((movie) => (
						<img
							key={movie.id}
							className={`row__poster ${isLargeRow && ''}`}
							alt={movie.name}
							src={`https://image.tmdb.org/t/p/original/${
								isLargeRow ? movie.poster_path : movie.backdrop_path
							} `}
							onClick={() => handleCllck(movie)}
						/>
					))}
				</div>
				<div className='slider__arrow-right'>
					<span
						className='arrow'
						onClick={() => {
							document.getElementById(id).scrollLeft += window.innerWidth - 80;
						}}>
						{'>'}
					</span>
				</div>
			</div>
			{modalOpen && (
				<MovieModal {...movieSelected} setModalOpen={setModalOpen} />
			)}
		</section>
	);
};

export default Row;
