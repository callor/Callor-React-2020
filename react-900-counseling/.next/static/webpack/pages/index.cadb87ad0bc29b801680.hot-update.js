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
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: newAccount,
    1: setNewAccount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: error,
    1: setError
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
      setPassword(value);
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
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
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "username",
        type: "text",
        placeholder: "\uC774\uB984",
        required: true,
        value: password,
        onChange: onChange,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "submit",
        className: "authInput authSubmit",
        value: newAccount ? "Create Account" : "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "authError",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 19
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      onClick: toggleAccount,
      className: "authSwitch",
      children: newAccount ? "Sign In" : "Create Account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

_s(AuthForm, "PzQQNDqROVuSUwGcld31eLJW8SE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2luRm9ybS5qc3giXSwibmFtZXMiOlsiQXV0aEZvcm0iLCJlbWFpbCIsInNldEVtYWlsIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibmV3QWNjb3VudCIsInNldE5ld0FjY291bnQiLCJlcnJvciIsInNldEVycm9yIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVBY2NvdW50IiwicHJldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUFBOztBQUNyQixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCSixzREFBUSxDQUFDLElBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JOLHNEQUFRLENBQUMsRUFBRCxDQUFsQzs7QUFDQSxRQUFNTyxRQUFRLEdBQUlDLEtBQUQsSUFBVztBQUMxQixVQUFNO0FBQ0pDLFlBQU0sRUFBRTtBQUFFQyxZQUFGO0FBQVFDO0FBQVI7QUFESixRQUVGSCxLQUZKOztBQUdBLFFBQUlFLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ3BCWCxjQUFRLENBQUNZLEtBQUQsQ0FBUjtBQUNELEtBRkQsTUFFTyxJQUFJRCxJQUFJLEtBQUssVUFBYixFQUF5QjtBQUM5QlIsaUJBQVcsQ0FBQ1MsS0FBRCxDQUFYO0FBQ0Q7QUFDRixHQVREOztBQVVBLFFBQU1DLFFBQVEsR0FBRyxNQUFPSixLQUFQLElBQWlCO0FBQ2hDQSxTQUFLLENBQUNLLGNBQU4sR0FEZ0MsQ0FFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBYkQ7O0FBY0EsUUFBTUMsYUFBYSxHQUFHLE1BQU1WLGFBQWEsQ0FBRVcsSUFBRCxJQUFVLENBQUNBLElBQVosQ0FBekM7O0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDRCQUNFO0FBQU0sY0FBUSxFQUFFSCxRQUFoQjtBQUEwQixlQUFTLEVBQUMsV0FBcEM7QUFBQSw4QkFDRTtBQUFPLFlBQUksRUFBQyxPQUFaO0FBQW9CLFlBQUksRUFBQyxPQUF6QjtBQUFpQyxtQkFBVyxFQUFDLE9BQTdDO0FBQXFELGdCQUFRLE1BQTdEO0FBQThELGFBQUssRUFBRWQsS0FBckU7QUFBNEUsZ0JBQVEsRUFBRVMsUUFBdEY7QUFBZ0csaUJBQVMsRUFBQztBQUExRztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixZQUFJLEVBQUMsTUFBNUI7QUFBbUMsbUJBQVcsRUFBQyxjQUEvQztBQUFvRCxnQkFBUSxNQUE1RDtBQUE2RCxhQUFLLEVBQUVOLFFBQXBFO0FBQThFLGdCQUFRLEVBQUVNLFFBQXhGO0FBQWtHLGlCQUFTLEVBQUM7QUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQVMsRUFBQyxzQkFBL0I7QUFBc0QsYUFBSyxFQUFFSixVQUFVLEdBQUcsZ0JBQUgsR0FBc0I7QUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixFQUlHRSxLQUFLLGlCQUFJO0FBQU0saUJBQVMsRUFBQyxXQUFoQjtBQUFBLGtCQUE2QkE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFNLGFBQU8sRUFBRVMsYUFBZjtBQUE4QixlQUFTLEVBQUMsWUFBeEM7QUFBQSxnQkFDR1gsVUFBVSxHQUFHLFNBQUgsR0FBZTtBQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBYUQsQ0EzQ0Q7O0dBQU1OLFE7O0tBQUFBLFE7QUE0Q1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNhZGI4N2FkMGJjMjliODAxNjgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEF1dGhGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmV3QWNjb3VudCwgc2V0TmV3QWNjb3VudF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRhcmdldDogeyBuYW1lLCB2YWx1ZSB9LFxyXG4gICAgfSA9IGV2ZW50O1xyXG4gICAgaWYgKG5hbWUgPT09IFwiZW1haWxcIikge1xyXG4gICAgICBzZXRFbWFpbCh2YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwicGFzc3dvcmRcIikge1xyXG4gICAgICBzZXRQYXNzd29yZCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIHRyeSB7XHJcbiAgICAvLyAgIGxldCBkYXRhO1xyXG4gICAgLy8gICBpZiAobmV3QWNjb3VudCkge1xyXG4gICAgLy8gICAgIGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIC8vICAgfSBlbHNlIHtcclxuICAgIC8vICAgICBkYXRhID0gYXdhaXQgYXV0aFNlcnZpY2Uuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgLy8gfVxyXG4gIH07XHJcbiAgY29uc3QgdG9nZ2xlQWNjb3VudCA9ICgpID0+IHNldE5ld0FjY291bnQoKHByZXYpID0+ICFwcmV2KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoQ29udGFpbmVyXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiByZXF1aXJlZCB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuICAgICAgICA8aW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuydtOumhFwiIHJlcXVpcmVkIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e29uQ2hhbmdlfSBjbGFzc05hbWU9XCJhdXRoSW5wdXRcIiAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYXV0aElucHV0IGF1dGhTdWJtaXRcIiB2YWx1ZT17bmV3QWNjb3VudCA/IFwiQ3JlYXRlIEFjY291bnRcIiA6IFwiU2lnbiBJblwifSAvPlxyXG4gICAgICAgIHtlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRoRXJyb3JcIj57ZXJyb3J9PC9zcGFuPn1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8c3BhbiBvbkNsaWNrPXt0b2dnbGVBY2NvdW50fSBjbGFzc05hbWU9XCJhdXRoU3dpdGNoXCI+XHJcbiAgICAgICAge25ld0FjY291bnQgPyBcIlNpZ24gSW5cIiA6IFwiQ3JlYXRlIEFjY291bnRcIn1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=