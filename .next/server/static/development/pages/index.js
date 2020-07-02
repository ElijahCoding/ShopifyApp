module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ResourceList.js":
/*!************************************!*\
  !*** ./components/ResourceList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\n    query getProducts($ids: [ID!]!) {\n        nodes(ids: $ids) {\n            ... on Product {\n                title\n                handle\n                id\n                images(first: 1) {\n                    edges {\n                        node {\n                            originalSrc\n                            altText\n                        }\n                    }\n                }\n                variants(first: 1) {\n                    edges {\n                        node {\n                            price\n                            id\n                        }\n                    }\n                }\n            }\n        }\n    }\n`;\n\nfunction ProductList() {\n  const {\n    loading,\n    error,\n    data\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(GET_PRODUCTS_BY_ID, {\n    variables: {\n      ids: store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get('ids')\n    }\n  });\n  if (loading) return __jsx(\"div\", null, \"Loading...\");\n  if (error) return __jsx(\"div\", null, error.message);\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"ResourceList\"], {\n    showHeader: true,\n    resourceName: {\n      singular: 'Product',\n      plural: 'Products'\n    },\n    items: data.nodes,\n    renderItem: item => {\n      const media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Thumbnail\"], {\n        source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : '',\n        alt: item.images.edges[0] ? item.images.edges[0].altText : ''\n      });\n\n      const price = item.variants.edges[0].node.price;\n      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"ResourceList\"].Item, {\n        id: item.id,\n        media: media,\n        accessibilityLabel: `View details for ${item.title}`\n      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, {\n        fill: true\n      }, __jsx(\"h3\", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"TextStyle\"], {\n        variation: \"strong\"\n      }, item.title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, null, __jsx(\"p\", null, \"$\", price))));\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdC5qcz8zZDY1Il0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlByb2R1Y3RMaXN0IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaWRzIiwic3RvcmUiLCJnZXQiLCJtZXNzYWdlIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJub2RlcyIsIml0ZW0iLCJtZWRpYSIsImltYWdlcyIsImVkZ2VzIiwibm9kZSIsIm9yaWdpbmFsU3JjIiwiYWx0VGV4dCIsInByaWNlIiwidmFyaWFudHMiLCJpZCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxrQkFBa0IsR0FBR0Msa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQS9COztBQTRCQSxTQUFTQyxXQUFULEdBQXVCO0FBQ25CLFFBQU07QUFBRUMsV0FBRjtBQUFXQyxTQUFYO0FBQWtCQztBQUFsQixNQUEyQkMsb0VBQVEsQ0FBQ04sa0JBQUQsRUFBcUI7QUFBRU8sYUFBUyxFQUFFO0FBQUVDLFNBQUcsRUFBRUMsK0NBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVY7QUFBUDtBQUFiLEdBQXJCLENBQXpDO0FBRUEsTUFBSVAsT0FBSixFQUFhLE9BQU8sZ0NBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsT0FBTyxtQkFBTUEsS0FBSyxDQUFDTyxPQUFaLENBQVA7QUFFWCxTQUNJLE1BQUMscURBQUQsUUFDSSxNQUFDLDZEQUFEO0FBQ0ksY0FBVSxNQURkO0FBRUksZ0JBQVksRUFBRTtBQUFFQyxjQUFRLEVBQUUsU0FBWjtBQUF1QkMsWUFBTSxFQUFFO0FBQS9CLEtBRmxCO0FBR0ksU0FBSyxFQUFFUixJQUFJLENBQUNTLEtBSGhCO0FBSUksY0FBVSxFQUFFQyxJQUFJLElBQUk7QUFDaEIsWUFBTUMsS0FBSyxHQUNQLE1BQUMsMERBQUQ7QUFDSSxjQUFNLEVBQ0ZELElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLElBQXVCSCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixFQUFxQkMsSUFBckIsQ0FBMEJDLFdBQWpELEdBQStELEVBRnZFO0FBSUksV0FBRyxFQUNDTCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixJQUF1QkgsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJHLE9BQTVDLEdBQXNEO0FBTDlELFFBREo7O0FBVUEsWUFBTUMsS0FBSyxHQUFHUCxJQUFJLENBQUNRLFFBQUwsQ0FBY0wsS0FBZCxDQUFvQixDQUFwQixFQUF1QkMsSUFBdkIsQ0FBNEJHLEtBQTFDO0FBQ0EsYUFDSSxNQUFDLDZEQUFELENBQWMsSUFBZDtBQUNJLFVBQUUsRUFBRVAsSUFBSSxDQUFDUyxFQURiO0FBRUksYUFBSyxFQUFFUixLQUZYO0FBR0ksMEJBQWtCLEVBQUcsb0JBQW1CRCxJQUFJLENBQUNVLEtBQU07QUFIdkQsU0FLSSxNQUFDLHNEQUFELFFBQ0ksTUFBQyxzREFBRCxDQUFPLElBQVA7QUFBWSxZQUFJO0FBQWhCLFNBQ0ksa0JBQ0ksTUFBQywwREFBRDtBQUFXLGlCQUFTLEVBQUM7QUFBckIsU0FDS1YsSUFBSSxDQUFDVSxLQURWLENBREosQ0FESixDQURKLEVBUUksTUFBQyxzREFBRCxDQUFPLElBQVAsUUFDSSxzQkFBS0gsS0FBTCxDQURKLENBUkosQ0FMSixDQURKO0FBb0JIO0FBcENMLElBREosQ0FESjtBQTRDSDs7QUFFY3BCLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBSZXNvdXJjZUxpc3QsIFN0YWNrLCBUZXh0U3R5bGUsIFRodW1ibmFpbCB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJ1xuXG5jb25zdCBHRVRfUFJPRFVDVFNfQllfSUQgPSBncWxgXG4gICAgcXVlcnkgZ2V0UHJvZHVjdHMoJGlkczogW0lEIV0hKSB7XG4gICAgICAgIG5vZGVzKGlkczogJGlkcykge1xuICAgICAgICAgICAgLi4uIG9uIFByb2R1Y3Qge1xuICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgaGFuZGxlXG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBpbWFnZXMoZmlyc3Q6IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyaWFudHMoZmlyc3Q6IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuZnVuY3Rpb24gUHJvZHVjdExpc3QoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1BST0RVQ1RTX0JZX0lELCB7IHZhcmlhYmxlczogeyBpZHM6IHN0b3JlLmdldCgnaWRzJykgfSB9KVxuXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8UmVzb3VyY2VMaXN0XG4gICAgICAgICAgICAgICAgc2hvd0hlYWRlclxuICAgICAgICAgICAgICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogJ1Byb2R1Y3QnLCBwbHVyYWw6ICdQcm9kdWN0cycgfX1cbiAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5ub2Rlc31cbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaWEgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF0gPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLm9yaWdpbmFsU3JjIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF0gPyBpdGVtLmltYWdlcy5lZGdlc1swXS5hbHRUZXh0IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhPXttZWRpYX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj0nc3Ryb25nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXNvdXJjZUxpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG5cbiAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0PlxuICAgICAgICA8L0NhcmQ+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ResourceList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ResourceList */ \"./components/ResourceList.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Index() {\n  const {\n    0: modal,\n    1: setModal\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    open: false\n  });\n  const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids');\n\n  function handleSelection(resources) {\n    const idsFromResources = resources.selection.map(product => product.id);\n    setModal({\n      open: false\n    });\n    store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set('ids', idsFromResources);\n    const selectedProducts = resources.selection;\n    deleteApiData();\n    selectedProducts.map(product => makeApiCall(product));\n  }\n\n  function deleteApiData() {\n    const url = '/api/products';\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.delete(url);\n  }\n\n  async function makeApiCall(products) {\n    const url = '/api/products';\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(url, products).then(result => console.log(result)).catch(error => console.log(error));\n  }\n\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__[\"TitleBar\"], {\n    primaryAction: {\n      content: 'Select New Products',\n      onAction: () => setModal({\n        open: true\n      })\n    }\n  }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__[\"ResourcePicker\"], {\n    resourceType: \"Product\",\n    showVariants: false,\n    open: modal.open,\n    onCancel: () => setModal({\n      open: false\n    }),\n    onSelection: resources => handleSelection(resources)\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, emptyState ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"EmptyState\"], {\n    heading: \"Manage your inventory transfers\",\n    action: {\n      content: 'Select Products',\n      onAction: () => setModal({\n        open: true\n      })\n    },\n    image: \"https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg\"\n  }, __jsx(\"p\", null, \"Select Products\")) : __jsx(_components_ResourceList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwibW9kYWwiLCJzZXRNb2RhbCIsInVzZVN0YXRlIiwib3BlbiIsImVtcHR5U3RhdGUiLCJzdG9yZSIsImdldCIsImhhbmRsZVNlbGVjdGlvbiIsInJlc291cmNlcyIsImlkc0Zyb21SZXNvdXJjZXMiLCJzZWxlY3Rpb24iLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJzZXQiLCJzZWxlY3RlZFByb2R1Y3RzIiwiZGVsZXRlQXBpRGF0YSIsIm1ha2VBcGlDYWxsIiwidXJsIiwiYXhpb3MiLCJkZWxldGUiLCJwcm9kdWN0cyIsInBvc3QiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJjb250ZW50Iiwib25BY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUNiLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQztBQUFDQyxRQUFJLEVBQUU7QUFBUCxHQUFELENBQWxDO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLENBQUNDLCtDQUFLLENBQUNDLEdBQU4sQ0FBVSxLQUFWLENBQXBCOztBQUVBLFdBQVNDLGVBQVQsQ0FBeUJDLFNBQXpCLEVBQW9DO0FBQ2hDLFVBQU1DLGdCQUFnQixHQUFHRCxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXlCQyxPQUFELElBQWFBLE9BQU8sQ0FBQ0MsRUFBN0MsQ0FBekI7QUFDQVosWUFBUSxDQUFDO0FBQUNFLFVBQUksRUFBRTtBQUFQLEtBQUQsQ0FBUjtBQUNBRSxtREFBSyxDQUFDUyxHQUFOLENBQVUsS0FBVixFQUFpQkwsZ0JBQWpCO0FBRUEsVUFBTU0sZ0JBQWdCLEdBQUdQLFNBQVMsQ0FBQ0UsU0FBbkM7QUFFQU0saUJBQWE7QUFFYkQsb0JBQWdCLENBQUNKLEdBQWpCLENBQXFCQyxPQUFPLElBQUlLLFdBQVcsQ0FBQ0wsT0FBRCxDQUEzQztBQUNIOztBQUVELFdBQVNJLGFBQVQsR0FBeUI7QUFDckIsVUFBTUUsR0FBRyxHQUFHLGVBQVo7QUFFQUMsZ0RBQUssQ0FBQ0MsTUFBTixDQUFhRixHQUFiO0FBQ0g7O0FBRUQsaUJBQWVELFdBQWYsQ0FBMkJJLFFBQTNCLEVBQXFDO0FBQ2pDLFVBQU1ILEdBQUcsR0FBRyxlQUFaO0FBRUFDLGdEQUFLLENBQUNHLElBQU4sQ0FBV0osR0FBWCxFQUFnQkcsUUFBaEIsRUFDS0UsSUFETCxDQUNVQyxNQUFNLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaLENBRHBCLEVBRUtHLEtBRkwsQ0FFV0MsS0FBSyxJQUFJSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsS0FBWixDQUZwQjtBQUdIOztBQUVELFNBQ0ksTUFBQyxxREFBRCxRQUNJLE1BQUMsa0VBQUQ7QUFDSSxpQkFBYSxFQUFFO0FBQ1hDLGFBQU8sRUFBRSxxQkFERTtBQUVYQyxjQUFRLEVBQUUsTUFBTTdCLFFBQVEsQ0FBQztBQUFFRSxZQUFJLEVBQUU7QUFBUixPQUFEO0FBRmI7QUFEbkIsSUFESixFQU9JLE1BQUMsd0VBQUQ7QUFDSSxnQkFBWSxFQUFDLFNBRGpCO0FBRUksZ0JBQVksRUFBRSxLQUZsQjtBQUdJLFFBQUksRUFBRUgsS0FBSyxDQUFDRyxJQUhoQjtBQUlJLFlBQVEsRUFBRSxNQUFNRixRQUFRLENBQUM7QUFBQ0UsVUFBSSxFQUFFO0FBQVAsS0FBRCxDQUo1QjtBQUtJLGVBQVcsRUFBR0ssU0FBRCxJQUFlRCxlQUFlLENBQUNDLFNBQUQ7QUFML0MsSUFQSixFQWNJLE1BQUMsdURBQUQsUUFDS0osVUFBVSxHQUNQLE1BQUMsMkRBQUQ7QUFDSSxXQUFPLEVBQUMsaUNBRFo7QUFFSSxVQUFNLEVBQUU7QUFDSnlCLGFBQU8sRUFBRSxpQkFETDtBQUVKQyxjQUFRLEVBQUUsTUFBTTdCLFFBQVEsQ0FBQztBQUFDRSxZQUFJLEVBQUU7QUFBUCxPQUFEO0FBRnBCLEtBRlo7QUFNSSxTQUFLLEVBQUM7QUFOVixLQVFJLG1DQVJKLENBRE8sR0FZUCxNQUFDLGdFQUFELE9BYlIsQ0FkSixDQURKO0FBaUNIOztBQUVjSixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RW1wdHlTdGF0ZSwgTGF5b3V0LCBQYWdlfSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xuaW1wb3J0IHtSZXNvdXJjZVBpY2tlciwgVGl0bGVCYXJ9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3RcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuICAgIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoe29wZW46IGZhbHNlfSlcbiAgICBjb25zdCBlbXB0eVN0YXRlID0gIXN0b3JlLmdldCgnaWRzJyk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKSB7XG4gICAgICAgIGNvbnN0IGlkc0Zyb21SZXNvdXJjZXMgPSByZXNvdXJjZXMuc2VsZWN0aW9uLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCk7XG4gICAgICAgIHNldE1vZGFsKHtvcGVuOiBmYWxzZX0pO1xuICAgICAgICBzdG9yZS5zZXQoJ2lkcycsIGlkc0Zyb21SZXNvdXJjZXMpXG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9kdWN0cyA9IHJlc291cmNlcy5zZWxlY3Rpb247XG5cbiAgICAgICAgZGVsZXRlQXBpRGF0YSgpO1xuXG4gICAgICAgIHNlbGVjdGVkUHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gbWFrZUFwaUNhbGwocHJvZHVjdCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUFwaURhdGEoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9ICcvYXBpL3Byb2R1Y3RzJztcblxuICAgICAgICBheGlvcy5kZWxldGUodXJsKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBtYWtlQXBpQ2FsbChwcm9kdWN0cykge1xuICAgICAgICBjb25zdCB1cmwgPSAnL2FwaS9wcm9kdWN0cyc7XG5cbiAgICAgICAgYXhpb3MucG9zdCh1cmwsIHByb2R1Y3RzKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlPlxuICAgICAgICAgICAgPFRpdGxlQmFyXG4gICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IE5ldyBQcm9kdWN0cycsXG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiBzZXRNb2RhbCh7IG9wZW46IHRydWUgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSZXNvdXJjZVBpY2tlclxuICAgICAgICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxuICAgICAgICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgb3Blbj17bW9kYWwub3Blbn1cbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0TW9kYWwoe29wZW46IGZhbHNlfSl9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Rpb249eyhyZXNvdXJjZXMpID0+IGhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAge2VtcHR5U3RhdGUgP1xuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz1cIk1hbmFnZSB5b3VyIGludmVudG9yeSB0cmFuc2ZlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1NlbGVjdCBQcm9kdWN0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHNldE1vZGFsKHtvcGVuOiB0cnVlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VsZWN0IFByb2R1Y3RzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RMaXN0Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9QYWdlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/elijah/Desktop/Projects/ShopifyApp/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI/MDY2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge-react\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiP2QxYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store-js\n");

/***/ })

/******/ });