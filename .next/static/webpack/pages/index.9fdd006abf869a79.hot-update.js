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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpeakersList; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./pages/components/Speaker.js\");\n/* harmony import */ var _modules_StateManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/StateManager */ \"./pages/modules/StateManager.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../SpeakerData */ \"./pages/SpeakerData.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SpeakersList(param) {\n    var showSessions = param.showSessions;\n    var _this = this;\n    _s();\n    var ref = (0,_modules_StateManager__WEBPACK_IMPORTED_MODULE_2__.useStateManager)(), speakerData = ref.speakerData, setSpeakerData = ref.setSpeakerData;\n    var onFavoriteToggle = function(speakerId) {\n        console.log(\"re-toggle\");\n        var speakerPrevData = speakerData.find(function(x) {\n            return x.id == speakerId;\n        });\n        var updatedSpeakerNewData = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, speakerPrevData), {\n            favorite: !speakerPrevData.favorite\n        });\n        var newSpeakersData = speakerData.map(function(speaker) {\n            return speaker.id == speakerId ? updatedSpeakerNewData : speaker;\n        });\n        setSpeakerData(newSpeakersData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakerData.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: function() {\n                        return onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(SpeakersList, \"WxZcR1wAlIL7QCcY0qpz3QBH8xI=\", false, function() {\n    return [\n        _modules_StateManager__WEBPACK_IMPORTED_MODULE_2__.useStateManager\n    ];\n});\n_c = SpeakersList;\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQStCO0FBQzBCO0FBQ3BCO0FBRXRCLFNBQVNHLFlBQVksQ0FBQyxLQUFjLEVBQUM7UUFBZixZQUFhLEdBQWIsS0FBYyxDQUFiQyxZQUFZOzs7SUFDaEQsSUFBc0NILEdBQWlCLEdBQWpCQSxzRUFBZSxFQUFFLEVBQWhESSxXQUFXLEdBQW9CSixHQUFpQixDQUFoREksV0FBVyxFQUFFQyxjQUFjLEdBQUlMLEdBQWlCLENBQW5DSyxjQUFjO0lBQ2xDLElBQU1DLGdCQUFnQixHQUFFLFNBQUNDLFNBQVMsRUFBSTtRQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ3hCLElBQU1DLGVBQWUsR0FBR04sV0FBVyxDQUFDTyxJQUFJLENBQUMsU0FBU0MsQ0FBQyxFQUFFO1lBQUMsT0FBUUEsQ0FBQyxDQUFDQyxFQUFFLElBQUVOLFNBQVM7UUFBQSxDQUFDLENBQUM7UUFFL0UsSUFBTU8scUJBQXFCLEdBQUcsd0tBQUlKLGVBQWU7WUFBRUssUUFBUSxFQUFFLENBQUNMLGVBQWUsQ0FBQ0ssUUFBUTtVQUFDO1FBRXZGLElBQU1DLGVBQWUsR0FBR1osV0FBVyxDQUFDYSxHQUFHLENBQUMsU0FBQ0MsT0FBTzttQkFDaERBLE9BQU8sQ0FBQ0wsRUFBRSxJQUFJTixTQUFTLEdBQUdPLHFCQUFxQixHQUFHSSxPQUFPO1NBQUEsQ0FBQztRQUUxRGIsY0FBYyxDQUFDVyxlQUFlLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0MscUJBQ0EsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHlCQUF5QjtrQkFDdEMsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLEtBQUs7c0JBQ2pCaEIsV0FBVyxDQUFDYSxHQUFHLENBQUMsU0FBQ0MsT0FBTztxQ0FDdkIsOERBQUNuQixnREFBTztvQkFDUm1CLE9BQU8sRUFBRUEsT0FBTztvQkFDaEJmLFlBQVksRUFBRUEsWUFBWTtvQkFDM0JHLGdCQUFnQixFQUFHOytCQUFNQSxnQkFBZ0IsQ0FBQ1ksT0FBTyxDQUFDTCxFQUFFLENBQUM7cUJBQUE7bUJBSHRDSyxPQUFPLENBQUNMLEVBQUU7Ozs7eUJBSXRCO2FBQUEsQ0FDSDs7Ozs7Z0JBQ0c7Ozs7O1lBQ0YsQ0FDTDtBQUNMLENBQUM7R0ExQnVCWCxZQUFZOztRQUNJRixrRUFBZTs7O0FBRC9CRSxLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzPzNlNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSAnLi9TcGVha2VyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZU1hbmFnZXIgfSBmcm9tICcuLi9tb2R1bGVzL1N0YXRlTWFuYWdlcidcclxuaW1wb3J0IHtkYXRhfSBmcm9tICcuLy4uL1NwZWFrZXJEYXRhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BlYWtlcnNMaXN0KHtzaG93U2Vzc2lvbnN9KXtcclxuICBjb25zdCB7c3BlYWtlckRhdGEsIHNldFNwZWFrZXJEYXRhfSA9IHVzZVN0YXRlTWFuYWdlcigpO1xyXG4gIGNvbnN0IG9uRmF2b3JpdGVUb2dnbGUgPShzcGVha2VySWQpID0+e1xyXG4gICAgY29uc29sZS5sb2coXCJyZS10b2dnbGVcIilcclxuICAgIGNvbnN0IHNwZWFrZXJQcmV2RGF0YSA9IHNwZWFrZXJEYXRhLmZpbmQoZnVuY3Rpb24oeCkge3JldHVybiAgeC5pZD09c3BlYWtlcklkfSk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlZFNwZWFrZXJOZXdEYXRhID0gey4uLnNwZWFrZXJQcmV2RGF0YSwgZmF2b3JpdGU6ICFzcGVha2VyUHJldkRhdGEuZmF2b3JpdGV9XHJcblxyXG4gICAgY29uc3QgbmV3U3BlYWtlcnNEYXRhID0gc3BlYWtlckRhdGEubWFwKChzcGVha2VyKSA9PiBcclxuICAgIHNwZWFrZXIuaWQgPT0gc3BlYWtlcklkID8gdXBkYXRlZFNwZWFrZXJOZXdEYXRhIDogc3BlYWtlcik7XHJcblxyXG4gICAgc2V0U3BlYWtlckRhdGEobmV3U3BlYWtlcnNEYXRhKTtcclxuICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAge3NwZWFrZXJEYXRhLm1hcCgoc3BlYWtlcikgPT4gXHJcbiAgICAgICAgICA8U3BlYWtlciBrZXk9e3NwZWFrZXIuaWR9IFxyXG4gICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn0gXHJcbiAgICAgICAgICBzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc30gXHJcbiAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUgPXsoKSA9PiBvbkZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpfSBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJTcGVha2VyIiwidXNlU3RhdGVNYW5hZ2VyIiwiZGF0YSIsIlNwZWFrZXJzTGlzdCIsInNob3dTZXNzaW9ucyIsInNwZWFrZXJEYXRhIiwic2V0U3BlYWtlckRhdGEiLCJvbkZhdm9yaXRlVG9nZ2xlIiwic3BlYWtlcklkIiwiY29uc29sZSIsImxvZyIsInNwZWFrZXJQcmV2RGF0YSIsImZpbmQiLCJ4IiwiaWQiLCJ1cGRhdGVkU3BlYWtlck5ld0RhdGEiLCJmYXZvcml0ZSIsIm5ld1NwZWFrZXJzRGF0YSIsIm1hcCIsInNwZWFrZXIiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/SpeakersList.js\n"));

/***/ })

});