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
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "userName",
        type: "text",
        placeholder: "\uC774\uB984",
        required: true,
        value: username,
        onChange: onChange,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "phone",
        type: "phone",
        placeholder: "\uC804\uD665\uBA3C\uD638",
        required: true,
        value: phone,
        onChange: onChange,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "submit",
        className: "authInput authSubmit",
        value: "\uB4F1\uB85D\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), authError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "authError",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 23
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2luRm9ybS5qc3giXSwibmFtZXMiOlsiQXV0aEZvcm0iLCJlbWFpbCIsInNldEVtYWlsIiwidXNlU3RhdGUiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwiYXV0aEVycm9yIiwic2V0QXV0aEVycm9yIiwicGhvbmUiLCJzZXRQaG9uZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXNlcm5hbWUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUFBOztBQUNyQixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCSixzREFBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JOLHNEQUFRLENBQUMsRUFBRCxDQUFsQzs7QUFFQSxRQUFNTyxRQUFRLEdBQUlDLEtBQUQsSUFBVztBQUMxQixVQUFNO0FBQ0pDLFlBQU0sRUFBRTtBQUFFQyxZQUFGO0FBQVFDO0FBQVI7QUFESixRQUVGSCxLQUZKOztBQUdBLFFBQUlFLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ3BCWCxjQUFRLENBQUNZLEtBQUQsQ0FBUjtBQUNELEtBRkQsTUFFTyxJQUFJRCxJQUFJLEtBQUssVUFBYixFQUF5QjtBQUM5QlIsaUJBQVcsQ0FBQ1MsS0FBRCxDQUFYO0FBQ0QsS0FGTSxNQUVBLElBQUlELElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQzNCUixpQkFBVyxDQUFDUyxLQUFELENBQVg7QUFDRDtBQUNGLEdBWEQ7O0FBWUEsUUFBTUMsUUFBUSxHQUFHLE1BQU9KLEtBQVAsSUFBaUI7QUFDaENBLFNBQUssQ0FBQ0ssY0FBTixHQURnQyxDQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FiRDs7QUFlQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUEsMkJBQ0U7QUFBTSxjQUFRLEVBQUVELFFBQWhCO0FBQTBCLGVBQVMsRUFBQyxXQUFwQztBQUFBLDhCQUNFO0FBQU8sWUFBSSxFQUFDLE9BQVo7QUFBb0IsWUFBSSxFQUFDLE9BQXpCO0FBQWlDLG1CQUFXLEVBQUMsT0FBN0M7QUFBcUQsZ0JBQVEsTUFBN0Q7QUFBOEQsYUFBSyxFQUFFZCxLQUFyRTtBQUE0RSxnQkFBUSxFQUFFUyxRQUF0RjtBQUFnRyxpQkFBUyxFQUFDO0FBQTFHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLFlBQUksRUFBQyxNQUE1QjtBQUFtQyxtQkFBVyxFQUFDLGNBQS9DO0FBQW9ELGdCQUFRLE1BQTVEO0FBQTZELGFBQUssRUFBRU8sUUFBcEU7QUFBOEUsZ0JBQVEsRUFBRVAsUUFBeEY7QUFBa0csaUJBQVMsRUFBQztBQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBTyxZQUFJLEVBQUMsT0FBWjtBQUFvQixZQUFJLEVBQUMsT0FBekI7QUFBaUMsbUJBQVcsRUFBQywwQkFBN0M7QUFBb0QsZ0JBQVEsTUFBNUQ7QUFBNkQsYUFBSyxFQUFFRixLQUFwRTtBQUEyRSxnQkFBUSxFQUFFRSxRQUFyRjtBQUErRixpQkFBUyxFQUFDO0FBQXpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGlCQUFTLEVBQUMsc0JBQS9CO0FBQXNELGFBQUssRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLEVBS0dKLFNBQVMsaUJBQUk7QUFBTSxpQkFBUyxFQUFDLFdBQWhCO0FBQUEsa0JBQTZCWTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxDQTVDRDs7R0FBTWxCLFE7O0tBQUFBLFE7QUE2Q1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEyNTZlNjAyNDZlOGJlZTRkNzM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEF1dGhGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYXV0aEVycm9yLCBzZXRBdXRoRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGFyZ2V0OiB7IG5hbWUsIHZhbHVlIH0sXHJcbiAgICB9ID0gZXZlbnQ7XHJcbiAgICBpZiAobmFtZSA9PT0gXCJlbWFpbFwiKSB7XHJcbiAgICAgIHNldEVtYWlsKHZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJ1c2VyTmFtZVwiKSB7XHJcbiAgICAgIHNldFVzZXJOYW1lKHZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJwaG9uZVwiKSB7XHJcbiAgICAgIHNldFVzZXJOYW1lKHZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gdHJ5IHtcclxuICAgIC8vICAgbGV0IGRhdGE7XHJcbiAgICAvLyAgIGlmIChuZXdBY2NvdW50KSB7XHJcbiAgICAvLyAgICAgZGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgLy8gICB9IGVsc2Uge1xyXG4gICAgLy8gICAgIGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAvLyB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aENvbnRhaW5lclwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgcmVxdWlyZWQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17b25DaGFuZ2V9IGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiIC8+XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJ1c2VyTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLsnbTrpoRcIiByZXF1aXJlZCB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuICAgICAgICA8aW5wdXQgbmFtZT1cInBob25lXCIgdHlwZT1cInBob25lXCIgcGxhY2Vob2xkZXI9XCLsoITtmaXrqLztmLhcIiByZXF1aXJlZCB2YWx1ZT17cGhvbmV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImF1dGhJbnB1dCBhdXRoU3VibWl0XCIgdmFsdWU9XCLrk7HroZ3tlZjquLBcIiAvPlxyXG4gICAgICAgIHthdXRoRXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aEVycm9yXCI+e2Vycm9yfTwvc3Bhbj59XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9