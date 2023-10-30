/* --------------------------------------------------------------------------------------------
 * Copyright (c) Rick Mathers. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import { HoverProvider, Hover, TextDocument, CancellationToken, Position, workspace, MarkdownString } from 'vscode';
import { textToMarkdownString } from './utils/markedTextUtil';
import globals = require('./pxplusGlobals');
import globalFunctions = require('./pxplusGlobalFunctions');

export default class PvxPlusHoverProvider implements HoverProvider {

	public provideHover(document: TextDocument, position: Position, _token: CancellationToken): Hover | undefined {
		let enable = workspace.getConfiguration('pxplus').get<boolean>('suggest.basic', true);
		if (!enable) {
			return undefined;
		}

		let wordRange = document.getWordRangeAtPosition(position);
		if (!wordRange) {
			return undefined;
		}

		let name = document.getText(wordRange);
		name = name.toUpperCase();

		let entry = globalFunctions.globalfunctions[name] || globals.compiletimeconstants[name] || globals.globalvariables[name] || globals.keywords[name];
		if (entry && entry.description) {
			//let signature = name + (entry.signatures || '');
			let contents: MarkdownString[] = [textToMarkdownString(entry.description)];
			return new Hover(contents, wordRange);
		}

		return undefined;
	}
}