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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Speaker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerSessions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakerSessions */ \"./pages/components/SpeakerSessions.js\");\n/* harmony import */ var _SpeakerInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerInfo */ \"./pages/components/SpeakerInfo.js\");\n/* harmony import */ var _SpeakerPicture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpeakerPicture */ \"./pages/components/SpeakerPicture.js\");\n\n\n\n\nfunction Speaker(param) {\n    var _speaker = param.speaker, id = _speaker.id, first = _speaker.first, last = _speaker.last, bio = _speaker.bio, company = _speaker.company, twitterHandle = _speaker.twitterHandle, favorite = _speaker.favorite, sessions = _speaker.sessions, showSessions = param.showSessions, onFavoriteToggle = param.onFavoriteToggle;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerPicture__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\Speaker.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        first: first,\n                        last: last,\n                        bio: bio,\n                        company: company,\n                        handle: twitterHandle,\n                        favorite: favorite,\n                        onFavoriteToggle: onFavoriteToggle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\Speaker.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\Speaker.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            showSessions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerSessions__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: sessions[0].title,\n                room: sessions[0].room.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\Speaker.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\Speaker.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = Speaker;\nvar _c;\n$RefreshReg$(_c, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NwZWFrZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFDUjtBQUNNO0FBQy9CLFNBQVNHLE9BQU8sQ0FBQyxLQUkvQixFQUFFO21CQUo2QixLQUkvQixDQUhDQyxPQUFPLEVBQUlDLEVBQUUsWUFBRkEsRUFBRSxFQUFFQyxLQUFLLFlBQUxBLEtBQUssRUFBRUMsSUFBSSxZQUFKQSxJQUFJLEVBQUVDLEdBQUcsWUFBSEEsR0FBRyxFQUFFQyxPQUFPLFlBQVBBLE9BQU8sRUFBRUMsYUFBYSxZQUFiQSxhQUFhLEVBQUVDLFFBQVEsWUFBUkEsUUFBUSxFQUFFQyxRQUFRLFlBQVJBLFFBQVEsRUFDM0VDLFlBQVksR0FGa0IsS0FJL0IsQ0FGQ0EsWUFBWSxFQUNaQyxnQkFBZ0IsR0FIYyxLQUkvQixDQURDQSxnQkFBZ0I7SUFFaEIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDJEQUEyRDs7MEJBQ3hFLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMkJBQTJCOztrQ0FDeEMsOERBQUNkLHVEQUFjO3dCQUFDRyxFQUFFLEVBQUVBLEVBQUU7d0JBQUVDLEtBQUssRUFBRUEsS0FBSzt3QkFBRUMsSUFBSSxFQUFFQSxJQUFJOzs7Ozs0QkFBSTtrQ0FDcEQsOERBQUNOLG9EQUFXO3dCQUNWSyxLQUFLLEVBQUVBLEtBQUs7d0JBQ1pDLElBQUksRUFBRUEsSUFBSTt3QkFDVkMsR0FBRyxFQUFFQSxHQUFHO3dCQUNSQyxPQUFPLEVBQUVBLE9BQU87d0JBQ2hCUSxNQUFNLEVBQUVQLGFBQWE7d0JBQ3JCQyxRQUFRLEVBQUVBLFFBQVE7d0JBQ2xCRyxnQkFBZ0IsRUFBR0EsZ0JBQWdCOzs7Ozs0QkFDbkM7Ozs7OztvQkFDRTtZQUNMRCxZQUFZLGtCQUNiLDhEQUFDYix3REFBZTtnQkFBQ2tCLEtBQUssRUFBRU4sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDTSxLQUFLO2dCQUFFQyxJQUFJLEVBQUVQLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ08sSUFBSSxDQUFDQyxJQUFJOzs7OztvQkFBSTs7Ozs7O1lBQ3RFLENBQ047QUFDSixDQUFDO0FBdkJ1QmpCLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TcGVha2VyLmpzPzVlYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXJTZXNzaW9ucyBmcm9tIFwiLi9TcGVha2VyU2Vzc2lvbnNcIjtcclxuaW1wb3J0IFNwZWFrZXJJbmZvIGZyb20gXCIuL1NwZWFrZXJJbmZvXCI7XHJcbmltcG9ydCBTcGVha2VyUGljdHVyZSBmcm9tIFwiLi9TcGVha2VyUGljdHVyZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGVha2VyKHtcclxuICBzcGVha2VyOiB7IGlkLCBmaXJzdCwgbGFzdCwgYmlvLCBjb21wYW55LCB0d2l0dGVySGFuZGxlLCBmYXZvcml0ZSwgc2Vzc2lvbnMgfSxcclxuICBzaG93U2Vzc2lvbnMsXHJcbiAgb25GYXZvcml0ZVRvZ2dsZVxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxyXG4gICAgICAgIDxTcGVha2VyUGljdHVyZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cclxuICAgICAgICA8U3BlYWtlckluZm9cclxuICAgICAgICAgIGZpcnN0PXtmaXJzdH1cclxuICAgICAgICAgIGxhc3Q9e2xhc3R9XHJcbiAgICAgICAgICBiaW89e2Jpb31cclxuICAgICAgICAgIGNvbXBhbnk9e2NvbXBhbnl9XHJcbiAgICAgICAgICBoYW5kbGU9e3R3aXR0ZXJIYW5kbGV9XHJcbiAgICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XHJcbiAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlID17b25GYXZvcml0ZVRvZ2dsZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dTZXNzaW9ucyAmJlxyXG4gICAgICA8U3BlYWtlclNlc3Npb25zIHRpdGxlPXtzZXNzaW9uc1swXS50aXRsZX0gcm9vbT17c2Vzc2lvbnNbMF0ucm9vbS5uYW1lfSAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlNwZWFrZXJTZXNzaW9ucyIsIlNwZWFrZXJJbmZvIiwiU3BlYWtlclBpY3R1cmUiLCJTcGVha2VyIiwic3BlYWtlciIsImlkIiwiZmlyc3QiLCJsYXN0IiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJmYXZvcml0ZSIsInNlc3Npb25zIiwic2hvd1Nlc3Npb25zIiwib25GYXZvcml0ZVRvZ2dsZSIsImRpdiIsImNsYXNzTmFtZSIsImhhbmRsZSIsInRpdGxlIiwicm9vbSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Speaker.js\n"));

/***/ })

});