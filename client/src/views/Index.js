import Component from './components/Component';
import Page from './Page';
//import Router from '../Router';
//import Chargement from './Chargement';
import NavBar from './components/NavBar';
import ProjectsTables from './components/ProjectsTable';
import HomeZone from './components/HomeZone';
import GuestZone from './components/GuestZone';
import InfoButton from './components/InfoButton';

import { connected, login } from '../controller/loginManager';
import { setFileImportCallback, setElement } from '../controller/drag-drop';
import {
	refreshAll,
	getProjectsFromUser,
	newFile,
} from '../controller/filesManager';

export default class Index extends Page {
	constructor() {
		super('guest');
		if (connected) {
			this.children = [
				new NavBar(true),
				new Component('h1', null, 'Tableau de bord'),
				new HomeZone(),
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
		if (!connected) {
			this.element.innerHTML = this.render();
		} else {
			this.element.innerHTML = this.render();
			this.setProject();
		}

		setElement();
		setFileImportCallback((files) => newFile(files));
	}

	async setProject() {
		await refreshAll();
		let projets = getProjectsFromUser();
		let component = new ProjectsTables(projets);
		component.refreshProjects(projets);
		document.getElementById('projects-table').innerHTML = component.render();
	}
}
