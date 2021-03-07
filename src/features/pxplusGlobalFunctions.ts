/* --------------------------------------------------------------------------------------------
 * Copyright (c) Rick Mathers. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import { IEntries } from './pxplusGlobals';

export const globalfunctions: IEntries = {
	debug_backtrace: {
		description: 'Generates a backtrace',
		signature: '([ int $options = DEBUG_BACKTRACE_PROVIDE_OBJECT [, int $limit = 0 ]]): array'
	},
	debug_print_backtrace: {
		description: 'Prints a backtrace',
		signature: '([ int $options = 0 [, int $limit = 0 ]]): void'
	}
};