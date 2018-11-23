webpackJsonp([11],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Providers_ubicacion__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider_register_prov_register_prov__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { AngularFireDatabase } from 'angularfire2/database';






var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams, _ubicacion) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ubicacion = _ubicacion;
        this._ubicacion.iniciar_localizacion();
    }
    WelcomePage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* Register */]);
    };
    WelcomePage.prototype.goToRegPro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__provider_register_prov_register_prov__["a" /* RegisterProvPage */]);
    };
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/welcome/welcome.html"*/'<ion-content background class="vertical-align-content background">\n    <div class="hue"> \n    <ion-grid>\n        <ion-row>\n            <ion-col text-center col-12 padding>\n                <h1>La Batanga</h1>\n                <span>Todo lo que necesitas para tu evento</span>\n            </ion-col>\n        </ion-row>\n        <ion-row  padding class="bottom">\n            <ion-col>\n                <ion-list>\n                    <ion-item class="back-nothing">\n                        <button ion-button color="primary" block large (click)="goToLogin()">Iniciar sesi&oacute;n con email</button>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-center>\n                <h3>Registrate</h3>\n                <div text-center>\n                    <a href="#" block color="black" (click)="goToRegister()">\n                        Como Usuario\n                    </a>\n                    |\n                    <a href="#" block color="black" (click)="goToRegPro()">\n                        Como Proveedor\n                    </a>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid> \n</div>\n</ion-content>'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__Providers_ubicacion__["a" /* UbicacionSVC */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_md5_typescript__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var Register = /** @class */ (function () {
    function Register(fire, fbuild, db, navCtrl, fcm, plat) {
        this.fire = fire;
        this.fbuild = fbuild;
        this.db = db;
        this.navCtrl = navCtrl;
        this.fcm = fcm;
        this.plat = plat;
        this.PASSWORD_REGEX = ".*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).*";
        this.formgroup = fbuild.group({
            Email: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].email])],
            Name: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(3)])],
            Gender: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            Phone: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            BirthDate: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            LastName: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            LastName2: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            Password: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(12), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern(this.PASSWORD_REGEX)])],
            PasswordConfirm: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
        });
        this.Name = this.formgroup.controls['Name'];
        this.Phone = this.formgroup.controls['Phone'];
        this.Name = this.formgroup.controls['Name'];
        this.LastName = this.formgroup.controls['LastName'];
        this.LastName2 = this.formgroup.controls['LastName2'];
        this.Email = this.formgroup.controls['Email'];
        this.Password = this.formgroup.controls['Password'];
        this.BirthDate = this.formgroup.controls['BirthDate'];
        this.Gender = this.formgroup.controls['Gender'];
    }
    Register.prototype.registerEvent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, token, _a, dUser, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.getAge() >= 18)) return [3 /*break*/, 9];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, , 9]);
                        return [4 /*yield*/, this.fire.auth.createUserWithEmailAndPassword(this.Email.value, this.Password.value)];
                    case 2:
                        data = _b.sent();
                        if (!this.plat.is("cordova")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fcm.getToken()];
                    case 3:
                        _a = (_b.sent());
                        return [3 /*break*/, 5];
                    case 4:
                        _a = null;
                        _b.label = 5;
                    case 5:
                        token = _a;
                        return [4 /*yield*/, this.CreateUser(data, token)];
                    case 6:
                        dUser = _b.sent();
                        return [4 /*yield*/, this.fire.auth.currentUser.sendEmailVerification()];
                    case 7:
                        _b.sent();
                        alert("Se ha registrado correctamente, por favor confirme su cuenta con el correo que se le envio");
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                        return [3 /*break*/, 9];
                    case 8:
                        err_1 = _b.sent();
                        switch (err_1.code) {
                            case "auth/invalid-email":
                                alert("No es un correo valido");
                                break;
                            case "auth/email-already-in-use":
                                alert("El correo se encuentra en uso");
                                break;
                            default:
                                alert("Ha ocurrido un error, contacte al administrador de la aplicación" + err_1);
                                break;
                        }
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    Register.prototype.CreateUser = function (data, token) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = {
                            Email: this.Email.value,
                            FirstName: this.Name.value,
                            LastName: this.LastName.value,
                            LastName2: this.LastName2.value,
                            Phone: this.Phone.value,
                            Gender: this.Gender.value,
                            Ages: this.getAge(),
                            imgUrl: "https://www.gravatar.com/avatar/" + __WEBPACK_IMPORTED_MODULE_0_md5_typescript__["a" /* Md5 */].init(this.Email.value)
                        };
                        if (token)
                            user[token] = token;
                        return [4 /*yield*/, this.db.collection("Users").add(user)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Register.prototype.getAge = function () {
        var today = new Date();
        var bd = this.BirthDate.value.split("-");
        var birthDate = new Date(bd[0], bd[1], bd[2]);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
    Register = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/register/register.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Registrarse</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="formgroup" (ngSubmit)="registerEvent()">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Correo Electrónico</ion-label>\n\n        <ion-input value="" type="email" formControlName="Email"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="Email.errors && Email.dirty">\n\n        <p *ngIf="Email.hasError(\'required\')">El Campo es requerido</p>\n\n        <p *ngIf="Email.hasError(\'email\')">El Correo debe ser valido </p>\n\n        <p *ngIf="Email.hasError(\'invalid\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Nombre(s)</ion-label>\n\n        <ion-input value="" type="text" formControlName="Name"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="Name.errors && Name.dirty">\n\n        <p *ngIf="Name.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Apellido Paterno</ion-label>\n\n        <ion-input value="" type="text" formControlName="LastName"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="LastName.errors && LastName.dirty">\n\n        <p *ngIf="LastName.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Apellido Materno</ion-label>\n\n        <ion-input value="" type="text" formControlName="LastName2"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="LastName2.errors && LastName2.dirty">\n\n        <p *ngIf="LastName2.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Celular/Telefono</ion-label>\n\n        <ion-input value="" type="tel" formControlName="Phone"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="Phone.errors && Phone.dirty">\n\n        <p *ngIf="Phone.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>\n\n          Genero\n\n        </ion-label>\n\n        <ion-select formControlName="Gender">\n\n          <ion-option value="M">Hombre</ion-option>\n\n          <ion-option value="F">Mujer</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="Gender.errors && Gender.dirty">\n\n        <p *ngIf="Gender.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Fecha de Nacimiento</ion-label>\n\n        <ion-datetime displayFormat="DD/MM/YYYY" formControlName="BirthDate"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item *ngIf="BirthDate.errors && BirthDate.dirty">\n\n        <p *ngIf="BirthDate.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Contraseña</ion-label>\n\n        <ion-input type="password" formControlName="Password" [pattern]="PASSWORD_REGEX"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="Password.errors && Password.dirty">\n\n        <p *ngIf="Password.hasError(\'pattern\')">El Campo debe tener almenos una letra mayuscula un numero y un caracter especial</p>\n\n        <p *ngIf="Password.hasError(\'required\')">El Campo es requerido</p>\n\n        <p *ngIf="Password.hasError(\'minlength\')">El minimo de caracteres es 8</p>\n\n        <p *ngIf="Password.hasError(\'maxlength\')">El maximo de caracteres es 12</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Confirmar Contraseña</ion-label>\n\n        <ion-input type="password" formControlName="PasswordConfirm"></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n    <div padding>\n\n      <!-- <button ion-button block color="black" (click)="registerEvent();">Registrarse</button> -->\n\n      <button ion-button full color="primary" [disabled]="!formgroup.valid" style="margin-top: 20px;" type="submit">Registrarse</button>\n\n\n\n    </div>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/register/register.html"*/,
            selector: "page-register"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], Register);
    return Register;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyCclB1fCV35f0OM3LS2cslany16D-4iPPw",
    authDomain: "labatanga-db15e.firebaseapp.com",
    databaseURL: "https://labatanga-db15e.firebaseio.com",
    projectId: "labatanga-db15e",
    storageBucket: "labatanga-db15e.appspot.com",
    messagingSenderId: "227820216417"
};
//# sourceMappingURL=credentials.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSCV; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserSCV = /** @class */ (function () {
    function UserSCV(afDB) {
        this.afDB = afDB;
    }
    UserSCV.prototype.getUser = function () {
        return this.User;
    };
    UserSCV.prototype.Dispose = function () {
        this.User = null;
    };
    UserSCV.prototype.setUser = function (uid) {
        this.User = this.afDB.doc("Users/" + uid).valueChanges();
        return this.User;
    };
    UserSCV = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], UserSCV);
    return UserSCV;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvMainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProvMainPage = /** @class */ (function () {
    function ProvMainPage(navCtrl, nparam, afDB) {
        this.navCtrl = navCtrl;
        this.nparam = nparam;
        this.afDB = afDB;
        this.provProfileRoot = 'ProvProfilePage';
        this.provRequestRoot = 'ProvRequestPage';
        this.provHistoryRoot = 'ProvHistoryPage';
        this.provSettingsRoot = 'ProvSettingsPage';
        this.uid = nparam.get("uid");
        this.Contracts = this.afDB.list("Providers/" + this.uid + "/Contracts", function (ref) { return ref.orderByChild("composeview").equalTo("A_false"); })
            .valueChanges();
    }
    ProvMainPage.prototype.getContracts = function (Contracts) {
        if (Contracts != null)
            return Contracts.length;
    };
    ProvMainPage.prototype.getUser = function () {
    };
    ProvMainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-prov-main',template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/provider/prov-main/prov-main.html"*/'<ion-tabs>\n    <ion-tab [root]="provProfileRoot" [rootParams]="uid" tabTitle="Perfil" tabIcon="person"></ion-tab>\n    <ion-tab [root]="provRequestRoot" [rootParams]="uid" tabTitle="Solicitudes" tabIcon="information-circle" tabBadgeStyle="danger" [tabBadge]="getContracts((Contracts|async))"></ion-tab>\n    <ion-tab [root]="provHistoryRoot" [rootParams]="uid" tabTitle="Historial" tabIcon="md-paper"></ion-tab>\n    <ion-tab [root]="provSettingsRoot"[rootParams]="uid" tabTitle="Configuraciones" tabIcon="md-settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/provider/prov-main/prov-main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["AngularFireDatabase"]])
    ], ProvMainPage);
    return ProvMainPage;
}());

