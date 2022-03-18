import Component from './Component';
import AnalyseButton from './AnalyseButton';
import CloseButton from './CloseButton';

export default class AnalyseZone extends Component {
	constructor(elements = null) {
		super('div', { name: 'class', value: 'analyse-zone' }, []);
		this.setChildren(elements);
	}

	setChildren(elements) {
		let liste;
		if (elements == null) {
			/*} else if ((elements.length = 0)) {*/
			liste = new Component(
				'h2',
				{ name: 'class', value: 'nice' },

				`L'analyse s'est déroulée sans emcombres, vous avez nos félicitations !!`
			);
		} else {
			liste = new Component('ul', [{ name: 'id', value: 'analyse-table' }], []);

			elements.forEach((element) => {
				liste.children.push(new Component('li', null, element));
			});
		}
		this.children = [
			new Component('div', { name: 'id', value: 'result-container' }, [
				new Component('h1', null, `Résultat d'Analyse`),
				liste,
			]),
		];
	}
}
