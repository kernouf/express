import Page from './Page';
import NavBar from './components/NavBar';
import HelpZone from './components/HelpZone';
import CloseButton from './components/CloseButton';

export default class Index extends Page {
	constructor() {
		super('help');
		this.children = [new NavBar(false), new HelpZone(), new CloseButton()];

		this.setTitle('Aide');
	}

	mount(element) {
		super.mount(element);
		this.element.innerHTML = this.render();
	}
}
