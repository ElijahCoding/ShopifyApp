webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/@apollo/react-common/lib/react-common.esm.js":
false,

/***/ "./node_modules/@apollo/react-components/lib/react-components.esm.js":
false,

/***/ "./node_modules/@apollo/react-hoc/lib/react-hoc.esm.js":
false,

/***/ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js":
false,

/***/ "./node_modules/@apollo/react-ssr/lib/react-ssr.esm.js":
false,

/***/ "./node_modules/@wry/context/lib/context.esm.js":
false,

/***/ "./node_modules/@wry/equality/lib/equality.esm.js":
false,

/***/ "./node_modules/apollo-boost/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-cache/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-client/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link-error/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link-http-common/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link-http/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-utilities/lib/bundle.esm.js":
false,

/***/ "./node_modules/fast-json-stable-stringify/index.js":
false,

/***/ "./node_modules/graphql-tag/src/index.js":
false,

/***/ "./node_modules/graphql/error/GraphQLError.mjs":
false,

/***/ "./node_modules/graphql/error/syntaxError.mjs":
false,

/***/ "./node_modules/graphql/jsutils/defineInspect.mjs":
false,

/***/ "./node_modules/graphql/jsutils/devAssert.mjs":
false,

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
false,

/***/ "./node_modules/graphql/jsutils/invariant.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isObjectLike.mjs":
false,

/***/ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs":
false,

/***/ "./node_modules/graphql/language/ast.mjs":
false,

/***/ "./node_modules/graphql/language/blockString.mjs":
false,

/***/ "./node_modules/graphql/language/directiveLocation.mjs":
false,

/***/ "./node_modules/graphql/language/kinds.mjs":
false,

/***/ "./node_modules/graphql/language/lexer.mjs":
false,

/***/ "./node_modules/graphql/language/location.mjs":
false,

/***/ "./node_modules/graphql/language/parser.mjs":
false,

/***/ "./node_modules/graphql/language/printLocation.mjs":
false,

/***/ "./node_modules/graphql/language/printer.mjs":
false,

/***/ "./node_modules/graphql/language/source.mjs":
false,

/***/ "./node_modules/graphql/language/tokenKind.mjs":
false,

/***/ "./node_modules/graphql/language/visitor.mjs":
false,

/***/ "./node_modules/graphql/polyfills/symbols.mjs":
false,

/***/ "./node_modules/optimism/lib/bundle.esm.js":
false,

/***/ "./node_modules/react-apollo/lib/react-apollo.esm.js":
false,

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
false,

/***/ "./node_modules/react-dom/server.browser.js":
false,

/***/ "./node_modules/symbol-observable/es/index.js":
false,

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
false,

/***/ "./node_modules/ts-invariant/lib/invariant.esm.js":
false,

/***/ "./node_modules/zen-observable-ts/lib/bundle.esm.js":
false,

/***/ "./node_modules/zen-observable/index.js":
false,

/***/ "./node_modules/zen-observable/lib/Observable.js":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/index.es.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/polaris/styles.css */ \"./node_modules/@shopify/polaris/styles.css\");\n/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/polaris/locales/en.json */ \"./node_modules/@shopify/polaris/locales/en.json\");\nvar _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! @shopify/polaris/locales/en.json */ \"./node_modules/@shopify/polaris/locales/en.json\", 1);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar MyApp = /*#__PURE__*/function (_App) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MyApp, _App);\n\n  var _super = _createSuper(MyApp);\n\n  function MyApp() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MyApp);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MyApp, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          Component = _this$props.Component,\n          pageProps = _this$props.pageProps;\n      var config = {\n        apiKey: \"f380fb118bf874c82fe48762e1210c83\",\n        shopOrigin: js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get('shopOrigin'),\n        forceRedirect: true\n      };\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx(\"title\", null, \"Sample App\"), __jsx(\"meta\", {\n        charSet: \"utf-8\"\n      })), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__[\"Provider\"], {\n        config: config\n      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"AppProvider\"], {\n        i18n: _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_11__\n      }, __jsx(ApolloProvider, {\n        client: client\n      }, __jsx(Component, pageProps)))));\n    }\n  }]);\n\n  return MyApp;\n}(next_app__WEBPACK_IMPORTED_MODULE_6___default.a);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbmZpZyIsImFwaUtleSIsIkFQSV9LRVkiLCJzaG9wT3JpZ2luIiwiQ29va2llcyIsImdldCIsImZvcmNlUmVkaXJlY3QiLCJ0cmFuc2xhdGlvbnMiLCJjbGllbnQiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxLOzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQUEsd0JBQzRCLEtBQUtDLEtBRGpDO0FBQUEsVUFDR0MsU0FESCxlQUNHQSxTQURIO0FBQUEsVUFDY0MsU0FEZCxlQUNjQSxTQURkO0FBRUwsVUFBTUMsTUFBTSxHQUFHO0FBQUVDLGNBQU0sRUFBRUMsa0NBQVY7QUFBbUJDLGtCQUFVLEVBQUVDLGlEQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLENBQS9CO0FBQTBEQyxxQkFBYSxFQUFFO0FBQXpFLE9BQWY7QUFFQSxhQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0ksTUFBQyxnREFBRCxRQUNJLGtDQURKLEVBRUk7QUFBTSxlQUFPLEVBQUM7QUFBZCxRQUZKLENBREosRUFLSSxNQUFDLGtFQUFEO0FBQVUsY0FBTSxFQUFFTjtBQUFsQixTQUNJLE1BQUMsNERBQUQ7QUFBYSxZQUFJLEVBQUVPLDhEQUFZQTtBQUEvQixTQUNJLE1BQUMsY0FBRDtBQUFnQixjQUFNLEVBQUVDO0FBQXhCLFNBQ0ksTUFBQyxTQUFELEVBQWVULFNBQWYsQ0FESixDQURKLENBREosQ0FMSixDQURKO0FBZUg7Ozs7RUFwQmVVLCtDOztBQXVCTGIsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQXBwUHJvdmlkZXIgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCdcbmltcG9ydCAnQHNob3BpZnkvcG9sYXJpcy9zdHlsZXMuY3NzJztcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnQHNob3BpZnkvcG9sYXJpcy9sb2NhbGVzL2VuLmpzb24nO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY29uZmlnID0geyBhcGlLZXk6IEFQSV9LRVksIHNob3BPcmlnaW46IENvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJyksIGZvcmNlUmVkaXJlY3Q6IHRydWUgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5TYW1wbGUgQXBwPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPFByb3ZpZGVyIGNvbmZpZz17Y29uZmlnfT5cbiAgICAgICAgICAgICAgICAgICAgPEFwcFByb3ZpZGVyIGkxOG49e3RyYW5zbGF0aW9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvQXBwUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})