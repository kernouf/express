import Component from './Component';

const MAXROW = 8;

export default class FilesTables extends Component {
	constructor(files = []) {
		super(
			'div',
			[
				{ name: 'id', value: 'files-table' },
				{ name: 'class', value: 'main-tables' },
			],
			[]
		);

		this.refreshFiles(files);
	}

	refreshFiles(files) {
		const table = new Component('table', [
			{ name: 'class', value: 'table table-striped' },
		]);
		let rows = [];
		let idx = 0;
		rows.push(
			new Component('tr', null, [new Component('th', null, 'Fichiers')])
		);
		files.forEach((element) => {
			rows.push(
				new Component('tr', null, [
					new Component('td', null, [
						new Component('div', { name: 'class', value: 'form-check' }, [
							new Component(
								'input',
								[
									{ name: 'class', value: 'form-check-input' },
									{ name: 'type', value: 'checkbox' },
									{ name: 'id', value: 'defaultCheck1' },
									{ name: 'disabled', value: 'true' },
								],
								[]
							),
							new Component(
								'label',
								[
									{ name: 'class', value: 'form-check-label' },
									{ name: 'for', value: 'defaultCheck1' },
								],
								element.nom
							),
						]),
					]),
				])
			);
		});
		for (idx; idx < MAXROW; idx++) {
			rows.push(new Component('tr', null, [new Component('td', null, [])]));
		}
		table.children = rows;
		this.children = table;
	}
}
