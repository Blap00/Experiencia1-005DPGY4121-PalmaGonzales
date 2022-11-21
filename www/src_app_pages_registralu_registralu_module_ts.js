"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_registralu_registralu_module_ts"],{

/***/ 6462:
/*!***************************************************************!*\
  !*** ./src/app/pages/registralu/registralu-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistraluPageRoutingModule": () => (/* binding */ RegistraluPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registralu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registralu.page */ 1094);




const routes = [
    {
        path: '',
        component: _registralu_page__WEBPACK_IMPORTED_MODULE_0__.RegistraluPage
    }
];
let RegistraluPageRoutingModule = class RegistraluPageRoutingModule {
};
RegistraluPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistraluPageRoutingModule);



/***/ }),

/***/ 9943:
/*!*******************************************************!*\
  !*** ./src/app/pages/registralu/registralu.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistraluPageModule": () => (/* binding */ RegistraluPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registralu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registralu-routing.module */ 6462);
/* harmony import */ var _registralu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registralu.page */ 1094);







let RegistraluPageModule = class RegistraluPageModule {
};
RegistraluPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registralu_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistraluPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_registralu_page__WEBPACK_IMPORTED_MODULE_1__.RegistraluPage]
    })
], RegistraluPageModule);



/***/ }),

/***/ 1094:
/*!*****************************************************!*\
  !*** ./src/app/pages/registralu/registralu.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistraluPage": () => (/* binding */ RegistraluPage)
/* harmony export */ });
/* harmony import */ var C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registralu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registralu.page.html?ngResource */ 5032);
/* harmony import */ var _registralu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registralu.page.scss?ngResource */ 8965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_usuario_alu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario-alu.service */ 1754);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);










