import * as vscode from 'vscode';

export function runCompiler(context: vscode.ExtensionContext){
    let pxplusPath = vscode.workspace.getConfiguration('pxplus').get<string>('pxplusDirectory.path');
    let isWindx = vscode.workspace.getConfiguration('pxplus').get<boolean>('windx.client');
    
    // Select a terminal
    let terminal = selectTerminal();

    // Bring the terminal forward
    terminal.show();

    // Send a command to the terminal (as text)
    terminal.sendText("echo hallo");
}

function selectTerminal(): vscode.Terminal {
    ensureTerminalExists();
	return vscode.window.terminals.filter((t)=>{
        return t.name === "PxPlus Terminal";
    })[0];
}

function ensureTerminalExists(): void {
	if ((<any>vscode.window).terminals.length === 0) {
		vscode.window.createTerminal(`PxPlus Terminal`);
	}

    let termExists = vscode.window.terminals.filter((t)=>{
        return t.name === "PxPlus Terminal";
    })[0];

    if(!termExists){
        vscode.window.createTerminal(`PxPlus Terminal`);
    }
}