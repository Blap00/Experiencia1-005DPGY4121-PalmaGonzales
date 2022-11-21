(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'index',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_index_index_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/index/index.module */ 1023)).then(m => m.IndexPageModule),
    },
    {
        path: 'nec-ayu',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_nec-ayu_nec-ayu_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/nec-ayu/nec-ayu.module */ 4336)).then(m => m.NecAyuPageModule),
    },
    {
        path: 'err',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_err_err_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/err/err.module */ 1774)).then(m => m.ERRPageModule),
    },
    {
        path: 'inicio',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_inicio_inicio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/inicio/inicio.module */ 3633)).then(m => m.InicioPageModule),
    },
    {
        path: 'inisesalu',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_inisesalu_inisesalu_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/inisesalu/inisesalu.module */ 3096)).then(m => m.InisesaluPageModule),
    },
    {
        path: 'inisespro',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_inisespro_inisespro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/inisespro/inisespro.module */ 7199)).then(m => m.InisesproPageModule),
    },
    {
        path: 'registralu',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_registralu_registralu_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registralu/registralu.module */ 9943)).then(m => m.RegistraluPageModule),
    },
    {
        path: 'registrpro',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_registrpro_registrpro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registrpro/registrpro.module */ 9236)).then(m => m.RegistrproPageModule),
    },
    {
        path: 'alumno',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_alumno_alumno_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/alumno/alumno.module */ 4177)).then(m => m.AlumnoPageModule),
        // canActivate:[SesaluGuard]
    },
    {
        path: 'codigoqr',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_codigoqr_codigoqr_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/codigoqr/codigoqr.module */ 2707)).then(m => m.CodigoqrPageModule),
        // canActivate:[SesproGuard]
    },
    {
        path: 'escanearqr',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_escanearqr_escanearqr_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/escanearqr/escanearqr.module */ 7813)).then(m => m.EscanearqrPageModule),
        // canActivate:[SesaluGuard]
    },
    {
        path: 'hde-clases',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_hde-clases_hde-clases_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/hde-clases/hde-clases.module */ 2389)).then(m => m.HdeClasesPageModule),
        // canActivate:[SesproGuard]
    },
    {
        path: 'inicio-inicio',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_inicio-inicio_inicio-inicio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/inicio-inicio/inicio-inicio.module */ 9390)).then(m => m.InicioInicioPageModule),
        // canActivate:[SesproGuard]
    },
    {
        path: 'misclases',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_misclases_misclases_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/misclases/misclases.module */ 5474)).then(m => m.MisclasesPageModule),
        // canActivate:[SesaluGuard]
    },
    {
        path: 'reg-asistencia',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_reg-asistencia_reg-asistencia_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/reg-asistencia/reg-asistencia.module */ 1304)).then(m => m.RegAsistenciaPageModule),
        // canActivate:[SesproGuard]
    },
    {
        path: 'feriados-alu',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feriados-alu_feriados-alu_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/feriados-alu/feriados-alu.module */ 588)).then(m => m.FeriadosAluPageModule),
    },
    {
        path: 'feriados-pro',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_feriados-pro_feriados-pro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/feriados-pro/feriados-pro.module */ 6139)).then(m => m.FeriadosProPageModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 190);









