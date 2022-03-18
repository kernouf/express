import Page from './Page.js';
import Actors from './components/Actors.js';

export default class Connexion extends Page {
	constructor() {
		super('saisie', [new Actors()]);
		this.setTitle('Saisie');
	}

	mount(element) {
		super.mount(element);
		this.element.innerHTML = this.render();
	}
}
