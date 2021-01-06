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
  const {
    0: authError,
    1: setAuthError
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
        lineNumber: 36,
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
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "submit",
        className: "authInput authSubmit",
        value: "\uB4F1\uB85D\uD558\uAE30"
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
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

_s(AuthForm, "rdYq/wsZDgMVEil8WgHVREjXNVM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2luRm9ybS5qc3giXSwibmFtZXMiOlsiQXV0aEZvcm0iLCJlbWFpbCIsInNldEVtYWlsIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInNldFVzZXJOYW1lIiwiYXV0aEVycm9yIiwic2V0QXV0aEVycm9yIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUFBOztBQUNyQixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCSixzREFBUSxDQUFDLEVBQUQsQ0FBMUM7O0FBRUEsUUFBTUssUUFBUSxHQUFJQyxLQUFELElBQVc7QUFDMUIsVUFBTTtBQUNKQyxZQUFNLEVBQUU7QUFBRUMsWUFBRjtBQUFRQztBQUFSO0FBREosUUFFRkgsS0FGSjs7QUFHQSxRQUFJRSxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUNwQlQsY0FBUSxDQUFDVSxLQUFELENBQVI7QUFDRCxLQUZELE1BRU8sSUFBSUQsSUFBSSxLQUFLLFVBQWIsRUFBeUI7QUFDOUJOLGlCQUFXLENBQUNPLEtBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FURDs7QUFVQSxRQUFNQyxRQUFRLEdBQUcsTUFBT0osS0FBUCxJQUFpQjtBQUNoQ0EsU0FBSyxDQUFDSyxjQUFOLEdBRGdDLENBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQWJEOztBQWVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSwyQkFDRTtBQUFNLGNBQVEsRUFBRUQsUUFBaEI7QUFBMEIsZUFBUyxFQUFDLFdBQXBDO0FBQUEsOEJBQ0U7QUFBTyxZQUFJLEVBQUMsT0FBWjtBQUFvQixZQUFJLEVBQUMsT0FBekI7QUFBaUMsbUJBQVcsRUFBQyxPQUE3QztBQUFxRCxnQkFBUSxNQUE3RDtBQUE4RCxhQUFLLEVBQUVaLEtBQXJFO0FBQTRFLGdCQUFRLEVBQUVPLFFBQXRGO0FBQWdHLGlCQUFTLEVBQUM7QUFBMUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsWUFBSSxFQUFDLE1BQTVCO0FBQW1DLG1CQUFXLEVBQUMsY0FBL0M7QUFBb0QsZ0JBQVEsTUFBNUQ7QUFBNkQsYUFBSyxFQUFFSixRQUFwRTtBQUE4RSxnQkFBUSxFQUFFSSxRQUF4RjtBQUFrRyxpQkFBUyxFQUFDO0FBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGlCQUFTLEVBQUMsc0JBQS9CO0FBQXNELGFBQUssRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLEVBSUdPLEtBQUssaUJBQUk7QUFBTSxpQkFBUyxFQUFDLFdBQWhCO0FBQUEsa0JBQTZCQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVVELENBeENEOztHQUFNZixROztLQUFBQSxRO0FBeUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xOGNiZDZmMmQwYmZhNWUxOTc1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBdXRoRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2F1dGhFcnJvciwgc2V0QXV0aEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0YXJnZXQ6IHsgbmFtZSwgdmFsdWUgfSxcclxuICAgIH0gPSBldmVudDtcclxuICAgIGlmIChuYW1lID09PSBcImVtYWlsXCIpIHtcclxuICAgICAgc2V0RW1haWwodmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSBcInBhc3N3b3JkXCIpIHtcclxuICAgICAgc2V0VXNlck5hbWUodmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyB0cnkge1xyXG4gICAgLy8gICBsZXQgZGF0YTtcclxuICAgIC8vICAgaWYgKG5ld0FjY291bnQpIHtcclxuICAgIC8vICAgICBkYXRhID0gYXdhaXQgYXV0aFNlcnZpY2UuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgZGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIC8vIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoQ29udGFpbmVyXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiByZXF1aXJlZCB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuICAgICAgICA8aW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuydtOumhFwiIHJlcXVpcmVkIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSBjbGFzc05hbWU9XCJhdXRoSW5wdXRcIiAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYXV0aElucHV0IGF1dGhTdWJtaXRcIiB2YWx1ZT1cIuuTseuhne2VmOq4sFwiIC8+XHJcbiAgICAgICAge2Vycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhFcnJvclwiPntlcnJvcn08L3NwYW4+fVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==