//# sourceMappingURL=prov-main.js.map

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 213;

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/categories/categories.module": [
		557,
		0
	],
	"../pages/chat/chat.module": [
		558,
		8
	],
	"../pages/config/config.module": [
		559,
		3
	],
	"../pages/contract-details/contract-details.module": [
		560,
		10
	],
	"../pages/home/home.module": [
		561,
		7
	],
	"../pages/main/main.module": [
		270
	],
	"../pages/profile/profile.module": [
		276
	],
	"../pages/provider/prov-history/prov-history.module": [
		562,
		6
	],
	"../pages/provider/prov-main/prov-main.module": [
		563,
		9
	],
	"../pages/provider/prov-profile/prov-profile.module": [
		564,
		5
	],
	"../pages/provider/prov-request/prov-request.module": [
		565,
		1
	],
	"../pages/provider/prov-settings/prov-settings.module": [
		566,
		2
	],
	"../pages/provider/provider-profile/provider-profile.module": [
		567,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 255;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProveedorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProveedorService = /** @class */ (function () {
    function ProveedorService() {
    }
    ProveedorService.prototype.getByType = function (type) {
        this.ListProveedores;
    };
    ProveedorService.prototype.setList = function (prov) {
        return this.ListProveedores = prov;
    };
    ProveedorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ProveedorService);
    return ProveedorService;
}());

//# sourceMappingURL=proveedores.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */]),
            ]
        })
    ], MainPageModule);
    return MainPageModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, toast, afDB, afa, navParams) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.afDB = afDB;
        this.afa = afa;
        this.navParams = navParams;
        this.profileRoot = 'ProfilePage';
        this.homeRoot = 'HomePage';
        this.categoriesRoot = 'CategoriesPage';
        this.configRoot = 'ConfigPage';
        this.requestRoot = 'RequestPage';
        this.uid = navParams.get("uid");
        this.Contracts = this.afDB.collection("Users/" + this.uid + "/Contracts/"
        // ref => ref.orderByChild("status").equalTo("A")
        ).valueChanges();
    }
    MainPage.prototype.ionViewDidEnter = function () {
    };
    MainPage.prototype.logout = function () {
        var _this = this;
        this.afa.auth.signOut().then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
        });
    };
    MainPage.prototype.getContracts = function (contracts) {
        if ((contracts != null || contracts != undefined))
            return contracts.filter(function (item) { return !item.has_viewed; }).length;
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/main/main.html"*/'<ion-tabs color="primary">\n    <ion-tab [root]="profileRoot" [rootParams]="uid" tabTitle="Perfil"  tabIcon="person"></ion-tab>\n    <ion-tab [root]="homeRoot" [rootParams]="uid" tabTitle="Top" tabIcon="md-star"></ion-tab>\n    <ion-tab [root]="requestRoot" [rootParams]="uid" tabTitle="Solicitudes" tabIcon="md-paper" tabBadgeStyle="danger" [tabBadge]="getContracts((Contracts|async))"></ion-tab>\n    <ion-tab [root]="categoriesRoot" tabTitle="Categorias" tabIcon="list"></ion-tab>\n    <ion-tab [root]="null" tabTitle="LogOut" tabIcon="list"  (ionSelect)="logout()"> ></ion-tab>\n    \n    <!-- <ion-tab [root]="configRoot" tabTitle="Configuracion" tabIcon="settings"></ion-tab> -->\n</ion-tabs>\n'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/main/main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UbicacionSVC; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UbicacionSVC = /** @class */ (function () {
    function UbicacionSVC(geolocation, nativeGeocoder) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
    }
    UbicacionSVC.prototype.iniciar_localizacion = function () {
        var _this = this;
        var options = {
            timeout: 5 * (1000 * 60),
            enableHighAccuracy: true
        };
        var watch = this.geolocation.watchPosition(options);
        watch.subscribe(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
            if (data.coords == null) {
                return;
            }
            _this.coords = data.coords;
            _this.nativeGeocoder.reverseGeocode(_this.coords.latitude, _this.coords.longitude)
                .then(function (result) {
                return console.log(JSON.stringify(result));
            })
                .catch(function (error) { return console.log("error in ubicacion provider " + error); });
        });
    };
    UbicacionSVC = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], UbicacionSVC);
    return UbicacionSVC;
}());

