import Component from './Component';

export default class InfoButton extends Component {
	constructor() {
		super('div', [{ name: 'class', value: 'info-btn' }]);

		this.children = [
			new Component(
				'a',
				[{ name: 'href', value: '/help' }, {name : 'data-link', value: 'undefined'}],
				[
					new Component('img', 
						[{ name: 'class', value: 'info' },
						{ name: 'src', value: './images/infocircle.png' },
						{ name: 'alt', value: `Bouton d'information` },
						{name: 'href', value:'/help'},
						{ name: 'data-link' },],
					),
				]
			),
		];
	}
}
