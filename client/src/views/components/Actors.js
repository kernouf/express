import Component from './Component';

export default class Actors extends Component {
	constructor() {
		super('div', { name: 'class', value: 'Actors' });
	}
    render() {
        return `
        <div style="background-color: white; width : 860px;border: rgb(14, 5, 5) solid 1px;;
  margin-left: 5%;margin-top: 5%; padding: 25px;">
  <form style="background-color: white;">
      <h4>Nom du fichier</h1>
    <label for="inputZip" ></label>
    <input type="text" class="form-control"; >
    <table class="table" >
      <thead>
        <tr>
          <th scope="col">Acteurs</th>
          <th scope="col">Type</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="text" class="form-control" ></td>
          <td>
            <select id="inputState" class="form-control">
            <option selected>choisir...</option>
            <option>Interne</option>
            <option>Externe</option>
            </td>
          <td><input type="text" class="form-control" ></td>
        </tr>
        <tr>
          <td>
            <input type="text" class="form-control" ></td>
          <td>
            <select id="inputState" class="form-control">
              <option selected>choisir...</option>
              <option>Interne</option>
              <option>Externe</option></td>
          <td><input type="text" class="form-control" ></td>
        </tr>
        <tr>
          <td>
            <input type="text" class="form-control" ></td>
          <td>
            <select id="inputState" class="form-control">
              <option selected>choisir...</option>
              <option>Interne</option>
              <option>Externe</option></td>
          <td><input type="text" class="form-control" ></td>
        </tr>
  
        <tr>
          <td>
            <input type="text" class="form-control" ></td>
          <td>
            <select id="inputState" class="form-control">
              <option selected>choisir...</option>
              <option>Interne</option>
              <option>Externe</option></td>
          <td><input type="text" class="form-control" ></td>
        </tr>
        <tr>
          <td>
            <input type="text" class="form-control" ></td>
          <td>
            <select id="inputState" class="form-control">
              <option selected>choisir...</option>
              <option>Interne</option>
              <option>Externe</option></td>
          <td><input type="text" class="form-control" ></td>
        </tr>
        <tr>
          <td>
            <input type="text" class="form-control" ></td>
          <td>
            <select id="inputState" class="form-control">
              <option selected>choisir...</option>
              <option>Interne</option>
              <option>Externe</option></td>
          <td><input type="text" class="form-control" ></td>
        </tr>
      </tbody>
    </table> 
<div style="text-align: center;">
    <button type="button" class="btn btn-success">Sauvgarder</button>
    <button type="button" class="btn btn-danger">Annuler</button>
  </div>
  </div>
        `
    }
}