//# sourceMappingURL=ubicacion.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Auth = /** @class */ (function () {
    function Auth(fire) {
        this.fire = fire;
    }
    Auth.prototype.registerEvent = function (data, fn) {
        return __awaiter(this, void 0, void 0, function () {
            var user, smail, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.fire.auth.createUserWithEmailAndPassword(data.Email, data.Password)];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, user.sendEmailVerification()];
                    case 2:
                        smail = _a.sent();
                        fn(smail);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        switch (err_1.code) {
                            case "auth/invalid-email":
                                alert("No es un correo valido");
                                break;
                            case "auth/email-already-in-use":
                                alert("El correo ya se encuentra en uso");
                                break;
                            default:
                                alert("Hubo un error, intente mas tarde");
                                break;
                        }
                        console.log(err_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Auth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], Auth);
    return Auth;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, afDB, lCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.lCtrl = lCtrl;
        this.uid = navParams.data;
        var spinload = this.lCtrl.create({
            content: "Cargando, por favor espere...",
            spinner: "dots"
        });
        spinload.present();
        this.user = afDB.doc("/Users/" + this.uid).valueChanges();
        var sub = this.user.subscribe(function (s) {
            spinload.dismissAll();
        });
    }
    ProfilePage.prototype.getCountContracted = function (con) {
        return con == null ? 0 : Object.keys(con).length;
    };
    ;
    ProfilePage.prototype.getComments = function (com) {
        return com == null ? 0 : Object.keys(com).length;
    };
    ;
    ProfilePage.prototype.goToDetails = function (user) {
        // this.navCtrl.pop(EditProfile,{user:user});
    };
    ProfilePage.prototype.getProviders = function (last) {
        var self = this.afDB;
        if (last != null) {
            return self.doc("/Providers/" + Object.keys(last))
                .valueChanges();
        }
    };
    ProfilePage.prototype.saveProfile = function (user) {
        this.afDB.doc("/Users/" + this.uid).update({
            Phone: user.Phone,
            img: user.img
        }).catch(function (c) {
            alert("No se a podido guardar la información");
        });
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    var _a, _b, _c, _d;
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" color="primary">\n     \n\n    <ion-title>Perfil</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="saveProfile(user)">\n        <ion-icon name="md-cloud-upload"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding color="black">\n  <!-- <div id="profile-bg" [style.backgroundImage]="\'url(\' + (user|async)?.images?.two + \')\' "></div> -->\n  <div id="profile-bg" style="background:url(\'../assets/imgs/profile/back-user2.png\'); background-size: cover;"></div>\n  <div id="content">\n    <div id="profile-info">\n      <img id="profile-image" [src]="(user|async)?.img">\n      <h3 id="profile-name">\n        {{ (user | async)?.FirstName + \' \' +(user | async)?.LastName + \' \'+ (user | async)?.LastName2 }}\n      </h3>\n      <h4>\n          <ion-icon name="mail"></ion-icon> {{ (user | async)?.Email }}\n      </h4>\n      <h4>\n          <ion-icon name="phone"></ion-icon>{{ (user | async)?.Phone }} \n      </h4>\n    </div>\n    <div>\n      <ion-grid>\n        <ion-row style="text-align: center;color:#000">\n          <ion-col>\n            <label>\n              {{ getCountContracted((user | async)?.Contracted)}}\n            </label>\n            <br>\n            <label>\n              Contrataciones\n            </label>\n          </ion-col>\n          <ion-col>\n            <label>\n              {{getComments((user | async)?.Comments)}}\n            </label>\n            <br>\n            <label>\n              Comentarios\n            </label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n  <!-- \n  <ion-grid>\n    <ion-row class="text-center">\n      <ion-col col-4> \n      </ion-col>\n      <ion-col col-4>\n        <img src="{{(user|async)?.img}}" alt="" class="profile-img">\n      </ion-col>\n      <ion-col col-4> \n      </ion-col>\n    </ion-row>\n    <ion-row class="text-center">\n      <ion-col></ion-col>\n      <ion-col col-10>\n        <h4>{{ (user | async)?.FirstName + \' \' +(user | async)?.LastName + \' \'+ (user | async)?.LastName2 }}</h4>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n    <ion-row class="text-center">\n      <ion-col col-2></ion-col>\n      <ion-col col-8>\n        <ion-icon name="mail"></ion-icon> {{ (user | async)?.Email }}\n      </ion-col>\n      <ion-col col-2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-8 class="text-center">\n          <ion-icon name="phone"></ion-icon>\n          <ion-input type="text" [ngModel]="(user | async)?.Phone" ></ion-input>\n       \n      </ion-col>\n      <ion-col col-2></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col col-10>\n        <!-- <button ion-button block color="black" (click)="goToDetails(user)">Más Detalle</button> \n      \n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row> \n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col>\n        <div class="rounded-last-view" *ngFor="let prov of  getProviders((user|async)?.LastView) |async" >\n          {{(prov|async)?.CompanyName}} \n         </div> \n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content> \n<ion-footer>\n  <div color="black" >\n    <ion-row>\n      <ion-col text-center>\n        <div class="primary">\n        <h5>{{ getCountContracted((user | async)?.Contracted) }}</h5>\n        </div>\n        Contrataciones\n      </ion-col>\n      <ion-col></ion-col>\n      <ion-col text-center>\n        <div>\n         <h5>{{ getComments((user | async)?.Comments) }}</h5>\n        </div>\n        Comentarios\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-footer> -->'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["a" /* AngularFirestore */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_proveedores__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_modal_modal_controller__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comments_comments__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_alert_alert_controller__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contract_details_contract_details__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, subs, afDB, prov, navParams, modalCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.subs = subs;
        this.afDB = afDB;
        this.prov = prov;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.Numero = 0;
        this.uid = navParams.get("uid");
        this.DataRequest = navParams.get("DataRequest");
        //TODO: meter los datos del usuario en un servicio
        this.UserID = navParams.get("UserID");
        var subUser = afDB.doc("Users/" + this.UserID).valueChanges().subscribe(function (e) {
            _this.user = e;
        });
        var lprov = afDB.doc("Providers/" + this.uid);
        this.Provider = lprov.valueChanges();
        var subProvider = this.Provider.subscribe(function (s) {
            _this.prove = s;
        });
        var sub = lprov.snapshotChanges().subscribe(function (e) {
            _this.isRating = e.payload.id == _this.UserID;
        });
    }
    DetailsPage.prototype.getTotalComments = function (Comments) {
        return Comments != undefined ?
            Object.keys(Comments).length : 0;
    };
    DetailsPage.prototype.OnClickComments = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__comments_comments__["a" /* CommentsPage */], { uid: this.uid });
    };
    DetailsPage.prototype.onContract = function (prov) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__contract_details_contract_details__["a" /* ContractDetailsPage */], {
            uid: this.uid,
            DataRequest: this.DataRequest
        });
        profileModal.present();
        this.afDB.collection("Users/" + this.UserID + "/Contracts/" + this.prove.uid)
            .add({
            state: "A",
            has_viewed: false,
            timestamp: Date.now()
        });
        var alert = this.alertCtrl.create({
            title: 'Contratar',
            subTitle: 'Se ha enviado un mensaje al proveedor',
            buttons: ['Aceptar']
        });
        alert.present();
        //TODO Send Mail
    };
    DetailsPage.prototype.checkIfRating = function (prov) {
        return prov.Rating.indexOf(this.UserID) !== -1 ? true : false;
    };
    DetailsPage.prototype.createRating = function (rating) {
        if (rating == undefined)
            rating = [0];
        var total = Object.keys(rating).length;
        var sum = Object.keys(rating)
            .reduce(function (sum, key) {
            return sum + parseFloat(rating[key].Value);
        }, 0);
        var avgRating = sum / total;
        var items = [];
        for (var i = 1; i <= 5; i++)
            items.push(i <= avgRating ? "md-star" : "md-star-outline");
        return items;
    };
    DetailsPage.prototype.RateProvider = function (item) {
        item++;
        var lastRating = this.afDB.doc("Providers/" + this.uid + "/rating/" + this.UserID);
        if (lastRating != undefined || lastRating != null)
            lastRating.update({ Value: item, timestamp: new Date() });
        else {
            this.afDB.doc("Providers/" + this.uid + "/rating/").set({
                Value: item,
                timestamp: new Date()
            });
        }
        var alert = this.alertCtrl.create({
            title: 'Rating',
            subTitle: 'ha Calificado con ' + item + ' estrella' + (item == 1 ? '' : 's'),
            buttons: ['Aceptar']
        });
        alert.present();
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/details/details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{(Provider|async)?.CompanyName}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-slides pager autoplay="5000" loop="true" speed="3000">\n\n    <ion-slide style="background-image:url(\'http://c8.alamy.com/comp/D031R1/seamless-background-pattern-with-various-drinks-cocktails-abstract-D031R1.jpg\')">\n\n    </ion-slide>\n\n    <ion-slide style="background-image:url(\'https://lanocheenvino.com/wp-content/uploads/home-vinoteca-murillo-02.jpg\');">\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-item class="transparency item-rating" style="    margin-top: -60px;z-index: 1000;">\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <span color="primary" icon-left clear nopadding *ngFor="let classname of createRating( (Provider | async)?.rating); let currindex = index"\n\n            (click)="RateProvider(currindex)">\n\n            <ion-icon color="yellow" name="{{classname}}"></ion-icon>\n\n          </span>\n\n        </ion-col>\n\n        <ion-col>\n\n          <span icon-rigth clear large style="color:#fff;float: right;" (click)="OnClickComments()">\n\n  \n\n            <ion-icon name="text"></ion-icon>\n\n            <span color="primary" style="width: 100%; text-align: right">\n\n              {{ getTotalComments((Provider | async)?.Comments) }}</span>\n\n          </span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  <button ion-button full color="primary" (click)="onContract((prove))" floating>Contratar</button>\n\n  <!-- <ion-item>\n\n        <h2>\n\n            {{(Provider|async)?.CompanyName}}\n\n        </h2>\n\n    </ion-item> -->\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/details/details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__["a" /* ObserverProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_2__services_proveedores__["a" /* ProveedorService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_modal_modal_controller__["a" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, subs, afdb, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.subs = subs;
        this.afdb = afdb;
        this.loadingCtrl = loadingCtrl;
        this.Name = "";
        this.query = null;
        var loader = this.loadingCtrl.create({
            content: "Cargando...",
            spinner: "dots"
        });
        loader.present();
        this.CategoryName = navParams.get("CategoryName");
        this.SubCategoryName = navParams.get("SubCategoryName");
        this.SubCategorySecondName = navParams.get("SubCategorySecondName");
        this.userID = navParams.get("userID");
        //TODO: sacar la ciudad
        var city = "Monterrey";
        // let composequery = city + "_" + this.CategoryName + "_" + this.SubCategoryName + "_" + this.SubCategorySecondName
        this.Providers =
            afdb.collection("Providers", function (q) { return q.where("city", "==", city)
                .where("CategoryName", "==", _this.CategoryName)
                .where("SubCategoryName", "==", _this.SubCategoryName)
                .where("SubCategorySecondName", "==", _this.SubCategorySecondName); }).snapshotChanges();
        //  afdb.list("Providers/",
        //   ref => ref
        //     .orderByChild("ComposeQuery")
        //     .equalTo(composequery)
        // ).snapshotChanges();
        var subProv = this.Providers.subscribe(function (a) {
            loader.dismiss();
        });
        this.subs.add(subProv);
    }
    ListPage.prototype.TotalRating = function (rating) {
        return Object.keys(rating).length;
    };
    ListPage.prototype.getRating = function (rating) {
        if (rating == undefined)
            rating = [0];
        var total = Object.keys(rating).length;
        var sum = Object.keys(rating)
            .reduce(function (sum, key) {
            return sum + parseFloat((rating[key]).Value);
        }, 0);
        return sum / total;
    };
    ListPage.prototype.Cotizar = function () {
    };
    ListPage.prototype.itemTapped = function (event, item, payload, key) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */], {
            uid: item.uid,
            UserID: this.userID,
            DataRequest: this.DataRequest
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{Name}}</ion-title>\n    <ion-toolbar>\n      <ion-buttons start>\n      </ion-buttons>\n      <ion-searchbar [(ngModel)]="query"></ion-searchbar> \n      <ion-buttons end>\n        <button ion-button icon-only>\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div *ngIf="(Providers |async)?.length < 1">\n   \n    <div text-center>\n        Sin resultados\n      <img width="200" height="150" src="assets/imgs/searching.png"/>\n    </div>\n  </div>\n  <ion-list>\n    <ion-item>\n      <div item-left class="logo">\n        <img src="">\n      </div>\n      <ion-card style="border-left: 3px solid #ffae00" *ngFor="let prov of Providers | async |search:\'CompanyName,Description\':query "\n        (click)="itemTapped($event,prov, prov.$value, prov.$key)">\n\n        <ion-row>\n          <ion-col width-80>\n            <strong> {{prov.CompanyName}}</strong>\n          </ion-col>\n          <ion-col width-20 text-right>\n            <ion-badge *ngIf="getRating(prov.rating)==0" color="secondary">Nuevo</ion-badge>\n            <span *ngIf="getRating(prov.rating)>0">\n              <ion-icon color="yellow" style=" text-shadow: 1px 1px 1px rgb(54, 63, 0);" name="md-star"></ion-icon>\n              <!-- <ion-icon *ngFor="let item of ; let currindex = index" name="{{item}}"></ion-icon> -->\n              <span style="color:black;">{{getRating(prov.rating)}} </span>\n              <span style="color:gray">({{TotalRating(prov.rating)}}) </span>\n            </span>\n          </ion-col>\n        </ion-row>\n        <ion-card-content>\n          <div class="text-description">\n            <div col-9>\n              {{ ( prov.Description.length>100)? ( prov.Description | slice:0:100)+\'..\':( prov.Description) }}\n            </div>\n            <div col-3> \n              <button (click)="Cotizar(prov)">Cotizar </button>\n            </div>\n          </div>\n          <div class="item-note" item-end>\n\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__["a" /* ObserverProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContractDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContractDetailsPage = /** @class */ (function () {
    function ContractDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContractDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContractDetailsPage');
    };
    ContractDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contract-details',template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/contract-details/contract-details.html"*/'<!--\n  Generated template for the ContractDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ContractDetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/contract-details/contract-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ContractDetailsPage);
    return ContractDetailsPage;
}());

