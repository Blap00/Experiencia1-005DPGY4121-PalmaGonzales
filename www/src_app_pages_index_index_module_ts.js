"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_index_index_module_ts"],{

/***/ 513:
/*!*****************************************************!*\
  !*** ./src/app/pages/index/index-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPageRoutingModule": () => (/* binding */ IndexPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.page */ 5957);




const routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_0__.IndexPage
    }
];
let IndexPageRoutingModule = class IndexPageRoutingModule {
};
IndexPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IndexPageRoutingModule);



/***/ }),

/***/ 1023:
/*!*********************************************!*\
  !*** ./src/app/pages/index/index.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPageModule": () => (/* binding */ IndexPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-routing.module */ 513);
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.page */ 5957);







let IndexPageModule = class IndexPageModule {
};
IndexPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _index_routing_module__WEBPACK_IMPORTED_MODULE_0__.IndexPageRoutingModule
        ],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_1__.IndexPage]
    })
], IndexPageModule);



/***/ }),

/***/ 5957:
/*!*******************************************!*\
  !*** ./src/app/pages/index/index.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPage": () => (/* binding */ IndexPage)
/* harmony export */ });
/* harmony import */ var C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _index_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.page.html?ngResource */ 5063);
/* harmony import */ var _index_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.page.scss?ngResource */ 8189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);






 // interface Correo{
//   email: string;
// }  

let IndexPage = class IndexPage {
  constructor(alerController, routerLinks, navController) {
    this.alerController = alerController;
    this.routerLinks = routerLinks;
    this.navController = navController;
    this.handlerMessage = '';
    this.roleMessage = '';
    this.correo1 = 'duocuc.cl';
    this.correo2 = 'profesor.duoc.cl';
    this.pusuario = {
      email: ''
    };
    this.email = this.pusuario.email;
    this.correosplitted = this.pusuario.email.split("@", 2)[1];
    this.splitted = this.email.split("@", 3);
  }

  alerta() {
    var _this = this;

    return (0,C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alerController.create({
        header: 'ERROR',
        message: 'Recuerde que debe utilizar correo Institucional, es decir, @duocuc.cl o @profesor.duoc.cl',
        buttons: [{
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            _this.handlerMessage = 'Confirmo el no redirigirse, necesitara ingresar la cuenta correcta ';
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
    } else if (localStorage.getItem('ingresapro')) {
      localStorage.removeItem('sesnop');
      localStorage.removeItem('ingresaalu');
      localStorage.setItem('ingresapro', 'true');
      this.navController.navigateRoot(['/inicio-inicio']);
    } else {
      localStorage.removeItem('sesnop');
      localStorage.removeItem('ingresapro');
      localStorage.setItem('ingresaalu', 'true');
      this.navController.navigateRoot(['/alumno']);
    }
  }

  onSubmit1() {
    this.correosplitted = this.pusuario.email.split("@", 2)[1];
    console.log(this.correosplitted);
    console.log("submit");
    this.correo1 = this.correo1;

    if (this.correosplitted == this.correo1) {
      console.log("Funciono IF del DUOCUC.CL");
      this.routerLinks.navigate(['/registralu']);
    } else if (this.correosplitted == this.correo2) {
      console.log("funciono IF del profesor");
      this.routerLinks.navigate(['/registrpro']);
    } else {
      console.log("TRAMPOSO NO EXISTE ESE ERROR");
      this.alerta();
    }
  }

};

IndexPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
}];

IndexPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-index',
  template: _index_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_index_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], IndexPage);


/***/ }),

