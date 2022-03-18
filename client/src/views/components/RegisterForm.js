import Component from './Component';

export default class RegisterForm extends Component {
	constructor() {
		super('div', null, [
			new Component('h1', null, 'Inscription'),
			new Component('div', { name: 'id', value: 'import-drop' }, [
				new Component('form', null, [
					new Component('div', { name: 'class', value: 'form-group' }, [
						new Component(
							'label',
							{ name: 'for', value: 'username' },
							'Identifiant'
						),
						new Component('input', [
							{ name: 'type', value: 'email' },
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
					new Component('div', { name: 'class', value: 'form-group' }, [
						new Component(
							'label',
							{ name: 'for', value: 'confirme-password' },
							'Mot de passe'
						),
						new Component('input', [
							{ name: 'type', value: 'password' },
							{ name: 'class', value: 'form-control' },
							{ name: 'id', value: 'confirme-password' },
							{ name: 'placeholder', value: 'Confirmation' },
						]),
					]),
					new Component(
						'button',
						[
							{ name: 'type', value: 'submit' },
							{ name: 'class', value: 'btn btn-outline-success' },
						],
						`S'inscrire`
					),
				]),
			]),
			new Component('p', null, [
				`Vous avez déjà un compte ? `,
				new Component(
					'a',
					[{ name: 'href', value: '/login' }, { name: 'data-link' }],
					'Connecter vous !'
				),
			]),
		]);
	}

	oldrender() {
		return `<div class="import-drop">
        <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-outline-success">Submit</button>
          </form>
    </div>
    <p>Vous n'avez pas de compte ? <a href="/register" data-link>Inscrivez-vous</a></p>
    <div class="info-btn">
        <img class="info" src="../images/infocircle.png" alt="info circle"></img>
      </div>`;
	}
}
