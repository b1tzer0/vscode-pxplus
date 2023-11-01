import * as vscode from 'vscode';
import { exec } from 'child_process';
const path = require('path');

export function runCompiler(context: vscode.ExtensionContext) {
    const activeTextEditor = vscode.window.activeTextEditor;
    if (!activeTextEditor) {
        vscode.window.showErrorMessage('No active text editor found!');
        return;
    }

    const documentFileName = activeTextEditor.document.fileName;
    const filePath = path.dirname(documentFileName);
    const fileName = path.basename(documentFileName);
    const fileNameWithoutExtension = fileName.replace(/.pxprg$/, '');

    const pxplusPath = normalizeToDoubleBackslash(getConfiguration('pxplusDirectory.path'));
    const compiler = normalizeToSingleBackslash(getConfiguration('pxplusDirectory.program'));
    const isWindx = getConfiguration('windx.client', 'false') === 'true';

    let sourceProgram = documentFileName;
    let compileProgramPath = normalizeToSingleBackslash(getConfiguration('workingDirectory.program')).replace("%f", filePath);
    let compileProgram = path.join(compileProgramPath, fileNameWithoutExtension);

    if (isWindx) {
        // Adjust sourceProgram and compileProgram here if needed for WindX
    }

    const errorPath = normalizeToSingleBackslash(getConfiguration('workingDirectory.errors'));

    // Select a terminal
    const terminal = selectTerminal();

    // Bring the terminal forward
    terminal.show();

    // Send a command to the terminal (as text)
    const command = `& "${pxplusPath}" "${compiler}" -arg "${sourceProgram}" "${compileProgram}" "${errorPath}"`;
    terminal.sendText(command);
}

function getConfiguration(key: string, defaultVal: string = ''): string {
    return vscode.workspace.getConfiguration('pxplus').get<string>(key) ?? defaultVal;
}

function normalizeToSingleBackslash(path: string): string {
    return path.replace(/\\\\/g, '\\');
}

function normalizeToDoubleBackslash(path: string): string {
    return path.replace(/\\/g, '\\\\');
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