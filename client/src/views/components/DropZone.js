import Component from './Component.js';
import AnalyseButton from './AnalyseButton.js';

export default class DropZone extends Component {
	constructor() {
		super('div', { name: 'id', value: 'import-container' }, [
			/*new Component(
				'div',
				[
					{ name: 'id', value: 'import-drop' },
					{ name: 'class', value: 'main-contener' },
				],
				[]
			),
			new Component('div', null, [
				new Component('input', [
					{ name: 'type', value: 'file' },
					{name: 'id',value: 'btn-import',},
					{ name: 'name', value: 'import' },
					{ name: 'accept', value: 'image/png, image/jpeg' },
				]),
			]),*/ `<div class="drop-it-hot" id="drop-area">
    <div class="circle">
	<svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
		<path d="M0 0h24v24H0z" fill="none" />
		<path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
	</svg>
</div>
<form class="choose-files">
	<div class="button-wrapper">
		<label class="label" for="fileElem">Drag file here to upload or</label>
		<button type="button" class="btn" style="background-color: #0d6efd;">Choose </button>
		<input type="file" id="fileElem" multiple>
	</div>
</form>
<div id="gallery"></div>
</div>`,
			new AnalyseButton(),
		]);
	}
}
