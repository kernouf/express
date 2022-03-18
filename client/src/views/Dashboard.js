import DropZone from './components/DropZone.js';
import InfoButton from './components/InfoButton.js';
import NavBar from './components/NavBar.js';
import Page from './Page.js';

export default class extends Page {
	#projets;

	constructor() {
		super('home', [new NavBar(true), new DropZone(), new InfoButton()]);
		this.setTitle('Home sweet Home');
	}

	mount(element) {
		super.mount(element);
		this.element.innerHTML = this.render();

		//this.element.innerHTML = Chargement.render(); //Pour enlever la superposition enlever le + au +=
		fetch(`http://localhost:8080/api/projet`)
			.then((response) => response.json())
			.then((projets) => (this.projets = projets.results)) //  maj des children
			.then(() => {
				this.element.innerHTML = this.render();
				//Router.linksElement();
				//Router.linksForm();
			})
			.catch(console.warn('récupération des projet impossible'));
	}

	set projets(value) {
		this.#projets = value;
		this.children = this.#projets.map((projet) => new ProjetThumbnail(projet));
	}
}
