// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "pxplus" is now active!');

	// // The command has been defined in the package.json file
	// // Now provide the implementation of the command with registerCommand
	// // The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('test.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed

	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from test!');
	// });

	// context.subscriptions.push(disposable);

    vscode.languages.registerHoverProvider('pxplus', {
        provideHover(document:vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
			const range = document.getWordRangeAtPosition(position);
            const word = document.getText(range);
			switch (word) {
				case "SETESC":
					let content: vscode.MarkdownString = new vscode.MarkdownString("1. Subroutine Interrupt-Handler: SETESC stmtref");
					content.appendMarkdown("\n 1. Subprogram Interrupt-Handler: SETESC prog_name$");
					content.appendMarkdown("\n 1. Interrupt Process On/Off: SETESC {ON | OFF}");
					content.appendMarkdown("\n 1. Enable/Disable for Range: SETESC {DISABLE | ENABLE}");
					content.appendMarkdown("\n 1. Return Current Program: SETESC READ x$");
					content.appendMarkdown("\n **where**");
					content.appendMarkdown("\n *prog_name$* Name of generic interrupt-handling program. Define it once per session.");
					content.appendMarkdown("\n *stmtref* Program line number or statement label to which to transfer control.");
					content.appendMarkdown("\n *x$* Name of the current SETESC program.");

					return new vscode.Hover(
						content.value
					);
					break;
			
				default:
					break;
			}
        }
      });
}

// this method is called when your extension is deactivated
export function deactivate() {}
