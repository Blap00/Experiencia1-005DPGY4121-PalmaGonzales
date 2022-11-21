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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);









let InisesaluPage = class InisesaluPage {
  constructor(navController, usuarioservice, router, alertcontroller, fb) {
    this.navController = navController;
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
          } // if(obj.semestre==null){
          //   a=4
          //   console.log("El usuario ingreso mal su rol")
          // }

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
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: src_app_services_usuario_alu_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioAluService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
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

module.exports = ".azulito {\n  background-color: #f7d547;\n}\n\n.sep1 {\n  padding: 0.3vw;\n  border-radius: 90%;\n}\n\n.div3 {\n  height: 10px;\n}\n\n.celestito {\n  background: #9ac1d9;\n}\n\n.bodycol {\n  background-color: #012840;\n}\n\n.porque {\n  position: relative;\n  left: 12%;\n}\n\n.porque2 {\n  position: relative;\n  left: 15%;\n}\n\n.porque1 {\n  position: relative;\n  left: 12%;\n}\n\n.footcol {\n  background-color: #B0E9FC;\n}\n\n.ema {\n  background-color: #B0E9FC;\n}\n\n.rectange5 {\n  position: absolute;\n  width: 340px;\n  height: 71px;\n  left: 9px;\n  top: 193px;\n}\n\n@keyframes error {\n  5% {\n    padding-left: calc(var(--padding-button) - 8px);\n    padding-right: calc(var(--padding-button) + 8px);\n  }\n  10% {\n    padding-left: calc(var(--padding-button) + 7px);\n    padding-right: calc(var(--padding-button) - 7px);\n  }\n  20% {\n    padding-left: calc(var(--padding-button) - 6px);\n    padding-right: calc(var(--padding-button) + 6px);\n  }\n  30% {\n    padding-left: calc(var(--padding-button) + 5px);\n    padding-right: calc(var(--padding-button) - 5px);\n  }\n  40% {\n    padding-left: calc(var(--padding-button) - 4px);\n    padding-right: calc(var(--padding-button) + 4px);\n  }\n  50% {\n    padding-left: calc(var(--padding-button) + 3px);\n    padding-right: calc(var(--padding-button) - 3px);\n  }\n  60% {\n    padding-left: calc(var(--padding-button) - 2px);\n    padding-right: calc(var(--padding-button) + 2px);\n  }\n  70% {\n    padding-left: calc(var(--padding-button) + 1px);\n    padding-right: calc(var(--padding-button) - 1px);\n  }\n  80% {\n    padding-left: var(--padding-button);\n    padding-right: var(--padding-button);\n  }\n}\n\n.but1-anim:hover {\n  background-color: var(--color-secondary);\n}\n\n.but1-anim {\n  background-color: var(--color-primary);\n  border: none;\n  color: var(--color-white);\n  cursor: pointer;\n  margin-left: 12px;\n  padding: 3px var(--padding-button);\n  transition: background-color 0.1s ease;\n}\n\n.blanquito {\n  background-color: #FFFFFF;\n  width: 90%;\n  height: 105%;\n  padding-left: 10px;\n  border-radius: 10%;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXNlc2FsdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxtQkFBQTtBQUdKOztBQUFBO0VBQ0kseUJBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUFNSjs7QUFKQTtFQUNJLHlCQUFBO0FBT0o7O0FBTEE7RUFDSSx5QkFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBU0o7O0FBUEE7RUFDSTtJQUNFLCtDQUFBO0lBQ0EsZ0RBQUE7RUFVSjtFQVJFO0lBQ0UsK0NBQUE7SUFDQSxnREFBQTtFQVVKO0VBUkU7SUFDRSwrQ0FBQTtJQUNBLGdEQUFBO0VBVUo7RUFSRTtJQUNFLCtDQUFBO0lBQ0EsZ0RBQUE7RUFVSjtFQVJFO0lBQ0UsK0NBQUE7SUFDQSxnREFBQTtFQVVKO0VBUkU7SUFDRSwrQ0FBQTtJQUNBLGdEQUFBO0VBVUo7RUFSRTtJQUNFLCtDQUFBO0lBQ0EsZ0RBQUE7RUFVSjtFQVJFO0lBQ0UsK0NBQUE7SUFDQSxnREFBQTtFQVVKO0VBUkU7SUFDRSxtQ0FBQTtJQUNBLG9DQUFBO0VBVUo7QUFDRjs7QUFSQTtFQUNJLHdDQUFBO0FBVUo7O0FBUkE7RUFDSSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0NBQUE7QUFXSjs7QUFSQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVdKIiwiZmlsZSI6ImluaXNlc2FsdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5henVsaXRve1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Q1NDc7XG59XG4uc2VwMXtcbiAgICBwYWRkaW5nOiAwLjN2dztcbiAgICBib3JkZXItcmFkaXVzOiA5MCU7XG59XG4uZGl2M3tcbiAgICBoZWlnaHQ6MTBweDtcbn1cbi5jZWxlc3RpdG97XG4gICAgYmFja2dyb3VuZDogIzlhYzFkOTtcbiAgICBcbn1cbi5ib2R5Y29se1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTI4NDA7XG59XG4ucG9ycXVle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAxMiU7XG59XG4ucG9ycXVlMntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMTUlO1xufVxuLnBvcnF1ZTF7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDEyJTtcbn1cbi5mb290Y29se1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMEU5RkM7XG59XG4uZW1he1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMEU5RkM7XG59XG4ucmVjdGFuZ2U1e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzQwcHg7XG4gICAgaGVpZ2h0OiA3MXB4O1xuICAgIGxlZnQ6IDlweDtcbiAgICB0b3A6IDE5M3B4O1xufVxuQGtleWZyYW1lcyBlcnJvciB7XG4gICAgNSUge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSAtIDhweCk7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSArIDhweCk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pICsgN3B4KTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pIC0gN3B4KTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgLSA2cHgpO1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgKyA2cHgpO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSArIDVweCk7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSAtIDVweCk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pIC0gNHB4KTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pICsgNHB4KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgKyAzcHgpO1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgLSAzcHgpO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSAtIDJweCk7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSArIDJweCk7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pICsgMXB4KTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pIC0gMXB4KTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy1idXR0b24pO1xuICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZy1idXR0b24pO1xuICAgIH1cbn1cbi5idXQxLWFuaW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uYnV0MS1hbmltIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgcGFkZGluZzogM3B4IHZhcigtLXBhZGRpbmctYnV0dG9uKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xcyBlYXNlO1xufVxuXG4uYmxhbnF1aXRve1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDEwNSU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBjb2xvcjogYmxhY2s7ICBcbn0iXX0= */";

/***/ }),

