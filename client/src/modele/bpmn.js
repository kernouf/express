import Fichier from './fichier';

export default class Bpmn extends Fichier {
	contenu;

	constructor(id, nom, projet, contenu) {
		super(id, nom, projet);
		this.contenu = contenu;
	}
}
