"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_codigoqr_codigoqr_module_ts"],{

/***/ 800:
/*!***********************************************************!*\
  !*** ./src/app/pages/codigoqr/codigoqr-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigoqrPageRoutingModule": () => (/* binding */ CodigoqrPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _codigoqr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigoqr.page */ 528);




const routes = [
    {
        path: '',
        component: _codigoqr_page__WEBPACK_IMPORTED_MODULE_0__.CodigoqrPage
    }
];
let CodigoqrPageRoutingModule = class CodigoqrPageRoutingModule {
};
CodigoqrPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CodigoqrPageRoutingModule);



/***/ }),

/***/ 2707:
/*!***************************************************!*\
  !*** ./src/app/pages/codigoqr/codigoqr.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigoqrPageModule": () => (/* binding */ CodigoqrPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _codigoqr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigoqr-routing.module */ 800);
/* harmony import */ var _codigoqr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codigoqr.page */ 528);







let CodigoqrPageModule = class CodigoqrPageModule {
};
CodigoqrPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _codigoqr_routing_module__WEBPACK_IMPORTED_MODULE_0__.CodigoqrPageRoutingModule
        ],
        declarations: [_codigoqr_page__WEBPACK_IMPORTED_MODULE_1__.CodigoqrPage]
    })
], CodigoqrPageModule);



/***/ }),

/***/ 528:
/*!*************************************************!*\
  !*** ./src/app/pages/codigoqr/codigoqr.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigoqrPage": () => (/* binding */ CodigoqrPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _codigoqr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigoqr.page.html?ngResource */ 4280);
/* harmony import */ var _codigoqr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codigoqr.page.scss?ngResource */ 3338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);






let CodigoqrPage = class CodigoqrPage {
    constructor(menuController, alertCtrl) {
        this.menuController = menuController;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
    }
    mostrarMenu() {
        this.menuController.open('first');
        this.menuController.enable(true, 'first');
        this.menuController.enable(false, 'second');
    }
};
CodigoqrPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController }
];
CodigoqrPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-codigoqr',
        template: _codigoqr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_codigoqr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CodigoqrPage);



/***/ }),

/***/ 3338:
/*!**************************************************************!*\
  !*** ./src/app/pages/codigoqr/codigoqr.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  background-color: #f7d547;\n}\n\nion-content {\n  background-color: var(--ion-color-mycolor-shade);\n}\n\n.center {\n  display: block;\n  margin-left: 45px;\n  width: 50%;\n  height: 37px;\n}\n\n.left {\n  width: 35px;\n  margin-bottom: 10px;\n}\n\n.titulo {\n  color: black;\n  margin-right: 25px;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-content {\n  --ion-background-color:#012840;\n}\n\nion-title {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: black;\n}\n\n.imagenes {\n  display: flex;\n}\n\n.imagenes img:first-child {\n  margin-right: 10px;\n}\n\n.texto {\n  text-align: center;\n  color: black;\n  font-size: 15px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-card {\n  background-color: var(--ion-color-mycolor);\n}\n\nion-icon {\n  color: black;\n}\n\n.ttexto {\n  text-align: center;\n  color: white;\n  font-size: 20px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-footer {\n  background-color: var(--ion-color-mycolor);\n}\n\n.textoFooter {\n  color: black;\n  font-size: 10px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nimg {\n  display: block;\n  margin: 0px auto;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGlnb3FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnREFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFHSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzSEFBQTtBQUNKOztBQUNBO0VBRUksOEJBQUE7QUFDSjs7QUFDQTtFQUNJLHNIQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQUFFO0VBQ0Usa0JBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzSEFBQTtBQUlKOztBQURBO0VBQ0ksMENBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzSEFBQTtBQU1KOztBQUhBO0VBQ0ksMENBQUE7QUFNSjs7QUFKQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0hBQUE7QUFPSjs7QUFMQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBUUoiLCJmaWxlIjoiY29kaWdvcXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkNTQ3O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15Y29sb3Itc2hhZGUpO1xyXG59XHJcbi5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICBcclxuICB9XHJcbi5sZWZ0e1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4udGl0dWxve1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5pb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMwMTI4NDA7XHJcbn1cclxuaW9uLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uaW1hZ2VuZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlbmVzIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC50ZXh0b3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXljb2xvcik7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnR0ZXh0b3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXljb2xvcik7XHJcbn1cclxuLnRleHRvRm9vdGVye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5pbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICB9Il19 */";

/***/ }),

/***/ 4280:
/*!**************************************************************!*\
  !*** ./src/app/pages/codigoqr/codigoqr.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-header>\r\n  <ion-toolbar color=\"mycolor\">\r\n     <ion-buttons slot=\"start\">\r\n       <ion-button (click)=\"mostrarMenu()\">\r\n         <ion-icon class=\"menu\" slot=\"start\" name=\"menu-outline\"></ion-icon>\r\n        </ion-button>\r\n     </ion-buttons>\r\n    <ion-title class=\"titulo\">RegistrAPP</ion-title>\r\n    <div class=\"imagenes\">\r\n      <img class=\"center\" src=\"/assets/Duoc.png\">\r\n      <img class=\"left\" src=\"/assets/ScanMe.jpeg\">\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <p class=\"ttexto\">Codigo QR</p>\r\n  <ion-card>\r\n    <img src=\"/assets/qr.png\">\r\n    <p class=\"texto\">Codigo del QR: 9502</p>\r\n    <p class=\"texto\">indique al alumno que escanee este codigo qr, de lo contrario utilize el codigo debajo de este\r\n\r\n    </p>\r\n  </ion-card>\r\n\r\n\r\n\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_codigoqr_codigoqr_module_ts.js.map