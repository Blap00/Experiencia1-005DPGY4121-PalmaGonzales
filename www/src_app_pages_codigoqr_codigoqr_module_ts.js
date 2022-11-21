"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_codigoqr_codigoqr_module_ts"],{

/***/ 800:
/*!***********************************************************!*\
  !*** ./src/app/pages/codigoqr/codigoqr-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigoqrPageRoutingModule": () => (/* binding */ CodigoqrPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _codigoqr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigoqr.page */ 528);




const routes = [
    {
        path: '',
        component: _codigoqr_page__WEBPACK_IMPORTED_MODULE_0__.CodigoqrPage
    }
];
let CodigoqrPageRoutingModule = class CodigoqrPageRoutingModule {
};
CodigoqrPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CodigoqrPageRoutingModule);



/***/ }),

/***/ 2707:
/*!***************************************************!*\
  !*** ./src/app/pages/codigoqr/codigoqr.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigoqrPageModule": () => (/* binding */ CodigoqrPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _codigoqr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigoqr-routing.module */ 800);
/* harmony import */ var _codigoqr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codigoqr.page */ 528);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-qrcode */ 9180);








let CodigoqrPageModule = class CodigoqrPageModule {
};
CodigoqrPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__.QRCodeModule,
            _codigoqr_routing_module__WEBPACK_IMPORTED_MODULE_0__.CodigoqrPageRoutingModule
        ],
        declarations: [_codigoqr_page__WEBPACK_IMPORTED_MODULE_1__.CodigoqrPage]
    })
], CodigoqrPageModule);



/***/ }),

/***/ 528:
/*!*************************************************!*\
  !*** ./src/app/pages/codigoqr/codigoqr.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigoqrPage": () => (/* binding */ CodigoqrPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _codigoqr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigoqr.page.html?ngResource */ 4280);
/* harmony import */ var _codigoqr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codigoqr.page.scss?ngResource */ 3338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_usuario_alu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario-alu.service */ 1754);







