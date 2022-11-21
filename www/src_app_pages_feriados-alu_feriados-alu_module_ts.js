"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_feriados-alu_feriados-alu_module_ts"],{

/***/ 7346:
/*!*******************************************************************!*\
  !*** ./src/app/pages/feriados-alu/feriados-alu-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeriadosAluPageRoutingModule": () => (/* binding */ FeriadosAluPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _feriados_alu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feriados-alu.page */ 7970);




const routes = [
    {
        path: '',
        component: _feriados_alu_page__WEBPACK_IMPORTED_MODULE_0__.FeriadosAluPage
    }
];
let FeriadosAluPageRoutingModule = class FeriadosAluPageRoutingModule {
};
FeriadosAluPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FeriadosAluPageRoutingModule);



/***/ }),

/***/ 588:
/*!***********************************************************!*\
  !*** ./src/app/pages/feriados-alu/feriados-alu.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeriadosAluPageModule": () => (/* binding */ FeriadosAluPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _feriados_alu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feriados-alu-routing.module */ 7346);
/* harmony import */ var _feriados_alu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feriados-alu.page */ 7970);







let FeriadosAluPageModule = class FeriadosAluPageModule {
};
FeriadosAluPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _feriados_alu_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeriadosAluPageRoutingModule
        ],
        declarations: [_feriados_alu_page__WEBPACK_IMPORTED_MODULE_1__.FeriadosAluPage]
    })
], FeriadosAluPageModule);



/***/ }),

/***/ 7970:
/*!*********************************************************!*\
  !*** ./src/app/pages/feriados-alu/feriados-alu.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeriadosAluPage": () => (/* binding */ FeriadosAluPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _feriados_alu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feriados-alu.page.html?ngResource */ 9133);
/* harmony import */ var _feriados_alu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feriados-alu.page.scss?ngResource */ 508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_feriado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/feriado.service */ 6950);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let FeriadosAluPage = class FeriadosAluPage {
    constructor(feriadosService, menuController, navController) {
        this.feriadosService = feriadosService;
        this.menuController = menuController;
        this.navController = navController;
    }
    ngOnInit() {
        if (localStorage.getItem('sesnop')) {
            localStorage.setItem('sesnop', 'true');
            localStorage.removeItem('ingresaalu');
            localStorage.removeItem('ingresapro');
            this.navController.navigateRoot(['/inicio']);
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
        this.feriadosService.getFeriados().subscribe(resp => {
            this.feriado = resp;
            //this.feriado.push('feriados', resp); //no tira error aqui pero si al compilar
        });
    }
    mostrarMenu() {
        this.menuController.open('second');
        this.menuController.enable(false, 'first');
        this.menuController.enable(true, 'second');
    }
};
FeriadosAluPage.ctorParameters = () => [
    { type: src_app_services_feriado_service__WEBPACK_IMPORTED_MODULE_2__.FeriadoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
FeriadosAluPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-feriados-alu',
        template: _feriados_alu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_feriados_alu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FeriadosAluPage);



/***/ }),

