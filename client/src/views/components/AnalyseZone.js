import Component from './Component';
import AnalyseButton from './AnalyseButton';
import CloseButton from './CloseButton';

export default class AnalyseZone extends Component {
	constructor() {
		super('div', { name: 'id', value: 'result-container' }, []);
		this.setChildren();
	}

	setChildren(elements = []) {
		const liste = new Component(
			'ul',
			[
				{ name: 'id', value: 'analyse-table' },
				{ name: 'class', value: '' },
			],
			[]
		);

		elements.forEach((element) => {
			liste.children.push(new Component('li', null, element));
		});
		this.children = [liste, new CloseButton()];
	}
}
