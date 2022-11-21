"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_alumno_alumno_module_ts"],{

/***/ 3787:
/*!*******************************************************!*\
  !*** ./src/app/pages/alumno/alumno-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlumnoPageRoutingModule": () => (/* binding */ AlumnoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _alumno_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alumno.page */ 1149);




const routes = [
    {
        path: '',
        component: _alumno_page__WEBPACK_IMPORTED_MODULE_0__.AlumnoPage
    }
];
let AlumnoPageRoutingModule = class AlumnoPageRoutingModule {
};
AlumnoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlumnoPageRoutingModule);



/***/ }),

/***/ 4177:
/*!***********************************************!*\
  !*** ./src/app/pages/alumno/alumno.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlumnoPageModule": () => (/* binding */ AlumnoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _alumno_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alumno-routing.module */ 3787);
/* harmony import */ var _alumno_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alumno.page */ 1149);







let AlumnoPageModule = class AlumnoPageModule {
};
AlumnoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _alumno_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlumnoPageRoutingModule
        ],
        declarations: [_alumno_page__WEBPACK_IMPORTED_MODULE_1__.AlumnoPage]
    })
], AlumnoPageModule);



/***/ }),

/***/ 1149:
/*!*********************************************!*\
  !*** ./src/app/pages/alumno/alumno.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlumnoPage": () => (/* binding */ AlumnoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _alumno_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alumno.page.html?ngResource */ 4161);
/* harmony import */ var _alumno_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alumno.page.scss?ngResource */ 9433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let AlumnoPage = class AlumnoPage {
    constructor(menuController, navController) {
        this.menuController = menuController;
        this.navController = navController;
    }
    ngOnInit() {
        if (localStorage.getItem('sesnop')) {
            localStorage.removeItem('sesnop');
            localStorage.setItem('ingresaalu', 'true');
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
        }
    }
    mostrarMenu() {
    }
    mostrarMenuA() {
        this.menuController.open('second');
        this.menuController.enable(false, 'first');
        this.menuController.enable(true, 'second');
    }
};
AlumnoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
AlumnoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-alumno',
        template: _alumno_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_alumno_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AlumnoPage);



/***/ }),

/***/ 9433:
/*!**********************************************************!*\
  !*** ./src/app/pages/alumno/alumno.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  background-color: #f7d547;\n}\n\nion-content {\n  background-color: #012840;\n}\n\n.center {\n  margin-left: 45px;\n  padding-top: 11%;\n  padding-left: 16%;\n  padding-bottom: 0vw;\n  width: 40%;\n  height: 16%;\n}\n\n.left {\n  width: 9%;\n  position: absolute;\n  top: 1px;\n  right: 3px;\n}\n\n.titulo {\n  margin-top: -10px;\n  margin-right: 25px;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-content {\n  --ion-background-color:#012840;\n}\n\nion-title {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: black;\n}\n\n.imagenes {\n  display: flex;\n}\n\n.imagenes img:first-child {\n  margin-right: 10px;\n}\n\n.texto {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-card {\n  background-color: var(--ion-color-mycolor);\n}\n\nion-icon {\n  color: black;\n}\n\n.ttexto {\n  text-align: center;\n  color: white;\n  font-size: 20px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-footer {\n  background-color: var(--ion-color-mycolor);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsdW1uby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFEQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBSUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzSEFBQTtBQUdKOztBQURBO0VBRUksOEJBQUE7QUFHSjs7QUFEQTtFQUNJLHNIQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUZBO0VBQ0ksYUFBQTtBQUtKOztBQUZFO0VBQ0Usa0JBQUE7QUFLSjs7QUFIRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzSEFBQTtBQU1KOztBQUhBO0VBQ0ksMENBQUE7QUFNSjs7QUFKQTtFQUNJLFlBQUE7QUFPSjs7QUFMQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzSEFBQTtBQVFKOztBQUxBO0VBQ0ksMENBQUE7QUFRSiIsImZpbGUiOiJhbHVtbm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDU0Nztcbn1cbmlvbi1jb250ZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTI4NDA7XG59XG4uY2VudGVyIHtcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcbiAgICBwYWRkaW5nLXRvcDogMTElO1xuICAgIHBhZGRpbmctbGVmdDogMTYlO1xuICAgIHBhZGRpbmctYm90dG9tOiAwdnc7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDE2JTtcbiAgfVxuLmxlZnR7XG4gICAgd2lkdGg6IDklO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFweDtcbiAgICByaWdodDogM3B4O1xufVxuXG5cbi50aXR1bG97XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuaW9uLWNvbnRlbnR7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMwMTI4NDA7XG59XG5pb24tdGl0bGV7XG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4uaW1hZ2VuZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5pbWFnZW5lcyBpbWc6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAudGV4dG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgfVxuXG5pb24tY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXljb2xvcik7XG59XG5pb24taWNvbntcbiAgICBjb2xvcjogYmxhY2s7XG59XG4udHRleHRve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG5cbn1cbmlvbi1mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15Y29sb3IpO1xufVxuIl19 */";

/***/ }),

/***/ 4161:
/*!**********************************************************!*\
  !*** ./src/app/pages/alumno/alumno.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<!--Este es el inicio del docente, en caso de que lo veas-->\n\n<ion-header>\n  <ion-toolbar color=\"mycolor\">\n     <ion-buttons slot=\"start\">\n       <ion-button (click)=\"mostrarMenuA()\">\n         <ion-icon class=\"menu\" slot=\"start\" name=\"menu-outline\"></ion-icon>\n        </ion-button>\n     </ion-buttons>\n\n\n\n    <ion-title class=\"titulo\">RegistrAPP</ion-title>\n    <div class=\"imagenDuoc\">\n      <img class=\"center\" src=\"/assets/Duoc.png\">\n    </div>\n    <div class=\"imagenes\">\n      <img class=\"left\" src=\"/assets/ScanMe.jpeg\"> \n    </div>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p class=\"ttexto\">¿Como funciona RegistrApp?</p>\n  <p class=\"texto\">Pues RegistrApp Tiene un menú \n    hamburgesa en la esquina izquierda\n    de esta pagina, este menú contiene \n    distintas paginas que nos ayuda a \n    cumplir con el funcionamiento de esta\n    APK, tales como Mis Clases, Escanear Codigo QR y Cerrar Sesión</p>\n\n    <p class=\"ttexto\">¿Que puedo hacer para Registrar asistencia?</p>\n    <p class=\"texto\">Pues para registrar la asistencia en nuestro sistema debes seguir la linea verde para encontrar el menú de Registrar Asistencia...\n      Lorem ipsum dolor sit amet consectetur adipiscing, elit aptent curabitur eleifend.</p>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_alumno_alumno_module_ts.js.map