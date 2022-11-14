"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_err_err_module_ts"],{

/***/ 4116:
/*!*************************************************!*\
  !*** ./src/app/pages/err/err-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERRPageRoutingModule": () => (/* binding */ ERRPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _err_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./err.page */ 7958);




const routes = [
    {
        path: '',
        component: _err_page__WEBPACK_IMPORTED_MODULE_0__.ERRPage
    }
];
let ERRPageRoutingModule = class ERRPageRoutingModule {
};
ERRPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ERRPageRoutingModule);



/***/ }),

/***/ 1774:
/*!*****************************************!*\
  !*** ./src/app/pages/err/err.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERRPageModule": () => (/* binding */ ERRPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _err_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./err-routing.module */ 4116);
/* harmony import */ var _err_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./err.page */ 7958);







let ERRPageModule = class ERRPageModule {
};
ERRPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _err_routing_module__WEBPACK_IMPORTED_MODULE_0__.ERRPageRoutingModule
        ],
        declarations: [_err_page__WEBPACK_IMPORTED_MODULE_1__.ERRPage]
    })
], ERRPageModule);



/***/ }),

/***/ 7958:
/*!***************************************!*\
  !*** ./src/app/pages/err/err.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERRPage": () => (/* binding */ ERRPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _err_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./err.page.html?ngResource */ 6688);
/* harmony import */ var _err_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./err.page.scss?ngResource */ 8030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ERRPage = class ERRPage {
    constructor() { }
    ngOnInit() {
    }
};
ERRPage.ctorParameters = () => [];
ERRPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-err',
        template: _err_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_err_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ERRPage);



/***/ }),

