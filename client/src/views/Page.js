import Component from './components/Component';

export default class Page extends Component {
	element;
	title;

	constructor(className, children) {
		super('div', { name: 'class', value: className }, children);
	}

	setTitle(title) {
		document.title = title;
		this.title = title;
	}

	mount(element) {
		this.element = element;
	}
}
