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
    0: curriculum,
    1: setCurriculum
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("NONE");
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

    if (inputBox.curriculum === "NONE") {
      setAuthError("직종을 선택해 주세요");
    }

    if (inputBox.userName === "") {
      setAuthError("이름을 입력하세요");
      document.querySelector("input[name='userName']").focus(); // setAuthError("");
    }
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
      lineNumber: 65,
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
          lineNumber: 68,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: "SpringMVC",
          children: "SpringMVC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: "Java_Python",
          children: "\uC790\uBC14&\uD30C\uC774\uC36C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined), authError.curriculum && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.curriculum
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
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
        lineNumber: 73,
        columnNumber: 9
      }, undefined), authError.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
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
        lineNumber: 75,
        columnNumber: 9
      }, undefined), authError.userName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.userName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
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
        lineNumber: 79,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, undefined);
};

_s2(AuthForm, "EUSn/Z/28zBQSxtpyQl4P79D0g4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2luRm9ybS5qc3giXSwibmFtZXMiOlsiVGV4dElucHV0IiwibWVtbyIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwidHlwZSIsImNsYXNzTmFtZSIsInVzZUlucHV0IiwiaW5pdFZhbHVlIiwic2V0dGVyIiwidXNlU3RhdGUiLCJoYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwiQXV0aEZvcm0iLCJhdXRoRXJyb3IiLCJzZXRBdXRoRXJyb3IiLCJjdXJyaWN1bHVtIiwidXNlck5hbWUiLCJlbWFpbCIsInBob25lIiwic2V0Q3VycmljdWx1bSIsImlucHV0Qm94Iiwic2V0SW5wdXRCb3giLCJ1ZXJOYW1lIiwib25DaGFuZ0lucHV0Qm94IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJvbkNoYW5nZUN1cnJpY3VsdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsU0FBUyxnQkFBR0Msa0RBQUksTUFBQyxDQUFDO0FBQUVDLE9BQUY7QUFBU0MsVUFBVDtBQUFtQkMsTUFBbkI7QUFBeUJDLE1BQXpCO0FBQStCQztBQUEvQixDQUFELEtBQWdEO0FBQ3JFLHNCQUFPO0FBQU8sUUFBSSxFQUFFRCxJQUFiO0FBQW1CLFFBQUksRUFBRUQsSUFBekI7QUFBK0IsU0FBSyxFQUFFRixLQUF0QztBQUE2QyxZQUFRLE1BQXJEO0FBQXNELFlBQVEsRUFBRUMsUUFBaEU7QUFBMEUsYUFBUyxFQUFFRztBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZxQixDQUF0QjtNQUFNTixTOztBQUlOLE1BQU1PLFFBQVEsR0FBRyxDQUFDQyxTQUFTLEdBQUcs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QkFBVyxFQUFDLDBCQUE3QztBQUFvRCxhQUFLLEVBQUVJLFFBQVEsQ0FBQ0YsS0FBcEU7QUFBMkUsZ0JBQVEsRUFBRUssZUFBckY7QUFBc0csaUJBQVMsRUFBQztBQUFoSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGLEVBWUdWLFNBQVMsQ0FBQ0ssS0FBVixpQkFBbUI7QUFBTSxpQkFBUyxFQUFDLFdBQWhCO0FBQUEsa0JBQTZCTCxTQUFTLENBQUNLO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWnRCLGVBYUU7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFDLHNCQUEvQjtBQUFzRCxhQUFLLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvQkQsQ0FwRUQ7O0lBQU1OLFE7O01BQUFBLFE7QUFxRVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM2YzBmMjVjNTYyZjM1ZmU4MDQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRleHRJbnB1dCA9IG1lbW8oKHsgdmFsdWUsIG9uQ2hhbmdlLCBuYW1lLCB0eXBlLCBjbGFzc05hbWUgfSkgPT4ge1xyXG4gIHJldHVybiA8aW5wdXQgdHlwZT17dHlwZX0gbmFtZT17bmFtZX0gdmFsdWU9e3ZhbHVlfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2V9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSAvPjtcclxufSk7XHJcblxyXG5jb25zdCB1c2VJbnB1dCA9IChpbml0VmFsdWUgPSBudWxsKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXR0ZXJdID0gdXNlU3RhdGUoaW5pdFZhbHVlKTtcclxuICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldHRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiBbdmFsdWUsIGhhbmRsZXJdO1xyXG59O1xyXG5cclxuY29uc3QgQXV0aEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2F1dGhFcnJvciwgc2V0QXV0aEVycm9yXSA9IHVzZVN0YXRlKHtcclxuICAgIGN1cnJpY3VsdW06IFwiXCIsXHJcbiAgICB1c2VyTmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2N1cnJpY3VsdW0sIHNldEN1cnJpY3VsdW1dID0gdXNlU3RhdGUoXCJOT05FXCIpO1xyXG4gIGNvbnN0IFtpbnB1dEJveCwgc2V0SW5wdXRCb3hdID0gdXNlU3RhdGUoe1xyXG4gICAgdWVyTmFtZTogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBjdXJyaWN1bHVtOiBcIk5PTkVcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ0lucHV0Qm94ID0gKGUpID0+IHtcclxuICAgIHNldElucHV0Qm94KHtcclxuICAgICAgLi4uaW5wdXRCb3gsXHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW5wdXRCb3gpO1xyXG4gICAgaWYgKGlucHV0Qm94LmN1cnJpY3VsdW0gPT09IFwiTk9ORVwiKSB7XHJcbiAgICAgIHNldEF1dGhFcnJvcihcIuyngeyiheydhCDshKDtg53tlbQg7KO87IS47JqUXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlucHV0Qm94LnVzZXJOYW1lID09PSBcIlwiKSB7XHJcbiAgICAgIHNldEF1dGhFcnJvcihcIuydtOumhOydhCDsnoXroKXtlZjshLjsmpRcIik7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSd1c2VyTmFtZSddXCIpLmZvY3VzKCk7XHJcbiAgICAgIC8vIHNldEF1dGhFcnJvcihcIlwiKTtcclxuICAgIH1cclxuICB9LCBbaW5wdXRCb3hdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlNVQk1JVFwiLCBjdXJyaWN1bHVtKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICBzZXRBdXRoRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VDdXJyaWN1bHVtID0gKGUpID0+IHtcclxuICAgIHNldEN1cnJpY3VsdW0oZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhDb250YWluZXJcIj5cclxuICAgICAgPGgzPu2VnOq1reqyveyYgeybkCDsnbjsnqzqsJzrsJzsm5A8L2gzPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxzZWxlY3QgbmFtZT1cImN1cnJpY3VsdW1cIiBjbGFzc05hbWU9XCJhdXRoSW5wdXRcIiB2YWx1ZT17Y3VycmljdWx1bX0gb25DaGFuZ2U9e29uQ2hhbmdlQ3VycmljdWx1bX0gZGF0YS1zaXplPVwiMlwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5PTkVcIj7tm4jroKjsp4HsooXshKDtg508L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTcHJpbmdNVkNcIj5TcHJpbmdNVkM8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJKYXZhX1B5dGhvblwiPuyekOuwlCbtjIzsnbTsjaw8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICB7YXV0aEVycm9yLmN1cnJpY3VsdW0gJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aEVycm9yXCI+e2F1dGhFcnJvci5jdXJyaWN1bHVtfTwvc3Bhbj59XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiB2YWx1ZT17aW5wdXRCb3guZW1haWx9IG9uQ2hhbmdlPXtvbkNoYW5nSW5wdXRCb3h9IGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiIC8+XHJcbiAgICAgICAge2F1dGhFcnJvci5lbWFpbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRoRXJyb3JcIj57YXV0aEVycm9yLmVtYWlsfTwvc3Bhbj59XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJ1c2VyTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLsnbTrpoRcIiB2YWx1ZT17aW5wdXRCb3gudXNlck5hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nSW5wdXRCb3h9IGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiIC8+XHJcbiAgICAgICAge2F1dGhFcnJvci51c2VyTmFtZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRoRXJyb3JcIj57YXV0aEVycm9yLnVzZXJOYW1lfTwvc3Bhbj59XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJwaG9uZVwiIHR5cGU9XCJwaG9uZVwiIHBsYWNlaG9sZGVyPVwi7KCE7ZmU67KI7Zi4XCIgdmFsdWU9e2lucHV0Qm94LnBob25lfSBvbkNoYW5nZT17b25DaGFuZ0lucHV0Qm94fSBjbGFzc05hbWU9XCJhdXRoSW5wdXRcIiAvPlxyXG4gICAgICAgIHthdXRoRXJyb3IucGhvbmUgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aEVycm9yXCI+e2F1dGhFcnJvci5waG9uZX08L3NwYW4+fVxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYXV0aElucHV0IGF1dGhTdWJtaXRcIiB2YWx1ZT1cIuuTseuhne2VmOq4sFwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9