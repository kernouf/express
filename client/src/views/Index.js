import Component from './components/Component';
import Page from './Page';
//import Router from '../Router';
//import Chargement from './Chargement';
import NavBar from './components/NavBar';
import ProjectsTables from './components/ProjectsTable';
import FilesTable from './components/FilesTable';
import HomeZone from './components/HomeZone';
import GuestZone from './components/GuestZone';
import InfoButton from './components/InfoButton';

import { connected, login } from '../controller/loginManager';
import { setFileImportCallback, setElement } from '../controller/drag-drop';
import {
	refreshAll,
	getProjectsFromUser,
	newFile,
	getFichiersFromUser,
} from '../controller/filesManager';

export default class Index extends Page {
	constructor() {
		super('guest');
	}

	refresh() {
		if (connected) {
			const files = getFichiersFromUser();
			const projects = getProjectsFromUser();
			this.children = [
				new NavBar(),
				new Component('h1', null, 'Tableau de bord'),
				new HomeZone(files, projects),
				new InfoButton(),
			];
			this.setTitle(`Home sweet Home - ${login}`);
		} else {
			this.children = [new NavBar(false), new GuestZone(), new InfoButton()];
			this.setTitle('Accueil');
		}
	}

	mount(element) {
		super.mount(element);
		this.refresh();

		this.element.innerHTML = this.render();

		if (connected) {
			this.setData();
		}

		setElement();
		setFileImportCallback((files) => newFile(files));
	}

	async setData() {
		await refreshAll();
		this.setProject();
		this.setFiles();
	}

	setProject() {
		let projets = getProjectsFromUser();
		let component = new ProjectsTables(projets);
		document.getElementById('projects-table').innerHTML = component.render();
	}

	setFiles() {
		let files = getFichiersFromUser();
		let component = new FilesTable(files);
		document.getElementById('files-table').innerHTML = component.render();
	}
}
