import Page from './Page';
//import Router from '../Router';
//import Chargement from './Chargement';
import NavBar from './components/NavBar';
import ProjectZone from './components/ProjectZone';
import GuestZone from './components/GuestZone';
import InfoButton from './components/InfoButton';
import Component from './components/Component';
import ProjectsTables from './components/ProjectsTable';

import { connected } from '../controller/loginManager';
import { getProjectsFromUser } from '../controller/filesManager';

export default class Projet extends Page {
	constructor() {
		super('guest');
		if (connected) {
			this.children = [
				new NavBar(true),
				new Component('h1', null, 'Project'),
				new ProjectZone(),
				new InfoButton(),
			];
			//this.setTitle(`Project - ${project-id}`);
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
	}

	async setProject() {
		let projets = await getProjectsFromUser();
		let component = new ProjectsTables();
		component.refreshProjects(projets);
		document.getElementById('projects-table');
	}
}
