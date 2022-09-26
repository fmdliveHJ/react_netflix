import React, { useEffect, useState } from 'react';

const Nav = ({ path }) => {
	const [show, setShow] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				setShow(true);
			} else {
				setShow(false);
			}
		});
		return () => {
			window.removeEventListener('scroll', () => {});
		};
	}, []);

	return (
		<nav className={`nav ${show && 'nav-black'}`}>
			<img
				alt='netflix logo'
				src={`${path}/image/logo.png`}
				className='nav-logo'
				onClick={() => window.location.reload()}
			/>
			<img alt='user' src={`${path}/image/profile.png`} className='nav-user' />
		</nav>
	);
};

export default Nav;