/***/ 8189:
/*!********************************************************!*\
  !*** ./src/app/pages/index/index.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "img {\n  max-width: 35%;\n}\n\n.azulito {\n  background-color: #f7d547;\n}\n\n.sep1 {\n  padding: 0.3vw;\n  border-radius: 90%;\n}\n\n.div3 {\n  height: 10px;\n}\n\n.celestito {\n  background: #9ac1d9;\n}\n\n.bodycol {\n  background-color: #012840;\n}\n\n.porque {\n  position: relative;\n  left: 27.4%;\n}\n\n.porque2 {\n  position: relative;\n  left: 7%;\n}\n\n.porque1 {\n  position: relative;\n  left: 12%;\n}\n\n.footcol {\n  background-color: #B0E9FC;\n}\n\n.ema {\n  background-color: #CCDADF;\n}\n\n.rectange5 {\n  position: absolute;\n  width: 340px;\n  height: 71px;\n  left: 9px;\n  top: 193px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7QUFJSjs7QUFGQTtFQUNJLG1CQUFBO0FBS0o7O0FBRkE7RUFDSSx5QkFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUFPSjs7QUFMQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQVFKOztBQU5BO0VBQ0kseUJBQUE7QUFTSjs7QUFQQTtFQUNJLHlCQUFBO0FBVUo7O0FBUkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFXSiIsImZpbGUiOiJpbmRleC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gICAgbWF4LXdpZHRoOiAzNSU7XG59XG4uYXp1bGl0b3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkNTQ3O1xufVxuLnNlcDF7XG4gICAgcGFkZGluZzogMC4zdnc7XG4gICAgYm9yZGVyLXJhZGl1czogOTAlO1xufVxuLmRpdjN7XG4gICAgaGVpZ2h0OjEwcHg7XG59XG4uY2VsZXN0aXRve1xuICAgIGJhY2tncm91bmQ6ICM5YWMxZDk7XG4gICAgXG59XG4uYm9keWNvbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyODQwO1xufVxuLnBvcnF1ZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDoyNy40JTtcbn1cbi5wb3JxdWUye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OjclO1xufVxuLnBvcnF1ZTF7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDEyJTtcbn1cbi5mb290Y29se1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMEU5RkM7XG59XG4uZW1he1xuICAgIGJhY2tncm91bmQtY29sb3I6I0NDREFERjtcbn1cbi5yZWN0YW5nZTV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNDBweDtcbiAgICBoZWlnaHQ6IDcxcHg7XG4gICAgbGVmdDogOXB4O1xuICAgIHRvcDogMTkzcHg7XG59XG4gICJdfQ== */";

/***/ }),

/***/ 5063:
/*!********************************************************!*\
  !*** ./src/app/pages/index/index.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <div class=\"sep1\">\n    <ion-toolbar color=\" azulito\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title ><p style=\"position: relative;left: -1%;font-size: 110%;color: #2D4596;\">Registrapp</p><p><img src=\"assets/ScanMe.jpeg\" alt=\"Logo\" style=\"width:9%; position: absolute; top: 5%; right: 5%;\"></p></ion-title>\n    </ion-toolbar>\n  </div>\n  <div class=\"sep1\">\n  <ion-toolbar color=\" azulito\" style=\"width: 100%;height: 45px;left: 0px;top: 0px;padding-top: 0;\">\n    <ion-card-subtitle ><p style=\"text-align: center; top: -4px;\" ><a href=\"https://www.duoc.cl/\"><img src=\"assets/pngegg.png\" alt=\"DUOCUC\" style=\"width: 60%; height: 60%; padding-top: -10%;\" class=\"ion-image1\" ></a></p></ion-card-subtitle>\n  </ion-toolbar>\n  </div>\n  <div class=\"sep1\">\n  <ion-toolbar style=\"width: 100%;\n  height: 34px;\n  left: 0px;\n  top: 0px;\n  padding-top: 0;\" color=\" celestito\">\n    <ion-card-subtitle style=\" top: -4px; padding-top: 0px;\"><p style=\"text-align: start; color: black;\">Registrarme</p></ion-card-subtitle>\n  </ion-toolbar>\n  </div>\n</ion-header>\n<ion-content scroll=\"false\">\n  <!-- body -->\n  <ion-toolbar style=\"width: 100%; height: 97.6%; padding-top: 5vw;\" color=\" bodycol\">\n    <!-- Creamos form solamente para ingresar correo -->\n    <form #formulario=\"ngForm\" >\n      <div class=\"ema\">\n        <ion-item  style=\"opacity: 75%; text-align: center;\">\n          <ion-label position=\"floating\" >E-Mail <ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-input required type=\"email\" placeholder=\"Introduzca su mail Institucional\" name=\"email\" [(ngModel)]=\"pusuario.email\" pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z\\.]{6,20})([.])([a-zA-Z]{2,5})$\"></ion-input>\n        </ion-item>\n      </div>\n      <ion-button (click)=\"onSubmit1();\" (onSubmit)=\"onSubmit1();\" [disabled] =\"formulario.invalid\"  class=\"porque\" color=\"tertiary\" fill=\"outline\" size=\"small\" shape=\"round\" >\n        Registrarme\n      </ion-button>\n    </form>\n    <ion-row>   \n      <ion-col>     \n        <ion-button routerLink=\"/nec-ayu\" class=\"porque1\" color=\"tertiary\" fill=\"clear\" size=\"default\" shape=\"round\" type=\"submit\" >\n          ¿Necesitas ayuda?\n        </ion-button>\n      </ion-col> \n    </ion-row>\n  </ion-toolbar>\n  <ion-toolbar style=\"width: 100%; height: 10px;\" color=\" celestito\">\n  </ion-toolbar>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_index_index_module_ts.js.map