//# sourceMappingURL=contract-details.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipex_pipex__ = __webpack_require__(513);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__pipex_pipex__["a" /* KeysPipe */], __WEBPACK_IMPORTED_MODULE_1__pipex_pipex__["c" /* filerCat */], __WEBPACK_IMPORTED_MODULE_1__pipex_pipex__["b" /* SearchPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pipex_pipex__["a" /* KeysPipe */], __WEBPACK_IMPORTED_MODULE_1__pipex_pipex__["c" /* filerCat */], __WEBPACK_IMPORTED_MODULE_1__pipex_pipex__["b" /* SearchPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(461);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_fcm__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Providers_ubicacion__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Providers_User__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_proveedores__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_storage__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire_firestore__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile_module__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_main_main_module__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_list_list__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_welcome_welcome__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_register_register__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_credentials__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_common_http__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_http__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { PayPal } from '@ionic-native/paypal';
// import { ProvMainPageModule } from './../pages/provider/prov-main/prov-main.module';



// import { TimeAgoPipe } from 'time-ago-pipe'
//services





//plugins


// import { Facebook } from '@ionic-native/facebook';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
// import { Camera } from '@ionic-native/camera';
// import { Badge } from '@ionic-native/badge'
//firebase





//views



// import { CommentsPage } from '../pages/comments/comments';

// import { DetailsPage } from '../pages/details/details';
// import { RegisterProvPage } from '../pages/provider/register-prov/register-prov';

// import { PaymentPage } from './../pages/payment/payment';



// import { SubCategoriesSecondPage } from './../pages/sub-categories-second/sub-categories-second';
// import { SubCategoriesPage } from './../pages/sub-categories/sub-categories';
// import { TimeServicePage } from './../pages/time-service/time-service';
// import { RequestPage } from '../pages/request/request';
// import { RequestDetailPage } from './../pages/provider/request-detail/request-detail';
//DEFAULT



