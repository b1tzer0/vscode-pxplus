"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// Import the providers.
const hoverProvider_1 = require("./features/hoverProvider");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "pxplus" is now active!');
    context.subscriptions.push(vscode.languages.registerHoverProvider('pxplus', new hoverProvider_1.default()));
    // need to set in the extension host as well as the completion provider uses it.
    vscode.languages.setLanguageConfiguration('pxplus', {
        wordPattern: /(-?\d*\.\d\w*)|([^\-\`\~\!\@\#\%\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
        onEnterRules: [
            {
                // e.g. /** | */
                beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
                afterText: /^\s*\*\/$/,
                action: { indentAction: vscode.IndentAction.IndentOutdent, appendText: ' * ' }
            },
            {
                // e.g. /** ...|
                beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
                action: { indentAction: vscode.IndentAction.None, appendText: ' * ' }
            },
            {
                // e.g.  * ...|
                beforeText: /^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,
                action: { indentAction: vscode.IndentAction.None, appendText: '* ' }
            },
            {
                // e.g.  */|
                beforeText: /^(\t|(\ \ ))*\ \*\/\s*$/,
                action: { indentAction: vscode.IndentAction.None, removeText: 1 }
            },
            {
                // e.g.  *-----*/|
                beforeText: /^(\t|(\ \ ))*\ \*[^/]*\*\/\s*$/,
                action: { indentAction: vscode.IndentAction.None, removeText: 1 }
            }
        ]
    });
    // vscode.languages.registerHoverProvider('pxplus', {
    //     provideHover(document:vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
    // 		const range = document.getWordRangeAtPosition(position);
    //         const word = document.getText(range);
    // 		switch (word) {
    // 			case "SETESC":
    // 				let content: vscode.MarkdownString = new vscode.MarkdownString("1. Subroutine Interrupt-Handler: SETESC stmtref");
    // 				content.appendMarkdown("\n 1. Subprogram Interrupt-Handler: SETESC prog_name$");
    // 				content.appendMarkdown("\n 1. Interrupt Process On/Off: SETESC {ON | OFF}");
    // 				content.appendMarkdown("\n 1. Enable/Disable for Range: SETESC {DISABLE | ENABLE}");
    // 				content.appendMarkdown("\n 1. Return Current Program: SETESC READ x$");
    // 				content.appendMarkdown("\n **where**");
    // 				content.appendMarkdown("\n *prog_name$* Name of generic interrupt-handling program. Define it once per session.");
    // 				content.appendMarkdown("\n *stmtref* Program line number or statement label to which to transfer control.");
    // 				content.appendMarkdown("\n *x$* Name of the current SETESC program.");
    // 				return new vscode.Hover(
    // 					content.value
    // 				);
    // 				break;
    // 			default:
    // 				break;
    // 		}
    //     }
    //   });
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map