/***/ 8030:
/*!****************************************************!*\
  !*** ./src/app/pages/err/err.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "img {\n  max-width: 35%;\n}\n\n.azulito {\n  background-color: #f7d547;\n}\n\n.sep1 {\n  padding: 0.3vw;\n  border-radius: 90%;\n}\n\n.div3 {\n  height: 10px;\n}\n\n.celestito {\n  background: #9ac1d9;\n}\n\n.bodycol {\n  background-color: #012840;\n}\n\n.porque {\n  position: relative;\n  left: 12%;\n}\n\n.porque2 {\n  position: relative;\n  left: 15%;\n}\n\n.porque1 {\n  position: relative;\n  left: 12%;\n}\n\n.footcol {\n  background-color: #B0E9FC;\n}\n\n.ema {\n  background-color: #B0E9FC;\n}\n\n.rectange5 {\n  position: absolute;\n  width: 340px;\n  height: 71px;\n  left: 9px;\n  top: 193px;\n}\n\n@keyframes error {\n  5% {\n    padding-left: calc(var(--padding-button) - 8px);\n    padding-right: calc(var(--padding-button) + 8px);\n  }\n  10% {\n    padding-left: calc(var(--padding-button) + 7px);\n    padding-right: calc(var(--padding-button) - 7px);\n  }\n  20% {\n    padding-left: calc(var(--padding-button) - 6px);\n    padding-right: calc(var(--padding-button) + 6px);\n  }\n  30% {\n    padding-left: calc(var(--padding-button) + 5px);\n    padding-right: calc(var(--padding-button) - 5px);\n  }\n  40% {\n    padding-left: calc(var(--padding-button) - 4px);\n    padding-right: calc(var(--padding-button) + 4px);\n  }\n  50% {\n    padding-left: calc(var(--padding-button) + 3px);\n    padding-right: calc(var(--padding-button) - 3px);\n  }\n  60% {\n    padding-left: calc(var(--padding-button) - 2px);\n    padding-right: calc(var(--padding-button) + 2px);\n  }\n  70% {\n    padding-left: calc(var(--padding-button) + 1px);\n    padding-right: calc(var(--padding-button) - 1px);\n  }\n  80% {\n    padding-left: var(--padding-button);\n    padding-right: var(--padding-button);\n  }\n}\n\n.but1-anim:hover {\n  background-color: var(--color-secondary);\n}\n\n.but1-anim {\n  background-color: var(--color-primary);\n  border: none;\n  color: var(--color-white);\n  cursor: pointer;\n  margin-left: 12px;\n  padding: 3px var(--padding-button);\n  transition: background-color 0.1s ease;\n}\n\n.blanquito {\n  background-color: #FFFFFF;\n  width: 90%;\n  height: 105%;\n  padding-left: 10px;\n  border-radius: 10%;\n}\n\n.p1--1 {\n  text-align: justify;\n  margin: 28%;\n  color: rgb(175, 68, 68);\n  text-shadow: 1px 1px 2px rgb(175, 68, 68);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVyci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0FBSUo7O0FBRkE7RUFDSSxtQkFBQTtBQUtKOztBQUZBO0VBQ0kseUJBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQU1KOztBQUpBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUFRSjs7QUFOQTtFQUNJLHlCQUFBO0FBU0o7O0FBUEE7RUFDSSx5QkFBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBV0o7O0FBVEE7RUFDSTtJQUNFLCtDQUFBO0lBQ0EsZ0RBQUE7RUFZSjtFQVZFO0lBQ0UsK0NBQUE7SUFDQSxnREFBQTtFQVlKO0VBVkU7SUFDRSwrQ0FBQTtJQUNBLGdEQUFBO0VBWUo7RUFWRTtJQUNFLCtDQUFBO0lBQ0EsZ0RBQUE7RUFZSjtFQVZFO0lBQ0UsK0NBQUE7SUFDQSxnREFBQTtFQVlKO0VBVkU7SUFDRSwrQ0FBQTtJQUNBLGdEQUFBO0VBWUo7RUFWRTtJQUNFLCtDQUFBO0lBQ0EsZ0RBQUE7RUFZSjtFQVZFO0lBQ0UsK0NBQUE7SUFDQSxnREFBQTtFQVlKO0VBVkU7SUFDRSxtQ0FBQTtJQUNBLG9DQUFBO0VBWUo7QUFDRjs7QUFWQTtFQUNJLHdDQUFBO0FBWUo7O0FBVkE7RUFDSSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0NBQUE7QUFhSjs7QUFWQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBYUo7O0FBVkE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0FBYUoiLCJmaWxlIjoiZXJyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIG1heC13aWR0aDogMzUlO1xyXG59XHJcbi5henVsaXRve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDU0NztcclxufVxyXG4uc2VwMXtcclxuICAgIHBhZGRpbmc6IDAuM3Z3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTAlO1xyXG59XHJcbi5kaXYze1xyXG4gICAgaGVpZ2h0OjEwcHg7XHJcbn1cclxuLmNlbGVzdGl0b3tcclxuICAgIGJhY2tncm91bmQ6ICM5YWMxZDk7XHJcbiAgICBcclxufVxyXG4uYm9keWNvbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTI4NDA7XHJcbn1cclxuLnBvcnF1ZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDEyJTtcclxufVxyXG4ucG9ycXVlMntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDE1JTtcclxufVxyXG4ucG9ycXVlMXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDEyJTtcclxufVxyXG4uZm9vdGNvbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMEU5RkM7XHJcbn1cclxuLmVtYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMEU5RkM7XHJcbn1cclxuLnJlY3RhbmdlNXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIGhlaWdodDogNzFweDtcclxuICAgIGxlZnQ6IDlweDtcclxuICAgIHRvcDogMTkzcHg7XHJcbn1cclxuQGtleWZyYW1lcyBlcnJvciB7XHJcbiAgICA1JSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgLSA4cHgpO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSArIDhweCk7XHJcbiAgICB9XHJcbiAgICAxMCUge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pICsgN3B4KTtcclxuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgLSA3cHgpO1xyXG4gICAgfVxyXG4gICAgMjAlIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSAtIDZweCk7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pICsgNnB4KTtcclxuICAgIH1cclxuICAgIDMwJSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgKyA1cHgpO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSAtIDVweCk7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pIC0gNHB4KTtcclxuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgKyA0cHgpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSArIDNweCk7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pIC0gM3B4KTtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgLSAycHgpO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSArIDJweCk7XHJcbiAgICB9XHJcbiAgICA3MCUge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pICsgMXB4KTtcclxuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgLSAxcHgpO1xyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLWJ1dHRvbik7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmctYnV0dG9uKTtcclxuICAgIH1cclxufVxyXG4uYnV0MS1hbmltOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuLmJ1dDEtYW5pbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIHBhZGRpbmc6IDNweCB2YXIoLS1wYWRkaW5nLWJ1dHRvbik7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xcyBlYXNlO1xyXG59XHJcblxyXG4uYmxhbnF1aXRve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDEwNSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICBcclxufVxyXG4ucDEtLTF7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbWFyZ2luOiAyOCU7XHJcbiAgICBjb2xvcjogcmdiKDE3NSA2OCA2OCk7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiKDE3NSA2OCA2OCk7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 6688:
/*!****************************************************!*\
  !*** ./src/app/pages/err/err.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <div class=\"sep1\">\r\n    <ion-toolbar color=\" azulito\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title ><p style=\"position: relative;left: -1%;font-size: 110%;color: #2D4596;\">Registrapp</p><p><img src=\"assets/aaa1.jpg\" alt=\"Logo\" style=\"width:15%; position: absolute; top: 5%; right: 5%;\"></p></ion-title>\r\n    </ion-toolbar>\r\n  </div>\r\n  <div class=\"sep1\">\r\n  <ion-toolbar color=\" azulito\" style=\"width: 100%;height: 45px;left: 0px;top: 0px;padding-top: 0;\">\r\n    <ion-card-subtitle ><p style=\"text-align: center; top: -4px;\" ><a href=\"https://www.duoc.cl/\"><img src=\"assets/pngegg.png\" alt=\"DUOCUC\" style=\"width: 60%; height: 60%; padding-top: -10%;\" class=\"ion-image1\" ></a></p></ion-card-subtitle>\r\n  </ion-toolbar>\r\n  </div>\r\n  <div class=\"sep1\">\r\n  <ion-toolbar style=\"width: 100%;\r\n  height: 34px;\r\n  left: 0px;\r\n  top: 0px;\r\n  padding-top: 0;\" color=\" celestito\">\r\n    <ion-card-subtitle style=\" top: -4px; padding-top: 0px;\"><p style=\"text-align: start; color: black;\">¿Necesitas Ayuda?</p></ion-card-subtitle>\r\n  </ion-toolbar>\r\n  </div>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-toolbar style=\"width: 100%; height: 97.6%; padding-top: 5vw;\" color=\" bodycol\">\r\n    <!-- Aqui va el material de la pagina -->\r\n    <p class=\"p1--1\" style=\"text-align: justify; border: 20px;\"> ERROR 404, Vuelva a intentar más tarde</p>    \r\n  </ion-toolbar>\r\n  <ion-toolbar style=\"width: 100%; height: 10px;\" color=\" celestito\">\r\n  </ion-toolbar>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_err_err_module_ts.js.map