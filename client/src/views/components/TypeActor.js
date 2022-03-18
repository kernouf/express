import Component from './Component';


            //  <option selected>choisir...</option>
              //<option>Interne</option>
              //<option>Externe</option>

export default class HelpZone extends Component {
	constructor() {
        new Component('select', [{name: 'id', value: 'inputState'},{name: 'class', value:'form-control'}],)
        this.children = [new Component('option', [{name : 'value', value: 'selected'}, 'Choisir...']),
                         new Component('option', null, 'Interne'),
                         new Component('option', null, 'Externe'),
                        ]       
	}

    render() { 
    }
}
