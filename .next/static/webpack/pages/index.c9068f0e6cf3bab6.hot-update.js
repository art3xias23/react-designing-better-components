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

/***/ "./pages/components/Speaker.js":
/*!*************************************!*\
  !*** ./pages/components/Speaker.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Speaker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerSessions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakerSessions */ \"./pages/components/SpeakerSessions.js\");\n/* harmony import */ var _SpeakerInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerInfo */ \"./pages/components/SpeakerInfo.js\");\n/* harmony import */ var _SpeakerPicture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpeakerPicture */ \"./pages/components/SpeakerPicture.js\");\n\n\n\n\nfunction Speaker(param) {\n    var _speaker = param.speaker, id = _speaker.id, first = _speaker.first, last = _speaker.last, bio = _speaker.bio, company = _speaker.company, twitterHandle = _speaker.twitterHandle, favorite = _speaker.favorite, sessions = _speaker.sessions, showSessions = param.showSessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerPicture__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\Speaker.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        first: first,\n                        last: last,\n                        bio: bio,\n                        company: company,\n                        handle: twitterHandle,\n                        fav: favorite\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\Speaker.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\Speaker.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerSessions__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: sessions[0].title,\n                room: sessions[0].room.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\Speaker.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\Speaker.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Speaker;\nvar _c;\n$RefreshReg$(_c, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NwZWFrZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFDUjtBQUNNO0FBQy9CLFNBQVNHLE9BQU8sQ0FBQyxLQUUvQixFQUFFO21CQUY2QixLQUUvQixDQURDQyxPQUFPLEVBQUlDLEVBQUUsWUFBRkEsRUFBRSxFQUFFQyxLQUFLLFlBQUxBLEtBQUssRUFBRUMsSUFBSSxZQUFKQSxJQUFJLEVBQUVDLEdBQUcsWUFBSEEsR0FBRyxFQUFFQyxPQUFPLFlBQVBBLE9BQU8sRUFBRUMsYUFBYSxZQUFiQSxhQUFhLEVBQUVDLFFBQVEsWUFBUkEsUUFBUSxFQUFFQyxRQUFRLFlBQVJBLFFBQVEsRUFBR0MsWUFBWSxHQUQ1RCxLQUUvQixDQUQrRUEsWUFBWTtJQUUxRixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsMkRBQTJEOzswQkFDeEUsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQywyQkFBMkI7O2tDQUN4Qyw4REFBQ2IsdURBQWM7d0JBQUNHLEVBQUUsRUFBRUEsRUFBRTt3QkFBRUMsS0FBSyxFQUFFQSxLQUFLO3dCQUFFQyxJQUFJLEVBQUVBLElBQUk7Ozs7OzRCQUFJO2tDQUNwRCw4REFBQ04sb0RBQVc7d0JBQ1ZLLEtBQUssRUFBRUEsS0FBSzt3QkFDWkMsSUFBSSxFQUFFQSxJQUFJO3dCQUNWQyxHQUFHLEVBQUVBLEdBQUc7d0JBQ1JDLE9BQU8sRUFBRUEsT0FBTzt3QkFDaEJPLE1BQU0sRUFBRU4sYUFBYTt3QkFDckJPLEdBQUcsRUFBRU4sUUFBUTs7Ozs7NEJBQ2I7Ozs7OztvQkFDRTswQkFFTiw4REFBQ1gsd0RBQWU7Z0JBQUNrQixLQUFLLEVBQUVOLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ00sS0FBSztnQkFBRUMsSUFBSSxFQUFFUCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNPLElBQUksQ0FBQ0MsSUFBSTs7Ozs7b0JBQUk7Ozs7OztZQUN0RSxDQUNOO0FBQ0osQ0FBQztBQXBCdUJqQixLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvU3BlYWtlci5qcz81ZWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyU2Vzc2lvbnMgZnJvbSBcIi4vU3BlYWtlclNlc3Npb25zXCI7XHJcbmltcG9ydCBTcGVha2VySW5mbyBmcm9tIFwiLi9TcGVha2VySW5mb1wiO1xyXG5pbXBvcnQgU3BlYWtlclBpY3R1cmUgZnJvbSBcIi4vU3BlYWtlclBpY3R1cmVcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BlYWtlcih7XHJcbiAgc3BlYWtlcjogeyBpZCwgZmlyc3QsIGxhc3QsIGJpbywgY29tcGFueSwgdHdpdHRlckhhbmRsZSwgZmF2b3JpdGUsIHNlc3Npb25zIH0sc2hvd1Nlc3Npb25zXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgPFNwZWFrZXJQaWN0dXJlIGlkPXtpZH0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSAvPlxyXG4gICAgICAgIDxTcGVha2VySW5mb1xyXG4gICAgICAgICAgZmlyc3Q9e2ZpcnN0fVxyXG4gICAgICAgICAgbGFzdD17bGFzdH1cclxuICAgICAgICAgIGJpbz17YmlvfVxyXG4gICAgICAgICAgY29tcGFueT17Y29tcGFueX1cclxuICAgICAgICAgIGhhbmRsZT17dHdpdHRlckhhbmRsZX1cclxuICAgICAgICAgIGZhdj17ZmF2b3JpdGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8U3BlYWtlclNlc3Npb25zIHRpdGxlPXtzZXNzaW9uc1swXS50aXRsZX0gcm9vbT17c2Vzc2lvbnNbMF0ucm9vbS5uYW1lfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiU3BlYWtlclNlc3Npb25zIiwiU3BlYWtlckluZm8iLCJTcGVha2VyUGljdHVyZSIsIlNwZWFrZXIiLCJzcGVha2VyIiwiaWQiLCJmaXJzdCIsImxhc3QiLCJiaW8iLCJjb21wYW55IiwidHdpdHRlckhhbmRsZSIsImZhdm9yaXRlIiwic2Vzc2lvbnMiLCJzaG93U2Vzc2lvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoYW5kbGUiLCJmYXYiLCJ0aXRsZSIsInJvb20iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Speaker.js\n"));

/***/ })

});