let RegistraluPage = class RegistraluPage {
  constructor(usuarioservice, router, storageService, plt, toastController, alertController, navController, fb) {
    this.usuarioservice = usuarioservice;
    this.router = router;
    this.storageService = storageService;
    this.plt = plt;
    this.toastController = toastController;
    this.alertController = alertController;
    this.navController = navController;
    this.fb = fb;
    this.datos = [];
    this.newUsuario = {};
    this.newDato = {};
    this.data = {};
    this.usuarionue = {
      id: Date.now(),
      usuario: '',
      contrasenna: '',
      recontrasenna: '',
      carrera: '',
      semestre: '',
      modified: 0
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
    this.formularioRegistro = this.fb.group({
      'id': this.usuarionue.id,
      'usuario': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'contrasenna': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'recontrasenna': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'carrera': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'semestre': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'modified': this.data.modified
    });
    this.plt.ready().then(() => {
      this.loadDatos();
    });
  } //get


  loadDatos() {
    this.storageService.getDatos().then(dato => {
      this.datos = dato;
    });
  } //Create


  submitForm() {
    var form = this.formularioRegistro.value;
    var IsExist = false;
    var IsValidPass = false;

    if (this.formularioRegistro.invalid) {
      console.log("alerta error invalido");
    } else {
      this.newUsuario.usuario = form.usuario, this.newUsuario.id = form.id, this.newUsuario.contrasenna = form.contrasenna, this.newUsuario.recontrasenna = form.recontrasenna, this.newUsuario.modified = form.modified, this.newUsuario.carrera = form.carrera, this.newUsuario.semestre = form.semestre, this.usuarioservice.getDatos().then(data => {
        this.datos = data;

        if (!data || data.length == 0) {
          this.usuarioservice.addDatos(this.newUsuario).then(dato => {
            this.newUsuario = {};
            this.showToast('¡Usuario creado con exito!');
          });
        } else {
          for (let obj of this.datos) {
            if (this.newUsuario.usuario == obj.usuario) {
              IsExist = true;
            }

            if (this.newUsuario.contrasenna == this.newUsuario.recontrasenna) {
              IsValidPass = true;
            }
          }

          if (IsExist) {
            console.log("ERROR, YA EXISTE, FALSO");
            this.formularioRegistro.reset();
          } else if (IsValidPass == false) {
            console.log("Reingrese su contrasenna y validacion");
            this.formularioRegistro.reset();
          } else {
            this.usuarioservice.addDatos(this.newUsuario).then(data => {
              this.router.navigate(['inisesalu']);
              console.log("No existe el usuario, se permite registrar");
              this.newUsuario = {};
              this.showToast("Se creo usuario");
            });
            this.formularioRegistro.reset();
          }
        }
      });
    }
  } //update


  updateDatos(dato) {
    dato.usuario = `UPDATED: ${dato.usuario}`;
    dato.modified = Date.now();
    this.storageService.updateDatos(dato).then(item => {
      this.showToast('Elemento Actualizado!');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  } //delete


  deleteDatos(dato) {
    this.storageService.deleteDatos(dato.id).then(item => {
      this.showToast('Elemento Eliminado!');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  showToast(msg) {
    var _this = this;

    return (0,C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: msg,
        duration: 2000
      });
      toast.present();
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

};

RegistraluPage.ctorParameters = () => [{
  type: src_app_services_usuario_alu_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioAluService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: src_app_services_usuario_alu_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioAluService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}];

RegistraluPage.propDecorators = {
  myList: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['myList']
  }]
};
RegistraluPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-registralu',
  template: _registralu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_registralu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegistraluPage);


/***/ }),

/***/ 8965:
/*!******************************************************************!*\
  !*** ./src/app/pages/registralu/registralu.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "img {\n  max-width: 35%;\n}\n\n.azulito {\n  background-color: #f7d547;\n}\n\n.sep1 {\n  padding: 0.3vw;\n  border-radius: 90%;\n}\n\n.div3 {\n  height: 10px;\n}\n\n.celestito {\n  background: #9ac1d9;\n}\n\n.bodycol {\n  background-color: #012840;\n}\n\n.porque {\n  position: relative;\n  left: 12%;\n}\n\n.porque2 {\n  position: relative;\n  left: 15%;\n}\n\n.porque1 {\n  position: relative;\n  left: 12%;\n}\n\n.footcol {\n  background-color: #B0E9FC;\n}\n\n.ema {\n  background-color: #B0E9FC;\n}\n\n.rectange5 {\n  position: absolute;\n  width: 340px;\n  height: 71px;\n  left: 9px;\n  top: 193px;\n}\n\n@keyframes error {\n  5% {\n    padding-left: calc(var(--padding-button) - 8px);\n    padding-right: calc(var(--padding-button) + 8px);\n  }\n  10% {\n    padding-left: calc(var(--padding-button) + 7px);\n    padding-right: calc(var(--padding-button) - 7px);\n  }\n  20% {\n    padding-left: calc(var(--padding-button) - 6px);\n    padding-right: calc(var(--padding-button) + 6px);\n  }\n  30% {\n    padding-left: calc(var(--padding-button) + 5px);\n    padding-right: calc(var(--padding-button) - 5px);\n  }\n  40% {\n    padding-left: calc(var(--padding-button) - 4px);\n    padding-right: calc(var(--padding-button) + 4px);\n  }\n  50% {\n    padding-left: calc(var(--padding-button) + 3px);\n    padding-right: calc(var(--padding-button) - 3px);\n  }\n  60% {\n    padding-left: calc(var(--padding-button) - 2px);\n    padding-right: calc(var(--padding-button) + 2px);\n  }\n  70% {\n    padding-left: calc(var(--padding-button) + 1px);\n    padding-right: calc(var(--padding-button) - 1px);\n  }\n  80% {\n    padding-left: var(--padding-button);\n    padding-right: var(--padding-button);\n  }\n}\n\n.but1-anim:hover {\n  background-color: var(--color-secondary);\n}\n\n.but1-anim {\n  background-color: var(--color-primary);\n  border: none;\n  color: var(--color-white);\n  cursor: pointer;\n  margin-left: 12px;\n  padding: 3px var(--padding-button);\n  transition: background-color 0.1s ease;\n}\n\n.blanquito {\n  background-color: #FFFFFF;\n  width: 90%;\n  height: 105%;\n  padding-left: 10px;\n  border-radius: 10%;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhbHUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7QUFLSjs7QUFGQTtFQUNJLHlCQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQU9KOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FBUUo7O0FBTkE7RUFDSSx5QkFBQTtBQVNKOztBQVBBO0VBQ0kseUJBQUE7QUFVSjs7QUFSQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVdKOztBQVRBO0VBQ0k7SUFDRSwrQ0FBQTtJQUNBLGdEQUFBO0VBWUo7RUFWRTtJQUNFLCtDQUFBO0lBQ0EsZ0RBQUE7RUFZSjtFQVZFO0lBQ0UsK0NBQUE7SUFDQSxnREFBQTtFQVlKO0VBVkU7SUFDRSwrQ0FBQTtJQUNBLGdEQUFBO0VBWUo7RUFWRTtJQUNFLCtDQUFBO0lBQ0EsZ0RBQUE7RUFZSjtFQVZFO0lBQ0UsK0NBQUE7SUFDQSxnREFBQTtFQVlKO0VBVkU7SUFDRSwrQ0FBQTtJQUNBLGdEQUFBO0VBWUo7RUFWRTtJQUNFLCtDQUFBO0lBQ0EsZ0RBQUE7RUFZSjtFQVZFO0lBQ0UsbUNBQUE7SUFDQSxvQ0FBQTtFQVlKO0FBQ0Y7O0FBVkE7RUFDSSx3Q0FBQTtBQVlKOztBQVZBO0VBQ0ksc0NBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNDQUFBO0FBYUo7O0FBVkE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFhSiIsImZpbGUiOiJyZWdpc3RyYWx1LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgICBtYXgtd2lkdGg6IDM1JTtcbn1cbi5henVsaXRve1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Q1NDc7XG59XG4uc2VwMXtcbiAgICBwYWRkaW5nOiAwLjN2dztcbiAgICBib3JkZXItcmFkaXVzOiA5MCU7XG59XG4uZGl2M3tcbiAgICBoZWlnaHQ6MTBweDtcbn1cbi5jZWxlc3RpdG97XG4gICAgYmFja2dyb3VuZDogIzlhYzFkOTtcbiAgICBcbn1cbi5ib2R5Y29se1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTI4NDA7XG59XG4ucG9ycXVle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAxMiU7XG59XG4ucG9ycXVlMntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMTUlO1xufVxuLnBvcnF1ZTF7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDEyJTtcbn1cbi5mb290Y29se1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMEU5RkM7XG59XG4uZW1he1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMEU5RkM7XG59XG4ucmVjdGFuZ2U1e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzQwcHg7XG4gICAgaGVpZ2h0OiA3MXB4O1xuICAgIGxlZnQ6IDlweDtcbiAgICB0b3A6IDE5M3B4O1xufVxuQGtleWZyYW1lcyBlcnJvciB7XG4gICAgNSUge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSAtIDhweCk7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSArIDhweCk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pICsgN3B4KTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pIC0gN3B4KTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgLSA2cHgpO1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgKyA2cHgpO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSArIDVweCk7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSAtIDVweCk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pIC0gNHB4KTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pICsgNHB4KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgKyAzcHgpO1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWRkaW5nLWJ1dHRvbikgLSAzcHgpO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSAtIDJweCk7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZGRpbmctYnV0dG9uKSArIDJweCk7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pICsgMXB4KTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFkZGluZy1idXR0b24pIC0gMXB4KTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy1idXR0b24pO1xuICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZy1idXR0b24pO1xuICAgIH1cbn1cbi5idXQxLWFuaW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uYnV0MS1hbmltIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgcGFkZGluZzogM3B4IHZhcigtLXBhZGRpbmctYnV0dG9uKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xcyBlYXNlO1xufVxuXG4uYmxhbnF1aXRve1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDEwNSU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBjb2xvcjogYmxhY2s7ICBcbn0iXX0= */";

/***/ }),

