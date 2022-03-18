import { getRequest, postRequest } from './connectionManager';
import { connected } from './loginManager';

let projets = [];
let fichiers = [];
let currentProject = 1;

function newFile(files) {
	if (connected) {
		Array.from(files).forEach((file) => {
			const formData = new FormData();
			console.log();
			formData.append('file', file);
			postRequest(
				`projet/${currentProject}/fichier?name=${file.name}`,
				formData,
				true
			);
		});
	}
}

async function getAnalyse() {
	return await getRequest(`analyse/${currentProject}`);
}

async function refreshAll() {
	await requestProjectsFromUser();
	await requestFichiersFromProject();
}

function getProjectsFromUser() {
	return projets;
}

async function requestProjectsFromUser() {
	projets = await getRequest('projet');
}

function getFichiersFromUser() {
	return fichiers;
}

async function requestFichiersFromProject() {
	fichiers = await getRequest(`projet/${currentProject}/fichier`);
}

export { newFile, getProjectsFromUser, refreshAll, getAnalyse };
