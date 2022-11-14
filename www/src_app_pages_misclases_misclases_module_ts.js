"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_misclases_misclases_module_ts"],{

/***/ 2635:
/*!*************************************************************!*\
  !*** ./src/app/pages/misclases/misclases-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisclasesPageRoutingModule": () => (/* binding */ MisclasesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _misclases_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misclases.page */ 6537);




const routes = [
    {
        path: '',
        component: _misclases_page__WEBPACK_IMPORTED_MODULE_0__.MisclasesPage
    }
];
let MisclasesPageRoutingModule = class MisclasesPageRoutingModule {
};
MisclasesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MisclasesPageRoutingModule);



/***/ }),

/***/ 5474:
/*!*****************************************************!*\
  !*** ./src/app/pages/misclases/misclases.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisclasesPageModule": () => (/* binding */ MisclasesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _misclases_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misclases-routing.module */ 2635);
/* harmony import */ var _misclases_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misclases.page */ 6537);







let MisclasesPageModule = class MisclasesPageModule {
};
MisclasesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _misclases_routing_module__WEBPACK_IMPORTED_MODULE_0__.MisclasesPageRoutingModule
        ],
        declarations: [_misclases_page__WEBPACK_IMPORTED_MODULE_1__.MisclasesPage]
    })
], MisclasesPageModule);



/***/ }),

/***/ 6537:
/*!***************************************************!*\
  !*** ./src/app/pages/misclases/misclases.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisclasesPage": () => (/* binding */ MisclasesPage)
/* harmony export */ });
/* harmony import */ var C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _misclases_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misclases.page.html?ngResource */ 7965);
/* harmony import */ var _misclases_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misclases.page.scss?ngResource */ 3677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);








let MisclasesPage = class MisclasesPage {
  constructor(menuController, alertController, routerLink) {
    this.menuController = menuController;
    this.alertController = alertController;
    this.routerLink = routerLink;
    this.handlerMessage = '';
    this.roleMessage = '';
  }

  alerta() {
    var _this = this;

    return (0,C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: '¿Estas Seguro?',
        message: 'Te redirigiremos al leector de codigo QR',
        buttons: [{
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            _this.handlerMessage = 'Confirmo quiero abrir leector de QR';

            _this.routerLink.navigate(['/escanearqr']);
          }
        }]
      });
      yield alert.present();
    })();
  }

  ngOnInit() {}

  mostrarMenu() {}

  mostrarMenuA() {
    this.menuController.open('second');
    this.menuController.enable(false, 'first');
    this.menuController.enable(true, 'second');
  }

};

MisclasesPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

MisclasesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-misclases',
  template: _misclases_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_misclases_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MisclasesPage);


/***/ }),

/***/ 3677:
/*!****************************************************************!*\
  !*** ./src/app/pages/misclases/misclases.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  background-color: #f7d547;\n}\n\nion-content {\n  background-color: var(--ion-color-mycolor-shade);\n}\n\n.center {\n  display: block;\n  margin-left: 45px;\n  width: 50%;\n  height: 37px;\n}\n\n.left {\n  width: 35px;\n}\n\n.titulo {\n  margin-left: 25px;\n}\n\nion-content {\n  --ion-background-color:#012840;\n}\n\nion-title {\n  color: black;\n}\n\n.imagenes {\n  display: flex;\n}\n\n.imagenes img:first-child {\n  margin-right: 10px;\n}\n\nion-item {\n  --color: var(--ion-color-mycolor);\n}\n\n.horarios {\n  --ion-item-background: #9ac1d9;\n}\n\n.ion-text-wrap {\n  color: black;\n}\n\nion-list {\n  border: #CCDADF;\n}\n\nion-icon {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc2NsYXNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0RBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBR0o7O0FBQUE7RUFDSSxXQUFBO0FBR0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQUFBO0VBRUksOEJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7QUFJSjs7QUFERTtFQUNFLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxpQ0FBQTtBQUtKOztBQUhBO0VBQ0ksOEJBQUE7QUFNSjs7QUFKQTtFQUNJLFlBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7QUFRSjs7QUFOQTtFQUNJLFlBQUE7QUFTSiIsImZpbGUiOiJtaXNjbGFzZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkNTQ3O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15Y29sb3Itc2hhZGUpO1xyXG59XHJcbi5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICBcclxuICB9XHJcbi5sZWZ0e1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbn1cclxuXHJcblxyXG4udGl0dWxve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMDEyODQwO1xyXG59XHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uaW1hZ2VuZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlbmVzIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5pb24taXRlbXtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1teWNvbG9yKTtcclxufVxyXG4uaG9yYXJpb3N7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICM5YWMxZDk7XHJcbn1cclxuLmlvbi10ZXh0LXdyYXB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuaW9uLWxpc3R7XHJcbiAgICBib3JkZXI6ICNDQ0RBREY7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */";

/***/ }),

/***/ 7965:
/*!****************************************************************!*\
  !*** ./src/app/pages/misclases/misclases.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"mycolor\">\r\n     <ion-buttons slot=\"start\">\r\n       <ion-button (click)=\"mostrarMenuA()\">\r\n         <ion-icon slot=\"start\" name=\"menu-outline\"></ion-icon>\r\n        </ion-button>\r\n     </ion-buttons>\r\n\r\n\r\n\r\n    <ion-title class=\"titulo\">RegistrAPP</ion-title>\r\n    <div class=\"imagenes\">\r\n      <img class=\"center\" src=\"/assets/Duoc.png\">\r\n      <img class=\"left\" src=\"/assets/ScanMe.jpeg\">\r\n    </div>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item class=\"horarios\" (click)=\"alerta()\">\r\n      <ion-thumbnail class=\"ion-margin-end\">\r\n        <img src=\"/assets/android.png\" />\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-text-wrap\" >Apps. Moviles</ion-label>\r\n      <ion-label class=\"ion-text-wrap\">11:31-13:50</ion-label>\r\n  \r\n    </ion-item>\r\n\r\n    <ion-item  class=\"horarios\" (click)=\"alerta()\">\r\n      <ion-thumbnail class=\"ion-margin-end\">\r\n        <img src=\"/assets/calidad.png\" />\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-text-wrap\" >Calidad de Software</ion-label>\r\n      <ion-label class=\"ion-text-wrap\">14:00-15:30</ion-label>\r\n\r\n    </ion-item>\r\n\r\n    <ion-item class=\"horarios\" (click)=\"alerta()\">\r\n      <ion-thumbnail class=\"ion-margin-end\">\r\n        <img src=\"/assets/ingles.png\" />\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-text-wrap\" >Inglés Intermedio</ion-label>\r\n      <ion-label class=\"ion-text-wrap\">16:00-17:20</ion-label>\r\n  \r\n    </ion-item>\r\n\r\n    <ion-item class=\"horarios\" (click)=\"alerta()\">\r\n      <ion-thumbnail class=\"ion-margin-end\">\r\n        <img src=\"/assets/arquitectura.png\" />\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-text-wrap\" >\tArq. de Software</ion-label>\r\n      <ion-label class=\"ion-text-wrap\">17:30-18:50</ion-label>\r\n\r\n    </ion-item>\r\n    <ion-item class=\"horarios\" (click)=\"alerta()\">\r\n      <ion-thumbnail class=\"ion-margin-end\">\r\n        <img src=\"/assets/estadistica.png\" />\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-text-wrap\" >Est. Descriptiva</ion-label>\r\n      <ion-label class=\"ion-text-wrap\">19:00-20:20</ion-label>\r\n\r\n    </ion-item>\r\n\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_misclases_misclases_module_ts.js.map