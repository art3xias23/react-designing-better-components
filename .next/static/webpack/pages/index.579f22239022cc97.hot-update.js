"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/SpeakersToolbar.js":
/*!*********************************************!*\
  !*** ./pages/components/SpeakersToolbar.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_StateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../modules/StateManager */ \"./pages/modules/StateManager.js\");\n\n\nfunction SpeakersToolbar(param) {\n    var theme = param.theme, setTheme = param.setTheme;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"toolbar dark-theme-header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-content-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"toolrow d-flex flex-column flex-lg-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Show Sessions\\xa0\\xa0\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 11,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"fav\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            checked: showSessions,\n                                            onChange: function(event) {\n                                                return setShowSessions(event.target.checked);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersToolbar.js\",\n                                            lineNumber: 13,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"switch\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersToolbar.js\",\n                                            lineNumber: 14,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 12,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersToolbar.js\",\n                            lineNumber: 10,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row ml-sm-5 ml-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Theme\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"dropdown\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"form-control theme\",\n                                        value: theme,\n                                        onChange: function(event) {\n                                            return setTheme(event.target.value);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"light\",\n                                                children: \"Light\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersToolbar.js\",\n                                                lineNumber: 21,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"dark\",\n                                                children: \"Dark\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersToolbar.js\",\n                                                lineNumber: 22,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersToolbar.js\",\n                                        lineNumber: 20,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersToolbar.js\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersToolbar.js\",\n                    lineNumber: 9,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersToolbar.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersToolbar.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersToolbar.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = SpeakersToolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersToolbar);\nvar _c;\n$RefreshReg$(_c, \"SpeakersToolbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NwZWFrZXJzVG9vbGJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBeUQ7QUFFekQsU0FBU0MsZUFBZSxDQUFDLEtBQWlCLEVBQUU7UUFBbEJDLEtBQUssR0FBTixLQUFpQixDQUFoQkEsS0FBSyxFQUFFQyxRQUFRLEdBQWhCLEtBQWlCLENBQVRBLFFBQVE7SUFFdkMscUJBQ0UsOERBQUNDLFNBQU87UUFBQ0MsU0FBUyxFQUFDLDJCQUEyQjtrQkFDNUMsNEVBQUNDLEtBQUc7WUFBQ0QsU0FBUyxFQUFDLFdBQVc7c0JBQ3hCLDRFQUFDQyxLQUFHO2dCQUFDRCxTQUFTLEVBQUMseUJBQXlCOzBCQUN0Qyw0RUFBQ0UsSUFBRTtvQkFBQ0YsU0FBUyxFQUFDLHdDQUF3Qzs7c0NBQ3BELDhEQUFDRyxJQUFFOzRCQUFDSCxTQUFTLEVBQUMsZ0NBQWdDOzs4Q0FDNUMsOERBQUNJLEdBQUM7OENBQUMsdUJBQXlCOzs7Ozt3Q0FBSTs4Q0FDaEMsOERBQUNDLE9BQUs7b0NBQUNMLFNBQVMsRUFBQyxLQUFLOztzREFDcEIsOERBQUNNLE9BQUs7NENBQUNDLElBQUksRUFBQyxVQUFVOzRDQUFDQyxPQUFPLEVBQUVDLFlBQVk7NENBQUVDLFFBQVEsRUFBRSxTQUFDQyxLQUFLO3VEQUFLQyxlQUFlLENBQUNELEtBQUssQ0FBQ0UsTUFBTSxDQUFDTCxPQUFPLENBQUM7NkNBQUE7Ozs7O2dEQUFJO3NEQUM1Ryw4REFBQ00sTUFBSTs0Q0FBQ2QsU0FBUyxFQUFDLFFBQVE7Ozs7O2dEQUFROzs7Ozs7d0NBQzFCOzs7Ozs7Z0NBQ0w7c0NBQ0wsOERBQUNHLElBQUU7NEJBQUNILFNBQVMsRUFBQyw2Q0FBNkM7OzhDQUN6RCw4REFBQ2UsUUFBTTs4Q0FBQyxPQUFLOzs7Ozt3Q0FBUzs4Q0FDdEIsOERBQUNWLE9BQUs7b0NBQUNMLFNBQVMsRUFBQyxVQUFVOzhDQUN6Qiw0RUFBQ2dCLFFBQU07d0NBQUNoQixTQUFTLEVBQUMsb0JBQW9CO3dDQUFDaUIsS0FBSyxFQUFFcEIsS0FBSzt3Q0FBRWEsUUFBUSxFQUFFLFNBQUNDLEtBQUs7bURBQUtiLFFBQVEsQ0FBQ2EsS0FBSyxDQUFDRSxNQUFNLENBQUNJLEtBQUssQ0FBQzt5Q0FBQTs7MERBQ3BHLDhEQUFDQyxRQUFNO2dEQUFDRCxLQUFLLEVBQUMsT0FBTzswREFBQyxPQUFLOzs7OztvREFBUzswREFDcEMsOERBQUNDLFFBQU07Z0RBQUNELEtBQUssRUFBQyxNQUFNOzBEQUFDLE1BQUk7Ozs7O29EQUFTOzs7Ozs7NENBQzNCOzs7Ozt3Q0FDSDs7Ozs7O2dDQUNMOzs7Ozs7d0JBQ0Y7Ozs7O29CQUNEOzs7OztnQkFDRjs7Ozs7WUFDRSxDQUNWO0FBQ0osQ0FBQztBQTVCUXJCLEtBQUFBLGVBQWU7QUE4QnhCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TcGVha2Vyc1Rvb2xiYXIuanM/ZjQ1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlTWFuYWdlcn0gZnJvbSAnLi8uLi9tb2R1bGVzL1N0YXRlTWFuYWdlcidcblxuZnVuY3Rpb24gU3BlYWtlcnNUb29sYmFyKHt0aGVtZSwgc2V0VGhlbWV9KSB7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b29sYmFyIGRhcmstdGhlbWUtaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvb2xyb3cgZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbGctcm93XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCI+XG4gICAgICAgICAgICAgIDxiPlNob3cgU2Vzc2lvbnMmbmJzcDsmbmJzcDs8L2I+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmYXZcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2hvd1Nlc3Npb25zfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTaG93U2Vzc2lvbnMoZXZlbnQudGFyZ2V0LmNoZWNrZWQpfSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93IG1sLXNtLTUgbWwtMFwiPlxuICAgICAgICAgICAgICA8c3Ryb25nPlRoZW1lPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHRoZW1lXCIgdmFsdWU9e3RoZW1lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRUaGVtZShldmVudC50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaWdodFwiPkxpZ2h0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPkRhcms8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzVG9vbGJhcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZU1hbmFnZXIiLCJTcGVha2Vyc1Rvb2xiYXIiLCJ0aGVtZSIsInNldFRoZW1lIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInVsIiwibGkiLCJiIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwic2hvd1Nlc3Npb25zIiwib25DaGFuZ2UiLCJldmVudCIsInNldFNob3dTZXNzaW9ucyIsInRhcmdldCIsInNwYW4iLCJzdHJvbmciLCJzZWxlY3QiLCJ2YWx1ZSIsIm9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/SpeakersToolbar.js\n"));

/***/ })

});