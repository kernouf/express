export default class Component {
	tagName;
	attribute;
	children;

	constructor(tagName, attribute, children) {
		this.tagName = tagName;
		this.attribute = attribute;
		this.children = children;
	}

	render() {
		let html = `<${this.tagName} ${this.renderAttributes()}`;
		if (this.children) {
			html += `>${this.renderChildren()}</${this.tagName}>`;
		} else {
			html += ' />';
		}
		return html;
	}

	renderAttributes() {
		if (this.attribute) {
			if (this.attribute instanceof Array) {
				let res = '';
				this.attribute.forEach((e) => {
					res += `${e.name}="${e.value}" `;
				});
				return res;
			} else return `${this.attribute.name}="${this.attribute.value}"`;
		}
		return '';
	}

	renderChildren() {
		if (this.children instanceof Array) {
			let html = '';
			this.children.forEach((child) => {
				html += this.renderChild(child);
			});
			return html;
		}
		return this.renderChild(this.children);
	}

	renderChild(child) {
		if (child instanceof Component) return child.render();
		else return child || '';
	}
}
