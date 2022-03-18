import Component from './Component';

export default class ConnectionForm extends Component {
	constructor() {
		super('div', null, [
			new Component('h1', null, 'Connexion'),
			new Component('div', { name: 'id', value: 'import-drop' }, [
				new Component('form', null, [
					new Component('div', { name: 'class', value: 'form-group' }, [
						new Component(
							'label',
							{ name: 'for', value: 'username' },
							'Identifiant'
						),
						new Component('input', [
							{ name: 'type', value: 'text' },
							{ name: 'class', value: 'form-control' },
							{ name: 'id', value: 'username' },
							{ name: 'placeholder', value: 'Identifiant' },
						]),
					]),
					new Component('div', { name: 'class', value: 'form-group' }, [
						new Component(
							'label',
							{ name: 'for', value: 'password' },
							'Mot de passe'
						),
						new Component('input', [
							{ name: 'type', value: 'password' },
							{ name: 'class', value: 'form-control' },
							{ name: 'id', value: 'password' },
							{ name: 'placeholder', value: 'Mot de passe' },
						]),
					]),
					new Component(
						'button',
						[
							{ name: 'type', value: 'submit' },
							{ name: 'loginBtn' },
							{ name: 'class', value: 'btn btn-outline-success' },
						],
						'Se connecter'
					),
				]),
			]),
			new Component('p', null, [
				`Vous n'avez pas de compte ? `,
				new Component(
					'a',
					[{ name: 'href', value: '/register' }, { name: 'data-link' }],
					'Inscrivez-vous'
				),
			]),
		]);
	}
}
