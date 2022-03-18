import Router from '../Router';
import { getRequest, postRequest } from './connectionManager';
import { connected } from './loginManager';

let projets = [];
let fichiers = [];
let currentProject = 1;

async function newFile(files) {
	const promises = [];
	Array.from(files).forEach((file) => {
		promises.push(
			postRequest(
				`projet/${currentProject}/fichier?name=${file.name}`,
				file,
				true
			)
		);
	});
	await Promise.all(promises);
	Router.navigateTo();
}

async function getAnalyse() {
	const response = await getRequest(`analyse/${currentProject}`);
	return response.json();
}

async function refreshAll() {
	await requestProjectsFromUser();
	await requestFichiersFromProject();
}

function getProjectsFromUser() {
	return projets;
}

async function requestProjectsFromUser() {
	const response = await getRequest('projet');
	projets = await response.json();
}

function getFichiersFromUser() {
	return fichiers;
}

async function requestFichiersFromProject() {
	const response = await getRequest(`projet/${currentProject}/fichier`);
	fichiers = await response.json();
}

export {
	refreshAll,
	getProjectsFromUser,
	getFichiersFromUser,
	newFile,
	getAnalyse,
};
