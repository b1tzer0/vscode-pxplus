"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textToMarkdownString = void 0;
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Rick Mathers. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
const vscode_1 = require("vscode");
function textToMarkdownString(text) {
    return new vscode_1.MarkdownString(text);
}
exports.textToMarkdownString = textToMarkdownString;
//# sourceMappingURL=markedTextUtil.js.map