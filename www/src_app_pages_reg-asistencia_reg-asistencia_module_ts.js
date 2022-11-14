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
    constructor(menuController) {
        this.menuController = menuController;
    }
    ngOnInit() {
    }
    mostrarMenu() {
        this.menuController.open('first');
        this.menuController.enable(true, 'first');
        this.menuController.enable(false, 'second');
    }
};
RegAsistenciaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
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

module.exports = "ion-toolbar {\n  background-color: #f7d547;\n}\n\nion-content {\n  background-color: var(--ion-color-mycolor-shade);\n}\n\n.center {\n  display: block;\n  margin-left: 45px;\n  width: 50%;\n  height: 37px;\n}\n\n.left {\n  width: 35px;\n  margin-bottom: 10px;\n}\n\n.titulo {\n  margin-right: 25px;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-content {\n  --ion-background-color:#012840;\n}\n\nion-title {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: black;\n}\n\n.imagenes {\n  display: flex;\n}\n\n.imagenes img:first-child {\n  margin-right: 10px;\n}\n\n.texto {\n  text-align: center;\n  color: black;\n  font-size: 15px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.ttexto {\n  text-align: center;\n  color: black;\n  font-size: 20px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.celda {\n  color: black;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.columnaD {\n  float: right;\n}\n\n.tabla {\n  width: 100%;\n  color: black;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 11px;\n}\n\n@media screen and (max-width: 600px) {\n  table tr:nth-child(odd) td {\n    background-color: #51768c;\n  }\n  table tr:nth-child(even) td {\n    background-color: #91c1d9;\n  }\n  table, td {\n    width: 100%;\n    border: 1px solid black;\n  }\n  thead {\n    display: none;\n  }\n  tr:nth-of-type(2n) {\n    background-color: inherit;\n  }\n  tr td:first-child {\n    font-weight: bold;\n    font-size: 1.3em;\n  }\n  tbody td {\n    display: block;\n    text-align: center;\n  }\n  td {\n    text-align: center;\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZy1hc2lzdGVuY2lhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnREFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFHSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNIQUFBO0FBQ0o7O0FBQ0E7RUFFSSw4QkFBQTtBQUNKOztBQUNBO0VBQ0ksc0hBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0FBR0o7O0FBQUU7RUFDRSxrQkFBQTtBQUdKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNIQUFBO0FBSUo7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0hBQUE7QUFLSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxzSEFBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzSEFBQTtFQUNBLGVBQUE7QUFPSjs7QUFKQTtFQUNJO0lBQ0kseUJBQUE7RUFPTjtFQUxFO0lBQ0kseUJBQUE7RUFPTjtFQUxFO0lBQ0ksV0FBQTtJQUNBLHVCQUFBO0VBT047RUFMRTtJQUNJLGFBQUE7RUFPTjtFQUxFO0lBQ0kseUJBQUE7RUFPTjtFQUxFO0lBQ0ksaUJBQUE7SUFDQSxnQkFBQTtFQU9OO0VBTEU7SUFDSSxjQUFBO0lBQ0Esa0JBQUE7RUFPTjtFQUpFO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VBTU47QUFDRiIsImZpbGUiOiJyZWctYXNpc3RlbmNpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Q1NDc7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXljb2xvci1zaGFkZSk7XHJcbn1cclxuLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIFxyXG4gIH1cclxuLmxlZnR7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi50aXR1bG97XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzAxMjg0MDtcclxufVxyXG5pb24tdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5pbWFnZW5lcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2VuZXMgaW1nOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLnRleHRve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLnR0ZXh0b3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcbi5jZWxkYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmNvbHVtbmFEe1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi50YWJsYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIFxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICB0YWJsZSB0cjpudGgtY2hpbGQob2RkKSB0ZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE3NjhjIDtcclxuICAgIH1cclxuICAgIHRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB0ZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTFjMWQ5IDtcclxuICAgIH1cclxuICAgIHRhYmxlLHRkIHtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gICAgdGhlYWQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICB0cjpudGgtb2YtdHlwZSgybikge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgICB0ciB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICBmb250LXNpemU6MS4zZW07XHJcbiAgICB9XHJcbiAgICB0Ym9keSB0ZCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBcclxuICAgIH1cclxuICAgIHRke1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5244:
/*!**************************************************************************!*\
  !*** ./src/app/pages/reg-asistencia/reg-asistencia.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"mycolor\">\r\n     <ion-buttons slot=\"start\">\r\n       <ion-button (click)=\"mostrarMenu()\">\r\n         <ion-icon slot=\"start\" name=\"menu-outline\"></ion-icon>\r\n        </ion-button>\r\n     </ion-buttons>\r\n\r\n\r\n\r\n    <ion-title class=\"titulo\">RegistrAPP</ion-title>\r\n    <div class=\"imagenes\">\r\n      <img class=\"center\" src=\"/assets/Duoc.png\">\r\n      <img class=\"left\" src=\"/assets/ScanMe.jpeg\">\r\n    </div>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n<div class=\"tabla\">\r\n  <table>\r\n    <tr>\r\n    <td col>Estudiantes:</td>\r\n    <td col>Presente </td>\r\n    <td col>Ausente </td>\r\n    <td col>Justificacion </td>\r\n  </tr>\r\n  <tr>\r\n    <td>Estudiante 1</td>\r\n    <td>P</td>\r\n    <td></td>\r\n    <td></td>\r\n  </tr>\r\n\r\n  <tr>\r\n    <td>//nom.est.bbdd</td>\r\n    <td>BBDD</td>\r\n    <td>BBDD</td>\r\n    <td>BBDD</td>\r\n  </tr>\r\n  <!-- <tr>\r\n    <td>Estudiante 3</td>\r\n    <td></td>\r\n    <td>A</td>\r\n    <td></td>\r\n  </tr>\r\n  <tr>\r\n    <td>Estudiante 4</td>\r\n    <td>P</td>\r\n    <td></td>\r\n    <td></td>\r\n  </tr>\r\n  <tr>\r\n    <td>Estudiante 5</td>\r\n    <td></td>\r\n    <td>A</td>\r\n    <td></td>\r\n  </tr>\r\n  <tr>\r\n    <td>Estudiante 6</td>\r\n    <td>P</td>\r\n    <td></td>\r\n    <td></td>\r\n  </tr>\r\n  <tr>\r\n    <td>Estudiante 7</td>\r\n    <td>P</td>\r\n    <td></td>\r\n    <td></td>\r\n  </tr>\r\n  <tr>\r\n    <td>Estudiante 8</td>\r\n    <td></td>\r\n    <td>A</td>\r\n    <td></td>\r\n  </tr>\r\n  <tr>\r\n    <td>Estudiante 9</td>\r\n    <td>P</td>\r\n    <td></td>\r\n    <td></td>\r\n  </tr>\r\n  <tr>\r\n    <td>Estudiante 10</td>\r\n    <td>P</td>\r\n    <td></td>\r\n    <td></td>\r\n  </tr>\r\n  <tr>\r\n    <td>Estudiante 11</td>\r\n    <td>P</td>\r\n    <td></td>\r\n    <td></td>\r\n  </tr>\r\n  <tr>\r\n    <td>Estudiante 12</td>\r\n    <td>P</td>\r\n    <td></td>\r\n    <td></td>\r\n  </tr>\r\n  <tr>\r\n    <td>Estudiante 13</td>\r\n    <td>P</td>\r\n    <td></td>\r\n    <td></td>\r\n  </tr>\r\n  <tr>\r\n    <td>Estudiante 14</td>\r\n    <td>P</td>\r\n    <td></td>\r\n    <td></td>\r\n  </tr>\r\n  <tr>\r\n    <td>Estudiante 15</td>\r\n    <td>P</td>\r\n    <td></td>\r\n    <td></td>\r\n  </tr>\r\n  <tr>\r\n    <td>Estudiante 16</td>\r\n    <td>P</td>\r\n    <td></td>\r\n    <td></td>\r\n  </tr>\r\n -->\r\n  </table>\r\n</div>\r\n\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reg-asistencia_reg-asistencia_module_ts.js.map