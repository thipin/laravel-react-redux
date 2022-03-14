"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_js"],{

/***/ "./resources/js/App.js":
/*!*****************************!*\
  !*** ./resources/js/App.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_config_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/config/store */ "./resources/js/redux/config/store.js");
/* harmony import */ var _core_components_spinner_Fallback_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/spinner/Fallback-spinner */ "./resources/js/core/components/spinner/Fallback-spinner.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var LazyApp = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./App */ "./resources/js/App.js"));
});
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
  store: _redux_config_store__WEBPACK_IMPORTED_MODULE_4__.store,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_core_components_spinner_Fallback_spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(LazyApp, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {
      newestOnTop: true
    })]
  })
}), document.getElementById("root"));

/***/ })

}]);