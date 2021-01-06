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
    setInputBox(_objectSpread(_objectSpread({}, inputs), {}, {
      [name]: value
    }));
  }, [inputs]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    console.log(inputBox); // setAuthError({
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

  const onChangeInput = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(e => {
    const {
      name,
      value
    } = e.target;
    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {
      [name]: value
    }));
  }, [inputs]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "authContainer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
      children: "\uD55C\uAD6D\uACBD\uC601\uC6D0 \uC778\uC7AC\uAC1C\uBC1C\uC6D0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      className: "container",
      children: [authError.curriculum && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.curriculum
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
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
          lineNumber: 82,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: "SpringMVC",
          children: "SpringMVC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: "Java_Python",
          children: "\uC790\uBC14&\uD30C\uC774\uC36C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined), authError.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 29
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        name: "email",
        type: "email",
        placeholder: "Email",
        value: inputBox.email,
        onChange: onChangInputBox,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined), authError.userName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.userName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 32
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        name: "userName",
        type: "text",
        placeholder: "\uC774\uB984",
        value: inputBox.userName,
        onChange: onChangInputBox,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, undefined), authError.phone && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.phone
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 29
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        name: "phone",
        type: "phone",
        placeholder: "\uC804\uD654\uBC88\uD638",
        value: inputBox.phone,
        onChange: onChangInputBox,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "submit",
        className: "authInput authSubmit",
        value: "\uB4F1\uB85D\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, undefined);
};