/***/ 5006:
/*!****************************************************************!*\
  !*** ./src/app/pages/inisesalu/inisesalu.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <div class=\"sep1\">\n    <ion-toolbar style=\"width: 100%;height: 85px;\" color=\" azulito\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button\n        routerLink=\"/inicio\"\n        color=\"blanquito\"\n        text=\"Back\"\n        mode=\"ios\">\n        </ion-back-button>\n      </ion-buttons>\n      <ion-title ><p style=\"color: #2D4596;\">RegistrApp</p><p><img src=\"assets/ScanMe.jpeg\" alt=\"Logo\" style=\"width:9%; position: absolute; top: 5%; right: 5%;\"></p></ion-title>\n    </ion-toolbar>\n    </div>\n    <div class=\"sep1\">\n    <ion-toolbar color=\" azulito\" style=\"width: 100%;height: 45px;left: 0px;top: 0px;padding-top: 0;\">\n      <ion-card-subtitle ><p style=\"text-align: center; top: -4px;\" ><a href=\"https://www.duoc.cl/\"><img src=\"assets/pngegg.png\" alt=\"DUOCUC\" style=\"width: 30%;\" class=\"ion-image1\" ></a></p></ion-card-subtitle>\n    </ion-toolbar>\n    </div>\n    <div class=\"sep1\">\n    <ion-toolbar style=\"width: 100%;height: 34px;left: 0px;top: 0px;padding-top: 0;\" color=\" celestito\">\n      <ion-card-subtitle style=\" top: -4px; padding-top: 0px;\"><p style=\"text-align: start; color: black;\">Inicio de Sesi&oacute;n de Alumno</p></ion-card-subtitle>\n    </ion-toolbar>\n    </div>\n</ion-header>\n\n<ion-content>\n    <ion-toolbar style=\"width: 100%; height: 97.6%; padding-top: 5vw;\" color=\" bodycol\">\n      <!-- Aqui va el material de la pagina -->\n      <form  #formulario=\"ngForm\" [formGroup]=\"formularioLogin\" >\n        <ion-item style=\" border-top-left-radius: 70%;border-top-right-radius: 70%; opacity: 65%; text-align: center;\">\n          <ion-label position=\"floating\" color=\"primary\" >Usuario: <ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-input color=\"blanquito\" required type=\"text\" required placeholder=\"Digite Usuario: \" name=\"user\" formControlName=\"user\"></ion-input>\n        </ion-item>\n        <ion-item style=\" border-bottom-left-radius: 70%;border-bottom-right-radius: 70%; opacity: 65%; text-align: center;\">\n          <ion-label  position=\"floating\" color=\"primary\" >Contraseña: <ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-input color=\"blanquito\" required type=\"password\" required placeholder=\"Digite Contraseña: \" name=\"pass\" formControlName=\"pass\"></ion-input>\n        </ion-item>\n  \n        <ion-button [disabled] =\" formulario.invalid\" expand=\"full\" color=\"primary\" type=\"submit\" (click)=\"buscarUser()\" >\n          Iniciar sesión\n        </ion-button>\n      </form>\n      \n    </ion-toolbar>\n    <ion-toolbar style=\"width: 100%; height: 10px;\" color=\" celestito\">\n    </ion-toolbar>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inisesalu_inisesalu_module_ts.js.map