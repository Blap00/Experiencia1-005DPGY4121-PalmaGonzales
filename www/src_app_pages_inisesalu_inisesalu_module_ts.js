"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_inisesalu_inisesalu_module_ts"],{

/***/ 4335:
/*!*************************************************************!*\
  !*** ./src/app/pages/inisesalu/inisesalu-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InisesaluPageRoutingModule": () => (/* binding */ InisesaluPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _inisesalu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inisesalu.page */ 3430);




const routes = [
    {
        path: '',
        component: _inisesalu_page__WEBPACK_IMPORTED_MODULE_0__.InisesaluPage
    }
];
let InisesaluPageRoutingModule = class InisesaluPageRoutingModule {
};
InisesaluPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InisesaluPageRoutingModule);



/***/ }),

/***/ 3096:
/*!*****************************************************!*\
  !*** ./src/app/pages/inisesalu/inisesalu.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InisesaluPageModule": () => (/* binding */ InisesaluPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _inisesalu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inisesalu-routing.module */ 4335);
/* harmony import */ var _inisesalu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inisesalu.page */ 3430);







let InisesaluPageModule = class InisesaluPageModule {
};
InisesaluPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _inisesalu_routing_module__WEBPACK_IMPORTED_MODULE_0__.InisesaluPageRoutingModule
        ],
        declarations: [_inisesalu_page__WEBPACK_IMPORTED_MODULE_1__.InisesaluPage]
    })
], InisesaluPageModule);



/***/ }),

/***/ 3430:
/*!***************************************************!*\
  !*** ./src/app/pages/inisesalu/inisesalu.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InisesaluPage": () => (/* binding */ InisesaluPage)
/* harmony export */ });
/* harmony import */ var C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _inisesalu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inisesalu.page.html?ngResource */ 5006);
/* harmony import */ var _inisesalu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inisesalu.page.scss?ngResource */ 3646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_usuario_alu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario-alu.service */ 1754);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);









let InisesaluPage = class InisesaluPage {
  constructor(usuarioservice, router, alertcontroller, fb) {
    this.usuarioservice = usuarioservice;
    this.router = router;
    this.alertcontroller = alertcontroller;
    this.fb = fb;
    this.usuarios = [];
    this.usuario = {
      user: '',
      pass: ''
    };
    this.carrera = [{
      name: 'Ingenieria Informatica',
      value: 1
    }, {
      name: 'Analista Programador',
      value: 2
    }, {
      name: 'Ingenieria Mecanica',
      value: 3
    }, {
      name: 'Auditor contador',
      value: 4
    }];
    this.semestre = [{
      sem: 'Primer semestre',
      value: 1
    }, {
      sem: 'Segundo Semestre',
      value: 2
    }, {
      sem: 'Tercer semestre',
      value: 3
    }, {
      sem: 'Cuarto Semestre',
      value: 4
    }];
    this.handlerMessage = "";
    this.formularioLogin = this.fb.group({
      'user': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'pass': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
    });
  }

  ngOnInit() {}

  buscarUser() {
    var f = this.formularioLogin.value;
    var a = 0;
    this.usuarioservice.getDatos().then(datos => {
      this.usuarios = datos;

      if (!datos || datos.length == 0) {
        return null;
      }

      for (let obj of this.usuarios) {
        if (f.user == obj.usuario && f.pass == obj.contrasenna) {
          a = 1;
          console.log('ingresado');
          console.log(localStorage.clear());
          localStorage.setItem('ingresaalu', 'true');
          this.router.navigate(['/alumno']);

          if (f.user != obj.usuario && f.pass == obj.contrasenna) {
            a = 0;
            console.log("Mal ingresado el usuario");
          }

          if (f.user == obj.usuario && f.pass != obj.contrasenna) {
            a = 2;
            console.log("Mal ingresado la contrasenna");
          }

          if (f.user != obj.usuario && f.pass != obj.contrasenna) {
            a = 3;
            console.log("Mal ingresado todo");
          }

          if (obj.semestre == null) {
            a = 4;
            console.log("El usuario ingreso mal su rol");
          }
        }
      } //findelfor


      if (a == 0) {
        this.alertMsg2();
      } else if (a == 3) {
        this.alertMsg1();
      } else if (a == 2) {
        this.alertMsg3();
      } else if (a == 4) {
        this.alertMsg4();
      }
    });
  } //findelmetodo


  alertMsg1() {
    var _this = this;

    return (0,C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertcontroller.create({
        header: '¡Error!',
        message: 'Los datos ingresados son incorrectos',
        buttons: ['Aceptar']
      });
      yield alert.present();
      return;
    })();
  }

  alertMsg2() {
    var _this2 = this;

    return (0,C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertcontroller.create({
        header: '¡Error!',
        message: 'Los datos ingresados en el campo de usuario son incorrectos',
        buttons: ['Aceptar']
      });
      yield alert.present();
      return;
    })();
  }

  alertMsg3() {
    var _this3 = this;

    return (0,C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertcontroller.create({
        header: '¡Error!',
        message: 'Los datos ingresados en el campo de contrasenna son incorrectos',
        buttons: ['Aceptar']
      });
      yield alert.present();
      return;
    })();
  }

  alertMsg4() {
    var _this4 = this;

    return (0,C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertcontroller.create({
        header: '¡Error!',
        message: 'Los datos ingresados por el rol son incorrectos',
        buttons: [{
          text: 'Cambiar a Docente',
          role: 'cancel',
          handler: () => {
            _this4.handlerMessage = 'acepto cambiar el rol';

            _this4.router.navigate(['/inisespro']);
          }
        }, {
          text: 'Cambiar datos',
          role: 'cancel',
          handler: () => {
            _this4.handlerMessage = 'Confirmo el cambiar datos';
          }
        }]
      });
      yield alert.present();
      return;
    })();
  }

  onSubmit() {}

};

