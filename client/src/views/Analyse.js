import Page from './Page';
import AnalyseZone from './components/AnalyseZone';
import NavBar from './components/NavBar';
import CloseButton from './components/CloseButton';
import { getAnalyse } from '../controller/filesManager';

export default class Analyse extends Page {
	constructor() {
		super('analyse');
		this.setTitle('Analyse');
	}

	mount(element) {
		super.mount(element);
		this.refresh();
		this.element.innerHTML = this.render();
		this.renderItems();
	}

	refresh() {
		this.children = [new NavBar(), new AnalyseZone(), new CloseButton()];
	}

	async renderItems() {
		const liste = await getAnalyse();
		if (liste != undefined) {
			const zone = new AnalyseZone(liste);
			document.getElementById('result-container').innerHTML = zone.render();
		}
	}
}
