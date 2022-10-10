import React from 'react';

const MovieModal = ({
	backdrop_path,
	title,
	overview,
	name,
	release_date,
	first_air_date,
	vote_average,
	setModalOpen,
}) => {
	return (
		<div className='presentation'>
			<div className='wrapper'>
				<div className='modal'>
					<span onClick={() => setModalOpen(false)} className='modal-close'>
						x
					</span>
					<img
						className='modal-img'
						src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
						alt='modal-post-img'
					/>
					<div className='modal-content'>
						<p className='modal-content-details'>
							<span className='modal-user'>100% for you</span>
							{release_date ? release_date : first_air_date}
						</p>
						<h2 className='modal-content-title'>{title ? title : name}</h2>
						<p className='modal-content-overview'>평점 : {vote_average}</p>
						<p className='modal-content-overview'>{overview}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieModal;
