"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalfunctions = void 0;
exports.globalfunctions = {
    ABS: {
        description: 'The ABS( ) function returns the absolute value of the numeric expression num. The value returned is a positive numeric value or zero.',
        //signatures:['(int $num [, void $ERR = stmtref]): void']
        signatures: [{
                signature: '(int num [, ERR = stmtref])',
                parameters: [{
                        parameter: "num",
                        description: "num - Numeric expression whose absolute value is to be returned."
                    }, {
                        parameter: "stmtref",
                        description: "stmtref - Optional - Program line number or statement label to which to transfer control."
                    }]
            }]
    },
    AND: {
        description: 'The AND( ) function performs a bit-wise \'AND\' comparison of two string or numeric expressions/variables, and generates a value as a result. The length of the two string expressions must be equal or PxPlus returns an Error #46: Length of string invalid.',
        // signatures:[
        // 	'(string $value1, string $value2 [, void ERR=stmtref])',
        // 	'(int $value1, int $value2 [, void ERR=stmtref])'
        // ]
        signatures: [{
                signature: '(value1[$], value2[$] [, ERR = stmtref])',
                parameters: [{
                        parameter: "value1[$]",
                        description: "value1[$] - Compared values. String or numeric expressions/variables. If strings, value1$ must be the same length as value2$."
                    }, {
                        parameter: "value2[$]",
                        description: "value2[$] - Compared values. String or numeric expressions/variables. If strings, value1$ must be the same length as value2$."
                    }, {
                        parameter: "stmtref",
                        description: "stmtref - Optional - Program line number or statement label to which to transfer control."
                    }]
            }]
    },
    ARG: {
        signatures: [{
                signature: '(string$, argno[,delim$] [,ERR=stmtref])',
                description: 'This form of the ARG function extracts a specific field from a delimited string. If no delimiter is specified, the system uses the default SEP character (normally $8A$).',
                parameters: [{
                        parameter: 'string$',
                        description: 'string$ - String containing a series of arguments/values each separated by a single character.'
                    }, {
                        parameter: 'delim$',
                        description: 'delim$ - Character that separates each of the values string$. If omitted, the system default field separator is used.'
                    }, {
                        parameter: "stmtref",
                        description: "stmtref - Optional - Program line number or statement label to which to transfer control."
                    }]
            }, {
                signature: '(EDIT string$, argno, newval$ [,delim$] [,ERR=stmtref])',
                description: 'This form of the ARG function generates and returns a new string replacing the field specified with that supplied in <newvalue>.' +
                    '\nIf the field specified did not exist, additional delimiters will be added in the string to make up for the missing fields. If no delimiter is specified, the system uses the default SEP character.',
                parameters: [{
                        parameter: 'string$',
                        description: 'string$ - String containing a series of arguments/values each separated by a single character.'
                    }, {
                        parameter: 'argno',
                        description: 'argno - Number of the argument in the string to return or replace (one based).'
                    }, {
                        parameter: 'delim$',
                        description: 'delim$ - Character that separates each of the values string$. If omitted, the system default field separator is used.'
                    }, {
                        parameter: 'newval$',
                        description: 'newval$ - New value to insert into string$.'
                    }, {
                        parameter: "stmtref",
                        description: "stmtref - Optional - Program line number or statement label to which to transfer control."
                    }]
            }]
    }
};
//# sourceMappingURL=pxplusGlobalFunctions.js.map