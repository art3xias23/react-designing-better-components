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

/***/ "./pages/components/SpeakersList.js":
/*!******************************************!*\
  !*** ./pages/components/SpeakersList.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpeakersList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./pages/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SpeakerData */ \"./pages/SpeakerData.js\");\n\n\n\nfunction SpeakersList(param) {\n    var showSessions = param.showSessions;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 8,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = SpeakersList;\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQStCO0FBQ0k7QUFDcEIsU0FBU0UsWUFBWSxDQUFDLEtBQWMsRUFBQztRQUFmLFlBQWEsR0FBYixLQUFjLENBQWJDLFlBQVk7O0lBQzlDLHFCQUNBLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx5QkFBeUI7a0JBQ3RDLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxLQUFLO3NCQUNqQkosa0RBQVEsQ0FBQyxTQUFDTSxPQUFPO3FDQUNoQiw4REFBQ1AsZ0RBQU87b0JBQWtCTyxPQUFPLEVBQUVBLE9BQU87b0JBQUVKLFlBQVksRUFBRUEsWUFBWTttQkFBeERJLE9BQU8sQ0FBQ0MsRUFBRTs7Ozt5QkFBa0Q7YUFBQSxDQUMzRTs7Ozs7Z0JBQ0c7Ozs7O1lBQ0YsQ0FDTDtBQUNMLENBQUM7QUFWdUJOLEtBQUFBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanM/M2U1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tICcuL1NwZWFrZXInXHJcbmltcG9ydCB7ZGF0YX0gZnJvbSAnLi4vU3BlYWtlckRhdGEnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwZWFrZXJzTGlzdCh7c2hvd1Nlc3Npb25zfSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAge2RhdGEubWFwKChzcGVha2VyKSA9PiBcclxuICAgICAgICAgIDxTcGVha2VyIGtleT17c3BlYWtlci5pZH0gc3BlYWtlcj17c3BlYWtlcn0gc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJTcGVha2VyIiwiZGF0YSIsIlNwZWFrZXJzTGlzdCIsInNob3dTZXNzaW9ucyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInNwZWFrZXIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/SpeakersList.js\n"));

/***/ })

});