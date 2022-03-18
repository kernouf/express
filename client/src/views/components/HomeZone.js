import Component from './Component';
import DropZone from './DropZone';
import FilesTable from './FilesTable';
import ProjectsTable from './ProjectsTable';

export default class HomeZone extends Component {
	constructor() {
		super('div', { name: 'class', value: 'home-zone' }, [
			new FilesTable(),
			new DropZone(),
			new ProjectsTable(),
		]);
	}
}