// import { Network } from '@ionic-native/network';
// import { ForgetPage } from '../pages/forget/forget';
// import { EqualValidator } from '../services/EqualValidator';
// import { CatalogosProvider } from '../Providers/catalogos/catalogos';
// import { ObserverProvider } from '../Providers/observer/observer';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                // MainPage,
                __WEBPACK_IMPORTED_MODULE_19__pages_list_list__["a" /* ListPage */],
                // DetailsPage,
                __WEBPACK_IMPORTED_MODULE_20__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_register_register__["a" /* Register */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/config/config.module#ConfigPageModule', name: 'ConfigPage', segment: 'config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contract-details/contract-details.module#ContractDetailsPageModule', name: 'ContractDetailsPage', segment: 'contract-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main/:uid', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provider/prov-history/prov-history.module#ProvHistoryPageModule', name: 'ProvHistoryPage', segment: 'prov-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provider/prov-main/prov-main.module#ProvMainPageModule', name: 'ProvMainPage', segment: 'prov-main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provider/prov-profile/prov-profile.module#ProvProfilePageModule', name: 'ProvProfilePage', segment: 'prov-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provider/prov-request/prov-request.module#ProvRequestPageModule', name: 'ProvRequestPage', segment: 'prov-request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provider/prov-settings/prov-settings.module#ProvSettingsPageModule', name: 'ProvSettingsPage', segment: 'prov-settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provider/provider-profile/provider-profile.module#ProviderProfilePageModule', name: 'ProviderProfilePage', segment: 'provider-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_26__services_credentials__["a" /* firebaseConfig */], 'labatanga'),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_17__pages_main_main_module__["MainPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_list_list__["a" /* ListPage */],
                // DetailsPage,
                __WEBPACK_IMPORTED_MODULE_22__pages_register_register__["a" /* Register */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__["a" /* ProfilePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["AngularFireDatabase"],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__services_auth__["a" /* Auth */],
                __WEBPACK_IMPORTED_MODULE_5__Providers_User__["a" /* UserSCV */],
                __WEBPACK_IMPORTED_MODULE_8__services_proveedores__["a" /* ProveedorService */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_storage__["AngularFireStorage"],
                __WEBPACK_IMPORTED_MODULE_15__angular_fire_firestore__["a" /* AngularFirestore */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                // Facebook,
                // Network,
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_4__Providers_ubicacion__["a" /* UbicacionSVC */],
                // FileTransfer,
                // FileTransferObject,
                // File,
                // Camera,
                // Badge,
                // CatalogosProvider,
                // PayPal,
                // ObserverProvider,
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_fcm__["a" /* FCM */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




// @IonicPage()
var CommentsPage = /** @class */ (function () {
    function CommentsPage(navCtrl, afDB, lCtrl, subs, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.lCtrl = lCtrl;
        this.subs = subs;
        this.navParams = navParams;
        var uid = navParams.get("uid");
        var sload = lCtrl.create({
            content: "Cargando Comentarios\n por favor espere...",
            spinner: "dots"
        });
        sload.present();
        this.init(uid).then(function (res) {
            var subComment = _this.Comments.subscribe(function (a) {
                sload.dismissAll();
            });
        });
        // .(items => {
        //   return items.map(com => { 
        //     return {
        //       user: this.afDB.doc("Users/" + com.key).valueChanges(),
        //       comment: com.payload.val(),
        //       time: com.payload.val()
        //     }
        //   })
        // })
    }
    CommentsPage.prototype.init = function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.afDB.collection("Providers/" + uid + "/Comments").valueChanges()];
                    case 1:
                        _a.Comments = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentsPage');
    };
    var _a, _b, _c, _d, _e;
    CommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-comments',template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/comments/comments.html"*/'<!--\n  Generated template for the CommentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header> \n  <ion-navbar color="primary">\n    <ion-title>Comentarios</ion-title>\n  </ion-navbar> \n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let  com of Comments |async" color="light">\n      <ion-card-header>\n          <strong> {{(com.user|async)?.FirstName + " " + (com.user|async)?.LastName }} </strong> \n          <ion-badge style="font-size:50%" float-right>{{com.time| timeAgo}}</ion-badge>\n         \n      </ion-card-header>\n    <ion-card-content text-wrap> \n      {{com.comment}} \n    </ion-card-content>\n  \n  </ion-card> \n</ion-content>\n'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/comments/comments.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["a" /* AngularFirestore */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__["a" /* ObserverProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__["a" /* ObserverProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */]) === "function" && _e || Object])
    ], CommentsPage);
    return CommentsPage;
}());

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filerCat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'keys' })
    ], KeysPipe);
    return KeysPipe;
}());

