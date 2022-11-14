"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_hde-clases_hde-clases_module_ts"],{

/***/ 8488:
/*!***************************************************************!*\
  !*** ./src/app/pages/hde-clases/hde-clases-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HdeClasesPageRoutingModule": () => (/* binding */ HdeClasesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _hde_clases_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hde-clases.page */ 9912);




const routes = [
    {
        path: '',
        component: _hde_clases_page__WEBPACK_IMPORTED_MODULE_0__.HdeClasesPage
    }
];
let HdeClasesPageRoutingModule = class HdeClasesPageRoutingModule {
};
HdeClasesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HdeClasesPageRoutingModule);



/***/ }),

/***/ 2389:
/*!*******************************************************!*\
  !*** ./src/app/pages/hde-clases/hde-clases.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HdeClasesPageModule": () => (/* binding */ HdeClasesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _hde_clases_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hde-clases-routing.module */ 8488);
/* harmony import */ var _hde_clases_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hde-clases.page */ 9912);







let HdeClasesPageModule = class HdeClasesPageModule {
};
HdeClasesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _hde_clases_routing_module__WEBPACK_IMPORTED_MODULE_0__.HdeClasesPageRoutingModule,
        ],
        declarations: [_hde_clases_page__WEBPACK_IMPORTED_MODULE_1__.HdeClasesPage]
    })
], HdeClasesPageModule);



/***/ }),

/***/ 9912:
/*!*****************************************************!*\
  !*** ./src/app/pages/hde-clases/hde-clases.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HdeClasesPage": () => (/* binding */ HdeClasesPage)
/* harmony export */ });
/* harmony import */ var C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _hde_clases_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hde-clases.page.html?ngResource */ 1453);
/* harmony import */ var _hde_clases_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hde-clases.page.scss?ngResource */ 9118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);








let HdeClasesPage = class HdeClasesPage {
  constructor(menuController, alertController, routerLink) {
    this.menuController = menuController;
    this.alertController = alertController;
    this.routerLink = routerLink;
    this.eventSource = [];
    this.calendar = {
      mode: 'month',
      currentDate: new Date()
    };
    this.handlerMessage = '';
    this.roleMessage = '';
  }

  ngOnInit() {}

  alerta() {
    var _this = this;

    return (0,C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: '¿Estas Seguro?',
        message: 'Recuerda que crearas el QR y solo puedes crear uno durante este periodo',
        buttons: [{
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            _this.handlerMessage = 'Confirmo el QR, Abrir nuevo QR(prox)';

            _this.routerLink.navigate(['/codigoqr']);
          }
        }]
      });
      yield alert.present();
    })();
  }

  mostrarMenu() {
    this.menuController.open('first');
    this.menuController.enable(true, 'first');
    this.menuController.enable(false, 'second');
  }

};

HdeClasesPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

HdeClasesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-hde-clases',
  template: _hde_clases_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_hde_clases_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HdeClasesPage);


/***/ }),

/***/ 9118:
/*!******************************************************************!*\
  !*** ./src/app/pages/hde-clases/hde-clases.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  background-color: #f7d547;\n}\n\nion-content {\n  background-color: var(--ion-color-mycolor-shade);\n}\n\n.center {\n  display: block;\n  margin-left: 45px;\n  width: 50%;\n  height: 37px;\n}\n\n.left {\n  width: 35px;\n}\n\n.titulo {\n  margin-left: 25px;\n}\n\nion-content {\n  --ion-background-color:#012840;\n}\n\nion-title {\n  color: black;\n}\n\n.imagenes {\n  display: flex;\n}\n\n.imagenes img:first-child {\n  margin-right: 10px;\n}\n\nion-item {\n  --color: var(--ion-color-mycolor);\n}\n\n.horarios {\n  --ion-item-background: #9ac1d9;\n}\n\n.ion-text-wrap {\n  color: black;\n}\n\nion-list {\n  border: #CCDADF;\n}\n\nion-icon {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhkZS1jbGFzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUNJLGdEQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUFBO0VBQ0ksV0FBQTtBQUdKOztBQUNBO0VBQ0ksaUJBQUE7QUFFSjs7QUFBQTtFQUVJLDhCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0FBSUo7O0FBREU7RUFDRSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksaUNBQUE7QUFLSjs7QUFIQTtFQUNJLDhCQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxZQUFBO0FBU0oiLCJmaWxlIjoiaGRlLWNsYXNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Q1NDc7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXljb2xvci1zaGFkZSk7XHJcbn1cclxuLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIFxyXG4gIH1cclxuLmxlZnR7XHJcbiAgICB3aWR0aDogMzVweDtcclxufVxyXG5cclxuXHJcbi50aXR1bG97XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5pb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMwMTI4NDA7XHJcbn1cclxuaW9uLXRpdGxle1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5pbWFnZW5lcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2VuZXMgaW1nOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbmlvbi1pdGVte1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15Y29sb3IpO1xyXG59XHJcbi5ob3Jhcmlvc3tcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzlhYzFkOTtcclxufVxyXG4uaW9uLXRleHQtd3JhcHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5pb24tbGlzdHtcclxuICAgIGJvcmRlcjogI0NDREFERjtcclxufVxyXG5pb24taWNvbntcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */";

