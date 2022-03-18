import Index from './views/Index';
import Connexion from './views/Connexion';
import Router from './Router';
import Inscription from './views/Inscription';
import Aide from './views/Aide';
import Saisie from './views/Saisie';
import Analyse from './views/Analyse';

const index = new Index();
const connexion = new Connexion();
const inscription = new Inscription();
const saisie = new Saisie();
const analyse = new Analyse();
const aide = new Aide();

Router.contentElement = document.querySelector('#pageContent');
Router.routes = [
	{ path: '/', view: index },
	/*{ path: '/home', view: index },*/
	{ path: '/login', view: connexion },
	{ path: '/register', view: inscription },
	{ path: '/saisie', view: saisie },
	{ path: '/analyse', view: analyse },
	{ path: '/help', view: aide },
];

window.onpopstate = () => Router.navigateTo(document.location.pathname, false);
window.onpopstate();