var filerCat = /** @class */ (function () {
    function filerCat() {
    }
    filerCat.prototype.transform = function (value, CategoryID) {
        if (value != undefined)
            return value.filter(function (provider) { return provider.Category === CategoryID; });
    };
    filerCat = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'filterCat' })
    ], filerCat);
    return filerCat;
}());

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=pipex.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterProvPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Providers_catalogos_catalogos__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_alert_alert_controller__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterProvPage = /** @class */ (function () {
    function RegisterProvPage(navCtrl, afDB, fcm, cat, alertCtrl, navParams, fbuild, auth) {
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.fcm = fcm;
        this.cat = cat;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.fbuild = fbuild;
        this.auth = auth;
        this.PASSWORD_REGEX = ".*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).*";
        this.CP_REGEX = "[0-9]{5}";
        this.Categories = afDB.list("Categories").valueChanges();
        this.formgroup = fbuild.group({
            FirstName: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('^[\u00F1A-Za-z _]*[\u00F1A-Za-z][\u00F1A-Za-z _]*'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            CompanyName: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(3)])],
            Description: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(15)])],
            Phone: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[0-9 ]*'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            Address: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            State: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            NoExt: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(8), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[0-9 ]*'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            CP: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern(this.CP_REGEX), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            City: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            Name: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            LastName: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            LastName2: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            Email: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].email])],
            EmailConfirm: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].email])],
            Category: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            Subcategory: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            Subcategory2: [''],
            Password: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(12), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern(this.PASSWORD_REGEX)])],
            PasswordConfirm: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
        });
        this.FirstName = this.formgroup.controls['FirstName'];
        this.CompanyName = this.formgroup.controls['CompanyName'];
        this.Description = this.formgroup.controls['Description'];
        this.Phone = this.formgroup.controls['Phone'];
        this.Address = this.formgroup.controls['Address'];
        this.NoExt = this.formgroup.controls['NoExt'];
        this.NoInt = this.formgroup.controls['NoInt'];
        this.CP = this.formgroup.controls['CP'];
        this.State = this.formgroup.controls['State'];
        this.City = this.formgroup.controls['City'];
        this.facebook = this.formgroup.controls['facebook'];
        this.whatsapp = this.formgroup.controls['whatsapp'];
        this.Name = this.formgroup.controls['Name'];
        this.LastName = this.formgroup.controls['LastName'];
        this.LastName2 = this.formgroup.controls['LastName2'];
        this.Email = this.formgroup.controls['Email'];
        this.Password = this.formgroup.controls['Password'];
        this.Category = this.formgroup.controls['Category'];
        this.Subcategory = this.formgroup.controls['Subcategory'];
        this.Subcategory2 = this.formgroup.controls['Subcategory2'];
        this.Categories = this.cat.getCategories();
        this.States = this.cat.getStates();
    }
    RegisterProvPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    RegisterProvPage.prototype.registerEvent = function () {
        var _this = this;
        if (this.formgroup.valid) {
            var self = this;
            this.auth.registerEvent({ Email: this.Email.value, Password: this.Password.value }, function (data) {
                var prov = {
                    FirstName: self.FirstName.value,
                    CompanyName: self.CompanyName.value,
                    Description: self.Description.value,
                    Phone: self.Phone.value,
                    Address: self.Address.value,
                    NoExt: self.NoExt.value,
                    NoInt: self.NoInt == undefined ? null : self.NoInt.value,
                    CP: self.CP.value,
                    City: self.City.value,
                    facebook: self.facebook == undefined ? null : self.facebook.value,
                    whatsapp: self.whatsapp == undefined ? null : self.whatsapp.value,
                    Name: self.Name.value,
                    LastName: self.LastName.value,
                    LastName2: self.LastName2.value,
                    Email: self.Email.value,
                    uid: data.uid,
                    Category: self.Category.value,
                    Subcategory: self.Subcategory.value,
                    Subcategory2: self.Subcategory2.value,
                    lastPayment: Date.now(),
                    ComposeQuery: self.City.value + "_" + self.Category.value + "_" + self.Subcategory.value + "_" + self.Subcategory2.value,
                    isProvider: true
                };
                _this.fcm.getToken().then(function (token) {
                    _this.afDB.object("Providers/" + data.uid).set(prov);
                    _this.CreateUser(data.uid, {
                        Email: self.Email.value,
                        FirstName: self.Name.value,
                        LastName: self.LastName.value,
                        LastName2: self.LastName2.value,
                        Phone: self.Phone.value,
                        isProvider: true,
                        uidProvider: data.uid,
                        token: token
                    });
                    var alert = _this.alertCtrl.create({
                        title: 'Registro Proveedor',
                        subTitle: 'Se registro correctamente',
                        buttons: ['Aceptar']
                    });
                    alert.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                });
            }).catch(function (er) {
                console.log(er);
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Registro Proveedor',
                subTitle: 'Favor de revisar los campos',
                buttons: ['Aceptar']
            });
            alert_1.present();
        }
    };
    RegisterProvPage.prototype.CreateUser = function (uid, data) {
        this.afDB.object("Users/" + uid).set(data)
            .catch(function (error) {
            return console.log(error);
        });
    };
    RegisterProvPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterProvPage');
    };
    RegisterProvPage.prototype.getCities = function (stateid) {
        this.Cities = this.cat.getCities(stateid);
    };
    RegisterProvPage.prototype.getSubCategories = function (item) {
        this.SubCategories = this.cat.getSubCategories(item);
    };
    RegisterProvPage.prototype.getSubCategories2 = function (item) {
        var _this = this;
        this.SubCategories2 = this.cat.getSubCategories2(item, this.Category.value);
        this.SubCategories2.subscribe(function (s) {
            _this.hideSubcat2 = (s.length > 0);
        });
    };
    RegisterProvPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-register-prov',template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/provider/register-prov/register-prov.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Registrar Proveedor</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form [formGroup]="formgroup" (ngSubmit)="registerEvent()" >\n    <ion-list>\n      <h3> Datos del Proveedor</h3>\n      <ion-item>\n        <ion-label color="primary" floating>\n          Razon Social\n        </ion-label>\n        <ion-input type="text" formControlName="FirstName"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="FirstName.errors && FirstName.dirty">\n        <p *ngIf="FirstName.hasError(\'required\')">El Campo es requerido</p>\n        <p *ngIf="FirstName.hasError(\'minlength\')">minimo de 3 caracteres</p>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Nombre Comercial</ion-label>\n        <ion-input type="text" formControlName="CompanyName"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="CompanyName.errors && CompanyName.dirty">\n        <p *ngIf="CompanyName.hasError(\'required\')">El Campo es requerido</p>\n        <p *ngIf="CompanyName.hasError(\'minlength\')">minimo de 3 caracteres</p>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Descripción</ion-label>\n        <ion-input type="text" formControlName="Description"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="Description.errors && Description.dirty">\n        <p *ngIf="Description.hasError(\'required\')">El Campo es requerido</p>\n        <p *ngIf="Description.hasError(\'minlength\')">minimo de 15 caracteres</p>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>\n          Teléfono\n        </ion-label>\n        <ion-input ion-input type="tel" formControlName="Phone"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="Phone.errors && Phone.dirty">\n        <p *ngIf="Phone.hasError(\'pattern\')">Debe ser numerico y debe ser de 10 digitos</p>\n        <p *ngIf="Phone.hasError(\'required\')">El Campo es requerido</p>\n        <p *ngIf="Phone.hasError(\'minlength\')">minimo de 10 caracteres</p>\n      </ion-item>\n\n      <h3>\n        Dirección\n      </h3>\n      <ion-item>\n        <ion-label color="primary" floating>\n          Calle\n        </ion-label>\n        <ion-input type="text" formControlName="Address"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="Address.errors && Address.dirty">\n        <p *ngIf="Address.hasError(\'required\')">El Campo es requerido</p>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>\n          Numero Exterior\n        </ion-label>\n        <ion-input ion-input type="number" formControlName="NoExt"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="NoExt.errors && NoExt.dirty">\n        <p *ngIf="NoExt.hasError(\'required\')">El Campo es requerido</p>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Numero Interior</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Código Postal</ion-label>\n        <ion-input ion-input type="number" formControlName="CP"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="CP.errors && CP.dirty">\n        <p *ngIf="CP.hasError(\'required\')">El Campo es requerido</p>\n        <p *ngIf="CP.hasError(\'pattern\')">Debe ser un formato valido </p>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>\n          Estado\n        </ion-label>\n        <ion-select formControlName="State" (ionChange)="getCities($event)">\n          <ion-option *ngFor="let item of States|async" [value]="item.key">{{item.payload.val().name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="State.errors && State.dirty">\n        <p *ngIf="State.hasError(\'required\')">El Campo es requerido</p>\n      </ion-item>\n      <ion-item *ngIf="State!=null">\n        <ion-label color="primary" floating>\n          Ciudad\n        </ion-label>\n        <ion-select formControlName="City">\n          <ion-option *ngFor="let item of Cities|async" [value]="item.key">{{item.payload.val().name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="City.errors && City.dirty">\n        <p *ngIf="City.hasError(\'required\')">El Campo es requerido</p>\n      </ion-item>\n      <h3>\n        Redes Sociales\n      </h3>\n      <ion-item>\n        <ion-label color="primary" floating>\n          <ion-icon color="facebook" name="logo-facebook"></ion-icon>\n          Facebook</ion-label>\n        <ion-input ion-input type="url"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>\n          <ion-icon color="whatsapp" name="logo-whatsapp"></ion-icon>\n          WhatsApp\n        </ion-label>\n        <ion-input ion-input type="tel"></ion-input>\n      </ion-item>\n      <h3>\n        Datos de Contacto\n      </h3>\n      <ion-item>\n        <ion-label color="primary" floating>Nombre(s)</ion-label>\n        <ion-input type="text" formControlName="Name"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="Name.errors && Name.dirty">\n        <p *ngIf="Name.hasError(\'required\')">El Campo es requerido</p>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Apellido Paterno</ion-label>\n        <ion-input type="text" formControlName="LastName"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="LastName.errors && LastName.dirty">\n        <p *ngIf="LastName.hasError(\'required\')">El Campo es requerido</p>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Apellido Materno</ion-label>\n        <ion-input type="text" formControlName="LastName2"></ion-input>\n      </ion-item>\n      <h3>\n        Datos de Acceso\n      </h3>\n      <ion-item>\n        <ion-label color="primary" floating>Correo Eléctronico</ion-label>\n        <ion-input type="email" formControlName="Email" required validateEqual="EmailConfirm" reverse="true"></ion-input>\n        <ion-item *ngIf="Email.errors && Email.dirty">\n          <p *ngIf="Email.hasError(\'required\')">El campo es requerido</p>\n          <p *ngIf="Email.hasError(\'email\')">El Correo debe ser valido </p>\n        </ion-item>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Confirmar Correo Eléctronico</ion-label>\n        <ion-input type="email" formControlName="EmailConfirm" required validateEqual="Email" reverse="true"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="Email.errors && Email.dirty">\n        <p *ngIf="Email.value != formgroup.get(\'EmailConfirm\').value">Debe ser igual al campo Correo Electrónico </p>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Contraseña</ion-label>\n        <ion-input type="password" [pattern]="PASSWORD_REGEX" formControlName="Password"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="Password.errors && Password.dirty">\n        <p *ngIf="Password.hasError(\'required\')">El campo es requerido</p>\n        <p *ngIf="Password.hasError(\'minlength\')">Debe tener minimo 8 caracteres</p>\n        <p *ngIf="Password.hasError(\'pattern\')">Debe tener almenos\n          <ul style="color:gray; font-size: 12px">\n            <li>una letra mayuscula</li>\n            <li>un Número </li>\n            <li>un Caracter Especial ($#%&amp34)</li>\n          </ul>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Confirmar Contraseña</ion-label>\n        <ion-input type="password" formControlName="PasswordConfirm"></ion-input>\n      </ion-item>\n      <p *ngIf="Password.value !=  formgroup.get(\'PasswordConfirm\').value">Debe coincidir con la contraseña</p>      \n      <ion-item>\n        <ion-label color="primary" floating>\n          Tema\n        </ion-label>\n        <ion-select formControlName="Category" (ionChange)="getSubCategories($event)">\n          <ion-option *ngFor="let item of Categories|async" [value]="item.key">{{item.payload.val().Name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="Category!=null">\n        <ion-label color="primary" floating>\n          Categoria\n        </ion-label>\n        <ion-select formControlName="Subcategory" (ionChange)="getSubCategories2( $event)">\n          <ion-option *ngFor="let item of SubCategories|async" [value]="item.key">{{item.payload.val().Name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="hideSubcat2">\n        <ion-label color="primary" floating>\n          Sub Categoria\n        </ion-label>\n        <ion-select formControlName="Subcategory2">\n          <ion-option *ngFor="let item of SubCategories2|async" [value]="item.key">{{item.payload.val().Name}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <div padding>\n      <!-- <button ion-button block color="black" (click)="registerEvent();">Registrarse</button> -->\n      <button ion-button full color="primary" [disabled]="!formgroup.valid" style="margin-top: 20px;" type="submit">Registrarse</button>\n    </div>\n\n  </form>\n</ion-content>'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/provider/register-prov/register-prov.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_0__Providers_catalogos_catalogos__["a" /* CatalogosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_auth__["a" /* Auth */]])
    ], RegisterProvPage);
    return RegisterProvPage;
}());

