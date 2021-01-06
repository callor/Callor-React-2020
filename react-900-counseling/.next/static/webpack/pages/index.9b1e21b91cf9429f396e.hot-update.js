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
    const msg = e.target.dataset.name;
    setAuthError(_objectSpread(_objectSpread({}, authError), {}, {
      [name]: !value ? `${msg} 반드시 입력해야 합니다` : "" // curriculum: inputBox.curriculum === "NONE" ? "직종을 선택하세요" : "",
      // email: !inputBox.email ? "E-mail을 입력하세요" : "",
      // userName: !inputBox.userName ? "이름을 입력하세요" : "",
      // phone: !inputBox.phone ? "휴대폰 번호를 입력하세요" : "",

    }));
  }, [inputBox]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    console.log("[]");
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    console.log("inputBox", inputBox); // setAuthError({
    //   curriculum: inputBox.curriculum === "NONE" ? "직종을 선택하세요" : "",
    //   email: !inputBox.email ? "E-mail을 입력하세요" : "",
    //   userName: !inputBox.userName ? "이름을 입력하세요" : "",
    //   phone: !inputBox.phone ? "휴대폰 번호를 입력하세요" : "",
    // });
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
      lineNumber: 81,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      className: "container",
      children: [authError.curriculum && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.curriculum
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 34
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
        name: "curriculum",
        className: "authInput",
        value: inputBox.curriculum,
        onChange: onChangInputBox,
        "data-size": "2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: "NONE",
          children: "\uD6C8\uB828\uC9C1\uC885\uC120\uD0DD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: "SpringMVC",
          children: "SpringMVC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: "Java_Python",
          children: "\uC790\uBC14&\uD30C\uC774\uC36C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined), authError.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 29
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
        lineNumber: 91,
        columnNumber: 9
      }, undefined), authError.userName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.userName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 32
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
        lineNumber: 94,
        columnNumber: 9
      }, undefined), authError.phone && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.phone
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 29
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
        lineNumber: 97,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "submit",
        className: "authInput authSubmit",
        value: "\uB4F1\uB85D\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, undefined);
};