_s2(AuthForm, "Poa1pxTwsQJYfWUMeq3/Ium3Fu4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2luRm9ybS5qc3giXSwibmFtZXMiOlsiVGV4dElucHV0IiwibWVtbyIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwidHlwZSIsImNsYXNzTmFtZSIsInVzZUlucHV0IiwiaW5pdFZhbHVlIiwic2V0dGVyIiwidXNlU3RhdGUiLCJoYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwiQXV0aEZvcm0iLCJhdXRoRXJyb3IiLCJzZXRBdXRoRXJyb3IiLCJjdXJyaWN1bHVtIiwidXNlck5hbWUiLCJlbWFpbCIsInBob25lIiwiaW5wdXRCb3giLCJzZXRJbnB1dEJveCIsInVlck5hbWUiLCJvbkNoYW5nSW5wdXRCb3giLCJpbnB1dHMiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJvbkNoYW5nZUlucHV0Iiwic2V0SW5wdXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFNBQVMsZ0JBQUdDLGtEQUFJLE1BQUMsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLFVBQVQ7QUFBbUJDLE1BQW5CO0FBQXlCQyxNQUF6QjtBQUErQkM7QUFBL0IsQ0FBRCxLQUFnRDtBQUNyRSxzQkFBTztBQUFPLFFBQUksRUFBRUQsSUFBYjtBQUFtQixRQUFJLEVBQUVELElBQXpCO0FBQStCLFNBQUssRUFBRUYsS0FBdEM7QUFBNkMsWUFBUSxNQUFyRDtBQUFzRCxZQUFRLEVBQUVDLFFBQWhFO0FBQTBFLGFBQVMsRUFBRUc7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGcUIsQ0FBdEI7TUFBTU4sUzs7QUFJTixNQUFNTyxRQUFRLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLElBQWIsS0FBc0I7QUFBQTs7QUFDckMsUUFBTTtBQUFBLE9B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LGVBQXhGO0FBQXlHLGlCQUFTLEVBQUM7QUFBbkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRixFQWNHVCxTQUFTLENBQUNLLEtBQVYsaUJBQW1CO0FBQU0saUJBQVMsRUFBQyxXQUFoQjtBQUFBLGtCQUE2QkwsU0FBUyxDQUFDSztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWR0QixlQWVFO0FBQU8sWUFBSSxFQUFDLE9BQVo7QUFBb0IsWUFBSSxFQUFDLE9BQXpCO0FBQWlDLG1CQUFXLEVBQUMsMEJBQTdDO0FBQW9ELGFBQUssRUFBRUMsUUFBUSxDQUFDRCxLQUFwRTtBQUEyRSxnQkFBUSxFQUFFSSxlQUFyRjtBQUFzRyxpQkFBUyxFQUFDO0FBQWhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkYsZUFpQkU7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFDLHNCQUEvQjtBQUFzRCxhQUFLLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBd0JELENBckZEOztJQUFNVixROztNQUFBQSxRO0FBc0ZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZWEyN2M2ZjQ0YzcwNjhjNjU4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUZXh0SW5wdXQgPSBtZW1vKCh7IHZhbHVlLCBvbkNoYW5nZSwgbmFtZSwgdHlwZSwgY2xhc3NOYW1lIH0pID0+IHtcclxuICByZXR1cm4gPGlucHV0IHR5cGU9e3R5cGV9IG5hbWU9e25hbWV9IHZhbHVlPXt2YWx1ZX0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLz47XHJcbn0pO1xyXG5cclxuY29uc3QgdXNlSW5wdXQgPSAoaW5pdFZhbHVlID0gbnVsbCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0dGVyXSA9IHVzZVN0YXRlKGluaXRWYWx1ZSk7XHJcbiAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXR0ZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyXTtcclxufTtcclxuXHJcbmNvbnN0IEF1dGhGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthdXRoRXJyb3IsIHNldEF1dGhFcnJvcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjdXJyaWN1bHVtOiBcIlwiLFxyXG4gICAgdXNlck5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtpbnB1dEJveCwgc2V0SW5wdXRCb3hdID0gdXNlU3RhdGUoe1xyXG4gICAgdWVyTmFtZTogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBjdXJyaWN1bHVtOiBcIk5PTkVcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ0lucHV0Qm94ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgICAgc2V0SW5wdXRCb3goe1xyXG4gICAgICAgIC4uLmlucHV0cyxcclxuICAgICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbaW5wdXRzXVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpbnB1dEJveCk7XHJcbiAgICAvLyBzZXRBdXRoRXJyb3Ioe1xyXG4gICAgLy8gICBjdXJyaWN1bHVtOiBpbnB1dEJveC5jdXJyaWN1bHVtID09PSBcIk5PTkVcIiA/IFwi7KeB7KKF7J2EIOyEoO2Dne2VmOyEuOyalFwiIDogXCJcIixcclxuICAgIC8vICAgZW1haWw6ICFpbnB1dEJveC5lbWFpbCA/IFwiRS1tYWls7J2EIOyeheugpe2VmOyEuOyalFwiIDogXCJcIixcclxuICAgIC8vICAgdXNlck5hbWU6ICFpbnB1dEJveC51c2VyTmFtZSA/IFwi7J2066aE7J2EIOyeheugpe2VmOyEuOyalFwiIDogXCJcIixcclxuICAgIC8vICAgcGhvbmU6ICFpbnB1dEJveC5waG9uZSA/IFwi7Zy064yA7Y+wIOuyiO2YuOulvCDsnoXroKXtlZjshLjsmpRcIiA6IFwiXCIsXHJcbiAgICAvLyB9KTtcclxuICB9LCBbaW5wdXRCb3hdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRBdXRoRXJyb3Ioe1xyXG4gICAgICAgIGN1cnJpY3VsdW06IGlucHV0Qm94LmN1cnJpY3VsdW0gPT09IFwiTk9ORVwiID8gXCLsp4HsooXsnYQg7ISg7YOd7ZWY7IS47JqUXCIgOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiAhaW5wdXRCb3guZW1haWwgPyBcIkUtbWFpbOydhCDsnoXroKXtlZjshLjsmpRcIiA6IFwiXCIsXHJcbiAgICAgICAgdXNlck5hbWU6ICFpbnB1dEJveC51c2VyTmFtZSA/IFwi7J2066aE7J2EIOyeheugpe2VmOyEuOyalFwiIDogXCJcIixcclxuICAgICAgICBwaG9uZTogIWlucHV0Qm94LnBob25lID8gXCLtnLTrjIDtj7Ag67KI7Zi466W8IOyeheugpe2VmOyEuOyalFwiIDogXCJcIixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgc2V0QXV0aEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgICBzZXRJbnB1dHMoe1xyXG4gICAgICAgIC4uLmlucHV0cyxcclxuICAgICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbaW5wdXRzXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhDb250YWluZXJcIj5cclxuICAgICAgPGgzPu2VnOq1reqyveyYgeybkCDsnbjsnqzqsJzrsJzsm5A8L2gzPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIHthdXRoRXJyb3IuY3VycmljdWx1bSAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRoRXJyb3JcIj57YXV0aEVycm9yLmN1cnJpY3VsdW19PC9zcGFuPn1cclxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJjdXJyaWN1bHVtXCIgY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgdmFsdWU9e2lucHV0Qm94LmN1cnJpY3VsdW19IG9uQ2hhbmdlPXtvbkNoYW5nSW5wdXRCb3h9IGRhdGEtc2l6ZT1cIjJcIj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOT05FXCI+7ZuI66Co7KeB7KKF7ISg7YOdPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3ByaW5nTVZDXCI+U3ByaW5nTVZDPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSmF2YV9QeXRob25cIj7snpDrsJQm7YyM7J207I2sPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgIHthdXRoRXJyb3IuZW1haWwgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aEVycm9yXCI+e2F1dGhFcnJvci5lbWFpbH08L3NwYW4+fVxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdmFsdWU9e2lucHV0Qm94LmVtYWlsfSBvbkNoYW5nZT17b25DaGFuZ0lucHV0Qm94fSBjbGFzc05hbWU9XCJhdXRoSW5wdXRcIiAvPlxyXG5cclxuICAgICAgICB7YXV0aEVycm9yLnVzZXJOYW1lICYmIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhFcnJvclwiPnthdXRoRXJyb3IudXNlck5hbWV9PC9zcGFuPn1cclxuICAgICAgICA8aW5wdXQgbmFtZT1cInVzZXJOYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuydtOumhFwiIHZhbHVlPXtpbnB1dEJveC51c2VyTmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdJbnB1dEJveH0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuXHJcbiAgICAgICAge2F1dGhFcnJvci5waG9uZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRoRXJyb3JcIj57YXV0aEVycm9yLnBob25lfTwvc3Bhbj59XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJwaG9uZVwiIHR5cGU9XCJwaG9uZVwiIHBsYWNlaG9sZGVyPVwi7KCE7ZmU67KI7Zi4XCIgdmFsdWU9e2lucHV0Qm94LnBob25lfSBvbkNoYW5nZT17b25DaGFuZ0lucHV0Qm94fSBjbGFzc05hbWU9XCJhdXRoSW5wdXRcIiAvPlxyXG5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImF1dGhJbnB1dCBhdXRoU3VibWl0XCIgdmFsdWU9XCLrk7HroZ3tlZjquLBcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==