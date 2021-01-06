webpackHotUpdate_N_E("pages/index",{

/***/ "./components/JoinForm.jsx":
/*!*********************************!*\
  !*** ./components/JoinForm.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\callor\\Documents\\workspace\\React_Project\\react-2020\\react-900-counseling\\components\\JoinForm.jsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


const TextInput = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(_c = ({
  value,
  onChange,
  name,
  type,
  className
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
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
_c2 = TextInput;

const useInput = (initValue = null) => {
  _s();

  const {
    0: value,
    1: setter
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

_s(useInput, "jJC7NbJZBwPw2rLfrH4q62FtgpU=");

const AuthForm = () => {
  _s2();

  const {
    0: authError,
    1: setAuthError
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    curriculum: "",
    userName: "",
    email: "",
    phone: ""
  });
  const {
    0: inputBox,
    1: setInputBox
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    uerName: "",
    phone: "",
    email: "",
    curriculum: "NONE"
  });
  const onChangInputBox = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(e => {
    const {
      name,
      value
    } = e.target;
    setInputBox(_objectSpread(_objectSpread({}, inputBox), {}, {
      [name]: value
    }));
    const msg = e.target.dataset.msg;
    setAuthError(_objectSpread(_objectSpread({}, authError), {}, {
      [name]: value === "NONE" || !value ? `${msg} 반드시 입력해야 합니다` : ""
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "authContainer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
      children: "\uD55C\uAD6D\uACBD\uC601\uC6D0 \uC778\uC7AC\uAC1C\uBC1C\uC6D0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
        name: "curriculum",
        "data-msg": "\uD6C8\uB828\uC9C1\uC885\uC740",
        className: "authInput",
        value: inputBox.curriculum,
        onChange: onChangInputBox,
        "data-size": "2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: "NONE",
          children: "\uD6C8\uB828\uC9C1\uC885\uC120\uD0DD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: "SpringMVC",
          children: "SpringMVC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
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
      }, undefined), authError.curriculum && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.curriculum
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 34
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
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
      }, undefined), authError.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 29
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
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
      }, undefined), authError.userName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.userName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 32
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
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
      }, undefined), authError.phone && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.phone
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 29
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
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

_s2(AuthForm, "93SfzUc76jzu+0GUTG5uOObwEdw=");

_c3 = AuthForm;
/* harmony default export */ __webpack_exports__["default"] = (AuthForm);

var _c, _c2, _c3;

$RefreshReg$(_c, "TextInput$memo");
$RefreshReg$(_c2, "TextInput");
$RefreshReg$(_c3, "AuthForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2luRm9ybS5qc3giXSwibmFtZXMiOlsiVGV4dElucHV0IiwibWVtbyIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwidHlwZSIsImNsYXNzTmFtZSIsInVzZUlucHV0IiwiaW5pdFZhbHVlIiwic2V0dGVyIiwidXNlU3RhdGUiLCJoYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwiQXV0aEZvcm0iLCJhdXRoRXJyb3IiLCJzZXRBdXRoRXJyb3IiLCJjdXJyaWN1bHVtIiwidXNlck5hbWUiLCJlbWFpbCIsInBob25lIiwiaW5wdXRCb3giLCJzZXRJbnB1dEJveCIsInVlck5hbWUiLCJvbkNoYW5nSW5wdXRCb3giLCJtc2ciLCJkYXRhc2V0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsU0FBUyxnQkFBR0Msa0RBQUksTUFBQyxDQUFDO0FBQUVDLE9BQUY7QUFBU0MsVUFBVDtBQUFtQkMsTUFBbkI7QUFBeUJDLE1BQXpCO0FBQStCQztBQUEvQixDQUFELEtBQWdEO0FBQ3JFLHNCQUFPO0FBQU8sUUFBSSxFQUFFRCxJQUFiO0FBQW1CLFFBQUksRUFBRUQsSUFBekI7QUFBK0IsU0FBSyxFQUFFRixLQUF0QztBQUE2QyxZQUFRLE1BQXJEO0FBQXNELFlBQVEsRUFBRUMsUUFBaEU7QUFBMEUsYUFBUyxFQUFFRztBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZxQixDQUF0QjtNQUFNTixTOztBQUlOLE1BQU1PLFFBQVEsR0FBRyxDQUFDQyxTQUFTLEdBQUcsSUFBYixLQUFzQjtBQUFBOztBQUNyQyxRQUFNO0FBQUEsT0FBQ04sS0FBRDtBQUFBLE9BQVFPO0FBQVIsTUFBa0JDLHNEQUFRLENBQUNGLFNBQUQs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QUMsMEJBQTlEO0FBQXFFLGFBQUssRUFBRUcsUUFBUSxDQUFDRCxLQUFyRjtBQUE0RixnQkFBUSxFQUFFSSxlQUF0RztBQUF1SCxpQkFBUyxFQUFDO0FBQWpJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEYsRUFlR1QsU0FBUyxDQUFDSyxLQUFWLGlCQUFtQjtBQUFNLGlCQUFTLEVBQUMsV0FBaEI7QUFBQSxrQkFBNkJMLFNBQVMsQ0FBQ0s7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmdEIsZUFpQkU7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFDLHNCQUEvQjtBQUFzRCxhQUFLLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBd0JELENBckVEOztJQUFNTixROztNQUFBQSxRO0FBc0VTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNGM0ZmRmNzYwMGYyYzVhZGFlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUZXh0SW5wdXQgPSBtZW1vKCh7IHZhbHVlLCBvbkNoYW5nZSwgbmFtZSwgdHlwZSwgY2xhc3NOYW1lIH0pID0+IHtcclxuICByZXR1cm4gPGlucHV0IHR5cGU9e3R5cGV9IG5hbWU9e25hbWV9IHZhbHVlPXt2YWx1ZX0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLz47XHJcbn0pO1xyXG5cclxuY29uc3QgdXNlSW5wdXQgPSAoaW5pdFZhbHVlID0gbnVsbCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0dGVyXSA9IHVzZVN0YXRlKGluaXRWYWx1ZSk7XHJcbiAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXR0ZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyXTtcclxufTtcclxuXHJcbmNvbnN0IEF1dGhGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthdXRoRXJyb3IsIHNldEF1dGhFcnJvcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjdXJyaWN1bHVtOiBcIlwiLFxyXG4gICAgdXNlck5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtpbnB1dEJveCwgc2V0SW5wdXRCb3hdID0gdXNlU3RhdGUoe1xyXG4gICAgdWVyTmFtZTogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBjdXJyaWN1bHVtOiBcIk5PTkVcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ0lucHV0Qm94ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgICAgc2V0SW5wdXRCb3goe1xyXG4gICAgICAgIC4uLmlucHV0Qm94LFxyXG4gICAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBtc2cgPSBlLnRhcmdldC5kYXRhc2V0Lm1zZztcclxuICAgICAgc2V0QXV0aEVycm9yKHtcclxuICAgICAgICAuLi5hdXRoRXJyb3IsXHJcbiAgICAgICAgW25hbWVdOiB2YWx1ZSA9PT0gXCJOT05FXCIgfHwgIXZhbHVlID8gYCR7bXNnfSDrsJjrk5zsi5wg7J6F66Cl7ZW07JW8IO2VqeuLiOuLpGAgOiBcIlwiLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbaW5wdXRCb3hdXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRBdXRoRXJyb3Ioe1xyXG4gICAgICAgIGN1cnJpY3VsdW06IGlucHV0Qm94LmN1cnJpY3VsdW0gPT09IFwiTk9ORVwiID8gXCLsp4HsooXsnYQg7ISg7YOd7ZWY7IS47JqUXCIgOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiAhaW5wdXRCb3guZW1haWwgPyBcIkUtbWFpbOydhCDsnoXroKXtlZjshLjsmpRcIiA6IFwiXCIsXHJcbiAgICAgICAgdXNlck5hbWU6ICFpbnB1dEJveC51c2VyTmFtZSA/IFwi7J2066aE7J2EIOyeheugpe2VmOyEuOyalFwiIDogXCJcIixcclxuICAgICAgICBwaG9uZTogIWlucHV0Qm94LnBob25lID8gXCLtnLTrjIDtj7Ag67KI7Zi466W8IOyeheugpe2VmOyEuOyalFwiIDogXCJcIixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgc2V0QXV0aEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhDb250YWluZXJcIj5cclxuICAgICAgPGgzPu2VnOq1reqyveyYgeybkCDsnbjsnqzqsJzrsJzsm5A8L2gzPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxzZWxlY3QgbmFtZT1cImN1cnJpY3VsdW1cIiBkYXRhLW1zZz1cIu2biOugqOyngeyiheydgFwiIGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiIHZhbHVlPXtpbnB1dEJveC5jdXJyaWN1bHVtfSBvbkNoYW5nZT17b25DaGFuZ0lucHV0Qm94fSBkYXRhLXNpemU9XCIyXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTk9ORVwiPu2biOugqOyngeyiheyEoO2DnTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNwcmluZ01WQ1wiPlNwcmluZ01WQzwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkphdmFfUHl0aG9uXCI+7J6Q67CUJu2MjOydtOyNrDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIHthdXRoRXJyb3IuY3VycmljdWx1bSAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRoRXJyb3JcIj57YXV0aEVycm9yLmN1cnJpY3VsdW19PC9zcGFuPn1cclxuXHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIGRhdGEtbXNnPVwi7J2066mU7J287J2AXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHZhbHVlPXtpbnB1dEJveC5lbWFpbH0gb25DaGFuZ2U9e29uQ2hhbmdJbnB1dEJveH0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuICAgICAgICB7YXV0aEVycm9yLmVtYWlsICYmIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhFcnJvclwiPnthdXRoRXJyb3IuZW1haWx9PC9zcGFuPn1cclxuXHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJ1c2VyTmFtZVwiIGRhdGEtbXNnPVwi7J2066aE7J2AXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuydtOumhFwiIHZhbHVlPXtpbnB1dEJveC51c2VyTmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdJbnB1dEJveH0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuICAgICAgICB7YXV0aEVycm9yLnVzZXJOYW1lICYmIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhFcnJvclwiPnthdXRoRXJyb3IudXNlck5hbWV9PC9zcGFuPn1cclxuXHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJwaG9uZVwiIGRhdGEtbXNnPVwi7KCE7ZmU67KI7Zi464qUXCIgdHlwZT1cInBob25lXCIgcGxhY2Vob2xkZXI9XCLsoITtmZTrsojtmLhcIiB2YWx1ZT17aW5wdXRCb3gucGhvbmV9IG9uQ2hhbmdlPXtvbkNoYW5nSW5wdXRCb3h9IGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiIC8+XHJcbiAgICAgICAge2F1dGhFcnJvci5waG9uZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRoRXJyb3JcIj57YXV0aEVycm9yLnBob25lfTwvc3Bhbj59XHJcblxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYXV0aElucHV0IGF1dGhTdWJtaXRcIiB2YWx1ZT1cIuuTseuhne2VmOq4sFwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9