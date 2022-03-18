import Page from './Page';
import Actors from './components/Actors';
import AnalyseZone from './components/AnalyseZone';

export default class Analyse extends Page {
	constructor() {
		super('analyse', new AnalyseZone());
		this.setTitle('Analyse');
	}

	mount(element) {
		super.mount(element);
		this.element.innerHTML = this.render();
	}
}
