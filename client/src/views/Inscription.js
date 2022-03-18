import InfoButton from './components/InfoButton.js';
import NavBar from './components/NavBar.js';
import RegisterForm from './components/RegisterForm.js';
import Page from './Page.js';

export default class Connexion extends Page {
	constructor(params) {
		super('guest', [new NavBar(false), new RegisterForm(), new InfoButton()]);
		this.setTitle('Connexion');
	}

	mount(element) {
		super.mount(element);
		this.element.innerHTML = this.render();
	}
}
