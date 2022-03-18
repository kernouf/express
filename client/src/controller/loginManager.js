import Router from '../Router.js';
import { getRequest } from './connectionManager.js';

let connected = false;
let login = '';
let credentials = '';

async function connect() {
	const username = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;

	credentials = btoa(`${username}:${password}`);

	let res = await getRequest('login', null, authenticationfailed);
	if (res != undefined) {
		authenticationSuccess(res.text());
	}
}

function disconnect() {
	clearUser();
	Router.navigateTo('/');
}

const authenticationSuccess = (username) => {
	connected = true;
	login = username;
	Router.navigateTo('/');
};

const authenticationfailed = (response) => {
	clearUser();
};

const clearUser = () => {
	connected = false;
	login = undefined;
	credentials = '';
};

export { connected, login, connect, disconnect, credentials };
