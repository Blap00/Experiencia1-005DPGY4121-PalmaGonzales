"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reg-asistencia_reg-asistencia_module_ts"],{

/***/ 9461:
/*!***********************************************************************!*\
  !*** ./src/app/pages/reg-asistencia/reg-asistencia-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegAsistenciaPageRoutingModule": () => (/* binding */ RegAsistenciaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _reg_asistencia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reg-asistencia.page */ 945);




const routes = [
    {
        path: '',
        component: _reg_asistencia_page__WEBPACK_IMPORTED_MODULE_0__.RegAsistenciaPage
    }
];
let RegAsistenciaPageRoutingModule = class RegAsistenciaPageRoutingModule {
};
RegAsistenciaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegAsistenciaPageRoutingModule);



/***/ }),

/***/ 1304:
/*!***************************************************************!*\
  !*** ./src/app/pages/reg-asistencia/reg-asistencia.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegAsistenciaPageModule": () => (/* binding */ RegAsistenciaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _reg_asistencia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reg-asistencia-routing.module */ 9461);
/* harmony import */ var _reg_asistencia_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reg-asistencia.page */ 945);







let RegAsistenciaPageModule = class RegAsistenciaPageModule {
};
RegAsistenciaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reg_asistencia_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegAsistenciaPageRoutingModule
        ],
        declarations: [_reg_asistencia_page__WEBPACK_IMPORTED_MODULE_1__.RegAsistenciaPage]
    })
], RegAsistenciaPageModule);



/***/ }),

/***/ 945:
/*!*************************************************************!*\
  !*** ./src/app/pages/reg-asistencia/reg-asistencia.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegAsistenciaPage": () => (/* binding */ RegAsistenciaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reg_asistencia_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reg-asistencia.page.html?ngResource */ 5244);
/* harmony import */ var _reg_asistencia_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reg-asistencia.page.scss?ngResource */ 307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let RegAsistenciaPage = class RegAsistenciaPage {
    constructor(menuController, navController) {
        this.menuController = menuController;
        this.navController = navController;
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
RegAsistenciaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
RegAsistenciaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-reg-asistencia',
        template: _reg_asistencia_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reg_asistencia_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegAsistenciaPage);



/***/ }),

