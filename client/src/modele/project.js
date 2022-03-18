export default class Project {
	id;
	nom;
	createur;
	membres;
	fichiers;

	constructor(id, nom, createur, membres, fichiers) {
		this.#id = id;
		this.#nom = nom;
		this.#createur = createur;
		this.#membres = membres;
		this.#fichiers = fichiers;
	}
}