let CodigoqrPage = class CodigoqrPage {
    constructor(menuController, alertCtrl, navController, usuarioservice) {
        this.menuController = menuController;
        this.alertCtrl = alertCtrl;
        this.navController = navController;
        this.usuarioservice = usuarioservice;
        this.usua = {
            id: Date.now(),
            nom: '',
            Class: '',
            Horar: '',
            car: ''
        };
        this.usuariodat = [];
        this.usuario = {
            id: Date.now(),
            nom: '',
            car: '',
            hor: '',
        };
        this.usuarios = '';
        this.asigna = [
            {
                NomASI: 'APP Movil',
                ValASI: 1,
            },
            {
                NomASI: 'Cal Software',
                ValASI: 2,
            },
            {
                NomASI: 'INGLES Intermedio',
                ValASI: 3,
            },
            {
                NomASI: 'ARQ SOFTWARE',
                ValASI: 4,
            },
            {
                NomASI: 'EST Descriptiva',
                ValASI: 5,
            },
        ];
        this.hora = [
            {
                Horario: '11:31-13:50',
                ValHora: 1,
            },
            {
                Horario: '14:00-15:30',
                ValHora: 2,
            },
            {
                Horario: '16:00-17:20',
                ValHora: 3,
            },
            {
                Horario: '17:30-18:50',
                ValHora: 4,
            },
            {
                Horario: '19:00-20:00',
                ValHora: 5,
            },
        ];
    }
    ngOnInit() {
        this.usuarioservice.getDatos().then(datos => {
            this.usuariodat = datos;
            console.log(datos);
        });
        if (localStorage.getItem('sesnop')) {
            localStorage.setItem('ingresapro', 'true');
            localStorage.removeItem('sesnop');
            localStorage.removeItem('ingresaalu');
        }
        else if (localStorage.getItem('ingresaalu')) {
            localStorage.removeItem('sesnop');
            this.navController.navigateRoot(['/alumno']);
        }
        else {
            localStorage.removeItem('sesnop');
            localStorage.removeItem('ingresaalu');
            localStorage.setItem('ingresapro', 'true');
        }
    }
    generarQR() {
        console.log(this.usuariodat);
        for (let obj of this.usuariodat) {
            // this.usua.nom=obj.usuario.toString()
            if (!obj.semestre) {
                if (obj.usuario == this.usua.nom) {
                    this.usua.Class;
                    this.usua.Horar;
                    this.usua.car = obj.carrera.toString();
                    this.usua.nom;
                    this.usua.id;
                    this.qrCodeString = this.usua.Class + ' ' + this.usua.Horar + ' ' + this.usua.car + ' ' + this.usua.nom + ' ' + this.usua.id;
                    // if(obj.usuario==this.usua.Usuario && obj.contrasenna==this.usua.Password){
                    // this.usuario.nom=obj.usuario.toString()    
                    // this.usuario.car=obj.carrera.toString()
                    // this.usuario.sem=obj.semestre.toString()
                    // this.usuario.id=obj.id;  
                    // this.usuarios= this.usuario.nom.toString() + this.usuario.car.toString() + this.usuario.sem.toString()
                    // console.log("Aplicaciones Moviles")
                    // this.qrCodeString=this.usuario.nom.toString() +' '+ this.usuario.car.toString() +' '+ this.usuario.sem.toString()+' '+this.usuario.id
                    // console.log(this.qrCodeString)
                    // break;
                    // }
                }
            }
            else {
                this.usuario.nom = "NOEXISTE";
                this.usuario.car = "NOEXISTE";
                this.usuario.id = 0;
            }
        }
    }
    VerQR() {
        this.scannedResult = this.qrCodeString;
    }
    mostrarMenu() {
        this.menuController.open('first');
        this.menuController.enable(true, 'first');
        this.menuController.enable(false, 'second');
    }
};
CodigoqrPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: src_app_services_usuario_alu_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioAluService }
];
CodigoqrPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-codigoqr',
        template: _codigoqr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_codigoqr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CodigoqrPage);



/***/ }),

/***/ 3338:
/*!**************************************************************!*\
  !*** ./src/app/pages/codigoqr/codigoqr.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  background-color: #f7d547;\n}\n\nion-content {\n  background-color: var(--ion-color-mycolor-shade);\n}\n\n.center {\n  margin-left: 45px;\n  padding-top: 11%;\n  padding-left: 16%;\n  padding-bottom: 0vw;\n  width: 40%;\n  height: 16%;\n}\n\n.left {\n  width: 9%;\n  position: absolute;\n  top: 1px;\n  right: 3px;\n}\n\n.titulo {\n  margin-top: -10px;\n  margin-right: 25px;\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-content {\n  --ion-background-color:#012840;\n}\n\nion-title {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  color: black;\n}\n\n.imagenes {\n  display: flex;\n}\n\n.imagenes img:first-child {\n  margin-right: 10px;\n}\n\n.texto {\n  text-align: center;\n  color: black;\n  font-size: 15px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-card {\n  background-color: var(--ion-color-mycolor);\n}\n\nion-icon {\n  color: black;\n}\n\n.ttexto {\n  text-align: center;\n  color: white;\n  font-size: 20px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-footer {\n  background-color: var(--ion-color-mycolor);\n}\n\n.textoFooter {\n  color: black;\n  font-size: 10px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nimg {\n  display: block;\n  margin: 0px auto;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGlnb3FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnREFBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFJSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNIQUFBO0FBR0o7O0FBREE7RUFFSSw4QkFBQTtBQUdKOztBQURBO0VBQ0ksc0hBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0FBS0o7O0FBRkU7RUFDRSxrQkFBQTtBQUtKOztBQUhFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNIQUFBO0FBTUo7O0FBSEE7RUFDSSwwQ0FBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtBQU9KOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNIQUFBO0FBUUo7O0FBTEE7RUFDSSwwQ0FBQTtBQVFKOztBQU5BO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxzSEFBQTtBQVNKOztBQVBBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFVSiIsImZpbGUiOiJjb2RpZ29xci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkNTQ3O1xufVxuaW9uLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15Y29sb3Itc2hhZGUpO1xufVxuLmNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgcGFkZGluZy10b3A6IDExJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHZ3O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiAxNiU7XG4gIH1cbi5sZWZ0e1xuICAgIHdpZHRoOiA5JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxcHg7XG4gICAgcmlnaHQ6IDNweDtcbn1cblxuXG4udGl0dWxve1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cbmlvbi1jb250ZW50e1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMDEyODQwO1xufVxuaW9uLXRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLmltYWdlbmVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICAuaW1hZ2VuZXMgaW1nOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLnRleHRve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIH1cblxuaW9uLWNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15Y29sb3IpO1xufVxuaW9uLWljb257XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLnR0ZXh0b3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuXG59XG5pb24tZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1teWNvbG9yKTtcbn1cbi50ZXh0b0Zvb3RlcntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5pbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgfSJdfQ== */";