/***/ 307:
/*!**************************************************************************!*\
  !*** ./src/app/pages/reg-asistencia/reg-asistencia.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  background-color: #f7d547;\n}\n\nion-content {\n  background-color: var(--ion-color-mycolor-shade);\n}\n\n.center {\n  margin-left: 45px;\n  padding-top: 11%;\n  padding-left: 16%;\n  padding-bottom: 0vw;\n  width: 40%;\n  height: 16%;\n}\n\n.left {\n  width: 9%;\n  position: absolute;\n  top: 1px;\n  right: 3px;\n}\n\n.titulo {\n  margin-top: -10px;\n  margin-right: 25px;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-content {\n  --ion-background-color:#012840;\n}\n\nion-title {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: black;\n}\n\n.imagenes {\n  display: flex;\n}\n\n.imagenes img:first-child {\n  margin-right: 10px;\n}\n\n.texto {\n  text-align: center;\n  color: black;\n  font-size: 15px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.ttexto {\n  text-align: center;\n  color: black;\n  font-size: 20px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.celda {\n  color: black;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.columnaD {\n  float: right;\n}\n\n.tabla {\n  width: 100%;\n  color: black;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 11px;\n}\n\n@media screen and (max-width: 600px) {\n  table tr:nth-child(odd) td {\n    background-color: #51768c;\n  }\n  table tr:nth-child(even) td {\n    background-color: #91c1d9;\n  }\n  table, td {\n    width: 100%;\n    border: 1px solid black;\n  }\n  thead {\n    display: none;\n  }\n  tr:nth-of-type(2n) {\n    background-color: inherit;\n  }\n  tr td:first-child {\n    font-weight: bold;\n    font-size: 1.3em;\n  }\n  tbody td {\n    display: block;\n    text-align: center;\n  }\n  td {\n    text-align: center;\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZy1hc2lzdGVuY2lhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnREFBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFJSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNIQUFBO0FBR0o7O0FBREE7RUFFSSw4QkFBQTtBQUdKOztBQURBO0VBQ0ksc0hBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0FBS0o7O0FBRkU7RUFDRSxrQkFBQTtBQUtKOztBQUhFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNIQUFBO0FBTUo7O0FBSkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0hBQUE7QUFPSjs7QUFKQTtFQUNJLFlBQUE7RUFDQSxzSEFBQTtBQU9KOztBQUxBO0VBQ0ksWUFBQTtBQVFKOztBQU5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzSEFBQTtFQUNBLGVBQUE7QUFTSjs7QUFOQTtFQUNJO0lBQ0kseUJBQUE7RUFTTjtFQVBFO0lBQ0kseUJBQUE7RUFTTjtFQVBFO0lBQ0ksV0FBQTtJQUNBLHVCQUFBO0VBU047RUFQRTtJQUNJLGFBQUE7RUFTTjtFQVBFO0lBQ0kseUJBQUE7RUFTTjtFQVBFO0lBQ0ksaUJBQUE7SUFDQSxnQkFBQTtFQVNOO0VBUEU7SUFDSSxjQUFBO0lBQ0Esa0JBQUE7RUFTTjtFQU5FO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VBUU47QUFDRiIsImZpbGUiOiJyZWctYXNpc3RlbmNpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkNTQ3O1xufVxuaW9uLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15Y29sb3Itc2hhZGUpO1xufVxuLmNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgcGFkZGluZy10b3A6IDExJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHZ3O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiAxNiU7XG4gIH1cbi5sZWZ0e1xuICAgIHdpZHRoOiA5JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxcHg7XG4gICAgcmlnaHQ6IDNweDtcbn1cblxuXG4udGl0dWxve1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cbmlvbi1jb250ZW50e1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMDEyODQwO1xufVxuaW9uLXRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLmltYWdlbmVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICAuaW1hZ2VuZXMgaW1nOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLnRleHRve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLnR0ZXh0b3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuXG59XG4uY2VsZGF7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG4uY29sdW1uYUR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLnRhYmxhe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgdGFibGUgdHI6bnRoLWNoaWxkKG9kZCkgdGR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTc2OGMgO1xuICAgIH1cbiAgICB0YWJsZSB0cjpudGgtY2hpbGQoZXZlbikgdGR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MWMxZDkgO1xuICAgIH1cbiAgICB0YWJsZSx0ZCB7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cbiAgICB0aGVhZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIHRyOm50aC1vZi10eXBlKDJuKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICAgIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgZm9udC1zaXplOjEuM2VtO1xuICAgIH1cbiAgICB0Ym9keSB0ZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBcbiAgICB9XG4gICAgdGR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 5244:
/*!**************************************************************************!*\
  !*** ./src/app/pages/reg-asistencia/reg-asistencia.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"mycolor\">\n     <ion-buttons slot=\"start\">\n       <ion-button (click)=\"mostrarMenu()\">\n         <ion-icon slot=\"start\" name=\"menu-outline\"></ion-icon>\n        </ion-button>\n     </ion-buttons>\n\n\n\n    <ion-title class=\"titulo\">RegistrAPP</ion-title>\n    <div class=\"imagenes\">\n      <img class=\"center\" src=\"/assets/Duoc.png\">\n      <img class=\"left\" src=\"/assets/ScanMe.jpeg\">\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<div class=\"tabla\">\n  <table>\n    <tr>\n    <td col>Estudiantes:</td>\n    <td col>Presente </td>\n    <td col>Ausente </td>\n    <td col>Justificacion </td>\n  </tr>\n  <tr>\n    <td>Estudiante 1</td>\n    <td>P</td>\n    <td></td>\n    <td></td>\n  </tr>\n\n  <tr>\n    <td>//nom.est.bbdd</td>\n    <td>BBDD</td>\n    <td>BBDD</td>\n    <td>BBDD</td>\n  </tr>\n  <!-- <tr>\n    <td>Estudiante 3</td>\n    <td></td>\n    <td>A</td>\n    <td></td>\n  </tr>\n  <tr>\n    <td>Estudiante 4</td>\n    <td>P</td>\n    <td></td>\n    <td></td>\n  </tr>\n  <tr>\n    <td>Estudiante 5</td>\n    <td></td>\n    <td>A</td>\n    <td></td>\n  </tr>\n  <tr>\n    <td>Estudiante 6</td>\n    <td>P</td>\n    <td></td>\n    <td></td>\n  </tr>\n  <tr>\n    <td>Estudiante 7</td>\n    <td>P</td>\n    <td></td>\n    <td></td>\n  </tr>\n  <tr>\n    <td>Estudiante 8</td>\n    <td></td>\n    <td>A</td>\n    <td></td>\n  </tr>\n  <tr>\n    <td>Estudiante 9</td>\n    <td>P</td>\n    <td></td>\n    <td></td>\n  </tr>\n  <tr>\n    <td>Estudiante 10</td>\n    <td>P</td>\n    <td></td>\n    <td></td>\n  </tr>\n  <tr>\n    <td>Estudiante 11</td>\n    <td>P</td>\n    <td></td>\n    <td></td>\n  </tr>\n  <tr>\n    <td>Estudiante 12</td>\n    <td>P</td>\n    <td></td>\n    <td></td>\n  </tr>\n  <tr>\n    <td>Estudiante 13</td>\n    <td>P</td>\n    <td></td>\n    <td></td>\n  </tr>\n  <tr>\n    <td>Estudiante 14</td>\n    <td>P</td>\n    <td></td>\n    <td></td>\n  </tr>\n  <tr>\n    <td>Estudiante 15</td>\n    <td>P</td>\n    <td></td>\n    <td></td>\n  </tr>\n  <tr>\n    <td>Estudiante 16</td>\n    <td>P</td>\n    <td></td>\n    <td></td>\n  </tr>\n -->\n  </table>\n</div>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reg-asistencia_reg-asistencia_module_ts.js.map