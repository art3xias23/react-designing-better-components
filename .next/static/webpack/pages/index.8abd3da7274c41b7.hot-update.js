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

/***/ "./pages/components/SpeakerInfo.js":
/*!*****************************************!*\
  !*** ./pages/components/SpeakerInfo.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpeakerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SpeakerFavorite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerFavorite */ \"./pages/components/SpeakerFavorite.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction SpeakerInfo(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.favorite), favorite = ref[0], setFavorite = ref[1];\n    var onFavoriteToggle = function(event) {\n        console.log(\"Toggled favorite\");\n        console.dir(event);\n        setFavorite(event.currentTarget.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        props.first,\n                        \" \",\n                        props.last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakerInfo.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakerInfo.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerFavorite__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                favorite: favorite,\n                onFavoriteToggle: onFavoriteToggle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakerInfo.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: props.bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakerInfo.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakerInfo.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: props.company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakerInfo.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakerInfo.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakerInfo.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: props.handle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakerInfo.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakerInfo.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakerInfo.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakerInfo.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakerInfo.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(SpeakerInfo, \"M5gjJ2IaB8gfbtoG+lX9Ph3zS6o=\");\n_c = SpeakerInfo;\nvar _c;\n$RefreshReg$(_c, \"SpeakerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NwZWFrZXJJbmZvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUE4QjtBQUNpQjtBQUVoQyxTQUFTRSxXQUFXLENBQUNDLEtBQUssRUFBRTs7SUFDekMsSUFBZ0NILEdBQXdCLEdBQXhCQSwrQ0FBUSxDQUFDRyxLQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFqREEsUUFBUSxHQUFpQkosR0FBd0IsR0FBekMsRUFBRUssV0FBVyxHQUFJTCxHQUF3QixHQUE1QjtJQUM1QixJQUFNTSxnQkFBZ0IsR0FBRSxTQUFDQyxLQUFLLEVBQUk7UUFDaENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO1FBQy9CRCxPQUFPLENBQUNFLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDO1FBQ2xCRixXQUFXLENBQUNFLEtBQUssQ0FBQ0ksYUFBYSxDQUFDQyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUNELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxjQUFjOzswQkFDM0IsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxxQ0FBcUM7MEJBQ2xELDRFQUFDQyxJQUFFO29CQUFDRCxTQUFTLEVBQUMscUJBQXFCOzt3QkFDaENYLEtBQUssQ0FBQ2EsS0FBSzt3QkFBQyxHQUFDO3dCQUFDYixLQUFLLENBQUNjLElBQUk7Ozs7Ozt3QkFDdEI7Ozs7O29CQUNEOzBCQUNOLDhEQUFDaEIsd0RBQWU7Z0JBQUNHLFFBQVEsRUFBRUEsUUFBUTtnQkFBRUUsZ0JBQWdCLEVBQUVBLGdCQUFnQjs7Ozs7b0JBQUc7MEJBQzFFLDhEQUFDTyxLQUFHOztrQ0FDRiw4REFBQ0ssR0FBQzt3QkFBQ0osU0FBUyxFQUFDLGtCQUFrQjtrQ0FDNUJYLEtBQUssQ0FBQ2dCLEdBQUc7Ozs7OzRCQUNSO2tDQUNKLDhEQUFDTixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsNkJBQTZCOzswQ0FDMUMsOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxTQUFTOztrREFDdEIsOERBQUNNLElBQUU7a0RBQUMsU0FBTzs7Ozs7NENBQUs7a0RBQ2hCLDhEQUFDQyxJQUFFO2tEQUFFbEIsS0FBSyxDQUFDbUIsT0FBTzs7Ozs7NENBQU07Ozs7OztvQ0FDcEI7MENBQ04sOERBQUNULEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxTQUFTOztrREFDdEIsOERBQUNNLElBQUU7a0RBQUMsU0FBTzs7Ozs7NENBQUs7a0RBQ2hCLDhEQUFDQyxJQUFFO2tEQUFFbEIsS0FBSyxDQUFDb0IsTUFBTTs7Ozs7NENBQU07Ozs7OztvQ0FDbkI7Ozs7Ozs0QkFDRjs7Ozs7O29CQUNGOzs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQztHQWhDdUJyQixXQUFXO0FBQVhBLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TcGVha2VySW5mby5qcz82ZTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3BlYWtlckZhdm9yaXRlIGZyb20gJy4vU3BlYWtlckZhdm9yaXRlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BlYWtlckluZm8ocHJvcHMpIHtcclxuICBjb25zdCBbZmF2b3JpdGUsIHNldEZhdm9yaXRlXSA9IHVzZVN0YXRlKHByb3BzLmZhdm9yaXRlKTtcclxuICBjb25zdCBvbkZhdm9yaXRlVG9nZ2xlID0oZXZlbnQpID0+e1xyXG4gICAgY29uc29sZS5sb2coXCJUb2dnbGVkIGZhdm9yaXRlXCIpXHJcbiAgICBjb25zb2xlLmRpcihldmVudClcclxuICAgIHNldEZhdm9yaXRlKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAgICAgIHtwcm9wcy5maXJzdH0ge3Byb3BzLmxhc3R9XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxTcGVha2VyRmF2b3JpdGUgZmF2b3JpdGU9e2Zhdm9yaXRlfSBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfS8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAge3Byb3BzLmJpb31cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueVwiPlxyXG4gICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XHJcbiAgICAgICAgICAgIDxoNj57cHJvcHMuY29tcGFueX08L2g2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cclxuICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxyXG4gICAgICAgICAgICA8aDY+e3Byb3BzLmhhbmRsZX08L2g2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTcGVha2VyRmF2b3JpdGUiLCJTcGVha2VySW5mbyIsInByb3BzIiwiZmF2b3JpdGUiLCJzZXRGYXZvcml0ZSIsIm9uRmF2b3JpdGVUb2dnbGUiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJkaXIiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImZpcnN0IiwibGFzdCIsInAiLCJiaW8iLCJoNSIsImg2IiwiY29tcGFueSIsImhhbmRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/SpeakerInfo.js\n"));

/***/ })

});