let AppComponent = class AppComponent {
  constructor(alertController, routerLink, storage, menuController) {
    this.alertController = alertController;
    this.routerLink = routerLink;
    this.storage = storage;
    this.menuController = menuController;
    this.handlerMessage = '';
    this.roleMessage = '';
    this.componentes = [{
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio-inicio'
    }, {
      icon: 'clipboard-outline',
      name: 'Registro de Asistencia',
      redirecTo: '/reg-asistencia'
    }, {
      icon: 'calendar-outline',
      name: 'Horario de Clases',
      redirecTo: '/hde-clases'
    }, {
      icon: 'calendar-number-outline',
      name: 'Fechas con Feriados',
      redirecTo: '/feriados-pro'
    }];
    this.componentes1 = [{
      icon: 'exit-outline',
      name: 'Cerrar sesion',
      redirecTo: '/inicio'
    }];
    this.alumnocomponentes = [{
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/alumno'
    }, {
      icon: 'book-outline',
      name: 'Mis Clases',
      redirecTo: '/misclases'
    }, {
      icon: 'home-outline',
      name: 'Escanear QR',
      redirecTo: '/escanearqr'
    }, {
      icon: 'calendar-number-outline',
      name: 'Fechas con Feriados',
      redirecTo: '/feriados-alu'
    }];
    this.alumnocomponentes1 = [{
      icon: 'exit-outline',
      name: 'Cerrar sesion',
      redirecTo: '/inicio'
    }];
  }

  cerrarSesionAlu() {
    console.log(localStorage.clear());
    localStorage.setItem('sesnop', 'true');
    this.menuController.enable(false, 'second');
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const storage = yield _this.storage.create();
      _this._storage = storage;
    })();
  }

  alertaalu() {
    var _this2 = this;

    return (0,C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header: '¿Estas Seguro?',
        message: 'Al cerrar la sesión volvera al inicio de registro.',
        buttons: [{
          text: 'cancelar',
          role: 'cancel',
          handler: () => {
            _this2.handlerMessage = 'Cancelo el salir de la sesión';
          }
        }, {
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            _this2.handlerMessage = 'Confirmo el cerrar la sesión, necesitara Abrir la cuenta nuevamente';

            _this2.cerrarSesionAlu();

            _this2.routerLink.navigate(['/inicio']);
          }
        }]
      });
      yield alert.present();
    })();
  }

  cerrarSesionPro() {
    console.log(localStorage.clear());
    localStorage.setItem('sesnop', 'true');
    this.menuController.enable(false, 'first');
  }

  alertapro() {
    var _this3 = this;

    return (0,C_Users_56941_Dropbox_PC_Desktop_Ionic_sandbox_PGY4121_Experiencia1_005D_Caso_A_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: '¿Estas Seguro?',
        message: 'Al cerrar la sesión volvera al inicio de registro.',
        buttons: [{
          text: 'cancelar',
          role: 'cancel',
          handler: () => {
            _this3.handlerMessage = 'Cancelo el salir de la sesión';
          }
        }, {
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            _this3.handlerMessage = 'Confirmo el cerrar la sesión, necesitara Abrir la cuenta nuevamente';

            _this3.cerrarSesionPro();

            _this3.routerLink.navigate(['/inicio']);
          }
        }]
      });
      yield alert.present();
    })();
  }

};

AppComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-qrcode */ 9180);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ 7566);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _services_feriado_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/feriado.service */ 6950);






// import{ Camera } from '@awesome-cordova-plugins/camera/ngx';
// import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@awesome-cordova-plugins/camera-preview/ngx';








let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__.QRCodeModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__.IonicStorageModule.forRoot({
                name: 'mydb',
                driverOrder: [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Drivers.IndexedDB, _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Drivers.LocalStorage]
            }),
        ],
        providers: [
            // CameraPreview,
            // Camera,
            _services_feriado_service__WEBPACK_IMPORTED_MODULE_3__.FeriadoService,
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 6950:
/*!*********************************************!*\
  !*** ./src/app/services/feriado.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeriadoService": () => (/* binding */ FeriadoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let FeriadoService = class FeriadoService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        this.corsSolution = 'https://cors-anywhere.herokuapp.com/'; //don't work ERROR 403
        this.restapiURL = 'https://apis.digital.gob.cl/fl/feriados';
    }
    getFeriados() {
        return this.http.get(`${this.restapiURL}/2022`);
    }
};
FeriadoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
FeriadoService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], FeriadoService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-26477881_js-node_modules_ionic_core_dist_esm_t-6bed99",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-26477881_js-node_modules_ionic_core_dist_esm_t-6bed99",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".par {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n\n  <ion-menu contentId=\"main\" menuId=\"first\" side=\"start\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menú</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n        <ion-menu-toggle *ngFor=\"let c of componentes\">\n          <ion-item [routerLink]=\"c.redirecTo\" detail=true>\n             <ion-icon slot=\"start\" [name]=\"c.icon\" color=\"primary\"></ion-icon>\n             {{ c.name }}\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle *ngFor=\"let d of componentes1\">  \n          <ion-item (click)=\"alertapro()\" detail=true>\n            <ion-button  expand=\"full\" size=\"default\" fill=\"outline\" shape=\"round\">\n              <ion-icon  slot=\"start\" [name]=\"d.icon\" color=\"primary\"></ion-icon>\n              {{ d.name }}\n            </ion-button>\n         </ion-item>\n        </ion-menu-toggle>\n        </ion-list>\n\n\n    </ion-content>\n  </ion-menu>\n\n  <ion-menu contentId=\"main2\" menuId=\"second\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menú Alumno</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n   \n      <ion-list>\n        <ion-menu-toggle *ngFor=\"let c of alumnocomponentes\">\n          <ion-item [routerLink]=\"c.redirecTo\" detail=true>\n             <ion-icon slot=\"start\" [name]=\"c.icon\" color=\"primary\"></ion-icon>\n             {{ c.name }}\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle *ngFor=\"let d of alumnocomponentes1\">  \n          <ion-item (click)=\"alertaalu()\" detail=true>\n            <ion-button  expand=\"full\" size=\"default\" fill=\"outline\" shape=\"round\">\n              <ion-icon  slot=\"start\" [name]=\"d.icon\" color=\"primary\"></ion-icon>\n              {{ d.name }}\n            </ion-button>\n         </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n\n\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n  <ion-router-outlet id=\"main2\"></ion-router-outlet>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map