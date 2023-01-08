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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpeakersList; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./pages/components/Speaker.js\");\n/* harmony import */ var _modules_StateManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/StateManager */ \"./pages/modules/StateManager.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../SpeakerData */ \"./pages/SpeakerData.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SpeakersList(param) {\n    var showSessions = param.showSessions;\n    var _this = this;\n    _s();\n    var ref = (0,_modules_StateManager__WEBPACK_IMPORTED_MODULE_2__.useStateManager)(), speakerData = ref.speakerData, setSpeakerData = ref.setSpeakerData;\n    var delay = function(ms) {\n        return new Promise(function(resolve) {\n            return setTimeout(resolve, ms);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(/*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        delay(2000)\n                    ];\n                case 1:\n                    _state.sent();\n                    setSpeakerData(_SpeakerData__WEBPACK_IMPORTED_MODULE_4__.data);\n                    return [\n                        2\n                    ];\n            }\n        });\n    }), []);\n    var onFavoriteToggle = function(speakerId) {\n        console.log(\"re-toggle\");\n        var speakerPrevData = speakerData.find(function(x) {\n            return x.id == speakerId;\n        });\n        var updatedSpeakerNewData = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, speakerPrevData), {\n            favorite: !speakerPrevData.favorite\n        });\n        var newSpeakersData = speakerData.map(function(speaker) {\n            return speaker.id == speakerId ? updatedSpeakerNewData : speaker;\n        });\n        setSpeakerData(newSpeakersData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakerData.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: function() {\n                        return onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(SpeakersList, \"jbyT9Fh/AtJEMc0FN3rpZtdeAQE=\", false, function() {\n    return [\n        _modules_StateManager__WEBPACK_IMPORTED_MODULE_2__.useStateManager\n    ];\n});\n_c = SpeakersList;\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQStCO0FBQ3lCO0FBQ3pCO0FBQ007QUFFdEIsU0FBU0ksWUFBWSxDQUFDLEtBQWMsRUFBQztRQUFmLFlBQWEsR0FBYixLQUFjLENBQWJDLFlBQVk7OztJQUNoRCxJQUFzQ0osR0FBaUIsR0FBakJBLHNFQUFlLEVBQUUsRUFBaERLLFdBQVcsR0FBb0JMLEdBQWlCLENBQWhESyxXQUFXLEVBQUVDLGNBQWMsR0FBSU4sR0FBaUIsQ0FBbkNNLGNBQWM7SUFFbEMsSUFBTUMsS0FBSyxHQUFHLFNBQUNDLEVBQUU7ZUFBSyxJQUFJQyxPQUFPLENBQUMsU0FBQ0MsT0FBTzttQkFBS0MsVUFBVSxDQUFDRCxPQUFPLEVBQUVGLEVBQUUsQ0FBQztTQUFBLENBQUM7S0FBQTtJQUV2RVAsZ0RBQVMsZUFBQywrRkFBWTs7OztvQkFDcEI7O3dCQUFNTSxLQUFLLENBQUMsSUFBSSxDQUFDO3NCQUFBOztvQkFBakIsYUFBaUIsQ0FBQztvQkFDbEJELGNBQWMsQ0FBQ0osOENBQUksQ0FBQzs7Ozs7O0lBQ3RCLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQztJQUVOLElBQU1VLGdCQUFnQixHQUFFLFNBQUNDLFNBQVMsRUFBSTtRQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ3hCLElBQU1DLGVBQWUsR0FBR1gsV0FBVyxDQUFDWSxJQUFJLENBQUMsU0FBU0MsQ0FBQyxFQUFFO1lBQUMsT0FBUUEsQ0FBQyxDQUFDQyxFQUFFLElBQUVOLFNBQVM7UUFBQSxDQUFDLENBQUM7UUFFL0UsSUFBTU8scUJBQXFCLEdBQUcsd0tBQUlKLGVBQWU7WUFBRUssUUFBUSxFQUFFLENBQUNMLGVBQWUsQ0FBQ0ssUUFBUTtVQUFDO1FBRXZGLElBQU1DLGVBQWUsR0FBR2pCLFdBQVcsQ0FBQ2tCLEdBQUcsQ0FBQyxTQUFDQyxPQUFPO21CQUNoREEsT0FBTyxDQUFDTCxFQUFFLElBQUlOLFNBQVMsR0FBR08scUJBQXFCLEdBQUdJLE9BQU87U0FBQSxDQUFDO1FBRTFEbEIsY0FBYyxDQUFDZ0IsZUFBZSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNDLHFCQUNBLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx5QkFBeUI7a0JBQ3RDLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxLQUFLO3NCQUNqQnJCLFdBQVcsQ0FBQ2tCLEdBQUcsQ0FBQyxTQUFDQyxPQUFPO3FDQUN2Qiw4REFBQ3pCLGdEQUFPO29CQUNSeUIsT0FBTyxFQUFFQSxPQUFPO29CQUNoQnBCLFlBQVksRUFBRUEsWUFBWTtvQkFDM0JRLGdCQUFnQixFQUFHOytCQUFNQSxnQkFBZ0IsQ0FBQ1ksT0FBTyxDQUFDTCxFQUFFLENBQUM7cUJBQUE7bUJBSHRDSyxPQUFPLENBQUNMLEVBQUU7Ozs7eUJBSXRCO2FBQUEsQ0FDSDs7Ozs7Z0JBQ0c7Ozs7O1lBQ0YsQ0FDTDtBQUNMLENBQUM7R0FsQ3VCaEIsWUFBWTs7UUFDSUgsa0VBQWU7OztBQUQvQkcsS0FBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcz8zZTVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyIGZyb20gJy4vU3BlYWtlcidcclxuaW1wb3J0IHt1c2VTdGF0ZU1hbmFnZXIgfSBmcm9tICcuLi9tb2R1bGVzL1N0YXRlTWFuYWdlcidcclxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2RhdGF9IGZyb20gJy4vLi4vU3BlYWtlckRhdGEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGVha2Vyc0xpc3Qoe3Nob3dTZXNzaW9uc30pe1xyXG4gIGNvbnN0IHtzcGVha2VyRGF0YSwgc2V0U3BlYWtlckRhdGF9ID0gdXNlU3RhdGVNYW5hZ2VyKCk7XHJcblxyXG4gIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZGVsYXkoMjAwMCk7XHJcbiAgICBzZXRTcGVha2VyRGF0YShkYXRhKVxyXG4gIH0sW10pO1xyXG5cclxuICBjb25zdCBvbkZhdm9yaXRlVG9nZ2xlID0oc3BlYWtlcklkKSA9PntcclxuICAgIGNvbnNvbGUubG9nKFwicmUtdG9nZ2xlXCIpXHJcbiAgICBjb25zdCBzcGVha2VyUHJldkRhdGEgPSBzcGVha2VyRGF0YS5maW5kKGZ1bmN0aW9uKHgpIHtyZXR1cm4gIHguaWQ9PXNwZWFrZXJJZH0pO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWRTcGVha2VyTmV3RGF0YSA9IHsuLi5zcGVha2VyUHJldkRhdGEsIGZhdm9yaXRlOiAhc3BlYWtlclByZXZEYXRhLmZhdm9yaXRlfVxyXG5cclxuICAgIGNvbnN0IG5ld1NwZWFrZXJzRGF0YSA9IHNwZWFrZXJEYXRhLm1hcCgoc3BlYWtlcikgPT4gXHJcbiAgICBzcGVha2VyLmlkID09IHNwZWFrZXJJZCA/IHVwZGF0ZWRTcGVha2VyTmV3RGF0YSA6IHNwZWFrZXIpO1xyXG5cclxuICAgIHNldFNwZWFrZXJEYXRhKG5ld1NwZWFrZXJzRGF0YSk7XHJcbiAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIHtzcGVha2VyRGF0YS5tYXAoKHNwZWFrZXIpID0+IFxyXG4gICAgICAgICAgPFNwZWFrZXIga2V5PXtzcGVha2VyLmlkfSBcclxuICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9IFxyXG4gICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9IFxyXG4gICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlID17KCkgPT4gb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKX0gXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiU3BlYWtlciIsInVzZVN0YXRlTWFuYWdlciIsInVzZUVmZmVjdCIsImRhdGEiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJzcGVha2VyRGF0YSIsInNldFNwZWFrZXJEYXRhIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIm9uRmF2b3JpdGVUb2dnbGUiLCJzcGVha2VySWQiLCJjb25zb2xlIiwibG9nIiwic3BlYWtlclByZXZEYXRhIiwiZmluZCIsIngiLCJpZCIsInVwZGF0ZWRTcGVha2VyTmV3RGF0YSIsImZhdm9yaXRlIiwibmV3U3BlYWtlcnNEYXRhIiwibWFwIiwic3BlYWtlciIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/SpeakersList.js\n"));

/***/ })

});