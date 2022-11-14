"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_nec-ayu_nec-ayu_module_ts"],{

/***/ 5461:
/*!*********************************************************!*\
  !*** ./src/app/pages/nec-ayu/nec-ayu-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NecAyuPageRoutingModule": () => (/* binding */ NecAyuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _nec_ayu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nec-ayu.page */ 8613);




const routes = [
    {
        path: '',
        component: _nec_ayu_page__WEBPACK_IMPORTED_MODULE_0__.NecAyuPage
    }
];
let NecAyuPageRoutingModule = class NecAyuPageRoutingModule {
};
NecAyuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NecAyuPageRoutingModule);



/***/ }),

/***/ 4336:
/*!*************************************************!*\
  !*** ./src/app/pages/nec-ayu/nec-ayu.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NecAyuPageModule": () => (/* binding */ NecAyuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _nec_ayu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nec-ayu-routing.module */ 5461);
/* harmony import */ var _nec_ayu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nec-ayu.page */ 8613);







let NecAyuPageModule = class NecAyuPageModule {
};
NecAyuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _nec_ayu_routing_module__WEBPACK_IMPORTED_MODULE_0__.NecAyuPageRoutingModule
        ],
        declarations: [_nec_ayu_page__WEBPACK_IMPORTED_MODULE_1__.NecAyuPage]
    })
], NecAyuPageModule);



/***/ }),

/***/ 8613:
/*!***********************************************!*\
  !*** ./src/app/pages/nec-ayu/nec-ayu.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NecAyuPage": () => (/* binding */ NecAyuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nec_ayu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nec-ayu.page.html?ngResource */ 1085);
/* harmony import */ var _nec_ayu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nec-ayu.page.scss?ngResource */ 4258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let NecAyuPage = class NecAyuPage {
    constructor() { }
    ngOnInit() {
    }
};
NecAyuPage.ctorParameters = () => [];
NecAyuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-nec-ayu',
        template: _nec_ayu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nec_ayu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NecAyuPage);



/***/ }),

/***/ 4258:
/*!************************************************************!*\
  !*** ./src/app/pages/nec-ayu/nec-ayu.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "img {\n  max-width: 35%;\n}\n\n.azulito {\n  background-color: #f7d547;\n}\n\n.sep1 {\n  padding: 0.3vw;\n  border-radius: 90%;\n}\n\n.sep {\n  padding: 2.5vw;\n  border-radius: 90%;\n}\n\n.div3 {\n  height: 10px;\n}\n\n.celestito {\n  background: #9ac1d9;\n}\n\n.bodycol {\n  background-color: #012840;\n}\n\n.porque {\n  position: relative;\n  left: 27%;\n}\n\n.porque1 {\n  position: relative;\n  left: 12%;\n}\n\n.footcol {\n  background-color: #B0E9FC;\n}\n\n.ema {\n  background-color: #B0E9FC;\n}\n\n.rectange5 {\n  position: absolute;\n  width: 340px;\n  height: 71px;\n  left: 9px;\n  top: 193px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5lYy1heXUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0FBS0o7O0FBSEE7RUFDSSxtQkFBQTtBQU1KOztBQUhBO0VBQ0kseUJBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQU9KOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FBUUo7O0FBTkE7RUFDSSx5QkFBQTtBQVNKOztBQVBBO0VBQ0kseUJBQUE7QUFVSjs7QUFSQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVdKIiwiZmlsZSI6Im5lYy1heXUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAzNSU7XHJcbn1cclxuLmF6dWxpdG97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkNTQ3O1xyXG59XHJcbi5zZXAxe1xyXG4gICAgcGFkZGluZzogMC4zdnc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5MCU7XHJcbn1cclxuLnNlcHtcclxuICAgIHBhZGRpbmc6IDIuNXZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTAlO1xyXG59XHJcbi5kaXYze1xyXG4gICAgaGVpZ2h0OjEwcHg7XHJcbn1cclxuLmNlbGVzdGl0b3tcclxuICAgIGJhY2tncm91bmQ6ICM5YWMxZDk7XHJcbiAgICBcclxufVxyXG4uYm9keWNvbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTI4NDA7XHJcbn1cclxuLnBvcnF1ZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDI3JTtcclxufVxyXG4ucG9ycXVlMXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDEyJTtcclxufVxyXG4uZm9vdGNvbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMEU5RkM7XHJcbn1cclxuLmVtYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMEU5RkM7XHJcbn1cclxuLnJlY3RhbmdlNXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIGhlaWdodDogNzFweDtcclxuICAgIGxlZnQ6IDlweDtcclxuICAgIHRvcDogMTkzcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 1085:
/*!************************************************************!*\
  !*** ./src/app/pages/nec-ayu/nec-ayu.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <div class=\"sep1\">\r\n    <ion-toolbar color=\" azulito\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title ><p style=\"position: relative;left: -1%;font-size: 110%;color: #2D4596;\">Registrapp</p><p><img src=\"assets/aaa1.jpg\" alt=\"Logo\" style=\"width:15%; position: absolute; top: 5%; right: 5%;\"></p></ion-title>\r\n    </ion-toolbar>\r\n  </div>\r\n  <div class=\"sep1\">\r\n  <ion-toolbar color=\" azulito\" style=\"width: 100%;height: 45px;left: 0px;top: 0px;padding-top: 0;\">\r\n    <ion-card-subtitle ><p style=\"text-align: center; top: -4px;\" ><a href=\"https://www.duoc.cl/\"><img src=\"assets/pngegg.png\" alt=\"DUOCUC\" style=\"width: 60%; height: 60%; padding-top: -10%;\" class=\"ion-image1\" ></a></p></ion-card-subtitle>\r\n  </ion-toolbar>\r\n  </div>\r\n  <div class=\"sep1\">\r\n  <ion-toolbar style=\"width: 100%;\r\n  height: 34px;\r\n  left: 0px;\r\n  top: 0px;\r\n  padding-top: 0;\" color=\" celestito\">\r\n    <ion-card-subtitle style=\" top: -4px; padding-top: 0px;\"><p style=\"text-align: start; color: black;\">¿Necesitas Ayuda?</p></ion-card-subtitle>\r\n  </ion-toolbar>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-toolbar style=\"width: 100%; height: 97.6%; padding-top: 5vw;\" color=\" bodycol\">\r\n    <!-- Aqui va el material de la pagina -->\r\n      \r\n    <div class=\"sep\">\r\n      <ion-button routerLink=\"/err\" color=\"light\" expand=\"block\" fill=\"full\" detail=true shape=\"round\">\r\n        Se me olvido la contraseña\r\n      </ion-button>\r\n    </div>\r\n    <div class=\"sep\">\r\n      <ion-button routerLink=\"/err\" color=\"light\" expand=\"block\" fill=\"full\" detail=true shape=\"round\">\r\n        Mi usuario es incorrecto\r\n      </ion-button>\r\n    </div>\r\n    <div class=\"sep\">\r\n      <ion-button routerLink=\"/err\" color=\"light\" expand=\"block\" fill=\"full\" detail=true shape=\"round\">\r\n        Mi correo es incorrecto\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n  <ion-toolbar style=\"width: 100%; height: 10px;\" color=\" celestito\">\r\n  </ion-toolbar>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_nec-ayu_nec-ayu_module_ts.js.map