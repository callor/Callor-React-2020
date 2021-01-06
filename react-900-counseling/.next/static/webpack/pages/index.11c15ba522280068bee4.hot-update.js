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

  const onChangInputBox = e => {
    setInputBox(_objectSpread(_objectSpread({}, inputBox), {}, {
      [e.target.name]: e.target.value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    console.log(inputBox);
    setAuthError({
      curriculum: inputBox.curriculum === "NONE" ? "직종을 선택하세요" : "",
      email: !inputBox.email ? "E-mail을 입력하세요" : "",
      userName: !inputBox.userName ? "이름을 입력하세요" : "",
      phone: !inputBox.phone ? "휴대폰 번호를 입력하세요" : ""
    });
  }, [inputBox]);

  const onSubmit = async event => {
    event.preventDefault();

    try {
      console.log("SUBMIT", curriculum);
    } catch (error) {
      alert(error.message);
      setAuthError(error.message);
    }
  };

  const onChangeCurriculum = e => {
    setCurriculum(e.target.value);
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
        className: "authInput",
        value: curriculum,
        onChange: onChangeCurriculum,
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
        type: "email",
        placeholder: "Email",
        value: inputBox.email,
        onChange: onChangInputBox,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined), authError.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        name: "userName",
        type: "text",
        placeholder: "\uC774\uB984",
        value: inputBox.userName,
        onChange: onChangInputBox,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), authError.userName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.userName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 32
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        name: "phone",
        type: "phone",
        placeholder: "\uC804\uD654\uBC88\uD638",
        value: inputBox.phone,
        onChange: onChangInputBox,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined), authError.phone && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.phone
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "submit",
        className: "authInput authSubmit",
        value: "\uB4F1\uB85D\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
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

