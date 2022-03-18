import ConnectionForm from './components/ConnectionForm.js';
import InfoButton from './components/InfoButton.js';
import NavBar from './components/NavBar.js';
import Page from './Page.js';

export default class Connexion extends Page {
	constructor() {
		super('guest', [new NavBar(false), new ConnectionForm(), new InfoButton()]);
		this.setTitle('Connexion');
	}

	mount(element) {
		super.mount(element);
		this.element.innerHTML = this.render();
	}
}
