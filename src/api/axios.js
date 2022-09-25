import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	params: {
		api_key: '5cddeed09f80dc80dcdbcfa02da0c10f',
		language: 'ko-KR',
	},
});

export default instance;
