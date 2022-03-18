import { credentials } from './loginManager';

const basePath = 'http://localhost:8080/api';

async function getRequest(path, callback = null) {
	return fetch(`${basePath}/${path}`, {
		method: 'GET',
		headers: {
			Authorization: `Basic ${credentials}`,
		},
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.status);
				return [];
			} else if (callback == null) return response.json();
			else callback(response.json());
		})
		.catch((error) => console.warn(error));
}

async function postRequest(path, body = '', heavy = false, callback = null) {
	let header = {
		Authorization: `Basic ${credentials}`,
	};
	if (heavy) {
		header = {
			Authorization: `Basic ${credentials}`,
			'Content-Type': `application/octet-stream`,
		};
	} else;
	return fetch(`${basePath}/${path}`, {
		method: 'POST',
		headers: header,
		body: body,
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.status);
				return [];
			} else if (callback == null) return response.json();
			else callback(response.json());
		})
		.catch((error) => console.warn(error));
}

export { getRequest, postRequest };
