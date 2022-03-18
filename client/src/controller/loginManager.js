import Router from '../Router.js';
import { getRequest } from './connectionManager.js';

let connected = false;
let login = '';
let credentials = '';

function connect() {
	const username = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;

	credentials = btoa(`${username}:${password}`);

	getRequest('login', authenticationSuccess(username));
}
function disconnect() {
	connected = false;
	login = undefined;
	credentials = '';
	Router.navigateTo('/home');
}

const authenticationSuccess = (username) => {
	connected = true;
	login = username;
	Router.navigateTo('/home');
};

export { connected, login, connect, disconnect, credentials };
