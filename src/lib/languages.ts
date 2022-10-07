//@ts-ignore
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
//@ts-ignore
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
//@ts-ignore
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
//@ts-ignore
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
//@ts-ignore
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

// MonacoEnvironment should be initialized before the editor
export function initLanguageWorkers() {
	self.MonacoEnvironment = {
		getWorker(_, label) {
			if (label === 'json') {
				return new jsonWorker()
			}
			if (label === 'css') {
				return new cssWorker()
			}
			if (label === 'html') {
				return new htmlWorker()
			}
			if (label === 'typescript' || label === 'javascript') {
				return new tsWorker()
			}
			return new editorWorker()
		}	
	}
}

export const fileTypes = new Map<string, string>([
	// Full support
	["css", "css"],
	["html", "html"],
    ["json", "json"],
	["js", "javascript"],
    ["mjs", "javascript"],
    ["ts", "typescript"],
    // Semi support
    ["c", "cpp"],
    ["cpp", "cpp"],
    ["py", "python"],
    ["md", "markdown"]
])