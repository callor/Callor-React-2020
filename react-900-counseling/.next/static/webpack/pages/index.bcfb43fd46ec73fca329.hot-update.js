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

  const onChangInputBox = e => {
    setInputBox(_objectSpread(_objectSpread({}, inputBox), {}, {
      [e.target.name]: e.target.value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    console.log(inputBox);
    setAuthError({
      curriculum: inputBox.curriculum === "NONE" ? "직종을 선택하세요" : "",
      email: !inputBox.email ? "E-mail을 입력하세요" : "",
      userName: !inputBox.userName ? "이름을 입력하세요" : "",
      phone: !inputBox.phone ? "휴대폰 번호를 입력하세요" : ""
    });
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
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      className: "container",
      children: [authError.curriculum && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.curriculum
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
      }, undefined), authError.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
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
        lineNumber: 72,
        columnNumber: 9
      }, undefined), authError.userName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.userName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
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
        lineNumber: 75,
        columnNumber: 9
      }, undefined), authError.phone && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "authError",
        children: authError.phone
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
        lineNumber: 78,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "submit",
        className: "authInput authSubmit",
        value: "\uB4F1\uB85D\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, undefined);
};

_s2(AuthForm, "gDnZ1l166hgtif6SqUtBH/LFGnY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2luRm9ybS5qc3giXSwibmFtZXMiOlsiVGV4dElucHV0IiwibWVtbyIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwidHlwZSIsImNsYXNzTmFtZSIsInVzZUlucHV0IiwiaW5pdFZhbHVlIiwic2V0dGVyIiwidXNlU3RhdGUiLCJoYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwiQXV0aEZvcm0iLCJhdXRoRXJyb3IiLCJzZXRBdXRoRXJyb3IiLCJjdXJyaWN1bHVtIiwidXNlck5hbWUiLCJlbWFpbCIsInBob25lIiwiaW5wdXRCb3giLCJzZXRJbnB1dEJveCIsInVlck5hbWUiLCJvbkNoYW5nSW5wdXRCb3giLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJvbkNoYW5nZUN1cnJpY3VsdW0iLCJzZXRDdXJyaWN1bHVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFNBQVMsZ0JBQUdDLGtEQUFJLE1BQUMsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLFVBQVQ7QUFBbUJDLE1BQW5CO0FBQXlCQyxNQUF6QjtBQUErQkM7QUFBL0IsQ0FBRCxLQUFnRDtBQUNyRSxzQkFBTztBQUFPLFFBQUksRUFBRUQsSUFBYjtBQUFtQixRQUFJLEVBQUVELElBQXpCO0FBQStCLFNBQUssRUFBRUYsS0FBdEM7QUFBNkMsWUFBUSxNQUFyRDtBQUFzRCxZQUFRLEVBQUVDLFFBQWhFO0FBQTBFLGFBQVMsRUFBRUc7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGcUIsQ0FBdEI7TUFBTU4sUzs7QUFJTixNQUFNTyxRQUFRLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLElBQWIsS0FBc0I7QUFBQTs7QUFDckMsUUFBTTtBQUFBLE9B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QUFBO0FBQUE7QUFBQSxtQkFkdEIsZUFlRTtBQUFPLFlBQUksRUFBQyxPQUFaO0FBQW9CLFlBQUksRUFBQyxPQUF6QjtBQUFpQyxtQkFBVyxFQUFDLDBCQUE3QztBQUFvRCxhQUFLLEVBQUVDLFFBQVEsQ0FBQ0QsS0FBcEU7QUFBMkUsZ0JBQVEsRUFBRUksZUFBckY7QUFBc0csaUJBQVMsRUFBQztBQUFoSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGLGVBaUJFO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQVMsRUFBQyxzQkFBL0I7QUFBc0QsYUFBSyxFQUFDO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXdCRCxDQXJFRDs7SUFBTVYsUTs7TUFBQUEsUTtBQXNFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmNmYjQzZmQ0NmVjNzNmY2EzMjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgbWVtbywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVGV4dElucHV0ID0gbWVtbygoeyB2YWx1ZSwgb25DaGFuZ2UsIG5hbWUsIHR5cGUsIGNsYXNzTmFtZSB9KSA9PiB7XHJcbiAgcmV0dXJuIDxpbnB1dCB0eXBlPXt0eXBlfSBuYW1lPXtuYW1lfSB2YWx1ZT17dmFsdWV9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IC8+O1xyXG59KTtcclxuXHJcbmNvbnN0IHVzZUlucHV0ID0gKGluaXRWYWx1ZSA9IG51bGwpID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldHRlcl0gPSB1c2VTdGF0ZShpbml0VmFsdWUpO1xyXG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0dGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlcl07XHJcbn07XHJcblxyXG5jb25zdCBBdXRoRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbYXV0aEVycm9yLCBzZXRBdXRoRXJyb3JdID0gdXNlU3RhdGUoe1xyXG4gICAgY3VycmljdWx1bTogXCJcIixcclxuICAgIHVzZXJOYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwaG9uZTogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbaW5wdXRCb3gsIHNldElucHV0Qm94XSA9IHVzZVN0YXRlKHtcclxuICAgIHVlck5hbWU6IFwiXCIsXHJcbiAgICBwaG9uZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgY3VycmljdWx1bTogXCJOT05FXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdJbnB1dEJveCA9IChlKSA9PiB7XHJcbiAgICBzZXRJbnB1dEJveCh7XHJcbiAgICAgIC4uLmlucHV0Qm94LFxyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlucHV0Qm94KTtcclxuICAgIHNldEF1dGhFcnJvcih7XHJcbiAgICAgIGN1cnJpY3VsdW06IGlucHV0Qm94LmN1cnJpY3VsdW0gPT09IFwiTk9ORVwiID8gXCLsp4HsooXsnYQg7ISg7YOd7ZWY7IS47JqUXCIgOiBcIlwiLFxyXG4gICAgICBlbWFpbDogIWlucHV0Qm94LmVtYWlsID8gXCJFLW1haWzsnYQg7J6F66Cl7ZWY7IS47JqUXCIgOiBcIlwiLFxyXG4gICAgICB1c2VyTmFtZTogIWlucHV0Qm94LnVzZXJOYW1lID8gXCLsnbTrpoTsnYQg7J6F66Cl7ZWY7IS47JqUXCIgOiBcIlwiLFxyXG4gICAgICBwaG9uZTogIWlucHV0Qm94LnBob25lID8gXCLtnLTrjIDtj7Ag67KI7Zi466W8IOyeheugpe2VmOyEuOyalFwiIDogXCJcIixcclxuICAgIH0pO1xyXG4gIH0sIFtpbnB1dEJveF0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU1VCTUlUXCIsIGN1cnJpY3VsdW0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHNldEF1dGhFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUN1cnJpY3VsdW0gPSAoZSkgPT4ge1xyXG4gICAgc2V0Q3VycmljdWx1bShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aENvbnRhaW5lclwiPlxyXG4gICAgICA8aDM+7ZWc6rWt6rK97JiB7JuQIOyduOyerOqwnOuwnOybkDwvaDM+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAge2F1dGhFcnJvci5jdXJyaWN1bHVtICYmIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhFcnJvclwiPnthdXRoRXJyb3IuY3VycmljdWx1bX08L3NwYW4+fVxyXG4gICAgICAgIDxzZWxlY3QgbmFtZT1cImN1cnJpY3VsdW1cIiBjbGFzc05hbWU9XCJhdXRoSW5wdXRcIiB2YWx1ZT17aW5wdXRCb3guY3VycmljdWx1bX0gb25DaGFuZ2U9e29uQ2hhbmdJbnB1dEJveH0gZGF0YS1zaXplPVwiMlwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5PTkVcIj7tm4jroKjsp4HsooXshKDtg508L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTcHJpbmdNVkNcIj5TcHJpbmdNVkM8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJKYXZhX1B5dGhvblwiPuyekOuwlCbtjIzsnbTsjaw8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAge2F1dGhFcnJvci5lbWFpbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRoRXJyb3JcIj57YXV0aEVycm9yLmVtYWlsfTwvc3Bhbj59XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiB2YWx1ZT17aW5wdXRCb3guZW1haWx9IG9uQ2hhbmdlPXtvbkNoYW5nSW5wdXRCb3h9IGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiIC8+XHJcblxyXG4gICAgICAgIHthdXRoRXJyb3IudXNlck5hbWUgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aEVycm9yXCI+e2F1dGhFcnJvci51c2VyTmFtZX08L3NwYW4+fVxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwidXNlck5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi7J2066aEXCIgdmFsdWU9e2lucHV0Qm94LnVzZXJOYW1lfSBvbkNoYW5nZT17b25DaGFuZ0lucHV0Qm94fSBjbGFzc05hbWU9XCJhdXRoSW5wdXRcIiAvPlxyXG5cclxuICAgICAgICB7YXV0aEVycm9yLnBob25lICYmIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhFcnJvclwiPnthdXRoRXJyb3IucGhvbmV9PC9zcGFuPn1cclxuICAgICAgICA8aW5wdXQgbmFtZT1cInBob25lXCIgdHlwZT1cInBob25lXCIgcGxhY2Vob2xkZXI9XCLsoITtmZTrsojtmLhcIiB2YWx1ZT17aW5wdXRCb3gucGhvbmV9IG9uQ2hhbmdlPXtvbkNoYW5nSW5wdXRCb3h9IGNsYXNzTmFtZT1cImF1dGhJbnB1dFwiIC8+XHJcblxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYXV0aElucHV0IGF1dGhTdWJtaXRcIiB2YWx1ZT1cIuuTseuhne2VmOq4sFwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9