_s2(AuthForm, "egjsbfZzxSVPNOTWnmuBESfwCCU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2luRm9ybS5qc3giXSwibmFtZXMiOlsiVGV4dElucHV0IiwibWVtbyIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwidHlwZSIsImNsYXNzTmFtZSIsInVzZUlucHV0IiwiaW5pdFZhbHVlIiwic2V0dGVyIiwidXNlU3RhdGUiLCJoYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwiQXV0aEZvcm0iLCJhdXRoRXJyb3IiLCJzZXRBdXRoRXJyb3IiLCJjdXJyaWN1bHVtIiwidXNlck5hbWUiLCJlbWFpbCIsInBob25lIiwiaW5wdXRCb3giLCJzZXRJbnB1dEJveCIsInVlck5hbWUiLCJvbkNoYW5nSW5wdXRCb3giLCJtc2ciLCJkYXRhc2V0IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVycm9yIiwiYWxlcnQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFNBQVMsZ0JBQUdDLGtEQUFJLE1BQUMsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLFVBQVQ7QUFBbUJDLE1BQW5CO0FBQXlCQyxNQUF6QjtBQUErQkM7QUFBL0IsQ0FBRCxLQUFnRDtBQUNyRSxzQkFBTztBQUFPLFFBQUksRUFBRUQsSUFBYjtBQUFtQixRQUFJLEVBQUVELElBQXpCO0FBQStCLFNBQUssRUFBRUYsS0FBdEM7QUFBNkMsWUFBUSxNQUFyRDtBQUFzRCxZQUFRLEVBQUVDLFFBQWhFO0FBQTBFLGFBQVMsRUFBRUc7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGcUIsQ0FBdEI7TUFBTU4sUzs7QUFJTixNQUFNTyxRQUFRLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLElBQWIsS0FBc0I7QUFBQTs7QUFDckMsUUFBTTtBQUFBLE9BQUNOLEtBQUQ7QUFBQSxPQUFRTztB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QztBQUFzQyxZQUFJLEVBQUMsTUFBM0M7QUFBa0QsbUJBQVcsRUFBQyxjQUE5RDtBQUFtRSxhQUFLLEVBQUVHLFFBQVEsQ0FBQ0gsUUFBbkY7QUFBNkYsZ0JBQVEsRUFBRU0sZUFBdkc7QUFBd0gsaUJBQVMsRUFBQztBQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGLEVBY0dULFNBQVMsQ0FBQ0ssS0FBVixpQkFBbUI7QUFBTSxpQkFBUyxFQUFDLFdBQWhCO0FBQUEsa0JBQTZCTCxTQUFTLENBQUNLO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZHRCLGVBZUU7QUFBTyxZQUFJLEVBQUMsT0FBWjtBQUFvQixvQkFBUyxnQ0FBN0I7QUFBcUMsWUFBSSxFQUFDLE9BQTFDO0FBQWtELG1CQUFXLEVBQUMsMEJBQTlEO0FBQXFFLGFBQUssRUFBRUMsUUFBUSxDQUFDRCxLQUFyRjtBQUE0RixnQkFBUSxFQUFFSSxlQUF0RztBQUF1SCxpQkFBUyxFQUFDO0FBQWpJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkYsZUFpQkU7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFDLHNCQUEvQjtBQUFzRCxhQUFLLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBd0JELENBeEZEOztJQUFNVixROztNQUFBQSxRO0FBeUZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YjFlMjFiOTFjZjk0MjlmMzk2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUZXh0SW5wdXQgPSBtZW1vKCh7IHZhbHVlLCBvbkNoYW5nZSwgbmFtZSwgdHlwZSwgY2xhc3NOYW1lIH0pID0+IHtcclxuICByZXR1cm4gPGlucHV0IHR5cGU9e3R5cGV9IG5hbWU9e25hbWV9IHZhbHVlPXt2YWx1ZX0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLz47XHJcbn0pO1xyXG5cclxuY29uc3QgdXNlSW5wdXQgPSAoaW5pdFZhbHVlID0gbnVsbCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0dGVyXSA9IHVzZVN0YXRlKGluaXRWYWx1ZSk7XHJcbiAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXR0ZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyXTtcclxufTtcclxuXHJcbmNvbnN0IEF1dGhGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthdXRoRXJyb3IsIHNldEF1dGhFcnJvcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjdXJyaWN1bHVtOiBcIlwiLFxyXG4gICAgdXNlck5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtpbnB1dEJveCwgc2V0SW5wdXRCb3hdID0gdXNlU3RhdGUoe1xyXG4gICAgdWVyTmFtZTogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBjdXJyaWN1bHVtOiBcIk5PTkVcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ0lucHV0Qm94ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgICAgc2V0SW5wdXRCb3goe1xyXG4gICAgICAgIC4uLmlucHV0Qm94LFxyXG4gICAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgbXNnID0gZS50YXJnZXQuZGF0YXNldC5uYW1lO1xyXG4gICAgICBzZXRBdXRoRXJyb3Ioe1xyXG4gICAgICAgIC4uLmF1dGhFcnJvcixcclxuICAgICAgICBbbmFtZV06ICF2YWx1ZSA/IGAke21zZ30g67CY65Oc7IucIOyeheugpe2VtOyVvCDtlanri4jri6RgIDogXCJcIixcclxuICAgICAgICAvLyBjdXJyaWN1bHVtOiBpbnB1dEJveC5jdXJyaWN1bHVtID09PSBcIk5PTkVcIiA/IFwi7KeB7KKF7J2EIOyEoO2Dne2VmOyEuOyalFwiIDogXCJcIixcclxuICAgICAgICAvLyBlbWFpbDogIWlucHV0Qm94LmVtYWlsID8gXCJFLW1haWzsnYQg7J6F66Cl7ZWY7IS47JqUXCIgOiBcIlwiLFxyXG4gICAgICAgIC8vIHVzZXJOYW1lOiAhaW5wdXRCb3gudXNlck5hbWUgPyBcIuydtOumhOydhCDsnoXroKXtlZjshLjsmpRcIiA6IFwiXCIsXHJcbiAgICAgICAgLy8gcGhvbmU6ICFpbnB1dEJveC5waG9uZSA/IFwi7Zy064yA7Y+wIOuyiO2YuOulvCDsnoXroKXtlZjshLjsmpRcIiA6IFwiXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtpbnB1dEJveF1cclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJbXVwiKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImlucHV0Qm94XCIsIGlucHV0Qm94KTtcclxuICAgIC8vIHNldEF1dGhFcnJvcih7XHJcbiAgICAvLyAgIGN1cnJpY3VsdW06IGlucHV0Qm94LmN1cnJpY3VsdW0gPT09IFwiTk9ORVwiID8gXCLsp4HsooXsnYQg7ISg7YOd7ZWY7IS47JqUXCIgOiBcIlwiLFxyXG4gICAgLy8gICBlbWFpbDogIWlucHV0Qm94LmVtYWlsID8gXCJFLW1haWzsnYQg7J6F66Cl7ZWY7IS47JqUXCIgOiBcIlwiLFxyXG4gICAgLy8gICB1c2VyTmFtZTogIWlucHV0Qm94LnVzZXJOYW1lID8gXCLsnbTrpoTsnYQg7J6F66Cl7ZWY7IS47JqUXCIgOiBcIlwiLFxyXG4gICAgLy8gICBwaG9uZTogIWlucHV0Qm94LnBob25lID8gXCLtnLTrjIDtj7Ag67KI7Zi466W8IOyeheugpe2VmOyEuOyalFwiIDogXCJcIixcclxuICAgIC8vIH0pO1xyXG4gIH0sIFtpbnB1dEJveF0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldEF1dGhFcnJvcih7XHJcbiAgICAgICAgY3VycmljdWx1bTogaW5wdXRCb3guY3VycmljdWx1bSA9PT0gXCJOT05FXCIgPyBcIuyngeyiheydhCDshKDtg53tlZjshLjsmpRcIiA6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6ICFpbnB1dEJveC5lbWFpbCA/IFwiRS1tYWls7J2EIOyeheugpe2VmOyEuOyalFwiIDogXCJcIixcclxuICAgICAgICB1c2VyTmFtZTogIWlucHV0Qm94LnVzZXJOYW1lID8gXCLsnbTrpoTsnYQg7J6F66Cl7ZWY7IS47JqUXCIgOiBcIlwiLFxyXG4gICAgICAgIHBob25lOiAhaW5wdXRCb3gucGhvbmUgPyBcIu2ctOuMgO2PsCDrsojtmLjrpbwg7J6F66Cl7ZWY7IS47JqUXCIgOiBcIlwiLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICBzZXRBdXRoRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aENvbnRhaW5lclwiPlxyXG4gICAgICA8aDM+7ZWc6rWt6rK97JiB7JuQIOyduOyerOqwnOuwnOybkDwvaDM+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAge2F1dGhFcnJvci5jdXJyaWN1bHVtICYmIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhFcnJvclwiPnthdXRoRXJyb3IuY3VycmljdWx1bX08L3NwYW4+fVxyXG4gICAgICAgIDxzZWxlY3QgbmFtZT1cImN1cnJpY3VsdW1cIiBjbGFzc05hbWU9XCJhdXRoSW5wdXRcIiB2YWx1ZT17aW5wdXRCb3guY3VycmljdWx1bX0gb25DaGFuZ2U9e29uQ2hhbmdJbnB1dEJveH0gZGF0YS1zaXplPVwiMlwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5PTkVcIj7tm4jroKjsp4HsooXshKDtg508L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTcHJpbmdNVkNcIj5TcHJpbmdNVkM8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJKYXZhX1B5dGhvblwiPuyekOuwlCbtjIzsnbTsjaw8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAge2F1dGhFcnJvci5lbWFpbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRoRXJyb3JcIj57YXV0aEVycm9yLmVtYWlsfTwvc3Bhbj59XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIGRhdGEtbXNnPVwi7J2066mU7J287J2AXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHZhbHVlPXtpbnB1dEJveC5lbWFpbH0gb25DaGFuZ2U9e29uQ2hhbmdJbnB1dEJveH0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuXHJcbiAgICAgICAge2F1dGhFcnJvci51c2VyTmFtZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRoRXJyb3JcIj57YXV0aEVycm9yLnVzZXJOYW1lfTwvc3Bhbj59XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJ1c2VyTmFtZVwiIGRhdGEtbXNnPVwi7J2066aE7J2AXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuydtOumhFwiIHZhbHVlPXtpbnB1dEJveC51c2VyTmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdJbnB1dEJveH0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuXHJcbiAgICAgICAge2F1dGhFcnJvci5waG9uZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRoRXJyb3JcIj57YXV0aEVycm9yLnBob25lfTwvc3Bhbj59XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJwaG9uZVwiIGRhdGEtbXNnPVwi7KCE7ZmU67KI7Zi464qUXCIgdHlwZT1cInBob25lXCIgcGxhY2Vob2xkZXI9XCLsoITtmZTrsojtmLhcIiB2YWx1ZT17aW5wdXRCb3gucGhvbmV9IG9uQ2hhbmdlPXtvbkNoYW5nSW5wdXRCb3h9IGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiIC8+XHJcblxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYXV0aElucHV0IGF1dGhTdWJtaXRcIiB2YWx1ZT1cIuuTseuhne2VmOq4sFwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9