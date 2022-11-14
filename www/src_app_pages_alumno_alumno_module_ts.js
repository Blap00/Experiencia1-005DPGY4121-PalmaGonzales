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
    constructor(menuController) {
        this.menuController = menuController;
    }
    ngOnInit() {
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
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

module.exports = "ion-toolbar {\n  background-color: #f7d547;\n}\n\nion-content {\n  background-color: #012840;\n}\n\n.center {\n  display: block;\n  margin-left: 45px;\n  width: 50%;\n  height: 37px;\n}\n\n.left {\n  width: 35px;\n  margin-bottom: 10px;\n}\n\n.titulo {\n  margin-right: 25px;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-content {\n  --ion-background-color:#012840;\n}\n\nion-title {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: black;\n}\n\n.imagenes {\n  display: flex;\n}\n\n.imagenes img:first-child {\n  margin-right: 10px;\n}\n\n.texto {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-card {\n  background-color: var(--ion-color-mycolor);\n}\n\nion-icon {\n  color: black;\n}\n\n.ttexto {\n  text-align: center;\n  color: white;\n  font-size: 20px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-footer {\n  background-color: var(--ion-color-mycolor);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsdW1uby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBR0o7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzSEFBQTtBQUNKOztBQUNBO0VBRUksOEJBQUE7QUFDSjs7QUFDQTtFQUNJLHNIQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQUFFO0VBQ0Usa0JBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzSEFBQTtBQUlKOztBQURBO0VBQ0ksMENBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzSEFBQTtBQU1KOztBQUhBO0VBQ0ksMENBQUE7QUFNSiIsImZpbGUiOiJhbHVtbm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkNTQ3O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMjg0MDtcclxufVxyXG4uY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgXHJcbiAgfVxyXG4ubGVmdHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLnRpdHVsb3tcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMDEyODQwO1xyXG59XHJcbmlvbi10aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmltYWdlbmVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZW5lcyBpbWc6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAudGV4dG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15Y29sb3IpO1xyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi50dGV4dG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15Y29sb3IpO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 4161:
/*!**********************************************************!*\
  !*** ./src/app/pages/alumno/alumno.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<!--Este es el inicio del docente, en caso de que lo veas-->\r\n\r\n<ion-header>\r\n  <ion-toolbar color=\"mycolor\">\r\n     <ion-buttons slot=\"start\">\r\n       <ion-button (click)=\"mostrarMenuA()\">\r\n         <ion-icon class=\"menu\" slot=\"start\" name=\"menu-outline\"></ion-icon>\r\n        </ion-button>\r\n     </ion-buttons>\r\n\r\n\r\n\r\n    <ion-title class=\"titulo\">RegistrAPP</ion-title>\r\n    <div class=\"imagenes\">\r\n      <img class=\"center\" src=\"/assets/Duoc.png\">\r\n      <img class=\"left\" src=\"/assets/ScanMe.jpeg\"> \r\n    </div>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <p class=\"ttexto\">¿Como funciona RegistrApp?</p>\r\n  <p class=\"texto\">Pues RegistrApp Tiene un menú \r\n    hamburgesa en la esquina izquierda\r\n    de esta pagina, este menú contiene \r\n    distintas paginas que nos ayuda a \r\n    cumplir con el funcionamiento de esta\r\n    APK, tales como Mis Clases, Escanear Codigo QR y Cerrar Sesión</p>\r\n\r\n    <p class=\"ttexto\">¿Que puedo hacer para Registrar asistencia?</p>\r\n    <p class=\"texto\">Pues para registrar la asistencia en nuestro sistema debes seguir la linea verde para encontrar el menú de Registrar Asistencia...\r\n      Lorem ipsum dolor sit amet consectetur adipiscing, elit aptent curabitur eleifend.</p>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_alumno_alumno_module_ts.js.map