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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/script-page.js":
/*!******************************!*\
  !*** ./pages/script-page.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst CREATE_SCRIPT_TAG = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\n    mutation scriptTagCreate($input: ScriptTagInput!) {\n        scriptTagCreate(input: $input) {\n            scriptTag {\n                id\n            }\n            userErrors {\n                field\n                message\n            }\n        }\n    }\n`;\nconst QUERY_SCRIPTTAGS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\n    query {\n        scriptTags(first: 5) {\n            edges {\n                node {\n                    id\n                    src\n                    displayScope\n                }\n            }\n        }\n    }\n`;\nconst DELETE_SCRIPTTAG = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\n    mutation scriptTagDelete($id: ID!) {\n        scriptTagDelete(id: $id) {\n            deletedScriptTagId\n            userErrors {\n                field\n                message\n            }\n        }\n    }\n`;\n\nfunction ScriptPage() {\n  const [createScripts] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"])(CREATE_SCRIPT_TAG);\n  const [deleteScripts] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"])(DELETE_SCRIPTTAG);\n  const {\n    loading,\n    error,\n    data\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(QUERY_SCRIPTTAGS);\n  if (loading) return __jsx(\"div\", null, \"Loading\\u2026\");\n  if (error) return __jsx(\"div\", null, error.message);\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Page\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n    title: \"These are the Script Tags:\",\n    sectioned: true\n  }, __jsx(\"p\", null, \"Create or Delete a Script Tag\"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, {\n    secondary: true\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n    title: \"Delete Tag\",\n    sectioned: true\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    primary: true,\n    size: \"slim\",\n    type: \"submit\",\n    onClick: () => {\n      createScripts({\n        variables: {\n          input: {\n            src: \"https://4b913a5ed961.ngrok.io/test-script.js\",\n            displayScope: \"ALL\"\n          }\n        },\n        refetchQueries: [{\n          query: QUERY_SCRIPTTAGS\n        }]\n      });\n    }\n  }, \"Create Script Tag\"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"ResourceList\"], {\n    showHeader: true,\n    resourceName: {\n      singular: 'Script',\n      plural: 'Scripts'\n    },\n    items: data.scriptTags.edges,\n    renderItem: item => {\n      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"ResourceList\"].Item, {\n        id: item.id\n      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, null, __jsx(\"p\", null, item.node.id)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n        type: \"submit\",\n        onClick: () => {\n          deleteScripts({\n            variables: {\n              id: item.node.id\n            },\n            refetchQueries: [{\n              query: QUERY_SCRIPTTAGS\n            }]\n          });\n        }\n      }, \"Delete Script Tag\"))));\n    }\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScriptPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zY3JpcHQtcGFnZS5qcz9jYzkwIl0sIm5hbWVzIjpbIkNSRUFURV9TQ1JJUFRfVEFHIiwiZ3FsIiwiUVVFUllfU0NSSVBUVEFHUyIsIkRFTEVURV9TQ1JJUFRUQUciLCJTY3JpcHRQYWdlIiwiY3JlYXRlU2NyaXB0cyIsInVzZU11dGF0aW9uIiwiZGVsZXRlU2NyaXB0cyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VRdWVyeSIsIm1lc3NhZ2UiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInNyYyIsImRpc3BsYXlTY29wZSIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJzaW5ndWxhciIsInBsdXJhbCIsInNjcmlwdFRhZ3MiLCJlZGdlcyIsIml0ZW0iLCJpZCIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsaUJBQWlCLEdBQUdDLGtEQUFJOzs7Ozs7Ozs7Ozs7Q0FBOUI7QUFjQSxNQUFNQyxnQkFBZ0IsR0FBR0Qsa0RBQUk7Ozs7Ozs7Ozs7OztDQUE3QjtBQWNBLE1BQU1FLGdCQUFnQixHQUFHRixrREFBSTs7Ozs7Ozs7OztDQUE3Qjs7QUFhQSxTQUFTRyxVQUFULEdBQXNCO0FBQ2xCLFFBQU0sQ0FBQ0MsYUFBRCxJQUFrQkMsdUVBQVcsQ0FBQ04saUJBQUQsQ0FBbkM7QUFDQSxRQUFNLENBQUNPLGFBQUQsSUFBa0JELHVFQUFXLENBQUNILGdCQUFELENBQW5DO0FBQ0EsUUFBTTtBQUFDSyxXQUFEO0FBQVVDLFNBQVY7QUFBaUJDO0FBQWpCLE1BQXlCQyxvRUFBUSxDQUFDVCxnQkFBRCxDQUF2QztBQUVBLE1BQUlNLE9BQUosRUFBYSxPQUFPLG1DQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLE9BQU8sbUJBQU1BLEtBQUssQ0FBQ0csT0FBWixDQUFQO0FBRVgsU0FDSSxNQUFDLHFEQUFELFFBQ0ksTUFBQyx1REFBRCxRQUNJLE1BQUMsdURBQUQsQ0FBUSxPQUFSLFFBQ0ksTUFBQyxxREFBRDtBQUFNLFNBQUssRUFBQyw0QkFBWjtBQUF5QyxhQUFTO0FBQWxELEtBQ0ksaURBREosQ0FESixDQURKLEVBUUksTUFBQyx1REFBRCxDQUFRLE9BQVI7QUFBZ0IsYUFBUztBQUF6QixLQUNJLE1BQUMscURBQUQ7QUFBTSxTQUFLLEVBQUMsWUFBWjtBQUF5QixhQUFTO0FBQWxDLEtBQ0ksTUFBQyx1REFBRDtBQUNJLFdBQU8sTUFEWDtBQUVJLFFBQUksRUFBQyxNQUZUO0FBR0ksUUFBSSxFQUFDLFFBSFQ7QUFHa0IsV0FBTyxFQUFFLE1BQU07QUFDN0JQLG1CQUFhLENBQUM7QUFDVlEsaUJBQVMsRUFBRTtBQUNQQyxlQUFLLEVBQUU7QUFDSEMsZUFBRyxFQUFFLDhDQURGO0FBRUhDLHdCQUFZLEVBQUU7QUFGWDtBQURBLFNBREQ7QUFPVkMsc0JBQWMsRUFBRSxDQUFDO0FBQUNDLGVBQUssRUFBRWhCO0FBQVIsU0FBRDtBQVBOLE9BQUQsQ0FBYjtBQVNIO0FBYkQseUJBREosQ0FESixDQVJKLEVBNkJJLE1BQUMsdURBQUQsQ0FBUSxPQUFSLFFBQ0ksTUFBQyxxREFBRCxRQUNJLE1BQUMsNkRBQUQ7QUFDSSxjQUFVLE1BRGQ7QUFFSSxnQkFBWSxFQUFFO0FBQUNpQixjQUFRLEVBQUUsUUFBWDtBQUFxQkMsWUFBTSxFQUFFO0FBQTdCLEtBRmxCO0FBR0ksU0FBSyxFQUFFVixJQUFJLENBQUNXLFVBQUwsQ0FBZ0JDLEtBSDNCO0FBSUksY0FBVSxFQUFFQyxJQUFJLElBQUk7QUFDaEIsYUFDSSxNQUFDLDZEQUFELENBQWMsSUFBZDtBQUNJLFVBQUUsRUFBRUEsSUFBSSxDQUFDQztBQURiLFNBR0ksTUFBQyxzREFBRCxRQUNJLE1BQUMsc0RBQUQsQ0FBTyxJQUFQLFFBQ0ksaUJBQ0tELElBQUksQ0FBQ0UsSUFBTCxDQUFVRCxFQURmLENBREosQ0FESixFQU1JLE1BQUMsc0RBQUQsQ0FBTyxJQUFQLFFBQ0ksTUFBQyx1REFBRDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRSxNQUFNO0FBQ2pDakIsdUJBQWEsQ0FBQztBQUNWTSxxQkFBUyxFQUFFO0FBQ1BXLGdCQUFFLEVBQUVELElBQUksQ0FBQ0UsSUFBTCxDQUFVRDtBQURQLGFBREQ7QUFJVlAsMEJBQWMsRUFBRSxDQUFDO0FBQUNDLG1CQUFLLEVBQUVoQjtBQUFSLGFBQUQ7QUFKTixXQUFELENBQWI7QUFNSDtBQVBELDZCQURKLENBTkosQ0FISixDQURKO0FBeUJIO0FBOUJMLElBREosQ0FESixDQTdCSixDQURKLENBREo7QUFzRUg7O0FBRWNFLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2NyaXB0LXBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7dXNlUXVlcnksIHVzZU11dGF0aW9ufSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBMYXlvdXQsIFBhZ2UsIFJlc291cmNlTGlzdCwgU3RhY2sgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcblxuY29uc3QgQ1JFQVRFX1NDUklQVF9UQUcgPSBncWxgXG4gICAgbXV0YXRpb24gc2NyaXB0VGFnQ3JlYXRlKCRpbnB1dDogU2NyaXB0VGFnSW5wdXQhKSB7XG4gICAgICAgIHNjcmlwdFRhZ0NyZWF0ZShpbnB1dDogJGlucHV0KSB7XG4gICAgICAgICAgICBzY3JpcHRUYWcge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1c2VyRXJyb3JzIHtcbiAgICAgICAgICAgICAgICBmaWVsZFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmNvbnN0IFFVRVJZX1NDUklQVFRBR1MgPSBncWxgXG4gICAgcXVlcnkge1xuICAgICAgICBzY3JpcHRUYWdzKGZpcnN0OiA1KSB7XG4gICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIHNyY1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U2NvcGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5jb25zdCBERUxFVEVfU0NSSVBUVEFHID0gZ3FsYFxuICAgIG11dGF0aW9uIHNjcmlwdFRhZ0RlbGV0ZSgkaWQ6IElEISkge1xuICAgICAgICBzY3JpcHRUYWdEZWxldGUoaWQ6ICRpZCkge1xuICAgICAgICAgICAgZGVsZXRlZFNjcmlwdFRhZ0lkXG4gICAgICAgICAgICB1c2VyRXJyb3JzIHtcbiAgICAgICAgICAgICAgICBmaWVsZFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cblxuZnVuY3Rpb24gU2NyaXB0UGFnZSgpIHtcbiAgICBjb25zdCBbY3JlYXRlU2NyaXB0c10gPSB1c2VNdXRhdGlvbihDUkVBVEVfU0NSSVBUX1RBRyk7XG4gICAgY29uc3QgW2RlbGV0ZVNjcmlwdHNdID0gdXNlTXV0YXRpb24oREVMRVRFX1NDUklQVFRBRyk7XG4gICAgY29uc3Qge2xvYWRpbmcsIGVycm9yLCBkYXRhfSA9IHVzZVF1ZXJ5KFFVRVJZX1NDUklQVFRBR1MpO1xuXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmfigKY8L2Rpdj47XG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT1cIlRoZXNlIGFyZSB0aGUgU2NyaXB0IFRhZ3M6XCIgc2VjdGlvbmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIG9yIERlbGV0ZSBhIFNjcmlwdCBUYWdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIHNlY29uZGFyeT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgdGl0bGU9XCJEZWxldGUgVGFnXCIgc2VjdGlvbmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic2xpbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTY3JpcHRzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJodHRwczovLzRiOTEzYTVlZDk2MS5uZ3Jvay5pby90ZXN0LXNjcmlwdC5qc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTY29wZTogXCJBTExcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3txdWVyeTogUVVFUllfU0NSSVBUVEFHU31dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIFNjcmlwdCBUYWdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZU5hbWU9e3tzaW5ndWxhcjogJ1NjcmlwdCcsIHBsdXJhbDogJ1NjcmlwdHMnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5zY3JpcHRUYWdzLmVkZ2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5vZGUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVNjcmlwdHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLm5vZGUuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7cXVlcnk6IFFVRVJZX1NDUklQVFRBR1N9XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGUgU2NyaXB0IFRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXNvdXJjZUxpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L1BhZ2U+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/script-page.js\n");

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./pages/script-page.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/elijah/Desktop/Projects/ShopifyApp/pages/script-page.js */"./pages/script-page.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

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

/***/ })

/******/ });