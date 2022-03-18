import { connected } from '../../controller/loginManager.js';
import Component from './Component.js';

export default class NavBar extends Component {
	constructor() {
		super('header');
		this.children = [
			new Component(
				'nav',
				{ name: 'class', value: `navbar navbar-light bg-light` },
				[
					new Component('div', { name: 'class', value: 'container-fluid' }, [
						new Component(
							'a',
							[
								{ name: 'class', value: 'navbar-brand' },
								{ name: 'href', value: '/' },
								{ name: 'data-link' },
							],
							new Component(
								'img',
								[
									{ name: 'src', value: './images/logo.png' },
									{ name: 'id', value: 'logo' },
									{ name: 'data-link', value: '' },
								],
								[]
							)
						),
						new Component(
							'div',
							{ name: 'class', value: 'buttons' },
							this.#getButton()
						),
					]),
				]
			),
		];
	}

	#getButton() {
		if (connected) {
			return [
				new Component(
					'div',
					{ name: 'class', value: 'buttons' },
					new Component(
						'button',
						[
							{ name: 'id', value: 'btnright' },
							{ name: 'class', value: 'btn btn-outline-success' },
							{ name: 'logoutBtn' },
							{ name: 'type', value: 'submit' },
						],
						'Se déconnecter'
					)
				),
			];
		} else {
			return [
				new Component(
					'a',
					[
						{ name: 'href', value: '/login' },
						{ name: 'data-link' },
						{ name: 'id', value: 'btnleft' },
						{ name: 'class', value: 'btn btn-outline-success' },
					],
					'Se connecter'
				),
				new Component(
					'a',
					[
						{ name: 'href', value: '/register' },
						{ name: 'data-link' },
						{ name: 'id', value: 'btnleft' },
						{ name: 'class', value: 'btn btn-outline-success' },
					],
					`S'inscrire`
				),
			];
		}
	}
	oldrender() {
		return `
        <header>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Our logo or App Naame</a>
                    <div class="buttons">
                        <a href="/login" data-link id="btnleft" class="btn btn-outline-success">
                            Se connecter
                        </a>
                        <a
                            href="/register"
                            data-link
                            id="btnleft"
                            class="btn btn-outline-success"
                        >
                            S'inscrire
                        </a>
                    </div>
                </div>
            </nav>
        </header>`;
	}
}
