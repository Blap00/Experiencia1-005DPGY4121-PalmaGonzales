"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_inicio-inicio_inicio-inicio_module_ts"],{

/***/ 9815:
/*!*********************************************************************!*\
  !*** ./src/app/pages/inicio-inicio/inicio-inicio-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioInicioPageRoutingModule": () => (/* binding */ InicioInicioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _inicio_inicio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-inicio.page */ 6881);




const routes = [
    {
        path: '',
        component: _inicio_inicio_page__WEBPACK_IMPORTED_MODULE_0__.InicioInicioPage
    }
];
let InicioInicioPageRoutingModule = class InicioInicioPageRoutingModule {
};
InicioInicioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioInicioPageRoutingModule);



/***/ }),

/***/ 9390:
/*!*************************************************************!*\
  !*** ./src/app/pages/inicio-inicio/inicio-inicio.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioInicioPageModule": () => (/* binding */ InicioInicioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _inicio_inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-inicio-routing.module */ 9815);
/* harmony import */ var _inicio_inicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio-inicio.page */ 6881);







let InicioInicioPageModule = class InicioInicioPageModule {
};
InicioInicioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inicio_inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioInicioPageRoutingModule
        ],
        declarations: [_inicio_inicio_page__WEBPACK_IMPORTED_MODULE_1__.InicioInicioPage]
    })
], InicioInicioPageModule);



/***/ }),

/***/ 6881:
/*!***********************************************************!*\
  !*** ./src/app/pages/inicio-inicio/inicio-inicio.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioInicioPage": () => (/* binding */ InicioInicioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _inicio_inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-inicio.page.html?ngResource */ 1569);
/* harmony import */ var _inicio_inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio-inicio.page.scss?ngResource */ 1641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let InicioInicioPage = class InicioInicioPage {
    constructor(menuController, navController) {
        this.menuController = menuController;
        this.navController = navController;
        this.usuarios = [];
    }
    ngOnInit() {
        if (localStorage.getItem('sesnop')) {
            localStorage.setItem('ingresapro', 'true');
            localStorage.removeItem('sesnop');
            localStorage.removeItem('ingresaalu');
        }
        else if (localStorage.getItem('ingresaalu')) {
            localStorage.removeItem('sesnop');
            this.navController.navigateRoot(['/alumno']);
        }
        else {
            localStorage.removeItem('sesnop');
            localStorage.removeItem('ingresaalu');
            localStorage.setItem('ingresapro', 'true');
        }
    }
    mostrarMenu() {
        this.menuController.open('first');
        this.menuController.enable(true, 'first');
        this.menuController.enable(false, 'second');
    }
};
InicioInicioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
InicioInicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-inicio-inicio',
        template: _inicio_inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_inicio_inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InicioInicioPage);



/***/ }),

/***/ 1641:
/*!************************************************************************!*\
  !*** ./src/app/pages/inicio-inicio/inicio-inicio.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  background-color: #f7d547;\n}\n\nion-content {\n  background-color: #012840;\n}\n\n.center {\n  margin-left: 45px;\n  padding-top: 11%;\n  padding-left: 16%;\n  padding-bottom: 0vw;\n  width: 40%;\n  height: 16%;\n}\n\n.left {\n  width: 9%;\n  position: absolute;\n  top: 1px;\n  right: 3px;\n}\n\n.titulo {\n  margin-top: -10px;\n  margin-right: 25px;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-content {\n  --ion-background-color:#012840;\n}\n\nion-title {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: black;\n}\n\n.imagenes {\n  display: flex;\n}\n\n.imagenes img:first-child {\n  margin-right: 10px;\n}\n\n.texto {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-card {\n  background-color: var(--ion-color-mycolor);\n}\n\nion-icon {\n  color: black;\n}\n\n.ttexto {\n  text-align: center;\n  color: white;\n  font-size: 20px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-footer {\n  background-color: var(--ion-color-mycolor);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby1pbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBR0o7O0FBREE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0hBQUE7QUFHSjs7QUFEQTtFQUVJLDhCQUFBO0FBR0o7O0FBREE7RUFDSSxzSEFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7QUFLSjs7QUFGRTtFQUNFLGtCQUFBO0FBS0o7O0FBSEU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0hBQUE7QUFNSjs7QUFIQTtFQUNJLDBDQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0hBQUE7QUFRSjs7QUFMQTtFQUNJLDBDQUFBO0FBUUoiLCJmaWxlIjoiaW5pY2lvLWluaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkNTQ3O1xufVxuaW9uLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMjg0MDtcbn1cbi5jZW50ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMSU7XG4gICAgcGFkZGluZy1sZWZ0OiAxNiU7XG4gICAgcGFkZGluZy1ib3R0b206IDB2dztcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogMTYlO1xuICB9XG4ubGVmdHtcbiAgICB3aWR0aDogOSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMXB4O1xuICAgIHJpZ2h0OiAzcHg7XG59XG5cblxuLnRpdHVsb3tcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5pb24tY29udGVudHtcblxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzAxMjg0MDtcbn1cbmlvbi10aXRsZXtcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5pbWFnZW5lcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLmltYWdlbmVzIGltZzpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC50ZXh0b3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICB9XG5cbmlvbi1jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1teWNvbG9yKTtcbn1cbmlvbi1pY29ue1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi50dGV4dG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcblxufVxuaW9uLWZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXljb2xvcik7XG59XG4iXX0= */";

/***/ }),

/***/ 1569:
/*!************************************************************************!*\
  !*** ./src/app/pages/inicio-inicio/inicio-inicio.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<!--Este es el inicio del docente, en caso de que lo veas-->\n\n<ion-header>\n  <ion-toolbar color=\"mycolor\">\n     <ion-buttons slot=\"start\">\n       <ion-button (click)=\"mostrarMenu()\">\n         <ion-icon class=\"menu\" slot=\"start\" name=\"menu-outline\"></ion-icon>\n        </ion-button>\n     </ion-buttons>\n\n\n\n    <ion-title class=\"titulo\">RegistrAPP</ion-title>\n    <div class=\"imagenes\">\n      <img class=\"center\" src=\"/assets/Duoc.png\">\n      <img class=\"left\" src=\"/assets/ScanMe.jpeg\">\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    \n\n  <p class=\"ttexto\">¿Como funciona RegistrApp?</p>\n  <p class=\"texto\">Pues RegistrApp Tiene un menú \n    hamburgesa en la esquina izquierda\n    de esta pagina, este menú contiene \n    distintas paginas que nos ayuda a \n    cumplir con el funcionamiento de esta\n    APK, tales como Registrar Asistencia,\n    crear Codigo QR y volver al menú \n    principal (este).</p>\n\n    <p class=\"ttexto\">¿Que puedo hacer para Registrar asistencia?</p>\n    <p class=\"texto\">Pues para registrar la asistencia en nuestro sistema debes seguir la linea verde para encontrar el menú de Registrar Asistencia...\n      Lorem ipsum dolor sit amet consectetur adipiscing, elit aptent curabitur eleifend.</p>\n\n\n  <!--\n  <ion-button routerLink=\"/alert\">\n    Alert\n  </ion-button> \n  <ion-button routerLink=\"/action-sheet\">\n    Action Sheet\n  </ion-button>-->\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inicio-inicio_inicio-inicio_module_ts.js.map