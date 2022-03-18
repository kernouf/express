import Component from './Component';

export default class AnalyseButton extends Component {
	constructor() {
		super('div');
		this.children = [
			new Component('div', null, [
				new Component(
					'button',
					[
						{ name: 'type', value: 'button' },
						{ name: 'analyseBtn' },
						{ name: 'class', value: 'btn btn-success btn-lg' },
					],
					'Analyser'
				),
			]),
		];
	}
}
