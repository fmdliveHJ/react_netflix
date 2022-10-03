import requests from './api/requests';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Row from './components/Row/Row';

function App() {
	const path = process.env.PUBLIC_URL;

	return (
		<div className='App'>
			<Nav path={path} />
			<Banner path={path} />

			<Row
				title='nexflix originals'
				id='NO'
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>

			<Row title='trending now' id='TN' fetchUrl={requests.fetchTrending} />
			<Row title='top rated' id='TR' fetchUrl={requests.fetchTopRated} />
			<Row title='action movie' id='TN' fetchUrl={requests.fetchActionMovies} />
			<Row title='top rated' id='TN' fetchUrl={requests.fetchTrending} />
			<Row
				title='comedy movies'
				id='TN'
				fetchUrl={requests.fetchComedyMovies}
			/>
			<Footer />
		</div>
	);
}

export default App;
