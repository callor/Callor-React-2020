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
  const {
    0: authError,
    1: setAuthError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const [phone, onChangetPhone] = useInput("");
  const {
    0: curriculum,
    1: setCurriculum
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("NONE");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log(curriculum);

    if (curriculum === "NONE") {
      setAuthError("직종을 선택해 주세요");
    } else if (userName === "") {
      setAuthError("이름을 입력하세요");
      document.querySelector("input[name='userName']").focus(); // setAuthError("");
    }
  }, [curriculum]);

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "authContainer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "\uD55C\uAD6D\uACBD\uC601\uC6D0 \uC778\uC7AC\uAC1C\uBC1C\uC6D0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        name: "curriculum",
        className: "authInput",
        value: curriculum,
        onChange: onChangeCurriculum,
        "data-size": "2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "NONE",
          children: "\uD6C8\uB828\uC9C1\uC885\uC120\uD0DD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "SpringMVC",
          children: "SpringMVC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Java_Python",
          children: "\uC790\uBC14&\uD30C\uC774\uC36C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), authError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "authError",
        children: authError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 23
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "email",
        type: "email",
        placeholder: "Email",
        value: email,
        onChange: onChangeEmail,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "userName",
        type: "text",
        placeholder: "\uC774\uB984",
        value: userName,
        onChange: onChangeUserName,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        name: "phone",
        type: "phone",
        placeholder: "\uC804\uD654\uBC88\uD638",
        value: phone,
        onChange: onChangetPhone,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "submit",
        className: "authInput authSubmit",
        value: "\uB4F1\uB85D\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

