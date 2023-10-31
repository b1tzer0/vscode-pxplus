import * as vscode from 'vscode';
import { exec } from 'child_process';
const path = require('path');

export function runCompiler(context: vscode.ExtensionContext){
    let documentFileName = vscode.window.activeTextEditor?.document.fileName;
    let fileName = path.basename(documentFileName);

    let pxplusPath = vscode.workspace.getConfiguration('pxplus').get<string>('pxplusDirectory.path');
    let compiler = vscode.workspace.getConfiguration('pxplus').get<string>('pxplusDirectory.program');
    let isWindx = (vscode.workspace.getConfiguration('pxplus').get<boolean>('windx.client') ?? false);

    let sourceProgram = documentFileName;
    let compileProgram = vscode.workspace.getConfiguration('pxplus').get<string>('workingDirectory.program') + fileName.replace(/.pxprg$/, '');

    if (isWindx) {
    //let sourceProgram = vscode.workspace.getConfiguration('pxplus').get<string>('workingDirectory.source') + fileName;
    //let compileProgram = vscode.workspace.getConfiguration('pxplus').get<string>('workingDirectory.program') + fileName;
    }

    let errorPath = vscode.workspace.getConfiguration('pxplus').get<string>('workingDirectory.errors');
    
    // Select a terminal
    let terminal = selectTerminal();

    // Bring the terminal forward
    terminal.show();

    // Send a command to the terminal (as text)
    terminal.sendText('"' + pxplusPath + ' ' + compiler + ' -arg '+ sourceProgram + ' ' + compileProgram +' '+ errorPath + '"');
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