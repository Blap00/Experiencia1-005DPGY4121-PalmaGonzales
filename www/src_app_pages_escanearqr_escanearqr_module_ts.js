"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_escanearqr_escanearqr_module_ts"],{

/***/ 8771:
/*!***************************************************************!*\
  !*** ./src/app/pages/escanearqr/escanearqr-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscanearqrPageRoutingModule": () => (/* binding */ EscanearqrPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _escanearqr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escanearqr.page */ 9046);




const routes = [
    {
        path: '',
        component: _escanearqr_page__WEBPACK_IMPORTED_MODULE_0__.EscanearqrPage
    }
];
let EscanearqrPageRoutingModule = class EscanearqrPageRoutingModule {
};
EscanearqrPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EscanearqrPageRoutingModule);



/***/ }),

/***/ 7813:
/*!*******************************************************!*\
  !*** ./src/app/pages/escanearqr/escanearqr.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscanearqrPageModule": () => (/* binding */ EscanearqrPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _escanearqr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escanearqr-routing.module */ 8771);
/* harmony import */ var _escanearqr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escanearqr.page */ 9046);







let EscanearqrPageModule = class EscanearqrPageModule {
};
EscanearqrPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _escanearqr_routing_module__WEBPACK_IMPORTED_MODULE_0__.EscanearqrPageRoutingModule
        ],
        declarations: [_escanearqr_page__WEBPACK_IMPORTED_MODULE_1__.EscanearqrPage]
    })
], EscanearqrPageModule);



/***/ }),

/***/ 9046:
/*!*****************************************************!*\
  !*** ./src/app/pages/escanearqr/escanearqr.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscanearqrPage": () => (/* binding */ EscanearqrPage)
/* harmony export */ });
/* harmony import */ var C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _escanearqr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escanearqr.page.html?ngResource */ 3255);
/* harmony import */ var _escanearqr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./escanearqr.page.scss?ngResource */ 6058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);




 // import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';


 // import { CameraPreview  } from '@awesome-cordova-plugins/camera-preview/ngx';
// import { CameraService } from '../../services/camera.service'; //terminar despues

let EscanearqrPage = class EscanearqrPage {
  constructor(menuController, alertController, navController) {
    this.menuController = menuController;
    this.alertController = alertController;
    this.navController = navController;
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
  } // tomarFoto(){
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
  //   this.camera.getPicture(options).then((imageData) => {
  //    // imageData is either a base64 encoded string or a file URI
  //    // If it's base64 (DATA_URL):
  //    let base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //    // Handle error
  //   });
  // }


  alerta() {
    var _this = this;

    return (0,C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: '¿Estas Seguro?',
        message: 'Recuerda que solo puedes escanear una vez durante el periodo entre tus clases',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  mostrarMenu() {}

  mostrarMenuA() {
    this.menuController.open('second');
    this.menuController.enable(false, 'first');
    this.menuController.enable(true, 'second');
  }

};

EscanearqrPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
}];

EscanearqrPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-escanearqr',
  template: _escanearqr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_escanearqr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EscanearqrPage);


/***/ }),

/***/ 6058:
/*!******************************************************************!*\
  !*** ./src/app/pages/escanearqr/escanearqr.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  background-color: #f7d547;\n}\n\n.center {\n  margin-left: 45px;\n  padding-top: 11%;\n  padding-left: 16%;\n  padding-bottom: 0vw;\n  width: 40%;\n  height: 16%;\n}\n\n.left {\n  width: 9%;\n  position: absolute;\n  top: 1px;\n  right: 3px;\n}\n\n.titulo {\n  margin-top: -10px;\n  margin-right: 25px;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.titulo {\n  margin-right: 25px;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-content {\n  --ion-background-color:#012840;\n}\n\nion-title {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: black;\n}\n\n.imagenes {\n  display: flex;\n}\n\n.imagenes img:first-child {\n  margin-right: 10px;\n}\n\n.texto {\n  text-align: center;\n  color: black;\n  font-size: 15px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-card {\n  background-color: var(--ion-color-mycolor);\n}\n\nion-icon {\n  color: black;\n}\n\n.ttexto {\n  text-align: center;\n  color: black;\n  font-size: 20px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-footer {\n  background-color: var(--ion-color-mycolor);\n}\n\n.textoFooter {\n  color: black;\n  font-size: 10px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.boton {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzY2FuZWFycXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBRUo7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzSEFBQTtBQUNKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNIQUFBO0FBQUo7O0FBRUE7RUFFSSw4QkFBQTtBQUFKOztBQUVBO0VBQ0ksc0hBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQ0U7RUFDRSxrQkFBQTtBQUVKOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNIQUFBO0FBR0o7O0FBQUE7RUFDSSwwQ0FBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNIQUFBO0FBS0o7O0FBRkE7RUFDSSwwQ0FBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxzSEFBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtBQU9KIiwiZmlsZSI6ImVzY2FuZWFycXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDU0Nztcbn1cblxuLmNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgcGFkZGluZy10b3A6IDExJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHZ3O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiAxNiU7XG4gIH1cbi5sZWZ0e1xuICAgIHdpZHRoOiA5JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxcHg7XG4gICAgcmlnaHQ6IDNweDtcbn1cblxuXG4udGl0dWxve1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuXG4udGl0dWxve1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cbmlvbi1jb250ZW50e1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMDEyODQwO1xufVxuaW9uLXRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLmltYWdlbmVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICAuaW1hZ2VuZXMgaW1nOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLnRleHRve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIH1cblxuaW9uLWNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15Y29sb3IpO1xufVxuaW9uLWljb257XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLnR0ZXh0b3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuXG59XG5pb24tZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1teWNvbG9yKTtcbn1cbi50ZXh0b0Zvb3RlcntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG4uYm90b257XG4gICAgZGlzcGxheTogYmxvY2s7XG59Il19 */";

/***/ }),

/***/ 3255:
/*!******************************************************************!*\
  !*** ./src/app/pages/escanearqr/escanearqr.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<!--Este es el inicio del docente, en caso de que lo veas-->\n\n<ion-header>\n  <ion-toolbar color=\"mycolor\">\n     <ion-buttons slot=\"start\">\n       <ion-button (click)=\"mostrarMenuA()\">\n         <ion-icon class=\"menu\" slot=\"start\" name=\"menu-outline\"></ion-icon>\n        </ion-button>\n     </ion-buttons>\n\n\n\n    <ion-title class=\"titulo\">RegistrAPP</ion-title>\n    <div class=\"imagenes\">\n      <img class=\"center\" src=\"/assets/Duoc.png\">\n      <img class=\"left\" src=\"/assets/ScanMe.jpeg\">\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <form action=\"\">\n      <!-- <ion-item>\n        <ion-label position=\"floating\">nombre1 <ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input  required [(ngModel)]=\"usu.nombre1\" name=\"nombre1\" type=\"text\"></ion-input>\n      </ion-item> -->\n      <p class=\"ttexto\">Abrir Cámara para escanear QR:</p>\n      <ion-button class=\"boton\" ion-button-color=\"primary\" block (click)=\"alerta()\">\n        Escanear QR\n        <ion-icon name=\"camera\"></ion-icon>\n      </ion-button>\n    <!-- </form> -->\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_escanearqr_escanearqr_module_ts.js.map