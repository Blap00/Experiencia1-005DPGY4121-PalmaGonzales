"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_inicio_inicio_module_ts"],{

/***/ 5652:
/*!*******************************************************!*\
  !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageRoutingModule": () => (/* binding */ InicioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page */ 5237);




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_0__.InicioPage
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ 3633:
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageModule": () => (/* binding */ InicioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-routing.module */ 5652);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page */ 5237);







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioPageRoutingModule
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_1__.InicioPage]
    })
], InicioPageModule);



/***/ }),

/***/ 5237:
/*!*********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPage": () => (/* binding */ InicioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page.html?ngResource */ 5211);
/* harmony import */ var _inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page.scss?ngResource */ 2874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let InicioPage = class InicioPage {
    constructor() { }
    ngOnInit() {
        console.log(localStorage.setItem('sesnop', 'true'));
    }
};
InicioPage.ctorParameters = () => [];
InicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-inicio',
        template: _inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InicioPage);



/***/ }),

/***/ 2874:
/*!**********************************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".sep1 {\n  padding: 0.3vw;\n  border-radius: 90%;\n}\n\n.sep2 {\n  padding: 5vw;\n  border-radius: 90%;\n}\n\n.azulito {\n  background-color: #f7d547;\n}\n\n.bodycol {\n  background-color: #012840;\n}\n\n.grupbot {\n  position: sticky;\n}\n\n.titulo {\n  margin-right: 25px;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-title {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNIQUFBO0FBTUo7O0FBSkE7RUFDSSxzSEFBQTtFQUNBLFlBQUE7QUFPSiIsImZpbGUiOiJpbmljaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcDF7XHJcbiAgICBwYWRkaW5nOiAwLjN2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwJTtcclxufVxyXG4uc2VwMntcclxuICAgIHBhZGRpbmc6IDV2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwJTtcclxufVxyXG4uYXp1bGl0b3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Q1NDc7XHJcbn1cclxuLmJvZHljb2x7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyODQwO1xyXG59XHJcbi5ncnVwYm90e1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxufVxyXG4udGl0dWxve1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5pb24tdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59Il19 */";

/***/ }),

/***/ 5211:
/*!**********************************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"azulito\" style=\"height: 100%;\" color=\"azulito\">\r\n    <ion-title class=\"titulo\" style=\"padding-inline: unset;\">RegistrApp</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"sep1\"></div>\r\n  <!-- Body columns -->\r\n  <ion-toolbar style=\"height: 99.6%;\" color=\"bodycol\" class=\"bodycol\">\r\n    <div class=\"grupImg\">\r\n      <img src=\"assets/aaa1.jpg\" alt=\"Logo\" style=\"width: 100%;padding-left: 20%; padding-right: 20%;\">\r\n    </div>\r\n    <div class=\"grupbot\">\r\n      <ion-item class=\"bodycol\" color=\"bodycol\">\r\n        <ion-label >\r\n          <ion-button routerLink=\"/index\" expand=\"block\" fill=\"outline\" size=\"small\" shape=\"round\">\r\n            Registrarme\r\n          </ion-button>  \r\n        </ion-label>\r\n      </ion-item>\r\n      <div class=\"sep2\"></div>\r\n      <ion-item class=\"bodycol\" color=\"bodycol\">\r\n        <ion-label>\r\n          <ion-button routerLink=\"/inisesalu\" expand=\"block\" fill=\"outline\" shape=\"round\">\r\n            Ingresar como alumno\r\n          </ion-button>  \r\n        </ion-label>\r\n      </ion-item>\r\n      <div class=\"sep2\"></div>\r\n      <ion-item class=\"bodycol\" color=\"bodycol\">\r\n        <ion-label>\r\n          <ion-button routerLink=\"/inisespro\"expand=\"block\" fill=\"outline\" shape=\"round\">\r\n            Ingresar como Docente\r\n          </ion-button>  \r\n        </ion-label>\r\n      </ion-item>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inicio_inicio_module_ts.js.map