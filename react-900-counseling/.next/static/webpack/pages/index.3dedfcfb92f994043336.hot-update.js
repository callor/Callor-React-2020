webpackHotUpdate_N_E("pages/index",{

/***/ "./components/JoinForm.jsx":
/*!*********************************!*\
  !*** ./components/JoinForm.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\callor\\Documents\\workspace\\React_Project\\react-2020\\react-900-counseling\\components\\JoinForm.jsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


const TextInput = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(_c = ({
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
_c2 = TextInput;

const useInput = (initValue = null) => {
  _s();

  const {
    0: value,
    1: setter
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

_s(useInput, "jJC7NbJZBwPw2rLfrH4q62FtgpU=");

const AuthForm = () => {
  _s2();

  const [email, onChangeEmail] = useInput("");
  const [userName, onChangeUserName] = useInput("");
  const [authError, onChangeAuthError] = useInput("");
  const [phone, onChangetPhone] = useInput("");
  const [curriculum, onChangeCurriculum] = useInput("");

  const onSubmit = async event => {
    event.preventDefault();

    if (curriculumn === "NONE") {
      alert("직종을 선택해 주세요");
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "authContainer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "\uD55C\uAD6D\uACBD\uC601\uC6D0 \uC778\uC7AC\uAC1C\uBC1C\uC6D0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        name: "curriculum",
        className: "authInput",
        value: curriculum,
        required: true,
        onChange: onChangeCurriculum,
        "data-size": "2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "NONE",
          children: "\uD6C8\uB828\uC9C1\uC885\uC120\uD0DD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "SpringMVC",
          children: "SpringMVC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Java_Python",
          children: "\uC790\uBC14&\uD30C\uC774\uC36C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "email",
        type: "email",
        placeholder: "Email",
        required: true,
        value: email,
        onChange: onChangeEmail,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "userName",
        type: "text",
        placeholder: "\uC774\uB984",
        required: true,
        value: userName,
        onChange: onChangeUserName,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "phone",
        type: "phone",
        placeholder: "\uC804\uD654\uBC88\uD638",
        required: true,
        value: phone,
        onChange: onChangetPhone,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "submit",
        className: "authInput authSubmit",
        value: "\uB4F1\uB85D\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), authError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "authError",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 23
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
};

_s2(AuthForm, "zMg32MXrcC9c/Z1eYh1EwZmp+8U=", false, function () {
  return [useInput, useInput, useInput, useInput, useInput];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2luRm9ybS5qc3giXSwibmFtZXMiOlsiVGV4dElucHV0IiwibWVtbyIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwidHlwZSIsImNsYXNzTmFtZSIsInVzZUlucHV0IiwiaW5pdFZhbHVlIiwic2V0dGVyIiwidXNlU3RhdGUiLCJoYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwiQXV0aEZvcm0iLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJ1c2VyTmFtZSIsIm9uQ2hhbmdlVXNlck5hbWUiLCJhdXRoRXJyb3IiLCJvbkNoYW5nZUF1dGhFcnJvciIsInBob25lIiwib25DaGFuZ2V0UGhvbmUiLCJjdXJyaWN1bHVtIiwib25DaGFuZ2VDdXJyaWN1bHVtIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmljdWx1bW4iLCJhbGVydCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFNBQVMsZ0JBQUdDLGtEQUFJLE1BQUMsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLFVBQVQ7QUFBbUJDLE1BQW5CO0FBQXlCQyxNQUF6QjtBQUErQkM7QUFBL0IsQ0FBRCxLQUFnRDtBQUNyRSxzQkFBTztBQUFPLFFBQUksRUFBRUQsSUFBYjtBQUFtQixRQUFJLEVBQUVELElBQXpCO0FBQStCLFNBQUssRUFBRUYsS0FBdEM7QUFBNkMsWUFBUSxNQUFyRDtBQUFzRCxZQUFRLEVBQUVDLFFBQWhFO0FBQTBFLGFBQVMsRUFBRUc7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGcUIsQ0FBdEI7TUFBTU4sUzs7QUFJTixNQUFNTyxRQUFRLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLElBQWIsS0FBc0I7QUFBQTs7QUFDckMsUUFBTTtBQUFBLE9BQUNOLEtBQUQ7QUFBQSxPQUFRTztBQUFSLE1BQWtCQyxzREFBUSxDQUFD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QSxtQkFURixFQVVHSCxTQUFTLGlCQUFJO0FBQU0saUJBQVMsRUFBQyxXQUFoQjtBQUFBLGtCQUE2Qlc7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBaUJELENBL0JEOztJQUFNaEIsUTtVQUMyQlIsUSxFQUNNQSxRLEVBQ0VBLFEsRUFDUEEsUSxFQUNTQSxROzs7TUFMckNRLFE7QUFnQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNkZWRmY2ZiOTJmOTk0MDQzMzM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUZXh0SW5wdXQgPSBtZW1vKCh7IHZhbHVlLCBvbkNoYW5nZSwgbmFtZSwgdHlwZSwgY2xhc3NOYW1lIH0pID0+IHtcclxuICByZXR1cm4gPGlucHV0IHR5cGU9e3R5cGV9IG5hbWU9e25hbWV9IHZhbHVlPXt2YWx1ZX0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLz47XHJcbn0pO1xyXG5cclxuY29uc3QgdXNlSW5wdXQgPSAoaW5pdFZhbHVlID0gbnVsbCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0dGVyXSA9IHVzZVN0YXRlKGluaXRWYWx1ZSk7XHJcbiAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXR0ZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyXTtcclxufTtcclxuXHJcbmNvbnN0IEF1dGhGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbdXNlck5hbWUsIG9uQ2hhbmdlVXNlck5hbWVdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW2F1dGhFcnJvciwgb25DaGFuZ2VBdXRoRXJyb3JdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW3Bob25lLCBvbkNoYW5nZXRQaG9uZV0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbY3VycmljdWx1bSwgb25DaGFuZ2VDdXJyaWN1bHVtXSA9IHVzZUlucHV0KFwiXCIpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChjdXJyaWN1bHVtbiA9PT0gXCJOT05FXCIpIHtcclxuICAgICAgYWxlcnQoXCLsp4HsooXsnYQg7ISg7YOd7ZW0IOyjvOyEuOyalFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoQ29udGFpbmVyXCI+XHJcbiAgICAgIDxoMz7tlZzqta3qsr3smIHsm5Ag7J247J6s6rCc67Cc7JuQPC9oMz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJjdXJyaWN1bHVtXCIgY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgdmFsdWU9e2N1cnJpY3VsdW19IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZUN1cnJpY3VsdW19IGRhdGEtc2l6ZT1cIjJcIj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOT05FXCI+7ZuI66Co7KeB7KKF7ISg7YOdPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3ByaW5nTVZDXCI+U3ByaW5nTVZDPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSmF2YV9QeXRob25cIj7snpDrsJQm7YyM7J207I2sPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiByZXF1aXJlZCB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfSBjbGFzc05hbWU9XCJhdXRoSW5wdXRcIiAvPlxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwidXNlck5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi7J2066aEXCIgcmVxdWlyZWQgdmFsdWU9e3VzZXJOYW1lfSBvbkNoYW5nZT17b25DaGFuZ2VVc2VyTmFtZX0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuICAgICAgICA8aW5wdXQgbmFtZT1cInBob25lXCIgdHlwZT1cInBob25lXCIgcGxhY2Vob2xkZXI9XCLsoITtmZTrsojtmLhcIiByZXF1aXJlZCB2YWx1ZT17cGhvbmV9IG9uQ2hhbmdlPXtvbkNoYW5nZXRQaG9uZX0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImF1dGhJbnB1dCBhdXRoU3VibWl0XCIgdmFsdWU9XCLrk7HroZ3tlZjquLBcIiAvPlxyXG4gICAgICAgIHthdXRoRXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aEVycm9yXCI+e2Vycm9yfTwvc3Bhbj59XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9