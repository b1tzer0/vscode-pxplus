"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Rick Mathers. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
const vscode_1 = require("vscode");
const markedTextUtil_1 = require("./utils/markedTextUtil");
const globals = require("./pxplusGlobals");
const globalFunctions = require("./pxplusGlobalFunctions");
class PvxPlusHoverProvider {
    provideHover(document, position, _token) {
        let enable = vscode_1.workspace.getConfiguration('pxplus').get('suggest.basic', true);
        if (!enable) {
            return undefined;
        }
        let wordRange = document.getWordRangeAtPosition(position);
        if (!wordRange) {
            return undefined;
        }
        let name = document.getText(wordRange);
        let entry = globalFunctions.globalfunctions[name] || globals.compiletimeconstants[name] || globals.globalvariables[name] || globals.keywords[name];
        if (entry && entry.description) {
            let signature = name + (entry.signature || '');
            let contents = [markedTextUtil_1.textToMarkdownString(entry.description)];
            return new vscode_1.Hover(contents, wordRange);
        }
        return undefined;
    }
}
exports.default = PvxPlusHoverProvider;
//# sourceMappingURL=hoverProvider.js.map