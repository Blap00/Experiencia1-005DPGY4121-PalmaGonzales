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
  constructor(menuController, alertController, routerLink, navController) {
    this.menuController = menuController;
    this.alertController = alertController;
    this.routerLink = routerLink;
    this.navController = navController;
    this.eventSource = [];
    this.calendar = {
      mode: 'month',
      currentDate: new Date()
    };
    this.handlerMessage = '';
    this.roleMessage = '';
  }

  ngOnInit() {
    if (localStorage.getItem('sesnop')) {
      localStorage.setItem('ingresapro', 'true');
      localStorage.removeItem('sesnop');
      localStorage.removeItem('ingresaalu');
    } else if (localStorage.getItem('ingresaalu')) {
      localStorage.removeItem('sesnop');
      this.navController.navigateRoot(['/alumno']);
    } else {
      localStorage.removeItem('sesnop');
      localStorage.removeItem('ingresaalu');
      localStorage.setItem('ingresapro', 'true');
    }
  }

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
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
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

module.exports = "ion-toolbar {\n  background-color: #f7d547;\n}\n\nion-content {\n  background-color: var(--ion-color-mycolor-shade);\n}\n\n.center {\n  margin-left: 45px;\n  padding-top: 11%;\n  padding-left: 16%;\n  padding-bottom: 0vw;\n  width: 40%;\n  height: 16%;\n}\n\n.left {\n  width: 9%;\n  position: absolute;\n  top: 1px;\n  right: 3px;\n}\n\n.titulo {\n  margin-top: -10px;\n  margin-right: 25px;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-content {\n  --ion-background-color:#012840;\n}\n\nion-title {\n  color: black;\n}\n\n.imagenes {\n  display: flex;\n}\n\n.imagenes img:first-child {\n  margin-right: 10px;\n}\n\nion-item {\n  --color: var(--ion-color-mycolor);\n}\n\n.horarios {\n  --ion-item-background: #9ac1d9;\n}\n\n.ion-text-wrap {\n  color: black;\n}\n\nion-list {\n  border: #CCDADF;\n}\n\nion-icon {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhkZS1jbGFzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUNJLGdEQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBR0o7O0FBREE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0hBQUE7QUFHSjs7QUFEQTtFQUVJLDhCQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0FBS0o7O0FBRkU7RUFDRSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksaUNBQUE7QUFNSjs7QUFKQTtFQUNJLDhCQUFBO0FBT0o7O0FBTEE7RUFDSSxZQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0FBU0o7O0FBUEE7RUFDSSxZQUFBO0FBVUoiLCJmaWxlIjoiaGRlLWNsYXNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkNTQ3O1xufVxuaW9uLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15Y29sb3Itc2hhZGUpO1xufVxuLmNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgcGFkZGluZy10b3A6IDExJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHZ3O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiAxNiU7XG4gIH1cbi5sZWZ0e1xuICAgIHdpZHRoOiA5JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxcHg7XG4gICAgcmlnaHQ6IDNweDtcbn1cblxuXG4udGl0dWxve1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cbmlvbi1jb250ZW50e1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMDEyODQwO1xufVxuaW9uLXRpdGxle1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5pbWFnZW5lcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLmltYWdlbmVzIGltZzpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5pb24taXRlbXtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXljb2xvcik7XG59XG4uaG9yYXJpb3N7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjOWFjMWQ5O1xufVxuLmlvbi10ZXh0LXdyYXB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuaW9uLWxpc3R7XG4gICAgYm9yZGVyOiAjQ0NEQURGO1xufVxuaW9uLWljb257XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";

/***/ }),

/***/ 1453:
/*!******************************************************************!*\
  !*** ./src/app/pages/hde-clases/hde-clases.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"mycolor\">\n     <ion-buttons slot=\"start\">\n       <ion-button (click)=\"mostrarMenu()\">\n         <ion-icon slot=\"start\" name=\"menu-outline\"></ion-icon>\n        </ion-button>\n     </ion-buttons>\n\n\n\n    <ion-title class=\"titulo\">RegistrAPP</ion-title>\n    <div class=\"imagenes\">\n      <img class=\"center\" src=\"/assets/Duoc.png\">\n      <img class=\"left\" src=\"/assets/ScanMe.jpeg\">\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item class=\"horarios\" (click)=\"alerta()\">\n      <ion-thumbnail class=\"ion-margin-end\">\n        <img src=\"/assets/android.png\" />\n      </ion-thumbnail>\n      <ion-label class=\"ion-text-wrap\" >Apps. Moviles</ion-label>\n      <ion-label class=\"ion-text-wrap\">11:31-13:50</ion-label>\n  \n    </ion-item>\n<!-- <ion-button class=\"horarios\" (click)=\"alerta()\" expand=\"\" fill=\"\" shape=\"\"> -->\n    <ion-item  class=\"horarios\" (click)=\"alerta()\">\n      <ion-thumbnail class=\"ion-margin-end\">\n        <img src=\"/assets/calidad.png\" />\n      </ion-thumbnail>\n      <ion-label class=\"ion-text-wrap\" >Calidad de Software</ion-label>\n      <ion-label class=\"ion-text-wrap\">14:00-15:30</ion-label>\n    </ion-item>\n  <!-- </ion-button> -->\n\n    <ion-item class=\"horarios\"(click)=\"alerta()\">\n      <ion-thumbnail class=\"ion-margin-end\">\n        <img src=\"/assets/ingles.png\" />\n      </ion-thumbnail>\n      <ion-label class=\"ion-text-wrap\" >Inglés Intermedio</ion-label>\n      <ion-label class=\"ion-text-wrap\">16:00-17:20</ion-label>\n  \n    </ion-item>\n\n    <ion-item class=\"horarios\" (click)=\"alerta()\">\n      <ion-thumbnail class=\"ion-margin-end\">\n        <img src=\"/assets/arquitectura.png\" />\n      </ion-thumbnail>\n      <ion-label class=\"ion-text-wrap\" >\tArq. de Software</ion-label>\n      <ion-label class=\"ion-text-wrap\">17:30-18:50</ion-label>\n\n    </ion-item>\n    <ion-item class=\"horarios\" (click)=\"alerta()\">\n      <ion-thumbnail class=\"ion-margin-end\">\n        <img src=\"/assets/estadistica.png\" />\n      </ion-thumbnail>\n      <ion-label class=\"ion-text-wrap\" >Est. Descriptiva</ion-label>\n      <ion-label class=\"ion-text-wrap\">19:00-20:20</ion-label>\n\n    </ion-item>\n\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_hde-clases_hde-clases_module_ts.js.map