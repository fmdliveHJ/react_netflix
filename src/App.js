import Nav from './components/Nav/Nav';

function App() {
	const path = process.env.PUBLIC_URL;

	return (
		<div className='App'>
			<Nav path={path} />
		</div>
	);
}

export default App;
