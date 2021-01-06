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
    0: username,
    1: setUserName
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
    } else if (name === "password") {
      setUserName(value);
    }
  };

  const onSubmit = async event => {
    event.preventDefault(); // try {
    //   let data;
    //   if (newAccount) {
    //     data = await authService.createUserWithEmailAndPassword(email, password);
    //   } else {
    //     data = await authService.signInWithEmailAndPassword(email, password);
    //   }
    //   console.log(data);
    // } catch (error) {
    //   setError(error.message);
    // }
  };

  const toggleAccount = () => setNewAccount(prev => !prev);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "authContainer",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "email",
        type: "email",
        placeholder: "Email",
        required: true,
        value: email,
        onChange: onChange,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "username",
        type: "text",
        placeholder: "\uC774\uB984",
        required: true,
        value: username,
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
      }, undefined), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "authError",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined);
};

_s(AuthForm, "QHU/DEwonlUOjI7Z/16SPt/xbvY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2luRm9ybS5qc3giXSwibmFtZXMiOlsiQXV0aEZvcm0iLCJlbWFpbCIsInNldEVtYWlsIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInNldFVzZXJOYW1lIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVBY2NvdW50Iiwic2V0TmV3QWNjb3VudCIsInByZXYiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUFBOztBQUNyQixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsc0RBQVEsQ0FBQyxFQUFELENBQXhDOztBQUVBLFFBQU1HLFFBQVEsR0FBSUMsS0FBRCxJQUFXO0FBQzFCLFVBQU07QUFDSkMsWUFBTSxFQUFFO0FBQUVDLFlBQUY7QUFBUUM7QUFBUjtBQURKLFFBRUZILEtBRko7O0FBR0EsUUFBSUUsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDcEJQLGNBQVEsQ0FBQ1EsS0FBRCxDQUFSO0FBQ0QsS0FGRCxNQUVPLElBQUlELElBQUksS0FBSyxVQUFiLEVBQXlCO0FBQzlCSixpQkFBVyxDQUFDSyxLQUFELENBQVg7QUFDRDtBQUNGLEdBVEQ7O0FBVUEsUUFBTUMsUUFBUSxHQUFHLE1BQU9KLEtBQVAsSUFBaUI7QUFDaENBLFNBQUssQ0FBQ0ssY0FBTixHQURnQyxDQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FiRDs7QUFjQSxRQUFNQyxhQUFhLEdBQUcsTUFBTUMsYUFBYSxDQUFFQyxJQUFELElBQVUsQ0FBQ0EsSUFBWixDQUF6Qzs7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUEsMkJBQ0U7QUFBTSxjQUFRLEVBQUVKLFFBQWhCO0FBQTBCLGVBQVMsRUFBQyxXQUFwQztBQUFBLDhCQUNFO0FBQU8sWUFBSSxFQUFDLE9BQVo7QUFBb0IsWUFBSSxFQUFDLE9BQXpCO0FBQWlDLG1CQUFXLEVBQUMsT0FBN0M7QUFBcUQsZ0JBQVEsTUFBN0Q7QUFBOEQsYUFBSyxFQUFFVixLQUFyRTtBQUE0RSxnQkFBUSxFQUFFSyxRQUF0RjtBQUFnRyxpQkFBUyxFQUFDO0FBQTFHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLFlBQUksRUFBQyxNQUE1QjtBQUFtQyxtQkFBVyxFQUFDLGNBQS9DO0FBQW9ELGdCQUFRLE1BQTVEO0FBQTZELGFBQUssRUFBRUYsUUFBcEU7QUFBOEUsZ0JBQVEsRUFBRUUsUUFBeEY7QUFBa0csaUJBQVMsRUFBQztBQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFDLHNCQUEvQjtBQUFzRCxhQUFLLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixFQUlHVSxLQUFLLGlCQUFJO0FBQU0saUJBQVMsRUFBQyxXQUFoQjtBQUFBLGtCQUE2QkE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFVRCxDQXZDRDs7R0FBTWhCLFE7O0tBQUFBLFE7QUF3Q1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRmYjU0NGE5M2FmYzc0OWIxZWI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEF1dGhGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGFyZ2V0OiB7IG5hbWUsIHZhbHVlIH0sXHJcbiAgICB9ID0gZXZlbnQ7XHJcbiAgICBpZiAobmFtZSA9PT0gXCJlbWFpbFwiKSB7XHJcbiAgICAgIHNldEVtYWlsKHZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJwYXNzd29yZFwiKSB7XHJcbiAgICAgIHNldFVzZXJOYW1lKHZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gdHJ5IHtcclxuICAgIC8vICAgbGV0IGRhdGE7XHJcbiAgICAvLyAgIGlmIChuZXdBY2NvdW50KSB7XHJcbiAgICAvLyAgICAgZGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgLy8gICB9IGVsc2Uge1xyXG4gICAgLy8gICAgIGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAvLyB9XHJcbiAgfTtcclxuICBjb25zdCB0b2dnbGVBY2NvdW50ID0gKCkgPT4gc2V0TmV3QWNjb3VudCgocHJldikgPT4gIXByZXYpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhDb250YWluZXJcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aW5wdXQgbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHJlcXVpcmVkIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e29uQ2hhbmdlfSBjbGFzc05hbWU9XCJhdXRoSW5wdXRcIiAvPlxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi7J2066aEXCIgcmVxdWlyZWQgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17b25DaGFuZ2V9IGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhdXRoSW5wdXQgYXV0aFN1Ym1pdFwiIHZhbHVlPVwi65Ox66Gd7ZWY6riwXCIgLz5cclxuICAgICAgICB7ZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aEVycm9yXCI+e2Vycm9yfTwvc3Bhbj59XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9