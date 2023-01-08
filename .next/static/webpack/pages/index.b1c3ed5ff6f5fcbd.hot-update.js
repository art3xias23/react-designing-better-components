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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpeakersList; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./pages/components/Speaker.js\");\n/* harmony import */ var _modules_StateManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/StateManager */ \"./pages/modules/StateManager.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction SpeakersList(param) {\n    var showSessions = param.showSessions;\n    var _this = this;\n    _s();\n    var ref = (0,_modules_StateManager__WEBPACK_IMPORTED_MODULE_2__.useStateManager)(), speakerData = ref.speakerData, setSpeakerData = ref.setSpeakerData;\n    var onFavoriteToggle = function(speakerId) {\n        console.log(\"re-toggle\");\n        var speakerPrevData = speakerData.find(function(x) {\n            return x.id == speakerId;\n        });\n        var updatedSpeakerNewData = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, speakerPrevData), {\n            favorite: !speakerPrevData.favorite\n        });\n        var newSpeakersData = speakerData.map(function(speaker) {\n            return speaker.id == speakerId ? updatedSpeakerNewData : speaker;\n        });\n        setSpeakerData(newSpeakersData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakerData.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: function() {\n                        return onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kmilchev\\\\Desktop\\\\MyStuff\\\\JS\\\\React\\\\react-designing-better-components\\\\pages\\\\components\\\\SpeakersList.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(SpeakersList, \"WxZcR1wAlIL7QCcY0qpz3QBH8xI=\", false, function() {\n    return [\n        _modules_StateManager__WEBPACK_IMPORTED_MODULE_2__.useStateManager\n    ];\n});\n_c = SpeakersList;\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFBK0I7QUFDMEI7QUFDMUMsU0FBU0UsWUFBWSxDQUFDLEtBQWMsRUFBQztRQUFmLFlBQWEsR0FBYixLQUFjLENBQWJDLFlBQVk7OztJQUNoRCxJQUFzQ0YsR0FBaUIsR0FBakJBLHNFQUFlLEVBQUUsRUFBaERHLFdBQVcsR0FBb0JILEdBQWlCLENBQWhERyxXQUFXLEVBQUVDLGNBQWMsR0FBSUosR0FBaUIsQ0FBbkNJLGNBQWM7SUFDbEMsSUFBTUMsZ0JBQWdCLEdBQUUsU0FBQ0MsU0FBUyxFQUFJO1FBQ3BDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDeEIsSUFBTUMsZUFBZSxHQUFHTixXQUFXLENBQUNPLElBQUksQ0FBQyxTQUFTQyxDQUFDLEVBQUU7WUFBQyxPQUFRQSxDQUFDLENBQUNDLEVBQUUsSUFBRU4sU0FBUztRQUFBLENBQUMsQ0FBQztRQUUvRSxJQUFNTyxxQkFBcUIsR0FBRyx3S0FBSUosZUFBZTtZQUFFSyxRQUFRLEVBQUUsQ0FBQ0wsZUFBZSxDQUFDSyxRQUFRO1VBQUM7UUFFdkYsSUFBTUMsZUFBZSxHQUFHWixXQUFXLENBQUNhLEdBQUcsQ0FBQyxTQUFDQyxPQUFPO21CQUNoREEsT0FBTyxDQUFDTCxFQUFFLElBQUlOLFNBQVMsR0FBR08scUJBQXFCLEdBQUdJLE9BQU87U0FBQSxDQUFDO1FBRTFEYixjQUFjLENBQUNXLGVBQWUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDQyxxQkFDQSw4REFBQ0csS0FBRztRQUFDQyxTQUFTLEVBQUMseUJBQXlCO2tCQUN0Qyw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsS0FBSztzQkFDakJoQixXQUFXLENBQUNhLEdBQUcsQ0FBQyxTQUFDQyxPQUFPO3FDQUN2Qiw4REFBQ2xCLGdEQUFPO29CQUNSa0IsT0FBTyxFQUFFQSxPQUFPO29CQUNoQmYsWUFBWSxFQUFFQSxZQUFZO29CQUMzQkcsZ0JBQWdCLEVBQUc7K0JBQU1BLGdCQUFnQixDQUFDWSxPQUFPLENBQUNMLEVBQUUsQ0FBQztxQkFBQTttQkFIdENLLE9BQU8sQ0FBQ0wsRUFBRTs7Ozt5QkFJdEI7YUFBQSxDQUNIOzs7OztnQkFDRzs7Ozs7WUFDRixDQUNMO0FBQ0wsQ0FBQztHQTFCdUJYLFlBQVk7O1FBQ0lELGtFQUFlOzs7QUFEL0JDLEtBQUFBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanM/M2U1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tICcuL1NwZWFrZXInXHJcbmltcG9ydCB7IHVzZVN0YXRlTWFuYWdlciB9IGZyb20gJy4uL21vZHVsZXMvU3RhdGVNYW5hZ2VyJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGVha2Vyc0xpc3Qoe3Nob3dTZXNzaW9uc30pe1xyXG4gIGNvbnN0IHtzcGVha2VyRGF0YSwgc2V0U3BlYWtlckRhdGF9ID0gdXNlU3RhdGVNYW5hZ2VyKCk7XHJcbiAgY29uc3Qgb25GYXZvcml0ZVRvZ2dsZSA9KHNwZWFrZXJJZCkgPT57XHJcbiAgICBjb25zb2xlLmxvZyhcInJlLXRvZ2dsZVwiKVxyXG4gICAgY29uc3Qgc3BlYWtlclByZXZEYXRhID0gc3BlYWtlckRhdGEuZmluZChmdW5jdGlvbih4KSB7cmV0dXJuICB4LmlkPT1zcGVha2VySWR9KTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVkU3BlYWtlck5ld0RhdGEgPSB7Li4uc3BlYWtlclByZXZEYXRhLCBmYXZvcml0ZTogIXNwZWFrZXJQcmV2RGF0YS5mYXZvcml0ZX1cclxuXHJcbiAgICBjb25zdCBuZXdTcGVha2Vyc0RhdGEgPSBzcGVha2VyRGF0YS5tYXAoKHNwZWFrZXIpID0+IFxyXG4gICAgc3BlYWtlci5pZCA9PSBzcGVha2VySWQgPyB1cGRhdGVkU3BlYWtlck5ld0RhdGEgOiBzcGVha2VyKTtcclxuXHJcbiAgICBzZXRTcGVha2VyRGF0YShuZXdTcGVha2Vyc0RhdGEpO1xyXG4gIH1cclxuICAgIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICB7c3BlYWtlckRhdGEubWFwKChzcGVha2VyKSA9PiBcclxuICAgICAgICAgIDxTcGVha2VyIGtleT17c3BlYWtlci5pZH0gXHJcbiAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfSBcclxuICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfSBcclxuICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZSA9eygpID0+IG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCl9IFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlNwZWFrZXIiLCJ1c2VTdGF0ZU1hbmFnZXIiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJzcGVha2VyRGF0YSIsInNldFNwZWFrZXJEYXRhIiwib25GYXZvcml0ZVRvZ2dsZSIsInNwZWFrZXJJZCIsImNvbnNvbGUiLCJsb2ciLCJzcGVha2VyUHJldkRhdGEiLCJmaW5kIiwieCIsImlkIiwidXBkYXRlZFNwZWFrZXJOZXdEYXRhIiwiZmF2b3JpdGUiLCJuZXdTcGVha2Vyc0RhdGEiLCJtYXAiLCJzcGVha2VyIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/SpeakersList.js\n"));

/***/ })

});