import * as monaco from 'monaco-editor';

// self.MonacoEnvironment = {
// 	getWorkerUrl: function (moduleId, label) {
// 		if (label === 'json') {
// 			return './json.worker.bundle.js';
// 		}
// 		if (label === 'css') {
// 			return './css.worker.bundle.js';
// 		}
// 		if (label === 'html') {
// 			return './html.worker.bundle.js';
// 		}
// 		if (label === 'typescript' || label === 'javascript') {
// 			return './ts.worker.bundle.js';
// 		}
// 		return './editor.worker.bundle.js';
// 	}
// }

window.editor = monaco.editor.create(document.getElementById('cddlDataDefinition'), {
  minimap: {
    enabled: false
  }
});