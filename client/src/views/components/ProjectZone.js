import Component from './Component';
import DropZone from './DropZone';
import FilesTable from './FilesTable';
import MembersTable from './MembersTable';
import ProjectsTable from './ProjectsTable';

export default class ProjectZone extends Component {
	constructor() {
		super('div', { name: 'class', value: 'home-zone' }, [
			new FilesTable(),
			new DropZone(),
			new MembersTable(),
		]);
	}
}
