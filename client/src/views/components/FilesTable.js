import Component from './Component';

export default class FilesTables extends Component {
	constructor() {
		super('div', { name: 'class', value: 'main-tables' }, [
			new Component(
				'table',
				[
					{ name: 'id', value: 'files-table' },
					{ name: 'class', value: 'table table-striped' },
				],	
				[
					new Component('tr', null, [new Component('th', null, 'Fichiers')]),
					new Component('tr', null, [new Component('td', null, [new Component('div',{name:'class', value:'form-check'}, [new Component('input',[{name:'class', value:'form-check-input'}, {name:'type', value:'checkbox'},{name:'id', value:'defaultCheck1'}],[]), new Component('label',[{name:'class', value:'form-check-label'},{name:'for', value:'defaultCheck1'}],'fichier 1')])])]),

					new Component('tr', null, [new Component('td', null, [new Component('div',{name:'class', value:'form-check'}, [new Component('input',[{name:'class', value:'form-check-input'}, {name:'type', value:'checkbox'},{name:'id', value:'defaultCheck1'}],[]), new Component('label',[{name:'class', value:'form-check-label'},{name:'for', value:'defaultCheck1'}],'fichier 2')])])]),
					
					new Component('tr', null, [new Component('td', null, [new Component('div',{name:'class', value:'form-check'}, [new Component('input',[{name:'class', value:'form-check-input'}, {name:'type', value:'checkbox'},{name:'id', value:'defaultCheck1'}],[]), new Component('label',[{name:'class', value:'form-check-label'},{name:'for', value:'defaultCheck1'}],'fichier 3')])])]),
					new Component('tr', null, [new Component('td', null, [new Component('div',{name:'class', value:'form-check'}, [new Component('input',[{name:'class', value:'form-check-input'}, {name:'type', value:'checkbox'},{name:'id', value:'defaultCheck1'}],[]), new Component('label',[{name:'class', value:'form-check-label'},{name:'for', value:'defaultCheck1'}],' ')])])]),
					new Component('tr', null, [new Component('td', null, [new Component('div',{name:'class', value:'form-check'}, [new Component('input',[{name:'class', value:'form-check-input'}, {name:'type', value:'checkbox'},{name:'id', value:'defaultCheck1'}],[]), new Component('label',[{name:'class', value:'form-check-label'},{name:'for', value:'defaultCheck1'}],' ')])])]),
					new Component('tr', null, [new Component('td', null, [new Component('div',{name:'class', value:'form-check'}, [new Component('input',[{name:'class', value:'form-check-input'}, {name:'type', value:'checkbox'},{name:'id', value:'defaultCheck1'}],[]), new Component('label',[{name:'class', value:'form-check-label'},{name:'for', value:'defaultCheck1'}],' ')])])]),
					new Component('tr', null, [new Component('td', null, [new Component('div',{name:'class', value:'form-check'}, [new Component('input',[{name:'class', value:'form-check-input'}, {name:'type', value:'checkbox'},{name:'id', value:'defaultCheck1'}],[]), new Component('label',[{name:'class', value:'form-check-label'},{name:'for', value:'defaultCheck1'}],' ')])])]),
					new Component('tr', null, [new Component('td', null, [new Component('div',{name:'class', value:'form-check'}, [new Component('input',[{name:'class', value:'form-check-input'}, {name:'type', value:'checkbox'},{name:'id', value:'defaultCheck1'}],[]), new Component('label',[{name:'class', value:'form-check-label'},{name:'for', value:'defaultCheck1'}],' ')])])]),
					new Component('tr', null, [new Component('td', null, [new Component('div',{name:'class', value:'form-check'}, [new Component('input',[{name:'class', value:'form-check-input'}, {name:'type', value:'checkbox'},{name:'id', value:'defaultCheck1'}],[]), new Component('label',[{name:'class', value:'form-check-label'},{name:'for', value:'defaultCheck1'}],' ')])])]),
				]
			),
		]);
	}
}
