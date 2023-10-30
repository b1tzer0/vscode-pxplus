import * as vscode from 'vscode';

export function runCompiler(context: vscode.ExtensionContext){
    let cwd = vscode.workspace.getConfiguration('pxplus').get<string>('workingDirectory.programs');
    let cmd = vscode.workspace.getConfiguration('pxplus').get<string>('commands.cpl');
	let t = selectTerminal();

    t.show();
    if(cwd){
        if(cmd === ""){
            t.sendText('ECHO "You need to configure your compiler command first."');
            return;
        }
        
        t.sendText("cd" + " " + cwd);

        cmd = cmd?.replace("%f", vscode.window.activeTextEditor?.document.fileName || "");
        if(cmd){
            t.sendText(cmd);
        }
    }else{
        t.sendText('ECHO "You need to configure your working directory first."');
    }
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