_s2(AuthForm, "gDnZ1l166hgtif6SqUtBH/LFGnY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2luRm9ybS5qc3giXSwibmFtZXMiOlsiVGV4dElucHV0IiwibWVtbyIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwidHlwZSIsImNsYXNzTmFtZSIsInVzZUlucHV0IiwiaW5pdFZhbHVlIiwic2V0dGVyIiwidXNlU3RhdGUiLCJoYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwiQXV0aEZvcm0iLCJhdXRoRXJyb3IiLCJzZXRBdXRoRXJyb3IiLCJjdXJyaWN1bHVtIiwidXNlck5hbWUiLCJlbWFpbCIsInBob25lIiwiaW5wdXRCb3giLCJzZXRJbnB1dEJveCIsInVlck5hbWUiLCJvbkNoYW5nSW5wdXRCb3giLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJvbkNoYW5nZUN1cnJpY3VsdW0iLCJzZXRDdXJyaWN1bHVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFNBQVMsZ0JBQUdDLGtEQUFJLE1BQUMsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLFVBQVQ7QUFBbUJDLE1BQW5CO0FBQXlCQyxNQUF6QjtBQUErQkM7QUFBL0IsQ0FBRCxLQUFnRDtBQUNyRSxzQkFBTztBQUFPLFFBQUksRUFBRUQsSUFBYjtBQUFtQixRQUFJLEVBQUVELElBQXpCO0FBQStCLFNBQUssRUFBRUYsS0FBdEM7QUFBNkMsWUFBUSxNQUFyRDtBQUFzRCxZQUFRLEVBQUVDLFFBQWhFO0FBQTBFLGFBQVMsRUFBRUc7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGcUIsQ0FBdEI7TUFBTU4sUzs7QUFJTixNQUFNTyxRQUFRLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLElBQWIsS0FBc0I7QUFBQTs7QUFDckMsUUFBTTtBQUFBLE9B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QUNELEtBQXBFO0FBQTJFLGdCQUFRLEVBQUVJLGVBQXJGO0FBQXNHLGlCQUFTLEVBQUM7QUFBaEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRixFQVlHVCxTQUFTLENBQUNLLEtBQVYsaUJBQW1CO0FBQU0saUJBQVMsRUFBQyxXQUFoQjtBQUFBLGtCQUE2QkwsU0FBUyxDQUFDSztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVp0QixlQWFFO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQVMsRUFBQyxzQkFBL0I7QUFBc0QsYUFBSyxFQUFDO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb0JELENBakVEOztJQUFNTixROztNQUFBQSxRO0FBa0VTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMWMxNWJhNTIyMjgwMDY4YmVlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUZXh0SW5wdXQgPSBtZW1vKCh7IHZhbHVlLCBvbkNoYW5nZSwgbmFtZSwgdHlwZSwgY2xhc3NOYW1lIH0pID0+IHtcclxuICByZXR1cm4gPGlucHV0IHR5cGU9e3R5cGV9IG5hbWU9e25hbWV9IHZhbHVlPXt2YWx1ZX0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLz47XHJcbn0pO1xyXG5cclxuY29uc3QgdXNlSW5wdXQgPSAoaW5pdFZhbHVlID0gbnVsbCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0dGVyXSA9IHVzZVN0YXRlKGluaXRWYWx1ZSk7XHJcbiAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXR0ZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyXTtcclxufTtcclxuXHJcbmNvbnN0IEF1dGhGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthdXRoRXJyb3IsIHNldEF1dGhFcnJvcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjdXJyaWN1bHVtOiBcIlwiLFxyXG4gICAgdXNlck5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtpbnB1dEJveCwgc2V0SW5wdXRCb3hdID0gdXNlU3RhdGUoe1xyXG4gICAgdWVyTmFtZTogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBjdXJyaWN1bHVtOiBcIk5PTkVcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ0lucHV0Qm94ID0gKGUpID0+IHtcclxuICAgIHNldElucHV0Qm94KHtcclxuICAgICAgLi4uaW5wdXRCb3gsXHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW5wdXRCb3gpO1xyXG4gICAgc2V0QXV0aEVycm9yKHtcclxuICAgICAgY3VycmljdWx1bTogaW5wdXRCb3guY3VycmljdWx1bSA9PT0gXCJOT05FXCIgPyBcIuyngeyiheydhCDshKDtg53tlZjshLjsmpRcIiA6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiAhaW5wdXRCb3guZW1haWwgPyBcIkUtbWFpbOydhCDsnoXroKXtlZjshLjsmpRcIiA6IFwiXCIsXHJcbiAgICAgIHVzZXJOYW1lOiAhaW5wdXRCb3gudXNlck5hbWUgPyBcIuydtOumhOydhCDsnoXroKXtlZjshLjsmpRcIiA6IFwiXCIsXHJcbiAgICAgIHBob25lOiAhaW5wdXRCb3gucGhvbmUgPyBcIu2ctOuMgO2PsCDrsojtmLjrpbwg7J6F66Cl7ZWY7IS47JqUXCIgOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgfSwgW2lucHV0Qm94XSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coXCJTVUJNSVRcIiwgY3VycmljdWx1bSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgc2V0QXV0aEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQ3VycmljdWx1bSA9IChlKSA9PiB7XHJcbiAgICBzZXRDdXJyaWN1bHVtKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoQ29udGFpbmVyXCI+XHJcbiAgICAgIDxoMz7tlZzqta3qsr3smIHsm5Ag7J247J6s6rCc67Cc7JuQPC9oMz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJjdXJyaWN1bHVtXCIgY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgdmFsdWU9e2N1cnJpY3VsdW19IG9uQ2hhbmdlPXtvbkNoYW5nZUN1cnJpY3VsdW19IGRhdGEtc2l6ZT1cIjJcIj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOT05FXCI+7ZuI66Co7KeB7KKF7ISg7YOdPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3ByaW5nTVZDXCI+U3ByaW5nTVZDPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSmF2YV9QeXRob25cIj7snpDrsJQm7YyM7J207I2sPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAge2F1dGhFcnJvci5jdXJyaWN1bHVtICYmIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhFcnJvclwiPnthdXRoRXJyb3IuY3VycmljdWx1bX08L3NwYW4+fVxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdmFsdWU9e2lucHV0Qm94LmVtYWlsfSBvbkNoYW5nZT17b25DaGFuZ0lucHV0Qm94fSBjbGFzc05hbWU9XCJhdXRoSW5wdXRcIiAvPlxyXG4gICAgICAgIHthdXRoRXJyb3IuZW1haWwgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aEVycm9yXCI+e2F1dGhFcnJvci5lbWFpbH08L3NwYW4+fVxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwidXNlck5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi7J2066aEXCIgdmFsdWU9e2lucHV0Qm94LnVzZXJOYW1lfSBvbkNoYW5nZT17b25DaGFuZ0lucHV0Qm94fSBjbGFzc05hbWU9XCJhdXRoSW5wdXRcIiAvPlxyXG4gICAgICAgIHthdXRoRXJyb3IudXNlck5hbWUgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aEVycm9yXCI+e2F1dGhFcnJvci51c2VyTmFtZX08L3NwYW4+fVxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwicGhvbmVcIiB0eXBlPVwicGhvbmVcIiBwbGFjZWhvbGRlcj1cIuyghO2ZlOuyiO2YuFwiIHZhbHVlPXtpbnB1dEJveC5waG9uZX0gb25DaGFuZ2U9e29uQ2hhbmdJbnB1dEJveH0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuICAgICAgICB7YXV0aEVycm9yLnBob25lICYmIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhFcnJvclwiPnthdXRoRXJyb3IucGhvbmV9PC9zcGFuPn1cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImF1dGhJbnB1dCBhdXRoU3VibWl0XCIgdmFsdWU9XCLrk7HroZ3tlZjquLBcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==