//# sourceMappingURL=register-prov.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CatalogosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CatalogosProvider = /** @class */ (function () {
    function CatalogosProvider(afDB) {
        this.afDB = afDB;
    }
    CatalogosProvider.prototype.getStates = function () {
        return this.afDB.list("Estados").snapshotChanges();
    };
    CatalogosProvider.prototype.getCities = function (stateid) {
        return this.afDB.list("/Municipios", function (ref) {
            return ref.orderByChild("stateid").equalTo(parseInt(stateid))
                .limitToFirst(100);
        }).snapshotChanges();
    };
    CatalogosProvider.prototype.getCategories = function () {
        return this.afDB.list("CategoriesNew/").snapshotChanges();
    };
    CatalogosProvider.prototype.getSubCategories = function (item) {
        return this.afDB.list("CategoriesNew/" + item + "/SubCategories/").snapshotChanges();
    };
    CatalogosProvider.prototype.getSubCategories2 = function (cat, tema) {
        return this.afDB.list("CategoriesNew/" + tema + "/SubCategories/" + cat + "/SubCategories/")
            .snapshotChanges();
    };
    CatalogosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["AngularFireDatabase"]])
    ], CatalogosProvider);
    return CatalogosProvider;
}());

//# sourceMappingURL=catalogos.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_prov_main_prov_main__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__ = __webpack_require__(523);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, subs, navParams, payPal, afDB) {
        this.navCtrl = navCtrl;
        this.subs = subs;
        this.navParams = navParams;
        this.payPal = payPal;
        this.afDB = afDB;
        this.payment = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__["c" /* PayPalPayment */]('200', 'MXN', 'PAGO SERVICIO LABATANGA', 'Servicio');
        this.currencies = ['MXN', 'USD'];
        this.payPalEnvironment = 'payPalEnvironmentSandbox';
        this.uidp = navParams.get("uidp");
        this.uid = navParams.get("uid");
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.makePayment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            var _this = this;
            return __generator(this, function (_a) {
                self = this;
                this.payPal.init({
                    PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
                    PayPalEnvironmentSandbox: 'ATQcR10-N6PbL_1qf8Z3Z158iMdkrPu9gleNBKGIfYd7iXZqIrE8BAOe-T2Th4Mhwt9hkCj2NVhHqav9'
                }).then(function () {
                    // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                    _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__["b" /* PayPalConfiguration */]({
                    // Only needed if you get an "Internal Service Error" after PayPal login!
                    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
                    })).then(function () {
                        // let payment = new PayPalPayment('3.33', 'USD', 'Description', 'sale');
                        _this.payPal.renderSinglePaymentUI(_this.payment).then(function (response) {
                            // Successfully paid
                            var state = response.response.state;
                            debugger;
                            alert("Pago realizado. Status = " + state);
                            if (state == "approved") {
                                var ref = _this.afDB.doc("Providers/" + self.uidp).snapshotChanges();
                                var subref = ref.subscribe(function (s) {
                                    var lastp = new Date(s.payload.data().lastPayment);
                                    lastp.setMonth(lastp.getMonth() + 6);
                                    _this.afDB.doc("Providers/" + self.uidp).update({
                                        lastPayment: lastp
                                    });
                                    var currentIndex = _this.navCtrl.getActive().index;
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__provider_prov_main_prov_main__["a" /* ProvMainPage */], { uid: self.uid, uidp: self.uidp }).then(function () {
                                        // this.navCtrl.remove(currentIndex);
                                    });
                                });
                            }
                            // Example sandbox response
                            //
                            // {
                            //   "client": {
                            //     "environment": "sandbox",
                            //     "product_name": "PayPal iOS SDK",
                            //     "paypal_sdk_version": "2.16.0",
                            //     "platform": "iOS"
                            //   },
                            //   "response_type": "payment",
                            //   "response": {
                            //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                            //     "state": "approved",
                            //     "create_time": "2016-10-03T13:33:33Z",
                            //     "intent": "sale"
                            //   }
                            // }
                        }, function () {
                            // Error or render dialog closed without being successful
                        });
                    }, function () {
                        // Error in configuration
                    });
                }, function () {
                    // Error in initialization, maybe PayPal isn't supported or something else
                });
                return [2 /*return*/];
            });
        });
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/payment/payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Contratar Servicio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n \n  <form name="paymentForm">\n		<ion-item>\n			<ion-label floating>Amount</ion-label>\n			<ion-input type="text" name="amount" [(ngModel)]="payment.amount"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>Currency</ion-label>\n			<ion-select [(ngModel)]="payment.currency" name="currency">\n				<ion-option value="{{currency}}" *ngFor="let currency of currencies">{{currency}}</ion-option>\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>Description</ion-label>\n			<ion-input type="text" name="description" [(ngModel)]="payment.shortDescription"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>Tiempo</ion-label>\n			<ion-input type="text" name="intent" [(ngModel)]="months"></ion-input>\n		</ion-item>\n		<p>\n			<button ion-button block color="secondary" (click)="makePayment()">Realizar Pago</button>\n		</p>\n</form> \n</ion-content>\n\n'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__["a" /* ObserverProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__["a" /* PayPal */], __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ForgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ForgetPage = /** @class */ (function () {
    function ForgetPage(authData, formBuilder, nav, alertCtrl) {
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.resetPasswordForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email])],
        });
    }
    ForgetPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.resetPasswordForm.valid) {
            console.log(this.resetPasswordForm.value);
        }
        else {
            this.presetPassword(this.resetPasswordForm.value.email)
                .then(function (user) {
                var alert = _this.alertCtrl.create({
                    message: "Hemos enviado un link a su correo para cambiar la contraseña",
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel',
                            handler: function () {
                                _this.nav.pop();
                            }
                        }
                    ]
                });
                alert.present();
            }, function (error) {
                var errorMessage = error.message;
                var errorAlert = _this.alertCtrl.create({
                    message: errorMessage,
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel'
                        }
                    ]
                });
                errorAlert.present();
            });
        }
    };
    ForgetPage.prototype.presetPassword = function (email) {
        return this.authData.auth.sendPasswordResetEmail(email);
    };
    ForgetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPage');
    };
    ForgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forget',template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/forget/forget.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>\n       Recuperar contraseña\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <form [formGroup]="resetPasswordForm" (submit)="resetPassword()" novalidate>\n  \n      <ion-item>\n        <ion-label stacked>Correo Electrónico</ion-label>\n        <ion-input formControlName="email" type="email" placeholder="Tu dirección de correo"\n          [class.invalid]="!resetPasswordForm.controls.email.valid  "></ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="!resetPasswordForm.controls.email.valid">\n        <p>Por favor inserte un correo electrónico valido.</p>\n      </ion-item>\n  \n      <button ion-button block type="submit">\n        Recuperar Contraseña\n      </button>\n  \n    </form>\n  \n  </ion-content>'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/forget/forget.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ForgetPage);
    return ForgetPage;
}());

