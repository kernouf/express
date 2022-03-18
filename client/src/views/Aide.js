import Page from './Page';
import NavBar from './components/NavBar';
import HelpZone from './components/HelpZone';
import CloseButton from './components/CloseButton';

export default class Index extends Page {
	constructor() {
		super('help');
		this.setTitle('Aide');
	}

	refresh() {
		this.children = [new NavBar(), new HelpZone(), new CloseButton()];
	}

	mount(element) {
		super.mount(element);
		this.refresh();
		this.element.innerHTML = this.render();
	}
}
