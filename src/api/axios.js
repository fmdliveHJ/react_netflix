import axios from 'axios';

//중복된 부분을 계속 입력하지 않아도 되기 때문에 인스턴스 생성
const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	params: {
		api_key: '5cddeed09f80dc80dcdbcfa02da0c10f',
		language: 'ko-KR',
	},
});

export default instance;