//# sourceMappingURL=forget.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_credentials__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, toastCtrl, statusBar, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        __WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"](__WEBPACK_IMPORTED_MODULE_5__services_credentials__["a" /* firebaseConfig */]);
        platform.ready().then(function () {
            var lastTimeBackPress = 0;
            var timePeriodToExit = 2000;
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            platform.registerBackButtonAction(function () {
                // get current active page
                var view = _this.nav.getActive();
                if (view.component.name == "ProvMainPage") {
                    var toast = _this.toastCtrl.create({
                        message: 'Quiere cerrar sesión?',
                        duration: 2000,
                        position: 'bottom'
                    });
                    if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                        _this.nav.popToRoot();
                        toast.dismissAll();
                    }
                    else {
                        toast.present();
                        lastTimeBackPress = new Date().getTime();
                    }
                }
                else {
                    // go to previous page
                    _this.nav.pop({});
                }
            });
        });
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/app/app.html"*/' <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObserverProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the ObserverProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ObserverProvider = /** @class */ (function () {
    function ObserverProvider() {
        this.subscriptions = [];
    }
    ObserverProvider.prototype.add = function (sub) {
        this.subscriptions.push(sub);
    };
    ObserverProvider.prototype.addMany = function () {
        var _this = this;
        var subs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            subs[_i] = arguments[_i];
        }
        subs.forEach(function (element) {
            _this.subscriptions.push(element);
        });
    };
    ObserverProvider.prototype.UnSubscribe = function () {
        this.subscriptions.forEach(function (el) {
            el.unsubscribe();
        });
    };
    ObserverProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ObserverProvider);
    return ObserverProvider;
}());

//# sourceMappingURL=observer.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Providers_User__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forget_forget__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provider_prov_main_prov_main__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, fbuild, fire, usersvc, afDB, navCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.fbuild = fbuild;
        this.fire = fire;
        this.usersvc = usersvc;
        this.afDB = afDB;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.PASSWORD_REGEX = ".*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).*";
        this.formgroup = fbuild.group({
            Email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email])],
            Password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(this.PASSWORD_REGEX)])]
        });
        this.Email = this.formgroup.controls['Email'];
        this.Password = this.formgroup.controls['Password'];
    }
    LoginPage.prototype.presentAlert = function (mensaje) {
        if (mensaje === void 0) { mensaje = 'Tu cuenta esta inactiva!\nPor favor revisa tu correo par activar la cuenta'; }
        var alert = this.alertCtrl.create({
            title: 'Iniciar Sesión',
            subTitle: mensaje,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    LoginPage.prototype.GoToLoginDebug = function () {
        this.Email.setValue("invalidtruck@gmail.com");
        this.Password.setValue("Neptunia$3");
        this.GoToLogin();
    };
    LoginPage.prototype.GoToLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, spinloader, data_1, subs_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        if (!this.formgroup.valid) return [3 /*break*/, 3];
                        spinloader = this.loadingCtrl.create({
                            content: "Iniciando Sesión...",
                            spinner: "dots"
                        });
                        return [4 /*yield*/, spinloader.present()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.fire.auth.signInWithEmailAndPassword(self.Email.value, self.Password.value)];
                    case 2:
                        data_1 = _a.sent();
                        try {
                            if (data_1 && data_1.user.emailVerified) {
                                subs_1 = this.usersvc.setUser(data_1.user.uid).subscribe(function (s) { return __awaiter(_this, void 0, void 0, function () {
                                    var provinfo;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(s && s.isProvider)) return [3 /*break*/, 2];
                                                return [4 /*yield*/, self.afDB.doc("Providers/" + s.uidProvider).valueChanges()];
                                            case 1:
                                                provinfo = _a.sent();
                                                provinfo.subscribe(function (ss) {
                                                    self.clearForm();
                                                    subs_1.unsubscribe();
                                                    ss.lastPayment.getTime() <= Date.now() ?
                                                        self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */], { uid: data_1.user.uid, uidp: s.uidProvider }) :
                                                        self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__provider_prov_main_prov_main__["a" /* ProvMainPage */], { uid: data_1.user.uid, uidp: s.uidProvider });
                                                });
                                                return [3 /*break*/, 3];
                                            case 2:
                                                self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__main_main__["a" /* MainPage */], { uid: data_1.user.uid });
                                                _a.label = 3;
                                            case 3: return [2 /*return*/];
                                        }
                                    });
                                }); });
                            }
                            else {
                                this.presentAlert();
                            }
                        }
                        catch (err) {
                            switch (err.code) {
                                case "auth/too-many-requests":
                                    this.presentAlert("por seguridad, su cuenta se ha bloqueado! \nfavor espere un momento para acceder");
                                    break;
                                case "auth/wrong-password":
                                    this.presentAlert("La contraseña y/o el usuario es incorrecto");
                                    break;
                                case "auth/invalid-email":
                                    this.presentAlert("Favor de poner un correo valido");
                                    break;
                                case "auth/network-request-failed":
                                    this.presentAlert("Red no disponible en estos momentos");
                                    break;
                                case "auth/user-not-found":
                                    this.presentAlert("Usuario no encontrado");
                                    break;
                                default:
                                    console.error(err);
                                    break;
                            }
                        }
                        spinloader.dismissAll();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.clearForm = function () {
        this.Email.setValue("");
        this.Password.setValue("");
    };
    LoginPage.prototype.GoToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__register_register__["a" /* Register */]);
    };
    LoginPage.prototype.GoToForget = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forget_forget__["a" /* ForgetPage */]);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/login/login.html"*/'<!-- <ion-content  margin-vertical padding-vertical padding class="backgroundi-img bg">\n\n  <div text-center> \n\n   </div>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating> Correo Electronico</ion-label>\n\n      <ion-input type="text" value="invalidtruck@msn.com" #Email></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Contraseña</ion-label>\n\n      <ion-input type="password" #Password value="123456"> </ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list> \n\n  <ion-footer>\n\n    <ion-toolbar>\n\n      <div text-center> \n\n        <a href="#" color="primary" (click)="GoToForget();" >¿Olvidaste tu Contraseña?</a>\n\n      </div>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n</ion-content> -->\n\n<ion-content class="bg background">\n\n  <form [formGroup]="formgroup">\n\n    <div class="hue">\n\n      <!-- <h1>LA BATANGA</h1>  -->\n\n      <ion-card>\n\n        <ion-card-header>\n\n          Iniciar Sesión\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <ion-list no-lines>\n\n            <ion-item>\n\n              <ion-label floating color="primary">Correo Electrónico</ion-label>\n\n              <ion-input color="primary" type="email"  formControlName="Email"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating color="primary">Contraseña</ion-label>\n\n              <ion-input color="primary" type="password" formControlName="Password"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <p>¿Olvidaste tu Contraseña?\n\n                <a (click)="GoToForget();"> Presiona aqui</a>\n\n              </p>\n\n            </ion-item>\n\n\n\n            <button ion-button round block color="primary" [disabled]="!formgroup.valid" (click)="GoToLogin();">Loguearse</button>\n\n            <button ion-button round block color="primary"  (click)="GoToLoginDebug();">Debug</button>\n\n          </ion-list>\n\n          <!-- <b>OR</b>\n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button icon-left block>\n\n          <ion-icon name="logo-facebook"></ion-icon>\n\n          <div>login with facebook</div>\n\n        </button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button icon-left color="danger" block>\n\n          <ion-icon name="logo-google"></ion-icon>\n\n          <div>login with Google</div>\n\n        </button>\n\n          </ion-col>\n\n        </ion-row>\n\n   -->\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </div>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1__Providers_User__["a" /* UserSCV */],
            __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[328]);
//# sourceMappingURL=main.js.map