/* --------------------------------------------------------------------------------------------
 * Copyright (c) Rick Mathers. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import { IEntries } from './pxplusGlobals';

export const globalfunctions: IEntries = {
"@":{
	"description":"The @( ) location function is used to print/display text at a specific position on a printer or terminal screen. This function can be used with directives wherever text is to be sent to an output device, most commonly via INPUT or PRINT statements. Column 0 represents the column on the far left side of the screen/printer, and line 0 represents the top line. Output is positioned at the column specified on the current line only if the column number is provided. When used with a printer (or print file) and the line number is less than the current line, a new page is started.",
	"signatures":[
		{
			"signature":"@(column [, line] [ , ERR=stmtref ] )",
			"parameters":[
				{
				"parameter":"column",
				"description":"Column number. Integer value indicating a column position on a printer or terminal screen (0 to the number of columns available on the screen -1)."
				},
				{
				"parameter":"line",
				"description":"Optional line number. Integer value indicating a line position on a printer or terminal screen (0 to the number of lines available on the screen -1)."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	]
	},
	"ABS":{
	"description":"The ABS( ) function returns the absolute value of the numeric expression num. The value returned is a positive numeric value or zero. For example, the absolute value of the numeric expression (X) is returned as follows:\n\nABS (X) ... If X>0 ... Returns X\n\nABS (X) ... If X<0 ... Returns X * -1 (positive result)\n\nABS (X) ... If X=0 ... Returns X (zero)",
	"signatures":[
		{
			"signature":"(num[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"num",
				"description":"Numeric expression whose absolute value is to be returned."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Positive numeric value or zero."
	},
	"AND":{
	"description":"Logical AND",
	"signatures":[
		{
			"signature":"(value1[$], value2[$][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"value1[$]",
				"description":"Compared values. String or numeric expressions/variables. If strings, value1$ must be the same length as value2$."
				},
				{
				"parameter":"value2[$]",
				"description":"Compared values. String or numeric expressions/variables. If strings, value1$ must be the same length as value2$."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Result of bit-wise logical 'AND' comparison of two expressions/variables."
	},
	"ASC":{
	"description":"Get Internal Character Value",
	"signatures":[
		{
			"signature":"(char$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"char$",
				"description":"Single-character whose ASCII value is to be returned. String expression."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Integer, ASCII character set number, range 0 to 255."
	},
	"ASN":{
	"description":"Return Arc-Sine",
	"signatures":[
		{
			"signature":"(num[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"num",
				"description":"Numeric expression (range -1 to +1) whose Arc-Sine is to be returned."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Numeric value, range -π/2 to +π/2."
	},
	"ATH":{
	"description":"Convert Hex",
	"signatures":[
		{
			"signature":"(hex_string$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"hex_string$",
				"description":"Hex string expression to be converted to ASCII. The string must be an even number of bytes in length and consist of only the characters 0 (zero) through 9 and A through F."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"ASCII value corresponding to string of Hex data."
	},
	"ATN":{
	"description":"Return Arc-Tangent",
	"signatures":[
		{
			"signature":"(num[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"num",
				"description":"Numeric expression whose Arc-Tangent is to be returned."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Numeric value, range -π/2 to +π/2."
	},
	"BIN":{
	"description":"Binary String from Numeric Value",
	"signatures":[
		{
			"signature":"(num, len[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"len",
				"description":"Length of the string to be returned. Use a numeric expression. Integer value."
				},
				{
				"parameter":"num",
				"description":"Numeric value to convert to a string. Use a numeric expression. Integer value."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Binary value of ASCII string corresponding to the numeric expression."
	},
	"BSZ":{
	"description":"Bank Memory Size",
	"signatures":[
		{
			"signature":"(num[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"num",
				"description":"Bank number (ignored). Numeric expression."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"0 (zero) in most PxPlus implementations."
	},
	"CHG":{
	"description":"Notify If Variable Has Changed",
	"signatures":[
		{
			"signature":"(varlist[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"varlist",
				"description":"Comma-separated list of variable names to be tested as a string."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		},
		{
			"signature":"(READ varlist[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"varlist",
				"description":"Comma-separated list of variable names to be tested as a string."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		},
		{
			"signature":"(prglvl[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"prglvl",
				"description":"Program execution level whose program's 'changed' state is going to be returned. Negative values indicate value relative current program level."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"String, listing variables that have changed (Formats 1 and 2). Numeric, 0 or 1, indication that the program has changes (Format 3)."
	},
	"CHR":{
	"description":"ASCII Character of Value",
	"signatures":[
		{
			"signature":"(num[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"num",
				"description":"Value of the character to return. Numeric expression. Range: integer from 0 to 255 (the character's number in the ASCII table)."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Single ASCII character."
	},
	"CMP":{
	"description":"Compress Data",
	"signatures":[
		{
			"signature":"(string[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string",
				"description":"Original data to be compressed."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Compressed data string."
	},
	"COS":{
	"description":"Return Cosine",
	"signatures":[
		{
			"signature":"(num[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"num",
				"description":"Numeric expression whose Cosine is to be returned."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Value between -1 and +1."
	},
	"CPL":{
	"description":"Compile String",
	"signatures":[
		{
			"signature":"(statement$ [, optval$] [, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"statement$",
				"description":"String containing the statement to compile."
				},
				{
				"parameter":"optval$",
				"description":"Optional second parameter that is ignored by the system - provided for compatibility with other BB dialects."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"PxPlus compiled format of the statement."
	},
	"CRC":{
	"description":"Cyclic-Redundancy-Check",
	"signatures":[
		{
			"signature":"(chars$[, basis$][, type][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"chars$",
				"description":"String of characters on which to calculate a cyclic redundancy check."
				},
				{
				"parameter":"basis$",
				"description":"Optional initial value to be used as the basis of the CRC. It must be two characters long (CRC-16 ) or four characters long (CRC-32) if included in the statement. (Default: $0000$)"
				},
				{
				"parameter":"type",
				"description":"Optional numeric used to determine if a 16-bit (CRC-16) or 32-bit (CRC-32) cyclic redundancy checksum should be calculated. Only accepted values are 16 or 32. (Default: 16)"
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Cyclic redundancy checksum (in internal format)."
	},
	"CSE":{
	"description":"Case Compare",
	"signatures":[
		{
			"signature":"(expression[$], compare1[$], compare2[$], ... [, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"expression[$]",
				"description":"Numeric or string expression to be used for comparison."
				},
				{
				"parameter":"compare1[$], compare2[$], ...",
				"description":"Comma-separated list of numeric or string expressions for comparison with expression[$]."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Integer representing the sequence number of a match, or 0 (zero) if no match."
	},
	"CTL":{
	"description":"Return CTL Definition",
	"signatures":[
		{
			"signature":"(chan, input[$][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"chan",
				"description":"Channel or logical file number. Usually 0 (zero), the terminal."
				},
				{
				"parameter":"input[$]",
				"description":"Input sequence. Either the keyboard character string received or the invalid CTL value. String or numeric expression."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		},
		{
			"signature":"(READ chan, ctlval[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"chan",
				"description":"Channel or logical file number. Usually 0 (zero), the terminal."
				},
				{
				"parameter":"ctlval",
				"description":"CTL value whose input sequence is to be returned."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"CTL code associated with input, or input sequence associated with CTL."
	},
	"CVS":{
	"description":"Converts a string of data to different forms based on the provided conversion type. It can also return the current accent translation table and perform translations based on it, or return a character string based on a series of numeric values.",
	"signatures":[
		{
			"signature":"(data$[, cvs_code[:ctl_char$], ...][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"data$",
				"description":"Data to convert. String expression."
				},
				{
				"parameter":"cvs_code",
				"description":"Conversion type. Numeric expression. See the table in Format 1."
				},
				{
				"parameter":"ctl_char$",
				"description":"Optional control character. String expression. Default: blank character."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		},
		{
			"signature":"(num_val, num_val, num_val, ...)",
			"parameters":[
				{
				"parameter":"num_val",
				"description":"Numeric values of the characters to be converted into a string."
				}
			]
		}
	],
	"returns":"Converted value of string expression or accent translation table."
	},
	"DEC":{
	"description":"Converts a character string or variable containing a value to its two's complement binary equivalent.",
	"signatures":[
		{
			"signature":"(string$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string$",
				"description":"Character string or variable containing the value to be converted to binary."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Two's complement binary equivalent of the string."
	},
	"DEG":{
	"description":"Converts an angle in radians to degrees.",
	"signatures":[
		{
			"signature":"(radians[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"radians",
				"description":"Angle in radians to be converted to degrees."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Angle in degrees."
	},
	"DIM":{
	"description":"Generate or Initialize String, Get Array Size, Find Max/Min Value in Array, Scan Array for Value, Total Numeric Array, Return Associated Index, Return Key from Index, Remove Key, Generate JSON Data from Array, Get an Element's Type-Flag.",
	"signatures":[
		{
			"signature":"(len[, fill$][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"len",
				"description":"Desired length of the string variable. Numeric expression, integer."
				},
				{
				"parameter":"fill$",
				"description":"Text string or value that will be used to fill the variable up to the length specified. String expression."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Initialized string."
		},
		{
			"signature":"(READ NUM(array_name[$][, subscript]))",
			"parameters":[
				{
				"parameter":"array_name[$]",
				"description":"Name of a previously dimensioned array."
				},
				{
				"parameter":"subscript",
				"description":"Array's dimensions (first, second, or third)."
				}
			],
			"returns":"Total number of elements in a dimensioned array."
		},
		{
			"signature":"(READ MAX(array_name[$][, subscript]))",
			"parameters":[
				{
				"parameter":"array_name[$]",
				"description":"Name of a previously dimensioned array."
				},
				{
				"parameter":"subscript",
				"description":"Array's dimensions (first, second, or third)."
				}
			],
			"returns":"Maximum element number in a dimensioned array."
		},
		{
			"signature":"(READ MIN(array_name[$][, subscript]))",
			"parameters":[
				{
				"parameter":"array_name[$]",
				"description":"Name of a previously dimensioned array."
				},
				{
				"parameter":"subscript",
				"description":"Array's dimensions (first, second, or third)."
				}
			],
			"returns":"Minimum element number in a dimensioned array."
		},
		{
			"signature":"(FIND [ MIN | MAX ] (array_name[$]))",
			"parameters":[
				{
				"parameter":"array_name[$]",
				"description":"Array to scan for the highest or lowest element."
				}
			],
			"returns":"Index into the array."
		},
		{
			"signature":"(FIND array_name[$]=comparison value[$], ERR=stmtref)",
			"parameters":[
				{
				"parameter":"array_name[$]",
				"description":"Array to scan."
				},
				{
				"parameter":"comparison value[$]",
				"description":"Value to compare each element against. Type of value must match the type of array (string values for string array, numeric values for numeric array)."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control in case of an error."
				}
			],
			"returns":"Index into the array."
		},
		{
			"signature":"(ADD array_name)",
			"parameters":[
				{
				"parameter":"array_name",
				"description":"Numeric array to total."
				}
			]
		},
		{
			"signature":"(INDEX array_name[$] [keyword$])",
			"parameters":[
				{
				"parameter":"array_name[$]",
				"description":"Associative array to look up."
				},
				{
				"parameter":"keyword$",
				"description":"Keyword associated with the element in the array whose index is to be returned."
				}
			],
			"returns":"Index of the element for the specified keyword."
		},
		{
			"signature":"(KEY array_name[$] [index])",
			"parameters":[
				{
				"parameter":"array_name[$]",
				"description":"Associative array to look up."
				},
				{
				"parameter":"index",
				"description":"Index of the element for which the keyword is to be returned."
				}
			],
			"returns":"Keyword of the element for the specified index."
		},
		{
			"signature":"(DROP array_name[$] [keyword$])",
			"parameters":[
				{
				"parameter":"array_name[$]",
				"description":"Associative array to remove the specified keyword from."
				},
				{
				"parameter":"keyword$",
				"description":"Keyword associated with the element to be removed."
				}
			],
			"returns":"Index of the element whose key was dropped."
		},
		{
			"signature":"(LIST [ SORT | EDIT ] array_name[$][ {ALL} ] [ WITH NUM(namelist$) ])",
			"parameters":[
				{
				"parameter":"array_name[$]",
				"description":"Associative array to generate JSON data from."
				},
				{
				"parameter":"SORT | EDIT",
				"description":"Optional keyword to specify sorting or editing output."
				},
				{
				"parameter":"{ALL}",
				"description":"Optional keyword to include all elements in the output."
				},
				{
				"parameter":"WITH NUM(namelist$)",
				"description":"Optional list of subscript names whose values are not to be quoted in JSON output."
				}
			],
			"returns":"JSON data generated from the array."
		},
		{
			"signature":"(CLASS array$[strName$])",
			"parameters":[
				{
				"parameter":"array$",
				"description":"String associative array."
				},
				{
				"parameter":"strName$",
				"description":"Index of the element being referenced."
				}
			],
			"returns":"Type-flag of the element (\"N\" for numeric, \"S\" for string)."
		}
	]
	},
	"DIR":{
	"description":"Get the current directory for the specified disk drive.",
	"signatures":[
		{
			"signature":"(disk_id[$][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"disk_id[$]",
				"description":"Disk to check. String or numeric expression."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"String, the name of the current directory."
		}
	],
	"note":"This function is primarily for use in PVX Windows. Under UNIX, PxPlus assumes that there is only one disk drive, and this function only returns the current directory."
	},
	"DLL":{
	"description":"Call External Function",
	"signatures":[
		{
			"signature":"(lib_string$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"lib_string$",
				"description":"Name of the .dll, .exe, or other shared library that contains the function to be used. String expression."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Internal library identifier used to reference a loaded library. Numeric expression."
		},
		{
			"signature":"(lib_num[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"lib_num",
				"description":"Internal library identifier of the loaded library to unload. Numeric expression."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		},
		{
			"signature":"(lib_num, fnc_name$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"lib_num",
				"description":"Internal library identifier used to reference a loaded library. Numeric expression."
				},
				{
				"parameter":"fnc_name$",
				"description":"Name of the function to call. String expression."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Address of the desired function. Numeric expression."
		},
		{
			"signature":"(lib_string$, fnc_name$, arg[ ,arg,arg...][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"lib_string$",
				"description":"Name of the .dll, .exe, or other shared library that contains the function to be called. String expression."
				},
				{
				"parameter":"fnc_name$",
				"description":"Name of the function to call. String expression."
				},
				{
				"parameter":"arg",
				"description":"Parameters or arguments to pass to the function. The number and type of arguments vary depending on the function."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		},
		{
			"signature":"(lib_num, fnc_name$, arg[ ,arg,arg...][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"lib_num",
				"description":"Internal library identifier used to reference a loaded library. Numeric expression."
				},
				{
				"parameter":"fnc_name$",
				"description":"Name of the function to call. String expression."
				},
				{
				"parameter":"arg",
				"description":"Parameters or arguments to pass to the function. The number and type of arguments vary depending on the function."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		},
		{
			"signature":"(fnc_address, arg[ ,arg,arg...][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"fnc_address",
				"description":"Function address as a memory pointer. Numeric expression."
				},
				{
				"parameter":"arg",
				"description":"Parameters or arguments to pass to the function. The number and type of arguments vary depending on the function."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"note":"The address is only valid while the library is loaded."
		}
	],
	"note":"DLLs are primarily available under MS Windows and some UNIX/Linux environments. DLLs do not need to be registered to be used in PxPlus."
	},
	"DSK":{
	"description":"Get Current Disk Drive. The DSK() function is used to retrieve information about the current disk drive in the system. It returns the drive identifier or volume name associated with the currently active disk drive.",
	"signatures":[
		{
			"signature":"(disk_id[$][,*][,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"disk_id[$]",
				"description":"A parameter that can be either a string or a numeric expression. If a string is provided, it specifies the drive letter (e.g., 'C' for the C: drive). If numeric, it represents the drive number (0 for the first drive, 1 for the second, and so on)."
				},
				{
				"parameter":"* (asterisk)",
				"description":"An optional asterisk (*) that, when included, returns the name of the volume associated with the drive instead of the drive letter."
				},
				{
				"parameter":"stmtref",
				"description":"An optional program line number or statement label to which control is transferred in case of an error."
				}
			]
		}
	],
	"returns":"The function returns the current disk drive identifier or volume name as a string."
	},
	"DTE":{
	"description":"Convert Date",
	"signatures":[
		{
			"signature":"(jul_date[, time][: fmt$][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"jul_date",
				"description":"Julian date to convert. Numeric expression. If the value is 0 (zero), the current date is used. DTE(-1) returns a null (\"\") string if 'BY'=0."
				},
				{
				"parameter":"time",
				"description":"Time value containing hours and fractions of hours since midnight. Optional. Numeric expression. If omitted, the current time is used."
				},
				{
				"parameter":"fmt$",
				"description":"Format of the date to be returned. If omitted, the default format is %Mz/%Dz/%Yz (date formatted as MM/DD/YY)."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Formatted date (converted from Julian)."
		},
		{
			"signature":"(date$[: fmt$][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"date$",
				"description":"Date string in the same format as the DAY_FORMAT (MM/DD/YY)."
				},
				{
				"parameter":"fmt$",
				"description":"Format of the date to be returned. If omitted, the default format is %Mz/%Dz/%Yz (date formatted as MM/DD/YY)."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Formatted date (converted from Julian)."
		}
	],
	"note":"The format can also contain YYYY, YY, MM, and DD (e.g. \"YYYY/MM/DD\") for current Long Year, Year, Month and Day values. In general, when the second character is l (lowercase L), the result is long text format; an s indicates short text format."
	},
	"ENV":{
	"description":"Get Environment Values",
	"signatures":[
		{
			"signature":"(env_index[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"env_index",
				"description":"Index of the environment variable you wish to have returned."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Value of an environment variable as a 'name=value' pair."
		},
		{
			"signature":"(env_name$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"env_name$",
				"description":"Name of the environment variable you wish to have returned."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Value of an environment variable."
		}
	],
	"note":"Environment variables are typically external to PxPlus and are used by the operating system and other utilities for defining the user's environment."
	},
	"EVS":{
	"description":"Evaluate String Expression by processing and returning the evaluated contents of a string variable or a string expression.",
	"signatures":[
		{
			"signature":"(var$ [, val$] [, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"var$",
				"description":"String variable name. Receives the returned evaluated contents of the variable."
				},
				{
				"parameter":"val$",
				"description":"Value to be returned if the evaluation fails at run time (with any error except a syntactical error). Optional. If you include a value, the error will be ignored and the value will be returned instead."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Evaluated contents of the string variable."
		},
		{
			"signature":"(=strexpr [, val$] [, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"=strexpr",
				"description":"String expression to be processed and whose value will be returned by the EVS function."
				},
				{
				"parameter":"val$",
				"description":"Value to be returned if the evaluation fails at run time (with any error except a syntactical error). Optional. If you include a value, the error will be ignored and the value will be returned instead."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Value of the expression supplied in strexpr."
		}
	],
	"note":"In both formats, if the default value (val$) is supplied, it will be returned if the expression results in an error. If no default value is supplied and an error occurs, the ERR= trap will be taken."
	},
	"EXP":{
	"description":"Raise 10 to the power of a specified numeric value.",
	"signatures":[
		{
			"signature":"(num [, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"num",
				"description":"Power of 10 to be returned. Numeric expression."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Value of 10 raised to the power of the numeric value."
		}
	]
	},
	"FFN":{
	"description":"Find the file number of an open file by its name.",
	"signatures":[
		{
			"signature":"(filename$ [ FROM fileno ] [ FOR OBJECT | EXCEPT OBJECT ] [ ,ERR=stmtref ] )",
			"parameters":[
				{
				"parameter":"filename$",
				"description":"Name of the file to locate. String expression."
				},
				{
				"parameter":"fileno",
				"description":"Lowest channel number to start checking."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Integer, channel/file number for open file or -1 if not open or accessible. In all cases, only files currently accessible will be returned."
		}
	]
	},
	"FIB":{
	"description":"Return a file information block description for an existing open file.",
	"signatures":[
		{
			"signature":"(filespec [, ERR=stmtref] )",
			"parameters":[
				{
				"parameter":"filespec",
				"description":"A numeric expression indicating the open channel number to use or a string expression containing the pathname or table name (if string is prefixed by the keyword TABLE) of the file to use."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"String, file information block description."
		}
	]
	},
	"FID":{
	"description":"Return a file information descriptor for an existing open file.",
	"signatures":[
		{
			"signature":"(chan[,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"chan",
				"description":"Channel or logical file number of the file to return information about."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"String, file information descriptor."
		}
	]
	},
	"FIN":{
	"description":"Return physical information about an existing open file.",
	"signatures":[
		{
			"signature":"(filespec [,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"filespec",
				"description":"Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname or table name (if string is prefixed by the keyword TABLE) of the file to use."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"String, physical information about open file."
		},
		{
			"signature":"(filespec, field$ [,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"filespec",
				"description":"Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname or table name (if string is prefixed by the keyword TABLE) of the file to use."
				},
				{
				"parameter":"field$",
				"description":"String expressions (case insensitive). For a list of valid keywords, see Format 2."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"String, physical information about open file based on field$."
		}
	]
	},
	"NUL":{
	"description":"Test string for being empty or null.",
	"signatures":[
		{
			"signature":"(string [,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string",
				"description":"String data to be tested if null."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or label to which to transfer control."
				}
			],
			"returns":"Non-zero (TRUE) if the string passed has a length of zero or consists solely of space characters. Zero (FALSE) if the string contains anything other than spaces."
		}
	]
	},
	"FPT":{
	"description":"Return the fractional part of a numeric value.",
	"signatures":[
		{
			"signature":"(num [,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"num",
				"description":"Numeric expression whose fractional portion will be returned."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Fractional portion of the numeric value, rounded to the current PRECISION."
		}
	]
	},
	"GAP":{
	"description":"Return the character string expression in Odd parity.",
	"signatures":[
		{
			"signature":"(string$ [,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string$",
				"description":"Character string to convert to Odd parity."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Odd parity value of the string."
		}
	]
	},
	"GBL":{
	"description":"Reference global string variables.",
	"signatures":[
		{
			"signature":"(string_name$ [,contents$] [,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string_name$",
				"description":"Name of the global string in the internal table. String expression."
				},
				{
				"parameter":"contents$",
				"description":"Value to assign to the global string. Optional. String expression."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Values in the internal table of strings."
		},
		{
			"signature":"({DELETE | LIST} string_name$ [,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"{DELETE | LIST}",
				"description":"Keyword specifying whether to delete or list the global string."
				},
				{
				"parameter":"string_name$",
				"description":"Name of the global string in the internal table. String expression."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Values in the internal table of strings based on the specified action."
		},
		{
			"signature":"({DELETE | LIST} TO string_name$ [,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"{DELETE | LIST} TO",
				"description":"Keyword specifying whether to delete or list global strings up to a specified string."
				},
				{
				"parameter":"string_name$",
				"description":"Name of the global string up to which you want to delete or list. String expression."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Values in the internal table of strings based on the specified action up to the specified string."
		},
		{
			"signature":"({DELETE | LIST} * [,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"{DELETE | LIST} *",
				"description":"Keyword specifying whether to delete or list all global strings in the table."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Values in the internal table of strings based on the specified action for all global strings."
		}
	],
	"note":"This function is primarily provided for compatibility with other languages and has been made virtually obsolete by global variables - a much more efficient way to handle common data elements (string, numeric, arrays, etc.)."
	},
	"GEP":{
	"description":"The GEP( ) function converts and returns the character string expression in Even parity. This function is typically used when dealing with communication lines. It is not normally used by the operating system since the standard communications drivers handle the generation of parity.\n\nThe number of one-bits in each byte of the character string determines the parity of data. Even parity data always has an even number of one-bits in each byte of data.",
	"signatures":[
		{
			"signature":"(string$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string$",
				"description":"Character string to convert to Even parity."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	]
	},
	"HSA":{
	"description":"PxPlus includes the HSA( ) function for compatibility with Business Basic languages where it returns the highest sector number available on the disk drive specified. Since this function is not applicable in PxPlus, it always returns 0 (zero).",
	"signatures":[
		{
			"signature":"(drive_num[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"drive_num",
				"description":"Numeric value representing the disc drive number."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	]
	},
	"HTA":{
	"description":"The HTA( ) function returns the hexadecimal value of a given character string. The string returned by the HTA( ) function is always twice the length of the original string and consists solely of the (Hex) characters 0 - 9 and A - F.",
	"signatures":[
		{
			"signature":"(string$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string$",
				"description":"String expression to convert to Hexadecimal format."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Hex value of your string."
	},
	"HWN":{
	"description":"The HWN( ) function returns an integer, reporting the highest unused window number for a given file. If all window numbers are in use, this function will return -1. If the file is not open or not a terminal, PxPlus returns Error #13: File access mode invalid.",
	"signatures":[
		{
			"signature":"(chan[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"chan",
				"description":"Channel or logical file number of the terminal device whose highest unused window number is to be reported (usually device (0) or the console)."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Highest unused window number."
	},
	"I3E":{
	"description":"The I3E( ) function converts data to/from IEEE floating point format and PxPlus internal values. The primary purpose of this function is to allow for the conversion of data between PxPlus and other applications.",
	"signatures":[
		{
			"signature":"(num[,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"num",
				"description":"Numeric value to convert to 8-byte IEEE format (scientific notation)."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		},
		{
			"signature":"Convert from Floating Point to Internal Value: I3E(string$[,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string$",
				"description":"8-byte string expression to convert from IEEE format to a numeric value."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Numeric data, IEEE converted to/from PxPlus internal values."
	},
	"IND":{
	"description":"The IND( ) function returns the record index of either the next record in the file specified or, on a Direct or Keyed file using the KEY= option, the record index for the record identified by the key.",
	"signatures":[
		{
			"signature":"(chan[,fileopt])",
			"parameters":[
				{
				"parameter":"chan",
				"description":"Channel or logical file number of the file to reference."
				},
				{
				"parameter":"fileopt",
				"description":"Supported file options (see File Options):\n- ERR=stmtref (Error transfer)\n- END=stmtref (End-of-File transfer)\n- KEY=string$ (Record key)\n- KNO=num | string$ (File access key number (num) or name (string$))\n- RNO=num (Record number)\n- stmtref (Program line number or statement label to which to transfer control)."
				}
			]
		}
	],
	"returns":"Record index (next or specified record)."
	},
	"INT":{
	"description":"The INT( ) function returns the integer portion of the value specified. No rounding is performed on the value. The fractional part of the value is truncated.",
	"signatures":[
		{
			"signature":"(num[,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"num",
				"description":"Numeric expression whose integer portion is to be returned."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Integer portion of numeric value."
	},
	"IOL":{
	"description":"The IOL( ) function returns the object code value of an IOList for either an open file or a composite string variable. If the specified file or string variable does not have an associated IOList, PxPlus returns Error #81: Invalid IOLIST specification.",
	"signatures":[
		{
			"signature":"(composite$ [,REC=name$] [,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"composite$",
				"description":"Composite string variable whose IOList is to be retrieved. String expression."
				},
				{
				"parameter":"REC=name$",
				"description":"String variable. Optional record name/prefix for all of the variables in the IOList."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		},
		{
			"signature":"(chan [,REC=name$] [,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"chan",
				"description":"Channel or logical file number whose default IOList is to be returned."
				},
				{
				"parameter":"REC=name$",
				"description":"String variable. Optional record name/prefix for all of the variables in the IOList."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		},
		{
			"signature":"Return IOList for a Given File/Pathname: IOL(FILE \"pathname\" [:* |:KEY | :^] [,REC=name$] [,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"pathname",
				"description":"Name of the unopened file from which to directly access the IOList."
				},
				{
				"parameter":"REC=name$",
				"description":"String variable. Optional record name/prefix for all of the variables in the IOList."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		},
		{
			"signature":"Return IOList for a Given Table: IOL(TABLE \"tablename\" [:* |:KEY | :^] [,REC=name$] [,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"tablename",
				"description":"Name of the table from which to access the IOList."
				},
				{
				"parameter":"REC=name$",
				"description":"String variable. Optional record name/prefix for all of the variables in the IOList."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Object value of an IOList or composite string variable."
	},
	"IOR":{
	"description":"The IOR( ) function performs a bit-wise logical 'OR' comparison of two string or numeric expressions/variables and generates a value as a result. The length of the two string expressions must be equal or PxPlus returns an Error #46: Length of string invalid.",
	"signatures":[
		{
			"signature":"(value1[$],value2[$][,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"value1[$]",
				"description":"Compared values. String or numeric expressions/variables. If strings, value1$ must be the same length as value2$."
				},
				{
				"parameter":"value2[$]",
				"description":"Compared values. String or numeric expressions/variables. If strings, value1$ must be the same length as value2$."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Result of logical 'OR' comparison of two expressions/variables."
	},
	"JST":{
	"description":"The JST( ) function converts a given character string (string$) to the length (len) specified. It makes the string the desired length either by truncating the string$ or by appending a defined pad character. The default is to pad with spaces.",
	"signatures":[
		{
			"signature":"(string$,len [, jstcode [$] ][,char$][,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string$",
				"description":"String expression to be processed."
				},
				{
				"parameter":"len",
				"description":"Desired length of string. Numeric expression."
				},
				{
				"parameter":"jstcode",
				"description":"Optional numeric or string parameter defining how to justify the string:\n\n- 0 or R: Right justify\n- 1 or L: Left justify (Default)\n- 2 or C: Center in string\n\nIf omitted, the string is right justified."
				},
				{
				"parameter":"char$",
				"description":"Optional string. Its first character is used to pad string$. If omitted, the default is to pad with blanks. String expression."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"The value of the string after applying the padding/truncation."
	},
	"JUL":{
	"description":"The JUL( ) function is used to convert a date from year, month, day to a Julian date. The Julian date is an integer: the number of days since the system base date. By default, this is January 1, 1970. Use the 'BY' system parameter to change the base date.",
	"signatures":[
		{
			"signature":"(year,month,day[,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"year",
				"description":"Numeric expression of the year. Use 0 (zero) for the current year. If your value is less than 100, the current century is added to the value."
				},
				{
				"parameter":"month",
				"description":"Numeric expression of the month. Use 0 (zero) for the current month."
				},
				{
				"parameter":"day",
				"description":"Numeric expression of the day. Use 0 (zero) for the current day."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control if an error occurs."
				}
			]
		},
		{
			"signature":"Julian from Formatted Date: JUL(string$[,format$] [,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string$",
				"description":"String expression containing the date to convert. Format must match the current DAY_FORMAT."
				},
				{
				"parameter":"format$",
				"description":"Option format of the date string where YYYY or YY identifies the Year position, MM the month, and DD the day. If not provided, the system standard DAY_FORMAT setting is used."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control if an error occurs."
				}
			]
		}
	],
	"returns":"Julian date (converted from year, month, day)."
	},
	"KEC":{
	"description":"The KEC( ) function returns the current record's key. The result is based on the:\n\n- Current file access key or\n- Access key specified using the KNO= option\n\nTypically, the KEC( ) function is used after you read a record to determine the key of the record you just read (i.e. the key of the current record or current position in the file).",
	"signatures":[
		{
			"signature":"(chan[,fileopt])",
			"parameters":[
				{
				"parameter":"chan",
				"description":"Channel or logical file number of your given file."
				},
				{
				"parameter":"fileopt",
				"description":"Supported file options (see File Options):\n\n- ERR=stmtref\n- KNO=num | string$\n\n- stmtref\n\nProgram line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Current key or current logical position in file."
	},
	"KEF":{
	"description":"The KEF( ) function returns the key of the first record in the file specified. The result is based on the:\n\n- Current file access key or\n- Access key specified using the KNO= option",
	"signatures":[
		{
			"signature":"(chan[,fileopt])",
			"parameters":[
				{
				"parameter":"chan",
				"description":"Channel or logical file number of the file to reference."
				},
				{
				"parameter":"fileopt",
				"description":"Supported file options (see File Options):\n\n- END=stmtref\n- ERR=stmtref\n- KNO=num | string$\n\n- stmtref\n\nProgram line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Key of first record in file."
	},
	"KEL":{
	"description":"The KEL( ) function returns the key of the last record in the file specified. The result is based on the:\n\n- Current file access key or\n- Access key specified using the KNO= option",
	"signatures":[
		{
			"signature":"(chan[,fileopt])",
			"parameters":[
				{
				"parameter":"chan",
				"description":"Channel or logical file number of the file to reference."
				},
				{
				"parameter":"fileopt",
				"description":"Supported file options (see File Options):\n\n- END=stmtref\n- ERR=stmtref\n- KNO=num | string$\n\n- stmtref\n\nProgram line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Key of last record in file."
	},
	"KEN":{
	"description":"The KEN( ) function returns the key of the record which directly follows the next record in the file specified. The result is based on the:\n\n- Current file access key or\n- Access key specified using the KNO= option\n\nIf the '+K' system parameter is not enabled, the 'Record Key' specified must exist on the file.\n\nFor ODBC files, the KEN( ) function supports some debugging tools:\n\nKEN (nn) Returns last generated SQL statement passed to the PxPlus SQL ODBC Driver.\nKEN (nn, IND=1) Returns cursor name for database.\nKEN (nn, IND=2) Returns ODBC handles.",
	"signatures":[
		{
			"signature":"(chan[,fileopt])",
			"parameters":[
				{
				"parameter":"chan",
				"description":"Channel or logical file number of your given file."
				},
				{
				"parameter":"fileopt",
				"description":"Supported file options (see File Options):\n\n- END=stmtref\n- ERR=stmtref\n- KEY=string$\n- KNO=num | string$\n\n- stmtref\n\nProgram line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Key of the record that follows the next record in the file."
	},
	"KEP":{
	"description":"The KEP( ) function returns the key of the record prior to the record in the file specified. The result is based on the:\n\n- Current file access key or\n- Access key specified using the KNO= option\n\nIf the current record is at the start of the file, there is no prior record. PxPlus reports Error #2: END-OF-FILE on read or File full on write unless you include an ERR= or END= option.",
	"signatures":[
		{
			"signature":"(chan[,fileopt])",
			"parameters":[
				{
				"parameter":"chan",
				"description":"Channel or logical file number of your given file."
				},
				{
				"parameter":"fileopt",
				"description":"Supported file options (see File Options):\n\n- END=stmtref\n- ERR=stmtref\n- KEY=string$\n- KNO=num | string$\n\n- stmtref\n\nProgram line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Key of the prior record in the file."
	},
	"KEY":{
	"description":"The KEY( ) function returns the key of either the next record in the file specified or, via the IND= or RNO= options, the key of the record at the index/record number specified. The result is based on the:\n\n- Current file access key or\n- Access key specified using the KNO= option",
	"signatures":[
		{
			"signature":"(chan[,fileopt])",
			"parameters":[
				{
				"parameter":"chan",
				"description":"Channel or logical file number of the file to reference."
				},
				{
				"parameter":"fileopt",
				"description":"Supported file options:\n\n- END=stmtref\n- ERR=stmtref\n- KNO=num | string$\n- KEY=keyvalue\n- IND=num\n- RNO=num\n- stmtref\n\nProgram line number or statement label to which to transfer control in case of an error/exception."
				}
			]
		}
	],
	"returns":"Key of next record in file."
	},
	"KGN":{
	"description":"The KGN( ) function returns a string comprising the key of the record provided. This function can be used to determine the value of an alternate (or primary) key of a record, given the record's contents (and external key, if present).",
	"signatures":[
		{
			"signature":"([ext_key$],data$,key_def$,key_num [ ,SEP=sepchar$ ] [,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"ext_key$",
				"description":"Value of the external key. Optional. String expression."
				},
				{
				"parameter":"data$",
				"description":"Contents of the data record. String expression."
				},
				{
				"parameter":"key_def$",
				"description":"Key definition structure. String expression. This can be extracted using the FIB( ) function at position 85 (in native PxPlus mode) or using the FIN( ) function at position 86 for a length of 385 (in BBx® emulation mode)."
				},
				{
				"parameter":"key_num",
				"description":"Key number (primary or an alternate key) to extract. Numeric expression - Base 0 (primary key=0, 1st secondary=1, etc.)."
				},
				{
				"parameter":"sepchar$",
				"description":"Separator character to be used in the parsing of data$. If omitted, the system separator is used or the Dynamic field separator logic is applied if enabled."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Key of record in file, given the record's contents.",
	"note":"The ability to have a SEP table and Dynamic separators was added in PxPlus v7.00."
	},
	"LCS":{
	"description":"The LCS( ) function returns the lowercase counterpart of the original string (with all uppercase alphabetic characters replaced by their corresponding lowercase characters).",
	"signatures":[
		{
			"signature":"(string$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string$",
				"description":"String expression whose lowercase ASCII counterpart is to be returned."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Lowercase counterpart of string."
	},
	"LEN":{
	"description":"The LEN( ) function returns an integer reporting the length of the given string. If the given string is a null string (\"\"), then the function returns a length of 0 (zero).",
	"signatures":[
		{
			"signature":"(string$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string$",
				"description":"String expression whose length is to be returned."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Integer, length of the given string, 0 (zero) if null string."
	},
	"LNO":{
	"description":"The LNO( ) function is used to get the line number of a PxPlus statement. Normally, it is passed a line label and will return the line number that the label is in; however, it can also be passed a line number. While it may seem useless to pass the LNO function a line number, passing a line number to the function assures that, within the program, the line number reference will be adjusted during a RENUMBER directive.\n\nFormat 2 can be used wherever a statement number or label is used (i.e. after a GOTO, GOSUB, ERR=, etc.). The LNO function will evaluate the string expression and use that to find and return the line reference to be used.",
	"signatures":[
		{
			"signature":"(stmtref)",
			"parameters":[
				{
				"parameter":"stmtref",
				"description":"Statement label for which the LNO function is to return the line number."
				}
			]
		},
		{
			"signature":"(stringexpr$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"stringexpr$",
				"description":"String expression to be evaluated."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Line number of the statement referred to by stmtref."
	},
	"LOG":{
	"description":"The LOG( ) function returns the numeric Base 10 logarithm of a given number, rounded to the current PRECISION setting. This is the inverse of the EXP( ) function. PxPlus returns Error #40: Divide check or numeric overflow if the numeric value is negative.",
	"signatures":[
		{
			"signature":"(num[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"num",
				"description":"Numeric expression whose Base 10 logarithm is to be returned."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Numeric, Base 10 logarithm."
	},
	"LRC":{
	"description":"The LRC( ) function returns the longitudinal redundancy checksum of a character string. The longitudinal redundancy check of a character string is a one-byte string resulting from a logical XOR( ) comparison of all the characters in the string.",
	"signatures":[
		{
			"signature":"(string$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string$",
				"description":"Character string whose longitudinal redundancy checksum is to be calculated."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"One-byte string, longitudinal checksum."
	},
	"LST":{
	"description":"The LST( ) function converts a PxPlus statement from internal form to normal source format. You must ensure that the string processed by the LST( ) function is a statement in valid internal form. If it is not valid, PxPlus returns either an Error #30: Statement too complex -- cannot compile or an Error #49: <*> Internal program format error <*>.",
	"signatures":[
		{
			"signature":"([EDIT][*]internal$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"EDIT",
				"description":"Keyword indicating that listing is to be returned with indented format."
				},
				{
				"parameter":"*",
				"description":"(Asterisk) Returns the listing in colourized syntax. (The 'CS' system parameter must be On to display colourized syntax.)"
				},
				{
				"parameter":"internal$",
				"description":"Character string containing the internal (compiled) form of a PxPlus statement. String expression; e.g., X$=lst(pgm(10))."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"List format from compiled statement."
	},
	"MAX":{
	"description":"The MAX( ) function evaluates and returns the maximum (largest) value of the values or expressions specified. There is no limit to the number of values or expressions that can be passed to the MAX( ) function. All compare values must be the same type -- numeric or string.",
	"signatures":[
		{
			"signature":"(compare1, compare2, ...[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"compare1, compare2, ...",
				"description":"Comma-separated list of values and/or expressions to be compared in order to determine the highest value."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"The largest numeric or string value from the list of supplied values."
	},
	"MEM":{
	"description":"The MEM( ) function provides direct access to memory locations through the use of pointers. The return value is dependent on the format used.",
	"signatures":[
		{
			"signature":"(var$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"var$",
				"description":"Name of string variable whose address you wish to obtain."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control should an error occur."
				}
			]
		},
		{
			"signature":"(address[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"address",
				"description":"Number of bytes to return (numeric expression)."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control should an error occur."
				}
			]
		},
		{
			"signature":"(address, bytes[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"address",
				"description":"Number of bytes to return (numeric expression)."
				},
				{
				"parameter":"bytes",
				"description":"Value you wish to write (string expression)."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control should an error occur."
				}
			]
		},
		{
			"signature":"(address, val$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"address",
				"description":"Number of bytes to return (numeric expression)."
				},
				{
				"parameter":"val$",
				"description":"Value you wish to write (string expression)."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control should an error occur."
				}
			]
		}
	],
	"returns":"Memory location and/or value.",
	"note":"This function is mainly for use with external functions; i.e., using the DLL( ) and DLX( ) functions."
	},
	"MID":{
	"description":"Use the MID( ) function to extract a portion of a string. Using this function is similar to using a substring except that it can be used directly with the return value of a function, variable, or expression. In addition, if the offset is negative, PxPlus uses it as an offset from the end of the string. For example, mid(X$,-1) is the last character of X$. If the length is negative, then PxPlus uses it as the number of characters preceding the offset; that is, mid(\"ABCD\",-1,-1) returns C (the first character preceding the last character) and mid(\"abcde\",-2,-4) yields abc. By default, if this function is passed an invalid offset, it returns a null string. If passed an invalid length, then it returns the rest of the string.",
	"signatures":[
		{
			"signature":"(string$, offset[, len][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string$",
				"description":"String expression whose hash value is to be returned."
				},
				{
				"parameter":"offset",
				"description":"Starting position of the substring. Numeric expression, integer. If the integer is negative, the offset is taken from the end of the string."
				},
				{
				"parameter":"len",
				"description":"Length of the substring."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control should an error occur."
				}
			]
		}
	],
	"returns":"Extracted portion of string (similar to substring)."
	},
	"MIN":{
	"description":"The MIN( ) function returns the minimum (smallest) value of the values or expressions specified. There is no limit to the number of values or expressions that can be passed to the MIN( ) function. All compare values must be the same type -- numeric or string.",
	"signatures":[
		{
			"signature":"(compare1, compare2, ... [, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"compare1, compare2, ...",
				"description":"Comma-separated list of values and/or expressions to be compared in order to determine the lowest value."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control should an error occur."
				}
			]
		}
	],
	"returns":"The smallest numeric or string value from the list of supplied values."
	},
	"MNM":{
	"description":"The MNM( ) function returns the defined command sequence for the specified mnemonic on the file given. The command sequence is typically the exact transmission string to handle the mnemonic for the file. The mnemonic must have been predefined using the MNEMONIC directive. The MNM( ) function returns a null string if the mnemonic has not been defined.",
	"signatures":[
		{
			"signature":"(mnemonic$[, chan][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"mnemonic$",
				"description":"Name of defined mnemonic to look up or the string value of the mnemonic. String expression."
				},
				{
				"parameter":"chan",
				"description":"Channel or logical file number of the given file. If omitted, the default is file 0."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"String, command sequence for mnemonic."
	},
	"MOD":{
	"description":"The MOD( ) function returns the modulus/remainder from a division of the first expression by the second.",
	"signatures":[
		{
			"signature":"(num, base[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"num",
				"description":"Value for which to calculate the modulus. Numeric expression."
				},
				{
				"parameter":"base",
				"description":"Modulus base value. Numeric expression."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	],
	"returns":"Numeric, modulus/remainder."
	},
	"MSG":{
	"description":"The MSG( ) function returns the text of the message whose number or key is specified. Use this function to obtain more information about errors generated by a program and to return information from your own message libraries. Use the DEF MSG directive to temporarily override the MSG( ) function.",
	"signatures":[
		{
			"signature":"(err_msg[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"err_msg",
				"description":"Number of the error message to return. Numeric expression. If err_msg is a positive integer, it returns the associated message (see Error Codes and Messages). If err_msg is -1, it returns extended or external error information."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		},
		{
			"signature":"(msg_key$[, param1, param2, ...][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"msg_key$",
				"description":"Message key to the Message Library file. String expression. If an = (equals sign) precedes the msg_key$ in the function call, the msg_key$ value is assumed to be the contents of the entry in the message. This allows for direct substitution within data strings."
				},
				{
				"parameter":"param1, param2, ...",
				"description":"Optional parameters. You can use a list of values to replace the parameters stored in the message."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		},
		{
			"signature":"(+[ :oserrcode ])",
			"parameters":[
				{
				"parameter":"oserrcode",
				"description":"Optional operating system error code (from GetLastError Windows API call or errno under UNIX/Linux)."
				}
			],
			"description":"Format 4 returns the operating system error message either for the current error condition (if no oserrcode given) or for the error code specified."
		}
	],
	"returns":"Text associated with given message number or key."
	},
	"MSK":{
	"description":"The MSK( ) function is used for pattern matching in strings. It can be used to search for specific patterns or capture sub-patterns within a larger pattern.",
	"signatures":[
		{
			"signature":"(string$, mask$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string$",
				"description":"String to search. Maximum string size 8KB."
				},
				{
				"parameter":"mask$",
				"description":"String containing the pattern/mask definition. If this value is null, then the previously used pattern is reused. String expression."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Integer reporting the starting offset of the matched pattern mask$ in the subject string string$."
		},
		{
			"signature":"(index[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"index",
				"description":"Index of the captured sub-pattern to return, with 1-n being the captured sub-patterns, and 0 being the match for the whole pattern."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Integer reporting the starting offset of the captured sub-pattern from the previous MSK( ) Format 1 call."
		}
	]
	},
	"MXC":{
	"description":"The MXC( ) function returns an integer reporting the zero-based maximum number of columns allowed for a file or device.",
	"signatures":[
		{
			"signature":"(chan[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"chan",
				"description":"Channel or logical file number of the file to reference, typically 0 (zero) for the terminal. Use an integer for a device channel (e.g., a printer). Numeric expression."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Integer, zero-based, maximum columns allowed for file/device."
		}
	],
	"note":"The functions MXC( ) and MXL( ) return the maximum available column and line values for the channel based on the current default settings for paper size, printable area, offset, margin, font and pitch."
	},
	"MXL":{
	"description":"The MXL( ) function returns an integer reporting the zero-based maximum number of lines allowed for your given file or device.",
	"signatures":[
		{
			"signature":"(chan[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"chan",
				"description":"Channel or logical file number of the file to reference, typically 0 (zero) for the terminal. Use an integer for a device channel (e.g., a printer). Numeric expression."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Integer, zero-based, maximum lines allowed for file/device."
		}
	],
	"note":"The functions MXC( ) and MXL( ) return the maximum available column and line values for the channel based on the current default settings for paper size, printable area, offset, margin, font and pitch."
	},
	"NEW":{
	"description":"The NEW( ) function is used in Object Oriented Programming to create a new object based on a specified class name or an existing object (obj_id). If the class name already exists, then its definition is used. If it has not been defined previously, the system attempts to load the program class.pvc and execute/define the DEF CLASS within it (the DEF CLASS clause must be at the start of the program). If the system is unable to properly determine the class definition, an Error #90: Unable to locate Object class definition is generated.",
	"signatures":[
		{
			"signature":"(class$[, param1[$], param2[$], ...] [ FOR dependency ][, ERR=stmtref] )",
			"parameters":[
				{
				"parameter":"class$",
				"description":"Object identifier of an existing Object. The cloning process does not run the ON_CREATE for the new clone nor provide access to files from the original."
				},
				{
				"parameter":"param1[$], param2[$], ...",
				"description":"Optional parameters that can be used with the NEW( ) function to be passed on to the ON_CREATE entry point."
				},
				{
				"parameter":"FOR dependency",
				"description":"Other object, window, file, control, or such on which this object is dependent. If this other item is deleted from the system, the object will also be deleted. See Dependencies."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Object identifier."
		},
		{
			"signature":"(obj_id [ FOR dependency ][, ERR=stmtref] )",
			"parameters":[
				{
				"parameter":"obj_id",
				"description":"Object identifier of an existing object."
				},
				{
				"parameter":"FOR dependency",
				"description":"Other object, window, file, control, or such on which this object is dependent. If this other item is deleted from the system, the object will also be deleted. See Dependencies."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Object identifier."
		}
	],
	"note":"Use REF( ) to increment the reference count. The object dependency capability for the NEW function was added in PxPlus v6.30."
	},
	"NOT":{
	"description":"The NOT( ) function is used to invert the value of a string or numeric. It returns the inverted value, with all ON bits turned OFF and vice versa.",
	"signatures":[
		{
			"signature":"(data$[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"data$",
				"description":"Data whose bits are to be inverted. String expression."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Inverted value, string."
		},
		{
			"signature":"(num[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"num",
				"description":"Value for inverting a logical condition. Numeric expression."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Inverted value, numeric."
		}
	],
	"examples":[
		"Format 1 - Invert String:",
		"A$=not($0010$)",
		"yields A$=$FFEF$",
		"A$=not($FF00FF$)",
		"yields A$=$00FF00$",
		"A$=not($5A5A$)",
		"yields A$=$A5A5$",
		"Format 2 - Invert Logical Condition:",
		"Use this format to invert a logical condition. If the result of the condition is 0 (false), this function returns 1 (true); otherwise, this function returns 0 (false):",
		"if not(CST_ID$=CMPR_ID$) \\",
		"     then gosub NO_MATCH"
	]
	},
	"NUM":{
	"description":"The NUM( ) function converts a numeric expression in a string to a numeric value. It can also test whether a string can be converted to a numeric value.",
	"signatures":[
		{
			"signature":"(string$ [, errval ] [, ERR=stmtref ])",
			"parameters":[
				{
				"parameter":"string$",
				"description":"Character string whose value is to be converted to a numeric value. Numeric in string expression (e.g., \"19990317\")."
				},
				{
				"parameter":"errval",
				"description":"Value to return if string$ is not numeric. Optionally can be an * (asterisk) to test string$. See Numeric String Testing."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Numeric value from string or 0/1 for numeric string testing."
		}
	],
	"examples":[
		"Example:",
		"A=num(\"1.34\")",
		"Yields 1.34",
		"A=num(\"-1,005.\")",
		"Yields -1005",
		"A=num(\"A\",err=0050)",
		"On error, transfers to 0050 and sets err=26",
		"A=num(\"A\",1234)",
		"Yields 1234",
		"A=num(\"1.34\",*)",
		"Yields 1",
		"A=num(\"A\",*)",
		"Yields 0"
	]
	},
	"OBJ":{
	"description":"The OBJ( ) function is used to return information about a custom control object or list all objects defined within the system.",
	"signatures":[
		{
			"signature":"(ctl_id [ ,ERR=stmtref ] )",
			"parameters":[
				{
				"parameter":"ctl_id",
				"description":"Control ID number that is assigned to each control when created. Numeric expression. If 0 (zero), information about the current window is returned."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"String containing information about the specified control object."
		}
	],
	"examples":[
		"Example (Format 1):",
		"This example shows what is returned for an existing list_box 10. The string returned by the OBJ( ) function contains 64 characters:",
		"list_box 10,@(10,10,60,10),fmt=\"L8 B2 L20 C10 N15 C3\"",
		"?hta(obj(10))",
		"00040000000A000A003C000A0000000000000978004E00CE01E40092004F009501E2009000000000",
		"000000000000000000000000000000000000000000000000",
		"",
		"Example (Format 2):",
		"To get a list of objects:",
		"objects = obj(LIST)",
		"PRINT objects",
		"",
		"Output:",
		"1\t2\tMyClass\tC:\\Programs\\MyProgram.pvc",
		"2\t1\tAnotherClass\tC:\\Programs\\AnotherProgram.pvc",
		"..."
	]
	},
	"OPT":{
	"description":"The OPT( ) function returns the value used in the OPT= option of the OPEN directive for the given file. It is primarily used with device drivers for processes like generating banners and handling multiple copies.",
	"signatures":[
		{
			"signature":"(chan[,ERR=stmtref])",
			"parameters":[
				{
				"parameter":"chan",
				"description":"Channel or logical file number of the file to reference."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Value used in OPT= option."
		}
	]
	},
	"PAD":{
	"description":"The PAD( ) function converts a given character string to the specified length by either truncating the string or appending a defined pad character.",
	"signatures":[
		{
			"signature":"(string$, len[, pad_code][, char$][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string$",
				"description":"String expression to be processed."
				},
				{
				"parameter":"len",
				"description":"Desired length of the string. Numeric expression."
				},
				{
				"parameter":"pad_code",
				"description":"Optional numeric or string parameter defining how to pad the string:\n0 or L: Pad on Left (right justify)\n1 or R: Pad on Right (left justify) - Default\n2 or C: Center in string\nIf omitted, the string is padded to the right. Default is to pad with spaces."
				},
				{
				"parameter":"char$",
				"description":"Optional string. Its first character is used to pad string$. If omitted, the default is to pad with blanks. String expression."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"The value of the string after applying the padding/truncation."
		}
	]
	},
	"PCK":{
	"description":"The PCK( ) function is used to pack a numeric value into a string expression.",
	"signatures":[
		{
			"signature":"(num[, size][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"num",
				"description":"Integer numeric value to be packed."
				},
				{
				"parameter":"size",
				"description":"Optional length of the output value. The default is 8 if omitted."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"String expression whose value represents a packed number."
		}
	]
	},
	"PFX":{
	"description":"The PFX( ) function is used to return the current value of a specific PREFIX or the PREFIX for a specified PGN (Program Name).",
	"signatures":[
		{
			"signature":"(num[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"num",
				"description":"PREFIX number to use. Numeric expression."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"String, current value of the given PREFIX."
		},
		{
			"signature":"(PGN[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"PGN",
				"description":"Program Name for which to retrieve the PREFIX. String expression."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"String, current value of the PREFIX for the specified PGN."
		}
	]
	},
	"PGM":{
	"description":"The PGM( ) function is used to return the internal (compiled) format of a given program statement number or the program name.",
	"signatures":[
		{
			"signature":"(lineno[, prog_level][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"lineno",
				"description":"Statement line number. Numeric expression. If between integer from 1 and 64999, defines line number. -1, -2, or -3 returns program names instead. See Description."
				},
				{
				"parameter":"prog_level",
				"description":"Optional numeric value indicating which program level to return."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"String, compiled format of statement or program name."
		}
	]
	},
	"POS":{
	"description":"The POS( ) function scans a string to determine the position where a portion of it satisfies a specified relationship with a pattern string.",
	"signatures":[
		{
			"signature":"(pattern$ { = ...} string$ [ , step [ , instance] ] [ , ERR=stmtref] )",
			"parameters":[
				{
				"parameter":"{ = ...}",
				"description":"Relationship operator. Define the relationship for the string comparison."
				},
				{
				"parameter":"pattern$",
				"description":"String value or expression to scan for."
				},
				{
				"parameter":"string$",
				"description":"String to be scanned."
				},
				{
				"parameter":"step",
				"description":"Increment value of the intervals. Optional. Numeric expression (defaults to 1)."
				},
				{
				"parameter":"instance",
				"description":"Numeric expression tells PxPlus which occurrence(s) to report when the pattern is found in the string."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Integer, starting position where the relationship is satisfied (0 if none)."
		}
	]
	},
	"PRC":{
	"description":"The PRC( ) function rounds a given numeric value to the set precision.",
	"signatures":[
		{
			"signature":"(num[, precision][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"num",
				"description":"Value to be rounded. Numeric expression."
				},
				{
				"parameter":"precision",
				"description":"Precision to which to round. Optional. Numeric expression. Integer from 0 to 14. If omitted, rounding is done to the current precision in effect."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Numeric value, rounded to a set precision."
		}
	]
	},
	"PRM":{
	"description":"The PRM( ) function returns the current value of the specified system parameter unless the parameter is a switch. It returns numeric status codes for switches.",
	"signatures":[
		{
			"signature":"(param[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"param",
				"description":"Two-character valid system parameter code, enclosed in single quotes. See System Parameters. String expression."
				},
				{
				"parameter":"ERR",
				"description":"Program line number or statement label to which to transfer control."
				}
			],
			"returns":"Current value of system parameter or status code if switch."
		}
	],
	"examples":[
		"Example 1:",
		"This temporarily changes the 'BY' parameter to obtain a new date:",
		"print \"Valentine days..\"",
		"SV_BY = prm('BY')",
		"for Y = 1999 to 2009",
		"   set_param 'BY' = Y",
		"   print dte(31 + 14 - 1: \"%Dl %Ml %D/%Y\")",
		"next Y",
		"set_param 'BY' = SV_BY",
		"",
		"Example 2:",
		"PRM( ) returns a specific parameter's current setting (or the Boolean value for a switch):",
		"?prm('AH')",
		"0",
		"set_param 'AH'",
		"?prm('AH')",
		"1",
		"",
		"The parameter's status is returned even when it is hidden from the PRM variable's contents listing:",
		"?prm('!I') ! hidden unless ON",
		"0"
	]
	},
	"ARG":{
	"description":"The ARG function has two basic functions: the first is to return parameters from the argument list of the Command line that launched the application; the second, variations are used to manipulate fields/arguments within a string.",
	"signatures":[
		{
			"signature":"(position[, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"position",
				"description":"Position of the argument you want returned. Numeric expression. Range: integer value from -4 to the number of arguments in the command that launched the session."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		},
		{
			"signature":"(string$, argno[, delim$][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string$",
				"description":"String containing a series of arguments/values each separated by a single character."
				},
				{
				"parameter":"argno",
				"description":"Number of the argument in the string to return or replace (one based)."
				},
				{
				"parameter":"delim$",
				"description":"Character that separates each of the values string$. If omitted, the system default field separator is used."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		},
		{
			"signature":"(EDIT string$, argno, newval$[, delim$][, ERR=stmtref])",
			"parameters":[
				{
				"parameter":"string$",
				"description":"String containing a series of arguments/values each separated by a single character."
				},
				{
				"parameter":"argno",
				"description":"Number of the argument in the string to return or replace (one based)."
				},
				{
				"parameter":"newval$",
				"description":"New value to insert into string$."
				},
				{
				"parameter":"delim$",
				"description":"Character that separates each of the values string$. If omitted, the system default field separator is used."
				},
				{
				"parameter":"stmtref",
				"description":"Program line number or statement label to which to transfer control."
				}
			]
		}
	]
	},
	"TBL": {
		"description": "The TBL( ) function converts a string (all characters or all numeric) to the corresponding values set in a given translation table.",
		"signatures": [
			{
				"signature": "(string$, TBL=tbl_stmtref[, ERR=stmtref])",
				"parameters": [
					{
						"parameter": "string$",
						"description": "String to be translated/replaced (must be all characters or all numeric)."
					},
					{
						"parameter": "tbl_stmtref",
						"description": "Optional, if your table is embedded in the same statement as the TBL( ) function. If you refer to a program tbl_stmtref, it must contain a conversion table."
					},
					{
						"parameter": "stmtref",
						"description": "Program line number or statement label to which to transfer control."
					}
				]
			},
			{
				"signature": "(string$, tbl_var$[, ERR=stmtref])",
				"parameters": [
					{
						"parameter": "string$",
						"description": "String to be translated/replaced (must be all characters or all numeric)."
					},
					{
						"parameter": "tbl_var$",
						"description": "String variable. Contains conversion table to replace elements in the string$. String expression."
					},
					{
						"parameter": "stmtref",
						"description": "Program line number or statement label to which to transfer control."
					}
				]
			},
			{
				"signature": "(position, expr_0[$], expr_1[$], ..., expr_n[$][, ERR=stmtref])",
				"parameters": [
					{
						"parameter": "position",
						"description": "Determines which expression to use. Positional or numeric expression, range 0 (zero) to n."
					},
					{
						"parameter": "expr_0[$], expr_1[$], ..., expr_n[$]",
						"description": "List of expressions to be returned. Numeric or string expressions. Restriction: The expressions must all be the same type (i.e. all characters or all numeric)."
					},
					{
						"parameter": "stmtref",
						"description": "Program line number or statement label to which to transfer control."
					}
				]
			},
			{
				"signature": "(var$, compare$, table$)",
				"parameters": [
					{
						"parameter": "var$",
						"description": "String variable. Contains a string to be translated or replaced."
					},
					{
						"parameter": "compare$",
						"description": "String table to compare character by character with the value in var$. String expression."
					},
					{
						"parameter": "table$",
						"description": "Table to use for conversion when a character in the compared value matches the value in var$. String expression."
					}
				]
			}
		]
	}
};