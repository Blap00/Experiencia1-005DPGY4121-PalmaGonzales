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
  constructor(menuController, alertController, routerLink, navController) {
    this.menuController = menuController;
    this.alertController = alertController;
    this.routerLink = routerLink;
    this.navController = navController;
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

  ngOnInit() {
    if (localStorage.getItem('sesnop')) {
      localStorage.setItem('sesnop', 'true');
      localStorage.removeItem('ingresaalu');
      localStorage.removeItem('ingresapro');
      this.navController.navigateRoot(['/inicio']);
    } else if (localStorage.getItem('ingresapro')) {
      localStorage.removeItem('sesnop');
      localStorage.removeItem('ingresaalu');
      localStorage.setItem('ingresapro', 'true');
      this.navController.navigateRoot(['/inicio-inicio']);
    } else {
      localStorage.removeItem('sesnop');
      localStorage.removeItem('ingresapro');
      localStorage.setItem('ingresaalu', 'true');
    }
  }

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
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
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

module.exports = "ion-toolbar {\n  background-color: #f7d547;\n}\n\nion-content {\n  background-color: var(--ion-color-mycolor-shade);\n}\n\n.center {\n  margin-left: 45px;\n  padding-top: 11%;\n  padding-left: 16%;\n  padding-bottom: 0vw;\n  width: 40%;\n  height: 16%;\n}\n\n.left {\n  width: 9%;\n  position: absolute;\n  top: 1px;\n  right: 3px;\n}\n\n.titulo {\n  margin-top: -10px;\n  margin-right: 25px;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-content {\n  --ion-background-color:#012840;\n}\n\nion-title {\n  color: black;\n}\n\n.imagenes {\n  display: flex;\n}\n\n.imagenes img:first-child {\n  margin-right: 10px;\n}\n\nion-item {\n  --color: var(--ion-color-mycolor);\n}\n\n.horarios {\n  --ion-item-background: #9ac1d9;\n}\n\n.ion-text-wrap {\n  color: black;\n}\n\nion-list {\n  border: #CCDADF;\n}\n\nion-icon {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc2NsYXNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0RBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFEQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBSUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzSEFBQTtBQUdKOztBQURBO0VBRUksOEJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7QUFLSjs7QUFGRTtFQUNFLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxpQ0FBQTtBQU1KOztBQUpBO0VBQ0ksOEJBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7QUFRSjs7QUFOQTtFQUNJLGVBQUE7QUFTSjs7QUFQQTtFQUNJLFlBQUE7QUFVSiIsImZpbGUiOiJtaXNjbGFzZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDU0Nztcbn1cbmlvbi1jb250ZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1teWNvbG9yLXNoYWRlKTtcbn1cbi5jZW50ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMSU7XG4gICAgcGFkZGluZy1sZWZ0OiAxNiU7XG4gICAgcGFkZGluZy1ib3R0b206IDB2dztcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogMTYlO1xuICB9XG4ubGVmdHtcbiAgICB3aWR0aDogOSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMXB4O1xuICAgIHJpZ2h0OiAzcHg7XG59XG5cblxuLnRpdHVsb3tcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5pb24tY29udGVudHtcblxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzAxMjg0MDtcbn1cbmlvbi10aXRsZXtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4uaW1hZ2VuZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5pbWFnZW5lcyBpbWc6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuaW9uLWl0ZW17XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15Y29sb3IpO1xufVxuLmhvcmFyaW9ze1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzlhYzFkOTtcbn1cbi5pb24tdGV4dC13cmFwe1xuICAgIGNvbG9yOiBibGFjaztcbn1cbmlvbi1saXN0e1xuICAgIGJvcmRlcjogI0NDREFERjtcbn1cbmlvbi1pY29ue1xuICAgIGNvbG9yOiBibGFjaztcbn0iXX0= */";

/***/ }),

/***/ 7965:
/*!****************************************************************!*\
  !*** ./src/app/pages/misclases/misclases.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"mycolor\">\n     <ion-buttons slot=\"start\">\n       <ion-button (click)=\"mostrarMenuA()\">\n         <ion-icon slot=\"start\" name=\"menu-outline\"></ion-icon>\n        </ion-button>\n     </ion-buttons>\n\n\n\n    <ion-title class=\"titulo\">RegistrAPP</ion-title>\n    <div class=\"imagenes\">\n      <img class=\"center\" src=\"/assets/Duoc.png\">\n      <img class=\"left\" src=\"/assets/ScanMe.jpeg\">\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item class=\"horarios\" (click)=\"alerta()\">\n      <ion-thumbnail class=\"ion-margin-end\">\n        <img src=\"/assets/android.png\" />\n      </ion-thumbnail>\n      <ion-label class=\"ion-text-wrap\" >Apps. Moviles</ion-label>\n      <ion-label class=\"ion-text-wrap\">11:31-13:50</ion-label>\n  \n    </ion-item>\n\n    <ion-item  class=\"horarios\" (click)=\"alerta()\">\n      <ion-thumbnail class=\"ion-margin-end\">\n        <img src=\"/assets/calidad.png\" />\n      </ion-thumbnail>\n      <ion-label class=\"ion-text-wrap\" >Calidad de Software</ion-label>\n      <ion-label class=\"ion-text-wrap\">14:00-15:30</ion-label>\n\n    </ion-item>\n\n    <ion-item class=\"horarios\" (click)=\"alerta()\">\n      <ion-thumbnail class=\"ion-margin-end\">\n        <img src=\"/assets/ingles.png\" />\n      </ion-thumbnail>\n      <ion-label class=\"ion-text-wrap\" >Inglés Intermedio</ion-label>\n      <ion-label class=\"ion-text-wrap\">16:00-17:20</ion-label>\n  \n    </ion-item>\n\n    <ion-item class=\"horarios\" (click)=\"alerta()\">\n      <ion-thumbnail class=\"ion-margin-end\">\n        <img src=\"/assets/arquitectura.png\" />\n      </ion-thumbnail>\n      <ion-label class=\"ion-text-wrap\" >\tArq. de Software</ion-label>\n      <ion-label class=\"ion-text-wrap\">17:30-18:50</ion-label>\n\n    </ion-item>\n    <ion-item class=\"horarios\" (click)=\"alerta()\">\n      <ion-thumbnail class=\"ion-margin-end\">\n        <img src=\"/assets/estadistica.png\" />\n      </ion-thumbnail>\n      <ion-label class=\"ion-text-wrap\" >Est. Descriptiva</ion-label>\n      <ion-label class=\"ion-text-wrap\">19:00-20:20</ion-label>\n\n    </ion-item>\n\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_misclases_misclases_module_ts.js.map