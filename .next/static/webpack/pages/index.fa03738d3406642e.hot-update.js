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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpeakersList; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./pages/components/Speaker.js\");\n/* harmony import */ var _modules_StateManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/StateManager */ \"./pages/modules/StateManager.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../SpeakerData */ \"./pages/SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SpeakersList(param) {\n    var showSessions = param.showSessions;\n    var _this = this;\n    _s();\n    var ref = (0,_modules_StateManager__WEBPACK_IMPORTED_MODULE_2__.useStateManager)(), speakerData = ref.speakerData, setSpeakerData = ref.setSpeakerData;\n    react__WEBPACK_IMPORTED_MODULE_4__.useEffect;\n    var onFavoriteToggle = function(speakerId) {\n        console.log(\"re-toggle\");\n        var speakerPrevData = speakerData.find(function(x) {\n            return x.id == speakerId;\n        });\n        var updatedSpeakerNewData = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, speakerPrevData), {\n            favorite: !speakerPrevData.favorite\n        });\n        var newSpeakersData = speakerData.map(function(speaker) {\n            return speaker.id == speakerId ? updatedSpeakerNewData : speaker;\n        });\n        setSpeakerData(newSpeakersData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakerData.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: function() {\n                        return onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(SpeakersList, \"WxZcR1wAlIL7QCcY0qpz3QBH8xI=\", false, function() {\n    return [\n        _modules_StateManager__WEBPACK_IMPORTED_MODULE_2__.useStateManager\n    ];\n});\n_c = SpeakersList;\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBK0I7QUFDMEI7QUFDcEI7QUFDTjtBQUVoQixTQUFTSSxZQUFZLENBQUMsS0FBYyxFQUFDO1FBQWYsWUFBYSxHQUFiLEtBQWMsQ0FBYkMsWUFBWTs7O0lBQ2hELElBQXNDSixHQUFpQixHQUFqQkEsc0VBQWUsRUFBRSxFQUFoREssV0FBVyxHQUFvQkwsR0FBaUIsQ0FBaERLLFdBQVcsRUFBRUMsY0FBYyxHQUFJTixHQUFpQixDQUFuQ00sY0FBYztJQUVsQ0osNENBQVM7SUFDVCxJQUFNSyxnQkFBZ0IsR0FBRSxTQUFDQyxTQUFTLEVBQUk7UUFDcENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUN4QixJQUFNQyxlQUFlLEdBQUdOLFdBQVcsQ0FBQ08sSUFBSSxDQUFDLFNBQVNDLENBQUMsRUFBRTtZQUFDLE9BQVFBLENBQUMsQ0FBQ0MsRUFBRSxJQUFFTixTQUFTO1FBQUEsQ0FBQyxDQUFDO1FBRS9FLElBQU1PLHFCQUFxQixHQUFHLHdLQUFJSixlQUFlO1lBQUVLLFFBQVEsRUFBRSxDQUFDTCxlQUFlLENBQUNLLFFBQVE7VUFBQztRQUV2RixJQUFNQyxlQUFlLEdBQUdaLFdBQVcsQ0FBQ2EsR0FBRyxDQUFDLFNBQUNDLE9BQU87bUJBQ2hEQSxPQUFPLENBQUNMLEVBQUUsSUFBSU4sU0FBUyxHQUFHTyxxQkFBcUIsR0FBR0ksT0FBTztTQUFBLENBQUM7UUFFMURiLGNBQWMsQ0FBQ1csZUFBZSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNDLHFCQUNBLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx5QkFBeUI7a0JBQ3RDLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxLQUFLO3NCQUNqQmhCLFdBQVcsQ0FBQ2EsR0FBRyxDQUFDLFNBQUNDLE9BQU87cUNBQ3ZCLDhEQUFDcEIsZ0RBQU87b0JBQ1JvQixPQUFPLEVBQUVBLE9BQU87b0JBQ2hCZixZQUFZLEVBQUVBLFlBQVk7b0JBQzNCRyxnQkFBZ0IsRUFBRzsrQkFBTUEsZ0JBQWdCLENBQUNZLE9BQU8sQ0FBQ0wsRUFBRSxDQUFDO3FCQUFBO21CQUh0Q0ssT0FBTyxDQUFDTCxFQUFFOzs7O3lCQUl0QjthQUFBLENBQ0g7Ozs7O2dCQUNHOzs7OztZQUNGLENBQ0w7QUFDTCxDQUFDO0dBNUJ1QlgsWUFBWTs7UUFDSUgsa0VBQWU7OztBQUQvQkcsS0FBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcz8zZTVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyIGZyb20gJy4vU3BlYWtlcidcclxuaW1wb3J0IHsgdXNlU3RhdGVNYW5hZ2VyIH0gZnJvbSAnLi4vbW9kdWxlcy9TdGF0ZU1hbmFnZXInXHJcbmltcG9ydCB7ZGF0YX0gZnJvbSAnLi8uLi9TcGVha2VyRGF0YSdcclxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BlYWtlcnNMaXN0KHtzaG93U2Vzc2lvbnN9KXtcclxuICBjb25zdCB7c3BlYWtlckRhdGEsIHNldFNwZWFrZXJEYXRhfSA9IHVzZVN0YXRlTWFuYWdlcigpO1xyXG5cclxuICB1c2VFZmZlY3RcclxuICBjb25zdCBvbkZhdm9yaXRlVG9nZ2xlID0oc3BlYWtlcklkKSA9PntcclxuICAgIGNvbnNvbGUubG9nKFwicmUtdG9nZ2xlXCIpXHJcbiAgICBjb25zdCBzcGVha2VyUHJldkRhdGEgPSBzcGVha2VyRGF0YS5maW5kKGZ1bmN0aW9uKHgpIHtyZXR1cm4gIHguaWQ9PXNwZWFrZXJJZH0pO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWRTcGVha2VyTmV3RGF0YSA9IHsuLi5zcGVha2VyUHJldkRhdGEsIGZhdm9yaXRlOiAhc3BlYWtlclByZXZEYXRhLmZhdm9yaXRlfVxyXG5cclxuICAgIGNvbnN0IG5ld1NwZWFrZXJzRGF0YSA9IHNwZWFrZXJEYXRhLm1hcCgoc3BlYWtlcikgPT4gXHJcbiAgICBzcGVha2VyLmlkID09IHNwZWFrZXJJZCA/IHVwZGF0ZWRTcGVha2VyTmV3RGF0YSA6IHNwZWFrZXIpO1xyXG5cclxuICAgIHNldFNwZWFrZXJEYXRhKG5ld1NwZWFrZXJzRGF0YSk7XHJcbiAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIHtzcGVha2VyRGF0YS5tYXAoKHNwZWFrZXIpID0+IFxyXG4gICAgICAgICAgPFNwZWFrZXIga2V5PXtzcGVha2VyLmlkfSBcclxuICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9IFxyXG4gICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9IFxyXG4gICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlID17KCkgPT4gb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKX0gXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiU3BlYWtlciIsInVzZVN0YXRlTWFuYWdlciIsImRhdGEiLCJ1c2VFZmZlY3QiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJzcGVha2VyRGF0YSIsInNldFNwZWFrZXJEYXRhIiwib25GYXZvcml0ZVRvZ2dsZSIsInNwZWFrZXJJZCIsImNvbnNvbGUiLCJsb2ciLCJzcGVha2VyUHJldkRhdGEiLCJmaW5kIiwieCIsImlkIiwidXBkYXRlZFNwZWFrZXJOZXdEYXRhIiwiZmF2b3JpdGUiLCJuZXdTcGVha2Vyc0RhdGEiLCJtYXAiLCJzcGVha2VyIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/SpeakersList.js\n"));

/***/ })

});