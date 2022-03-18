import Component from './Component';
import DropZone from './DropZone';
import FilesTable from './FilesTable';

export default class GuestZone extends Component {
	constructor() {
		super('div', { name: 'class', value: 'guest-zone' }, [
			new FilesTable(),
			new DropZone(),
			new Component('div', null, []),
		]);
	}
}
