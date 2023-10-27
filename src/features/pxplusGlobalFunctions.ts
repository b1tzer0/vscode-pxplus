/* --------------------------------------------------------------------------------------------
 * Copyright (c) Rick Mathers. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import { IEntries } from './pxplusGlobals';

export const globalfunctions: IEntries = {
	"_AT": {
		"description": "String, position code mapped to a location on an output device.",
		"signatures": [
			{
				"signature": "@(column [, line] [ , ERR =stmtref ] )",
				"parameters": [
					{
						"parameter": "column",
						"description": "column - Column number.Integer value indicating a column position on a printer or terminal screen (0 to the number of columns available on the screen -1)."
					},
					{
						"parameter": "line",
						"description": "line - Optional line number.Integer value indicating a line position on a printer or terminal screen (0 to the number of lines available on the screen -1)."
					},
					{
						"parameter": "stmtref",
						"description": "stmtref - Program line number or statement label to which to transfer control."
					}
				]
			}
		]
	},
	"ACS": {
		"description": "Numeric value between 0 (zero) and \ufffd (pi=3.14159...).",
		"signatures": [
			{
				"signature": "ACS(num[,ERR =stmtref])",
				"parameters": [
					{
						"parameter": "num",
						"description": "num - Numeric expression (range -1 to +1) whose Arc-Cosine is to be returned."
					},
					{
						"parameter": "stmtref",
						"description": "stmtref - Program line number or statement label to which to transfer control."
					}
				]
			}
		]
	},
	"ARG_COMMAND": {
		"description": "String, value of start-up argument.",
		"signatures": [
			{
				"signature": "ARG( position [ , ERR =stmtref] )",
				"parameters": [
					{
						"parameter": "position",
						"description": "position - Position of the argument you want returned. Numeric expression.Range: integer value from -4 to the number of arguments in the command that launched the session."
					},
					{
						"parameter": "stmtref",
						"description": "stmtref - Program line number or statement label to which to transfer control."
					}
				]
			}
		]
	},
	"ASC": {
		"description": "Integer, ASCII character set number, range 0 to 255.",
		"signatures": [
			{
				"signature": "ASC(char[,ERR =stmtref])",
				"parameters": [
					{
						"parameter": "char$",
						"description": "char$ - Single-character whose ASCII value is to be returned. String expression."
					},
					{
						"parameter": "stmtref",
						"description": "stmtref - Program line number or statement label to which to transfer control."
					}
				]
			}
		]
	},
	"ASN": {
		"description": "Numeric value, range -\ufffd/2 to +\ufffd/2.",
		"signatures": [
			{
				"signature": "ASN(num[,ERR =stmtref])",
				"parameters": [
					{
						"parameter": "num",
						"description": "num - Numeric expression (range -1 to +1) whose Arc-Sine is to be returned."
					},
					{
						"parameter": "stmtref",
						"description": "stmtref - Program line number or statement label to which to transfer control."
					}
				]
			}
		]
	},
	"ATH": {
		"description": "ASCII value corresponding to string of Hex data.",
		"signatures": [
			{
				"signature": "ATH(hex_string[,ERR =stmtref])",
				"parameters": [
					{
						"parameter": "hex_string$",
						"description": "hex_string$ - Hex string expression to be converted to ASCII. The string must be an even number of bytes in length and consist of only the characters 0 (zero) through 9 and A through F."
					},
					{
						"parameter": "stmtref",
						"description": "stmtref - Program line number or statement label to which to transfer control."
					}
				]
			}
		]
	},
	"ATN": {
		"description": "Numeric value, range -\ufffd/2 to +\ufffd/2.",
		"signatures": [
			{
				"signature": "ATN(num[,ERR =stmtref])",
				"parameters": [
					{
						"parameter": "num",
						"description": "num - Numeric expression whose Arc-Tangent is to be returned."
					},
					{
						"parameter": "stmtref",
						"description": "stmtref - Program line number or statement label to which to transfer control."
					}
				]
			}
		]
	},
	"BIN": {
		"description": "Binary value of ASCII string corresponding to the numeric expression.",
		"signatures": [
			{
				"signature": "BIN(num,len[,ERR =stmtref])",
				"parameters": [
					{
						"parameter": "len",
						"description": "len - Length of the string to be returned. Use a numeric expression. Integer value."
					},
					{
						"parameter": "num",
						"description": "num - Numeric value to convert to a string. Use a numeric expression. Integer value."
					},
					{
						"parameter": "stmtref",
						"description": "stmtref - Program line number or statement label to which to transfer control."
					}
				]
			}
		]
	},
	ABS:{
		description: 'The ABS( ) function returns the absolute value of the numeric expression num. The value returned is a positive numeric value or zero.',
		//signatures:['(int $num [, void $ERR = stmtref]): void']
		signatures:[{
			signature:'(int num [, ERR = stmtref])',
			parameters:[{
				parameter: "num",
				description: "num - Numeric expression whose absolute value is to be returned."
			},{
				parameter: "stmtref",
				description: "stmtref - Optional - Program line number or statement label to which to transfer control."
			}]
		}]
	},
	AND:{
		description:'The AND( ) function performs a bit-wise \'AND\' comparison of two string or numeric expressions/variables, and generates a value as a result. The length of the two string expressions must be equal or PxPlus returns an Error #46: Length of string invalid.',
		// signatures:[
		// 	'(string $value1, string $value2 [, void ERR=stmtref])',
		// 	'(int $value1, int $value2 [, void ERR=stmtref])'
		// ]
		signatures:[{
			signature:'(value1[$], value2[$] [, ERR = stmtref])',
			parameters:[{
				parameter: "value1[$]",
				description: "value1[$] - Compared values. String or numeric expressions/variables. If strings, value1$ must be the same length as value2$."
			},{
				parameter: "value2[$]",
				description: "value2[$] - Compared values. String or numeric expressions/variables. If strings, value1$ must be the same length as value2$."
			},{
				parameter: "stmtref",
				description: "stmtref - Optional - Program line number or statement label to which to transfer control."
			}]
		}]
	},
	ARG:{
		signatures:[{
			signature:'(string$, argno[,delim$] [,ERR=stmtref])',
			description:'This form of the ARG function extracts a specific field from a delimited string. If no delimiter is specified, the system uses the default SEP character (normally $8A$).',
			parameters:[{
				parameter:'string$',
				description:'string$ - String containing a series of arguments/values each separated by a single character.'
			},{
				parameter:'delim$',
				description:'delim$ - Character that separates each of the values string$. If omitted, the system default field separator is used.'
			},{
				parameter: "stmtref",
				description: "stmtref - Optional - Program line number or statement label to which to transfer control."
			}]
		},{
			signature:'(EDIT string$, argno, newval$ [,delim$] [,ERR=stmtref])',
			description: 'This form of the ARG function generates and returns a new string replacing the field specified with that supplied in <newvalue>.' +
				'\nIf the field specified did not exist, additional delimiters will be added in the string to make up for the missing fields. If no delimiter is specified, the system uses the default SEP character.',
			parameters:[{
				parameter:'string$',
				description:'string$ - String containing a series of arguments/values each separated by a single character.'
			},{
				parameter:'argno',
				description:'argno - Number of the argument in the string to return or replace (one based).'
			},{
				parameter:'delim$',
				description:'delim$ - Character that separates each of the values string$. If omitted, the system default field separator is used.'
			},{
				parameter:'newval$',
				description:'newval$ - New value to insert into string$.'
			},{
				parameter: "stmtref",
				description: "stmtref - Optional - Program line number or statement label to which to transfer control."
			}]
		}]
	}
};