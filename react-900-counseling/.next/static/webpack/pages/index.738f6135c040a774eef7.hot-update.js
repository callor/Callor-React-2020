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
    _s = $RefreshSig$();



const AuthForm = () => {
  _s();

  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: userName,
    1: setUserName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: authError,
    1: setAuthError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: phone,
    1: setPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const onChange = event => {
    const {
      target: {
        name,
        value
      }
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "userName") {
      setUserName(value);
    } else if (name === "phone") {
      setUserName(value);
    }
  };

  const onSubmit = async event => {
    event.preventDefault();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "authContainer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "\uD55C\uAD6D\uACBD\uC601\uC6D0 \uC778\uC7AC\uAC1C\uBC1C\uC6D0 \uAD6D\uAC00\uAE30\uAC04 \uC804\uB7B5\uC0B0\uC5C5\uC9C1\uC885"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "SpringMVC",
          className: "authInput",
          children: "SpringMVC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "email",
        type: "email",
        placeholder: "Email",
        required: true,
        value: email,
        onChange: onChange,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "userName",
        type: "text",
        placeholder: "\uC774\uB984",
        required: true,
        value: userName,
        onChange: onChange,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "phone",
        type: "phone",
        placeholder: "\uC804\uD654\uBC88\uD638",
        required: true,
        value: phone,
        onChange: onChange,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "submit",
        className: "authInput authSubmit",
        value: "\uB4F1\uB85D\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), authError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "authError",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 23
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

_s(AuthForm, "SqoDgEptT4gYHlolINlUfKT+f/8=");

_c = AuthForm;
/* harmony default export */ __webpack_exports__["default"] = (AuthForm);

var _c;

$RefreshReg$(_c, "AuthForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2luRm9ybS5qc3giXSwibmFtZXMiOlsiQXV0aEZvcm0iLCJlbWFpbCIsInNldEVtYWlsIiwidXNlU3RhdGUiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwiYXV0aEVycm9yIiwic2V0QXV0aEVycm9yIiwicGhvbmUiLCJzZXRQaG9uZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFBQTs7QUFDckIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDRyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qkosc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CTixzREFBUSxDQUFDLEVBQUQsQ0FBbEM7O0FBRUEsUUFBTU8sUUFBUSxHQUFJQyxLQUFELElBQVc7QUFDMUIsVUFBTTtBQUNKQyxZQUFNLEVBQUU7QUFBRUMsWUFBRjtBQUFRQztBQUFSO0FBREosUUFFRkgsS0FGSjs7QUFHQSxRQUFJRSxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUNwQlgsY0FBUSxDQUFDWSxLQUFELENBQVI7QUFDRCxLQUZELE1BRU8sSUFBSUQsSUFBSSxLQUFLLFVBQWIsRUFBeUI7QUFDOUJSLGlCQUFXLENBQUNTLEtBQUQsQ0FBWDtBQUNELEtBRk0sTUFFQSxJQUFJRCxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUMzQlIsaUJBQVcsQ0FBQ1MsS0FBRCxDQUFYO0FBQ0Q7QUFDRixHQVhEOztBQVlBLFFBQU1DLFFBQVEsR0FBRyxNQUFPSixLQUFQLElBQWlCO0FBQ2hDQSxTQUFLLENBQUNLLGNBQU47QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sY0FBUSxFQUFFRCxRQUFoQjtBQUEwQixlQUFTLEVBQUMsV0FBcEM7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQVEsZUFBSyxFQUFDLFdBQWQ7QUFBMEIsbUJBQVMsRUFBQyxXQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRTtBQUFPLFlBQUksRUFBQyxPQUFaO0FBQW9CLFlBQUksRUFBQyxPQUF6QjtBQUFpQyxtQkFBVyxFQUFDLE9BQTdDO0FBQXFELGdCQUFRLE1BQTdEO0FBQThELGFBQUssRUFBRWQsS0FBckU7QUFBNEUsZ0JBQVEsRUFBRVMsUUFBdEY7QUFBZ0csaUJBQVMsRUFBQztBQUExRztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLGVBT0U7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixZQUFJLEVBQUMsTUFBNUI7QUFBbUMsbUJBQVcsRUFBQyxjQUEvQztBQUFvRCxnQkFBUSxNQUE1RDtBQUE2RCxhQUFLLEVBQUVOLFFBQXBFO0FBQThFLGdCQUFRLEVBQUVNLFFBQXhGO0FBQWtHLGlCQUFTLEVBQUM7QUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQVFFO0FBQU8sWUFBSSxFQUFDLE9BQVo7QUFBb0IsWUFBSSxFQUFDLE9BQXpCO0FBQWlDLG1CQUFXLEVBQUMsMEJBQTdDO0FBQW9ELGdCQUFRLE1BQTVEO0FBQTZELGFBQUssRUFBRUYsS0FBcEU7QUFBMkUsZ0JBQVEsRUFBRUUsUUFBckY7QUFBK0YsaUJBQVMsRUFBQztBQUF6RztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBU0U7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFDLHNCQUEvQjtBQUFzRCxhQUFLLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixFQVVHSixTQUFTLGlCQUFJO0FBQU0saUJBQVMsRUFBQyxXQUFoQjtBQUFBLGtCQUE2Qlc7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBaUJELENBdkNEOztHQUFNakIsUTs7S0FBQUEsUTtBQXdDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzM4ZjYxMzVjMDQwYTc3NGVlZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQXV0aEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthdXRoRXJyb3IsIHNldEF1dGhFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0YXJnZXQ6IHsgbmFtZSwgdmFsdWUgfSxcclxuICAgIH0gPSBldmVudDtcclxuICAgIGlmIChuYW1lID09PSBcImVtYWlsXCIpIHtcclxuICAgICAgc2V0RW1haWwodmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSBcInVzZXJOYW1lXCIpIHtcclxuICAgICAgc2V0VXNlck5hbWUodmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSBcInBob25lXCIpIHtcclxuICAgICAgc2V0VXNlck5hbWUodmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aENvbnRhaW5lclwiPlxyXG4gICAgICA8aDM+7ZWc6rWt6rK97JiB7JuQIOyduOyerOqwnOuwnOybkCDqta3qsIDquLDqsIQg7KCE65617IKw7JeF7KeB7KKFPC9oMz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNwcmluZ01WQ1wiIGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiPlxyXG4gICAgICAgICAgICBTcHJpbmdNVkNcclxuICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgcmVxdWlyZWQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17b25DaGFuZ2V9IGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiIC8+XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJ1c2VyTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLsnbTrpoRcIiByZXF1aXJlZCB2YWx1ZT17dXNlck5hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuICAgICAgICA8aW5wdXQgbmFtZT1cInBob25lXCIgdHlwZT1cInBob25lXCIgcGxhY2Vob2xkZXI9XCLsoITtmZTrsojtmLhcIiByZXF1aXJlZCB2YWx1ZT17cGhvbmV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImF1dGhJbnB1dCBhdXRoU3VibWl0XCIgdmFsdWU9XCLrk7HroZ3tlZjquLBcIiAvPlxyXG4gICAgICAgIHthdXRoRXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aEVycm9yXCI+e2Vycm9yfTwvc3Bhbj59XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9