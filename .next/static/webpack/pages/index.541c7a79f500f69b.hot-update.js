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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakerData */ \"./pages/SpeakerData.js\");\n/* harmony import */ var _components_Session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Session */ \"./pages/components/Session.js\");\n/* harmony import */ var _components_Speaker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Speaker */ \"./pages/components/Speaker.js\");\n/* harmony import */ var _components_Picture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Picture */ \"./pages/components/Picture.js\");\nvar _this = undefined;\n\n\n\n\n\nvar IndexPage = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: [\n                _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function(speaker) {\n                    var id = speaker.id, bio = speaker.bio, first = speaker.first, last = speaker.last, favorite = speaker.favorite, twitterHandle = speaker.twitterHandle, company = speaker.company, sessions = speaker.sessions;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card card-height p-4 mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Picture__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        id: id,\n                                        first: first,\n                                        last: last\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\index.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Speaker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        first: first,\n                                        last: last,\n                                        bio: bio,\n                                        company: company,\n                                        handle: twitterHandle,\n                                        fav: favorite\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\index.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\index.js\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerSessions, {\n                                title: sessions[0].title,\n                                room: sessions[0].room.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\index.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, speaker.id, true, {\n                        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\index.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this);\n                }),\n                \";\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\index.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXFDO0FBQ087QUFDRztBQUNHO0FBRWxELElBQU1JLFNBQVMsR0FBRyxXQUFNO0lBQ3RCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx5QkFBeUI7a0JBQ3RDLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxLQUFLOztnQkFDakJOLGtEQUFRLENBQUMsU0FBVVEsT0FBTyxFQUFFO29CQUMzQixJQUNFQyxFQUFFLEdBUUFELE9BQU8sQ0FSVEMsRUFBRSxFQUNGQyxHQUFHLEdBT0RGLE9BQU8sQ0FQVEUsR0FBRyxFQUNIQyxLQUFLLEdBTUhILE9BQU8sQ0FOVEcsS0FBSyxFQUNMQyxJQUFJLEdBS0ZKLE9BQU8sQ0FMVEksSUFBSSxFQUNKQyxRQUFRLEdBSU5MLE9BQU8sQ0FKVEssUUFBUSxFQUNSQyxhQUFhLEdBR1hOLE9BQU8sQ0FIVE0sYUFBYSxFQUNiQyxPQUFPLEdBRUxQLE9BQU8sQ0FGVE8sT0FBTyxFQUNQQyxRQUFRLEdBQ05SLE9BQU8sQ0FEVFEsUUFBUTtvQkFFVixxQkFDRSw4REFBQ1gsS0FBRzt3QkFFRkMsU0FBUyxFQUFDLDJEQUEyRDs7MENBRXJFLDhEQUFDRCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsMkJBQTJCOztrREFDeEMsOERBQUNILDJEQUFjO3dDQUFDTSxFQUFFLEVBQUVBLEVBQUU7d0NBQUVFLEtBQUssRUFBRUEsS0FBSzt3Q0FBRUMsSUFBSSxFQUFFQSxJQUFJOzs7Ozs0Q0FBSTtrREFDcEQsOERBQUNWLDJEQUFXO3dDQUNWUyxLQUFLLEVBQUVBLEtBQUs7d0NBQ1pDLElBQUksRUFBRUEsSUFBSTt3Q0FDVkYsR0FBRyxFQUFFQSxHQUFHO3dDQUNSSyxPQUFPLEVBQUVBLE9BQU87d0NBQ2hCRSxNQUFNLEVBQUVILGFBQWE7d0NBQ3JCSSxHQUFHLEVBQUVMLFFBQVE7Ozs7OzRDQUNiOzs7Ozs7b0NBQ0U7MENBQ04sOERBQUNNLGVBQWU7Z0NBQ2RDLEtBQUssRUFBRUosUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDSSxLQUFLO2dDQUN4QkMsSUFBSSxFQUFFTCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNLLElBQUksQ0FBQ0MsSUFBSTs7Ozs7b0NBQzNCOzt1QkFqQkdkLE9BQU8sQ0FBQ0MsRUFBRTs7Ozs0QkFrQlgsQ0FDTjtnQkFDSixDQUFDLENBQUM7Z0JBQUMsR0FFTDs7Ozs7O2lCQUFNOzs7OzthQUNGLENBQ047QUFDSixDQUFDO0FBMUNLTCxLQUFBQSxTQUFTO0FBNENmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL2NvbXBvbmVudHMvU2Vzc2lvblwiO1xyXG5pbXBvcnQgU3BlYWtlckluZm8gZnJvbSBcIi4vY29tcG9uZW50cy9TcGVha2VyXCI7XHJcbmltcG9ydCBTcGVha2VyUGljdHVyZSBmcm9tIFwiLi9jb21wb25lbnRzL1BpY3R1cmVcIjtcclxuXHJcbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIHtkYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgYmlvLFxyXG4gICAgICAgICAgICBmaXJzdCxcclxuICAgICAgICAgICAgbGFzdCxcclxuICAgICAgICAgICAgZmF2b3JpdGUsXHJcbiAgICAgICAgICAgIHR3aXR0ZXJIYW5kbGUsXHJcbiAgICAgICAgICAgIGNvbXBhbnksXHJcbiAgICAgICAgICAgIHNlc3Npb25zLFxyXG4gICAgICAgICAgfSA9IHNwZWFrZXI7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtzcGVha2VyLmlkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxTcGVha2VyUGljdHVyZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cclxuICAgICAgICAgICAgICAgIDxTcGVha2VySW5mb1xyXG4gICAgICAgICAgICAgICAgICBmaXJzdD17Zmlyc3R9XHJcbiAgICAgICAgICAgICAgICAgIGxhc3Q9e2xhc3R9XHJcbiAgICAgICAgICAgICAgICAgIGJpbz17YmlvfVxyXG4gICAgICAgICAgICAgICAgICBjb21wYW55PXtjb21wYW55fVxyXG4gICAgICAgICAgICAgICAgICBoYW5kbGU9e3R3aXR0ZXJIYW5kbGV9XHJcbiAgICAgICAgICAgICAgICAgIGZhdj17ZmF2b3JpdGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxTcGVha2VyU2Vzc2lvbnNcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtzZXNzaW9uc1swXS50aXRsZX1cclxuICAgICAgICAgICAgICAgIHJvb209e3Nlc3Npb25zWzBdLnJvb20ubmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgO1xyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJkYXRhIiwiU2Vzc2lvbnMiLCJTcGVha2VySW5mbyIsIlNwZWFrZXJQaWN0dXJlIiwiSW5kZXhQYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwic3BlYWtlciIsImlkIiwiYmlvIiwiZmlyc3QiLCJsYXN0IiwiZmF2b3JpdGUiLCJ0d2l0dGVySGFuZGxlIiwiY29tcGFueSIsInNlc3Npb25zIiwiaGFuZGxlIiwiZmF2IiwiU3BlYWtlclNlc3Npb25zIiwidGl0bGUiLCJyb29tIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});