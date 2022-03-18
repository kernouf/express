import { credentials } from './loginManager';

const basePath = 'http://localhost:8080/api';

async function getRequest(path, callback = null, callbackError = null) {
	return await fetch(`${basePath}/${path}`, {
		method: 'GET',
		headers: {
			Authorization: `Basic ${credentials}`,
		},
	})
		.then((response) => {
			if (!response.ok) throw new Error(response.statusText);
			else {
				if (callback == null) return response;
				else callback(response);
			}
		})
		.catch((error) => {
			if (callbackError == null) console.log(error);
			else callbackError(error);
		});
}

async function postRequest(path, body = '', heavy = false, callback = null) {
	let header = {
		Authorization: `Basic ${credentials}`,
	};
	if (heavy) {
		header = {
			Authorization: `Basic ${credentials}`,
		};
	} else;
	return fetch(`${basePath}/${path}`, {
		method: 'POST',
		headers: header,
		body: body,
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(response);
			} else if (callback == null) return response.json();
			else callback(response.json());
		})
		.catch((error) => console.warn(error));
}

export { getRequest, postRequest, basePath };
