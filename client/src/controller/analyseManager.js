import Router from '../Router';
import { getRequest } from './connectionManager';
import { getAnalyse } from './filesManager';

async function getResult() {
	console.log(await getAnalyse());
	Router.navigateTo('/analyse');
}

export { getResult };
