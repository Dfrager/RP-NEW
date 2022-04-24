import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const instance = axios.create({
	baseURL: `${backendUrl}`,
	header: {
		'Content-Type': 'application/json',
	},
});

instance.interceptors.request.use(function (config) {
	const token = sessionStorage.getItem('token');
	config.headers.Authorization = token ? `Bearer ${token}` : '';
	return config;
});

export default instance;
