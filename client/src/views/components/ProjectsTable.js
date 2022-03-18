import Component from './Component';

const MAXROW = 8;

export default class ProjectsTables extends Component {
	constructor(projets = []) {
		super(
			'div',
			[
				{ name: 'id', value: 'projects-table' },
				{ name: 'class', value: 'main-tables' },
			],
			[]
		);

		this.refreshProjects(projets);
	}

	refreshProjects(projects = []) {
		const table = new Component('table', [
			{ name: 'class', value: 'table table-striped' },
		]);
		let rows = [];
		let idx = 0;
		rows.push(
			new Component('tr', null, [new Component('th', null, 'Projets')])
		);
		projects.forEach((element) => {
			rows.push(
				new Component('tr', null, [
					new Component('td', null, new Component('a', null, element.nom)),
				])
			);
			idx++;
		});
		for (idx; idx < MAXROW; idx++) {
			rows.push(new Component('tr', null, [new Component('td', null, [])]));
		}
		table.children = rows;
		this.children = table;
	}
}
