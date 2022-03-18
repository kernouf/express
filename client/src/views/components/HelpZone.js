import Component from './Component';

export default class HelpZone extends Component {
	constructor() {
		super('div', { name: 'class', value: 'guest-zone' });
        /*this.children = [
            new Component('div',{name: 'class', value : 'd-flex align-items-start'},
            [
                new Component('div',
                            [{name: 'class', value : 'nav flex-column nav-pills me-3'},
                             {name: 'id', value: 'v-pills-tab'},
                            {name: 'role',value: 'tablist'},
                            {name: 'aria-orientation',value: 'vertical'}],
                            [
                                new Component('button',
                                    [{name: 'class',value: 'nav-link active'},
                                    {name: 'id',value: 'v-pills-cu-tab'},
                                    {name: 'data-bs-toggle',value: 'pill'},
                                    {name: 'data-bs-target',value: '#v-pills-cu'},
                                    {name: 'type',value: 'button'},
                                    {name: 'role',value: 'tab'},
                                    {name: 'aria-controls',value: 'v-pills-cf'},
                                    {name: 'aria-selected', value : 'true'}],
                                    `Conseils fonctionnels`
                                ),

                                new Component('button',
                                    [{name: 'class',value: 'nav-link'},
                                    {name: 'id',value: 'v-pills-cf-tab'},
                                    {name: 'data-bs-toggle',value: 'pill'},
                                    {name: 'data-bs-target',value: '#v-pills-cf'},
                                    {name: 'type',value: 'button'},
                                    {name: 'role',value: 'tab'},
                                    {name: 'aria-controls',value: 'v-pills-cu'},
                                    {name: 'aria-selected', value : 'true'}],
                                    `Conseils fonctionnels`
                                ),

                            ]
                            )
            ]),
        ];*/
	}
    render() {
        return `
        <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link active" id="v-pills-cu-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cu" type="button" role="tab" aria-controls="v-pills-cu" aria-selected="true">Conseils d'utilisation</button>
        <button class="nav-link " id="v-pills-cf-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cf" type="button" role="tab" aria-controls="v-pills-cf" aria-selected="false">Conseils fonctionnels</button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-cu" role="tabpanel" aria-labelledby="v-pills-home-tab">
        <p><b><i>EasyAnalyse</i></b> est une application ouverte à tous qui accompagne durant l'analyse fonctionnelle.</p>
        <p>Vous pouvez l'utiliser en tant que <i>Guest</i> ou en tant que <i>User connecté.</i></p>
        <p>Si vous choisissez de vous connecter utilisez votre login et votre mot de passe ou inscrivez-vous en renseignant les informations demandées.</p> 
        <p>Dans les deux cas, vous pourrez importer des fichiers sur la page d'accueuil ou votre espace personnel.</p>
        <p>Si vous choisissez d'être connecté, vous aurez en plus l'avantage de pouvoir stocker vos fichiers et les répartir en projets. </p>
        <p>Une fois vos fichiers importés, vous pourrez analyser la cohérence en appuyant sur le bouton <b>Analyser</b>.</p>
        <p>Le rapport d'analyse s'affiche pour vous féliciter ou relever les erreurs commises.</p>
        <p>Cette application a été développée par l'équipe <i>Rouge</i>.</p>
        <p style="color : red;">© Copyright <i>EasyAnalyse</i> Tous droits réservés. </p>
        </div>
        <div class="tab-pane fade " id="v-pills-cf" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" type="button" role="tab" aria-controls="nav-1" aria-selected="true">BPMN</button>
                <button class="nav-link" id="nav-2-tab" data-bs-toggle="tab" data-bs-target="#nav-2" type="button" role="tab" aria-controls="nav-2" aria-selected="false">MFC</button>
                <button class="nav-link" id="nav-3-tab" data-bs-toggle="tab" data-bs-target="#nav-3" type="button" role="tab" aria-controls="nav-3" aria-selected="false">Acteurs du SI</button>
                <button class="nav-link" id="nav-4-tab" data-bs-toggle="tab" data-bs-target="#nav-4" type="button" role="tab" aria-controls="nav-4" aria-selected="false">Objectifs</button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
                <p>Méthode de modélisation d’un processus-métier au travers d’une représentation graphique.</p>
                <p>Vous pouvez concevoir vos BPMN à l'aide de <a href="https://www.bizagi.com/en/platform/modeler">Bizagi</a> ou de <a href="https://demo.bpmn.io/new">Bpmn.io</a>.</p>
                <p> Important :
                    <ul>
                    <li>Un BPMN doit contenir un seul évènement de début et au moins une fin</li>
                    <li>Tous les chemins du processus mène à une fin</li>
                    <li>Le système d'information est la piscine principale.</li>
                    <li>Les acteurs internes sont représentés par la division de la piscine procipale</li>
                    <li>Les acteurs externes sont représentés dans des piscines à part.</li>
                    <li>Un flux échangé a une source et une cible.</li>
                    <li>Chaque flux a un libellé unique (numéro + nom du flux).</li>
                    </ul>
                </p>
                </div>
                <div class="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab">
                <p>Modèle qui met en évidence et analyse les flux
                d'informations échangés entre les acteurs, entre le
                domaine d'étude et les domaines connexes qui s'y
                rattachent.</p>
                <p>Vous pouvez concevoir vos MFC à l'aide de <a href="https://www.lucidchart.com/pages/fr/exemple/diagramme-en-ligne">Lucidchart</a>.</p>
                <p> Important :
                    <ul>
                    <li>Un MFC doit faire référence au SI. </li>
                    <li>Le Conteneur rectangulaire contient les objectifs tactiques.</li>
                    <li>Chaque acteur externe est représenté en dehors du Conteneur rectangulaire du SI</li>
                    <li>Un flux échangé a une source et une cible.</li>
                    <li>Tout flux échangé doit être libellé.</li>
                    </ul>
                </p>
                </div>
                <div class="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-3-tab">...</div>
            </div>
            
        </div>
        </div>
        </div>
  
        `
    }
}
