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
  const {
    0: inputBox,
    1: setInputBox
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    uerName: "",
    phone: "",
    email: "",
    curriculum: "NONE"
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log(curriculum);

    if (curriculum === "NONE") {
      setAuthError("직종을 선택해 주세요");
    }

    if (userName === "") {
      setAuthError("이름을 입력하세요");
      document.querySelector("input[name='userName']").focus(); // setAuthError("");
    }
  }, [curriculum, userName]);

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
      lineNumber: 56,
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
          lineNumber: 59,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "SpringMVC",
          children: "SpringMVC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Java_Python",
          children: "\uC790\uBC14&\uD30C\uC774\uC36C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), authError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "authError",
        children: authError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
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
        lineNumber: 64,
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
        lineNumber: 65,
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
        lineNumber: 66,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "submit",
        className: "authInput authSubmit",
        value: "\uB4F1\uB85D\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined);
};

_s2(AuthForm, "fzkPtCIFovJUs6fOkcZyW9KCPn0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2luRm9ybS5qc3giXSwibmFtZXMiOlsiVGV4dElucHV0IiwibWVtbyIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwidHlwZSIsImNsYXNzTmFtZSIsInVzZUlucHV0IiwiaW5pdFZhbHVlIiwic2V0dGVyIiwidXNlU3RhdGUiLCJoYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwiQXV0aEZvcm0iLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJ1c2VyTmFtZSIsIm9uQ2hhbmdlVXNlck5hbWUiLCJhdXRoRXJyb3IiLCJzZXRBdXRoRXJyb3IiLCJwaG9uZSIsIm9uQ2hhbmdldFBob25lIiwiY3VycmljdWx1bSIsInNldEN1cnJpY3VsdW0iLCJpbnB1dEJveCIsInNldElucHV0Qm94IiwidWVyTmFtZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVycm9yIiwiYWxlcnQiLCJtZXNzYWdlIiwib25DaGFuZ2VDdXJyaWN1bHVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFNBQVMsZ0JBQUdDLGtEQUFJLE1BQUMsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLFVBQVQ7QUFBbUJDLE1BQW5CO0FBQXlCQyxNQUF6QjtBQUErQkM7QUFBL0IsQ0FBRCxLQUFnRDtBQUNyRSxzQkFBTztBQUFPLFFBQUksRUFBRUQsSUFBYjtBQUFtQixRQUFJLEVBQUVELElBQXpCO0FBQStCLFNBQUssRUFBRUYsS0FBdEM7QUFBNkMsWUFBUSxNQUFyRDtBQUFzRCxZQUFRLEVBQUVDLFFBQWhFO0FBQTBFLGFBQVMsRUFBRUc7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGcUIsQ0FBdEI7TUFBTU4sUzs7QUFJTixNQUFN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LFEsRUFDTUEsUSxFQUVMQSxROzs7TUFKNUJRLFE7QUF5RFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU2YWFmNjliNDU0ZGZkOTBiMTZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRleHRJbnB1dCA9IG1lbW8oKHsgdmFsdWUsIG9uQ2hhbmdlLCBuYW1lLCB0eXBlLCBjbGFzc05hbWUgfSkgPT4ge1xyXG4gIHJldHVybiA8aW5wdXQgdHlwZT17dHlwZX0gbmFtZT17bmFtZX0gdmFsdWU9e3ZhbHVlfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2V9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSAvPjtcclxufSk7XHJcblxyXG5jb25zdCB1c2VJbnB1dCA9IChpbml0VmFsdWUgPSBudWxsKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXR0ZXJdID0gdXNlU3RhdGUoaW5pdFZhbHVlKTtcclxuICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldHRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiBbdmFsdWUsIGhhbmRsZXJdO1xyXG59O1xyXG5cclxuY29uc3QgQXV0aEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFt1c2VyTmFtZSwgb25DaGFuZ2VVc2VyTmFtZV0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbYXV0aEVycm9yLCBzZXRBdXRoRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bob25lLCBvbkNoYW5nZXRQaG9uZV0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbY3VycmljdWx1bSwgc2V0Q3VycmljdWx1bV0gPSB1c2VTdGF0ZShcIk5PTkVcIik7XHJcbiAgY29uc3QgW2lucHV0Qm94LCBzZXRJbnB1dEJveF0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1ZXJOYW1lOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIGN1cnJpY3VsdW06IFwiTk9ORVwiLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY3VycmljdWx1bSk7XHJcbiAgICBpZiAoY3VycmljdWx1bSA9PT0gXCJOT05FXCIpIHtcclxuICAgICAgc2V0QXV0aEVycm9yKFwi7KeB7KKF7J2EIOyEoO2Dne2VtCDso7zshLjsmpRcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodXNlck5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgc2V0QXV0aEVycm9yKFwi7J2066aE7J2EIOyeheugpe2VmOyEuOyalFwiKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3VzZXJOYW1lJ11cIikuZm9jdXMoKTtcclxuICAgICAgLy8gc2V0QXV0aEVycm9yKFwiXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtjdXJyaWN1bHVtLCB1c2VyTmFtZV0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU1VCTUlUXCIsIGN1cnJpY3VsdW0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHNldEF1dGhFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUN1cnJpY3VsdW0gPSAoZSkgPT4ge1xyXG4gICAgc2V0Q3VycmljdWx1bShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aENvbnRhaW5lclwiPlxyXG4gICAgICA8aDM+7ZWc6rWt6rK97JiB7JuQIOyduOyerOqwnOuwnOybkDwvaDM+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHNlbGVjdCBuYW1lPVwiY3VycmljdWx1bVwiIGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiIHZhbHVlPXtjdXJyaWN1bHVtfSBvbkNoYW5nZT17b25DaGFuZ2VDdXJyaWN1bHVtfSBkYXRhLXNpemU9XCIyXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTk9ORVwiPu2biOugqOyngeyiheyEoO2DnTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNwcmluZ01WQ1wiPlNwcmluZ01WQzwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkphdmFfUHl0aG9uXCI+7J6Q67CUJu2MjOydtOyNrDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIHthdXRoRXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aEVycm9yXCI+e2F1dGhFcnJvcn08L3NwYW4+fVxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuICAgICAgICA8aW5wdXQgbmFtZT1cInVzZXJOYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuydtOumhFwiIHZhbHVlPXt1c2VyTmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlVXNlck5hbWV9IGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiIC8+XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJwaG9uZVwiIHR5cGU9XCJwaG9uZVwiIHBsYWNlaG9sZGVyPVwi7KCE7ZmU67KI7Zi4XCIgdmFsdWU9e3Bob25lfSBvbkNoYW5nZT17b25DaGFuZ2V0UGhvbmV9IGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhdXRoSW5wdXQgYXV0aFN1Ym1pdFwiIHZhbHVlPVwi65Ox66Gd7ZWY6riwXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=