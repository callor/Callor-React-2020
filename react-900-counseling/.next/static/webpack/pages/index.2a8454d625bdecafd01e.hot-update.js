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

  const [email, onChangeEmail] = useInput("");
  const [userName, onChangeUserName] = useInput("");
  const {
    0: authError,
    1: setAuthError
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const [phone, onChangetPhone] = useInput("");
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
      [e.targetName]: e.target.value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "authContainer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
      children: "\uD55C\uAD6D\uACBD\uC601\uC6D0 \uC778\uC7AC\uAC1C\uBC1C\uC6D0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
        name: "curriculum",
        className: "authInput",
        value: inputBox.curriculum,
        onChange: onChangeCurriculum,
        "data-size": "2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: "NONE",
          children: "\uD6C8\uB828\uC9C1\uC885\uC120\uD0DD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: "SpringMVC",
          children: "SpringMVC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: "Java_Python",
          children: "\uC790\uBC14&\uD30C\uC774\uC36C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined), authError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 23
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        name: "email",
        type: "email",
        placeholder: "Email",
        value: inputBox.email,
        onChange: onChangeEmail,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        name: "userName",
        type: "text",
        placeholder: "\uC774\uB984",
        value: inputBox.userName,
        onChange: onChangeUserName,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        name: "phone",
        type: "phone",
        placeholder: "\uC804\uD654\uBC88\uD638",
        value: inputBox.phone,
        onChange: onChangetPhone,
        className: "authInput"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "submit",
        className: "authInput authSubmit",
        value: "\uB4F1\uB85D\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2luRm9ybS5qc3giXSwibmFtZXMiOlsiVGV4dElucHV0IiwibWVtbyIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwidHlwZSIsImNsYXNzTmFtZSIsInVzZUlucHV0IiwiaW5pdFZhbHVlIiwic2V0dGVyIiwidXNlU3RhdGUiLCJoYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwiQXV0aEZvcm0iLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJ1c2VyTmFtZSIsIm9uQ2hhbmdlVXNlck5hbWUiLCJhdXRoRXJyb3IiLCJzZXRBdXRoRXJyb3IiLCJwaG9uZSIsIm9uQ2hhbmdldFBob25lIiwiY3VycmljdWx1bSIsInNldEN1cnJpY3VsdW0iLCJpbnB1dEJveCIsInNldElucHV0Qm94IiwidWVyTmFtZSIsIm9uQ2hhbmdJbnB1dEJveCIsInRhcmdldE5hbWUiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsImFsZXJ0IiwibWVzc2FnZSIsIm9uQ2hhbmdlQ3VycmljdWx1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxTQUFTLGdCQUFHQyxrREFBSSxNQUFDLENBQUM7QUFBRUMsT0FBRjtBQUFTQyxVQUFUO0FBQW1CQyxNQUFuQjtBQUF5QkMsTUFBekI7QUFBK0JDO0FBQS9CLENBQUQsS0FBZ0Q7QUFDckUsc0JBQU87QUFBTyxRQUFJLEVBQUVELElBQWI7QUFBbUIsUUFBSSxFQUFFRCxJQUF6QjtBQUErQixTQUFLLEVBQUVGLEtBQXRDO0FBQTZDLFlBQVEsTUFBckQ7QUFBc0QsWUFBUSxFQUFFQyxRQUFoRTtBQUEwRSxhQUFTLEVBQUVHO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFB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QUFDO0FBQS9HO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEYsZUFVRTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGlCQUFTLEVBQUMsc0JBQS9CO0FBQXNELGFBQUssRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlCRCxDQS9ERDs7SUFBTVIsUTtVQUMyQlIsUSxFQUNNQSxRLEVBRUxBLFE7OztNQUo1QlEsUTtBQWdFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmE4NDU0ZDYyNWJkZWNhZmQwMWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgbWVtbywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVGV4dElucHV0ID0gbWVtbygoeyB2YWx1ZSwgb25DaGFuZ2UsIG5hbWUsIHR5cGUsIGNsYXNzTmFtZSB9KSA9PiB7XHJcbiAgcmV0dXJuIDxpbnB1dCB0eXBlPXt0eXBlfSBuYW1lPXtuYW1lfSB2YWx1ZT17dmFsdWV9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IC8+O1xyXG59KTtcclxuXHJcbmNvbnN0IHVzZUlucHV0ID0gKGluaXRWYWx1ZSA9IG51bGwpID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldHRlcl0gPSB1c2VTdGF0ZShpbml0VmFsdWUpO1xyXG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0dGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlcl07XHJcbn07XHJcblxyXG5jb25zdCBBdXRoRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJOYW1lLCBvbkNoYW5nZVVzZXJOYW1lXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFthdXRoRXJyb3IsIHNldEF1dGhFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGhvbmUsIG9uQ2hhbmdldFBob25lXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtjdXJyaWN1bHVtLCBzZXRDdXJyaWN1bHVtXSA9IHVzZVN0YXRlKFwiTk9ORVwiKTtcclxuICBjb25zdCBbaW5wdXRCb3gsIHNldElucHV0Qm94XSA9IHVzZVN0YXRlKHtcclxuICAgIHVlck5hbWU6IFwiXCIsXHJcbiAgICBwaG9uZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgY3VycmljdWx1bTogXCJOT05FXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdJbnB1dEJveCA9IChlKSA9PiB7XHJcbiAgICBzZXRJbnB1dEJveCh7XHJcbiAgICAgIC4uLmlucHV0Qm94LFxyXG4gICAgICBbZS50YXJnZXROYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY3VycmljdWx1bSk7XHJcbiAgICBpZiAoY3VycmljdWx1bSA9PT0gXCJOT05FXCIpIHtcclxuICAgICAgc2V0QXV0aEVycm9yKFwi7KeB7KKF7J2EIOyEoO2Dne2VtCDso7zshLjsmpRcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodXNlck5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgc2V0QXV0aEVycm9yKFwi7J2066aE7J2EIOyeheugpe2VmOyEuOyalFwiKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3VzZXJOYW1lJ11cIikuZm9jdXMoKTtcclxuICAgICAgLy8gc2V0QXV0aEVycm9yKFwiXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtjdXJyaWN1bHVtLCB1c2VyTmFtZV0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU1VCTUlUXCIsIGN1cnJpY3VsdW0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHNldEF1dGhFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUN1cnJpY3VsdW0gPSAoZSkgPT4ge1xyXG4gICAgc2V0Q3VycmljdWx1bShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aENvbnRhaW5lclwiPlxyXG4gICAgICA8aDM+7ZWc6rWt6rK97JiB7JuQIOyduOyerOqwnOuwnOybkDwvaDM+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHNlbGVjdCBuYW1lPVwiY3VycmljdWx1bVwiIGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiIHZhbHVlPXtpbnB1dEJveC5jdXJyaWN1bHVtfSBvbkNoYW5nZT17b25DaGFuZ2VDdXJyaWN1bHVtfSBkYXRhLXNpemU9XCIyXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTk9ORVwiPu2biOugqOyngeyiheyEoO2DnTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNwcmluZ01WQ1wiPlNwcmluZ01WQzwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkphdmFfUHl0aG9uXCI+7J6Q67CUJu2MjOydtOyNrDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIHthdXRoRXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aEVycm9yXCI+e2F1dGhFcnJvcn08L3NwYW4+fVxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdmFsdWU9e2lucHV0Qm94LmVtYWlsfSBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0gY2xhc3NOYW1lPVwiYXV0aElucHV0XCIgLz5cclxuICAgICAgICA8aW5wdXQgbmFtZT1cInVzZXJOYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuydtOumhFwiIHZhbHVlPXtpbnB1dEJveC51c2VyTmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlVXNlck5hbWV9IGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiIC8+XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJwaG9uZVwiIHR5cGU9XCJwaG9uZVwiIHBsYWNlaG9sZGVyPVwi7KCE7ZmU67KI7Zi4XCIgdmFsdWU9e2lucHV0Qm94LnBob25lfSBvbkNoYW5nZT17b25DaGFuZ2V0UGhvbmV9IGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhdXRoSW5wdXQgYXV0aFN1Ym1pdFwiIHZhbHVlPVwi65Ox66Gd7ZWY6riwXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=