/***/ }),

/***/ 1453:
/*!******************************************************************!*\
  !*** ./src/app/pages/hde-clases/hde-clases.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"mycolor\">\r\n     <ion-buttons slot=\"start\">\r\n       <ion-button (click)=\"mostrarMenu()\">\r\n         <ion-icon slot=\"start\" name=\"menu-outline\"></ion-icon>\r\n        </ion-button>\r\n     </ion-buttons>\r\n\r\n\r\n\r\n    <ion-title class=\"titulo\">RegistrAPP</ion-title>\r\n    <div class=\"imagenes\">\r\n      <img class=\"center\" src=\"/assets/Duoc.png\">\r\n      <img class=\"left\" src=\"/assets/ScanMe.jpeg\">\r\n    </div>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <ion-item class=\"horarios\" (click)=\"alerta()\">\r\n      <ion-thumbnail class=\"ion-margin-end\">\r\n        <img src=\"/assets/android.png\" />\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-text-wrap\" >Apps. Moviles</ion-label>\r\n      <ion-label class=\"ion-text-wrap\">11:31-13:50</ion-label>\r\n  \r\n    </ion-item>\r\n<!-- <ion-button class=\"horarios\" (click)=\"alerta()\" expand=\"\" fill=\"\" shape=\"\"> -->\r\n    <ion-item  class=\"horarios\" (click)=\"alerta()\">\r\n      <ion-thumbnail class=\"ion-margin-end\">\r\n        <img src=\"/assets/calidad.png\" />\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-text-wrap\" >Calidad de Software</ion-label>\r\n      <ion-label class=\"ion-text-wrap\">14:00-15:30</ion-label>\r\n    </ion-item>\r\n  <!-- </ion-button> -->\r\n\r\n    <ion-item class=\"horarios\"(click)=\"alerta()\">\r\n      <ion-thumbnail class=\"ion-margin-end\">\r\n        <img src=\"/assets/ingles.png\" />\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-text-wrap\" >Inglés Intermedio</ion-label>\r\n      <ion-label class=\"ion-text-wrap\">16:00-17:20</ion-label>\r\n  \r\n    </ion-item>\r\n\r\n    <ion-item class=\"horarios\" (click)=\"alerta()\">\r\n      <ion-thumbnail class=\"ion-margin-end\">\r\n        <img src=\"/assets/arquitectura.png\" />\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-text-wrap\" >\tArq. de Software</ion-label>\r\n      <ion-label class=\"ion-text-wrap\">17:30-18:50</ion-label>\r\n\r\n    </ion-item>\r\n    <ion-item class=\"horarios\" (click)=\"alerta()\">\r\n      <ion-thumbnail class=\"ion-margin-end\">\r\n        <img src=\"/assets/estadistica.png\" />\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-text-wrap\" >Est. Descriptiva</ion-label>\r\n      <ion-label class=\"ion-text-wrap\">19:00-20:20</ion-label>\r\n\r\n    </ion-item>\r\n\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_hde-clases_hde-clases_module_ts.js.map