/***/ }),

/***/ 4280:
/*!**************************************************************!*\
  !*** ./src/app/pages/codigoqr/codigoqr.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-header>\n  <ion-toolbar color=\"mycolor\">\n     <ion-buttons slot=\"start\">\n       <ion-button (click)=\"mostrarMenu()\">\n         <ion-icon class=\"menu\" slot=\"start\" name=\"menu-outline\"></ion-icon>\n        </ion-button>\n     </ion-buttons>\n    <ion-title class=\"titulo\">RegistrAPP</ion-title>\n    <div class=\"imagenes\">\n      <img class=\"center\" src=\"/assets/Duoc.png\">\n      <img class=\"left\" src=\"/assets/ScanMe.jpeg\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <p class=\"ttexto\">Codigo QR</p> -->\n  <ion-card class=\"ion-text-center\">\n    <form #formulario=\"ngForm\">\n      <ion-item>\n        <ion-label position=\"floating\">Usuario<ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input name=\"nom\"[(ngModel)]=\"usua.nom\" placeholder=\"Ingrese su nombre de Usuario\" required type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label  position=\"floating\" color=\"primary\" >Asignatura: <ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-select required color=\"blanquito\" name=\"Class\"  placeholder=\"ASIGNATURA:\" [(ngModel)]=\"usua.Class\">\n            <ion-select-option color=\"primary\" *ngFor=\"let c of asigna\"  [value]=\"[c.NomASI]\">{{c.NomASI}}</ion-select-option>          </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label  position=\"floating\" color=\"primary\" >Horario: <ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-select required color=\"blanquito\" name=\"Horar\"  placeholder=\"seleccione su Horario\" [(ngModel)]=\"usua.Horar\">\n            <ion-select-option color=\"primary\" *ngFor=\"let c of hora\"  [value]=\"[c.Horario]\">{{c.Horario}}</ion-select-option>          </ion-select>\n      </ion-item>\n        <qrcode [qrdata]=\"qrCodeString\" [width]=\"256\" [errorCorrectionLevel]=\"'M'\"></qrcode>\n        <ion-button [disabled] =\"formulario.invalid\" (click)=\"generarQR()\" expand=\"block\" fill=\"outline\" shape=\"round\">\n          generarQR\n        </ion-button>\n      <ion-button (click)=\"VerQR()\" expand=\"block\" fill=\"outline\" shape=\"round\">\n        ver QR\n      </ion-button>\n    </form>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">Scan Result: {{scannedResult}}</ion-label>\n    </ion-item>\n\n    <!-- <p class=\"texto\">Codigo del QR: 9502</p>\n    <p class=\"texto\">indique al alumno que escanee este codigo qr, de lo contrario utilize el codigo debajo de este -->\n\n  </ion-card>\n\n\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_codigoqr_codigoqr_module_ts.js.map