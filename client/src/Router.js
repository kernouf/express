import { connected, connect, disconnect } from './controller/loginManager';
import { getResult } from './controller/analyseManager';

export default class Router {
	static contentElement;

	static routes = [];

	static navigateTo(url = '/') {
		history.pushState(null, null, url);
		this.router(url);
	}

	static async router(path = '/home') {
		// Tester chaque route pour voir si y a un potentiel match

		if (path == '/' && connected) {
			Router.navigateTo();
		} else {
			let route = this.routes.find((route) => route.path === path);

			if (!route) route = this.routes[0];

			const page = new route.view();
			page.mount?.(this.contentElement);
			this.linksElement();
		}
	}

	static linksElement() {
		const links = this.contentElement.querySelectorAll('a');
		links.forEach((link) => {
			if (link.hasAttribute('data-link'))
				link.addEventListener('click', (event) => {
					event.preventDefault();
					console.log('clicked')
					const element = event
						.composedPath()
						.find((el) => el.localName == 'a');
					//console.log(element.getAttribute('href'));
					Router.navigateTo(element.getAttribute('href'));
				});
		});

		const buttons = this.contentElement.querySelectorAll('button');
		buttons.forEach((buttons) => {
			if (buttons.hasAttribute('loginBtn'))
				buttons.addEventListener('click', (event) => {
					event.preventDefault();
					connect();
				});
			if (buttons.hasAttribute('logoutBtn'))
				buttons.addEventListener('click', (event) => {
					event.preventDefault();
					disconnect();
				});
			if (buttons.hasAttribute('analyseBtn'))
				buttons.addEventListener('click', (event) => {
					event.preventDefault();
					getResult();
				});
			if (buttons.hasAttribute('backBtn'))
				buttons.addEventListener('click', (event) => {
					event.preventDefault();
					Router.navigateTo();
				});
		});
		
	}
}
