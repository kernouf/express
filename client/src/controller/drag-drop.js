let dragEvents;
let dragHighlight;
let dragUnighlight;
let inputRange;

let dropArea;
let iconElement;
let editorElement;

let fileElem;

let fileImportCallback;

function setElement() {
	dragEvents = ['dragenter', 'dragover', 'dragleave', 'drop'];
	dragHighlight = ['dragenter', 'dragover'];
	dragUnighlight = ['dragleave', 'drop'];
	inputRange = document.querySelectorAll('.editor input');

	dropArea = document.getElementById('drop-area');
	iconElement = document.querySelector('.circle');
	editorElement = document.querySelector('.editor');

	fileElem = document.getElementById('fileElem');

	inputRange.forEach((input) => input.addEventListener('change', handleUpdate));
	inputRange.forEach((input) =>
		input.addEventListener('mousemove', handleUpdate)
	);

	dragEvents.forEach((eventName) => {
		dropArea.addEventListener(eventName, preventDefaults, false);
	});

	dragHighlight.forEach((eventName) => {
		dropArea.addEventListener(eventName, highlight, false);
	});

	dragUnighlight.forEach((eventName) => {
		dropArea.addEventListener(eventName, unhighlight, false);
	});

	dropArea.addEventListener('drop', handleDrop, false);

	dropArea.addEventListener('dragover', dragOverHandler, false);

	fileElem.addEventListener('change', handleFiles);
}

const setFileImportCallback = (callback) => (fileImportCallback = callback);

const preventDefaults = (e) => {
	e.preventDefault();
	e.stopPropagation();
};

const highlight = () => {
	iconElement.classList.add('highlight');
};

const unhighlight = () => {
	iconElement.classList.remove('highlight');
};

const handleFiles = () => {
	fileImportCallback(fileElem.files);
};

function dragOverHandler(ev) {
	console.log('File(s) in drop zone');

	// Prevent default behavior (Prevent file from being opened)
	ev.preventDefault();
}

const handleDrop = (ev) => {
	console.log('drop');
	let dt = ev.dataTransfer;
	let files = dt.files;

	console.log('files', ev);
	handleFiles(files);
	/*
	console.log('File(s) dropped');

	// Prevent default behavior (Prevent file from being opened)
	ev.preventDefault();

	if (ev.dataTransfer.items) {
		// Use DataTransferItemList interface to access the file(s)
		for (var i = 0; i < ev.dataTransfer.items.length; i++) {
			// If dropped items aren't files, reject them
			if (ev.dataTransfer.items[i].kind === 'file') {
				var file = ev.dataTransfer.items[i].getAsFile();
				console.log('... file[' + i + '].name = ' + file.name);
			}
		}
	} else {
		// Use DataTransfer interface to access the file(s)
		for (var i = 0; i < ev.dataTransfer.files.length; i++) {
			console.log(
				'... file[' + i + '].name = ' + ev.dataTransfer.files[i].name
			);
		}
	}*/
};

function handleUpdate() {
	console.log(this.value);
	const suffix = this.dataset.unit;
	document.documentElement.style.setProperty(
		`--${this.name}`,
		this.value + suffix
	);
}

export { setElement, setFileImportCallback };
