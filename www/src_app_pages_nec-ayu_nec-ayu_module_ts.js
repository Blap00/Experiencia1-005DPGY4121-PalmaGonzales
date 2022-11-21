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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nec_ayu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nec-ayu.page.html?ngResource */ 1085);
/* harmony import */ var _nec_ayu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nec-ayu.page.scss?ngResource */ 4258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let NecAyuPage = class NecAyuPage {
    constructor(navController) {
        this.navController = navController;
    }
    ngOnInit() {
        if (localStorage.getItem('sesnop')) {
            localStorage.setItem('sesnop', 'true');
            localStorage.removeItem('ingresaalu');
            localStorage.removeItem('ingresapro');
        }
        else if (localStorage.getItem('ingresapro')) {
            localStorage.removeItem('sesnop');
            localStorage.removeItem('ingresaalu');
            localStorage.setItem('ingresapro', 'true');
            this.navController.navigateRoot(['/inicio-inicio']);
        }
        else {
            localStorage.removeItem('sesnop');
            localStorage.removeItem('ingresapro');
            localStorage.setItem('ingresaalu', 'true');
            this.navController.navigateRoot(['/alumno']);
        }
    }
};
NecAyuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
NecAyuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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

module.exports = "img {\n  max-width: 35%;\n}\n\n.azulito {\n  background-color: #f7d547;\n}\n\n.sep1 {\n  padding: 0.3vw;\n  border-radius: 90%;\n}\n\n.sep {\n  padding: 2.5vw;\n  border-radius: 90%;\n}\n\n.div3 {\n  height: 10px;\n}\n\n.celestito {\n  background: #9ac1d9;\n}\n\n.bodycol {\n  background-color: #012840;\n}\n\n.porque {\n  position: relative;\n  left: 27%;\n}\n\n.porque1 {\n  position: relative;\n  left: 12%;\n}\n\n.footcol {\n  background-color: #B0E9FC;\n}\n\n.ema {\n  background-color: #B0E9FC;\n}\n\n.rectange5 {\n  position: absolute;\n  width: 340px;\n  height: 71px;\n  left: 9px;\n  top: 193px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5lYy1heXUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0FBS0o7O0FBSEE7RUFDSSxtQkFBQTtBQU1KOztBQUhBO0VBQ0kseUJBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQU9KOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FBUUo7O0FBTkE7RUFDSSx5QkFBQTtBQVNKOztBQVBBO0VBQ0kseUJBQUE7QUFVSjs7QUFSQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVdKIiwiZmlsZSI6Im5lYy1heXUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICAgIG1heC13aWR0aDogMzUlO1xufVxuLmF6dWxpdG97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDU0Nztcbn1cbi5zZXAxe1xuICAgIHBhZGRpbmc6IDAuM3Z3O1xuICAgIGJvcmRlci1yYWRpdXM6IDkwJTtcbn1cbi5zZXB7XG4gICAgcGFkZGluZzogMi41dnc7XG4gICAgYm9yZGVyLXJhZGl1czogOTAlO1xufVxuLmRpdjN7XG4gICAgaGVpZ2h0OjEwcHg7XG59XG4uY2VsZXN0aXRve1xuICAgIGJhY2tncm91bmQ6ICM5YWMxZDk7XG4gICAgXG59XG4uYm9keWNvbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyODQwO1xufVxuLnBvcnF1ZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMjclO1xufVxuLnBvcnF1ZTF7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDEyJTtcbn1cbi5mb290Y29se1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMEU5RkM7XG59XG4uZW1he1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMEU5RkM7XG59XG4ucmVjdGFuZ2U1e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzQwcHg7XG4gICAgaGVpZ2h0OiA3MXB4O1xuICAgIGxlZnQ6IDlweDtcbiAgICB0b3A6IDE5M3B4O1xufSJdfQ== */";

/***/ }),

/***/ 1085:
/*!************************************************************!*\
  !*** ./src/app/pages/nec-ayu/nec-ayu.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <div class=\"sep1\">\n    <ion-toolbar color=\" azulito\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title ><p style=\"position: relative;left: -1%;font-size: 110%;color: #2D4596;\">Registrapp</p><p><img src=\"assets/ScanMe.jpeg\" alt=\"Logo\" style=\"width:9%; position: absolute; top: 5%; right: 5%;\"></p></ion-title>\n    </ion-toolbar>\n  </div>\n  <div class=\"sep1\">\n  <ion-toolbar color=\" azulito\" style=\"width: 100%;height: 45px;left: 0px;top: 0px;padding-top: 0;\">\n    <ion-card-subtitle ><p style=\"text-align: center; top: -4px;\" ><a href=\"https://www.duoc.cl/\"><img src=\"assets/pngegg.png\" alt=\"DUOCUC\" style=\"width: 60%; height: 60%; padding-top: -10%;\" class=\"ion-image1\" ></a></p></ion-card-subtitle>\n  </ion-toolbar>\n  </div>\n  <div class=\"sep1\">\n  <ion-toolbar style=\"width: 100%;\n  height: 34px;\n  left: 0px;\n  top: 0px;\n  padding-top: 0;\" color=\" celestito\">\n    <ion-card-subtitle style=\" top: -4px; padding-top: 0px;\"><p style=\"text-align: start; color: black;\">¿Necesitas Ayuda?</p></ion-card-subtitle>\n  </ion-toolbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <ion-toolbar style=\"width: 100%; height: 97.6%; padding-top: 5vw;\" color=\" bodycol\">\n    <!-- Aqui va el material de la pagina -->\n      \n    <div class=\"sep\">\n      <ion-button routerLink=\"/err\" color=\"light\" expand=\"block\" fill=\"full\" detail=true shape=\"round\">\n        Se me olvido la contraseña\n      </ion-button>\n    </div>\n    <div class=\"sep\">\n      <ion-button routerLink=\"/err\" color=\"light\" expand=\"block\" fill=\"full\" detail=true shape=\"round\">\n        Mi usuario es incorrecto\n      </ion-button>\n    </div>\n    <div class=\"sep\">\n      <ion-button routerLink=\"/err\" color=\"light\" expand=\"block\" fill=\"full\" detail=true shape=\"round\">\n        Mi correo es incorrecto\n      </ion-button>\n    </div>\n  </ion-toolbar>\n  <ion-toolbar style=\"width: 100%; height: 10px;\" color=\" celestito\">\n  </ion-toolbar>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_nec-ayu_nec-ayu_module_ts.js.map