InisesaluPage.ctorParameters = () => [{
  type: src_app_services_usuario_alu_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioAluService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}];

InisesaluPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-inisesalu',
  template: _inisesalu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_inisesalu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], InisesaluPage);


/***/ }),

/***/ 3646:
/*!****************************************************************!*\
  !*** ./src/app/pages/inisesalu/inisesalu.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".azulito {\n  background-color: #f7d547;\n}\n\n.sep1 {\n  padding: 0.3vw;\n  border-radius: 90%;\n}\n\n.div3 {\n  height: 10px;\n}\n\n.celestito {\n  background: #9ac1d9;\n}\n\n.bodycol {\n  background-color: #012840;\n}\n\n.porque {\n  position: relative;\n  left: 12%;\n}\n\n.porque2 {\n  position: relative;\n  left: 15%;\n}\n\n.porque1 {\n  position: relative;\n  left: 12%;\n}\n\n.footcol {\n  background-color: #B0E9FC;\n}\n\n.ema {\n  background-color: #B0E9FC;\n}\n\n.rectange5 {\n  position: absolute;\n  width: 340px;\n  height: 71px;\n  left: 9px;\n  top: 193px;\n}\n\n@keyframes error {\n  5% {\n    padding-left: calc(var(--padding-button) - 8px);\n    padding-right: calc(var(--padding-button) + 8px);\n  }\n  10% {\n    padding-left: calc(var(--padding-button) + 7px);\n    padding-right: calc(var(--padding-button) - 7px);\n  }\n  20% {\n    padding-left: calc(var(--padding-button) - 6px);\n    padding-right: calc(var(--padding-button) + 6px);\n  }\n  30% {\n    padding-left: calc(var(--padding-button) + 5px);\n    padding-right: calc(var(--padding-button) - 5px);\n  }\n  40% {\n    padding-left: calc(var(--padding-button) - 4px);\n    padding-right: calc(var(--padding-button) + 4px);\n  }\n  50% {\n    padding-left: calc(var(--padding-button) + 3px);\n    padding-right: calc(var(--padding-button) - 3px);\n  }\n  60% {\n    padding-left: calc(var(--padding-button) - 2px);\n    padding-right: calc(var(--padding-button) + 2px);\n  }\n  70% {\n    padding-left: calc(var(--padding-button) + 1px);\n    padding-right: calc(var(--padding-button) - 1px);\n  }\n  80% {\n    padding-left: var(--padding-button);\n    padding-right: var(--padding-button);\n  }\n}\n\n.but1-anim:hover {\n  background-color: var(--color-secondary);\n}\n\n.but1-anim {\n  background-color: var(--color-primary);\n  border: none;\n  color: var(--color-white);\n  cursor: pointer;\n  margin-left: 12px;\n  padding: 3px var(--padding-button);\n  transition: background-color 0.1s ease;\n}\n\n.blanquito {\n  background-color: #FFFFFF;\n  width: 90%;\n  height: 105%;\n  padding-left: 10px;\n  border-radius: 10%;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXNlc2FsdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxtQkFBQTtBQUdKOztBQUFBO0VBQ0kseUJBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUFNSjs7QUFKQTtFQUNJLHlCQUFBO0FBT0o7O0FBTEE7RUFDSSx5QkFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBU0o7O0FBUEE7RUFDSTtJQUNFLCtDQUFBO0lBQ0EsZ0RBQUE7RUFVSjtFQVJFO0lBQ0UsK0NBQUE7SUFDQSxnREFBQTtFQVVKO0VBUkU7SUFDRSwrQ0FBQTtJQUNBLGdEQUFBO0VBVUo7RUFSRTtJQUNFLCtDQUFBO0lBQ0EsZ0RBQUE7RUFVSjtFQVJFO0lBQ0UsK0NBQUE7SUFDQSxnREFBQTtFQVVKO0VBUkU7SUFDRSwrQ0FBQTtJQUNBLGdEQUFBO0VBVUo7RUFSRTtJQUNFLCtDQUFBO0lBQ0EsZ0RBQUE7RUFVSjtFQVJFO0lBQ0UsK0NBQUE7SUFDQSxnREFBQTtFQVVKO0VBUkU7SUFDRSxtQ0FBQTtJQUNBLG9DQUFBO0VBVUo7QUFDRjs7QUFSQTtFQUNJLHdDQUFBO0FBVUo7O0FBUkE7RUFDSSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0NBQUE7QUFXSjs7QUFSQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVdKIiwiZmlsZSI6ImluaXNlc2FsdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmF6dWxpdG97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkNTQ3O1xyXG59XHJcbi5zZXAxe1xyXG4gICAgcGFkZGluZzogMC4zdnc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5MCU7XHJcbn1cclxuLmRpdjN7XHJcbiAgICBoZWlnaHQ6MTBweDtcclxufVxyXG4uY2VsZXN0aXRve1xyXG4gICAgYmFja2dyb3VuZDogIzlhYzFkOTtcclxuICAgIFxyXG59XHJcbi5ib2R5Y29se1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMjg0MDtcclxufVxyXG4ucG9ycXVle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTIlO1xyXG59XHJcbi5wb3JxdWUye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTUlO1xyXG59XHJcbi5wb3JxdWUxe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTIlO1xyXG59XHJcbi5mb290Y29se1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IwRTlGQztcclxufVxyXG4uZW1he1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IwRTlGQztcclxufVxyXG4ucmVjdGFuZ2U1e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgaGVpZ2h0OiA3MXB4O1xyXG4gICAgbGVmdDogOXB4O1xyXG4gICAgdG9wOiAxOTNweDtcclxufVxyXG5Aa2V5ZnJhbWVzIGVycm9yIHtcclxuICAgIDUlIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSAtIDhweCk7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pICsgOHB4KTtcclxuICAgIH1cclxuICAgIDEwJSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgKyA3cHgpO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSAtIDdweCk7XHJcbiAgICB9XHJcbiAgICAyMCUge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pIC0gNnB4KTtcclxuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgKyA2cHgpO1xyXG4gICAgfVxyXG4gICAgMzAlIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSArIDVweCk7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pIC0gNXB4KTtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgLSA0cHgpO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSArIDRweCk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pICsgM3B4KTtcclxuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgLSAzcHgpO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSAtIDJweCk7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pICsgMnB4KTtcclxuICAgIH1cclxuICAgIDcwJSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgKyAxcHgpO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSAtIDFweCk7XHJcbiAgICB9XHJcbiAgICA4MCUge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmctYnV0dG9uKTtcclxuICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZy1idXR0b24pO1xyXG4gICAgfVxyXG59XHJcbi5idXQxLWFuaW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG4uYnV0MS1hbmltIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgcGFkZGluZzogM3B4IHZhcigtLXBhZGRpbmctYnV0dG9uKTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjFzIGVhc2U7XHJcbn1cclxuXHJcbi5ibGFucXVpdG97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMTA1JTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIGNvbG9yOiBibGFjazsgIFxyXG59Il19 */";

