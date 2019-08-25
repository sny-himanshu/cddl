(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.js ***!
  \********************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Artyom Shalkhakov. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *\n *  Based on the ATS/Postiats lexer by Hongwei Xi.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '//',\n        blockComment: ['(*', '*)'],\n    },\n    brackets: [['{', '}'], ['[', ']'], ['(', ')'], ['<', '>']],\n    autoClosingPairs: [\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n        { open: '{', close: '}', notIn: ['string', 'comment'] },\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\n        { open: '(', close: ')', notIn: ['string', 'comment'] },\n    ]\n};\nvar language = {\n    tokenPostfix: '.pats',\n    // TODO: staload and dynload are followed by a special kind of string literals\n    // with {$IDENTIFER} variables, and it also may make sense to highlight\n    // the punctuation (. and / and \\) differently.\n    // Set defaultToken to invalid to see what you do not tokenize yet\n    defaultToken: 'invalid',\n    // keyword reference: https://github.com/githwxi/ATS-Postiats/blob/master/src/pats_lexing_token.dats\n    keywords: [\n        //\n        \"abstype\",\n        \"abst0ype\",\n        \"absprop\",\n        \"absview\",\n        \"absvtype\",\n        \"absviewtype\",\n        \"absvt0ype\",\n        \"absviewt0ype\",\n        //\n        \"as\",\n        //\n        \"and\",\n        //\n        \"assume\",\n        //\n        \"begin\",\n        //\n        /*\n                \"case\", // CASE\n        */\n        //\n        \"classdec\",\n        //\n        \"datasort\",\n        //\n        \"datatype\",\n        \"dataprop\",\n        \"dataview\",\n        \"datavtype\",\n        \"dataviewtype\",\n        //\n        \"do\",\n        //\n        \"end\",\n        //\n        \"extern\",\n        \"extype\",\n        \"extvar\",\n        //\n        \"exception\",\n        //\n        \"fn\",\n        \"fnx\",\n        \"fun\",\n        //\n        \"prfn\",\n        \"prfun\",\n        //\n        \"praxi\",\n        \"castfn\",\n        //\n        \"if\",\n        \"then\",\n        \"else\",\n        //\n        \"ifcase\",\n        //\n        \"in\",\n        //\n        \"infix\",\n        \"infixl\",\n        \"infixr\",\n        \"prefix\",\n        \"postfix\",\n        //\n        \"implmnt\",\n        \"implement\",\n        //\n        \"primplmnt\",\n        \"primplement\",\n        //\n        \"import\",\n        //\n        /*\n                \"lam\", // LAM\n                \"llam\", // LLAM\n                \"fix\", // FIX\n        */\n        //\n        \"let\",\n        //\n        \"local\",\n        //\n        \"macdef\",\n        \"macrodef\",\n        //\n        \"nonfix\",\n        //\n        \"symelim\",\n        \"symintr\",\n        \"overload\",\n        //\n        \"of\",\n        \"op\",\n        //\n        \"rec\",\n        //\n        \"sif\",\n        \"scase\",\n        //\n        \"sortdef\",\n        /*\n        // HX: [sta] is now deprecated\n        */\n        \"sta\",\n        \"stacst\",\n        \"stadef\",\n        \"static\",\n        /*\n                \"stavar\", // T_STAVAR\n        */\n        //\n        \"staload\",\n        \"dynload\",\n        //\n        \"try\",\n        //\n        \"tkindef\",\n        //\n        /*\n                \"type\", // TYPE\n        */\n        \"typedef\",\n        \"propdef\",\n        \"viewdef\",\n        \"vtypedef\",\n        \"viewtypedef\",\n        //\n        /*\n                \"val\", // VAL\n        */\n        \"prval\",\n        //\n        \"var\",\n        \"prvar\",\n        //\n        \"when\",\n        \"where\",\n        //\n        /*\n                \"for\", // T_FOR\n                \"while\", // T_WHILE\n        */\n        //\n        \"with\",\n        //\n        \"withtype\",\n        \"withprop\",\n        \"withview\",\n        \"withvtype\",\n        \"withviewtype\",\n    ],\n    keywords_dlr: [\n        \"$delay\",\n        \"$ldelay\",\n        //\n        \"$arrpsz\",\n        \"$arrptrsize\",\n        //\n        \"$d2ctype\",\n        //\n        \"$effmask\",\n        \"$effmask_ntm\",\n        \"$effmask_exn\",\n        \"$effmask_ref\",\n        \"$effmask_wrt\",\n        \"$effmask_all\",\n        //\n        \"$extern\",\n        \"$extkind\",\n        \"$extype\",\n        \"$extype_struct\",\n        //\n        \"$extval\",\n        \"$extfcall\",\n        \"$extmcall\",\n        //\n        \"$literal\",\n        //\n        \"$myfilename\",\n        \"$mylocation\",\n        \"$myfunction\",\n        //\n        \"$lst\",\n        \"$lst_t\",\n        \"$lst_vt\",\n        \"$list\",\n        \"$list_t\",\n        \"$list_vt\",\n        //\n        \"$rec\",\n        \"$rec_t\",\n        \"$rec_vt\",\n        \"$record\",\n        \"$record_t\",\n        \"$record_vt\",\n        //\n        \"$tup\",\n        \"$tup_t\",\n        \"$tup_vt\",\n        \"$tuple\",\n        \"$tuple_t\",\n        \"$tuple_vt\",\n        //\n        \"$break\",\n        \"$continue\",\n        //\n        \"$raise\",\n        //\n        \"$showtype\",\n        //\n        \"$vcopyenv_v\",\n        \"$vcopyenv_vt\",\n        //\n        \"$tempenver\",\n        //\n        \"$solver_assert\",\n        \"$solver_verify\",\n    ],\n    keywords_srp: [\n        //\n        \"#if\",\n        \"#ifdef\",\n        \"#ifndef\",\n        //\n        \"#then\",\n        //\n        \"#elif\",\n        \"#elifdef\",\n        \"#elifndef\",\n        //\n        \"#else\",\n        \"#endif\",\n        //\n        \"#error\",\n        //\n        \"#prerr\",\n        \"#print\",\n        //\n        \"#assert\",\n        //\n        \"#undef\",\n        \"#define\",\n        //\n        \"#include\",\n        \"#require\",\n        //\n        \"#pragma\",\n        \"#codegen2\",\n        \"#codegen3\",\n    ],\n    irregular_keyword_list: [\n        \"val+\",\n        \"val-\",\n        \"val\",\n        \"case+\",\n        \"case-\",\n        \"case\",\n        \"addr@\",\n        \"addr\",\n        \"fold@\",\n        \"free@\",\n        \"fix@\",\n        \"fix\",\n        \"lam@\",\n        \"lam\",\n        \"llam@\",\n        \"llam\",\n        \"viewt@ype+\",\n        \"viewt@ype-\",\n        \"viewt@ype\",\n        \"viewtype+\",\n        \"viewtype-\",\n        \"viewtype\",\n        \"view+\",\n        \"view-\",\n        \"view@\",\n        \"view\",\n        \"type+\",\n        \"type-\",\n        \"type\",\n        \"vtype+\",\n        \"vtype-\",\n        \"vtype\",\n        \"vt@ype+\",\n        \"vt@ype-\",\n        \"vt@ype\",\n        \"viewt@ype+\",\n        \"viewt@ype-\",\n        \"viewt@ype\",\n        \"viewtype+\",\n        \"viewtype-\",\n        \"viewtype\",\n        \"prop+\",\n        \"prop-\",\n        \"prop\",\n        \"type+\",\n        \"type-\",\n        \"type\",\n        \"t@ype\",\n        \"t@ype+\",\n        \"t@ype-\",\n        \"abst@ype\",\n        \"abstype\",\n        \"absviewt@ype\",\n        \"absvt@ype\",\n        \"for*\",\n        \"for\",\n        \"while*\",\n        \"while\"\n    ],\n    keywords_types: [\n        'bool',\n        'double',\n        'byte',\n        'int',\n        'short',\n        'char',\n        'void',\n        'unit',\n        'long',\n        'float',\n        'string',\n        'strptr'\n    ],\n    // TODO: reference for this?\n    keywords_effects: [\n        \"0\",\n        \"fun\",\n        \"clo\",\n        \"prf\",\n        \"funclo\",\n        \"cloptr\",\n        \"cloref\",\n        \"ref\",\n        \"ntm\",\n        \"1\" // all effects\n    ],\n    operators: [\n        \"@\",\n        \"!\",\n        \"|\",\n        \"`\",\n        \":\",\n        \"$\",\n        \".\",\n        \"=\",\n        \"#\",\n        \"~\",\n        //\n        \"..\",\n        \"...\",\n        //\n        \"=>\",\n        // \"=<\", // T_EQLT\n        \"=<>\",\n        \"=/=>\",\n        \"=>>\",\n        \"=/=>>\",\n        //\n        \"<\",\n        \">\",\n        //\n        \"><\",\n        //\n        \".<\",\n        \">.\",\n        //\n        \".<>.\",\n        //\n        \"->\",\n        //\"-<\", // T_MINUSLT\n        \"-<>\",\n    ],\n    brackets: [\n        { open: ',(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '`(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '%(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '\\'(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '\\'{', close: '}', token: 'delimiter.parenthesis' },\n        { open: '@(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '@{', close: '}', token: 'delimiter.brace' },\n        { open: '@[', close: ']', token: 'delimiter.square' },\n        { open: '#[', close: ']', token: 'delimiter.square' },\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '<', close: '>', token: 'delimiter.angle' }\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    IDENTFST: /[a-zA-Z_]/,\n    IDENTRST: /[a-zA-Z0-9_'$]/,\n    symbolic: /[%&+-./:=@~`^|*!$#?<>]/,\n    digit: /[0-9]/,\n    digitseq0: /@digit*/,\n    xdigit: /[0-9A-Za-z]/,\n    xdigitseq0: /@xdigit*/,\n    INTSP: /[lLuU]/,\n    FLOATSP: /[fFlL]/,\n    fexponent: /[eE][+-]?[0-9]+/,\n    fexponent_bin: /[pP][+-]?[0-9]+/,\n    deciexp: /\\.[0-9]*@fexponent?/,\n    hexiexp: /\\.[0-9a-zA-Z]*@fexponent_bin?/,\n    irregular_keywords: /val[+-]?|case[+-]?|addr\\@?|fold\\@|free\\@|fix\\@?|lam\\@?|llam\\@?|prop[+-]?|type[+-]?|view[+-@]?|viewt@?ype[+-]?|t@?ype[+-]?|v(iew)?t@?ype[+-]?|abst@?ype|absv(iew)?t@?ype|for\\*?|while\\*?/,\n    ESCHAR: /[ntvbrfa\\\\\\?'\"\\(\\[\\{]/,\n    start: 'root',\n    // The main tokenizer for ATS/Postiats\n    // reference: https://github.com/githwxi/ATS-Postiats/blob/master/src/pats_lexing.dats\n    tokenizer: {\n        root: [\n            // lexing_blankseq0\n            { regex: /[ \\t\\r\\n]+/, action: { token: '' } },\n            // NOTE: (*) is an invalid ML-like comment!\n            { regex: /\\(\\*\\)/, action: { token: 'invalid' } },\n            { regex: /\\(\\*/, action: { token: 'comment', next: 'lexing_COMMENT_block_ml' } },\n            { regex: /\\(/, action: '@brackets' /*{ token: 'delimiter.parenthesis' }*/ },\n            { regex: /\\)/, action: '@brackets' /*{ token: 'delimiter.parenthesis' }*/ },\n            { regex: /\\[/, action: '@brackets' /*{ token: 'delimiter.bracket' }*/ },\n            { regex: /\\]/, action: '@brackets' /*{ token: 'delimiter.bracket' }*/ },\n            { regex: /\\{/, action: '@brackets' /*{ token: 'delimiter.brace' }*/ },\n            { regex: /\\}/, action: '@brackets' /*{ token: 'delimiter.brace' }*/ },\n            // lexing_COMMA\n            { regex: /,\\(/, action: '@brackets' /*{ token: 'delimiter.parenthesis' }*/ },\n            { regex: /,/, action: { token: 'delimiter.comma' } },\n            { regex: /;/, action: { token: 'delimiter.semicolon' } },\n            // lexing_AT\n            { regex: /@\\(/, action: '@brackets' /* { token: 'delimiter.parenthesis' }*/ },\n            { regex: /@\\[/, action: '@brackets' /* { token: 'delimiter.bracket' }*/ },\n            { regex: /@\\{/, action: '@brackets' /*{ token: 'delimiter.brace' }*/ },\n            // lexing_COLON\n            { regex: /:</, action: { token: 'keyword', next: '@lexing_EFFECT_commaseq0' } },\n            /*\n            lexing_DOT:\n\n            . // SYMBOLIC => lexing_IDENT_sym\n            . FLOATDOT => lexing_FLOAT_deciexp\n            . DIGIT => T_DOTINT\n            */\n            { regex: /\\.@symbolic+/, action: { token: 'identifier.sym' } },\n            // FLOATDOT case\n            { regex: /\\.@digit*@fexponent@FLOATSP*/, action: { token: 'number.float' } },\n            { regex: /\\.@digit+/, action: { token: 'number.float' } },\n            // lexing_DOLLAR:\n            // '$' IDENTFST IDENTRST* => lexing_IDENT_dlr, _ => lexing_IDENT_sym\n            {\n                regex: /\\$@IDENTFST@IDENTRST*/,\n                action: {\n                    cases: {\n                        '@keywords_dlr': { token: 'keyword.dlr' },\n                        '@default': { token: 'namespace' },\n                    }\n                }\n            },\n            // lexing_SHARP:\n            // '#' IDENTFST IDENTRST* => lexing_ident_srp, _ => lexing_IDENT_sym\n            {\n                regex: /\\#@IDENTFST@IDENTRST*/,\n                action: {\n                    cases: {\n                        '@keywords_srp': { token: 'keyword.srp' },\n                        '@default': { token: 'identifier' },\n                    }\n                }\n            },\n            // lexing_PERCENT:\n            { regex: /%\\(/, action: { token: 'delimiter.parenthesis' } },\n            { regex: /^%{(#|\\^|\\$)?/, action: { token: 'keyword', next: '@lexing_EXTCODE', nextEmbedded: 'text/javascript' } },\n            { regex: /^%}/, action: { token: 'keyword' } },\n            // lexing_QUOTE\n            { regex: /'\\(/, action: { token: 'delimiter.parenthesis' } },\n            { regex: /'\\[/, action: { token: 'delimiter.bracket' } },\n            { regex: /'\\{/, action: { token: 'delimiter.brace' } },\n            [/(')(\\\\@ESCHAR|\\\\[xX]@xdigit+|\\\\@digit+)(')/, ['string', 'string.escape', 'string']],\n            [/'[^\\\\']'/, 'string'],\n            // lexing_DQUOTE\n            [/\"/, 'string.quote', '@lexing_DQUOTE'],\n            // lexing_BQUOTE\n            { regex: /`\\(/, action: '@brackets' /* { token: 'delimiter.parenthesis' }*/ },\n            // TODO: otherwise, try lexing_IDENT_sym\n            { regex: /\\\\/, action: { token: 'punctuation' } },\n            // lexing_IDENT_alp:\n            // NOTE: (?!regex) is syntax for \"not-followed-by\" regex\n            // to resolve ambiguity such as foreach$fwork being incorrectly lexed as [for] [each$fwork]!\n            { regex: /@irregular_keywords(?!@IDENTRST)/, action: { token: 'keyword' } },\n            {\n                regex: /@IDENTFST@IDENTRST*[<!\\[]?/,\n                action: {\n                    cases: {\n                        // TODO: dynload and staload should be specially parsed\n                        // dynload whitespace+ \"special_string\"\n                        // this special string is really:\n                        //  '/' '\\\\' '.' => punctuation\n                        // ({\\$)([a-zA-Z_][a-zA-Z_0-9]*)(}) => punctuation,keyword,punctuation\n                        // [^\"] => identifier/literal\n                        '@keywords': { token: 'keyword' },\n                        '@keywords_types': { token: 'type' },\n                        '@default': { token: 'identifier' }\n                    }\n                }\n            },\n            // lexing_IDENT_sym:\n            { regex: /\\/\\/\\/\\//, action: { token: 'comment', next: '@lexing_COMMENT_rest' } },\n            { regex: /\\/\\/.*$/, action: { token: 'comment' } },\n            { regex: /\\/\\*/, action: { token: 'comment', next: '@lexing_COMMENT_block_c' } },\n            // AS-20160627: specifically for effect annotations\n            { regex: /-<|=</, action: { token: 'keyword', next: '@lexing_EFFECT_commaseq0' } },\n            {\n                regex: /@symbolic+/,\n                action: {\n                    cases: {\n                        '@operators': 'keyword',\n                        '@default': 'operator'\n                    }\n                }\n            },\n            // lexing_ZERO:\n            // FIXME: this one is quite messy/unfinished yet\n            // TODO: lexing_INT_hex\n            // - testing_hexiexp => lexing_FLOAT_hexiexp\n            // - testing_fexponent_bin => lexing_FLOAT_hexiexp\n            // - testing_intspseq0 => T_INT_hex\n            // lexing_INT_hex:\n            { regex: /0[xX]@xdigit+(@hexiexp|@fexponent_bin)@FLOATSP*/, action: { token: 'number.float' } },\n            { regex: /0[xX]@xdigit+@INTSP*/, action: { token: 'number.hex' } },\n            { regex: /0[0-7]+(?![0-9])@INTSP*/, action: { token: 'number.octal' } },\n            //{regex: /0/, action: { token: 'number' } }, // INTZERO\n            // lexing_INT_dec:\n            // - testing_deciexp => lexing_FLOAT_deciexp\n            // - testing_fexponent => lexing_FLOAT_deciexp\n            // - otherwise => intspseq0 ([0-9]*[lLuU]?)\n            { regex: /@digit+(@fexponent|@deciexp)@FLOATSP*/, action: { token: 'number.float' } },\n            { regex: /@digit@digitseq0@INTSP*/, action: { token: 'number.decimal' } },\n            // DIGIT, if followed by digitseq0, is lexing_INT_dec\n            { regex: /@digit+@INTSP*/, action: { token: 'number' } },\n        ],\n        lexing_COMMENT_block_ml: [\n            [/[^\\(\\*]+/, 'comment'],\n            [/\\(\\*/, 'comment', '@push'],\n            [/\\(\\*/, 'comment.invalid'],\n            [/\\*\\)/, 'comment', '@pop'],\n            [/\\*/, 'comment']\n        ],\n        lexing_COMMENT_block_c: [\n            [/[^\\/*]+/, 'comment'],\n            // [/\\/\\*/, 'comment', '@push' ],    // nested C-style block comments not allowed\n            // [/\\/\\*/,    'comment.invalid' ],\t// NOTE: this breaks block comments in the shape of /* //*/\n            [/\\*\\//, 'comment', '@pop'],\n            [/[\\/*]/, 'comment']\n        ],\n        lexing_COMMENT_rest: [\n            [/$/, 'comment', '@pop'],\n            [/.*/, 'comment']\n        ],\n        // NOTE: added by AS, specifically for highlighting\n        lexing_EFFECT_commaseq0: [\n            {\n                regex: /@IDENTFST@IDENTRST+|@digit+/,\n                action: {\n                    cases: {\n                        '@keywords_effects': { token: 'type.effect' },\n                        '@default': { token: 'identifier' }\n                    }\n                }\n            },\n            { regex: /,/, action: { token: 'punctuation' } },\n            { regex: />/, action: { token: '@rematch', next: '@pop' } },\n        ],\n        lexing_EXTCODE: [\n            { regex: /^%}/, action: { token: '@rematch', next: '@pop', nextEmbedded: '@pop' } },\n            { regex: /[^%]+/, action: '' },\n        ],\n        lexing_DQUOTE: [\n            { regex: /\"/, action: { token: 'string.quote', next: '@pop' } },\n            // AS-20160628: additional hi-lighting for variables in staload/dynload strings\n            { regex: /(\\{\\$)(@IDENTFST@IDENTRST*)(\\})/, action: [{ token: 'string.escape' }, { token: 'identifier' }, { token: 'string.escape' }] },\n            { regex: /\\\\$/, action: { token: 'string.escape' } },\n            { regex: /\\\\(@ESCHAR|[xX]@xdigit+|@digit+)/, action: { token: 'string.escape' } },\n            { regex: /[^\\\\\"]+/, action: { token: 'string' } }\n        ],\n    },\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.js?");

/***/ })

}]);