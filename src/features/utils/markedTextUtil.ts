/* --------------------------------------------------------------------------------------------
 * Copyright (c) Rick Mathers. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import { MarkdownString } from 'vscode';

export function textToMarkdownString(text: string): MarkdownString {
	return new MarkdownString(text);
}