module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/JoinForm.jsx":
/*!*********************************!*\
  !*** ./components/JoinForm.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\callor\\Documents\\workspace\\React_Project\\react-2020\\react-900-counseling\\components\\JoinForm.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const TextInput = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(({
  value,
  onChange,
  name,
  type,
  className
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
    type: type,
    name: name,
    value: value,
    required: true,
    onChange: onChange,
    className: className
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
});

const useInput = (initValue = null) => {
  const {
    0: value,
    1: setter
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const AuthForm = () => {
  const {
    0: authError,
    1: setAuthError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    curriculum: "",
    userName: "",
    email: "",
    phone: ""
  });
  const {
    0: inputBox,
    1: setInputBox
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    uerName: "",
    phone: "",
    email: "",
    curriculum: "NONE"
  });
  const onChangInputBox = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    const {
      name,
      value
    } = e.target;
    setInputBox(_objectSpread(_objectSpread({}, inputBox), {}, {
      [name]: value
    }));
    const msg = e.target.dataset.msg;
    setAuthError(_objectSpread(_objectSpread({}, authError), {}, {
      [name]: value === "NONE" || !value ? `${msg} 반드시 입력(선택) 해야 합니다` : ""
    }));
  }, [inputBox]);

  const onSubmit = async event => {
    event.preventDefault();

    try {
      setAuthError({
        curriculum: inputBox.curriculum === "NONE" ? "직종을 선택하세요" : "",
        email: !inputBox.email ? "E-mail을 입력하세요" : "",
        userName: !inputBox.userName ? "이름을 입력하세요" : "",
        phone: !inputBox.phone ? "휴대폰 번호를 입력하세요" : ""
      });
    } catch (error) {
      alert(error.message);
      setAuthError(error.message);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "authContainer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "\uD55C\uAD6D\uACBD\uC601\uC6D0 \uC778\uC7AC\uAC1C\uBC1C\uC6D0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        name: "curriculum",
        "data-msg": "\uD6C8\uB828\uC9C1\uC885\uC740",
        className: "authInput",
        value: inputBox.curriculum,
        onChange: onChangInputBox,
        "data-size": "2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "NONE",
          children: "\uD6C8\uB828\uC9C1\uC885\uC120\uD0DD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "SpringMVC",
          children: "SpringMVC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Java_Python",
          children: "\uC790\uBC14&\uD30C\uC774\uC36C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined), authError.curriculum && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "authError",
        children: authError.curriculum
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 34
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "email",
        "data-msg": "\uC774\uBA54\uC77C\uC740",
        type: "email",
        placeholder: "Email",
        value: inputBox.email,
        onChange: onChangInputBox,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined), authError.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "authError",
        children: authError.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 29
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "userName",
        "data-msg": "\uC774\uB984\uC740",
        type: "text",
        placeholder: "\uC774\uB984",
        value: inputBox.userName,
        onChange: onChangInputBox,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined), authError.userName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "authError",
        children: authError.userName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 32
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "phone",
        "data-msg": "\uC804\uD654\uBC88\uD638\uB294",
        type: "phone",
        placeholder: "\uC804\uD654\uBC88\uD638",
        value: inputBox.phone,
        onChange: onChangInputBox,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined), authError.phone && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "authError",
        children: authError.phone
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 29
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "submit",
        className: "authInput authSubmit",
        value: "\uB4F1\uB85D\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthForm);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_JoinForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/JoinForm */ "./components/JoinForm.jsx");


var _jsxFileName = "C:\\Users\\callor\\Documents\\workspace\\React_Project\\react-2020\\react-900-counseling\\pages\\index.js";