/***/ 5032:
/*!******************************************************************!*\
  !*** ./src/app/pages/registralu/registralu.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <div class=\"sep1\">\n    <ion-toolbar color=\" azulito\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title ><p style=\"position: relative;left: -2%;font-size: 110%;color: #2D4596;\">Registrapp</p><p><img src=\"assets/ScanMe.jpeg\" alt=\"Logo\" style=\"width:9%; position: absolute; top: 5%; right: 5%;\"></p></ion-title>\n    </ion-toolbar>\n    </div>\n    <div class=\"sep1\">\n    <ion-toolbar color=\" azulito\" style=\"width: 100%;height: 45px;left: 0px;top: 0px;padding-top: 0;\">\n      <ion-card-subtitle ><p style=\"text-align: center; top: -4px;\" ><a href=\"https://www.duoc.cl/\"><img src=\"assets/pngegg.png\" alt=\"DUOCUC\" style=\"width: 60%; height: 60%; padding-top: -10%;\" class=\"ion-image1\" ></a></p></ion-card-subtitle>\n    </ion-toolbar>\n    </div>\n    <div class=\"sep1\">\n    <ion-toolbar style=\"width: 100%;height: 34px;left: 0px;top: 0px;padding-top: 0;\" color=\" celestito\">\n      <ion-card-subtitle style=\" top: -4px; padding-top: 0px;\"><p style=\"text-align: start; color: black;\">Registrarse como Alumno</p></ion-card-subtitle>\n    </ion-toolbar>\n    </div>\n  \n</ion-header>\n\n<ion-content>\n  <ion-toolbar style=\"width: 100%;height: 97.6%;padding-top: 5vw;\" color=\" bodycol\">\n    <!-- Aqui va el material de la pagina -->\n    <form #formulario=\"ngForm\" [formGroup]=\"formularioRegistro\"\n    >\n      <ion-item style=\" border-top-left-radius: 70%;border-top-right-radius: 70%; opacity: 75%; text-align: center;\">\n        <ion-label position=\"floating\" color=\"primary\" >Usuario: <ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input color=\"blanquito\" type=\"text\" required placeholder=\"Digite Usuario: \" name=\"user\" pattern=\"^([a-zA-Z0-9_\\-\\.]{3,20})$\"  formControlName=\"usuario\"  ></ion-input>\n      </ion-item>\n      <ion-item style=\" opacity: 75%; text-align: center;\">\n        <ion-label  position=\"floating\" color=\"primary\" >Contraseña: <ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input color=\"blanquito\" type=\"password\" required placeholder=\"Digite Contraseña: \" name=\"pass\" formControlName=\"contrasenna\"></ion-input>\n      </ion-item>\n      <ion-item style=\" opacity: 75%; text-align: center;\">\n        <ion-label  position=\"floating\" color=\"primary\" >Revalide la Contraseña: <ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input color=\"blanquito\" type=\"password\" required placeholder=\"Revalide Contraseña: \" name=\"pass\" formControlName=\"recontrasenna\"></ion-input>\n      </ion-item>\n\n      <ion-item style=\" opacity: 75%; text-align: center;\">\n        <ion-label  position=\"floating\" color=\"primary\" >Carrera: <ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-select color=\"blanquito\" name=\"carr\" value=\"\" placeholder=\"seleccione su carrera\" formControlName=\"carrera\">\n            <ion-select-option color=\"primary\" *ngFor=\"let c of carrera\" [value]=\"[c.name]\">{{c.name}}</ion-select-option>          </ion-select>\n        <!-- <ion-input color=\"blanquito\" type=\"texto\" required placeholder=\"Digite su carrera: \" name=\"carr\" formControlName=\"carrera\" ></ion-input> -->\n      </ion-item>\n      <ion-item style=\" opacity: 75%; text-align: center;\">\n        <ion-label  position=\"floating\" color=\"primary\" >Semestre: <ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-select color=\"blanquito\" name=\"carr\" value=\"\" placeholder=\"seleccione su carrera\" formControlName=\"semestre\">\n            <ion-select-option color=\"primary\" *ngFor=\"let c of semestre\" [value]=\"[c.sem]\">{{c.sem}}</ion-select-option>          </ion-select>\n        <!-- <ion-input color=\"blanquito\" type=\"texto\" required placeholder=\"Digite su carrera: \" name=\"carr\" formControlName=\"carrera\" ></ion-input> -->\n      </ion-item>\n      <ion-button [disabled] =\"formulario.invalid\" expand=\"full\" \n       color=\"primary\" type=\"submit\" (click)=\"submitForm()\" >\n        Registrarme\n      </ion-button>\n    </form>\n  </ion-toolbar>\n  <ion-toolbar style=\"width: 100%; height: 10px;\" color=\" celestito\">\n  </ion-toolbar>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registralu_registralu_module_ts.js.map