/***/ 508:
/*!**********************************************************************!*\
  !*** ./src/app/pages/feriados-alu/feriados-alu.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-card.cardFeriado {\n  --background: #c7417b;\n  position: relative;\n  isolation: isolate;\n}\n\nion-toolbar {\n  background-color: #f7d547;\n}\n\nion-content {\n  background-color: var(--ion-color-mycolor-shade);\n}\n\n.center {\n  margin-left: 45px;\n  padding-top: 11%;\n  padding-left: 16%;\n  padding-bottom: 0vw;\n  width: 40%;\n  height: 16%;\n}\n\n.left {\n  width: 9%;\n  position: absolute;\n  top: 1px;\n  right: 3px;\n}\n\n.titulo {\n  margin-top: -10px;\n  margin-right: 25px;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-content {\n  --ion-background-color:#012840;\n}\n\nion-title {\n  color: black;\n}\n\n.imagenes {\n  display: flex;\n}\n\n.imagenes img:first-child {\n  margin-right: 10px;\n}\n\nion-item {\n  --color: var(--ion-color-mycolor);\n}\n\n.horarios {\n  --ion-item-background: #9ac1d9;\n}\n\n.ion-text-wrap {\n  color: black;\n}\n\nion-list {\n  border: #CCDADF;\n}\n\nion-icon {\n  color: black;\n}\n\nion-card.cardFeriado {\n  --background: #c7417b;\n  position: relative;\n  isolation: isolate;\n}\n\np,\nion-card-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlcmlhZG9zLWFsdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0FBRUo7O0FBQUE7RUFDSSxnREFBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUZBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFLSjs7QUFEQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNIQUFBO0FBSUo7O0FBRkE7RUFFSSw4QkFBQTtBQUlKOztBQUZBO0VBQ0ksWUFBQTtBQUtKOztBQUhBO0VBQ0ksYUFBQTtBQU1KOztBQUhFO0VBQ0Usa0JBQUE7QUFNSjs7QUFKQTtFQUNJLGlDQUFBO0FBT0o7O0FBTEE7RUFDSSw4QkFBQTtBQVFKOztBQU5BO0VBQ0ksWUFBQTtBQVNKOztBQVBBO0VBQ0ksZUFBQTtBQVVKOztBQVJBO0VBQ0ksWUFBQTtBQVdKOztBQVRBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBWUo7O0FBVEE7O0VBRUksWUFBQTtBQVlKIiwiZmlsZSI6ImZlcmlhZG9zLWFsdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC5jYXJkRmVyaWFkbyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzc0MTdiO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XG59XG5pb24tdG9vbGJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkNTQ3O1xufVxuaW9uLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15Y29sb3Itc2hhZGUpO1xufVxuLmNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgcGFkZGluZy10b3A6IDExJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHZ3O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiAxNiU7XG4gIH1cbi5sZWZ0e1xuICAgIHdpZHRoOiA5JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxcHg7XG4gICAgcmlnaHQ6IDNweDtcbn1cblxuXG4udGl0dWxve1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cbmlvbi1jb250ZW50e1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMDEyODQwO1xufVxuaW9uLXRpdGxle1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5pbWFnZW5lcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLmltYWdlbmVzIGltZzpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5pb24taXRlbXtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXljb2xvcik7XG59XG4uaG9yYXJpb3N7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjOWFjMWQ5O1xufVxuLmlvbi10ZXh0LXdyYXB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuaW9uLWxpc3R7XG4gICAgYm9yZGVyOiAjQ0NEQURGO1xufVxuaW9uLWljb257XG4gICAgY29sb3I6IGJsYWNrO1xufVxuaW9uLWNhcmQuY2FyZEZlcmlhZG8ge1xuICAgIC0tYmFja2dyb3VuZDogI2M3NDE3YjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaXNvbGF0aW9uOiBpc29sYXRlO1xufVxuXG5wLFxuaW9uLWNhcmQtdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcblxufVxuIl19 */";

/***/ }),

/***/ 9133:
/*!**********************************************************************!*\
  !*** ./src/app/pages/feriados-alu/feriados-alu.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"mycolor\">\n     <ion-buttons slot=\"start\">\n       <ion-button (click)=\"mostrarMenu()\">\n         <ion-icon slot=\"start\" name=\"menu-outline\"></ion-icon>\n        </ion-button>\n     </ion-buttons>\n\n\n\n    <ion-title class=\"titulo\">RegistrAPP</ion-title>\n    <div class=\"imagenes\">\n      <img class=\"center\" src=\"/assets/Duoc.png\">\n      <img class=\"left\" src=\"/assets/ScanMe.jpeg\">\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid padding>\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\" *ngFor=\"let holiday of feriado;\">\n        <ion-card class=\"cardFeriado\">\n          <ion-card-header>\n            <ion-card-title>{{holiday.nombre}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p *ngIf=\"holiday.irrenunciable == 0\">Renunciable</p>\n            <p *ngIf=\"holiday.irrenunciable == 1\">Irrenunciable</p>\n            <p>{{holiday.fecha}}</p>\n            <p>{{holiday.tipo}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_feriados-alu_feriados-alu_module_ts.js.map