import Component from './Component';

export default class CloseButton extends Component {
	constructor() {
		super('close');
		this.children = [
			new Component(
				'div',
				{
					name: 'class',
					value: 'd-grid gap-2 d-md-flex justify-content-md-center',
				},
				[
					new Component(
						'button',
						[
							{ name: 'type', value: 'button' },
							{ name: 'backBtn' },
							{ name: 'class', value: 'btn btn-outline-danger me-md-2' },
						],
						'Fermer'
					),
				]
			),
		];
	}
}
