/* --------------------------------------------------------------------------------------------
 * Copyright (c) Rick Mathers. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

export interface IParameter{
	parameter: string;
	description?: string;
}

export interface ISignature{
	signature: string;
	description?: string;
	parameters: Array<IParameter>
}

export interface IEntry { 
	description?: string; 
	signatures?: Array<ISignature>; 
}
export interface IEntries { [name: string]: IEntry; }

export const globalvariables: IEntries = {
	$this: {
		description: 'Refers to the current object',
	},

};
export const compiletimeconstants: IEntries = {
	TRUE: {
	},
	FALSE: {
	},
	NULL: {
	},	
};
export const keywords: IEntries = {
	SETESC:{
		description:"\n 1. Subroutine Interrupt-Handler: SETESC stmtref " +
			"\n 1. Subprogram Interrupt-Handler: SETESC prog_name$" +
			"\n 1. Interrupt Process On/Off: SETESC {ON | OFF}" +
			"\n 1. Enable/Disable for Range: SETESC {DISABLE | ENABLE}" +
			"\n 1. Return Current Program: SETESC READ x$" + 
			"\n **where**" + 
			"\n *prog_name$* Name of generic interrupt-handling program. Define it once per session." + 
			"\n *stmtref* Program line number or statement label to which to transfer control." + 
			"\n *x$* Name of the current SETESC program."
	}
}