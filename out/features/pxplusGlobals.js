"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Rick Mathers. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", { value: true });
exports.keywords = exports.compiletimeconstants = exports.globalvariables = void 0;
exports.globalvariables = {
    $this: {
        description: 'Refers to the current object',
    },
};
exports.compiletimeconstants = {
    TRUE: {},
    FALSE: {},
    NULL: {},
};
exports.keywords = {
    SETESC: {
        description: "\n 1. Subroutine Interrupt-Handler: SETESC stmtref " +
            "\n 1. Subprogram Interrupt-Handler: SETESC prog_name$" +
            "\n 1. Interrupt Process On/Off: SETESC {ON | OFF}" +
            "\n 1. Enable/Disable for Range: SETESC {DISABLE | ENABLE}" +
            "\n 1. Return Current Program: SETESC READ x$" +
            "\n **where**" +
            "\n *prog_name$* Name of generic interrupt-handling program. Define it once per session." +
            "\n *stmtref* Program line number or statement label to which to transfer control." +
            "\n *x$* Name of the current SETESC program."
    }
};
//# sourceMappingURL=pxplusGlobals.js.map