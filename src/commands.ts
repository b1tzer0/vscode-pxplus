import * as vscode from 'vscode';

export function runEditor(context: vscode.ExtensionContext){
    let cwd = vscode.workspace.getConfiguration('pxplus').get<string>('workingDirectory.programs');
	let t = selectTerminal();

    t.show();
    if(cwd){
        t.sendText("cd" + " " + cwd);
    }
    
    t.sendText("notepad.exe");
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