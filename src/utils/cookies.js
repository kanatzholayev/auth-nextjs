import Cookies from 'universal-cookie';
import jwt from 'jwt-decode';

const cookies = new Cookies();

export const setTokenToCookie = token => {
	const decoded = jwt(token);

	cookies.set('jwt_authorization', token, {
		expires: new Date(decoded.exp * 1000),
	});
};

export const getTokenFromCookie = () => {
	return cookies.get('jwt_authorization');
};
