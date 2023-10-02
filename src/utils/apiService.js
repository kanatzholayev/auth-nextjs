import { URL } from './consts';

export const apiService = {
	register: async data => {
		const response = await fetch(`${URL}/user`, {
			body: JSON.stringify(data),
			headers: {
				'Content-Type': `application/json`,
			},
			credentials: `same-origin`,
			method: `POST`,
		}).then(res => res.json());

		return response;
	},
	login: async data => {
		const response = await fetch(`${URL}/login`, {
			body: JSON.stringify(data),
			headers: {
				'Content-Type': `application/json`,
			},
			credentials: `same-origin`,
			method: `POST`,
		}).then(res => res.json());

		return response;
	},
	getImage: async token => {
		const response = await fetch(`${URL}/account/image`, {
			headers: {
				'token-tt': token,
				'Content-Type': `application/json`,
			},
			credentials: `same-origin`,
			method: `GET`,
		}).then(res => res.json());

		return response;
	},
	uploadImage: async (image, token) => {
		const response = await fetch(`${URL}/account/image`, {
			body: JSON.stringify({ image }),
			headers: {
				'Token-Tt': `${token}`,
				'Content-Type': `application/json`,
			},
			credentials: `same-origin`,
			method: `PUT`,
		}).then(res => res.json());

		return response;
	},
};
