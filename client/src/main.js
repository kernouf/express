import Index from './views/Index';
import Connexion from './views/Connexion';
import Router from './Router';
import Inscription from './views/Inscription';
import Dashboard from './views/Dashboard';
import Aide from './views/Aide';
import Saisie from './views/Saisie';
import Analyse from './views/Analyse';

Router.contentElement = document.querySelector('#pageContent');
Router.routes = [
	{ path: '/', view: Index },
	{ path: '/home', view: Index },
	{ path: '/login', view: Connexion },
	{ path: '/register', view: Inscription },
	{ path: '/saisie', view: Saisie },
	{ path: '/analyse', view: Analyse },
	{ path: '/help', view: Aide },
];

window.onpopstate = () => Router.navigateTo(document.location.pathname, false);
window.onpopstate();
