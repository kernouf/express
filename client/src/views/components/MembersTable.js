import Component from './Component';

export default class MembersTables extends Component {
	constructor() {
		super('div', { name: 'class', value: 'main-tables' }, [
			new Component(
				'table',
				[
					{ name: 'id', value: 'members-table' },
					{ name: 'class', value: 'table table-striped' },
				],
				[
					new Component('tr', null, [new Component('th', null, 'Membres')]),
					new Component('tr', null, [new Component('td', null, 'Membre 1')]),

					new Component('tr', null, [new Component('td', null, '')]),

					new Component('tr', null, [new Component('td', null, '')]),
					new Component('tr', null, [new Component('td', null, '')]),
					new Component('tr', null, [new Component('td', null, '')]),
					new Component('tr', null, [new Component('td', null, '')]),
					new Component('tr', null, [new Component('td', null, '')]),
					new Component('tr', null, [new Component('td', null, '')]),
					new Component('tr', null, [new Component('td', null, '')]),
				]
			),
		]);
	}
}
