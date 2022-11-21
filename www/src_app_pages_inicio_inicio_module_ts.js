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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page.html?ngResource */ 5211);
/* harmony import */ var _inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page.scss?ngResource */ 2874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let InicioPage = class InicioPage {
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
InicioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
InicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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

module.exports = ".sep1 {\n  padding: 0.3vw;\n  border-radius: 90%;\n}\n\n.sep2 {\n  padding: 5vw;\n  border-radius: 90%;\n}\n\n.azulito {\n  background-color: #f7d547;\n}\n\n.bodycol {\n  background-color: #012840;\n}\n\n.grupbot {\n  position: sticky;\n}\n\n.titulo {\n  margin-right: 25px;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-title {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNIQUFBO0FBTUo7O0FBSkE7RUFDSSxzSEFBQTtFQUNBLFlBQUE7QUFPSiIsImZpbGUiOiJpbmljaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcDF7XG4gICAgcGFkZGluZzogMC4zdnc7XG4gICAgYm9yZGVyLXJhZGl1czogOTAlO1xufVxuLnNlcDJ7XG4gICAgcGFkZGluZzogNXZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDkwJTtcbn1cbi5henVsaXRve1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Q1NDc7XG59XG4uYm9keWNvbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyODQwO1xufVxuLmdydXBib3R7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbn1cbi50aXR1bG97XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuaW9uLXRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";

/***/ }),

/***/ 5211:
/*!**********************************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"azulito\" style=\"height: 100%;\" color=\"azulito\">\n    <ion-title class=\"titulo\" style=\"padding-inline: unset;\">RegistrApp</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"sep1\"></div>\n  <!-- Body columns -->\n  <ion-toolbar style=\"height: 99.6%;\" color=\"bodycol\" class=\"bodycol\">\n    <div class=\"grupImg\">\n      <img src=\"assets/aaa1.jpg\" alt=\"Logo\" style=\"width: 100%;padding-left: 20%; padding-right: 20%;\">\n    </div>\n    <div class=\"grupbot\">\n      <ion-item class=\"bodycol\" color=\"bodycol\">\n        <ion-label >\n          <ion-button routerLink=\"/index\" expand=\"block\" fill=\"outline\" size=\"small\" shape=\"round\">\n            Registrarme\n          </ion-button>  \n        </ion-label>\n      </ion-item>\n      <div class=\"sep2\"></div>\n      <ion-item class=\"bodycol\" color=\"bodycol\">\n        <ion-label>\n          <ion-button routerLink=\"/inisesalu\" expand=\"block\" fill=\"outline\" shape=\"round\">\n            Ingresar como alumno\n          </ion-button>  \n        </ion-label>\n      </ion-item>\n      <div class=\"sep2\"></div>\n      <ion-item class=\"bodycol\" color=\"bodycol\">\n        <ion-label>\n          <ion-button routerLink=\"/inisespro\"expand=\"block\" fill=\"outline\" shape=\"round\">\n            Ingresar como Docente\n          </ion-button>  \n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-toolbar>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inicio_inicio_module_ts.js.map