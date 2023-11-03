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

    const pxplusPath = normalizeToDoubleBackslash(getConfiguration<string>('pxplusDirectory.path', ''));
    const compilerPath = normalizeToSingleBackslash(getConfiguration<string>('pxplusDirectory.compiler', ''));
    const host = normalizeToSingleBackslash(getConfiguration<string>('windx.server', ''));
    const port = normalizeToSingleBackslash(getConfiguration<string>('windx.port', ''));
    const iniPath = normalizeToSingleBackslash(getConfiguration<string>('windx.ini', ''));
    const isWindx = getConfiguration<boolean>('windx.client', false);

    let sourceProgram = documentFileName;

    let outputProgramPath = normalizeToSingleBackslash(getConfiguration<string>('workingDirectory.output', '')).replace("%f", filePath);
    let outputProgram = path.join(outputProgramPath, fileNameWithoutExtension);

    if (isWindx) {
        // Adjust sourceProgram and outputProgram here if needed for WindX
        let sourcePath = normalizeToSingleBackslash(getConfiguration<string>('workingDirectory.source', ''));

        sourceProgram = path.join(sourcePath, fileName);
        outputProgram = path.join(sourcePath, fileNameWithoutExtension);
    }

    const errorPath = normalizeToSingleBackslash(getConfiguration<string>('workingDirectory.errors', '')).replace("%f", filePath);

    // Select a terminal
    const terminal = selectTerminal();

    // Bring the terminal forward
    terminal.show();

    // Build command for non-WindX
    let command = `& "${pxplusPath}" "${compilerPath}" -arg "${sourceProgram}" "${outputProgram}" "${errorPath}"`;
    
    // Build command for WindX
    if (isWindx) {
        command = `& "${pxplusPath}" ${iniPath} *ntslave -id=%username% -arg ${host} "${compilerPath} -arg ${sourceProgram} ${outputProgram} ${errorPath}" ${port}`;
    }
    // Send a command to the terminal (as text)
    terminal.sendText(command);
}


function getConfiguration<T>(key: string, defaultVal: T): T {
    return vscode.workspace.getConfiguration('pxplus').get<T>(key) ?? defaultVal;
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