const Home = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_JoinForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Kb2luRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJUZXh0SW5wdXQiLCJtZW1vIiwidmFsdWUiLCJvbkNoYW5nZSIsIm5hbWUiLCJ0eXBlIiwiY2xhc3NOYW1lIiwidXNlSW5wdXQiLCJpbml0VmFsdWUiLCJzZXR0ZXIiLCJ1c2VTdGF0ZSIsImhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJBdXRoRm9ybSIsImF1dGhFcnJvciIsInNldEF1dGhFcnJvciIsImN1cnJpY3VsdW0iLCJ1c2VyTmFtZSIsImVtYWlsIiwicGhvbmUiLCJpbnB1dEJveCIsInNldElucHV0Qm94IiwidWVyTmFtZSIsIm9uQ2hhbmdJbnB1dEJveCIsIm1zZyIsImRhdGFzZXQiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsImFsZXJ0IiwibWVzc2FnZSIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVBLE1BQU1BLFNBQVMsZ0JBQUdDLGtEQUFJLENBQUMsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLFVBQVQ7QUFBbUJDLE1BQW5CO0FBQXlCQyxNQUF6QjtBQUErQkM7QUFBL0IsQ0FBRCxLQUFnRDtBQUNyRSxzQkFBTztBQUFPLFFBQUksRUFBRUQsSUFBYjtBQUFtQixRQUFJLEVBQUVELElBQXpCO0FBQStCLFNBQUssRUFBRUYsS0FBdEM7QUFBNkMsWUFBUSxNQUFyRDtBQUFzRCxZQUFRLEVBQUVDLFFBQWhFO0FBQTBFLGFBQVMsRUFBRUc7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGcUIsQ0FBdEI7O0FBSUEsTUFBTUMsUUFBUSxHQUFHLENBQUNDLFNBQVMsR0FBRyxJQUFiLEtBQXNCO0FBQ3JDLFFBQU07QUFBQSxPQUFDTixLQUFEO0FBQUEsT0FBUU87QUFBUixNQUFrQkMsc0RBQVEsQ0FBQ0YsU0FBRCxDQUFoQztBQUNBLFFBQU1HLE9BQU8sR0FBR0MseURBQVcsQ0FBRUMsQ0FBRCxJQUFPO0FBQ2pDSixVQUFNLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTWixLQUFWLENBQU47QUFDRCxHQUYwQixFQUV4QixFQUZ3QixDQUEzQjtBQUdBLFNBQU8sQ0FBQ0EsS0FBRCxFQUFRUyxPQUFSLENBQVA7QUFDRCxDQU5EOztBQVFBLE1BQU1JLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QlAsc0RBQVEsQ0FBQztBQUN6Q1EsY0FBVSxFQUFFLEVBRDZCO0FBRXpDQyxZQUFRLEVBQUUsRUFGK0I7QUFHekNDLFNBQUssRUFBRSxFQUhrQztBQUl6Q0MsU0FBSyxFQUFFO0FBSmtDLEdBQUQsQ0FBMUM7QUFNQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJiLHNEQUFRLENBQUM7QUFDdkNjLFdBQU8sRUFBRSxFQUQ4QjtBQUV2Q0gsU0FBSyxFQUFFLEVBRmdDO0FBR3ZDRCxTQUFLLEVBQUUsRUFIZ0M7QUFJdkNGLGNBQVUsRUFBRTtBQUoyQixHQUFELENBQXhDO0FBT0EsUUFBTU8sZUFBZSxHQUFHYix5REFBVyxDQUNoQ0MsQ0FBRCxJQUFPO0FBQ0wsVUFBTTtBQUFFVCxVQUFGO0FBQVFGO0FBQVIsUUFBa0JXLENBQUMsQ0FBQ0MsTUFBMUI7QUFDQVMsZUFBVyxpQ0FDTkQsUUFETTtBQUVULE9BQUNsQixJQUFELEdBQVFGO0FBRkMsT0FBWDtBQUlBLFVBQU13QixHQUFHLEdBQUdiLENBQUMsQ0FBQ0MsTUFBRixDQUFTYSxPQUFULENBQWlCRCxHQUE3QjtBQUNBVCxnQkFBWSxpQ0FDUEQsU0FETztBQUVWLE9BQUNaLElBQUQsR0FBUUYsS0FBSyxLQUFLLE1BQVYsSUFBb0IsQ0FBQ0EsS0FBckIsR0FBOEIsR0FBRXdCLEdBQUksb0JBQXBDLEdBQTBEO0FBRnhELE9BQVo7QUFJRCxHQVpnQyxFQWFqQyxDQUFDSixRQUFELENBYmlDLENBQW5DOztBQWdCQSxRQUFNTSxRQUFRLEdBQUcsTUFBT0MsS0FBUCxJQUFpQjtBQUNoQ0EsU0FBSyxDQUFDQyxjQUFOOztBQUNBLFFBQUk7QUFDRmIsa0JBQVksQ0FBQztBQUNYQyxrQkFBVSxFQUFFSSxRQUFRLENBQUNKLFVBQVQsS0FBd0IsTUFBeEIsR0FBaUMsV0FBakMsR0FBK0MsRUFEaEQ7QUFFWEUsYUFBSyxFQUFFLENBQUNFLFFBQVEsQ0FBQ0YsS0FBVixHQUFrQixlQUFsQixHQUFvQyxFQUZoQztBQUdYRCxnQkFBUSxFQUFFLENBQUNHLFFBQVEsQ0FBQ0gsUUFBVixHQUFxQixXQUFyQixHQUFtQyxFQUhsQztBQUlYRSxhQUFLLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDRCxLQUFWLEdBQWtCLGVBQWxCLEdBQW9DO0FBSmhDLE9BQUQsQ0FBWjtBQU1ELEtBUEQsQ0FPRSxPQUFPVSxLQUFQLEVBQWM7QUFDZEMsV0FBSyxDQUFDRCxLQUFLLENBQUNFLE9BQVAsQ0FBTDtBQUNBaEIsa0JBQVksQ0FBQ2MsS0FBSyxDQUFDRSxPQUFQLENBQVo7QUFDRDtBQUNGLEdBYkQ7O0FBZUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTSxjQUFRLEVBQUVMLFFBQWhCO0FBQTBCLGVBQVMsRUFBQyxXQUFwQztBQUFBLDhCQUNFO0FBQVEsWUFBSSxFQUFDLFlBQWI7QUFBMEIsb0JBQVMsZ0NBQW5DO0FBQTJDLGlCQUFTLEVBQUMsV0FBckQ7QUFBaUUsYUFBSyxFQUFFTixRQUFRLENBQUNKLFVBQWpGO0FBQTZGLGdCQUFRLEVBQUVPLGVBQXZHO0FBQXdILHFCQUFVLEdBQWxJO0FBQUEsZ0NBQ0U7QUFBUSxlQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQVEsZUFBSyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFRLGVBQUssRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQU1HVCxTQUFTLENBQUNFLFVBQVYsaUJBQXdCO0FBQU0saUJBQVMsRUFBQyxXQUFoQjtBQUFBLGtCQUE2QkYsU0FBUyxDQUFDRTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU4zQixlQVFFO0FBQU8sWUFBSSxFQUFDLE9BQVo7QUFBb0Isb0JBQVMsMEJBQTdCO0FBQW9DLFlBQUksRUFBQyxPQUF6QztBQUFpRCxtQkFBVyxFQUFDLE9BQTdEO0FBQXFFLGFBQUssRUFBRUksUUFBUSxDQUFDRixLQUFyRjtBQUE0RixnQkFBUSxFQUFFSyxlQUF0RztBQUF1SCxpQkFBUyxFQUFDO0FBQWpJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsRUFTR1QsU0FBUyxDQUFDSSxLQUFWLGlCQUFtQjtBQUFNLGlCQUFTLEVBQUMsV0FBaEI7QUFBQSxrQkFBNkJKLFNBQVMsQ0FBQ0k7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUdEIsZUFXRTtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLG9CQUFTLG9CQUFoQztBQUFzQyxZQUFJLEVBQUMsTUFBM0M7QUFBa0QsbUJBQVcsRUFBQyxjQUE5RDtBQUFtRSxhQUFLLEVBQUVFLFFBQVEsQ0FBQ0gsUUFBbkY7QUFBNkYsZ0JBQVEsRUFBRU0sZUFBdkc7QUFBd0gsaUJBQVMsRUFBQztBQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGLEVBWUdULFNBQVMsQ0FBQ0csUUFBVixpQkFBc0I7QUFBTSxpQkFBUyxFQUFDLFdBQWhCO0FBQUEsa0JBQTZCSCxTQUFTLENBQUNHO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWnpCLGVBY0U7QUFBTyxZQUFJLEVBQUMsT0FBWjtBQUFvQixvQkFBUyxnQ0FBN0I7QUFBcUMsWUFBSSxFQUFDLE9BQTFDO0FBQWtELG1CQUFXLEVBQUMsMEJBQTlEO0FBQXFFLGFBQUssRUFBRUcsUUFBUSxDQUFDRCxLQUFyRjtBQUE0RixnQkFBUSxFQUFFSSxlQUF0RztBQUF1SCxpQkFBUyxFQUFDO0FBQWpJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEYsRUFlR1QsU0FBUyxDQUFDSyxLQUFWLGlCQUFtQjtBQUFNLGlCQUFTLEVBQUMsV0FBaEI7QUFBQSxrQkFBNkJMLFNBQVMsQ0FBQ0s7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmdEIsZUFpQkU7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFDLHNCQUEvQjtBQUFzRCxhQUFLLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBd0JELENBckVEOztBQXNFZU4sdUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7O0FBRUEsTUFBTW1CLElBQUksR0FBRyxNQUFNO0FBQ2pCLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBS0QsQ0FORDs7QUFRZUEsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNYQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRleHRJbnB1dCA9IG1lbW8oKHsgdmFsdWUsIG9uQ2hhbmdlLCBuYW1lLCB0eXBlLCBjbGFzc05hbWUgfSkgPT4ge1xyXG4gIHJldHVybiA8aW5wdXQgdHlwZT17dHlwZX0gbmFtZT17bmFtZX0gdmFsdWU9e3ZhbHVlfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2V9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSAvPjtcclxufSk7XHJcblxyXG5jb25zdCB1c2VJbnB1dCA9IChpbml0VmFsdWUgPSBudWxsKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXR0ZXJdID0gdXNlU3RhdGUoaW5pdFZhbHVlKTtcclxuICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldHRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiBbdmFsdWUsIGhhbmRsZXJdO1xyXG59O1xyXG5cclxuY29uc3QgQXV0aEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2F1dGhFcnJvciwgc2V0QXV0aEVycm9yXSA9IHVzZVN0YXRlKHtcclxuICAgIGN1cnJpY3VsdW06IFwiXCIsXHJcbiAgICB1c2VyTmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2lucHV0Qm94LCBzZXRJbnB1dEJveF0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1ZXJOYW1lOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIGN1cnJpY3VsdW06IFwiTk9ORVwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nSW5wdXRCb3ggPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgICBzZXRJbnB1dEJveCh7XHJcbiAgICAgICAgLi4uaW5wdXRCb3gsXHJcbiAgICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IG1zZyA9IGUudGFyZ2V0LmRhdGFzZXQubXNnO1xyXG4gICAgICBzZXRBdXRoRXJyb3Ioe1xyXG4gICAgICAgIC4uLmF1dGhFcnJvcixcclxuICAgICAgICBbbmFtZV06IHZhbHVlID09PSBcIk5PTkVcIiB8fCAhdmFsdWUgPyBgJHttc2d9IOuwmOuTnOyLnCDsnoXroKUo7ISg7YOdKSDtlbTslbwg7ZWp64uI64ukYCA6IFwiXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtpbnB1dEJveF1cclxuICApO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldEF1dGhFcnJvcih7XHJcbiAgICAgICAgY3VycmljdWx1bTogaW5wdXRCb3guY3VycmljdWx1bSA9PT0gXCJOT05FXCIgPyBcIuyngeyiheydhCDshKDtg53tlZjshLjsmpRcIiA6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6ICFpbnB1dEJveC5lbWFpbCA/IFwiRS1tYWls7J2EIOyeheugpe2VmOyEuOyalFwiIDogXCJcIixcclxuICAgICAgICB1c2VyTmFtZTogIWlucHV0Qm94LnVzZXJOYW1lID8gXCLsnbTrpoTsnYQg7J6F66Cl7ZWY7IS47JqUXCIgOiBcIlwiLFxyXG4gICAgICAgIHBob25lOiAhaW5wdXRCb3gucGhvbmUgPyBcIu2ctOuMgO2PsCDrsojtmLjrpbwg7J6F66Cl7ZWY7IS47JqUXCIgOiBcIlwiLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICBzZXRBdXRoRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aENvbnRhaW5lclwiPlxyXG4gICAgICA8aDM+7ZWc6rWt6rK97JiB7JuQIOyduOyerOqwnOuwnOybkDwvaDM+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHNlbGVjdCBuYW1lPVwiY3VycmljdWx1bVwiIGRhdGEtbXNnPVwi7ZuI66Co7KeB7KKF7J2AXCIgY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgdmFsdWU9e2lucHV0Qm94LmN1cnJpY3VsdW19IG9uQ2hhbmdlPXtvbkNoYW5nSW5wdXRCb3h9IGRhdGEtc2l6ZT1cIjJcIj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOT05FXCI+7ZuI66Co7KeB7KKF7ISg7YOdPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3ByaW5nTVZDXCI+U3ByaW5nTVZDPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSmF2YV9QeXRob25cIj7snpDrsJQm7YyM7J207I2sPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAge2F1dGhFcnJvci5jdXJyaWN1bHVtICYmIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhFcnJvclwiPnthdXRoRXJyb3IuY3VycmljdWx1bX08L3NwYW4+fVxyXG5cclxuICAgICAgICA8aW5wdXQgbmFtZT1cImVtYWlsXCIgZGF0YS1tc2c9XCLsnbTrqZTsnbzsnYBcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdmFsdWU9e2lucHV0Qm94LmVtYWlsfSBvbkNoYW5nZT17b25DaGFuZ0lucHV0Qm94fSBjbGFzc05hbWU9XCJhdXRoSW5wdXRcIiAvPlxyXG4gICAgICAgIHthdXRoRXJyb3IuZW1haWwgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aEVycm9yXCI+e2F1dGhFcnJvci5lbWFpbH08L3NwYW4+fVxyXG5cclxuICAgICAgICA8aW5wdXQgbmFtZT1cInVzZXJOYW1lXCIgZGF0YS1tc2c9XCLsnbTrpoTsnYBcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi7J2066aEXCIgdmFsdWU9e2lucHV0Qm94LnVzZXJOYW1lfSBvbkNoYW5nZT17b25DaGFuZ0lucHV0Qm94fSBjbGFzc05hbWU9XCJhdXRoSW5wdXRcIiAvPlxyXG4gICAgICAgIHthdXRoRXJyb3IudXNlck5hbWUgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aEVycm9yXCI+e2F1dGhFcnJvci51c2VyTmFtZX08L3NwYW4+fVxyXG5cclxuICAgICAgICA8aW5wdXQgbmFtZT1cInBob25lXCIgZGF0YS1tc2c9XCLsoITtmZTrsojtmLjripRcIiB0eXBlPVwicGhvbmVcIiBwbGFjZWhvbGRlcj1cIuyghO2ZlOuyiO2YuFwiIHZhbHVlPXtpbnB1dEJveC5waG9uZX0gb25DaGFuZ2U9e29uQ2hhbmdJbnB1dEJveH0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuICAgICAgICB7YXV0aEVycm9yLnBob25lICYmIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhFcnJvclwiPnthdXRoRXJyb3IucGhvbmV9PC9zcGFuPn1cclxuXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhdXRoSW5wdXQgYXV0aFN1Ym1pdFwiIHZhbHVlPVwi65Ox66Gd7ZWY6riwXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEpvaW5Gb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0pvaW5Gb3JtXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Sm9pbkZvcm0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==