/***/ }),

/***/ 5006:
/*!****************************************************************!*\
  !*** ./src/app/pages/inisesalu/inisesalu.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <div class=\"sep1\">\r\n    <ion-toolbar style=\"width: 100%;height: 85px;\" color=\" azulito\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button\r\n        routerLink=\"/inicio\"\r\n        color=\"blanquito\"\r\n        text=\"Back\"\r\n        mode=\"ios\">\r\n        </ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title ><p style=\"color: #2D4596;\">RegistrApp</p><p><img src=\"assets/aaa1.jpg\" alt=\"Logo\" style=\"width:15%; position: absolute; top: 5%; right: 5%;\"></p></ion-title>\r\n    </ion-toolbar>\r\n    </div>\r\n    <div class=\"sep1\">\r\n    <ion-toolbar color=\" azulito\" style=\"width: 100%;height: 45px;left: 0px;top: 0px;padding-top: 0;\">\r\n      <ion-card-subtitle ><p style=\"text-align: center; top: -4px;\" ><a href=\"https://www.duoc.cl/\"><img src=\"assets/pngegg.png\" alt=\"DUOCUC\" style=\"width: 30%;\" class=\"ion-image1\" ></a></p></ion-card-subtitle>\r\n    </ion-toolbar>\r\n    </div>\r\n    <div class=\"sep1\">\r\n    <ion-toolbar style=\"width: 100%;height: 34px;left: 0px;top: 0px;padding-top: 0;\" color=\" celestito\">\r\n      <ion-card-subtitle style=\" top: -4px; padding-top: 0px;\"><p style=\"text-align: start; color: black;\">Inicio de Sesi&oacute;n de Alumno</p></ion-card-subtitle>\r\n    </ion-toolbar>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-toolbar style=\"width: 100%; height: 97.6%; padding-top: 5vw;\" color=\" bodycol\">\r\n      <!-- Aqui va el material de la pagina -->\r\n      <form  #formulario=\"ngForm\" [formGroup]=\"formularioLogin\" >\r\n        <ion-item style=\" border-top-left-radius: 70%;border-top-right-radius: 70%; opacity: 65%; text-align: center;\">\r\n          <ion-label position=\"floating\" color=\"primary\" >Usuario: <ion-text color=\"danger\">*</ion-text></ion-label>\r\n          <ion-input color=\"blanquito\" required type=\"text\" required placeholder=\"Digite Usuario: \" name=\"user\" formControlName=\"user\"></ion-input>\r\n        </ion-item>\r\n        <ion-item style=\" border-bottom-left-radius: 70%;border-bottom-right-radius: 70%; opacity: 65%; text-align: center;\">\r\n          <ion-label  position=\"floating\" color=\"primary\" >Contraseña: <ion-text color=\"danger\">*</ion-text></ion-label>\r\n          <ion-input color=\"blanquito\" required type=\"password\" required placeholder=\"Digite Contraseña: \" name=\"pass\" formControlName=\"pass\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-button [disabled] =\" formulario.invalid\" expand=\"full\" color=\"primary\" type=\"submit\" (click)=\"buscarUser()\" >\r\n          Iniciar sesión\r\n        </ion-button>\r\n      </form>\r\n      \r\n    </ion-toolbar>\r\n    <ion-toolbar style=\"width: 100%; height: 10px;\" color=\" celestito\">\r\n    </ion-toolbar>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inisesalu_inisesalu_module_ts.js.map