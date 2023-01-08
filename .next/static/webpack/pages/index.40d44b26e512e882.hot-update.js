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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpeakersList; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./pages/components/Speaker.js\");\n/* harmony import */ var _modules_StateManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/StateManager */ \"./pages/modules/StateManager.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../SpeakerData */ \"./pages/SpeakerData.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SpeakersList(param) {\n    var showSessions = param.showSessions;\n    var _this = this;\n    _s();\n    var ref = (0,_modules_StateManager__WEBPACK_IMPORTED_MODULE_2__.useStateManager)(), speakerData = ref.speakerData, setSpeakerData = ref.setSpeakerData, isLoading = ref.isLoading, setIsLoading = ref.setIsLoading, hasErrored = ref.hasErrored, setHasErrored = ref.setHasErrored;\n    var delay = function(ms) {\n        return new Promise(function(resolve) {\n            return setTimeout(resolve, ms);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(/*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    setIsLoading(true);\n                    return [\n                        4,\n                        delay(2000)\n                    ];\n                case 1:\n                    _state.sent();\n                    setSpeakerData(_SpeakerData__WEBPACK_IMPORTED_MODULE_4__.data);\n                    return [\n                        2\n                    ];\n            }\n        });\n    }), []);\n    var onFavoriteToggle = function(speakerId) {\n        console.log(\"re-toggle\");\n        var speakerPrevData = speakerData.find(function(x) {\n            return x.id == speakerId;\n        });\n        var updatedSpeakerNewData = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, speakerPrevData), {\n            favorite: !speakerPrevData.favorite\n        });\n        var newSpeakersData = speakerData.map(function(speaker) {\n            return speaker.id == speakerId ? updatedSpeakerNewData : speaker;\n        });\n        setSpeakerData(newSpeakersData);\n    };\n    if (isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n        lineNumber: 29,\n        columnNumber: 19\n    }, this)) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakerData.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: function() {\n                        return onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(SpeakersList, \"dgq1Z8cKeiIoGKuFxT3nXWSZU8Y=\", false, function() {\n    return [\n        _modules_StateManager__WEBPACK_IMPORTED_MODULE_2__.useStateManager\n    ];\n});\n_c = SpeakersList;\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQStCO0FBQ3lCO0FBQ3pCO0FBQ007QUFFdEIsU0FBU0ksWUFBWSxDQUFDLEtBQWMsRUFBQztRQUFmLFlBQWEsR0FBYixLQUFjLENBQWJDLFlBQVk7OztJQUNoRCxJQUEwRkosR0FBaUIsR0FBakJBLHNFQUFlLEVBQUUsRUFBcEdLLFdBQVcsR0FBd0VMLEdBQWlCLENBQXBHSyxXQUFXLEVBQUVDLGNBQWMsR0FBd0ROLEdBQWlCLENBQXZGTSxjQUFjLEVBQUVDLFNBQVMsR0FBNkNQLEdBQWlCLENBQXZFTyxTQUFTLEVBQUVDLFlBQVksR0FBK0JSLEdBQWlCLENBQTVEUSxZQUFZLEVBQUVDLFVBQVUsR0FBbUJULEdBQWlCLENBQTlDUyxVQUFVLEVBQUVDLGFBQWEsR0FBSVYsR0FBaUIsQ0FBbENVLGFBQWE7SUFFdEYsSUFBTUMsS0FBSyxHQUFHLFNBQUNDLEVBQUU7ZUFBSyxJQUFJQyxPQUFPLENBQUMsU0FBQ0MsT0FBTzttQkFBS0MsVUFBVSxDQUFDRCxPQUFPLEVBQUVGLEVBQUUsQ0FBQztTQUFBLENBQUM7S0FBQTtJQUV2RVgsZ0RBQVMsZUFBQywrRkFBWTs7OztvQkFDcEJPLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkI7O3dCQUFNRyxLQUFLLENBQUMsSUFBSSxDQUFDO3NCQUFBOztvQkFBakIsYUFBaUIsQ0FBQztvQkFDbEJMLGNBQWMsQ0FBQ0osOENBQUksQ0FBQzs7Ozs7O0lBQ3RCLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQztJQUVOLElBQU1jLGdCQUFnQixHQUFFLFNBQUNDLFNBQVMsRUFBSTtRQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ3hCLElBQU1DLGVBQWUsR0FBR2YsV0FBVyxDQUFDZ0IsSUFBSSxDQUFDLFNBQVNDLENBQUMsRUFBRTtZQUFDLE9BQVFBLENBQUMsQ0FBQ0MsRUFBRSxJQUFFTixTQUFTO1FBQUEsQ0FBQyxDQUFDO1FBRS9FLElBQU1PLHFCQUFxQixHQUFHLHdLQUFJSixlQUFlO1lBQUVLLFFBQVEsRUFBRSxDQUFDTCxlQUFlLENBQUNLLFFBQVE7VUFBQztRQUV2RixJQUFNQyxlQUFlLEdBQUdyQixXQUFXLENBQUNzQixHQUFHLENBQUMsU0FBQ0MsT0FBTzttQkFDaERBLE9BQU8sQ0FBQ0wsRUFBRSxJQUFJTixTQUFTLEdBQUdPLHFCQUFxQixHQUFHSSxPQUFPO1NBQUEsQ0FBQztRQUUxRHRCLGNBQWMsQ0FBQ29CLGVBQWUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFHbkIsU0FBUyxrQkFBSSw4REFBQ3NCLElBQUU7a0JBQUMsWUFBVTs7Ozs7WUFBSyxFQUNqQyxxQkFDQSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMseUJBQXlCO2tCQUN0Qyw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsS0FBSztzQkFDakIxQixXQUFXLENBQUNzQixHQUFHLENBQUMsU0FBQ0MsT0FBTztxQ0FDdkIsOERBQUM3QixnREFBTztvQkFDUjZCLE9BQU8sRUFBRUEsT0FBTztvQkFDaEJ4QixZQUFZLEVBQUVBLFlBQVk7b0JBQzNCWSxnQkFBZ0IsRUFBRzsrQkFBTUEsZ0JBQWdCLENBQUNZLE9BQU8sQ0FBQ0wsRUFBRSxDQUFDO3FCQUFBO21CQUh0Q0ssT0FBTyxDQUFDTCxFQUFFOzs7O3lCQUl0QjthQUFBLENBQ0g7Ozs7O2dCQUNHOzs7OztZQUNGLENBQ0w7QUFDTCxDQUFDO0dBckN1QnBCLFlBQVk7O1FBQ3dESCxrRUFBZTs7O0FBRG5GRyxLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzPzNlNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSAnLi9TcGVha2VyJ1xyXG5pbXBvcnQge3VzZVN0YXRlTWFuYWdlciB9IGZyb20gJy4uL21vZHVsZXMvU3RhdGVNYW5hZ2VyJ1xyXG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7ZGF0YX0gZnJvbSAnLi8uLi9TcGVha2VyRGF0YSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwZWFrZXJzTGlzdCh7c2hvd1Nlc3Npb25zfSl7XHJcbiAgY29uc3Qge3NwZWFrZXJEYXRhLCBzZXRTcGVha2VyRGF0YSwgaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmcsIGhhc0Vycm9yZWQsIHNldEhhc0Vycm9yZWR9ID0gdXNlU3RhdGVNYW5hZ2VyKCk7XHJcblxyXG4gIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgYXdhaXQgZGVsYXkoMjAwMCk7XHJcbiAgICBzZXRTcGVha2VyRGF0YShkYXRhKVxyXG4gIH0sW10pO1xyXG5cclxuICBjb25zdCBvbkZhdm9yaXRlVG9nZ2xlID0oc3BlYWtlcklkKSA9PntcclxuICAgIGNvbnNvbGUubG9nKFwicmUtdG9nZ2xlXCIpXHJcbiAgICBjb25zdCBzcGVha2VyUHJldkRhdGEgPSBzcGVha2VyRGF0YS5maW5kKGZ1bmN0aW9uKHgpIHtyZXR1cm4gIHguaWQ9PXNwZWFrZXJJZH0pO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWRTcGVha2VyTmV3RGF0YSA9IHsuLi5zcGVha2VyUHJldkRhdGEsIGZhdm9yaXRlOiAhc3BlYWtlclByZXZEYXRhLmZhdm9yaXRlfVxyXG5cclxuICAgIGNvbnN0IG5ld1NwZWFrZXJzRGF0YSA9IHNwZWFrZXJEYXRhLm1hcCgoc3BlYWtlcikgPT4gXHJcbiAgICBzcGVha2VyLmlkID09IHNwZWFrZXJJZCA/IHVwZGF0ZWRTcGVha2VyTmV3RGF0YSA6IHNwZWFrZXIpO1xyXG5cclxuICAgIHNldFNwZWFrZXJEYXRhKG5ld1NwZWFrZXJzRGF0YSk7XHJcbiAgfVxyXG5cclxuICBpZihpc0xvYWRpbmcgJiYgPGgzPkxvYWRpbmcuLi48L2gzPilcclxuICAgIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICB7c3BlYWtlckRhdGEubWFwKChzcGVha2VyKSA9PiBcclxuICAgICAgICAgIDxTcGVha2VyIGtleT17c3BlYWtlci5pZH0gXHJcbiAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfSBcclxuICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfSBcclxuICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZSA9eygpID0+IG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCl9IFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlNwZWFrZXIiLCJ1c2VTdGF0ZU1hbmFnZXIiLCJ1c2VFZmZlY3QiLCJkYXRhIiwiU3BlYWtlcnNMaXN0Iiwic2hvd1Nlc3Npb25zIiwic3BlYWtlckRhdGEiLCJzZXRTcGVha2VyRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhc0Vycm9yZWQiLCJzZXRIYXNFcnJvcmVkIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIm9uRmF2b3JpdGVUb2dnbGUiLCJzcGVha2VySWQiLCJjb25zb2xlIiwibG9nIiwic3BlYWtlclByZXZEYXRhIiwiZmluZCIsIngiLCJpZCIsInVwZGF0ZWRTcGVha2VyTmV3RGF0YSIsImZhdm9yaXRlIiwibmV3U3BlYWtlcnNEYXRhIiwibWFwIiwic3BlYWtlciIsImgzIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/SpeakersList.js\n"));

/***/ })

});