_s2(AuthForm, "TGLrLennt/0Z+XD0GcieQAubXUU=", false, function () {
  return [useInput, useInput, useInput];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2luRm9ybS5qc3giXSwibmFtZXMiOlsiVGV4dElucHV0IiwibWVtbyIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwidHlwZSIsImNsYXNzTmFtZSIsInVzZUlucHV0IiwiaW5pdFZhbHVlIiwic2V0dGVyIiwidXNlU3RhdGUiLCJoYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwiQXV0aEZvcm0iLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJ1c2VyTmFtZSIsIm9uQ2hhbmdlVXNlck5hbWUiLCJhdXRoRXJyb3IiLCJzZXRBdXRoRXJyb3IiLCJwaG9uZSIsIm9uQ2hhbmdldFBob25lIiwiY3VycmljdWx1bSIsInNldEN1cnJpY3VsdW0iLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsImFsZXJ0IiwibWVzc2FnZSIsIm9uQ2hhbmdlQ3VycmljdWx1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxTQUFTLGdCQUFHQyxrREFBSSxNQUFDLENBQUM7QUFBRUMsT0FBRjtBQUFTQyxVQUFUO0FBQW1CQyxNQUFuQjtBQUF5QkMsTUFBekI7QUFBK0JDO0FBQS9CLENBQUQsS0FBZ0Q7QUFDckUsc0JBQU87QUFBTyxRQUFJLEVBQUVELElBQWI7QUFBbUIsUUFBSSxFQUFFRCxJQUF6QjtBQUErQixTQUFLLEVBQUVGLEtBQXRDO0FBQTZDLFlBQVEsTUFBckQ7QUFBc0QsWUFBUSxFQUFFQyxRQUFoRTtBQUEwRSxhQUFTLEVBQUVHO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRnFCLENBQXRCO01BQU1OLFM7O0FBSU4sTUFBTU8sUUFBUSxHQUFHLENBQUNDLFNBQVMsR0FBRyxJQUFiLEtB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QU5oQixlQU9FO0FBQU8sWUFBSSxFQUFDLE9BQVo7QUFBb0IsWUFBSSxFQUFDLE9BQXpCO0FBQWlDLG1CQUFXLEVBQUMsT0FBN0M7QUFBcUQsYUFBSyxFQUFFSixLQUE1RDtBQUFtRSxnQkFBUSxFQUFFQyxhQUE3RTtBQUE0RixpQkFBUyxFQUFDO0FBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsZUFRRTtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLFlBQUksRUFBQyxNQUE1QjtBQUFtQyxtQkFBVyxFQUFDLGNBQS9DO0FBQW9ELGFBQUssRUFBRUMsUUFBM0Q7QUFBcUUsZ0JBQVEsRUFBRUMsZ0JBQS9FO0FBQWlHLGlCQUFTLEVBQUM7QUFBM0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQVNFO0FBQU8sWUFBSSxFQUFDLE9BQVo7QUFBb0IsWUFBSSxFQUFDLE9BQXpCO0FBQWlDLG1CQUFXLEVBQUMsMEJBQTdDO0FBQW9ELGFBQUssRUFBRUcsS0FBM0Q7QUFBa0UsZ0JBQVEsRUFBRUMsY0FBNUU7QUFBNEYsaUJBQVMsRUFBQztBQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLGVBVUU7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFDLHNCQUEvQjtBQUFzRCxhQUFLLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFpQkQsQ0FqREQ7O0lBQU1SLFE7VUFDMkJSLFEsRUFDTUEsUSxFQUVMQSxROzs7TUFKNUJRLFE7QUFrRFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIyMTZlMWNiZTg0YzEzNTMyMWM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRleHRJbnB1dCA9IG1lbW8oKHsgdmFsdWUsIG9uQ2hhbmdlLCBuYW1lLCB0eXBlLCBjbGFzc05hbWUgfSkgPT4ge1xyXG4gIHJldHVybiA8aW5wdXQgdHlwZT17dHlwZX0gbmFtZT17bmFtZX0gdmFsdWU9e3ZhbHVlfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2V9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSAvPjtcclxufSk7XHJcblxyXG5jb25zdCB1c2VJbnB1dCA9IChpbml0VmFsdWUgPSBudWxsKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXR0ZXJdID0gdXNlU3RhdGUoaW5pdFZhbHVlKTtcclxuICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldHRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiBbdmFsdWUsIGhhbmRsZXJdO1xyXG59O1xyXG5cclxuY29uc3QgQXV0aEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFt1c2VyTmFtZSwgb25DaGFuZ2VVc2VyTmFtZV0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbYXV0aEVycm9yLCBzZXRBdXRoRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bob25lLCBvbkNoYW5nZXRQaG9uZV0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbY3VycmljdWx1bSwgc2V0Q3VycmljdWx1bV0gPSB1c2VTdGF0ZShcIk5PTkVcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyaWN1bHVtKTtcclxuICAgIGlmIChjdXJyaWN1bHVtID09PSBcIk5PTkVcIikge1xyXG4gICAgICBzZXRBdXRoRXJyb3IoXCLsp4HsooXsnYQg7ISg7YOd7ZW0IOyjvOyEuOyalFwiKTtcclxuICAgIH0gZWxzZSBpZiAodXNlck5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgc2V0QXV0aEVycm9yKFwi7J2066aE7J2EIOyeheugpe2VmOyEuOyalFwiKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3VzZXJOYW1lJ11cIikuZm9jdXMoKTtcclxuICAgICAgLy8gc2V0QXV0aEVycm9yKFwiXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtjdXJyaWN1bHVtXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coXCJTVUJNSVRcIiwgY3VycmljdWx1bSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgc2V0QXV0aEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQ3VycmljdWx1bSA9IChlKSA9PiB7XHJcbiAgICBzZXRDdXJyaWN1bHVtKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoQ29udGFpbmVyXCI+XHJcbiAgICAgIDxoMz7tlZzqta3qsr3smIHsm5Ag7J247J6s6rCc67Cc7JuQPC9oMz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJjdXJyaWN1bHVtXCIgY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgdmFsdWU9e2N1cnJpY3VsdW19IG9uQ2hhbmdlPXtvbkNoYW5nZUN1cnJpY3VsdW19IGRhdGEtc2l6ZT1cIjJcIj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOT05FXCI+7ZuI66Co7KeB7KKF7ISg7YOdPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3ByaW5nTVZDXCI+U3ByaW5nTVZDPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSmF2YV9QeXRob25cIj7snpDrsJQm7YyM7J207I2sPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAge2F1dGhFcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRoRXJyb3JcIj57YXV0aEVycm9yfTwvc3Bhbj59XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfSBjbGFzc05hbWU9XCJhdXRoSW5wdXRcIiAvPlxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwidXNlck5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi7J2066aEXCIgdmFsdWU9e3VzZXJOYW1lfSBvbkNoYW5nZT17b25DaGFuZ2VVc2VyTmFtZX0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuICAgICAgICA8aW5wdXQgbmFtZT1cInBob25lXCIgdHlwZT1cInBob25lXCIgcGxhY2Vob2xkZXI9XCLsoITtmZTrsojtmLhcIiB2YWx1ZT17cGhvbmV9IG9uQ2hhbmdlPXtvbkNoYW5nZXRQaG9uZX0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImF1dGhJbnB1dCBhdXRoU3VibWl0XCIgdmFsdWU9XCLrk7HroZ3tlZjquLBcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==