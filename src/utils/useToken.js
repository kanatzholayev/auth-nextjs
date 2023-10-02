import { useState } from 'react';
import Cookies from 'universal-cookie';
import jwt from 'jwt-decode';

export const useToken = () => {
	const cookies = new Cookies();

	const getToken = () => {
		return cookies.get('jwt_authorization');
	};

	const [token, setToken] = useState(getToken());

	const saveToken = token => {
		const decoded = jwt(token);
		cookies.set('jwt_authorization', token, {
			expires: new Date(decoded.exp * 1000),
		});

		setToken(token);
	};
	return {
		setToken: saveToken,
		token,
	};
};
