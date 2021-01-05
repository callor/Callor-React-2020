webpackHotUpdate_N_E("pages/Signup",{

/***/ "./pages/Signup.jsx":
/*!**************************!*\
  !*** ./pages/Signup.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");



var _jsxFileName = "C:\\Users\\callor\\Documents\\workspace\\React_Project\\react-2020\\react-900-counseling\\pages\\Signup.jsx",
    _s2 = $RefreshSig$();






const Signup = () => {
  _s2();

  var _s = $RefreshSig$();

  const onSubmit = e => {
    e.preventDefault();
    console.log({
      id,
      nick,
      password,
      passwordCheck,
      term
    });
  }; //반복되는 코드들을 Coustom Hook을 활용하여 줄여줄 수 있다.


  const useInput = (initValue = null) => {
    _s();

    const {
      0: value,
      1: setter
    } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initValue);
    const handler = useCallback(e => {
      setter(e.target.value);
    }, []);
    return [value, handler];
  };

  _s(useInput, "jJC7NbJZBwPw2rLfrH4q62FtgpU=");

  const [user_id, setUserId] = useInput("");
  const [user_name, setUserName] = useInput("");
  const [tel, setTel] = useInput(""); // Coustom Hook 이전

  const onChangeUserId = e => {
    setUserId(e.target.value);
  };

  const onChangeUserName = e => {
    setUserName(e.target.value);
  };

  const onChangeTel = e => {
    setTel(e.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        onSubmit: onSubmit,
        style: {
          padding: 10
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "user-id",
            children: "\uC774\uBA54\uC77C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
            name: "user-id",
            value: user_id,
            required: true,
            onChange: onChangeUserId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "user-name",
            children: "\uC774\uB984"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
            name: "user-name",
            value: user_name,
            required: true,
            onChange: onChangeUserName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "user-tel",
            children: "\uD734\uB300\uD3F0\uBC88\uD638"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
            name: "user-tel",
            value: tel,
            required: true,
            onChange: onChangeTel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginTop: 10
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "primary",
            htmlType: "submit",
            children: "\uC800\uC7A5\uD558\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s2(Signup, "6Kk9E2ePC9upMaQWrRFYdW7J6e0=", true);

_c = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c;

$RefreshReg$(_c, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU2lnbnVwLmpzeCJdLCJuYW1lcyI6WyJTaWdudXAiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm5pY2siLCJwYXNzd29yZCIsInBhc3N3b3JkQ2hlY2siLCJ0ZXJtIiwidXNlSW5wdXQiLCJpbml0VmFsdWUiLCJ2YWx1ZSIsInNldHRlciIsInVzZVN0YXRlIiwiaGFuZGxlciIsInVzZUNhbGxiYWNrIiwidGFyZ2V0IiwidXNlcl9pZCIsInNldFVzZXJJZCIsInVzZXJfbmFtZSIsInNldFVzZXJOYW1lIiwidGVsIiwic2V0VGVsIiwib25DaGFuZ2VVc2VySWQiLCJvbkNoYW5nZVVzZXJOYW1lIiwib25DaGFuZ2VUZWwiLCJwYWRkaW5nIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFBQTs7QUFDbkIsUUFBTUMsUUFBUSxHQUFJQyxDQUFELElBQU87QUFDdEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUNWQyxRQURVO0FBRVZDLFVBRlU7QUFHVkMsY0FIVTtBQUlWQyxtQkFKVTtBQUtWQztBQUxVLEtBQVo7QUFPRCxHQVRELENBRG1CLENBWW5COzs7QUFDQSxRQUFNQyxRQUFRLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLElBQWIsS0FBc0I7QUFBQTs7QUFDckMsVUFBTTtBQUFBLFNBQUNDLEtBQUQ7QUFBQSxTQUFRQztBQUFSLFFBQWtCQyxzREFBUSxDQUFDSCxTQUFELENBQWhDO0FBQ0EsVUFBTUksT0FBTyxHQUFHQyxXQUFXLENBQUVmLENBQUQsSUFBTztBQUNqQ1ksWUFBTSxDQUFDWixDQUFDLENBQUNnQixNQUFGLENBQVNMLEtBQVYsQ0FBTjtBQUNELEtBRjBCLEVBRXhCLEVBRndC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QUFBdUIsb0JBQVEsRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQSxrQkFERjtBQWlDRCxDQXJFRDs7SUFBTTdCLE07O0tBQUFBLE07QUF1RVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1NpZ251cC44YWVhZjg0MDQxOWM0YzNiMWQwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIENoZWNrYm94LCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKHtcclxuICAgICAgaWQsXHJcbiAgICAgIG5pY2ssXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICBwYXNzd29yZENoZWNrLFxyXG4gICAgICB0ZXJtLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy/rsJjrs7XrkJjripQg7L2U65Oc65Ok7J2EIENvdXN0b20gSG9va+ydhCDtmZzsmqntlZjsl6wg7KSE7Jes7KSEIOyImCDsnojri6QuXHJcbiAgY29uc3QgdXNlSW5wdXQgPSAoaW5pdFZhbHVlID0gbnVsbCkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXR0ZXJdID0gdXNlU3RhdGUoaW5pdFZhbHVlKTtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICBzZXR0ZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlcl07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3VzZXJfaWQsIHNldFVzZXJJZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbdXNlcl9uYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbdGVsLCBzZXRUZWxdID0gdXNlSW5wdXQoXCJcIik7XHJcblxyXG4gIC8vIENvdXN0b20gSG9vayDsnbTsoIRcclxuICBjb25zdCBvbkNoYW5nZVVzZXJJZCA9IChlKSA9PiB7XHJcbiAgICBzZXRVc2VySWQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25DaGFuZ2VVc2VyTmFtZSA9IChlKSA9PiB7XHJcbiAgICBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBvbkNoYW5nZVRlbCA9IChlKSA9PiB7XHJcbiAgICBzZXRUZWwoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8zLjE4LjEvYW50ZC5jc3NcIiAvPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8zLjE4LjEvYW50ZC5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuydtOuplOydvDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItaWRcIiB2YWx1ZT17dXNlcl9pZH0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlVXNlcklkfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItbmFtZVwiPuydtOumhDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItbmFtZVwiIHZhbHVlPXt1c2VyX25hbWV9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZVVzZXJOYW1lfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItdGVsXCI+7Zy064yA7Y+w67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci10ZWxcIiB2YWx1ZT17dGVsfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VUZWx9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAg7KCA7J6l7ZWY6riwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0FwcExheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=