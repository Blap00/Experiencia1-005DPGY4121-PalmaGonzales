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
  constructor(menuController, alertController) {
    this.menuController = menuController;
    this.alertController = alertController;
  }

  ngOnInit() {} // tomarFoto(){
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

module.exports = "ion-toolbar {\n  background-color: #f7d547;\n}\n\n.center {\n  display: block;\n  margin-left: 45px;\n  width: 50%;\n  height: 37px;\n}\n\n.left {\n  width: 35px;\n  margin-bottom: 10px;\n}\n\n.titulo {\n  margin-right: 25px;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-content {\n  --ion-background-color:#012840;\n}\n\nion-title {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: black;\n}\n\n.imagenes {\n  display: flex;\n}\n\n.imagenes img:first-child {\n  margin-right: 10px;\n}\n\n.texto {\n  text-align: center;\n  color: black;\n  font-size: 15px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-card {\n  background-color: var(--ion-color-mycolor);\n}\n\nion-icon {\n  color: black;\n}\n\n.ttexto {\n  text-align: center;\n  color: black;\n  font-size: 20px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-footer {\n  background-color: var(--ion-color-mycolor);\n}\n\n.textoFooter {\n  color: black;\n  font-size: 10px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.boton {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzY2FuZWFycXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzSEFBQTtBQUZKOztBQUlBO0VBRUksOEJBQUE7QUFGSjs7QUFJQTtFQUNJLHNIQUFBO0VBQ0EsWUFBQTtBQURKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7QUFBSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzSEFBQTtBQUNKOztBQUVBO0VBQ0ksMENBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzSEFBQTtBQUdKOztBQUFBO0VBQ0ksMENBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0hBQUE7QUFJSjs7QUFGQTtFQUNJLGNBQUE7QUFLSiIsImZpbGUiOiJlc2NhbmVhcnFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDU0NztcclxufVxyXG5cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICBcclxuICB9XHJcbi5sZWZ0e1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4udGl0dWxve1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5pb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMwMTI4NDA7XHJcbn1cclxuaW9uLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uaW1hZ2VuZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlbmVzIGltZzpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC50ZXh0b3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXljb2xvcik7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnR0ZXh0b3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXljb2xvcik7XHJcbn1cclxuLnRleHRvRm9vdGVye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG4uYm90b257XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */";

/***/ }),

/***/ 3255:
/*!******************************************************************!*\
  !*** ./src/app/pages/escanearqr/escanearqr.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<!--Este es el inicio del docente, en caso de que lo veas-->\r\n\r\n<ion-header>\r\n  <ion-toolbar color=\"mycolor\">\r\n     <ion-buttons slot=\"start\">\r\n       <ion-button (click)=\"mostrarMenuA()\">\r\n         <ion-icon class=\"menu\" slot=\"start\" name=\"menu-outline\"></ion-icon>\r\n        </ion-button>\r\n     </ion-buttons>\r\n\r\n\r\n\r\n    <ion-title class=\"titulo\">RegistrAPP</ion-title>\r\n    <div class=\"imagenes\">\r\n      <img class=\"center\" src=\"/assets/Duoc.png\">\r\n      <img class=\"left\" src=\"/assets/ScanMe.jpeg\">\r\n    </div>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-card>\r\n    <p class=\"ttexto\">Abrir Cámara para escanear QR:</p>\r\n    <ion-button class=\"boton\" ion-button-color=\"primary\" block (click)=\"alerta()\">\r\n      Escanear QR\r\n      <ion-icon name=\"camera\"></ion-icon>\r\n    </ion-button>\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_escanearqr_escanearqr_module_ts.js.map