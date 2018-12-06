webpackJsonp([9],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSCV; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
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
        this.User = this.afDB.collection("Users").doc(uid).valueChanges();
        return this.User;
    };
    UserSCV = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"]])
    ], UserSCV);
    return UserSCV;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(15);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatalogosProvider = /** @class */ (function () {
    function CatalogosProvider(afDB) {
        this.afDB = afDB;
    }
    CatalogosProvider.prototype.getStates = function () {
        return this.afDB.collection("Estados", function (ref) { return ref.orderBy("name", "asc"); })
            .snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (m) { return m.map(function (z) {
            var $key = z.payload.doc.id;
            var data = z.payload.doc.data();
            return __assign({ $key: $key }, data);
        }); }));
    };
    CatalogosProvider.prototype.getCities = function (stateid) {
        return this.afDB.collection("Ciudades", function (ref) {
            return ref.where("stateid", "==", parseInt(stateid)).limit(100).orderBy("name", "asc");
        })
            .snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (m) { return m.map(function (z) {
            var $key = z.payload.doc.id;
            var data = z.payload.doc.data();
            return __assign({ $key: $key }, data);
        }); }));
    };
    CatalogosProvider.prototype.getThemes = function () {
        return this.afDB.collection("Categorias")
            .snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (m) { return m.map(function (z) {
            var $key = z.payload.doc.id;
            var data = z.payload.doc.data();
            return __assign({ $key: $key }, data);
        }); }));
    };
    CatalogosProvider.prototype.getCategories = function (item) {
        return this.afDB.collection("Categorias").doc(item).collection("SubCategoria")
            .snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (m) { return m.map(function (z) {
            var $key = z.payload.doc.id;
            var data = z.payload.doc.data();
            return __assign({ $key: $key }, data);
        }); }));
    };
    CatalogosProvider.prototype.getSubCategories = function (cat, tema) {
        return this.afDB.collection("Categorias").doc(tema).collection("SubCategoria").doc(cat).collection("SubCategoria")
            .snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (m) { return m.map(function (z) {
            var $key = z.payload.doc.id;
            var data = z.payload.doc.data();
            return __assign({ $key: $key }, data);
        }); }));
    };
    CatalogosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["AngularFirestore"]])
    ], CatalogosProvider);
    return CatalogosProvider;
}());

//# sourceMappingURL=catalogos.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Providers_ubicacion__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider_register_prov_register_prov__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__);
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
    function WelcomePage(navCtrl, afDB, navParams, _ubicacion) {
        this.navCtrl = navCtrl;
        this.afDB = afDB;
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
            selector: 'page-welcome',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\welcome\welcome.html"*/'<ion-content background class="vertical-align-content background">\n\n    <div class="hue"> \n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col text-center col-12 padding>\n\n                <h1>La Batanga</h1>\n\n                <span>Todo lo que necesitas para tu evento</span>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row  padding class="bottom">\n\n            <ion-col>\n\n                <ion-list>\n\n                    <ion-item class="back-nothing">\n\n                        <button ion-button color="primary" block large (click)="goToLogin()">Iniciar sesi&oacute;n con email</button>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col text-center>\n\n                <h3>Registrate</h3>\n\n                <div text-center>\n\n                    <a href="#" block color="black" (click)="goToRegister()">\n\n                        Como Usuario\n\n                    </a>\n\n                    |\n\n                    <a href="#" block color="black" (click)="goToRegPro()">\n\n                        Como Proveedor\n\n                    </a>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid> \n\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__Providers_ubicacion__["a" /* UbicacionSVC */]])
    ], WelcomePage);
    return WelcomePage;
}());

// loadData()
// {
//   Object.keys( data).forEach(element => {
//    let dat = data[element]
//     this.afDB.collection("Ciudades").add(dat)
//   });
// }
var data = {
    "513": {
        "id": 1,
        "inegiid": 513,
        "name": "Aguascalientes",
        "stateid": 1
    },
    "514": {
        "id": 2,
        "inegiid": 514,
        "name": "Asientos",
        "stateid": 1
    },
    "515": {
        "id": 3,
        "inegiid": 515,
        "name": "Calvillo",
        "stateid": 1
    },
    "516": {
        "id": 4,
        "inegiid": 516,
        "name": "Cosío",
        "stateid": 1
    },
    "517": {
        "id": 5,
        "inegiid": 517,
        "name": "Jesús María",
        "stateid": 1
    },
    "518": {
        "id": 6,
        "inegiid": 518,
        "name": "Pabellón de Arteaga",
        "stateid": 1
    },
    "519": {
        "id": 7,
        "inegiid": 519,
        "name": "Rincón de Romos",
        "stateid": 1
    },
    "520": {
        "id": 10,
        "inegiid": 520,
        "name": "El Llano",
        "stateid": 1
    },
    "521": {
        "id": 11,
        "inegiid": 521,
        "name": "San Francisco de los Romo",
        "stateid": 1
    },
    "1008": {
        "id": 8,
        "inegiid": 1008,
        "name": "San José de Gracia",
        "stateid": 1
    },
    "1009": {
        "id": 9,
        "inegiid": 1009,
        "name": "Tepezalá",
        "stateid": 1
    },
    "1025": {
        "id": 1,
        "inegiid": 1025,
        "name": "Ensenada",
        "stateid": 2
    },
    "1026": {
        "id": 2,
        "inegiid": 1026,
        "name": "Mexicali",
        "stateid": 2
    },
    "1027": {
        "id": 3,
        "inegiid": 1027,
        "name": "Tecate",
        "stateid": 2
    },
    "1028": {
        "id": 4,
        "inegiid": 1028,
        "name": "Tijuana",
        "stateid": 2
    },
    "1029": {
        "id": 5,
        "inegiid": 1029,
        "name": "Playas de Rosarito",
        "stateid": 2
    },
    "1537": {
        "id": 1,
        "inegiid": 1537,
        "name": "Comondú",
        "stateid": 3
    },
    "1538": {
        "id": 2,
        "inegiid": 1538,
        "name": "Mulegé",
        "stateid": 3
    },
    "1539": {
        "id": 3,
        "inegiid": 1539,
        "name": "La Paz",
        "stateid": 3
    },
    "2049": {
        "id": 1,
        "inegiid": 2049,
        "name": "Calkiní",
        "stateid": 4
    },
    "2050": {
        "id": 2,
        "inegiid": 2050,
        "name": "Campeche",
        "stateid": 4
    },
    "2051": {
        "id": 3,
        "inegiid": 2051,
        "name": "Carmen",
        "stateid": 4
    },
    "2052": {
        "id": 4,
        "inegiid": 2052,
        "name": "Champotón",
        "stateid": 4
    },
    "2053": {
        "id": 5,
        "inegiid": 2053,
        "name": "Hecelchakán",
        "stateid": 4
    },
    "2054": {
        "id": 6,
        "inegiid": 2054,
        "name": "Hopelchén",
        "stateid": 4
    },
    "2055": {
        "id": 7,
        "inegiid": 2055,
        "name": "Palizada",
        "stateid": 4
    },
    "2056": {
        "id": 10,
        "inegiid": 2056,
        "name": "Calakmul",
        "stateid": 4
    },
    "2057": {
        "id": 11,
        "inegiid": 2057,
        "name": "Candelaria",
        "stateid": 4
    },
    "2561": {
        "id": 1,
        "inegiid": 2561,
        "name": "Abasolo",
        "stateid": 5
    },
    "2562": {
        "id": 2,
        "inegiid": 2562,
        "name": "Acuña",
        "stateid": 5
    },
    "2563": {
        "id": 3,
        "inegiid": 2563,
        "name": "Allende",
        "stateid": 5
    },
    "2564": {
        "id": 4,
        "inegiid": 2564,
        "name": "Arteaga",
        "stateid": 5
    },
    "2565": {
        "id": 5,
        "inegiid": 2565,
        "name": "Candela",
        "stateid": 5
    },
    "2566": {
        "id": 6,
        "inegiid": 2566,
        "name": "Castaños",
        "stateid": 5
    },
    "2567": {
        "id": 7,
        "inegiid": 2567,
        "name": "Cuatro Ciénegas",
        "stateid": 5
    },
    "2568": {
        "id": 10,
        "inegiid": 2568,
        "name": "Frontera",
        "stateid": 5
    },
    "2569": {
        "id": 11,
        "inegiid": 2569,
        "name": "General Cepeda",
        "stateid": 5
    },
    "2570": {
        "id": 12,
        "inegiid": 2570,
        "name": "Guerrero",
        "stateid": 5
    },
    "2571": {
        "id": 13,
        "inegiid": 2571,
        "name": "Hidalgo",
        "stateid": 5
    },
    "2572": {
        "id": 14,
        "inegiid": 2572,
        "name": "Jiménez",
        "stateid": 5
    },
    "2573": {
        "id": 15,
        "inegiid": 2573,
        "name": "Juárez",
        "stateid": 5
    },
    "2574": {
        "id": 16,
        "inegiid": 2574,
        "name": "Lamadrid",
        "stateid": 5
    },
    "2575": {
        "id": 17,
        "inegiid": 2575,
        "name": "Matamoros",
        "stateid": 5
    },
    "2576": {
        "id": 20,
        "inegiid": 2576,
        "name": "Múzquiz",
        "stateid": 5
    },
    "2577": {
        "id": 21,
        "inegiid": 2577,
        "name": "Nadadores",
        "stateid": 5
    },
    "2578": {
        "id": 22,
        "inegiid": 2578,
        "name": "Nava",
        "stateid": 5
    },
    "2579": {
        "id": 23,
        "inegiid": 2579,
        "name": "Ocampo",
        "stateid": 5
    },
    "2580": {
        "id": 24,
        "inegiid": 2580,
        "name": "Parras",
        "stateid": 5
    },
    "2581": {
        "id": 25,
        "inegiid": 2581,
        "name": "Piedras Negras",
        "stateid": 5
    },
    "2582": {
        "id": 26,
        "inegiid": 2582,
        "name": "Progreso",
        "stateid": 5
    },
    "2583": {
        "id": 27,
        "inegiid": 2583,
        "name": "Ramos Arizpe",
        "stateid": 5
    },
    "2584": {
        "id": 30,
        "inegiid": 2584,
        "name": "Saltillo",
        "stateid": 5
    },
    "2585": {
        "id": 31,
        "inegiid": 2585,
        "name": "San Buenaventura",
        "stateid": 5
    },
    "2586": {
        "id": 32,
        "inegiid": 2586,
        "name": "San Juan de Sabinas",
        "stateid": 5
    },
    "2587": {
        "id": 33,
        "inegiid": 2587,
        "name": "San Pedro",
        "stateid": 5
    },
    "2588": {
        "id": 34,
        "inegiid": 2588,
        "name": "Sierra Mojada",
        "stateid": 5
    },
    "2589": {
        "id": 35,
        "inegiid": 2589,
        "name": "Torreón",
        "stateid": 5
    },
    "2590": {
        "id": 36,
        "inegiid": 2590,
        "name": "Viesca",
        "stateid": 5
    },
    "2591": {
        "id": 37,
        "inegiid": 2591,
        "name": "Villa Unión",
        "stateid": 5
    },
    "3008": {
        "id": 8,
        "inegiid": 3008,
        "name": "Los Cabos",
        "stateid": 3
    },
    "3009": {
        "id": 9,
        "inegiid": 3009,
        "name": "Loreto",
        "stateid": 3
    },
    "3073": {
        "id": 1,
        "inegiid": 3073,
        "name": "Armería",
        "stateid": 6
    },
    "3074": {
        "id": 2,
        "inegiid": 3074,
        "name": "Colima",
        "stateid": 6
    },
    "3075": {
        "id": 3,
        "inegiid": 3075,
        "name": "Comala",
        "stateid": 6
    },
    "3076": {
        "id": 4,
        "inegiid": 3076,
        "name": "Coquimatlán",
        "stateid": 6
    },
    "3077": {
        "id": 5,
        "inegiid": 3077,
        "name": "Cuauhtémoc",
        "stateid": 6
    },
    "3078": {
        "id": 6,
        "inegiid": 3078,
        "name": "Ixtlahuacán",
        "stateid": 6
    },
    "3079": {
        "id": 7,
        "inegiid": 3079,
        "name": "Manzanillo",
        "stateid": 6
    },
    "3080": {
        "id": 10,
        "inegiid": 3080,
        "name": "Villa de Álvarez",
        "stateid": 6
    },
    "3585": {
        "id": 1,
        "inegiid": 3585,
        "name": "Acacoyagua",
        "stateid": 7
    },
    "3586": {
        "id": 2,
        "inegiid": 3586,
        "name": "Acala",
        "stateid": 7
    },
    "3587": {
        "id": 3,
        "inegiid": 3587,
        "name": "Acapetahua",
        "stateid": 7
    },
    "3588": {
        "id": 4,
        "inegiid": 3588,
        "name": "Altamirano",
        "stateid": 7
    },
    "3589": {
        "id": 5,
        "inegiid": 3589,
        "name": "Amatán",
        "stateid": 7
    },
    "3590": {
        "id": 6,
        "inegiid": 3590,
        "name": "Amatenango de la Frontera",
        "stateid": 7
    },
    "3591": {
        "id": 7,
        "inegiid": 3591,
        "name": "Amatenango del Valle",
        "stateid": 7
    },
    "3592": {
        "id": 10,
        "inegiid": 3592,
        "name": "Bejucal de Ocampo",
        "stateid": 7
    },
    "3593": {
        "id": 11,
        "inegiid": 3593,
        "name": "Bella Vista",
        "stateid": 7
    },
    "3594": {
        "id": 12,
        "inegiid": 3594,
        "name": "Berriozábal",
        "stateid": 7
    },
    "3595": {
        "id": 13,
        "inegiid": 3595,
        "name": "Bochil",
        "stateid": 7
    },
    "3596": {
        "id": 14,
        "inegiid": 3596,
        "name": "El Bosque",
        "stateid": 7
    },
    "3597": {
        "id": 15,
        "inegiid": 3597,
        "name": "Cacahoatán",
        "stateid": 7
    },
    "3598": {
        "id": 16,
        "inegiid": 3598,
        "name": "Catazajá",
        "stateid": 7
    },
    "3599": {
        "id": 17,
        "inegiid": 3599,
        "name": "Cintalapa",
        "stateid": 7
    },
    "3600": {
        "id": 20,
        "inegiid": 3600,
        "name": "La Concordia",
        "stateid": 7
    },
    "3601": {
        "id": 21,
        "inegiid": 3601,
        "name": "Copainalá",
        "stateid": 7
    },
    "3602": {
        "id": 22,
        "inegiid": 3602,
        "name": "Chalchihuitán",
        "stateid": 7
    },
    "3603": {
        "id": 23,
        "inegiid": 3603,
        "name": "Chamula",
        "stateid": 7
    },
    "3604": {
        "id": 24,
        "inegiid": 3604,
        "name": "Chanal",
        "stateid": 7
    },
    "3605": {
        "id": 25,
        "inegiid": 3605,
        "name": "Chapultenango",
        "stateid": 7
    },
    "3606": {
        "id": 26,
        "inegiid": 3606,
        "name": "Chenalhó",
        "stateid": 7
    },
    "3607": {
        "id": 27,
        "inegiid": 3607,
        "name": "Chiapa de Corzo",
        "stateid": 7
    },
    "3608": {
        "id": 30,
        "inegiid": 3608,
        "name": "Chicomuselo",
        "stateid": 7
    },
    "3609": {
        "id": 31,
        "inegiid": 3609,
        "name": "Chilón",
        "stateid": 7
    },
    "3610": {
        "id": 32,
        "inegiid": 3610,
        "name": "Escuintla",
        "stateid": 7
    },
    "3611": {
        "id": 33,
        "inegiid": 3611,
        "name": "Francisco León",
        "stateid": 7
    },
    "3612": {
        "id": 34,
        "inegiid": 3612,
        "name": "Frontera Comalapa",
        "stateid": 7
    },
    "3613": {
        "id": 35,
        "inegiid": 3613,
        "name": "Frontera Hidalgo",
        "stateid": 7
    },
    "3614": {
        "id": 36,
        "inegiid": 3614,
        "name": "La Grandeza",
        "stateid": 7
    },
    "3615": {
        "id": 37,
        "inegiid": 3615,
        "name": "Huehuetán",
        "stateid": 7
    },
    "3616": {
        "id": 40,
        "inegiid": 3616,
        "name": "Huixtla",
        "stateid": 7
    },
    "3617": {
        "id": 41,
        "inegiid": 3617,
        "name": "La Independencia",
        "stateid": 7
    },
    "3618": {
        "id": 42,
        "inegiid": 3618,
        "name": "Ixhuatán",
        "stateid": 7
    },
    "3619": {
        "id": 43,
        "inegiid": 3619,
        "name": "Ixtacomitán",
        "stateid": 7
    },
    "3620": {
        "id": 44,
        "inegiid": 3620,
        "name": "Ixtapa",
        "stateid": 7
    },
    "3621": {
        "id": 45,
        "inegiid": 3621,
        "name": "Ixtapangajoya",
        "stateid": 7
    },
    "3622": {
        "id": 46,
        "inegiid": 3622,
        "name": "Jiquipilas",
        "stateid": 7
    },
    "3623": {
        "id": 47,
        "inegiid": 3623,
        "name": "Jitotol",
        "stateid": 7
    },
    "3624": {
        "id": 50,
        "inegiid": 3624,
        "name": "La Libertad",
        "stateid": 7
    },
    "3625": {
        "id": 51,
        "inegiid": 3625,
        "name": "Mapastepec",
        "stateid": 7
    },
    "3626": {
        "id": 52,
        "inegiid": 3626,
        "name": "Las Margaritas",
        "stateid": 7
    },
    "3627": {
        "id": 53,
        "inegiid": 3627,
        "name": "Mazapa de Madero",
        "stateid": 7
    },
    "3628": {
        "id": 54,
        "inegiid": 3628,
        "name": "Mazatán",
        "stateid": 7
    },
    "3629": {
        "id": 55,
        "inegiid": 3629,
        "name": "Metapa",
        "stateid": 7
    },
    "3630": {
        "id": 56,
        "inegiid": 3630,
        "name": "Mitontic",
        "stateid": 7
    },
    "3631": {
        "id": 57,
        "inegiid": 3631,
        "name": "Motozintla",
        "stateid": 7
    },
    "3632": {
        "id": 60,
        "inegiid": 3632,
        "name": "Ocotepec",
        "stateid": 7
    },
    "3633": {
        "id": 61,
        "inegiid": 3633,
        "name": "Ocozocoautla de Espinosa",
        "stateid": 7
    },
    "3634": {
        "id": 62,
        "inegiid": 3634,
        "name": "Ostuacán",
        "stateid": 7
    },
    "3635": {
        "id": 63,
        "inegiid": 3635,
        "name": "Osumacinta",
        "stateid": 7
    },
    "3636": {
        "id": 64,
        "inegiid": 3636,
        "name": "Oxchuc",
        "stateid": 7
    },
    "3637": {
        "id": 65,
        "inegiid": 3637,
        "name": "Palenque",
        "stateid": 7
    },
    "3638": {
        "id": 66,
        "inegiid": 3638,
        "name": "Pantelhó",
        "stateid": 7
    },
    "3639": {
        "id": 67,
        "inegiid": 3639,
        "name": "Pantepec",
        "stateid": 7
    },
    "3640": {
        "id": 70,
        "inegiid": 3640,
        "name": "El Porvenir",
        "stateid": 7
    },
    "3641": {
        "id": 71,
        "inegiid": 3641,
        "name": "Villa Comaltitlán",
        "stateid": 7
    },
    "3642": {
        "id": 72,
        "inegiid": 3642,
        "name": "Pueblo Nuevo Solistahuacán",
        "stateid": 7
    },
    "3643": {
        "id": 73,
        "inegiid": 3643,
        "name": "Rayón",
        "stateid": 7
    },
    "3644": {
        "id": 74,
        "inegiid": 3644,
        "name": "Reforma",
        "stateid": 7
    },
    "3645": {
        "id": 75,
        "inegiid": 3645,
        "name": "Las Rosas",
        "stateid": 7
    },
    "3646": {
        "id": 76,
        "inegiid": 3646,
        "name": "Sabanilla",
        "stateid": 7
    },
    "3647": {
        "id": 77,
        "inegiid": 3647,
        "name": "Salto de Agua",
        "stateid": 7
    },
    "3648": {
        "id": 100,
        "inegiid": 3648,
        "name": "Tumbalá",
        "stateid": 7
    },
    "3649": {
        "id": 101,
        "inegiid": 3649,
        "name": "Tuxtla Gutiérrez",
        "stateid": 7
    },
    "3650": {
        "id": 102,
        "inegiid": 3650,
        "name": "Tuxtla Chico",
        "stateid": 7
    },
    "3651": {
        "id": 103,
        "inegiid": 3651,
        "name": "Tuzantán",
        "stateid": 7
    },
    "3652": {
        "id": 104,
        "inegiid": 3652,
        "name": "Tzimol",
        "stateid": 7
    },
    "3653": {
        "id": 105,
        "inegiid": 3653,
        "name": "Unión Juárez",
        "stateid": 7
    },
    "3654": {
        "id": 106,
        "inegiid": 3654,
        "name": "Venustiano Carranza",
        "stateid": 7
    },
    "3655": {
        "id": 107,
        "inegiid": 3655,
        "name": "Villa Corzo",
        "stateid": 7
    },
    "3656": {
        "id": 110,
        "inegiid": 3656,
        "name": "San Lucas",
        "stateid": 7
    },
    "3657": {
        "id": 111,
        "inegiid": 3657,
        "name": "Zinacantán",
        "stateid": 7
    },
    "3658": {
        "id": 112,
        "inegiid": 3658,
        "name": "San Juan Cancuc",
        "stateid": 7
    },
    "3659": {
        "id": 113,
        "inegiid": 3659,
        "name": "Aldama",
        "stateid": 7
    },
    "3660": {
        "id": 114,
        "inegiid": 3660,
        "name": "Benemérito de las Américas",
        "stateid": 7
    },
    "3661": {
        "id": 115,
        "inegiid": 3661,
        "name": "Maravilla Tenejapa",
        "stateid": 7
    },
    "3662": {
        "id": 116,
        "inegiid": 3662,
        "name": "Marqués de Comillas",
        "stateid": 7
    },
    "3663": {
        "id": 117,
        "inegiid": 3663,
        "name": "Montecristo de Guerrero",
        "stateid": 7
    },
    "4008": {
        "id": 8,
        "inegiid": 4008,
        "name": "Tenabo",
        "stateid": 4
    },
    "4009": {
        "id": 9,
        "inegiid": 4009,
        "name": "Escárcega",
        "stateid": 4
    },
    "5008": {
        "id": 8,
        "inegiid": 5008,
        "name": "Escobedo",
        "stateid": 5
    },
    "5009": {
        "id": 9,
        "inegiid": 5009,
        "name": "Francisco I. Madero",
        "stateid": 5
    },
    "5018": {
        "id": 18,
        "inegiid": 5018,
        "name": "Monclova",
        "stateid": 5
    },
    "5019": {
        "id": 19,
        "inegiid": 5019,
        "name": "Morelos",
        "stateid": 5
    },
    "5028": {
        "id": 28,
        "inegiid": 5028,
        "name": "Sabinas",
        "stateid": 5
    },
    "5029": {
        "id": 29,
        "inegiid": 5029,
        "name": "Sacramento",
        "stateid": 5
    },
    "5038": {
        "id": 38,
        "inegiid": 5038,
        "name": "Zaragoza",
        "stateid": 5
    },
    "6008": {
        "id": 8,
        "inegiid": 6008,
        "name": "Minatitlán",
        "stateid": 6
    },
    "6009": {
        "id": 9,
        "inegiid": 6009,
        "name": "Tecomán",
        "stateid": 6
    },
    "7008": {
        "id": 8,
        "inegiid": 7008,
        "name": "Angel Albino Corzo",
        "stateid": 7
    },
    "7009": {
        "id": 9,
        "inegiid": 7009,
        "name": "Arriaga",
        "stateid": 7
    },
    "7018": {
        "id": 18,
        "inegiid": 7018,
        "name": "Coapilla",
        "stateid": 7
    },
    "7019": {
        "id": 19,
        "inegiid": 7019,
        "name": "Comitán de Domínguez",
        "stateid": 7
    },
    "7028": {
        "id": 28,
        "inegiid": 7028,
        "name": "Chiapilla",
        "stateid": 7
    },
    "7029": {
        "id": 29,
        "inegiid": 7029,
        "name": "Chicoasén",
        "stateid": 7
    },
    "7038": {
        "id": 38,
        "inegiid": 7038,
        "name": "Huixtán",
        "stateid": 7
    },
    "7039": {
        "id": 39,
        "inegiid": 7039,
        "name": "Huitiupán",
        "stateid": 7
    },
    "7048": {
        "id": 48,
        "inegiid": 7048,
        "name": "Juárez",
        "stateid": 7
    },
    "7049": {
        "id": 49,
        "inegiid": 7049,
        "name": "Larráinzar",
        "stateid": 7
    },
    "7058": {
        "id": 58,
        "inegiid": 7058,
        "name": "Nicolás Ruíz",
        "stateid": 7
    },
    "7059": {
        "id": 59,
        "inegiid": 7059,
        "name": "Ocosingo",
        "stateid": 7
    },
    "7068": {
        "id": 68,
        "inegiid": 7068,
        "name": "Pichucalco",
        "stateid": 7
    },
    "7069": {
        "id": 69,
        "inegiid": 7069,
        "name": "Pijijiapan",
        "stateid": 7
    },
    "7078": {
        "id": 78,
        "inegiid": 7078,
        "name": "San Cristóbal de las Casas",
        "stateid": 7
    },
    "7079": {
        "id": 79,
        "inegiid": 7079,
        "name": "San Fernando",
        "stateid": 7
    },
    "7080": {
        "id": 80,
        "inegiid": 7080,
        "name": "Siltepec",
        "stateid": 7
    },
    "7081": {
        "id": 81,
        "inegiid": 7081,
        "name": "Simojovel",
        "stateid": 7
    },
    "7082": {
        "id": 82,
        "inegiid": 7082,
        "name": "Sitalá",
        "stateid": 7
    },
    "7083": {
        "id": 83,
        "inegiid": 7083,
        "name": "Socoltenango",
        "stateid": 7
    },
    "7084": {
        "id": 84,
        "inegiid": 7084,
        "name": "Solosuchiapa",
        "stateid": 7
    },
    "7085": {
        "id": 85,
        "inegiid": 7085,
        "name": "Soyaló",
        "stateid": 7
    },
    "7086": {
        "id": 86,
        "inegiid": 7086,
        "name": "Suchiapa",
        "stateid": 7
    },
    "7087": {
        "id": 87,
        "inegiid": 7087,
        "name": "Suchiate",
        "stateid": 7
    },
    "7088": {
        "id": 88,
        "inegiid": 7088,
        "name": "Sunuapa",
        "stateid": 7
    },
    "7089": {
        "id": 89,
        "inegiid": 7089,
        "name": "Tapachula",
        "stateid": 7
    },
    "7090": {
        "id": 90,
        "inegiid": 7090,
        "name": "Tapalapa",
        "stateid": 7
    },
    "7091": {
        "id": 91,
        "inegiid": 7091,
        "name": "Tapilula",
        "stateid": 7
    },
    "7092": {
        "id": 92,
        "inegiid": 7092,
        "name": "Tecpatán",
        "stateid": 7
    },
    "7093": {
        "id": 93,
        "inegiid": 7093,
        "name": "Tenejapa",
        "stateid": 7
    },
    "7094": {
        "id": 94,
        "inegiid": 7094,
        "name": "Teopisca",
        "stateid": 7
    },
    "7096": {
        "id": 96,
        "inegiid": 7096,
        "name": "Tila",
        "stateid": 7
    },
    "7097": {
        "id": 97,
        "inegiid": 7097,
        "name": "Tonalá",
        "stateid": 7
    },
    "7098": {
        "id": 98,
        "inegiid": 7098,
        "name": "Totolapa",
        "stateid": 7
    },
    "7099": {
        "id": 99,
        "inegiid": 7099,
        "name": "La Trinitaria",
        "stateid": 7
    },
    "7108": {
        "id": 108,
        "inegiid": 7108,
        "name": "Villaflores",
        "stateid": 7
    },
    "7109": {
        "id": 109,
        "inegiid": 7109,
        "name": "Yajalón",
        "stateid": 7
    },
    "7118": {
        "id": 118,
        "inegiid": 7118,
        "name": "San Andrés Duraznal",
        "stateid": 7
    },
    "7119": {
        "id": 119,
        "inegiid": 7119,
        "name": "Santiago el Pinar",
        "stateid": 7
    },
    "8001": {
        "id": 1,
        "inegiid": 8001,
        "name": "Ahumada",
        "stateid": 8
    },
    "8002": {
        "id": 2,
        "inegiid": 8002,
        "name": "Aldama",
        "stateid": 8
    },
    "8003": {
        "id": 3,
        "inegiid": 8003,
        "name": "Allende",
        "stateid": 8
    },
    "8004": {
        "id": 4,
        "inegiid": 8004,
        "name": "Aquiles Serdán",
        "stateid": 8
    },
    "8005": {
        "id": 5,
        "inegiid": 8005,
        "name": "Ascensión",
        "stateid": 8
    },
    "8006": {
        "id": 6,
        "inegiid": 8006,
        "name": "Bachíniva",
        "stateid": 8
    },
    "8007": {
        "id": 7,
        "inegiid": 8007,
        "name": "Balleza",
        "stateid": 8
    },
    "8008": {
        "id": 8,
        "inegiid": 8008,
        "name": "Batopilas",
        "stateid": 8
    },
    "8009": {
        "id": 9,
        "inegiid": 8009,
        "name": "Bocoyna",
        "stateid": 8
    },
    "8010": {
        "id": 10,
        "inegiid": 8010,
        "name": "Buenaventura",
        "stateid": 8
    },
    "8011": {
        "id": 11,
        "inegiid": 8011,
        "name": "Camargo",
        "stateid": 8
    },
    "8012": {
        "id": 12,
        "inegiid": 8012,
        "name": "Carichí",
        "stateid": 8
    },
    "8013": {
        "id": 13,
        "inegiid": 8013,
        "name": "Casas Grandes",
        "stateid": 8
    },
    "8014": {
        "id": 14,
        "inegiid": 8014,
        "name": "Coronado",
        "stateid": 8
    },
    "8015": {
        "id": 15,
        "inegiid": 8015,
        "name": "Coyame del Sotol",
        "stateid": 8
    },
    "8016": {
        "id": 16,
        "inegiid": 8016,
        "name": "La Cruz",
        "stateid": 8
    },
    "8017": {
        "id": 17,
        "inegiid": 8017,
        "name": "Cuauhtémoc",
        "stateid": 8
    },
    "8018": {
        "id": 18,
        "inegiid": 8018,
        "name": "Cusihuiriachi",
        "stateid": 8
    },
    "8019": {
        "id": 19,
        "inegiid": 8019,
        "name": "Chihuahua",
        "stateid": 8
    },
    "8020": {
        "id": 20,
        "inegiid": 8020,
        "name": "Chínipas",
        "stateid": 8
    },
    "8021": {
        "id": 21,
        "inegiid": 8021,
        "name": "Delicias",
        "stateid": 8
    },
    "8022": {
        "id": 22,
        "inegiid": 8022,
        "name": "Dr. Belisario Domínguez",
        "stateid": 8
    },
    "8023": {
        "id": 23,
        "inegiid": 8023,
        "name": "Galeana",
        "stateid": 8
    },
    "8024": {
        "id": 24,
        "inegiid": 8024,
        "name": "Santa Isabel",
        "stateid": 8
    },
    "8025": {
        "id": 25,
        "inegiid": 8025,
        "name": "Gómez Farías",
        "stateid": 8
    },
    "8026": {
        "id": 26,
        "inegiid": 8026,
        "name": "Gran Morelos",
        "stateid": 8
    },
    "8027": {
        "id": 27,
        "inegiid": 8027,
        "name": "Guachochi",
        "stateid": 8
    },
    "8028": {
        "id": 28,
        "inegiid": 8028,
        "name": "Guadalupe",
        "stateid": 8
    },
    "8029": {
        "id": 29,
        "inegiid": 8029,
        "name": "Guadalupe y Calvo",
        "stateid": 8
    },
    "8030": {
        "id": 30,
        "inegiid": 8030,
        "name": "Guazapares",
        "stateid": 8
    },
    "8031": {
        "id": 31,
        "inegiid": 8031,
        "name": "Guerrero",
        "stateid": 8
    },
    "8032": {
        "id": 32,
        "inegiid": 8032,
        "name": "Hidalgo del Parral",
        "stateid": 8
    },
    "8033": {
        "id": 33,
        "inegiid": 8033,
        "name": "Huejotitán",
        "stateid": 8
    },
    "8034": {
        "id": 34,
        "inegiid": 8034,
        "name": "Ignacio Zaragoza",
        "stateid": 8
    },
    "8035": {
        "id": 35,
        "inegiid": 8035,
        "name": "Janos",
        "stateid": 8
    },
    "8036": {
        "id": 36,
        "inegiid": 8036,
        "name": "Jiménez",
        "stateid": 8
    },
    "8037": {
        "id": 37,
        "inegiid": 8037,
        "name": "Juárez",
        "stateid": 8
    },
    "8038": {
        "id": 38,
        "inegiid": 8038,
        "name": "Julimes",
        "stateid": 8
    },
    "8039": {
        "id": 39,
        "inegiid": 8039,
        "name": "López",
        "stateid": 8
    },
    "8040": {
        "id": 40,
        "inegiid": 8040,
        "name": "Madera",
        "stateid": 8
    },
    "8041": {
        "id": 41,
        "inegiid": 8041,
        "name": "Maguarichi",
        "stateid": 8
    },
    "8042": {
        "id": 42,
        "inegiid": 8042,
        "name": "Manuel Benavides",
        "stateid": 8
    },
    "8043": {
        "id": 43,
        "inegiid": 8043,
        "name": "Matachí",
        "stateid": 8
    },
    "8044": {
        "id": 44,
        "inegiid": 8044,
        "name": "Matamoros",
        "stateid": 8
    },
    "8045": {
        "id": 45,
        "inegiid": 8045,
        "name": "Meoqui",
        "stateid": 8
    },
    "8046": {
        "id": 46,
        "inegiid": 8046,
        "name": "Morelos",
        "stateid": 8
    },
    "8047": {
        "id": 47,
        "inegiid": 8047,
        "name": "Moris",
        "stateid": 8
    },
    "8048": {
        "id": 48,
        "inegiid": 8048,
        "name": "Namiquipa",
        "stateid": 8
    },
    "8049": {
        "id": 49,
        "inegiid": 8049,
        "name": "Nonoava",
        "stateid": 8
    },
    "8050": {
        "id": 50,
        "inegiid": 8050,
        "name": "Nuevo Casas Grandes",
        "stateid": 8
    },
    "8051": {
        "id": 51,
        "inegiid": 8051,
        "name": "Ocampo",
        "stateid": 8
    },
    "8052": {
        "id": 52,
        "inegiid": 8052,
        "name": "Ojinaga",
        "stateid": 8
    },
    "8053": {
        "id": 53,
        "inegiid": 8053,
        "name": "Praxedis G. Guerrero",
        "stateid": 8
    },
    "8054": {
        "id": 54,
        "inegiid": 8054,
        "name": "Riva Palacio",
        "stateid": 8
    },
    "8055": {
        "id": 55,
        "inegiid": 8055,
        "name": "Rosales",
        "stateid": 8
    },
    "8056": {
        "id": 56,
        "inegiid": 8056,
        "name": "Rosario",
        "stateid": 8
    },
    "8057": {
        "id": 57,
        "inegiid": 8057,
        "name": "San Francisco de Borja",
        "stateid": 8
    },
    "8058": {
        "id": 58,
        "inegiid": 8058,
        "name": "San Francisco de Conchos",
        "stateid": 8
    },
    "8059": {
        "id": 59,
        "inegiid": 8059,
        "name": "San Francisco del Oro",
        "stateid": 8
    },
    "8060": {
        "id": 60,
        "inegiid": 8060,
        "name": "Santa Bárbara",
        "stateid": 8
    },
    "8061": {
        "id": 61,
        "inegiid": 8061,
        "name": "Satevó",
        "stateid": 8
    },
    "8062": {
        "id": 62,
        "inegiid": 8062,
        "name": "Saucillo",
        "stateid": 8
    },
    "8063": {
        "id": 63,
        "inegiid": 8063,
        "name": "Temósachi",
        "stateid": 8
    },
    "8064": {
        "id": 64,
        "inegiid": 8064,
        "name": "El Tule",
        "stateid": 8
    },
    "8065": {
        "id": 65,
        "inegiid": 8065,
        "name": "Urique",
        "stateid": 8
    },
    "8066": {
        "id": 66,
        "inegiid": 8066,
        "name": "Uruachi",
        "stateid": 8
    },
    "8067": {
        "id": 67,
        "inegiid": 8067,
        "name": "Valle de Zaragoza",
        "stateid": 8
    },
    "9002": {
        "id": 2,
        "inegiid": 9002,
        "name": "Azcapotzalco",
        "stateid": 9
    },
    "9003": {
        "id": 3,
        "inegiid": 9003,
        "name": "Coyoacán",
        "stateid": 9
    },
    "9004": {
        "id": 4,
        "inegiid": 9004,
        "name": "Cuajimalpa de Morelos",
        "stateid": 9
    },
    "9005": {
        "id": 5,
        "inegiid": 9005,
        "name": "Gustavo A. Madero",
        "stateid": 9
    },
    "9006": {
        "id": 6,
        "inegiid": 9006,
        "name": "Iztacalco",
        "stateid": 9
    },
    "9007": {
        "id": 7,
        "inegiid": 9007,
        "name": "Iztapalapa",
        "stateid": 9
    },
    "9008": {
        "id": 8,
        "inegiid": 9008,
        "name": "La Magdalena Contreras",
        "stateid": 9
    },
    "9009": {
        "id": 9,
        "inegiid": 9009,
        "name": "Milpa Alta",
        "stateid": 9
    },
    "9010": {
        "id": 10,
        "inegiid": 9010,
        "name": "Álvaro Obregón",
        "stateid": 9
    },
    "9011": {
        "id": 11,
        "inegiid": 9011,
        "name": "Tláhuac",
        "stateid": 9
    },
    "9012": {
        "id": 12,
        "inegiid": 9012,
        "name": "Tlalpan",
        "stateid": 9
    },
    "9013": {
        "id": 13,
        "inegiid": 9013,
        "name": "Xochimilco",
        "stateid": 9
    },
    "9014": {
        "id": 14,
        "inegiid": 9014,
        "name": "Benito Juárez",
        "stateid": 9
    },
    "9015": {
        "id": 15,
        "inegiid": 9015,
        "name": "Cuauhtémoc",
        "stateid": 9
    },
    "9016": {
        "id": 16,
        "inegiid": 9016,
        "name": "Miguel Hidalgo",
        "stateid": 9
    },
    "9017": {
        "id": 17,
        "inegiid": 9017,
        "name": "Venustiano Carranza",
        "stateid": 9
    },
    "10001": {
        "id": 1,
        "inegiid": 10001,
        "name": "Canatlán",
        "stateid": 10
    },
    "10002": {
        "id": 2,
        "inegiid": 10002,
        "name": "Canelas",
        "stateid": 10
    },
    "10003": {
        "id": 3,
        "inegiid": 10003,
        "name": "Coneto de Comonfort",
        "stateid": 10
    },
    "10004": {
        "id": 4,
        "inegiid": 10004,
        "name": "Cuencamé",
        "stateid": 10
    },
    "10005": {
        "id": 5,
        "inegiid": 10005,
        "name": "Durango",
        "stateid": 10
    },
    "10006": {
        "id": 6,
        "inegiid": 10006,
        "name": "General Simón Bolívar",
        "stateid": 10
    },
    "10007": {
        "id": 7,
        "inegiid": 10007,
        "name": "Gómez Palacio",
        "stateid": 10
    },
    "10008": {
        "id": 8,
        "inegiid": 10008,
        "name": "Guadalupe Victoria",
        "stateid": 10
    },
    "10009": {
        "id": 9,
        "inegiid": 10009,
        "name": "Guanaceví",
        "stateid": 10
    },
    "10010": {
        "id": 10,
        "inegiid": 10010,
        "name": "Hidalgo",
        "stateid": 10
    },
    "10011": {
        "id": 11,
        "inegiid": 10011,
        "name": "Indé",
        "stateid": 10
    },
    "10012": {
        "id": 12,
        "inegiid": 10012,
        "name": "Lerdo",
        "stateid": 10
    },
    "10013": {
        "id": 13,
        "inegiid": 10013,
        "name": "Mapimí",
        "stateid": 10
    },
    "10014": {
        "id": 14,
        "inegiid": 10014,
        "name": "Mezquital",
        "stateid": 10
    },
    "10015": {
        "id": 15,
        "inegiid": 10015,
        "name": "Nazas",
        "stateid": 10
    },
    "10016": {
        "id": 16,
        "inegiid": 10016,
        "name": "Nombre de Dios",
        "stateid": 10
    },
    "10017": {
        "id": 17,
        "inegiid": 10017,
        "name": "Ocampo",
        "stateid": 10
    },
    "10018": {
        "id": 18,
        "inegiid": 10018,
        "name": "El Oro",
        "stateid": 10
    },
    "10019": {
        "id": 19,
        "inegiid": 10019,
        "name": "Otáez",
        "stateid": 10
    },
    "10020": {
        "id": 20,
        "inegiid": 10020,
        "name": "Pánuco de Coronado",
        "stateid": 10
    },
    "10021": {
        "id": 21,
        "inegiid": 10021,
        "name": "Peñón Blanco",
        "stateid": 10
    },
    "10022": {
        "id": 22,
        "inegiid": 10022,
        "name": "Poanas",
        "stateid": 10
    },
    "10023": {
        "id": 23,
        "inegiid": 10023,
        "name": "Pueblo Nuevo",
        "stateid": 10
    },
    "10024": {
        "id": 24,
        "inegiid": 10024,
        "name": "Rodeo",
        "stateid": 10
    },
    "10025": {
        "id": 25,
        "inegiid": 10025,
        "name": "San Bernardo",
        "stateid": 10
    },
    "10026": {
        "id": 26,
        "inegiid": 10026,
        "name": "San Dimas",
        "stateid": 10
    },
    "10027": {
        "id": 27,
        "inegiid": 10027,
        "name": "San Juan de Guadalupe",
        "stateid": 10
    },
    "10028": {
        "id": 28,
        "inegiid": 10028,
        "name": "San Juan del Río",
        "stateid": 10
    },
    "10029": {
        "id": 29,
        "inegiid": 10029,
        "name": "San Luis del Cordero",
        "stateid": 10
    },
    "10030": {
        "id": 30,
        "inegiid": 10030,
        "name": "San Pedro del Gallo",
        "stateid": 10
    },
    "10031": {
        "id": 31,
        "inegiid": 10031,
        "name": "Santa Clara",
        "stateid": 10
    },
    "10032": {
        "id": 32,
        "inegiid": 10032,
        "name": "Santiago Papasquiaro",
        "stateid": 10
    },
    "10033": {
        "id": 33,
        "inegiid": 10033,
        "name": "Súchil",
        "stateid": 10
    },
    "10034": {
        "id": 34,
        "inegiid": 10034,
        "name": "Tamazula",
        "stateid": 10
    },
    "10035": {
        "id": 35,
        "inegiid": 10035,
        "name": "Tepehuanes",
        "stateid": 10
    },
    "10036": {
        "id": 36,
        "inegiid": 10036,
        "name": "Tlahualilo",
        "stateid": 10
    },
    "10037": {
        "id": 37,
        "inegiid": 10037,
        "name": "Topia",
        "stateid": 10
    },
    "10038": {
        "id": 38,
        "inegiid": 10038,
        "name": "Vicente Guerrero",
        "stateid": 10
    },
    "10039": {
        "id": 39,
        "inegiid": 10039,
        "name": "Nuevo Ideal",
        "stateid": 10
    },
    "11001": {
        "id": 1,
        "inegiid": 11001,
        "name": "Abasolo",
        "stateid": 11
    },
    "11002": {
        "id": 2,
        "inegiid": 11002,
        "name": "Acámbaro",
        "stateid": 11
    },
    "11003": {
        "id": 3,
        "inegiid": 11003,
        "name": "San Miguel de Allende",
        "stateid": 11
    },
    "11004": {
        "id": 4,
        "inegiid": 11004,
        "name": "Apaseo el Alto",
        "stateid": 11
    },
    "11005": {
        "id": 5,
        "inegiid": 11005,
        "name": "Apaseo el Grande",
        "stateid": 11
    },
    "11006": {
        "id": 6,
        "inegiid": 11006,
        "name": "Atarjea",
        "stateid": 11
    },
    "11007": {
        "id": 7,
        "inegiid": 11007,
        "name": "Celaya",
        "stateid": 11
    },
    "11008": {
        "id": 8,
        "inegiid": 11008,
        "name": "Manuel Doblado",
        "stateid": 11
    },
    "11009": {
        "id": 9,
        "inegiid": 11009,
        "name": "Comonfort",
        "stateid": 11
    },
    "11010": {
        "id": 10,
        "inegiid": 11010,
        "name": "Coroneo",
        "stateid": 11
    },
    "11011": {
        "id": 11,
        "inegiid": 11011,
        "name": "Cortazar",
        "stateid": 11
    },
    "11012": {
        "id": 12,
        "inegiid": 11012,
        "name": "Cuerámaro",
        "stateid": 11
    },
    "11013": {
        "id": 13,
        "inegiid": 11013,
        "name": "Doctor Mora",
        "stateid": 11
    },
    "11014": {
        "id": 14,
        "inegiid": 11014,
        "name": "Dolores Hidalgo Cuna de la Independencia Nal.",
        "stateid": 11
    },
    "11015": {
        "id": 15,
        "inegiid": 11015,
        "name": "Guanajuato",
        "stateid": 11
    },
    "11016": {
        "id": 16,
        "inegiid": 11016,
        "name": "Huanímaro",
        "stateid": 11
    },
    "11017": {
        "id": 17,
        "inegiid": 11017,
        "name": "Irapuato",
        "stateid": 11
    },
    "11018": {
        "id": 18,
        "inegiid": 11018,
        "name": "Jaral del Progreso",
        "stateid": 11
    },
    "11019": {
        "id": 19,
        "inegiid": 11019,
        "name": "Jerécuaro",
        "stateid": 11
    },
    "11020": {
        "id": 20,
        "inegiid": 11020,
        "name": "León",
        "stateid": 11
    },
    "11021": {
        "id": 21,
        "inegiid": 11021,
        "name": "Moroleón",
        "stateid": 11
    },
    "11022": {
        "id": 22,
        "inegiid": 11022,
        "name": "Ocampo",
        "stateid": 11
    },
    "11023": {
        "id": 23,
        "inegiid": 11023,
        "name": "Pénjamo",
        "stateid": 11
    },
    "11024": {
        "id": 24,
        "inegiid": 11024,
        "name": "Pueblo Nuevo",
        "stateid": 11
    },
    "11025": {
        "id": 25,
        "inegiid": 11025,
        "name": "Purísima del Rincón",
        "stateid": 11
    },
    "11026": {
        "id": 26,
        "inegiid": 11026,
        "name": "Romita",
        "stateid": 11
    },
    "11027": {
        "id": 27,
        "inegiid": 11027,
        "name": "Salamanca",
        "stateid": 11
    },
    "11028": {
        "id": 28,
        "inegiid": 11028,
        "name": "Salvatierra",
        "stateid": 11
    },
    "11029": {
        "id": 29,
        "inegiid": 11029,
        "name": "San Diego de la Unión",
        "stateid": 11
    },
    "11030": {
        "id": 30,
        "inegiid": 11030,
        "name": "San Felipe",
        "stateid": 11
    },
    "11031": {
        "id": 31,
        "inegiid": 11031,
        "name": "San Francisco del Rincón",
        "stateid": 11
    },
    "11032": {
        "id": 32,
        "inegiid": 11032,
        "name": "San José Iturbide",
        "stateid": 11
    },
    "11033": {
        "id": 33,
        "inegiid": 11033,
        "name": "San Luis de la Paz",
        "stateid": 11
    },
    "11034": {
        "id": 34,
        "inegiid": 11034,
        "name": "Santa Catarina",
        "stateid": 11
    },
    "11035": {
        "id": 35,
        "inegiid": 11035,
        "name": "Santa Cruz de Juventino Rosas",
        "stateid": 11
    },
    "11036": {
        "id": 36,
        "inegiid": 11036,
        "name": "Santiago Maravatío",
        "stateid": 11
    },
    "11037": {
        "id": 37,
        "inegiid": 11037,
        "name": "Silao",
        "stateid": 11
    },
    "11038": {
        "id": 38,
        "inegiid": 11038,
        "name": "Tarandacuao",
        "stateid": 11
    },
    "11039": {
        "id": 39,
        "inegiid": 11039,
        "name": "Tarimoro",
        "stateid": 11
    },
    "11040": {
        "id": 40,
        "inegiid": 11040,
        "name": "Tierra Blanca",
        "stateid": 11
    },
    "11041": {
        "id": 41,
        "inegiid": 11041,
        "name": "Uriangato",
        "stateid": 11
    },
    "11042": {
        "id": 42,
        "inegiid": 11042,
        "name": "Valle de Santiago",
        "stateid": 11
    },
    "11043": {
        "id": 43,
        "inegiid": 11043,
        "name": "Victoria",
        "stateid": 11
    },
    "11044": {
        "id": 44,
        "inegiid": 11044,
        "name": "Villagrán",
        "stateid": 11
    },
    "11045": {
        "id": 45,
        "inegiid": 11045,
        "name": "Xichú",
        "stateid": 11
    },
    "11046": {
        "id": 46,
        "inegiid": 11046,
        "name": "Yuriria",
        "stateid": 11
    },
    "12001": {
        "id": 1,
        "inegiid": 12001,
        "name": "Acapulco de Juárez",
        "stateid": 12
    },
    "12002": {
        "id": 2,
        "inegiid": 12002,
        "name": "Ahuacuotzingo",
        "stateid": 12
    },
    "12003": {
        "id": 3,
        "inegiid": 12003,
        "name": "Ajuchitlán del Progreso",
        "stateid": 12
    },
    "12004": {
        "id": 4,
        "inegiid": 12004,
        "name": "Alcozauca de Guerrero",
        "stateid": 12
    },
    "12005": {
        "id": 5,
        "inegiid": 12005,
        "name": "Alpoyeca",
        "stateid": 12
    },
    "12006": {
        "id": 6,
        "inegiid": 12006,
        "name": "Apaxtla",
        "stateid": 12
    },
    "12007": {
        "id": 7,
        "inegiid": 12007,
        "name": "Arcelia",
        "stateid": 12
    },
    "12008": {
        "id": 8,
        "inegiid": 12008,
        "name": "Atenango del Río",
        "stateid": 12
    },
    "12009": {
        "id": 9,
        "inegiid": 12009,
        "name": "Atlamajalcingo del Monte",
        "stateid": 12
    },
    "12010": {
        "id": 10,
        "inegiid": 12010,
        "name": "Atlixtac",
        "stateid": 12
    },
    "12011": {
        "id": 11,
        "inegiid": 12011,
        "name": "Atoyac de Álvarez",
        "stateid": 12
    },
    "12012": {
        "id": 12,
        "inegiid": 12012,
        "name": "Ayutla de los Libres",
        "stateid": 12
    },
    "12013": {
        "id": 13,
        "inegiid": 12013,
        "name": "Azoyú",
        "stateid": 12
    },
    "12014": {
        "id": 14,
        "inegiid": 12014,
        "name": "Benito Juárez",
        "stateid": 12
    },
    "12015": {
        "id": 15,
        "inegiid": 12015,
        "name": "Buenavista de Cuéllar",
        "stateid": 12
    },
    "12016": {
        "id": 16,
        "inegiid": 12016,
        "name": "Coahuayutla de José María Izazaga",
        "stateid": 12
    },
    "12017": {
        "id": 17,
        "inegiid": 12017,
        "name": "Cocula",
        "stateid": 12
    },
    "12018": {
        "id": 18,
        "inegiid": 12018,
        "name": "Copala",
        "stateid": 12
    },
    "12019": {
        "id": 19,
        "inegiid": 12019,
        "name": "Copalillo",
        "stateid": 12
    },
    "12020": {
        "id": 20,
        "inegiid": 12020,
        "name": "Copanatoyac",
        "stateid": 12
    },
    "12021": {
        "id": 21,
        "inegiid": 12021,
        "name": "Coyuca de Benítez",
        "stateid": 12
    },
    "12022": {
        "id": 22,
        "inegiid": 12022,
        "name": "Coyuca de Catalán",
        "stateid": 12
    },
    "12023": {
        "id": 23,
        "inegiid": 12023,
        "name": "Cuajinicuilapa",
        "stateid": 12
    },
    "12024": {
        "id": 24,
        "inegiid": 12024,
        "name": "Cualác",
        "stateid": 12
    },
    "12025": {
        "id": 25,
        "inegiid": 12025,
        "name": "Cuautepec",
        "stateid": 12
    },
    "12026": {
        "id": 26,
        "inegiid": 12026,
        "name": "Cuetzala del Progreso",
        "stateid": 12
    },
    "12027": {
        "id": 27,
        "inegiid": 12027,
        "name": "Cutzamala de Pinzón",
        "stateid": 12
    },
    "12028": {
        "id": 28,
        "inegiid": 12028,
        "name": "Chilapa de Álvarez",
        "stateid": 12
    },
    "12029": {
        "id": 29,
        "inegiid": 12029,
        "name": "Chilpancingo de los Bravo",
        "stateid": 12
    },
    "12030": {
        "id": 30,
        "inegiid": 12030,
        "name": "Florencio Villarreal",
        "stateid": 12
    },
    "12031": {
        "id": 31,
        "inegiid": 12031,
        "name": "General Canuto A. Neri",
        "stateid": 12
    },
    "12032": {
        "id": 32,
        "inegiid": 12032,
        "name": "General Heliodoro Castillo",
        "stateid": 12
    },
    "12033": {
        "id": 33,
        "inegiid": 12033,
        "name": "Huamuxtitlán",
        "stateid": 12
    },
    "12034": {
        "id": 34,
        "inegiid": 12034,
        "name": "Huitzuco de los Figueroa",
        "stateid": 12
    },
    "12035": {
        "id": 35,
        "inegiid": 12035,
        "name": "Iguala de la Independencia",
        "stateid": 12
    },
    "12036": {
        "id": 36,
        "inegiid": 12036,
        "name": "Igualapa",
        "stateid": 12
    },
    "12037": {
        "id": 37,
        "inegiid": 12037,
        "name": "Ixcateopan de Cuauhtémoc",
        "stateid": 12
    },
    "12038": {
        "id": 38,
        "inegiid": 12038,
        "name": "José Azueta",
        "stateid": 12
    },
    "12039": {
        "id": 39,
        "inegiid": 12039,
        "name": "Juan R. Escudero",
        "stateid": 12
    },
    "12040": {
        "id": 40,
        "inegiid": 12040,
        "name": "Leonardo Bravo",
        "stateid": 12
    },
    "12041": {
        "id": 41,
        "inegiid": 12041,
        "name": "Malinaltepec",
        "stateid": 12
    },
    "12042": {
        "id": 42,
        "inegiid": 12042,
        "name": "Mártir de Cuilapan",
        "stateid": 12
    },
    "12043": {
        "id": 43,
        "inegiid": 12043,
        "name": "Metlatónoc",
        "stateid": 12
    },
    "12044": {
        "id": 44,
        "inegiid": 12044,
        "name": "Mochitlán",
        "stateid": 12
    },
    "12045": {
        "id": 45,
        "inegiid": 12045,
        "name": "Olinalá ",
        "stateid": 12
    },
    "12046": {
        "id": 46,
        "inegiid": 12046,
        "name": "Ometepec",
        "stateid": 12
    },
    "12047": {
        "id": 47,
        "inegiid": 12047,
        "name": "Pedro Ascencio Alquisiras",
        "stateid": 12
    },
    "12048": {
        "id": 48,
        "inegiid": 12048,
        "name": "Petatlán",
        "stateid": 12
    },
    "12049": {
        "id": 49,
        "inegiid": 12049,
        "name": "Pilcaya",
        "stateid": 12
    },
    "12050": {
        "id": 50,
        "inegiid": 12050,
        "name": "Pungarabato",
        "stateid": 12
    },
    "12051": {
        "id": 51,
        "inegiid": 12051,
        "name": "Quechultenango",
        "stateid": 12
    },
    "12052": {
        "id": 52,
        "inegiid": 12052,
        "name": "San Luis Acatlán",
        "stateid": 12
    },
    "12053": {
        "id": 53,
        "inegiid": 12053,
        "name": "San Marcos",
        "stateid": 12
    },
    "12054": {
        "id": 54,
        "inegiid": 12054,
        "name": "San Miguel Totolapan",
        "stateid": 12
    },
    "12055": {
        "id": 55,
        "inegiid": 12055,
        "name": "Taxco de Alarcón",
        "stateid": 12
    },
    "12056": {
        "id": 56,
        "inegiid": 12056,
        "name": "Tecoanapa",
        "stateid": 12
    },
    "12057": {
        "id": 57,
        "inegiid": 12057,
        "name": "Técpan de Galeana",
        "stateid": 12
    },
    "12058": {
        "id": 58,
        "inegiid": 12058,
        "name": "Teloloapan",
        "stateid": 12
    },
    "12059": {
        "id": 59,
        "inegiid": 12059,
        "name": "Tepecoacuilco de Trujano",
        "stateid": 12
    },
    "12060": {
        "id": 60,
        "inegiid": 12060,
        "name": "Tetipac",
        "stateid": 12
    },
    "12061": {
        "id": 61,
        "inegiid": 12061,
        "name": "Tixtla de Guerrero",
        "stateid": 12
    },
    "12062": {
        "id": 62,
        "inegiid": 12062,
        "name": "Tlacoachistlahuaca",
        "stateid": 12
    },
    "12063": {
        "id": 63,
        "inegiid": 12063,
        "name": "Tlacoapa",
        "stateid": 12
    },
    "12064": {
        "id": 64,
        "inegiid": 12064,
        "name": "Tlalchapa",
        "stateid": 12
    },
    "12065": {
        "id": 65,
        "inegiid": 12065,
        "name": "Tlalixtaquilla de Maldonado",
        "stateid": 12
    },
    "12066": {
        "id": 66,
        "inegiid": 12066,
        "name": "Tlapa de Comonfort",
        "stateid": 12
    },
    "12067": {
        "id": 67,
        "inegiid": 12067,
        "name": "Tlapehuala",
        "stateid": 12
    },
    "12068": {
        "id": 68,
        "inegiid": 12068,
        "name": "La Unión de Isidoro Montes de Oca",
        "stateid": 12
    },
    "12069": {
        "id": 69,
        "inegiid": 12069,
        "name": "Xalpatláhuac",
        "stateid": 12
    },
    "12070": {
        "id": 70,
        "inegiid": 12070,
        "name": "Xochihuehuetlán",
        "stateid": 12
    },
    "12071": {
        "id": 71,
        "inegiid": 12071,
        "name": "Xochistlahuaca",
        "stateid": 12
    },
    "12072": {
        "id": 72,
        "inegiid": 12072,
        "name": "Zapotitlán Tablas",
        "stateid": 12
    },
    "12073": {
        "id": 73,
        "inegiid": 12073,
        "name": "Zirándaro",
        "stateid": 12
    },
    "12074": {
        "id": 74,
        "inegiid": 12074,
        "name": "Zitlala",
        "stateid": 12
    },
    "12075": {
        "id": 75,
        "inegiid": 12075,
        "name": "Eduardo Neri",
        "stateid": 12
    },
    "12076": {
        "id": 76,
        "inegiid": 12076,
        "name": "Acatepec",
        "stateid": 12
    },
    "12077": {
        "id": 77,
        "inegiid": 12077,
        "name": "Marquelia",
        "stateid": 12
    },
    "12078": {
        "id": 78,
        "inegiid": 12078,
        "name": "Cochoapa el Grande",
        "stateid": 12
    },
    "12079": {
        "id": 79,
        "inegiid": 12079,
        "name": "José Joaquín de Herrera",
        "stateid": 12
    },
    "12080": {
        "id": 80,
        "inegiid": 12080,
        "name": "Juchitán",
        "stateid": 12
    },
    "12081": {
        "id": 81,
        "inegiid": 12081,
        "name": "Iliatenco",
        "stateid": 12
    },
    "13001": {
        "id": 1,
        "inegiid": 13001,
        "name": "Acatlán",
        "stateid": 13
    },
    "13002": {
        "id": 2,
        "inegiid": 13002,
        "name": "Acaxochitlán",
        "stateid": 13
    },
    "13003": {
        "id": 3,
        "inegiid": 13003,
        "name": "Actopan",
        "stateid": 13
    },
    "13004": {
        "id": 4,
        "inegiid": 13004,
        "name": "Agua Blanca de Iturbide",
        "stateid": 13
    },
    "13005": {
        "id": 5,
        "inegiid": 13005,
        "name": "Ajacuba",
        "stateid": 13
    },
    "13006": {
        "id": 6,
        "inegiid": 13006,
        "name": "Alfajayucan",
        "stateid": 13
    },
    "13007": {
        "id": 7,
        "inegiid": 13007,
        "name": "Almoloya",
        "stateid": 13
    },
    "13008": {
        "id": 8,
        "inegiid": 13008,
        "name": "Apan",
        "stateid": 13
    },
    "13009": {
        "id": 9,
        "inegiid": 13009,
        "name": "El Arenal",
        "stateid": 13
    },
    "13010": {
        "id": 10,
        "inegiid": 13010,
        "name": "Atitalaquia",
        "stateid": 13
    },
    "13011": {
        "id": 11,
        "inegiid": 13011,
        "name": "Atlapexco",
        "stateid": 13
    },
    "13012": {
        "id": 12,
        "inegiid": 13012,
        "name": "Atotonilco el Grande",
        "stateid": 13
    },
    "13013": {
        "id": 13,
        "inegiid": 13013,
        "name": "Atotonilco de Tula",
        "stateid": 13
    },
    "13014": {
        "id": 14,
        "inegiid": 13014,
        "name": "Calnali",
        "stateid": 13
    },
    "13015": {
        "id": 15,
        "inegiid": 13015,
        "name": "Cardonal",
        "stateid": 13
    },
    "13016": {
        "id": 16,
        "inegiid": 13016,
        "name": "Cuautepec de Hinojosa",
        "stateid": 13
    },
    "13017": {
        "id": 17,
        "inegiid": 13017,
        "name": "Chapantongo",
        "stateid": 13
    },
    "13018": {
        "id": 18,
        "inegiid": 13018,
        "name": "Chapulhuacán",
        "stateid": 13
    },
    "13019": {
        "id": 19,
        "inegiid": 13019,
        "name": "Chilcuautla",
        "stateid": 13
    },
    "13020": {
        "id": 20,
        "inegiid": 13020,
        "name": "Eloxochitlán",
        "stateid": 13
    },
    "13021": {
        "id": 21,
        "inegiid": 13021,
        "name": "Emiliano Zapata",
        "stateid": 13
    },
    "13022": {
        "id": 22,
        "inegiid": 13022,
        "name": "Epazoyucan",
        "stateid": 13
    },
    "13023": {
        "id": 23,
        "inegiid": 13023,
        "name": "Francisco I. Madero",
        "stateid": 13
    },
    "13024": {
        "id": 24,
        "inegiid": 13024,
        "name": "Huasca de Ocampo",
        "stateid": 13
    },
    "13025": {
        "id": 25,
        "inegiid": 13025,
        "name": "Huautla",
        "stateid": 13
    },
    "13026": {
        "id": 26,
        "inegiid": 13026,
        "name": "Huazalingo",
        "stateid": 13
    },
    "13027": {
        "id": 27,
        "inegiid": 13027,
        "name": "Huehuetla",
        "stateid": 13
    },
    "13028": {
        "id": 28,
        "inegiid": 13028,
        "name": "Huejutla de Reyes",
        "stateid": 13
    },
    "13029": {
        "id": 29,
        "inegiid": 13029,
        "name": "Huichapan",
        "stateid": 13
    },
    "13030": {
        "id": 30,
        "inegiid": 13030,
        "name": "Ixmiquilpan",
        "stateid": 13
    },
    "13031": {
        "id": 31,
        "inegiid": 13031,
        "name": "Jacala de Ledezma",
        "stateid": 13
    },
    "13032": {
        "id": 32,
        "inegiid": 13032,
        "name": "Jaltocán",
        "stateid": 13
    },
    "13033": {
        "id": 33,
        "inegiid": 13033,
        "name": "Juárez Hidalgo",
        "stateid": 13
    },
    "13034": {
        "id": 34,
        "inegiid": 13034,
        "name": "Lolotla",
        "stateid": 13
    },
    "13035": {
        "id": 35,
        "inegiid": 13035,
        "name": "Metepec",
        "stateid": 13
    },
    "13036": {
        "id": 36,
        "inegiid": 13036,
        "name": "San Agustín Metzquititlán",
        "stateid": 13
    },
    "13037": {
        "id": 37,
        "inegiid": 13037,
        "name": "Metztitlán",
        "stateid": 13
    },
    "13038": {
        "id": 38,
        "inegiid": 13038,
        "name": "Mineral del Chico",
        "stateid": 13
    },
    "13039": {
        "id": 39,
        "inegiid": 13039,
        "name": "Mineral del Monte",
        "stateid": 13
    },
    "13040": {
        "id": 40,
        "inegiid": 13040,
        "name": "La Misión",
        "stateid": 13
    },
    "13041": {
        "id": 41,
        "inegiid": 13041,
        "name": "Mixquiahuala de Juárez",
        "stateid": 13
    },
    "13042": {
        "id": 42,
        "inegiid": 13042,
        "name": "Molango de Escamilla",
        "stateid": 13
    },
    "13043": {
        "id": 43,
        "inegiid": 13043,
        "name": "Nicolás Flores",
        "stateid": 13
    },
    "13044": {
        "id": 44,
        "inegiid": 13044,
        "name": "Nopala de Villagrán",
        "stateid": 13
    },
    "13045": {
        "id": 45,
        "inegiid": 13045,
        "name": "Omitlán de Juárez",
        "stateid": 13
    },
    "13046": {
        "id": 46,
        "inegiid": 13046,
        "name": "San Felipe Orizatlán",
        "stateid": 13
    },
    "13047": {
        "id": 47,
        "inegiid": 13047,
        "name": "Pacula",
        "stateid": 13
    },
    "13048": {
        "id": 48,
        "inegiid": 13048,
        "name": "Pachuca de Soto",
        "stateid": 13
    },
    "13049": {
        "id": 49,
        "inegiid": 13049,
        "name": "Pisaflores",
        "stateid": 13
    },
    "13050": {
        "id": 50,
        "inegiid": 13050,
        "name": "Progreso de Obregón",
        "stateid": 13
    },
    "13051": {
        "id": 51,
        "inegiid": 13051,
        "name": "Mineral de la Reforma",
        "stateid": 13
    },
    "13052": {
        "id": 52,
        "inegiid": 13052,
        "name": "San Agustín Tlaxiaca",
        "stateid": 13
    },
    "13053": {
        "id": 53,
        "inegiid": 13053,
        "name": "San Bartolo Tutotepec",
        "stateid": 13
    },
    "13054": {
        "id": 54,
        "inegiid": 13054,
        "name": "San Salvador",
        "stateid": 13
    },
    "13055": {
        "id": 55,
        "inegiid": 13055,
        "name": "Santiago de Anaya",
        "stateid": 13
    },
    "13056": {
        "id": 56,
        "inegiid": 13056,
        "name": "Santiago Tulantepec de Lugo Guerrero",
        "stateid": 13
    },
    "13057": {
        "id": 57,
        "inegiid": 13057,
        "name": "Singuilucan",
        "stateid": 13
    },
    "13058": {
        "id": 58,
        "inegiid": 13058,
        "name": "Tasquillo",
        "stateid": 13
    },
    "13059": {
        "id": 59,
        "inegiid": 13059,
        "name": "Tecozautla",
        "stateid": 13
    },
    "13060": {
        "id": 60,
        "inegiid": 13060,
        "name": "Tenango de Doria",
        "stateid": 13
    },
    "13061": {
        "id": 61,
        "inegiid": 13061,
        "name": "Tepeapulco",
        "stateid": 13
    },
    "13062": {
        "id": 62,
        "inegiid": 13062,
        "name": "Tepehuacán de Guerrero",
        "stateid": 13
    },
    "13063": {
        "id": 63,
        "inegiid": 13063,
        "name": "Tepeji del Río de Ocampo",
        "stateid": 13
    },
    "13064": {
        "id": 64,
        "inegiid": 13064,
        "name": "Tepetitlán",
        "stateid": 13
    },
    "13065": {
        "id": 65,
        "inegiid": 13065,
        "name": "Tetepango",
        "stateid": 13
    },
    "13066": {
        "id": 66,
        "inegiid": 13066,
        "name": "Villa de Tezontepec",
        "stateid": 13
    },
    "13067": {
        "id": 67,
        "inegiid": 13067,
        "name": "Tezontepec de Aldama",
        "stateid": 13
    },
    "13068": {
        "id": 68,
        "inegiid": 13068,
        "name": "Tianguistengo",
        "stateid": 13
    },
    "13069": {
        "id": 69,
        "inegiid": 13069,
        "name": "Tizayuca",
        "stateid": 13
    },
    "13070": {
        "id": 70,
        "inegiid": 13070,
        "name": "Tlahuelilpan",
        "stateid": 13
    },
    "13071": {
        "id": 71,
        "inegiid": 13071,
        "name": "Tlahuiltepa",
        "stateid": 13
    },
    "13072": {
        "id": 72,
        "inegiid": 13072,
        "name": "Tlanalapa",
        "stateid": 13
    },
    "13073": {
        "id": 73,
        "inegiid": 13073,
        "name": "Tlanchinol",
        "stateid": 13
    },
    "13074": {
        "id": 74,
        "inegiid": 13074,
        "name": "Tlaxcoapan",
        "stateid": 13
    },
    "13075": {
        "id": 75,
        "inegiid": 13075,
        "name": "Tolcayuca",
        "stateid": 13
    },
    "13076": {
        "id": 76,
        "inegiid": 13076,
        "name": "Tula de Allende",
        "stateid": 13
    },
    "13077": {
        "id": 77,
        "inegiid": 13077,
        "name": "Tulancingo de Bravo",
        "stateid": 13
    },
    "13078": {
        "id": 78,
        "inegiid": 13078,
        "name": "Xochiatipan",
        "stateid": 13
    },
    "13079": {
        "id": 79,
        "inegiid": 13079,
        "name": "Xochicoatlán",
        "stateid": 13
    },
    "13080": {
        "id": 80,
        "inegiid": 13080,
        "name": "Yahualica",
        "stateid": 13
    },
    "13081": {
        "id": 81,
        "inegiid": 13081,
        "name": "Zacualtipán de Ángeles",
        "stateid": 13
    },
    "13082": {
        "id": 82,
        "inegiid": 13082,
        "name": "Zapotlán de Juárez",
        "stateid": 13
    },
    "13083": {
        "id": 83,
        "inegiid": 13083,
        "name": "Zempoala",
        "stateid": 13
    },
    "13084": {
        "id": 84,
        "inegiid": 13084,
        "name": "Zimapán",
        "stateid": 13
    },
    "14001": {
        "id": 1,
        "inegiid": 14001,
        "name": "Acatic",
        "stateid": 14
    },
    "14002": {
        "id": 2,
        "inegiid": 14002,
        "name": "Acatlán de Juárez",
        "stateid": 14
    },
    "14003": {
        "id": 3,
        "inegiid": 14003,
        "name": "Ahualulco de Mercado",
        "stateid": 14
    },
    "14004": {
        "id": 4,
        "inegiid": 14004,
        "name": "Amacueca",
        "stateid": 14
    },
    "14005": {
        "id": 5,
        "inegiid": 14005,
        "name": "Amatitán",
        "stateid": 14
    },
    "14006": {
        "id": 6,
        "inegiid": 14006,
        "name": "Ameca",
        "stateid": 14
    },
    "14007": {
        "id": 7,
        "inegiid": 14007,
        "name": "San Juanito de Escobedo",
        "stateid": 14
    },
    "14008": {
        "id": 8,
        "inegiid": 14008,
        "name": "Arandas",
        "stateid": 14
    },
    "14009": {
        "id": 9,
        "inegiid": 14009,
        "name": "El Arenal",
        "stateid": 14
    },
    "14010": {
        "id": 10,
        "inegiid": 14010,
        "name": "Atemajac de Brizuela",
        "stateid": 14
    },
    "14011": {
        "id": 11,
        "inegiid": 14011,
        "name": "Atengo",
        "stateid": 14
    },
    "14012": {
        "id": 12,
        "inegiid": 14012,
        "name": "Atenguillo",
        "stateid": 14
    },
    "14013": {
        "id": 13,
        "inegiid": 14013,
        "name": "Atotonilco el Alto",
        "stateid": 14
    },
    "14014": {
        "id": 14,
        "inegiid": 14014,
        "name": "Atoyac",
        "stateid": 14
    },
    "14015": {
        "id": 15,
        "inegiid": 14015,
        "name": "Autlán de Navarro",
        "stateid": 14
    },
    "14016": {
        "id": 16,
        "inegiid": 14016,
        "name": "Ayotlán",
        "stateid": 14
    },
    "14017": {
        "id": 17,
        "inegiid": 14017,
        "name": "Ayutla",
        "stateid": 14
    },
    "14018": {
        "id": 18,
        "inegiid": 14018,
        "name": "La Barca",
        "stateid": 14
    },
    "14019": {
        "id": 19,
        "inegiid": 14019,
        "name": "Bolaños",
        "stateid": 14
    },
    "14020": {
        "id": 20,
        "inegiid": 14020,
        "name": "Cabo Corrientes",
        "stateid": 14
    },
    "14021": {
        "id": 21,
        "inegiid": 14021,
        "name": "Casimiro Castillo",
        "stateid": 14
    },
    "14022": {
        "id": 22,
        "inegiid": 14022,
        "name": "Cihuatlán",
        "stateid": 14
    },
    "14023": {
        "id": 23,
        "inegiid": 14023,
        "name": "Zapotlán el Grande",
        "stateid": 14
    },
    "14024": {
        "id": 24,
        "inegiid": 14024,
        "name": "Cocula",
        "stateid": 14
    },
    "14025": {
        "id": 25,
        "inegiid": 14025,
        "name": "Colotlán",
        "stateid": 14
    },
    "14026": {
        "id": 26,
        "inegiid": 14026,
        "name": "Concepción de Buenos Aires",
        "stateid": 14
    },
    "14027": {
        "id": 27,
        "inegiid": 14027,
        "name": "Cuautitlán de García Barragán",
        "stateid": 14
    },
    "14028": {
        "id": 28,
        "inegiid": 14028,
        "name": "Cuautla",
        "stateid": 14
    },
    "14029": {
        "id": 29,
        "inegiid": 14029,
        "name": "Cuquío",
        "stateid": 14
    },
    "14030": {
        "id": 30,
        "inegiid": 14030,
        "name": "Chapala",
        "stateid": 14
    },
    "14031": {
        "id": 31,
        "inegiid": 14031,
        "name": "Chimaltitán",
        "stateid": 14
    },
    "14032": {
        "id": 32,
        "inegiid": 14032,
        "name": "Chiquilistlán",
        "stateid": 14
    },
    "14033": {
        "id": 33,
        "inegiid": 14033,
        "name": "Degollado",
        "stateid": 14
    },
    "14034": {
        "id": 34,
        "inegiid": 14034,
        "name": "Ejutla",
        "stateid": 14
    },
    "14035": {
        "id": 35,
        "inegiid": 14035,
        "name": "Encarnación de Díaz",
        "stateid": 14
    },
    "14036": {
        "id": 36,
        "inegiid": 14036,
        "name": "Etzatlán",
        "stateid": 14
    },
    "14037": {
        "id": 37,
        "inegiid": 14037,
        "name": "El Grullo",
        "stateid": 14
    },
    "14038": {
        "id": 38,
        "inegiid": 14038,
        "name": "Guachinango",
        "stateid": 14
    },
    "14039": {
        "id": 39,
        "inegiid": 14039,
        "name": "Guadalajara",
        "stateid": 14
    },
    "14040": {
        "id": 40,
        "inegiid": 14040,
        "name": "Hostotipaquillo",
        "stateid": 14
    },
    "14041": {
        "id": 41,
        "inegiid": 14041,
        "name": "Huejúcar",
        "stateid": 14
    },
    "14042": {
        "id": 42,
        "inegiid": 14042,
        "name": "Huejuquilla el Alto",
        "stateid": 14
    },
    "14043": {
        "id": 43,
        "inegiid": 14043,
        "name": "La Huerta",
        "stateid": 14
    },
    "14044": {
        "id": 44,
        "inegiid": 14044,
        "name": "Ixtlahuacán de los Membrillos",
        "stateid": 14
    },
    "14045": {
        "id": 45,
        "inegiid": 14045,
        "name": "Ixtlahuacán del Río",
        "stateid": 14
    },
    "14046": {
        "id": 46,
        "inegiid": 14046,
        "name": "Jalostotitlán",
        "stateid": 14
    },
    "14047": {
        "id": 47,
        "inegiid": 14047,
        "name": "Jamay",
        "stateid": 14
    },
    "14048": {
        "id": 48,
        "inegiid": 14048,
        "name": "Jesús María",
        "stateid": 14
    },
    "14049": {
        "id": 49,
        "inegiid": 14049,
        "name": "Jilotlán de los Dolores",
        "stateid": 14
    },
    "14050": {
        "id": 50,
        "inegiid": 14050,
        "name": "Jocotepec",
        "stateid": 14
    },
    "14051": {
        "id": 51,
        "inegiid": 14051,
        "name": "Juanacatlán",
        "stateid": 14
    },
    "14052": {
        "id": 52,
        "inegiid": 14052,
        "name": "Juchitlán",
        "stateid": 14
    },
    "14053": {
        "id": 53,
        "inegiid": 14053,
        "name": "Lagos de Moreno",
        "stateid": 14
    },
    "14054": {
        "id": 54,
        "inegiid": 14054,
        "name": "El Limón",
        "stateid": 14
    },
    "14055": {
        "id": 55,
        "inegiid": 14055,
        "name": "Magdalena",
        "stateid": 14
    },
    "14056": {
        "id": 56,
        "inegiid": 14056,
        "name": "Santa María del Oro",
        "stateid": 14
    },
    "14057": {
        "id": 57,
        "inegiid": 14057,
        "name": "La Manzanilla de la Paz",
        "stateid": 14
    },
    "14058": {
        "id": 58,
        "inegiid": 14058,
        "name": "Mascota",
        "stateid": 14
    },
    "14059": {
        "id": 59,
        "inegiid": 14059,
        "name": "Mazamitla",
        "stateid": 14
    },
    "14060": {
        "id": 60,
        "inegiid": 14060,
        "name": "Mexticacán",
        "stateid": 14
    },
    "14061": {
        "id": 61,
        "inegiid": 14061,
        "name": "Mezquitic",
        "stateid": 14
    },
    "14062": {
        "id": 62,
        "inegiid": 14062,
        "name": "Mixtlán",
        "stateid": 14
    },
    "14063": {
        "id": 63,
        "inegiid": 14063,
        "name": "Ocotlán",
        "stateid": 14
    },
    "14064": {
        "id": 64,
        "inegiid": 14064,
        "name": "Ojuelos de Jalisco",
        "stateid": 14
    },
    "14065": {
        "id": 65,
        "inegiid": 14065,
        "name": "Pihuamo",
        "stateid": 14
    },
    "14066": {
        "id": 66,
        "inegiid": 14066,
        "name": "Poncitlán",
        "stateid": 14
    },
    "14067": {
        "id": 67,
        "inegiid": 14067,
        "name": "Puerto Vallarta",
        "stateid": 14
    },
    "14068": {
        "id": 68,
        "inegiid": 14068,
        "name": "Villa Purificación",
        "stateid": 14
    },
    "14069": {
        "id": 69,
        "inegiid": 14069,
        "name": "Quitupan",
        "stateid": 14
    },
    "14070": {
        "id": 70,
        "inegiid": 14070,
        "name": "El Salto",
        "stateid": 14
    },
    "14071": {
        "id": 71,
        "inegiid": 14071,
        "name": "San Cristóbal de la Barranca",
        "stateid": 14
    },
    "14072": {
        "id": 72,
        "inegiid": 14072,
        "name": "San Diego de Alejandría",
        "stateid": 14
    },
    "14073": {
        "id": 73,
        "inegiid": 14073,
        "name": "San Juan de los Lagos",
        "stateid": 14
    },
    "14074": {
        "id": 74,
        "inegiid": 14074,
        "name": "San Julián",
        "stateid": 14
    },
    "14075": {
        "id": 75,
        "inegiid": 14075,
        "name": "San Marcos",
        "stateid": 14
    },
    "14076": {
        "id": 76,
        "inegiid": 14076,
        "name": "San Martín de Bolaños",
        "stateid": 14
    },
    "14077": {
        "id": 77,
        "inegiid": 14077,
        "name": "San Martín Hidalgo",
        "stateid": 14
    },
    "14078": {
        "id": 78,
        "inegiid": 14078,
        "name": "San Miguel el Alto",
        "stateid": 14
    },
    "14079": {
        "id": 79,
        "inegiid": 14079,
        "name": "Gómez Farías",
        "stateid": 14
    },
    "14080": {
        "id": 80,
        "inegiid": 14080,
        "name": "San Sebastián del Oeste",
        "stateid": 14
    },
    "14081": {
        "id": 81,
        "inegiid": 14081,
        "name": "Santa María de los Ángeles",
        "stateid": 14
    },
    "14082": {
        "id": 82,
        "inegiid": 14082,
        "name": "Sayula",
        "stateid": 14
    },
    "14083": {
        "id": 83,
        "inegiid": 14083,
        "name": "Tala",
        "stateid": 14
    },
    "14084": {
        "id": 84,
        "inegiid": 14084,
        "name": "Talpa de Allende",
        "stateid": 14
    },
    "14085": {
        "id": 85,
        "inegiid": 14085,
        "name": "Tamazula de Gordiano",
        "stateid": 14
    },
    "14086": {
        "id": 86,
        "inegiid": 14086,
        "name": "Tapalpa",
        "stateid": 14
    },
    "14087": {
        "id": 87,
        "inegiid": 14087,
        "name": "Tecalitlán",
        "stateid": 14
    },
    "14088": {
        "id": 88,
        "inegiid": 14088,
        "name": "Tecolotlán",
        "stateid": 14
    },
    "14089": {
        "id": 89,
        "inegiid": 14089,
        "name": "Techaluta de Montenegro",
        "stateid": 14
    },
    "14090": {
        "id": 90,
        "inegiid": 14090,
        "name": "Tenamaxtlán",
        "stateid": 14
    },
    "14091": {
        "id": 91,
        "inegiid": 14091,
        "name": "Teocaltiche",
        "stateid": 14
    },
    "14092": {
        "id": 92,
        "inegiid": 14092,
        "name": "Teocuitatlán de Corona",
        "stateid": 14
    },
    "14093": {
        "id": 93,
        "inegiid": 14093,
        "name": "Tepatitlán de Morelos",
        "stateid": 14
    },
    "14094": {
        "id": 94,
        "inegiid": 14094,
        "name": "Tequila",
        "stateid": 14
    },
    "14095": {
        "id": 95,
        "inegiid": 14095,
        "name": "Teuchitlán",
        "stateid": 14
    },
    "14096": {
        "id": 96,
        "inegiid": 14096,
        "name": "Tizapán el Alto",
        "stateid": 14
    },
    "14097": {
        "id": 97,
        "inegiid": 14097,
        "name": "Tlajomulco de Zúñiga",
        "stateid": 14
    },
    "14098": {
        "id": 98,
        "inegiid": 14098,
        "name": "Tlaquepaque",
        "stateid": 14
    },
    "14099": {
        "id": 99,
        "inegiid": 14099,
        "name": "Tolimán",
        "stateid": 14
    },
    "14100": {
        "id": 100,
        "inegiid": 14100,
        "name": "Tomatlán",
        "stateid": 14
    },
    "14101": {
        "id": 101,
        "inegiid": 14101,
        "name": "Tonalá",
        "stateid": 14
    },
    "14102": {
        "id": 102,
        "inegiid": 14102,
        "name": "Tonaya",
        "stateid": 14
    },
    "14103": {
        "id": 103,
        "inegiid": 14103,
        "name": "Tonila",
        "stateid": 14
    },
    "14104": {
        "id": 104,
        "inegiid": 14104,
        "name": "Totatiche",
        "stateid": 14
    },
    "14105": {
        "id": 105,
        "inegiid": 14105,
        "name": "Tototlán",
        "stateid": 14
    },
    "14106": {
        "id": 106,
        "inegiid": 14106,
        "name": "Tuxcacuesco",
        "stateid": 14
    },
    "14107": {
        "id": 107,
        "inegiid": 14107,
        "name": "Tuxcueca",
        "stateid": 14
    },
    "14108": {
        "id": 108,
        "inegiid": 14108,
        "name": "Tuxpan",
        "stateid": 14
    },
    "14109": {
        "id": 109,
        "inegiid": 14109,
        "name": "Unión de San Antonio",
        "stateid": 14
    },
    "14110": {
        "id": 110,
        "inegiid": 14110,
        "name": "Unión de Tula",
        "stateid": 14
    },
    "14111": {
        "id": 111,
        "inegiid": 14111,
        "name": "Valle de Guadalupe",
        "stateid": 14
    },
    "14112": {
        "id": 112,
        "inegiid": 14112,
        "name": "Valle de Juárez",
        "stateid": 14
    },
    "14113": {
        "id": 113,
        "inegiid": 14113,
        "name": "San Gabriel",
        "stateid": 14
    },
    "14114": {
        "id": 114,
        "inegiid": 14114,
        "name": "Villa Corona",
        "stateid": 14
    },
    "14115": {
        "id": 115,
        "inegiid": 14115,
        "name": "Villa Guerrero",
        "stateid": 14
    },
    "14116": {
        "id": 116,
        "inegiid": 14116,
        "name": "Villa Hidalgo",
        "stateid": 14
    },
    "14117": {
        "id": 117,
        "inegiid": 14117,
        "name": "Cañadas de Obregón",
        "stateid": 14
    },
    "14118": {
        "id": 118,
        "inegiid": 14118,
        "name": "Yahualica de González Gallo",
        "stateid": 14
    },
    "14119": {
        "id": 119,
        "inegiid": 14119,
        "name": "Zacoalco de Torres",
        "stateid": 14
    },
    "14120": {
        "id": 120,
        "inegiid": 14120,
        "name": "Zapopan",
        "stateid": 14
    },
    "14121": {
        "id": 121,
        "inegiid": 14121,
        "name": "Zapotiltic",
        "stateid": 14
    },
    "14122": {
        "id": 122,
        "inegiid": 14122,
        "name": "Zapotitlán de Vadillo",
        "stateid": 14
    },
    "14123": {
        "id": 123,
        "inegiid": 14123,
        "name": "Zapotlán del Rey",
        "stateid": 14
    },
    "14124": {
        "id": 124,
        "inegiid": 14124,
        "name": "Zapotlanejo",
        "stateid": 14
    },
    "14125": {
        "id": 125,
        "inegiid": 14125,
        "name": "San Ignacio Cerro Gordo",
        "stateid": 14
    },
    "15001": {
        "id": 1,
        "inegiid": 15001,
        "name": "Acambay",
        "stateid": 15
    },
    "15002": {
        "id": 2,
        "inegiid": 15002,
        "name": "Acolman",
        "stateid": 15
    },
    "15003": {
        "id": 3,
        "inegiid": 15003,
        "name": "Aculco",
        "stateid": 15
    },
    "15004": {
        "id": 4,
        "inegiid": 15004,
        "name": "Almoloya de Alquisiras",
        "stateid": 15
    },
    "15005": {
        "id": 5,
        "inegiid": 15005,
        "name": "Almoloya de Juárez",
        "stateid": 15
    },
    "15006": {
        "id": 6,
        "inegiid": 15006,
        "name": "Almoloya del Río",
        "stateid": 15
    },
    "15007": {
        "id": 7,
        "inegiid": 15007,
        "name": "Amanalco",
        "stateid": 15
    },
    "15008": {
        "id": 8,
        "inegiid": 15008,
        "name": "Amatepec",
        "stateid": 15
    },
    "15009": {
        "id": 9,
        "inegiid": 15009,
        "name": "Amecameca",
        "stateid": 15
    },
    "15010": {
        "id": 10,
        "inegiid": 15010,
        "name": "Apaxco",
        "stateid": 15
    },
    "15011": {
        "id": 11,
        "inegiid": 15011,
        "name": "Atenco",
        "stateid": 15
    },
    "15012": {
        "id": 12,
        "inegiid": 15012,
        "name": "Atizapán",
        "stateid": 15
    },
    "15013": {
        "id": 13,
        "inegiid": 15013,
        "name": "Atizapán de Zaragoza",
        "stateid": 15
    },
    "15014": {
        "id": 14,
        "inegiid": 15014,
        "name": "Atlacomulco",
        "stateid": 15
    },
    "15015": {
        "id": 15,
        "inegiid": 15015,
        "name": "Atlautla",
        "stateid": 15
    },
    "15016": {
        "id": 16,
        "inegiid": 15016,
        "name": "Axapusco",
        "stateid": 15
    },
    "15017": {
        "id": 17,
        "inegiid": 15017,
        "name": "Ayapango",
        "stateid": 15
    },
    "15018": {
        "id": 18,
        "inegiid": 15018,
        "name": "Calimaya",
        "stateid": 15
    },
    "15019": {
        "id": 19,
        "inegiid": 15019,
        "name": "Capulhuac",
        "stateid": 15
    },
    "15020": {
        "id": 20,
        "inegiid": 15020,
        "name": "Coacalco de Berriozábal",
        "stateid": 15
    },
    "15021": {
        "id": 21,
        "inegiid": 15021,
        "name": "Coatepec Harinas",
        "stateid": 15
    },
    "15022": {
        "id": 22,
        "inegiid": 15022,
        "name": "Cocotitlán",
        "stateid": 15
    },
    "15023": {
        "id": 23,
        "inegiid": 15023,
        "name": "Coyotepec",
        "stateid": 15
    },
    "15024": {
        "id": 24,
        "inegiid": 15024,
        "name": "Cuautitlán",
        "stateid": 15
    },
    "15025": {
        "id": 25,
        "inegiid": 15025,
        "name": "Chalco",
        "stateid": 15
    },
    "15026": {
        "id": 26,
        "inegiid": 15026,
        "name": "Chapa de Mota",
        "stateid": 15
    },
    "15027": {
        "id": 27,
        "inegiid": 15027,
        "name": "Chapultepec",
        "stateid": 15
    },
    "15028": {
        "id": 28,
        "inegiid": 15028,
        "name": "Chiautla",
        "stateid": 15
    },
    "15029": {
        "id": 29,
        "inegiid": 15029,
        "name": "Chicoloapan",
        "stateid": 15
    },
    "15030": {
        "id": 30,
        "inegiid": 15030,
        "name": "Chiconcuac",
        "stateid": 15
    },
    "15031": {
        "id": 31,
        "inegiid": 15031,
        "name": "Chimalhuacán",
        "stateid": 15
    },
    "15032": {
        "id": 32,
        "inegiid": 15032,
        "name": "Donato Guerra",
        "stateid": 15
    },
    "15033": {
        "id": 33,
        "inegiid": 15033,
        "name": "Ecatepec de Morelos",
        "stateid": 15
    },
    "15034": {
        "id": 34,
        "inegiid": 15034,
        "name": "Ecatzingo",
        "stateid": 15
    },
    "15035": {
        "id": 35,
        "inegiid": 15035,
        "name": "Huehuetoca",
        "stateid": 15
    },
    "15036": {
        "id": 36,
        "inegiid": 15036,
        "name": "Hueypoxtla",
        "stateid": 15
    },
    "15037": {
        "id": 37,
        "inegiid": 15037,
        "name": "Huixquilucan",
        "stateid": 15
    },
    "15038": {
        "id": 38,
        "inegiid": 15038,
        "name": "Isidro Fabela",
        "stateid": 15
    },
    "15039": {
        "id": 39,
        "inegiid": 15039,
        "name": "Ixtapaluca",
        "stateid": 15
    },
    "15040": {
        "id": 40,
        "inegiid": 15040,
        "name": "Ixtapan de la Sal",
        "stateid": 15
    },
    "15041": {
        "id": 41,
        "inegiid": 15041,
        "name": "Ixtapan del Oro",
        "stateid": 15
    },
    "15042": {
        "id": 42,
        "inegiid": 15042,
        "name": "Ixtlahuaca",
        "stateid": 15
    },
    "15043": {
        "id": 43,
        "inegiid": 15043,
        "name": "Xalatlaco",
        "stateid": 15
    },
    "15044": {
        "id": 44,
        "inegiid": 15044,
        "name": "Jaltenco",
        "stateid": 15
    },
    "15045": {
        "id": 45,
        "inegiid": 15045,
        "name": "Jilotepec",
        "stateid": 15
    },
    "15046": {
        "id": 46,
        "inegiid": 15046,
        "name": "Jilotzingo",
        "stateid": 15
    },
    "15047": {
        "id": 47,
        "inegiid": 15047,
        "name": "Jiquipilco",
        "stateid": 15
    },
    "15048": {
        "id": 48,
        "inegiid": 15048,
        "name": "Jocotitlán",
        "stateid": 15
    },
    "15049": {
        "id": 49,
        "inegiid": 15049,
        "name": "Joquicingo",
        "stateid": 15
    },
    "15050": {
        "id": 50,
        "inegiid": 15050,
        "name": "Juchitepec",
        "stateid": 15
    },
    "15051": {
        "id": 51,
        "inegiid": 15051,
        "name": "Lerma",
        "stateid": 15
    },
    "15052": {
        "id": 52,
        "inegiid": 15052,
        "name": "Malinalco",
        "stateid": 15
    },
    "15053": {
        "id": 53,
        "inegiid": 15053,
        "name": "Melchor Ocampo",
        "stateid": 15
    },
    "15054": {
        "id": 54,
        "inegiid": 15054,
        "name": "Metepec",
        "stateid": 15
    },
    "15055": {
        "id": 55,
        "inegiid": 15055,
        "name": "Mexicaltzingo",
        "stateid": 15
    },
    "15056": {
        "id": 56,
        "inegiid": 15056,
        "name": "Morelos",
        "stateid": 15
    },
    "15057": {
        "id": 57,
        "inegiid": 15057,
        "name": "Naucalpan de Juárez",
        "stateid": 15
    },
    "15058": {
        "id": 58,
        "inegiid": 15058,
        "name": "Nezahualcóyotl",
        "stateid": 15
    },
    "15059": {
        "id": 59,
        "inegiid": 15059,
        "name": "Nextlalpan",
        "stateid": 15
    },
    "15060": {
        "id": 60,
        "inegiid": 15060,
        "name": "Nicolás Romero",
        "stateid": 15
    },
    "15061": {
        "id": 61,
        "inegiid": 15061,
        "name": "Nopaltepec",
        "stateid": 15
    },
    "15062": {
        "id": 62,
        "inegiid": 15062,
        "name": "Ocoyoacac",
        "stateid": 15
    },
    "15063": {
        "id": 63,
        "inegiid": 15063,
        "name": "Ocuilan",
        "stateid": 15
    },
    "15064": {
        "id": 64,
        "inegiid": 15064,
        "name": "El Oro",
        "stateid": 15
    },
    "15065": {
        "id": 65,
        "inegiid": 15065,
        "name": "Otumba",
        "stateid": 15
    },
    "15066": {
        "id": 66,
        "inegiid": 15066,
        "name": "Otzoloapan",
        "stateid": 15
    },
    "15067": {
        "id": 67,
        "inegiid": 15067,
        "name": "Otzolotepec",
        "stateid": 15
    },
    "15068": {
        "id": 68,
        "inegiid": 15068,
        "name": "Ozumba",
        "stateid": 15
    },
    "15069": {
        "id": 69,
        "inegiid": 15069,
        "name": "Papalotla",
        "stateid": 15
    },
    "15070": {
        "id": 70,
        "inegiid": 15070,
        "name": "La Paz",
        "stateid": 15
    },
    "15071": {
        "id": 71,
        "inegiid": 15071,
        "name": "Polotitlán",
        "stateid": 15
    },
    "15072": {
        "id": 72,
        "inegiid": 15072,
        "name": "Rayón",
        "stateid": 15
    },
    "15073": {
        "id": 73,
        "inegiid": 15073,
        "name": "San Antonio la Isla",
        "stateid": 15
    },
    "15074": {
        "id": 74,
        "inegiid": 15074,
        "name": "San Felipe del Progreso",
        "stateid": 15
    },
    "15075": {
        "id": 75,
        "inegiid": 15075,
        "name": "San Martín de las Pirámides",
        "stateid": 15
    },
    "15076": {
        "id": 76,
        "inegiid": 15076,
        "name": "San Mateo Atenco",
        "stateid": 15
    },
    "15077": {
        "id": 77,
        "inegiid": 15077,
        "name": "San Simón de Guerrero",
        "stateid": 15
    },
    "15078": {
        "id": 78,
        "inegiid": 15078,
        "name": "Santo Tomás",
        "stateid": 15
    },
    "15079": {
        "id": 79,
        "inegiid": 15079,
        "name": "Soyaniquilpan de Juárez",
        "stateid": 15
    },
    "15080": {
        "id": 80,
        "inegiid": 15080,
        "name": "Sultepec",
        "stateid": 15
    },
    "15081": {
        "id": 81,
        "inegiid": 15081,
        "name": "Tecámac",
        "stateid": 15
    },
    "15082": {
        "id": 82,
        "inegiid": 15082,
        "name": "Tejupilco",
        "stateid": 15
    },
    "15083": {
        "id": 83,
        "inegiid": 15083,
        "name": "Temamatla",
        "stateid": 15
    },
    "15084": {
        "id": 84,
        "inegiid": 15084,
        "name": "Temascalapa",
        "stateid": 15
    },
    "15085": {
        "id": 85,
        "inegiid": 15085,
        "name": "Temascalcingo",
        "stateid": 15
    },
    "15086": {
        "id": 86,
        "inegiid": 15086,
        "name": "Temascaltepec",
        "stateid": 15
    },
    "15087": {
        "id": 87,
        "inegiid": 15087,
        "name": "Temoaya",
        "stateid": 15
    },
    "15088": {
        "id": 88,
        "inegiid": 15088,
        "name": "Tenancingo",
        "stateid": 15
    },
    "15089": {
        "id": 89,
        "inegiid": 15089,
        "name": "Tenango del Aire",
        "stateid": 15
    },
    "15090": {
        "id": 90,
        "inegiid": 15090,
        "name": "Tenango del Valle",
        "stateid": 15
    },
    "15091": {
        "id": 91,
        "inegiid": 15091,
        "name": "Teoloyucán",
        "stateid": 15
    },
    "15092": {
        "id": 92,
        "inegiid": 15092,
        "name": "Teotihuacán",
        "stateid": 15
    },
    "15093": {
        "id": 93,
        "inegiid": 15093,
        "name": "Tepetlaoxtoc",
        "stateid": 15
    },
    "15094": {
        "id": 94,
        "inegiid": 15094,
        "name": "Tepetlixpa",
        "stateid": 15
    },
    "15095": {
        "id": 95,
        "inegiid": 15095,
        "name": "Tepotzotlán",
        "stateid": 15
    },
    "15096": {
        "id": 96,
        "inegiid": 15096,
        "name": "Tequixquiac",
        "stateid": 15
    },
    "15097": {
        "id": 97,
        "inegiid": 15097,
        "name": "Texcaltitlán",
        "stateid": 15
    },
    "15098": {
        "id": 98,
        "inegiid": 15098,
        "name": "Texcalyacac",
        "stateid": 15
    },
    "15099": {
        "id": 99,
        "inegiid": 15099,
        "name": "Texcoco",
        "stateid": 15
    },
    "15100": {
        "id": 100,
        "inegiid": 15100,
        "name": "Tezoyuca",
        "stateid": 15
    },
    "15101": {
        "id": 101,
        "inegiid": 15101,
        "name": "Tianguistenco",
        "stateid": 15
    },
    "15102": {
        "id": 102,
        "inegiid": 15102,
        "name": "Timilpan",
        "stateid": 15
    },
    "15103": {
        "id": 103,
        "inegiid": 15103,
        "name": "Tlalmanalco",
        "stateid": 15
    },
    "15104": {
        "id": 104,
        "inegiid": 15104,
        "name": "Tlalnepantla de Baz",
        "stateid": 15
    },
    "15105": {
        "id": 105,
        "inegiid": 15105,
        "name": "Tlatlaya",
        "stateid": 15
    },
    "15106": {
        "id": 106,
        "inegiid": 15106,
        "name": "Toluca",
        "stateid": 15
    },
    "15107": {
        "id": 107,
        "inegiid": 15107,
        "name": "Tonatico",
        "stateid": 15
    },
    "15108": {
        "id": 108,
        "inegiid": 15108,
        "name": "Tultepec",
        "stateid": 15
    },
    "15109": {
        "id": 109,
        "inegiid": 15109,
        "name": "Tultitlán",
        "stateid": 15
    },
    "15110": {
        "id": 110,
        "inegiid": 15110,
        "name": "Valle de Bravo",
        "stateid": 15
    },
    "15111": {
        "id": 111,
        "inegiid": 15111,
        "name": "Villa de Allende",
        "stateid": 15
    },
    "15112": {
        "id": 112,
        "inegiid": 15112,
        "name": "Villa del Carbón",
        "stateid": 15
    },
    "15113": {
        "id": 113,
        "inegiid": 15113,
        "name": "Villa Guerrero",
        "stateid": 15
    },
    "15114": {
        "id": 114,
        "inegiid": 15114,
        "name": "Villa Victoria",
        "stateid": 15
    },
    "15115": {
        "id": 115,
        "inegiid": 15115,
        "name": "Xonacatlán",
        "stateid": 15
    },
    "15116": {
        "id": 116,
        "inegiid": 15116,
        "name": "Zacazonapan",
        "stateid": 15
    },
    "15117": {
        "id": 117,
        "inegiid": 15117,
        "name": "Zacualpan",
        "stateid": 15
    },
    "15118": {
        "id": 118,
        "inegiid": 15118,
        "name": "Zinacantepec",
        "stateid": 15
    },
    "15119": {
        "id": 119,
        "inegiid": 15119,
        "name": "Zumpahuacán",
        "stateid": 15
    },
    "15120": {
        "id": 120,
        "inegiid": 15120,
        "name": "Zumpango",
        "stateid": 15
    },
    "15121": {
        "id": 121,
        "inegiid": 15121,
        "name": "Cuautitlán Izcalli",
        "stateid": 15
    },
    "15122": {
        "id": 122,
        "inegiid": 15122,
        "name": "Valle de Chalco Solidaridad",
        "stateid": 15
    },
    "15123": {
        "id": 123,
        "inegiid": 15123,
        "name": "Luvianos",
        "stateid": 15
    },
    "15124": {
        "id": 124,
        "inegiid": 15124,
        "name": "San José del Rincón",
        "stateid": 15
    },
    "15125": {
        "id": 125,
        "inegiid": 15125,
        "name": "Tonanitla",
        "stateid": 15
    },
    "16001": {
        "id": 1,
        "inegiid": 16001,
        "name": "Acuitzio",
        "stateid": 16
    },
    "16002": {
        "id": 2,
        "inegiid": 16002,
        "name": "Aguililla",
        "stateid": 16
    },
    "16003": {
        "id": 3,
        "inegiid": 16003,
        "name": "Álvaro Obregón",
        "stateid": 16
    },
    "16004": {
        "id": 4,
        "inegiid": 16004,
        "name": "Angamacutiro",
        "stateid": 16
    },
    "16005": {
        "id": 5,
        "inegiid": 16005,
        "name": "Angangueo",
        "stateid": 16
    },
    "16006": {
        "id": 6,
        "inegiid": 16006,
        "name": "Apatzingán",
        "stateid": 16
    },
    "16007": {
        "id": 7,
        "inegiid": 16007,
        "name": "Aporo",
        "stateid": 16
    },
    "16008": {
        "id": 8,
        "inegiid": 16008,
        "name": "Aquila",
        "stateid": 16
    },
    "16009": {
        "id": 9,
        "inegiid": 16009,
        "name": "Ario",
        "stateid": 16
    },
    "16010": {
        "id": 10,
        "inegiid": 16010,
        "name": "Arteaga",
        "stateid": 16
    },
    "16011": {
        "id": 11,
        "inegiid": 16011,
        "name": "Briseñas",
        "stateid": 16
    },
    "16012": {
        "id": 12,
        "inegiid": 16012,
        "name": "Buenavista",
        "stateid": 16
    },
    "16013": {
        "id": 13,
        "inegiid": 16013,
        "name": "Carácuaro",
        "stateid": 16
    },
    "16014": {
        "id": 14,
        "inegiid": 16014,
        "name": "Coahuayana",
        "stateid": 16
    },
    "16015": {
        "id": 15,
        "inegiid": 16015,
        "name": "Coalcomán de Vázquez Pallares",
        "stateid": 16
    },
    "16016": {
        "id": 16,
        "inegiid": 16016,
        "name": "Coeneo",
        "stateid": 16
    },
    "16017": {
        "id": 17,
        "inegiid": 16017,
        "name": "Contepec",
        "stateid": 16
    },
    "16018": {
        "id": 18,
        "inegiid": 16018,
        "name": "Copándaro",
        "stateid": 16
    },
    "16019": {
        "id": 19,
        "inegiid": 16019,
        "name": "Cotija",
        "stateid": 16
    },
    "16020": {
        "id": 20,
        "inegiid": 16020,
        "name": "Cuitzeo",
        "stateid": 16
    },
    "16021": {
        "id": 21,
        "inegiid": 16021,
        "name": "Charapan",
        "stateid": 16
    },
    "16022": {
        "id": 22,
        "inegiid": 16022,
        "name": "Charo",
        "stateid": 16
    },
    "16023": {
        "id": 23,
        "inegiid": 16023,
        "name": "Chavinda",
        "stateid": 16
    },
    "16024": {
        "id": 24,
        "inegiid": 16024,
        "name": "Cherán",
        "stateid": 16
    },
    "16025": {
        "id": 25,
        "inegiid": 16025,
        "name": "Chilchota",
        "stateid": 16
    },
    "16026": {
        "id": 26,
        "inegiid": 16026,
        "name": "Chinicuila",
        "stateid": 16
    },
    "16027": {
        "id": 27,
        "inegiid": 16027,
        "name": "Chucándiro",
        "stateid": 16
    },
    "16028": {
        "id": 28,
        "inegiid": 16028,
        "name": "Churintzio",
        "stateid": 16
    },
    "16029": {
        "id": 29,
        "inegiid": 16029,
        "name": "Churumuco",
        "stateid": 16
    },
    "16030": {
        "id": 30,
        "inegiid": 16030,
        "name": "Ecuandureo",
        "stateid": 16
    },
    "16031": {
        "id": 31,
        "inegiid": 16031,
        "name": "Epitacio Huerta",
        "stateid": 16
    },
    "16032": {
        "id": 32,
        "inegiid": 16032,
        "name": "Erongarícuaro",
        "stateid": 16
    },
    "16033": {
        "id": 33,
        "inegiid": 16033,
        "name": "Gabriel Zamora",
        "stateid": 16
    },
    "16034": {
        "id": 34,
        "inegiid": 16034,
        "name": "Hidalgo",
        "stateid": 16
    },
    "16035": {
        "id": 35,
        "inegiid": 16035,
        "name": "La Huacana",
        "stateid": 16
    },
    "16036": {
        "id": 36,
        "inegiid": 16036,
        "name": "Huandacareo",
        "stateid": 16
    },
    "16037": {
        "id": 37,
        "inegiid": 16037,
        "name": "Huaniqueo",
        "stateid": 16
    },
    "16038": {
        "id": 38,
        "inegiid": 16038,
        "name": "Huetamo",
        "stateid": 16
    },
    "16039": {
        "id": 39,
        "inegiid": 16039,
        "name": "Huiramba",
        "stateid": 16
    },
    "16040": {
        "id": 40,
        "inegiid": 16040,
        "name": "Indaparapeo",
        "stateid": 16
    },
    "16041": {
        "id": 41,
        "inegiid": 16041,
        "name": "Irimbo",
        "stateid": 16
    },
    "16042": {
        "id": 42,
        "inegiid": 16042,
        "name": "Ixtlán",
        "stateid": 16
    },
    "16043": {
        "id": 43,
        "inegiid": 16043,
        "name": "Jacona",
        "stateid": 16
    },
    "16044": {
        "id": 44,
        "inegiid": 16044,
        "name": "Jiménez",
        "stateid": 16
    },
    "16045": {
        "id": 45,
        "inegiid": 16045,
        "name": "Jiquilpan",
        "stateid": 16
    },
    "16046": {
        "id": 46,
        "inegiid": 16046,
        "name": "Juárez",
        "stateid": 16
    },
    "16047": {
        "id": 47,
        "inegiid": 16047,
        "name": "Jungapeo",
        "stateid": 16
    },
    "16048": {
        "id": 48,
        "inegiid": 16048,
        "name": "Lagunillas",
        "stateid": 16
    },
    "16049": {
        "id": 49,
        "inegiid": 16049,
        "name": "Madero",
        "stateid": 16
    },
    "16050": {
        "id": 50,
        "inegiid": 16050,
        "name": "Maravatío",
        "stateid": 16
    },
    "16051": {
        "id": 51,
        "inegiid": 16051,
        "name": "Marcos Castellanos",
        "stateid": 16
    },
    "16052": {
        "id": 52,
        "inegiid": 16052,
        "name": "Lázaro Cárdenas",
        "stateid": 16
    },
    "16053": {
        "id": 53,
        "inegiid": 16053,
        "name": "Morelia",
        "stateid": 16
    },
    "16054": {
        "id": 54,
        "inegiid": 16054,
        "name": "Morelos",
        "stateid": 16
    },
    "16055": {
        "id": 55,
        "inegiid": 16055,
        "name": "Múgica",
        "stateid": 16
    },
    "16056": {
        "id": 56,
        "inegiid": 16056,
        "name": "Nahuatzen",
        "stateid": 16
    },
    "16057": {
        "id": 57,
        "inegiid": 16057,
        "name": "Nocupétaro",
        "stateid": 16
    },
    "16058": {
        "id": 58,
        "inegiid": 16058,
        "name": "Nuevo Parangaricutiro",
        "stateid": 16
    },
    "16059": {
        "id": 59,
        "inegiid": 16059,
        "name": "Nuevo Urecho",
        "stateid": 16
    },
    "16060": {
        "id": 60,
        "inegiid": 16060,
        "name": "Numarán",
        "stateid": 16
    },
    "16061": {
        "id": 61,
        "inegiid": 16061,
        "name": "Ocampo",
        "stateid": 16
    },
    "16062": {
        "id": 62,
        "inegiid": 16062,
        "name": "Pajacuarán",
        "stateid": 16
    },
    "16063": {
        "id": 63,
        "inegiid": 16063,
        "name": "Panindícuaro",
        "stateid": 16
    },
    "16064": {
        "id": 64,
        "inegiid": 16064,
        "name": "Parácuaro",
        "stateid": 16
    },
    "16065": {
        "id": 65,
        "inegiid": 16065,
        "name": "Paracho",
        "stateid": 16
    },
    "16066": {
        "id": 66,
        "inegiid": 16066,
        "name": "Pátzcuaro",
        "stateid": 16
    },
    "16067": {
        "id": 67,
        "inegiid": 16067,
        "name": "Penjamillo",
        "stateid": 16
    },
    "16068": {
        "id": 68,
        "inegiid": 16068,
        "name": "Peribán",
        "stateid": 16
    },
    "16069": {
        "id": 69,
        "inegiid": 16069,
        "name": "La Piedad",
        "stateid": 16
    },
    "16070": {
        "id": 70,
        "inegiid": 16070,
        "name": "Purépero",
        "stateid": 16
    },
    "16071": {
        "id": 71,
        "inegiid": 16071,
        "name": "Puruándiro",
        "stateid": 16
    },
    "16072": {
        "id": 72,
        "inegiid": 16072,
        "name": "Queréndaro",
        "stateid": 16
    },
    "16073": {
        "id": 73,
        "inegiid": 16073,
        "name": "Quiroga",
        "stateid": 16
    },
    "16074": {
        "id": 74,
        "inegiid": 16074,
        "name": "Cojumatlán de Régules",
        "stateid": 16
    },
    "16075": {
        "id": 75,
        "inegiid": 16075,
        "name": "Los Reyes",
        "stateid": 16
    },
    "16076": {
        "id": 76,
        "inegiid": 16076,
        "name": "Sahuayo",
        "stateid": 16
    },
    "16077": {
        "id": 77,
        "inegiid": 16077,
        "name": "San Lucas",
        "stateid": 16
    },
    "16078": {
        "id": 78,
        "inegiid": 16078,
        "name": "Santa Ana Maya",
        "stateid": 16
    },
    "16079": {
        "id": 79,
        "inegiid": 16079,
        "name": "Salvador Escalante",
        "stateid": 16
    },
    "16080": {
        "id": 80,
        "inegiid": 16080,
        "name": "Senguio",
        "stateid": 16
    },
    "16081": {
        "id": 81,
        "inegiid": 16081,
        "name": "Susupuato",
        "stateid": 16
    },
    "16082": {
        "id": 82,
        "inegiid": 16082,
        "name": "Tacámbaro",
        "stateid": 16
    },
    "16083": {
        "id": 83,
        "inegiid": 16083,
        "name": "Tancítaro",
        "stateid": 16
    },
    "16084": {
        "id": 84,
        "inegiid": 16084,
        "name": "Tangamandapio",
        "stateid": 16
    },
    "16085": {
        "id": 85,
        "inegiid": 16085,
        "name": "Tangancícuaro",
        "stateid": 16
    },
    "16086": {
        "id": 86,
        "inegiid": 16086,
        "name": "Tanhuato",
        "stateid": 16
    },
    "16087": {
        "id": 87,
        "inegiid": 16087,
        "name": "Taretan",
        "stateid": 16
    },
    "16088": {
        "id": 88,
        "inegiid": 16088,
        "name": "Tarímbaro",
        "stateid": 16
    },
    "16089": {
        "id": 89,
        "inegiid": 16089,
        "name": "Tepalcatepec",
        "stateid": 16
    },
    "16090": {
        "id": 90,
        "inegiid": 16090,
        "name": "Tingambato",
        "stateid": 16
    },
    "16091": {
        "id": 91,
        "inegiid": 16091,
        "name": "Tingüindín",
        "stateid": 16
    },
    "16092": {
        "id": 92,
        "inegiid": 16092,
        "name": "Tiquicheo de Nicolás Romero",
        "stateid": 16
    },
    "16093": {
        "id": 93,
        "inegiid": 16093,
        "name": "Tlalpujahua",
        "stateid": 16
    },
    "16094": {
        "id": 94,
        "inegiid": 16094,
        "name": "Tlazazalca",
        "stateid": 16
    },
    "16095": {
        "id": 95,
        "inegiid": 16095,
        "name": "Tocumbo",
        "stateid": 16
    },
    "16096": {
        "id": 96,
        "inegiid": 16096,
        "name": "Tumbiscatío",
        "stateid": 16
    },
    "16097": {
        "id": 97,
        "inegiid": 16097,
        "name": "Turicato",
        "stateid": 16
    },
    "16098": {
        "id": 98,
        "inegiid": 16098,
        "name": "Tuxpan",
        "stateid": 16
    },
    "16099": {
        "id": 99,
        "inegiid": 16099,
        "name": "Tuzantla",
        "stateid": 16
    },
    "16100": {
        "id": 100,
        "inegiid": 16100,
        "name": "Tzintzuntzan",
        "stateid": 16
    },
    "16101": {
        "id": 101,
        "inegiid": 16101,
        "name": "Tzitzio",
        "stateid": 16
    },
    "16102": {
        "id": 102,
        "inegiid": 16102,
        "name": "Uruapan",
        "stateid": 16
    },
    "16103": {
        "id": 103,
        "inegiid": 16103,
        "name": "Venustiano Carranza",
        "stateid": 16
    },
    "16104": {
        "id": 104,
        "inegiid": 16104,
        "name": "Villamar",
        "stateid": 16
    },
    "16105": {
        "id": 105,
        "inegiid": 16105,
        "name": "Vista Hermosa",
        "stateid": 16
    },
    "16106": {
        "id": 106,
        "inegiid": 16106,
        "name": "Yurécuaro",
        "stateid": 16
    },
    "16107": {
        "id": 107,
        "inegiid": 16107,
        "name": "Zacapu",
        "stateid": 16
    },
    "16108": {
        "id": 108,
        "inegiid": 16108,
        "name": "Zamora",
        "stateid": 16
    },
    "16109": {
        "id": 109,
        "inegiid": 16109,
        "name": "Zináparo",
        "stateid": 16
    },
    "16110": {
        "id": 110,
        "inegiid": 16110,
        "name": "Zinapécuaro",
        "stateid": 16
    },
    "16111": {
        "id": 111,
        "inegiid": 16111,
        "name": "Ziracuaretiro",
        "stateid": 16
    },
    "16112": {
        "id": 112,
        "inegiid": 16112,
        "name": "Zitácuaro",
        "stateid": 16
    },
    "16113": {
        "id": 113,
        "inegiid": 16113,
        "name": "José Sixto Verduzco",
        "stateid": 16
    },
    "17001": {
        "id": 1,
        "inegiid": 17001,
        "name": "Amacuzac",
        "stateid": 17
    },
    "17002": {
        "id": 2,
        "inegiid": 17002,
        "name": "Atlatlahucan",
        "stateid": 17
    },
    "17003": {
        "id": 3,
        "inegiid": 17003,
        "name": "Axochiapan",
        "stateid": 17
    },
    "17004": {
        "id": 4,
        "inegiid": 17004,
        "name": "Ayala",
        "stateid": 17
    },
    "17005": {
        "id": 5,
        "inegiid": 17005,
        "name": "Coatlán del Río",
        "stateid": 17
    },
    "17006": {
        "id": 6,
        "inegiid": 17006,
        "name": "Cuautla",
        "stateid": 17
    },
    "17007": {
        "id": 7,
        "inegiid": 17007,
        "name": "Cuernavaca",
        "stateid": 17
    },
    "17008": {
        "id": 8,
        "inegiid": 17008,
        "name": "Emiliano Zapata",
        "stateid": 17
    },
    "17009": {
        "id": 9,
        "inegiid": 17009,
        "name": "Huitzilac",
        "stateid": 17
    },
    "17010": {
        "id": 10,
        "inegiid": 17010,
        "name": "Jantetelco",
        "stateid": 17
    },
    "17011": {
        "id": 11,
        "inegiid": 17011,
        "name": "Jiutepec",
        "stateid": 17
    },
    "17012": {
        "id": 12,
        "inegiid": 17012,
        "name": "Jojutla",
        "stateid": 17
    },
    "17013": {
        "id": 13,
        "inegiid": 17013,
        "name": "Jonacatepec",
        "stateid": 17
    },
    "17014": {
        "id": 14,
        "inegiid": 17014,
        "name": "Mazatepec",
        "stateid": 17
    },
    "17015": {
        "id": 15,
        "inegiid": 17015,
        "name": "Miacatlán",
        "stateid": 17
    },
    "17016": {
        "id": 16,
        "inegiid": 17016,
        "name": "Ocuituco",
        "stateid": 17
    },
    "17017": {
        "id": 17,
        "inegiid": 17017,
        "name": "Puente de Ixtla",
        "stateid": 17
    },
    "17018": {
        "id": 18,
        "inegiid": 17018,
        "name": "Temixco",
        "stateid": 17
    },
    "17019": {
        "id": 19,
        "inegiid": 17019,
        "name": "Tepalcingo",
        "stateid": 17
    },
    "17020": {
        "id": 20,
        "inegiid": 17020,
        "name": "Tepoztlán",
        "stateid": 17
    },
    "17021": {
        "id": 21,
        "inegiid": 17021,
        "name": "Tetecala",
        "stateid": 17
    },
    "17022": {
        "id": 22,
        "inegiid": 17022,
        "name": "Tetela del Volcán",
        "stateid": 17
    },
    "17023": {
        "id": 23,
        "inegiid": 17023,
        "name": "Tlalnepantla",
        "stateid": 17
    },
    "17024": {
        "id": 24,
        "inegiid": 17024,
        "name": "Tlaltizapán",
        "stateid": 17
    },
    "17025": {
        "id": 25,
        "inegiid": 17025,
        "name": "Tlaquiltenango",
        "stateid": 17
    },
    "17026": {
        "id": 26,
        "inegiid": 17026,
        "name": "Tlayacapan",
        "stateid": 17
    },
    "17027": {
        "id": 27,
        "inegiid": 17027,
        "name": "Totolapan",
        "stateid": 17
    },
    "17028": {
        "id": 28,
        "inegiid": 17028,
        "name": "Xochitepec",
        "stateid": 17
    },
    "17029": {
        "id": 29,
        "inegiid": 17029,
        "name": "Yautepec",
        "stateid": 17
    },
    "17030": {
        "id": 30,
        "inegiid": 17030,
        "name": "Yecapixtla",
        "stateid": 17
    },
    "17031": {
        "id": 31,
        "inegiid": 17031,
        "name": "Zacatepec de Hidalgo",
        "stateid": 17
    },
    "17032": {
        "id": 32,
        "inegiid": 17032,
        "name": "Zacualpan de Amilpas",
        "stateid": 17
    },
    "17033": {
        "id": 33,
        "inegiid": 17033,
        "name": "Temoac",
        "stateid": 17
    },
    "18001": {
        "id": 1,
        "inegiid": 18001,
        "name": "Acaponeta",
        "stateid": 18
    },
    "18002": {
        "id": 2,
        "inegiid": 18002,
        "name": "Ahuacatlán",
        "stateid": 18
    },
    "18003": {
        "id": 3,
        "inegiid": 18003,
        "name": "Amatlán de Cañas",
        "stateid": 18
    },
    "18004": {
        "id": 4,
        "inegiid": 18004,
        "name": "Compostela",
        "stateid": 18
    },
    "18005": {
        "id": 5,
        "inegiid": 18005,
        "name": "Huajicori",
        "stateid": 18
    },
    "18006": {
        "id": 6,
        "inegiid": 18006,
        "name": "Ixtlán del Río",
        "stateid": 18
    },
    "18007": {
        "id": 7,
        "inegiid": 18007,
        "name": "Jala",
        "stateid": 18
    },
    "18008": {
        "id": 8,
        "inegiid": 18008,
        "name": "Xalisco",
        "stateid": 18
    },
    "18009": {
        "id": 9,
        "inegiid": 18009,
        "name": "Del Nayar",
        "stateid": 18
    },
    "18010": {
        "id": 10,
        "inegiid": 18010,
        "name": "Rosamorada",
        "stateid": 18
    },
    "18011": {
        "id": 11,
        "inegiid": 18011,
        "name": "Ruíz",
        "stateid": 18
    },
    "18012": {
        "id": 12,
        "inegiid": 18012,
        "name": "San Blas",
        "stateid": 18
    },
    "18013": {
        "id": 13,
        "inegiid": 18013,
        "name": "San Pedro Lagunillas",
        "stateid": 18
    },
    "18014": {
        "id": 14,
        "inegiid": 18014,
        "name": "Santa María del Oro",
        "stateid": 18
    },
    "18015": {
        "id": 15,
        "inegiid": 18015,
        "name": "Santiago Ixcuintla",
        "stateid": 18
    },
    "18016": {
        "id": 16,
        "inegiid": 18016,
        "name": "Tecuala",
        "stateid": 18
    },
    "18017": {
        "id": 17,
        "inegiid": 18017,
        "name": "Tepic",
        "stateid": 18
    },
    "18018": {
        "id": 18,
        "inegiid": 18018,
        "name": "Tuxpan",
        "stateid": 18
    },
    "18019": {
        "id": 19,
        "inegiid": 18019,
        "name": "La Yesca",
        "stateid": 18
    },
    "18020": {
        "id": 20,
        "inegiid": 18020,
        "name": "Bahía de Banderas",
        "stateid": 18
    },
    "19001": {
        "id": 1,
        "inegiid": 19001,
        "name": "Abasolo",
        "stateid": 19
    },
    "19002": {
        "id": 2,
        "inegiid": 19002,
        "name": "Agualeguas",
        "stateid": 19
    },
    "19003": {
        "id": 3,
        "inegiid": 19003,
        "name": "Los Aldamas",
        "stateid": 19
    },
    "19004": {
        "id": 4,
        "inegiid": 19004,
        "name": "Allende",
        "stateid": 19
    },
    "19005": {
        "id": 5,
        "inegiid": 19005,
        "name": "Anáhuac",
        "stateid": 19
    },
    "19006": {
        "id": 6,
        "inegiid": 19006,
        "name": "Apodaca",
        "stateid": 19
    },
    "19007": {
        "id": 7,
        "inegiid": 19007,
        "name": "Aramberri",
        "stateid": 19
    },
    "19008": {
        "id": 8,
        "inegiid": 19008,
        "name": "Bustamante",
        "stateid": 19
    },
    "19009": {
        "id": 9,
        "inegiid": 19009,
        "name": "Cadereyta Jiménez",
        "stateid": 19
    },
    "19010": {
        "id": 10,
        "inegiid": 19010,
        "name": "Carmen",
        "stateid": 19
    },
    "19011": {
        "id": 11,
        "inegiid": 19011,
        "name": "Cerralvo",
        "stateid": 19
    },
    "19012": {
        "id": 12,
        "inegiid": 19012,
        "name": "Ciénega de Flores",
        "stateid": 19
    },
    "19013": {
        "id": 13,
        "inegiid": 19013,
        "name": "China",
        "stateid": 19
    },
    "19014": {
        "id": 14,
        "inegiid": 19014,
        "name": "Dr. Arroyo",
        "stateid": 19
    },
    "19015": {
        "id": 15,
        "inegiid": 19015,
        "name": "Dr. Coss",
        "stateid": 19
    },
    "19016": {
        "id": 16,
        "inegiid": 19016,
        "name": "Dr. González",
        "stateid": 19
    },
    "19017": {
        "id": 17,
        "inegiid": 19017,
        "name": "Galeana",
        "stateid": 19
    },
    "19018": {
        "id": 18,
        "inegiid": 19018,
        "name": "García",
        "stateid": 19
    },
    "19019": {
        "id": 19,
        "inegiid": 19019,
        "name": "San Pedro Garza García",
        "stateid": 19
    },
    "19020": {
        "id": 20,
        "inegiid": 19020,
        "name": "Gral. Bravo",
        "stateid": 19
    },
    "19021": {
        "id": 21,
        "inegiid": 19021,
        "name": "Gral. Escobedo",
        "stateid": 19
    },
    "19022": {
        "id": 22,
        "inegiid": 19022,
        "name": "Gral. Terán",
        "stateid": 19
    },
    "19023": {
        "id": 23,
        "inegiid": 19023,
        "name": "Gral. Treviño",
        "stateid": 19
    },
    "19024": {
        "id": 24,
        "inegiid": 19024,
        "name": "Gral. Zaragoza",
        "stateid": 19
    },
    "19025": {
        "id": 25,
        "inegiid": 19025,
        "name": "Gral. Zuazua",
        "stateid": 19
    },
    "19026": {
        "id": 26,
        "inegiid": 19026,
        "name": "Guadalupe",
        "stateid": 19
    },
    "19027": {
        "id": 27,
        "inegiid": 19027,
        "name": "Los Herreras",
        "stateid": 19
    },
    "19028": {
        "id": 28,
        "inegiid": 19028,
        "name": "Higueras",
        "stateid": 19
    },
    "19029": {
        "id": 29,
        "inegiid": 19029,
        "name": "Hualahuises",
        "stateid": 19
    },
    "19030": {
        "id": 30,
        "inegiid": 19030,
        "name": "Iturbide",
        "stateid": 19
    },
    "19031": {
        "id": 31,
        "inegiid": 19031,
        "name": "Juárez",
        "stateid": 19
    },
    "19032": {
        "id": 32,
        "inegiid": 19032,
        "name": "Lampazos de Naranjo",
        "stateid": 19
    },
    "19033": {
        "id": 33,
        "inegiid": 19033,
        "name": "Linares",
        "stateid": 19
    },
    "19034": {
        "id": 34,
        "inegiid": 19034,
        "name": "Marín",
        "stateid": 19
    },
    "19035": {
        "id": 35,
        "inegiid": 19035,
        "name": "Melchor Ocampo",
        "stateid": 19
    },
    "19036": {
        "id": 36,
        "inegiid": 19036,
        "name": "Mier y Noriega",
        "stateid": 19
    },
    "19037": {
        "id": 37,
        "inegiid": 19037,
        "name": "Mina",
        "stateid": 19
    },
    "19038": {
        "id": 38,
        "inegiid": 19038,
        "name": "Montemorelos",
        "stateid": 19
    },
    "19039": {
        "id": 39,
        "inegiid": 19039,
        "name": "Monterrey",
        "stateid": 19
    },
    "19040": {
        "id": 40,
        "inegiid": 19040,
        "name": "Parás",
        "stateid": 19
    },
    "19041": {
        "id": 41,
        "inegiid": 19041,
        "name": "Pesquería",
        "stateid": 19
    },
    "19042": {
        "id": 42,
        "inegiid": 19042,
        "name": "Los Ramones",
        "stateid": 19
    },
    "19043": {
        "id": 43,
        "inegiid": 19043,
        "name": "Rayones",
        "stateid": 19
    },
    "19044": {
        "id": 44,
        "inegiid": 19044,
        "name": "Sabinas Hidalgo",
        "stateid": 19
    },
    "19045": {
        "id": 45,
        "inegiid": 19045,
        "name": "Salinas Victoria",
        "stateid": 19
    },
    "19046": {
        "id": 46,
        "inegiid": 19046,
        "name": "San Nicolás de los Garza",
        "stateid": 19
    },
    "19047": {
        "id": 47,
        "inegiid": 19047,
        "name": "Hidalgo",
        "stateid": 19
    },
    "19048": {
        "id": 48,
        "inegiid": 19048,
        "name": "Santa Catarina",
        "stateid": 19
    },
    "19049": {
        "id": 49,
        "inegiid": 19049,
        "name": "Santiago",
        "stateid": 19
    },
    "19050": {
        "id": 50,
        "inegiid": 19050,
        "name": "Vallecillo",
        "stateid": 19
    },
    "19051": {
        "id": 51,
        "inegiid": 19051,
        "name": "Villaldama",
        "stateid": 19
    },
    "20001": {
        "id": 1,
        "inegiid": 20001,
        "name": "Abejones",
        "stateid": 20
    },
    "20002": {
        "id": 2,
        "inegiid": 20002,
        "name": "Acatlán de Pérez Figueroa",
        "stateid": 20
    },
    "20003": {
        "id": 3,
        "inegiid": 20003,
        "name": "Asunción Cacalotepec",
        "stateid": 20
    },
    "20004": {
        "id": 4,
        "inegiid": 20004,
        "name": "Asunción Cuyotepeji",
        "stateid": 20
    },
    "20005": {
        "id": 5,
        "inegiid": 20005,
        "name": "Asunción Ixtaltepec",
        "stateid": 20
    },
    "20006": {
        "id": 6,
        "inegiid": 20006,
        "name": "Asunción Nochixtlán",
        "stateid": 20
    },
    "20007": {
        "id": 7,
        "inegiid": 20007,
        "name": "Asunción Ocotlán",
        "stateid": 20
    },
    "20008": {
        "id": 8,
        "inegiid": 20008,
        "name": "Asunción Tlacolulita",
        "stateid": 20
    },
    "20009": {
        "id": 9,
        "inegiid": 20009,
        "name": "Ayotzintepec",
        "stateid": 20
    },
    "20010": {
        "id": 10,
        "inegiid": 20010,
        "name": "El Barrio de la Soledad",
        "stateid": 20
    },
    "20011": {
        "id": 11,
        "inegiid": 20011,
        "name": "Calihualá",
        "stateid": 20
    },
    "20012": {
        "id": 12,
        "inegiid": 20012,
        "name": "Candelaria Loxicha",
        "stateid": 20
    },
    "20013": {
        "id": 13,
        "inegiid": 20013,
        "name": "Ciénega de Zimatlán",
        "stateid": 20
    },
    "20014": {
        "id": 14,
        "inegiid": 20014,
        "name": "Ciudad Ixtepec",
        "stateid": 20
    },
    "20015": {
        "id": 15,
        "inegiid": 20015,
        "name": "Coatecas Altas",
        "stateid": 20
    },
    "20016": {
        "id": 16,
        "inegiid": 20016,
        "name": "Coicoyán de las Flores",
        "stateid": 20
    },
    "20017": {
        "id": 17,
        "inegiid": 20017,
        "name": "La Compañía",
        "stateid": 20
    },
    "20018": {
        "id": 18,
        "inegiid": 20018,
        "name": "Concepción Buenavista",
        "stateid": 20
    },
    "20019": {
        "id": 19,
        "inegiid": 20019,
        "name": "Concepción Pápalo",
        "stateid": 20
    },
    "20020": {
        "id": 20,
        "inegiid": 20020,
        "name": "Constancia del Rosario",
        "stateid": 20
    },
    "20021": {
        "id": 21,
        "inegiid": 20021,
        "name": "Cosolapa",
        "stateid": 20
    },
    "20022": {
        "id": 22,
        "inegiid": 20022,
        "name": "Cosoltepec",
        "stateid": 20
    },
    "20023": {
        "id": 23,
        "inegiid": 20023,
        "name": "Cuilápam de Guerrero",
        "stateid": 20
    },
    "20024": {
        "id": 24,
        "inegiid": 20024,
        "name": "Cuyamecalco Villa de Zaragoza",
        "stateid": 20
    },
    "20025": {
        "id": 25,
        "inegiid": 20025,
        "name": "Chahuites",
        "stateid": 20
    },
    "20026": {
        "id": 26,
        "inegiid": 20026,
        "name": "Chalcatongo de Hidalgo",
        "stateid": 20
    },
    "20027": {
        "id": 27,
        "inegiid": 20027,
        "name": "Chiquihuitlán de Benito Juárez",
        "stateid": 20
    },
    "20028": {
        "id": 28,
        "inegiid": 20028,
        "name": "Heroica Ciudad de Ejutla de Crespo",
        "stateid": 20
    },
    "20029": {
        "id": 29,
        "inegiid": 20029,
        "name": "Eloxochitlán de Flores Magón",
        "stateid": 20
    },
    "20030": {
        "id": 30,
        "inegiid": 20030,
        "name": "El Espinal",
        "stateid": 20
    },
    "20031": {
        "id": 31,
        "inegiid": 20031,
        "name": "Tamazulápam del Espíritu Santo",
        "stateid": 20
    },
    "20032": {
        "id": 32,
        "inegiid": 20032,
        "name": "Fresnillo de Trujano",
        "stateid": 20
    },
    "20033": {
        "id": 33,
        "inegiid": 20033,
        "name": "Guadalupe Etla",
        "stateid": 20
    },
    "20034": {
        "id": 34,
        "inegiid": 20034,
        "name": "Guadalupe de Ramírez",
        "stateid": 20
    },
    "20035": {
        "id": 35,
        "inegiid": 20035,
        "name": "Guelatao de Juárez",
        "stateid": 20
    },
    "20036": {
        "id": 36,
        "inegiid": 20036,
        "name": "Guevea de Humboldt",
        "stateid": 20
    },
    "20037": {
        "id": 37,
        "inegiid": 20037,
        "name": "Mesones Hidalgo",
        "stateid": 20
    },
    "20038": {
        "id": 38,
        "inegiid": 20038,
        "name": "Villa Hidalgo",
        "stateid": 20
    },
    "20039": {
        "id": 39,
        "inegiid": 20039,
        "name": "Heroica Ciudad de Huajuapan de León",
        "stateid": 20
    },
    "20040": {
        "id": 40,
        "inegiid": 20040,
        "name": "Huautepec",
        "stateid": 20
    },
    "20041": {
        "id": 41,
        "inegiid": 20041,
        "name": "Huautla de Jiménez",
        "stateid": 20
    },
    "20042": {
        "id": 42,
        "inegiid": 20042,
        "name": "Ixtlán de Juárez",
        "stateid": 20
    },
    "20043": {
        "id": 43,
        "inegiid": 20043,
        "name": "Juchitán de Zaragoza",
        "stateid": 20
    },
    "20044": {
        "id": 44,
        "inegiid": 20044,
        "name": "Loma Bonita",
        "stateid": 20
    },
    "20045": {
        "id": 45,
        "inegiid": 20045,
        "name": "Magdalena Apasco",
        "stateid": 20
    },
    "20046": {
        "id": 46,
        "inegiid": 20046,
        "name": "Magdalena Jaltepec",
        "stateid": 20
    },
    "20047": {
        "id": 47,
        "inegiid": 20047,
        "name": "Santa Magdalena Jicotlán",
        "stateid": 20
    },
    "20048": {
        "id": 48,
        "inegiid": 20048,
        "name": "Magdalena Mixtepec",
        "stateid": 20
    },
    "20049": {
        "id": 49,
        "inegiid": 20049,
        "name": "Magdalena Ocotlán",
        "stateid": 20
    },
    "20050": {
        "id": 50,
        "inegiid": 20050,
        "name": "Magdalena Peñasco",
        "stateid": 20
    },
    "20051": {
        "id": 51,
        "inegiid": 20051,
        "name": "Magdalena Teitipac",
        "stateid": 20
    },
    "20052": {
        "id": 52,
        "inegiid": 20052,
        "name": "Magdalena Tequisistlán",
        "stateid": 20
    },
    "20053": {
        "id": 53,
        "inegiid": 20053,
        "name": "Magdalena Tlacotepec",
        "stateid": 20
    },
    "20054": {
        "id": 54,
        "inegiid": 20054,
        "name": "Magdalena Zahuatlán",
        "stateid": 20
    },
    "20055": {
        "id": 55,
        "inegiid": 20055,
        "name": "Mariscala de Juárez",
        "stateid": 20
    },
    "20056": {
        "id": 56,
        "inegiid": 20056,
        "name": "Mártires de Tacubaya",
        "stateid": 20
    },
    "20057": {
        "id": 57,
        "inegiid": 20057,
        "name": "Matías Romero Avendaño",
        "stateid": 20
    },
    "20058": {
        "id": 58,
        "inegiid": 20058,
        "name": "Mazatlán Villa de Flores",
        "stateid": 20
    },
    "20059": {
        "id": 59,
        "inegiid": 20059,
        "name": "Miahuatlán de Porfirio Díaz",
        "stateid": 20
    },
    "20060": {
        "id": 60,
        "inegiid": 20060,
        "name": "Mixistlán de la Reforma",
        "stateid": 20
    },
    "20061": {
        "id": 61,
        "inegiid": 20061,
        "name": "Monjas",
        "stateid": 20
    },
    "20062": {
        "id": 62,
        "inegiid": 20062,
        "name": "Natividad",
        "stateid": 20
    },
    "20063": {
        "id": 63,
        "inegiid": 20063,
        "name": "Nazareno Etla",
        "stateid": 20
    },
    "20064": {
        "id": 64,
        "inegiid": 20064,
        "name": "Nejapa de Madero",
        "stateid": 20
    },
    "20065": {
        "id": 65,
        "inegiid": 20065,
        "name": "Ixpantepec Nieves",
        "stateid": 20
    },
    "20066": {
        "id": 66,
        "inegiid": 20066,
        "name": "Santiago Niltepec",
        "stateid": 20
    },
    "20067": {
        "id": 67,
        "inegiid": 20067,
        "name": "Oaxaca de Juárez",
        "stateid": 20
    },
    "20068": {
        "id": 68,
        "inegiid": 20068,
        "name": "Ocotlán de Morelos",
        "stateid": 20
    },
    "20069": {
        "id": 69,
        "inegiid": 20069,
        "name": "La Pe",
        "stateid": 20
    },
    "20070": {
        "id": 70,
        "inegiid": 20070,
        "name": "Pinotepa de Don Luis",
        "stateid": 20
    },
    "20071": {
        "id": 71,
        "inegiid": 20071,
        "name": "Pluma Hidalgo",
        "stateid": 20
    },
    "20072": {
        "id": 72,
        "inegiid": 20072,
        "name": "San José del Progreso",
        "stateid": 20
    },
    "20073": {
        "id": 73,
        "inegiid": 20073,
        "name": "Putla Villa de Guerrero",
        "stateid": 20
    },
    "20074": {
        "id": 74,
        "inegiid": 20074,
        "name": "Santa Catarina Quioquitani",
        "stateid": 20
    },
    "20075": {
        "id": 75,
        "inegiid": 20075,
        "name": "Reforma de Pineda",
        "stateid": 20
    },
    "20076": {
        "id": 76,
        "inegiid": 20076,
        "name": "La Reforma",
        "stateid": 20
    },
    "20077": {
        "id": 77,
        "inegiid": 20077,
        "name": "Reyes Etla",
        "stateid": 20
    },
    "20078": {
        "id": 78,
        "inegiid": 20078,
        "name": "Rojas de Cuauhtémoc",
        "stateid": 20
    },
    "20079": {
        "id": 79,
        "inegiid": 20079,
        "name": "Salina Cruz",
        "stateid": 20
    },
    "20080": {
        "id": 80,
        "inegiid": 20080,
        "name": "San Agustín Amatengo",
        "stateid": 20
    },
    "20081": {
        "id": 81,
        "inegiid": 20081,
        "name": "San Agustín Atenango",
        "stateid": 20
    },
    "20082": {
        "id": 82,
        "inegiid": 20082,
        "name": "San Agustín Chayuco",
        "stateid": 20
    },
    "20083": {
        "id": 83,
        "inegiid": 20083,
        "name": "San Agustín de las Juntas",
        "stateid": 20
    },
    "20084": {
        "id": 84,
        "inegiid": 20084,
        "name": "San Agustín Etla",
        "stateid": 20
    },
    "20085": {
        "id": 85,
        "inegiid": 20085,
        "name": "San Agustín Loxicha",
        "stateid": 20
    },
    "20086": {
        "id": 86,
        "inegiid": 20086,
        "name": "San Agustín Tlacotepec",
        "stateid": 20
    },
    "20087": {
        "id": 87,
        "inegiid": 20087,
        "name": "San Agustín Yatareni",
        "stateid": 20
    },
    "20088": {
        "id": 88,
        "inegiid": 20088,
        "name": "San Andrés Cabecera Nueva",
        "stateid": 20
    },
    "20089": {
        "id": 89,
        "inegiid": 20089,
        "name": "San Andrés Dinicuiti",
        "stateid": 20
    },
    "20090": {
        "id": 90,
        "inegiid": 20090,
        "name": "San Andrés Huaxpaltepec",
        "stateid": 20
    },
    "20091": {
        "id": 91,
        "inegiid": 20091,
        "name": "San Andrés Huayápam",
        "stateid": 20
    },
    "20092": {
        "id": 92,
        "inegiid": 20092,
        "name": "San Andrés Ixtlahuaca",
        "stateid": 20
    },
    "20093": {
        "id": 93,
        "inegiid": 20093,
        "name": "San Andrés Lagunas",
        "stateid": 20
    },
    "20094": {
        "id": 94,
        "inegiid": 20094,
        "name": "San Andrés Nuxiño",
        "stateid": 20
    },
    "20095": {
        "id": 95,
        "inegiid": 20095,
        "name": "San Andrés Paxtlán",
        "stateid": 20
    },
    "20096": {
        "id": 96,
        "inegiid": 20096,
        "name": "San Andrés Sinaxtla",
        "stateid": 20
    },
    "20097": {
        "id": 97,
        "inegiid": 20097,
        "name": "San Andrés Solaga",
        "stateid": 20
    },
    "20098": {
        "id": 98,
        "inegiid": 20098,
        "name": "San Andrés Teotilálpam",
        "stateid": 20
    },
    "20099": {
        "id": 99,
        "inegiid": 20099,
        "name": "San Andrés Tepetlapa",
        "stateid": 20
    },
    "20100": {
        "id": 100,
        "inegiid": 20100,
        "name": "San Andrés Yaá",
        "stateid": 20
    },
    "20101": {
        "id": 101,
        "inegiid": 20101,
        "name": "San Andrés Zabache",
        "stateid": 20
    },
    "20102": {
        "id": 102,
        "inegiid": 20102,
        "name": "San Andrés Zautla",
        "stateid": 20
    },
    "20103": {
        "id": 103,
        "inegiid": 20103,
        "name": "San Antonino Castillo Velasco",
        "stateid": 20
    },
    "20104": {
        "id": 104,
        "inegiid": 20104,
        "name": "San Antonino el Alto",
        "stateid": 20
    },
    "20105": {
        "id": 105,
        "inegiid": 20105,
        "name": "San Antonino Monte Verde",
        "stateid": 20
    },
    "20106": {
        "id": 106,
        "inegiid": 20106,
        "name": "San Antonio Acutla",
        "stateid": 20
    },
    "20107": {
        "id": 107,
        "inegiid": 20107,
        "name": "San Antonio de la Cal",
        "stateid": 20
    },
    "20108": {
        "id": 108,
        "inegiid": 20108,
        "name": "San Antonio Huitepec",
        "stateid": 20
    },
    "20109": {
        "id": 109,
        "inegiid": 20109,
        "name": "San Antonio Nanahuatípam",
        "stateid": 20
    },
    "20110": {
        "id": 110,
        "inegiid": 20110,
        "name": "San Antonio Sinicahua",
        "stateid": 20
    },
    "20111": {
        "id": 111,
        "inegiid": 20111,
        "name": "San Antonio Tepetlapa",
        "stateid": 20
    },
    "20112": {
        "id": 112,
        "inegiid": 20112,
        "name": "San Baltazar Chichicápam",
        "stateid": 20
    },
    "20113": {
        "id": 113,
        "inegiid": 20113,
        "name": "San Baltazar Loxicha",
        "stateid": 20
    },
    "20114": {
        "id": 114,
        "inegiid": 20114,
        "name": "San Baltazar Yatzachi el Bajo",
        "stateid": 20
    },
    "20115": {
        "id": 115,
        "inegiid": 20115,
        "name": "San Bartolo Coyotepec",
        "stateid": 20
    },
    "20116": {
        "id": 116,
        "inegiid": 20116,
        "name": "San Bartolomé Ayautla",
        "stateid": 20
    },
    "20117": {
        "id": 117,
        "inegiid": 20117,
        "name": "San Bartolomé Loxicha",
        "stateid": 20
    },
    "20118": {
        "id": 118,
        "inegiid": 20118,
        "name": "San Bartolomé Quialana",
        "stateid": 20
    },
    "20119": {
        "id": 119,
        "inegiid": 20119,
        "name": "San Bartolomé Yucuañe",
        "stateid": 20
    },
    "20120": {
        "id": 120,
        "inegiid": 20120,
        "name": "San Bartolomé Zoogocho",
        "stateid": 20
    },
    "20121": {
        "id": 121,
        "inegiid": 20121,
        "name": "San Bartolo Soyaltepec",
        "stateid": 20
    },
    "20122": {
        "id": 122,
        "inegiid": 20122,
        "name": "San Bartolo Yautepec",
        "stateid": 20
    },
    "20123": {
        "id": 123,
        "inegiid": 20123,
        "name": "San Bernardo Mixtepec",
        "stateid": 20
    },
    "20124": {
        "id": 124,
        "inegiid": 20124,
        "name": "San Blas Atempa",
        "stateid": 20
    },
    "20125": {
        "id": 125,
        "inegiid": 20125,
        "name": "San Carlos Yautepec",
        "stateid": 20
    },
    "20126": {
        "id": 126,
        "inegiid": 20126,
        "name": "San Cristóbal Amatlán",
        "stateid": 20
    },
    "20127": {
        "id": 127,
        "inegiid": 20127,
        "name": "San Cristóbal Amoltepec",
        "stateid": 20
    },
    "20128": {
        "id": 128,
        "inegiid": 20128,
        "name": "San Cristóbal Lachirioag",
        "stateid": 20
    },
    "20129": {
        "id": 129,
        "inegiid": 20129,
        "name": "San Cristóbal Suchixtlahuaca",
        "stateid": 20
    },
    "20130": {
        "id": 130,
        "inegiid": 20130,
        "name": "San Dionisio del Mar",
        "stateid": 20
    },
    "20131": {
        "id": 131,
        "inegiid": 20131,
        "name": "San Dionisio Ocotepec",
        "stateid": 20
    },
    "20132": {
        "id": 132,
        "inegiid": 20132,
        "name": "San Dionisio Ocotlán",
        "stateid": 20
    },
    "20133": {
        "id": 133,
        "inegiid": 20133,
        "name": "San Esteban Atatlahuca",
        "stateid": 20
    },
    "20134": {
        "id": 134,
        "inegiid": 20134,
        "name": "San Felipe Jalapa de Díaz",
        "stateid": 20
    },
    "20135": {
        "id": 135,
        "inegiid": 20135,
        "name": "San Felipe Tejalápam",
        "stateid": 20
    },
    "20136": {
        "id": 136,
        "inegiid": 20136,
        "name": "San Felipe Usila",
        "stateid": 20
    },
    "20137": {
        "id": 137,
        "inegiid": 20137,
        "name": "San Francisco Cahuacuá",
        "stateid": 20
    },
    "20138": {
        "id": 138,
        "inegiid": 20138,
        "name": "San Francisco Cajonos",
        "stateid": 20
    },
    "20139": {
        "id": 139,
        "inegiid": 20139,
        "name": "San Francisco Chapulapa",
        "stateid": 20
    },
    "20140": {
        "id": 140,
        "inegiid": 20140,
        "name": "San Francisco Chindúa",
        "stateid": 20
    },
    "20141": {
        "id": 141,
        "inegiid": 20141,
        "name": "San Francisco del Mar",
        "stateid": 20
    },
    "20142": {
        "id": 142,
        "inegiid": 20142,
        "name": "San Francisco Huehuetlán",
        "stateid": 20
    },
    "20143": {
        "id": 143,
        "inegiid": 20143,
        "name": "San Francisco Ixhuatán",
        "stateid": 20
    },
    "20144": {
        "id": 144,
        "inegiid": 20144,
        "name": "San Francisco Jaltepetongo",
        "stateid": 20
    },
    "20145": {
        "id": 145,
        "inegiid": 20145,
        "name": "San Francisco Lachigoló",
        "stateid": 20
    },
    "20146": {
        "id": 146,
        "inegiid": 20146,
        "name": "San Francisco Logueche",
        "stateid": 20
    },
    "20147": {
        "id": 147,
        "inegiid": 20147,
        "name": "San Francisco Nuxaño",
        "stateid": 20
    },
    "20148": {
        "id": 148,
        "inegiid": 20148,
        "name": "San Francisco Ozolotepec",
        "stateid": 20
    },
    "20149": {
        "id": 149,
        "inegiid": 20149,
        "name": "San Francisco Sola",
        "stateid": 20
    },
    "20150": {
        "id": 150,
        "inegiid": 20150,
        "name": "San Francisco Telixtlahuaca",
        "stateid": 20
    },
    "20151": {
        "id": 151,
        "inegiid": 20151,
        "name": "San Francisco Teopan",
        "stateid": 20
    },
    "20152": {
        "id": 152,
        "inegiid": 20152,
        "name": "San Francisco Tlapancingo",
        "stateid": 20
    },
    "20153": {
        "id": 153,
        "inegiid": 20153,
        "name": "San Gabriel Mixtepec",
        "stateid": 20
    },
    "20154": {
        "id": 154,
        "inegiid": 20154,
        "name": "San Ildefonso Amatlán",
        "stateid": 20
    },
    "20155": {
        "id": 155,
        "inegiid": 20155,
        "name": "San Ildefonso Sola",
        "stateid": 20
    },
    "20156": {
        "id": 156,
        "inegiid": 20156,
        "name": "San Ildefonso Villa Alta",
        "stateid": 20
    },
    "20157": {
        "id": 157,
        "inegiid": 20157,
        "name": "San Jacinto Amilpas",
        "stateid": 20
    },
    "20158": {
        "id": 158,
        "inegiid": 20158,
        "name": "San Jacinto Tlacotepec",
        "stateid": 20
    },
    "20159": {
        "id": 159,
        "inegiid": 20159,
        "name": "San Jerónimo Coatlán",
        "stateid": 20
    },
    "20160": {
        "id": 160,
        "inegiid": 20160,
        "name": "San Jerónimo Silacayoapilla",
        "stateid": 20
    },
    "20161": {
        "id": 161,
        "inegiid": 20161,
        "name": "San Jerónimo Sosola",
        "stateid": 20
    },
    "20162": {
        "id": 162,
        "inegiid": 20162,
        "name": "San Jerónimo Taviche",
        "stateid": 20
    },
    "20163": {
        "id": 163,
        "inegiid": 20163,
        "name": "San Jerónimo Tecóatl",
        "stateid": 20
    },
    "20164": {
        "id": 164,
        "inegiid": 20164,
        "name": "San Jorge Nuchita",
        "stateid": 20
    },
    "20165": {
        "id": 165,
        "inegiid": 20165,
        "name": "San José Ayuquila",
        "stateid": 20
    },
    "20166": {
        "id": 166,
        "inegiid": 20166,
        "name": "San José Chiltepec",
        "stateid": 20
    },
    "20167": {
        "id": 167,
        "inegiid": 20167,
        "name": "San José del Peñasco",
        "stateid": 20
    },
    "20168": {
        "id": 168,
        "inegiid": 20168,
        "name": "San José Estancia Grande",
        "stateid": 20
    },
    "20169": {
        "id": 169,
        "inegiid": 20169,
        "name": "San José Independencia",
        "stateid": 20
    },
    "20170": {
        "id": 170,
        "inegiid": 20170,
        "name": "San José Lachiguiri",
        "stateid": 20
    },
    "20171": {
        "id": 171,
        "inegiid": 20171,
        "name": "San José Tenango",
        "stateid": 20
    },
    "20172": {
        "id": 172,
        "inegiid": 20172,
        "name": "San Juan Achiutla",
        "stateid": 20
    },
    "20173": {
        "id": 173,
        "inegiid": 20173,
        "name": "San Juan Atepec",
        "stateid": 20
    },
    "20174": {
        "id": 174,
        "inegiid": 20174,
        "name": "Ánimas Trujano",
        "stateid": 20
    },
    "20175": {
        "id": 175,
        "inegiid": 20175,
        "name": "San Juan Bautista Atatlahuca",
        "stateid": 20
    },
    "20176": {
        "id": 176,
        "inegiid": 20176,
        "name": "San Juan Bautista Coixtlahuaca",
        "stateid": 20
    },
    "20177": {
        "id": 177,
        "inegiid": 20177,
        "name": "San Juan Bautista Cuicatlán",
        "stateid": 20
    },
    "20178": {
        "id": 178,
        "inegiid": 20178,
        "name": "San Juan Bautista Guelache",
        "stateid": 20
    },
    "20179": {
        "id": 179,
        "inegiid": 20179,
        "name": "San Juan Bautista Jayacatlán",
        "stateid": 20
    },
    "20180": {
        "id": 180,
        "inegiid": 20180,
        "name": "San Juan Bautista Lo de Soto",
        "stateid": 20
    },
    "20181": {
        "id": 181,
        "inegiid": 20181,
        "name": "San Juan Bautista Suchitepec",
        "stateid": 20
    },
    "20182": {
        "id": 182,
        "inegiid": 20182,
        "name": "San Juan Bautista Tlacoatzintepec",
        "stateid": 20
    },
    "20183": {
        "id": 183,
        "inegiid": 20183,
        "name": "San Juan Bautista Tlachichilco",
        "stateid": 20
    },
    "20184": {
        "id": 184,
        "inegiid": 20184,
        "name": "San Juan Bautista Tuxtepec",
        "stateid": 20
    },
    "20185": {
        "id": 185,
        "inegiid": 20185,
        "name": "San Juan Cacahuatepec",
        "stateid": 20
    },
    "20186": {
        "id": 186,
        "inegiid": 20186,
        "name": "San Juan Cieneguilla",
        "stateid": 20
    },
    "20187": {
        "id": 187,
        "inegiid": 20187,
        "name": "San Juan Coatzóspam",
        "stateid": 20
    },
    "20188": {
        "id": 188,
        "inegiid": 20188,
        "name": "San Juan Colorado",
        "stateid": 20
    },
    "20189": {
        "id": 189,
        "inegiid": 20189,
        "name": "San Juan Comaltepec",
        "stateid": 20
    },
    "20190": {
        "id": 190,
        "inegiid": 20190,
        "name": "San Juan Cotzocón",
        "stateid": 20
    },
    "20191": {
        "id": 191,
        "inegiid": 20191,
        "name": "San Juan Chicomezúchil",
        "stateid": 20
    },
    "20192": {
        "id": 192,
        "inegiid": 20192,
        "name": "San Juan Chilateca",
        "stateid": 20
    },
    "20193": {
        "id": 193,
        "inegiid": 20193,
        "name": "San Juan del Estado",
        "stateid": 20
    },
    "20194": {
        "id": 194,
        "inegiid": 20194,
        "name": "San Juan del Río",
        "stateid": 20
    },
    "20195": {
        "id": 195,
        "inegiid": 20195,
        "name": "San Juan Diuxi",
        "stateid": 20
    },
    "20196": {
        "id": 196,
        "inegiid": 20196,
        "name": "San Juan Evangelista Analco",
        "stateid": 20
    },
    "20197": {
        "id": 197,
        "inegiid": 20197,
        "name": "San Juan Guelavía",
        "stateid": 20
    },
    "20198": {
        "id": 198,
        "inegiid": 20198,
        "name": "San Juan Guichicovi",
        "stateid": 20
    },
    "20199": {
        "id": 199,
        "inegiid": 20199,
        "name": "San Juan Ihualtepec",
        "stateid": 20
    },
    "20200": {
        "id": 200,
        "inegiid": 20200,
        "name": "San Juan Juquila Mixes",
        "stateid": 20
    },
    "20201": {
        "id": 201,
        "inegiid": 20201,
        "name": "San Juan Juquila Vijanos",
        "stateid": 20
    },
    "20202": {
        "id": 202,
        "inegiid": 20202,
        "name": "San Juan Lachao",
        "stateid": 20
    },
    "20203": {
        "id": 203,
        "inegiid": 20203,
        "name": "San Juan Lachigalla",
        "stateid": 20
    },
    "20204": {
        "id": 204,
        "inegiid": 20204,
        "name": "San Juan Lajarcia",
        "stateid": 20
    },
    "20205": {
        "id": 205,
        "inegiid": 20205,
        "name": "San Juan Lalana",
        "stateid": 20
    },
    "20206": {
        "id": 206,
        "inegiid": 20206,
        "name": "San Juan de los Cués",
        "stateid": 20
    },
    "20207": {
        "id": 207,
        "inegiid": 20207,
        "name": "San Juan Mazatlán",
        "stateid": 20
    },
    "20208": {
        "id": 208,
        "inegiid": 20208,
        "name": "San Juan Mixtepec - Dto. 08 -",
        "stateid": 20
    },
    "20209": {
        "id": 209,
        "inegiid": 20209,
        "name": "San Juan Mixtepec - Dto. 26 -",
        "stateid": 20
    },
    "20210": {
        "id": 210,
        "inegiid": 20210,
        "name": "San Juan Ñumí",
        "stateid": 20
    },
    "20211": {
        "id": 211,
        "inegiid": 20211,
        "name": "San Juan Ozolotepec",
        "stateid": 20
    },
    "20212": {
        "id": 212,
        "inegiid": 20212,
        "name": "San Juan Petlapa",
        "stateid": 20
    },
    "20213": {
        "id": 213,
        "inegiid": 20213,
        "name": "San Juan Quiahije",
        "stateid": 20
    },
    "20214": {
        "id": 214,
        "inegiid": 20214,
        "name": "San Juan Quiotepec",
        "stateid": 20
    },
    "20215": {
        "id": 215,
        "inegiid": 20215,
        "name": "San Juan Sayultepec",
        "stateid": 20
    },
    "20216": {
        "id": 216,
        "inegiid": 20216,
        "name": "San Juan Tabaá",
        "stateid": 20
    },
    "20217": {
        "id": 217,
        "inegiid": 20217,
        "name": "San Juan Tamazola",
        "stateid": 20
    },
    "20218": {
        "id": 218,
        "inegiid": 20218,
        "name": "San Juan Teita",
        "stateid": 20
    },
    "20219": {
        "id": 219,
        "inegiid": 20219,
        "name": "San Juan Teitipac",
        "stateid": 20
    },
    "20220": {
        "id": 220,
        "inegiid": 20220,
        "name": "San Juan Tepeuxila",
        "stateid": 20
    },
    "20221": {
        "id": 221,
        "inegiid": 20221,
        "name": "San Juan Teposcolula",
        "stateid": 20
    },
    "20222": {
        "id": 222,
        "inegiid": 20222,
        "name": "San Juan Yaeé",
        "stateid": 20
    },
    "20223": {
        "id": 223,
        "inegiid": 20223,
        "name": "San Juan Yatzona",
        "stateid": 20
    },
    "20224": {
        "id": 224,
        "inegiid": 20224,
        "name": "San Juan Yucuita",
        "stateid": 20
    },
    "20225": {
        "id": 225,
        "inegiid": 20225,
        "name": "San Lorenzo",
        "stateid": 20
    },
    "20226": {
        "id": 226,
        "inegiid": 20226,
        "name": "San Lorenzo Albarradas",
        "stateid": 20
    },
    "20227": {
        "id": 227,
        "inegiid": 20227,
        "name": "San Lorenzo Cacaotepec",
        "stateid": 20
    },
    "20228": {
        "id": 228,
        "inegiid": 20228,
        "name": "San Lorenzo Cuaunecuiltitla",
        "stateid": 20
    },
    "20229": {
        "id": 229,
        "inegiid": 20229,
        "name": "San Lorenzo Texmelúcan",
        "stateid": 20
    },
    "20230": {
        "id": 230,
        "inegiid": 20230,
        "name": "San Lorenzo Victoria",
        "stateid": 20
    },
    "20231": {
        "id": 231,
        "inegiid": 20231,
        "name": "San Lucas Camotlán",
        "stateid": 20
    },
    "20232": {
        "id": 232,
        "inegiid": 20232,
        "name": "San Lucas Ojitlán",
        "stateid": 20
    },
    "20233": {
        "id": 233,
        "inegiid": 20233,
        "name": "San Lucas Quiaviní",
        "stateid": 20
    },
    "20234": {
        "id": 234,
        "inegiid": 20234,
        "name": "San Lucas Zoquiápam",
        "stateid": 20
    },
    "20235": {
        "id": 235,
        "inegiid": 20235,
        "name": "San Luis Amatlán",
        "stateid": 20
    },
    "20236": {
        "id": 236,
        "inegiid": 20236,
        "name": "San Marcial Ozolotepec",
        "stateid": 20
    },
    "20237": {
        "id": 237,
        "inegiid": 20237,
        "name": "San Marcos Arteaga",
        "stateid": 20
    },
    "20238": {
        "id": 238,
        "inegiid": 20238,
        "name": "San Martín de los Cansecos",
        "stateid": 20
    },
    "20239": {
        "id": 239,
        "inegiid": 20239,
        "name": "San Martín Huamelúlpam",
        "stateid": 20
    },
    "20240": {
        "id": 240,
        "inegiid": 20240,
        "name": "San Martín Itunyoso",
        "stateid": 20
    },
    "20241": {
        "id": 241,
        "inegiid": 20241,
        "name": "San Martín Lachilá",
        "stateid": 20
    },
    "20242": {
        "id": 242,
        "inegiid": 20242,
        "name": "San Martín Peras",
        "stateid": 20
    },
    "20243": {
        "id": 243,
        "inegiid": 20243,
        "name": "San Martín Tilcajete",
        "stateid": 20
    },
    "20244": {
        "id": 244,
        "inegiid": 20244,
        "name": "San Martín Toxpalan",
        "stateid": 20
    },
    "20245": {
        "id": 245,
        "inegiid": 20245,
        "name": "San Martín Zacatepec",
        "stateid": 20
    },
    "20246": {
        "id": 246,
        "inegiid": 20246,
        "name": "San Mateo Cajonos",
        "stateid": 20
    },
    "20247": {
        "id": 247,
        "inegiid": 20247,
        "name": "Capulálpam de Méndez",
        "stateid": 20
    },
    "20248": {
        "id": 248,
        "inegiid": 20248,
        "name": "San Mateo del Mar",
        "stateid": 20
    },
    "20249": {
        "id": 249,
        "inegiid": 20249,
        "name": "San Mateo Yoloxochitlán",
        "stateid": 20
    },
    "20250": {
        "id": 250,
        "inegiid": 20250,
        "name": "San Mateo Etlatongo",
        "stateid": 20
    },
    "20251": {
        "id": 251,
        "inegiid": 20251,
        "name": "San Mateo Nejápam",
        "stateid": 20
    },
    "20252": {
        "id": 252,
        "inegiid": 20252,
        "name": "San Mateo Peñasco",
        "stateid": 20
    },
    "20253": {
        "id": 253,
        "inegiid": 20253,
        "name": "San Mateo Piñas",
        "stateid": 20
    },
    "20254": {
        "id": 254,
        "inegiid": 20254,
        "name": "San Mateo Río Hondo",
        "stateid": 20
    },
    "20255": {
        "id": 255,
        "inegiid": 20255,
        "name": "San Mateo Sindihui",
        "stateid": 20
    },
    "20256": {
        "id": 256,
        "inegiid": 20256,
        "name": "San Mateo Tlapiltepec",
        "stateid": 20
    },
    "20257": {
        "id": 257,
        "inegiid": 20257,
        "name": "San Melchor Betaza",
        "stateid": 20
    },
    "20258": {
        "id": 258,
        "inegiid": 20258,
        "name": "San Miguel Achiutla",
        "stateid": 20
    },
    "20259": {
        "id": 259,
        "inegiid": 20259,
        "name": "San Miguel Ahuehuetitlán",
        "stateid": 20
    },
    "20260": {
        "id": 260,
        "inegiid": 20260,
        "name": "San Miguel Aloápam",
        "stateid": 20
    },
    "20261": {
        "id": 261,
        "inegiid": 20261,
        "name": "San Miguel Amatitlán",
        "stateid": 20
    },
    "20262": {
        "id": 262,
        "inegiid": 20262,
        "name": "San Miguel Amatlán",
        "stateid": 20
    },
    "20263": {
        "id": 263,
        "inegiid": 20263,
        "name": "San Miguel Coatlán",
        "stateid": 20
    },
    "20264": {
        "id": 264,
        "inegiid": 20264,
        "name": "San Miguel Chicahua",
        "stateid": 20
    },
    "20265": {
        "id": 265,
        "inegiid": 20265,
        "name": "San Miguel Chimalapa",
        "stateid": 20
    },
    "20266": {
        "id": 266,
        "inegiid": 20266,
        "name": "San Miguel del Puerto",
        "stateid": 20
    },
    "20267": {
        "id": 267,
        "inegiid": 20267,
        "name": "San Miguel del Río",
        "stateid": 20
    },
    "20268": {
        "id": 268,
        "inegiid": 20268,
        "name": "San Miguel Ejutla",
        "stateid": 20
    },
    "20269": {
        "id": 269,
        "inegiid": 20269,
        "name": "San Miguel el Grande",
        "stateid": 20
    },
    "20270": {
        "id": 270,
        "inegiid": 20270,
        "name": "San Miguel Huautla",
        "stateid": 20
    },
    "20271": {
        "id": 271,
        "inegiid": 20271,
        "name": "San Miguel Mixtepec",
        "stateid": 20
    },
    "20272": {
        "id": 272,
        "inegiid": 20272,
        "name": "San Miguel Panixtlahuaca",
        "stateid": 20
    },
    "20273": {
        "id": 273,
        "inegiid": 20273,
        "name": "San Miguel Peras",
        "stateid": 20
    },
    "20274": {
        "id": 274,
        "inegiid": 20274,
        "name": "San Miguel Piedras",
        "stateid": 20
    },
    "20275": {
        "id": 275,
        "inegiid": 20275,
        "name": "San Miguel Quetzaltepec",
        "stateid": 20
    },
    "20276": {
        "id": 276,
        "inegiid": 20276,
        "name": "San Miguel Santa Flor",
        "stateid": 20
    },
    "20277": {
        "id": 277,
        "inegiid": 20277,
        "name": "Villa Sola de Vega",
        "stateid": 20
    },
    "20278": {
        "id": 278,
        "inegiid": 20278,
        "name": "San Miguel Soyaltepec",
        "stateid": 20
    },
    "20279": {
        "id": 279,
        "inegiid": 20279,
        "name": "San Miguel Suchixtepec",
        "stateid": 20
    },
    "20280": {
        "id": 280,
        "inegiid": 20280,
        "name": "Villa Talea de Castro",
        "stateid": 20
    },
    "20281": {
        "id": 281,
        "inegiid": 20281,
        "name": "San Miguel Tecomatlán",
        "stateid": 20
    },
    "20282": {
        "id": 282,
        "inegiid": 20282,
        "name": "San Miguel Tenango",
        "stateid": 20
    },
    "20283": {
        "id": 283,
        "inegiid": 20283,
        "name": "San Miguel Tequixtepec",
        "stateid": 20
    },
    "20284": {
        "id": 284,
        "inegiid": 20284,
        "name": "San Miguel Tilquiápam",
        "stateid": 20
    },
    "20285": {
        "id": 285,
        "inegiid": 20285,
        "name": "San Miguel Tlacamama",
        "stateid": 20
    },
    "20286": {
        "id": 286,
        "inegiid": 20286,
        "name": "San Miguel Tlacotepec",
        "stateid": 20
    },
    "20287": {
        "id": 287,
        "inegiid": 20287,
        "name": "San Miguel Tulancingo",
        "stateid": 20
    },
    "20288": {
        "id": 288,
        "inegiid": 20288,
        "name": "San Miguel Yotao",
        "stateid": 20
    },
    "20289": {
        "id": 289,
        "inegiid": 20289,
        "name": "San Nicolás",
        "stateid": 20
    },
    "20290": {
        "id": 290,
        "inegiid": 20290,
        "name": "San Nicolás Hidalgo",
        "stateid": 20
    },
    "20291": {
        "id": 291,
        "inegiid": 20291,
        "name": "San Pablo Coatlán",
        "stateid": 20
    },
    "20292": {
        "id": 292,
        "inegiid": 20292,
        "name": "San Pablo Cuatro Venados",
        "stateid": 20
    },
    "20293": {
        "id": 293,
        "inegiid": 20293,
        "name": "San Pablo Etla",
        "stateid": 20
    },
    "20294": {
        "id": 294,
        "inegiid": 20294,
        "name": "San Pablo Huitzo",
        "stateid": 20
    },
    "20295": {
        "id": 295,
        "inegiid": 20295,
        "name": "San Pablo Huixtepec",
        "stateid": 20
    },
    "20296": {
        "id": 296,
        "inegiid": 20296,
        "name": "San Pablo Macuiltianguis",
        "stateid": 20
    },
    "20297": {
        "id": 297,
        "inegiid": 20297,
        "name": "San Pablo Tijaltepec",
        "stateid": 20
    },
    "20298": {
        "id": 298,
        "inegiid": 20298,
        "name": "San Pablo Villa de Mitla",
        "stateid": 20
    },
    "20299": {
        "id": 299,
        "inegiid": 20299,
        "name": "San Pablo Yaganiza",
        "stateid": 20
    },
    "20300": {
        "id": 300,
        "inegiid": 20300,
        "name": "San Pedro Amuzgos",
        "stateid": 20
    },
    "20301": {
        "id": 301,
        "inegiid": 20301,
        "name": "San Pedro Apóstol",
        "stateid": 20
    },
    "20302": {
        "id": 302,
        "inegiid": 20302,
        "name": "San Pedro Atoyac",
        "stateid": 20
    },
    "20303": {
        "id": 303,
        "inegiid": 20303,
        "name": "San Pedro Cajonos",
        "stateid": 20
    },
    "20304": {
        "id": 304,
        "inegiid": 20304,
        "name": "San Pedro Coxcaltepec Cántaros",
        "stateid": 20
    },
    "20305": {
        "id": 305,
        "inegiid": 20305,
        "name": "San Pedro Comitancillo",
        "stateid": 20
    },
    "20306": {
        "id": 306,
        "inegiid": 20306,
        "name": "San Pedro el Alto",
        "stateid": 20
    },
    "20307": {
        "id": 307,
        "inegiid": 20307,
        "name": "San Pedro Huamelula",
        "stateid": 20
    },
    "20308": {
        "id": 308,
        "inegiid": 20308,
        "name": "San Pedro Huilotepec",
        "stateid": 20
    },
    "20309": {
        "id": 309,
        "inegiid": 20309,
        "name": "San Pedro Ixcatlán",
        "stateid": 20
    },
    "20310": {
        "id": 310,
        "inegiid": 20310,
        "name": "San Pedro Ixtlahuaca",
        "stateid": 20
    },
    "20311": {
        "id": 311,
        "inegiid": 20311,
        "name": "San Pedro Jaltepetongo",
        "stateid": 20
    },
    "20312": {
        "id": 312,
        "inegiid": 20312,
        "name": "San Pedro Jicayán",
        "stateid": 20
    },
    "20313": {
        "id": 313,
        "inegiid": 20313,
        "name": "San Pedro Jocotipac",
        "stateid": 20
    },
    "20314": {
        "id": 314,
        "inegiid": 20314,
        "name": "San Pedro Juchatengo",
        "stateid": 20
    },
    "20315": {
        "id": 315,
        "inegiid": 20315,
        "name": "San Pedro Mártir",
        "stateid": 20
    },
    "20316": {
        "id": 316,
        "inegiid": 20316,
        "name": "San Pedro Mártir Quiechapa",
        "stateid": 20
    },
    "20317": {
        "id": 317,
        "inegiid": 20317,
        "name": "San Pedro Mártir Yucuxaco",
        "stateid": 20
    },
    "20318": {
        "id": 318,
        "inegiid": 20318,
        "name": "San Pedro Mixtepec - Dto. 22 -",
        "stateid": 20
    },
    "20319": {
        "id": 319,
        "inegiid": 20319,
        "name": "San Pedro Mixtepec - Dto. 26 -",
        "stateid": 20
    },
    "20320": {
        "id": 320,
        "inegiid": 20320,
        "name": "San Pedro Molinos",
        "stateid": 20
    },
    "20321": {
        "id": 321,
        "inegiid": 20321,
        "name": "San Pedro Nopala",
        "stateid": 20
    },
    "20322": {
        "id": 322,
        "inegiid": 20322,
        "name": "San Pedro Ocopetatillo",
        "stateid": 20
    },
    "20323": {
        "id": 323,
        "inegiid": 20323,
        "name": "San Pedro Ocotepec",
        "stateid": 20
    },
    "20324": {
        "id": 324,
        "inegiid": 20324,
        "name": "San Pedro Pochutla",
        "stateid": 20
    },
    "20325": {
        "id": 325,
        "inegiid": 20325,
        "name": "San Pedro Quiatoni",
        "stateid": 20
    },
    "20326": {
        "id": 326,
        "inegiid": 20326,
        "name": "San Pedro Sochiápam",
        "stateid": 20
    },
    "20327": {
        "id": 327,
        "inegiid": 20327,
        "name": "San Pedro Tapanatepec",
        "stateid": 20
    },
    "20328": {
        "id": 328,
        "inegiid": 20328,
        "name": "San Pedro Taviche",
        "stateid": 20
    },
    "20329": {
        "id": 329,
        "inegiid": 20329,
        "name": "San Pedro Teozacoalco",
        "stateid": 20
    },
    "20330": {
        "id": 330,
        "inegiid": 20330,
        "name": "San Pedro Teutila",
        "stateid": 20
    },
    "20331": {
        "id": 331,
        "inegiid": 20331,
        "name": "San Pedro Tidaá",
        "stateid": 20
    },
    "20332": {
        "id": 332,
        "inegiid": 20332,
        "name": "San Pedro Topiltepec",
        "stateid": 20
    },
    "20333": {
        "id": 333,
        "inegiid": 20333,
        "name": "San Pedro Totolapa",
        "stateid": 20
    },
    "20334": {
        "id": 334,
        "inegiid": 20334,
        "name": "Villa de Tututepec de Melchor Ocampo",
        "stateid": 20
    },
    "20335": {
        "id": 335,
        "inegiid": 20335,
        "name": "San Pedro Yaneri",
        "stateid": 20
    },
    "20336": {
        "id": 336,
        "inegiid": 20336,
        "name": "San Pedro Yólox",
        "stateid": 20
    },
    "20337": {
        "id": 337,
        "inegiid": 20337,
        "name": "San Pedro y San Pablo Ayutla",
        "stateid": 20
    },
    "20338": {
        "id": 338,
        "inegiid": 20338,
        "name": "Villa de Etla",
        "stateid": 20
    },
    "20339": {
        "id": 339,
        "inegiid": 20339,
        "name": "San Pedro y San Pablo Teposcolula",
        "stateid": 20
    },
    "20340": {
        "id": 340,
        "inegiid": 20340,
        "name": "San Pedro y San Pablo Tequixtepec",
        "stateid": 20
    },
    "20341": {
        "id": 341,
        "inegiid": 20341,
        "name": "San Pedro Yucunama",
        "stateid": 20
    },
    "20342": {
        "id": 342,
        "inegiid": 20342,
        "name": "San Raymundo Jalpan",
        "stateid": 20
    },
    "20343": {
        "id": 343,
        "inegiid": 20343,
        "name": "San Sebastián Abasolo",
        "stateid": 20
    },
    "20344": {
        "id": 344,
        "inegiid": 20344,
        "name": "San Sebastián Coatlán",
        "stateid": 20
    },
    "20345": {
        "id": 345,
        "inegiid": 20345,
        "name": "San Sebastián Ixcapa",
        "stateid": 20
    },
    "20346": {
        "id": 346,
        "inegiid": 20346,
        "name": "San Sebastián Nicananduta",
        "stateid": 20
    },
    "20347": {
        "id": 347,
        "inegiid": 20347,
        "name": "San Sebastián Río Hondo",
        "stateid": 20
    },
    "20348": {
        "id": 348,
        "inegiid": 20348,
        "name": "San Sebastián Tecomaxtlahuaca",
        "stateid": 20
    },
    "20349": {
        "id": 349,
        "inegiid": 20349,
        "name": "San Sebastián Teitipac",
        "stateid": 20
    },
    "20350": {
        "id": 350,
        "inegiid": 20350,
        "name": "San Sebastián Tutla",
        "stateid": 20
    },
    "20351": {
        "id": 351,
        "inegiid": 20351,
        "name": "San Simón Almolongas",
        "stateid": 20
    },
    "20352": {
        "id": 352,
        "inegiid": 20352,
        "name": "San Simón Zahuatlán",
        "stateid": 20
    },
    "20353": {
        "id": 353,
        "inegiid": 20353,
        "name": "Santa Ana",
        "stateid": 20
    },
    "20354": {
        "id": 354,
        "inegiid": 20354,
        "name": "Santa Ana Ateixtlahuaca",
        "stateid": 20
    },
    "20355": {
        "id": 355,
        "inegiid": 20355,
        "name": "Santa Ana Cuauhtémoc",
        "stateid": 20
    },
    "20356": {
        "id": 356,
        "inegiid": 20356,
        "name": "Santa Ana del Valle",
        "stateid": 20
    },
    "20357": {
        "id": 357,
        "inegiid": 20357,
        "name": "Santa Ana Tavela",
        "stateid": 20
    },
    "20358": {
        "id": 358,
        "inegiid": 20358,
        "name": "Santa Ana Tlapacoyan",
        "stateid": 20
    },
    "20359": {
        "id": 359,
        "inegiid": 20359,
        "name": "Santa Ana Yareni",
        "stateid": 20
    },
    "20360": {
        "id": 360,
        "inegiid": 20360,
        "name": "Santa Ana Zegache",
        "stateid": 20
    },
    "20361": {
        "id": 361,
        "inegiid": 20361,
        "name": "Santa Catalina Quierí",
        "stateid": 20
    },
    "20362": {
        "id": 362,
        "inegiid": 20362,
        "name": "Santa Catarina Cuixtla",
        "stateid": 20
    },
    "20363": {
        "id": 363,
        "inegiid": 20363,
        "name": "Santa Catarina Ixtepeji",
        "stateid": 20
    },
    "20364": {
        "id": 364,
        "inegiid": 20364,
        "name": "Santa Catarina Juquila",
        "stateid": 20
    },
    "20365": {
        "id": 365,
        "inegiid": 20365,
        "name": "Santa Catarina Lachatao",
        "stateid": 20
    },
    "20366": {
        "id": 366,
        "inegiid": 20366,
        "name": "Santa Catarina Loxicha",
        "stateid": 20
    },
    "20367": {
        "id": 367,
        "inegiid": 20367,
        "name": "Santa Catarina Mechoacán",
        "stateid": 20
    },
    "20368": {
        "id": 368,
        "inegiid": 20368,
        "name": "Santa Catarina Minas",
        "stateid": 20
    },
    "20369": {
        "id": 369,
        "inegiid": 20369,
        "name": "Santa Catarina Quiané",
        "stateid": 20
    },
    "20370": {
        "id": 370,
        "inegiid": 20370,
        "name": "Santa Catarina Tayata",
        "stateid": 20
    },
    "20371": {
        "id": 371,
        "inegiid": 20371,
        "name": "Santa Catarina Ticuá",
        "stateid": 20
    },
    "20372": {
        "id": 372,
        "inegiid": 20372,
        "name": "Santa Catarina Yosonotú",
        "stateid": 20
    },
    "20373": {
        "id": 373,
        "inegiid": 20373,
        "name": "Santa Catarina Zapoquila",
        "stateid": 20
    },
    "20374": {
        "id": 374,
        "inegiid": 20374,
        "name": "Santa Cruz Acatepec",
        "stateid": 20
    },
    "20375": {
        "id": 375,
        "inegiid": 20375,
        "name": "Santa Cruz Amilpas",
        "stateid": 20
    },
    "20376": {
        "id": 376,
        "inegiid": 20376,
        "name": "Santa Cruz de Bravo",
        "stateid": 20
    },
    "20377": {
        "id": 377,
        "inegiid": 20377,
        "name": "Santa Cruz Itundujia",
        "stateid": 20
    },
    "20378": {
        "id": 378,
        "inegiid": 20378,
        "name": "Santa Cruz Mixtepec",
        "stateid": 20
    },
    "20379": {
        "id": 379,
        "inegiid": 20379,
        "name": "Santa Cruz Nundaco",
        "stateid": 20
    },
    "20380": {
        "id": 380,
        "inegiid": 20380,
        "name": "Santa Cruz Papalutla",
        "stateid": 20
    },
    "20381": {
        "id": 381,
        "inegiid": 20381,
        "name": "Santa Cruz Tacache de Mina",
        "stateid": 20
    },
    "20382": {
        "id": 382,
        "inegiid": 20382,
        "name": "Santa Cruz Tacahua",
        "stateid": 20
    },
    "20383": {
        "id": 383,
        "inegiid": 20383,
        "name": "Santa Cruz Tayata",
        "stateid": 20
    },
    "20384": {
        "id": 384,
        "inegiid": 20384,
        "name": "Santa Cruz Xitla",
        "stateid": 20
    },
    "20385": {
        "id": 385,
        "inegiid": 20385,
        "name": "Santa Cruz Xoxocotlán",
        "stateid": 20
    },
    "20386": {
        "id": 386,
        "inegiid": 20386,
        "name": "Santa Cruz Zenzontepec",
        "stateid": 20
    },
    "20387": {
        "id": 387,
        "inegiid": 20387,
        "name": "Santa Gertrudis",
        "stateid": 20
    },
    "20388": {
        "id": 388,
        "inegiid": 20388,
        "name": "Santa Inés del Monte",
        "stateid": 20
    },
    "20389": {
        "id": 389,
        "inegiid": 20389,
        "name": "Santa Inés Yatzeche",
        "stateid": 20
    },
    "20390": {
        "id": 390,
        "inegiid": 20390,
        "name": "Santa Lucía del Camino",
        "stateid": 20
    },
    "20391": {
        "id": 391,
        "inegiid": 20391,
        "name": "Santa Lucía Miahuatlán",
        "stateid": 20
    },
    "20392": {
        "id": 392,
        "inegiid": 20392,
        "name": "Santa Lucía Monteverde",
        "stateid": 20
    },
    "20393": {
        "id": 393,
        "inegiid": 20393,
        "name": "Santa Lucía Ocotlán",
        "stateid": 20
    },
    "20394": {
        "id": 394,
        "inegiid": 20394,
        "name": "Santa María Alotepec",
        "stateid": 20
    },
    "20395": {
        "id": 395,
        "inegiid": 20395,
        "name": "Santa María Apazco",
        "stateid": 20
    },
    "20396": {
        "id": 396,
        "inegiid": 20396,
        "name": "Santa María la Asunción",
        "stateid": 20
    },
    "20397": {
        "id": 397,
        "inegiid": 20397,
        "name": "Heroica Ciudad de Tlaxiaco",
        "stateid": 20
    },
    "20398": {
        "id": 398,
        "inegiid": 20398,
        "name": "Ayoquezco de Aldama",
        "stateid": 20
    },
    "20399": {
        "id": 399,
        "inegiid": 20399,
        "name": "Santa María Atzompa",
        "stateid": 20
    },
    "20400": {
        "id": 400,
        "inegiid": 20400,
        "name": "Santa María Camotlán",
        "stateid": 20
    },
    "20401": {
        "id": 401,
        "inegiid": 20401,
        "name": "Santa María Colotepec",
        "stateid": 20
    },
    "20402": {
        "id": 402,
        "inegiid": 20402,
        "name": "Santa María Cortijo",
        "stateid": 20
    },
    "20403": {
        "id": 403,
        "inegiid": 20403,
        "name": "Santa María Coyotepec",
        "stateid": 20
    },
    "20404": {
        "id": 404,
        "inegiid": 20404,
        "name": "Santa María Chachoápam",
        "stateid": 20
    },
    "20405": {
        "id": 405,
        "inegiid": 20405,
        "name": "Villa de Chilapa de Díaz",
        "stateid": 20
    },
    "20406": {
        "id": 406,
        "inegiid": 20406,
        "name": "Santa María Chilchotla",
        "stateid": 20
    },
    "20407": {
        "id": 407,
        "inegiid": 20407,
        "name": "Santa María Chimalapa",
        "stateid": 20
    },
    "20408": {
        "id": 408,
        "inegiid": 20408,
        "name": "Santa María del Rosario",
        "stateid": 20
    },
    "20409": {
        "id": 409,
        "inegiid": 20409,
        "name": "Santa María del Tule",
        "stateid": 20
    },
    "20410": {
        "id": 410,
        "inegiid": 20410,
        "name": "Santa María Ecatepec",
        "stateid": 20
    },
    "20411": {
        "id": 411,
        "inegiid": 20411,
        "name": "Santa María Guelacé",
        "stateid": 20
    },
    "20412": {
        "id": 412,
        "inegiid": 20412,
        "name": "Santa María Guienagati",
        "stateid": 20
    },
    "20413": {
        "id": 413,
        "inegiid": 20413,
        "name": "Santa María Huatulco",
        "stateid": 20
    },
    "20414": {
        "id": 414,
        "inegiid": 20414,
        "name": "Santa María Huazolotitlán",
        "stateid": 20
    },
    "20415": {
        "id": 415,
        "inegiid": 20415,
        "name": "Santa María Ipalapa",
        "stateid": 20
    },
    "20416": {
        "id": 416,
        "inegiid": 20416,
        "name": "Santa María Ixcatlán",
        "stateid": 20
    },
    "20417": {
        "id": 417,
        "inegiid": 20417,
        "name": "Santa María Jacatepec",
        "stateid": 20
    },
    "20418": {
        "id": 418,
        "inegiid": 20418,
        "name": "Santa María Jalapa del Marqués",
        "stateid": 20
    },
    "20419": {
        "id": 419,
        "inegiid": 20419,
        "name": "Santa María Jaltianguis",
        "stateid": 20
    },
    "20420": {
        "id": 420,
        "inegiid": 20420,
        "name": "Santa María Lachixío",
        "stateid": 20
    },
    "20421": {
        "id": 421,
        "inegiid": 20421,
        "name": "Santa María Mixtequilla",
        "stateid": 20
    },
    "20422": {
        "id": 422,
        "inegiid": 20422,
        "name": "Santa María Nativitas",
        "stateid": 20
    },
    "20423": {
        "id": 423,
        "inegiid": 20423,
        "name": "Santa María Nduayaco",
        "stateid": 20
    },
    "20424": {
        "id": 424,
        "inegiid": 20424,
        "name": "Santa María Ozolotepec",
        "stateid": 20
    },
    "20425": {
        "id": 425,
        "inegiid": 20425,
        "name": "Santa María Pápalo",
        "stateid": 20
    },
    "20426": {
        "id": 426,
        "inegiid": 20426,
        "name": "Santa María Peñoles",
        "stateid": 20
    },
    "20427": {
        "id": 427,
        "inegiid": 20427,
        "name": "Santa María Petapa",
        "stateid": 20
    },
    "20428": {
        "id": 428,
        "inegiid": 20428,
        "name": "Santa María Quiegolani",
        "stateid": 20
    },
    "20429": {
        "id": 429,
        "inegiid": 20429,
        "name": "Santa María Sola",
        "stateid": 20
    },
    "20430": {
        "id": 430,
        "inegiid": 20430,
        "name": "Santa María Tataltepec",
        "stateid": 20
    },
    "20431": {
        "id": 431,
        "inegiid": 20431,
        "name": "Santa María Tecomavaca",
        "stateid": 20
    },
    "20432": {
        "id": 432,
        "inegiid": 20432,
        "name": "Santa María Temaxcalapa",
        "stateid": 20
    },
    "20433": {
        "id": 433,
        "inegiid": 20433,
        "name": "Santa María Temaxcaltepec",
        "stateid": 20
    },
    "20434": {
        "id": 434,
        "inegiid": 20434,
        "name": "Santa María Teopoxco",
        "stateid": 20
    },
    "20435": {
        "id": 435,
        "inegiid": 20435,
        "name": "Santa María Tepantlali",
        "stateid": 20
    },
    "20436": {
        "id": 436,
        "inegiid": 20436,
        "name": "Santa María Texcatitlán",
        "stateid": 20
    },
    "20437": {
        "id": 437,
        "inegiid": 20437,
        "name": "Santa María Tlahuitoltepec",
        "stateid": 20
    },
    "20438": {
        "id": 438,
        "inegiid": 20438,
        "name": "Santa María Tlalixtac",
        "stateid": 20
    },
    "20439": {
        "id": 439,
        "inegiid": 20439,
        "name": "Santa María Tonameca",
        "stateid": 20
    },
    "20440": {
        "id": 440,
        "inegiid": 20440,
        "name": "Santa María Totolapilla",
        "stateid": 20
    },
    "20441": {
        "id": 441,
        "inegiid": 20441,
        "name": "Santa María Xadani",
        "stateid": 20
    },
    "20442": {
        "id": 442,
        "inegiid": 20442,
        "name": "Santa María Yalina",
        "stateid": 20
    },
    "20443": {
        "id": 443,
        "inegiid": 20443,
        "name": "Santa María Yavesía",
        "stateid": 20
    },
    "20444": {
        "id": 444,
        "inegiid": 20444,
        "name": "Santa María Yolotepec",
        "stateid": 20
    },
    "20445": {
        "id": 445,
        "inegiid": 20445,
        "name": "Santa María Yosoyúa",
        "stateid": 20
    },
    "20446": {
        "id": 446,
        "inegiid": 20446,
        "name": "Santa María Yucuhiti",
        "stateid": 20
    },
    "20447": {
        "id": 447,
        "inegiid": 20447,
        "name": "Santa María Zacatepec",
        "stateid": 20
    },
    "20448": {
        "id": 448,
        "inegiid": 20448,
        "name": "Santa María Zaniza",
        "stateid": 20
    },
    "20449": {
        "id": 449,
        "inegiid": 20449,
        "name": "Santa María Zoquitlán",
        "stateid": 20
    },
    "20450": {
        "id": 450,
        "inegiid": 20450,
        "name": "Santiago Amoltepec",
        "stateid": 20
    },
    "20451": {
        "id": 451,
        "inegiid": 20451,
        "name": "Santiago Apoala",
        "stateid": 20
    },
    "20452": {
        "id": 452,
        "inegiid": 20452,
        "name": "Santiago Apóstol",
        "stateid": 20
    },
    "20453": {
        "id": 453,
        "inegiid": 20453,
        "name": "Santiago Astata",
        "stateid": 20
    },
    "20454": {
        "id": 454,
        "inegiid": 20454,
        "name": "Santiago Atitlán",
        "stateid": 20
    },
    "20455": {
        "id": 455,
        "inegiid": 20455,
        "name": "Santiago Ayuquililla",
        "stateid": 20
    },
    "20456": {
        "id": 456,
        "inegiid": 20456,
        "name": "Santiago Cacaloxtepec",
        "stateid": 20
    },
    "20457": {
        "id": 457,
        "inegiid": 20457,
        "name": "Santiago Camotlán",
        "stateid": 20
    },
    "20458": {
        "id": 458,
        "inegiid": 20458,
        "name": "Santiago Comaltepec",
        "stateid": 20
    },
    "20459": {
        "id": 459,
        "inegiid": 20459,
        "name": "Santiago Chazumba",
        "stateid": 20
    },
    "20460": {
        "id": 460,
        "inegiid": 20460,
        "name": "Santiago Choápam",
        "stateid": 20
    },
    "20461": {
        "id": 461,
        "inegiid": 20461,
        "name": "Santiago del Río",
        "stateid": 20
    },
    "20462": {
        "id": 462,
        "inegiid": 20462,
        "name": "Santiago Huajolotitlán",
        "stateid": 20
    },
    "20463": {
        "id": 463,
        "inegiid": 20463,
        "name": "Santiago Huauclilla",
        "stateid": 20
    },
    "20464": {
        "id": 464,
        "inegiid": 20464,
        "name": "Santiago Ihuitlán Plumas",
        "stateid": 20
    },
    "20465": {
        "id": 465,
        "inegiid": 20465,
        "name": "Santiago Ixcuintepec",
        "stateid": 20
    },
    "20466": {
        "id": 466,
        "inegiid": 20466,
        "name": "Santiago Ixtayutla",
        "stateid": 20
    },
    "20467": {
        "id": 467,
        "inegiid": 20467,
        "name": "Santiago Jamiltepec",
        "stateid": 20
    },
    "20468": {
        "id": 468,
        "inegiid": 20468,
        "name": "Santiago Jocotepec",
        "stateid": 20
    },
    "20469": {
        "id": 469,
        "inegiid": 20469,
        "name": "Santiago Juxtlahuaca",
        "stateid": 20
    },
    "20470": {
        "id": 470,
        "inegiid": 20470,
        "name": "Santiago Lachiguiri",
        "stateid": 20
    },
    "20471": {
        "id": 471,
        "inegiid": 20471,
        "name": "Santiago Lalopa",
        "stateid": 20
    },
    "20472": {
        "id": 472,
        "inegiid": 20472,
        "name": "Santiago Laollaga",
        "stateid": 20
    },
    "20473": {
        "id": 473,
        "inegiid": 20473,
        "name": "Santiago Laxopa",
        "stateid": 20
    },
    "20474": {
        "id": 474,
        "inegiid": 20474,
        "name": "Santiago Llano Grande",
        "stateid": 20
    },
    "20475": {
        "id": 475,
        "inegiid": 20475,
        "name": "Santiago Matatlán",
        "stateid": 20
    },
    "20476": {
        "id": 476,
        "inegiid": 20476,
        "name": "Santiago Miltepec",
        "stateid": 20
    },
    "20477": {
        "id": 477,
        "inegiid": 20477,
        "name": "Santiago Minas",
        "stateid": 20
    },
    "20478": {
        "id": 478,
        "inegiid": 20478,
        "name": "Santiago Nacaltepec",
        "stateid": 20
    },
    "20479": {
        "id": 479,
        "inegiid": 20479,
        "name": "Santiago Nejapilla",
        "stateid": 20
    },
    "20480": {
        "id": 480,
        "inegiid": 20480,
        "name": "Santiago Nundiche",
        "stateid": 20
    },
    "20481": {
        "id": 481,
        "inegiid": 20481,
        "name": "Santiago Nuyoó",
        "stateid": 20
    },
    "20482": {
        "id": 482,
        "inegiid": 20482,
        "name": "Santiago Pinotepa Nacional",
        "stateid": 20
    },
    "20483": {
        "id": 483,
        "inegiid": 20483,
        "name": "Santiago Suchilquitongo",
        "stateid": 20
    },
    "20484": {
        "id": 484,
        "inegiid": 20484,
        "name": "Santiago Tamazola",
        "stateid": 20
    },
    "20485": {
        "id": 485,
        "inegiid": 20485,
        "name": "Santiago Tapextla",
        "stateid": 20
    },
    "20486": {
        "id": 486,
        "inegiid": 20486,
        "name": "Villa Tejúpam de la Unión",
        "stateid": 20
    },
    "20487": {
        "id": 487,
        "inegiid": 20487,
        "name": "Santiago Tenango",
        "stateid": 20
    },
    "20488": {
        "id": 488,
        "inegiid": 20488,
        "name": "Santiago Tepetlapa",
        "stateid": 20
    },
    "20489": {
        "id": 489,
        "inegiid": 20489,
        "name": "Santiago Tetepec",
        "stateid": 20
    },
    "20490": {
        "id": 490,
        "inegiid": 20490,
        "name": "Santiago Texcalcingo",
        "stateid": 20
    },
    "20491": {
        "id": 491,
        "inegiid": 20491,
        "name": "Santiago Textitlán",
        "stateid": 20
    },
    "20492": {
        "id": 492,
        "inegiid": 20492,
        "name": "Santiago Tilantongo",
        "stateid": 20
    },
    "20493": {
        "id": 493,
        "inegiid": 20493,
        "name": "Santiago Tillo",
        "stateid": 20
    },
    "20494": {
        "id": 494,
        "inegiid": 20494,
        "name": "Santiago Tlazoyaltepec",
        "stateid": 20
    },
    "20495": {
        "id": 495,
        "inegiid": 20495,
        "name": "Santiago Xanica",
        "stateid": 20
    },
    "20496": {
        "id": 496,
        "inegiid": 20496,
        "name": "Santiago Xiacuí",
        "stateid": 20
    },
    "20497": {
        "id": 497,
        "inegiid": 20497,
        "name": "Santiago Yaitepec",
        "stateid": 20
    },
    "20498": {
        "id": 498,
        "inegiid": 20498,
        "name": "Santiago Yaveo",
        "stateid": 20
    },
    "20499": {
        "id": 499,
        "inegiid": 20499,
        "name": "Santiago Yolomécatl",
        "stateid": 20
    },
    "20500": {
        "id": 500,
        "inegiid": 20500,
        "name": "Santiago Yosondúa",
        "stateid": 20
    },
    "20501": {
        "id": 501,
        "inegiid": 20501,
        "name": "Santiago Yucuyachi",
        "stateid": 20
    },
    "20502": {
        "id": 502,
        "inegiid": 20502,
        "name": "Santiago Zacatepec",
        "stateid": 20
    },
    "20503": {
        "id": 503,
        "inegiid": 20503,
        "name": "Santiago Zoochila",
        "stateid": 20
    },
    "20504": {
        "id": 504,
        "inegiid": 20504,
        "name": "Nuevo Zoquiápam",
        "stateid": 20
    },
    "20505": {
        "id": 505,
        "inegiid": 20505,
        "name": "Santo Domingo Ingenio",
        "stateid": 20
    },
    "20506": {
        "id": 506,
        "inegiid": 20506,
        "name": "Santo Domingo Albarradas",
        "stateid": 20
    },
    "20507": {
        "id": 507,
        "inegiid": 20507,
        "name": "Santo Domingo Armenta",
        "stateid": 20
    },
    "20508": {
        "id": 508,
        "inegiid": 20508,
        "name": "Santo Domingo Chihuitán",
        "stateid": 20
    },
    "20509": {
        "id": 509,
        "inegiid": 20509,
        "name": "Santo Domingo de Morelos",
        "stateid": 20
    },
    "20510": {
        "id": 510,
        "inegiid": 20510,
        "name": "Santo Domingo Ixcatlán",
        "stateid": 20
    },
    "20511": {
        "id": 511,
        "inegiid": 20511,
        "name": "Santo Domingo Nuxaá",
        "stateid": 20
    },
    "20512": {
        "id": 512,
        "inegiid": 20512,
        "name": "Santo Domingo Ozolotepec",
        "stateid": 20
    },
    "20513": {
        "id": 513,
        "inegiid": 20513,
        "name": "Santo Domingo Petapa",
        "stateid": 20
    },
    "20514": {
        "id": 514,
        "inegiid": 20514,
        "name": "Santo Domingo Roayaga",
        "stateid": 20
    },
    "20515": {
        "id": 515,
        "inegiid": 20515,
        "name": "Santo Domingo Tehuantepec",
        "stateid": 20
    },
    "20516": {
        "id": 516,
        "inegiid": 20516,
        "name": "Santo Domingo Teojomulco",
        "stateid": 20
    },
    "20517": {
        "id": 517,
        "inegiid": 20517,
        "name": "Santo Domingo Tepuxtepec",
        "stateid": 20
    },
    "20518": {
        "id": 518,
        "inegiid": 20518,
        "name": "Santo Domingo Tlatayápam",
        "stateid": 20
    },
    "20519": {
        "id": 519,
        "inegiid": 20519,
        "name": "Santo Domingo Tomaltepec",
        "stateid": 20
    },
    "20520": {
        "id": 520,
        "inegiid": 20520,
        "name": "Santo Domingo Tonalá",
        "stateid": 20
    },
    "20521": {
        "id": 521,
        "inegiid": 20521,
        "name": "Santo Domingo Tonaltepec",
        "stateid": 20
    },
    "20522": {
        "id": 522,
        "inegiid": 20522,
        "name": "Santo Domingo Xagacía",
        "stateid": 20
    },
    "20523": {
        "id": 523,
        "inegiid": 20523,
        "name": "Santo Domingo Yanhuitlán",
        "stateid": 20
    },
    "20524": {
        "id": 524,
        "inegiid": 20524,
        "name": "Santo Domingo Yodohino",
        "stateid": 20
    },
    "20525": {
        "id": 525,
        "inegiid": 20525,
        "name": "Santo Domingo Zanatepec",
        "stateid": 20
    },
    "20526": {
        "id": 526,
        "inegiid": 20526,
        "name": "Santos Reyes Nopala",
        "stateid": 20
    },
    "20527": {
        "id": 527,
        "inegiid": 20527,
        "name": "Santos Reyes Pápalo",
        "stateid": 20
    },
    "20528": {
        "id": 528,
        "inegiid": 20528,
        "name": "Santos Reyes Tepejillo",
        "stateid": 20
    },
    "20529": {
        "id": 529,
        "inegiid": 20529,
        "name": "Santos Reyes Yucuná",
        "stateid": 20
    },
    "20530": {
        "id": 530,
        "inegiid": 20530,
        "name": "Santo Tomás Jalieza",
        "stateid": 20
    },
    "20531": {
        "id": 531,
        "inegiid": 20531,
        "name": "Santo Tomás Mazaltepec",
        "stateid": 20
    },
    "20532": {
        "id": 532,
        "inegiid": 20532,
        "name": "Santo Tomás Ocotepec",
        "stateid": 20
    },
    "20533": {
        "id": 533,
        "inegiid": 20533,
        "name": "Santo Tomás Tamazulapan",
        "stateid": 20
    },
    "20534": {
        "id": 534,
        "inegiid": 20534,
        "name": "San Vicente Coatlán",
        "stateid": 20
    },
    "20535": {
        "id": 535,
        "inegiid": 20535,
        "name": "San Vicente Lachixío",
        "stateid": 20
    },
    "20536": {
        "id": 536,
        "inegiid": 20536,
        "name": "San Vicente Nuñú",
        "stateid": 20
    },
    "20537": {
        "id": 537,
        "inegiid": 20537,
        "name": "Silacayoápam",
        "stateid": 20
    },
    "20538": {
        "id": 538,
        "inegiid": 20538,
        "name": "Sitio de Xitlapehua",
        "stateid": 20
    },
    "20539": {
        "id": 539,
        "inegiid": 20539,
        "name": "Soledad Etla",
        "stateid": 20
    },
    "20540": {
        "id": 540,
        "inegiid": 20540,
        "name": "Villa de Tamazulápam del Progreso",
        "stateid": 20
    },
    "20541": {
        "id": 541,
        "inegiid": 20541,
        "name": "Tanetze de Zaragoza",
        "stateid": 20
    },
    "20542": {
        "id": 542,
        "inegiid": 20542,
        "name": "Taniche",
        "stateid": 20
    },
    "20543": {
        "id": 543,
        "inegiid": 20543,
        "name": "Tataltepec de Valdés",
        "stateid": 20
    },
    "20544": {
        "id": 544,
        "inegiid": 20544,
        "name": "Teococuilco de Marcos Pérez",
        "stateid": 20
    },
    "20545": {
        "id": 545,
        "inegiid": 20545,
        "name": "Teotitlán de Flores Magón",
        "stateid": 20
    },
    "20546": {
        "id": 546,
        "inegiid": 20546,
        "name": "Teotitlán del Valle",
        "stateid": 20
    },
    "20547": {
        "id": 547,
        "inegiid": 20547,
        "name": "Teotongo",
        "stateid": 20
    },
    "20548": {
        "id": 548,
        "inegiid": 20548,
        "name": "Tepelmeme Villa de Morelos",
        "stateid": 20
    },
    "20549": {
        "id": 549,
        "inegiid": 20549,
        "name": "Tezoatlán de Segura y Luna",
        "stateid": 20
    },
    "20550": {
        "id": 550,
        "inegiid": 20550,
        "name": "San Jerónimo Tlacochahuaya",
        "stateid": 20
    },
    "20551": {
        "id": 551,
        "inegiid": 20551,
        "name": "Tlacolula de Matamoros",
        "stateid": 20
    },
    "20552": {
        "id": 552,
        "inegiid": 20552,
        "name": "Tlacotepec Plumas",
        "stateid": 20
    },
    "20553": {
        "id": 553,
        "inegiid": 20553,
        "name": "Tlalixtac de Cabrera",
        "stateid": 20
    },
    "20554": {
        "id": 554,
        "inegiid": 20554,
        "name": "Totontepec Villa de Morelos",
        "stateid": 20
    },
    "20555": {
        "id": 555,
        "inegiid": 20555,
        "name": "Trinidad Zaachila",
        "stateid": 20
    },
    "20556": {
        "id": 556,
        "inegiid": 20556,
        "name": "La Trinidad Vista Hermosa",
        "stateid": 20
    },
    "20557": {
        "id": 557,
        "inegiid": 20557,
        "name": "Unión Hidalgo",
        "stateid": 20
    },
    "20558": {
        "id": 558,
        "inegiid": 20558,
        "name": "Valerio Trujano",
        "stateid": 20
    },
    "20559": {
        "id": 559,
        "inegiid": 20559,
        "name": "San Juan Bautista Valle Nacional",
        "stateid": 20
    },
    "20560": {
        "id": 560,
        "inegiid": 20560,
        "name": "Villa Díaz Ordaz",
        "stateid": 20
    },
    "20561": {
        "id": 561,
        "inegiid": 20561,
        "name": "Yaxe",
        "stateid": 20
    },
    "20562": {
        "id": 562,
        "inegiid": 20562,
        "name": "Magdalena Yodocono de Porfirio Díaz",
        "stateid": 20
    },
    "20563": {
        "id": 563,
        "inegiid": 20563,
        "name": "Yogana",
        "stateid": 20
    },
    "20564": {
        "id": 564,
        "inegiid": 20564,
        "name": "Yutanduchi de Guerrero",
        "stateid": 20
    },
    "20565": {
        "id": 565,
        "inegiid": 20565,
        "name": "Villa de Zaachila",
        "stateid": 20
    },
    "20566": {
        "id": 566,
        "inegiid": 20566,
        "name": "Zapotitlán del Río",
        "stateid": 20
    },
    "20567": {
        "id": 567,
        "inegiid": 20567,
        "name": "Zapotitlán Lagunas",
        "stateid": 20
    },
    "20568": {
        "id": 568,
        "inegiid": 20568,
        "name": "Zapotitlán Palmas",
        "stateid": 20
    },
    "20569": {
        "id": 569,
        "inegiid": 20569,
        "name": "Santa Inés de Zaragoza",
        "stateid": 20
    },
    "20570": {
        "id": 570,
        "inegiid": 20570,
        "name": "Zimatlán de Álvarez",
        "stateid": 20
    },
    "21001": {
        "id": 1,
        "inegiid": 21001,
        "name": "Acajete",
        "stateid": 21
    },
    "21002": {
        "id": 2,
        "inegiid": 21002,
        "name": "Acateno",
        "stateid": 21
    },
    "21003": {
        "id": 3,
        "inegiid": 21003,
        "name": "Acatlán",
        "stateid": 21
    },
    "21004": {
        "id": 4,
        "inegiid": 21004,
        "name": "Acatzingo",
        "stateid": 21
    },
    "21005": {
        "id": 5,
        "inegiid": 21005,
        "name": "Acteopan",
        "stateid": 21
    },
    "21006": {
        "id": 6,
        "inegiid": 21006,
        "name": "Ahuacatlán",
        "stateid": 21
    },
    "21007": {
        "id": 7,
        "inegiid": 21007,
        "name": "Ahuatlán",
        "stateid": 21
    },
    "21008": {
        "id": 8,
        "inegiid": 21008,
        "name": "Ahuazotepec",
        "stateid": 21
    },
    "21009": {
        "id": 9,
        "inegiid": 21009,
        "name": "Ahuehuetitla",
        "stateid": 21
    },
    "21010": {
        "id": 10,
        "inegiid": 21010,
        "name": "Ajalpan",
        "stateid": 21
    },
    "21011": {
        "id": 11,
        "inegiid": 21011,
        "name": "Albino Zertuche",
        "stateid": 21
    },
    "21012": {
        "id": 12,
        "inegiid": 21012,
        "name": "Aljojuca",
        "stateid": 21
    },
    "21013": {
        "id": 13,
        "inegiid": 21013,
        "name": "Altepexi",
        "stateid": 21
    },
    "21014": {
        "id": 14,
        "inegiid": 21014,
        "name": "Amixtlán",
        "stateid": 21
    },
    "21015": {
        "id": 15,
        "inegiid": 21015,
        "name": "Amozoc",
        "stateid": 21
    },
    "21016": {
        "id": 16,
        "inegiid": 21016,
        "name": "Aquixtla",
        "stateid": 21
    },
    "21017": {
        "id": 17,
        "inegiid": 21017,
        "name": "Atempan",
        "stateid": 21
    },
    "21018": {
        "id": 18,
        "inegiid": 21018,
        "name": "Atexcal",
        "stateid": 21
    },
    "21019": {
        "id": 19,
        "inegiid": 21019,
        "name": "Atlixco",
        "stateid": 21
    },
    "21020": {
        "id": 20,
        "inegiid": 21020,
        "name": "Atoyatempan",
        "stateid": 21
    },
    "21021": {
        "id": 21,
        "inegiid": 21021,
        "name": "Atzala",
        "stateid": 21
    },
    "21022": {
        "id": 22,
        "inegiid": 21022,
        "name": "Atzitzihuacán",
        "stateid": 21
    },
    "21023": {
        "id": 23,
        "inegiid": 21023,
        "name": "Atzitzintla",
        "stateid": 21
    },
    "21024": {
        "id": 24,
        "inegiid": 21024,
        "name": "Axutla",
        "stateid": 21
    },
    "21025": {
        "id": 25,
        "inegiid": 21025,
        "name": "Ayotoxco de Guerrero",
        "stateid": 21
    },
    "21026": {
        "id": 26,
        "inegiid": 21026,
        "name": "Calpan",
        "stateid": 21
    },
    "21027": {
        "id": 27,
        "inegiid": 21027,
        "name": "Caltepec",
        "stateid": 21
    },
    "21028": {
        "id": 28,
        "inegiid": 21028,
        "name": "Camocuautla",
        "stateid": 21
    },
    "21029": {
        "id": 29,
        "inegiid": 21029,
        "name": "Caxhuacan",
        "stateid": 21
    },
    "21030": {
        "id": 30,
        "inegiid": 21030,
        "name": "Coatepec",
        "stateid": 21
    },
    "21031": {
        "id": 31,
        "inegiid": 21031,
        "name": "Coatzingo",
        "stateid": 21
    },
    "21032": {
        "id": 32,
        "inegiid": 21032,
        "name": "Cohetzala",
        "stateid": 21
    },
    "21033": {
        "id": 33,
        "inegiid": 21033,
        "name": "Cohuecan",
        "stateid": 21
    },
    "21034": {
        "id": 34,
        "inegiid": 21034,
        "name": "Coronango",
        "stateid": 21
    },
    "21035": {
        "id": 35,
        "inegiid": 21035,
        "name": "Coxcatlán",
        "stateid": 21
    },
    "21036": {
        "id": 36,
        "inegiid": 21036,
        "name": "Coyomeapan",
        "stateid": 21
    },
    "21037": {
        "id": 37,
        "inegiid": 21037,
        "name": "Coyotepec",
        "stateid": 21
    },
    "21038": {
        "id": 38,
        "inegiid": 21038,
        "name": "Cuapiaxtla de Madero",
        "stateid": 21
    },
    "21039": {
        "id": 39,
        "inegiid": 21039,
        "name": "Cuautempan",
        "stateid": 21
    },
    "21040": {
        "id": 40,
        "inegiid": 21040,
        "name": "Cuautinchán",
        "stateid": 21
    },
    "21041": {
        "id": 41,
        "inegiid": 21041,
        "name": "Cuautlancingo",
        "stateid": 21
    },
    "21042": {
        "id": 42,
        "inegiid": 21042,
        "name": "Cuayuca de Andrade",
        "stateid": 21
    },
    "21043": {
        "id": 43,
        "inegiid": 21043,
        "name": "Cuetzalan del Progreso",
        "stateid": 21
    },
    "21044": {
        "id": 44,
        "inegiid": 21044,
        "name": "Cuyoaco",
        "stateid": 21
    },
    "21045": {
        "id": 45,
        "inegiid": 21045,
        "name": "Chalchicomula de Sesma",
        "stateid": 21
    },
    "21046": {
        "id": 46,
        "inegiid": 21046,
        "name": "Chapulco",
        "stateid": 21
    },
    "21047": {
        "id": 47,
        "inegiid": 21047,
        "name": "Chiautla",
        "stateid": 21
    },
    "21048": {
        "id": 48,
        "inegiid": 21048,
        "name": "Chiautzingo",
        "stateid": 21
    },
    "21049": {
        "id": 49,
        "inegiid": 21049,
        "name": "Chiconcuautla",
        "stateid": 21
    },
    "21050": {
        "id": 50,
        "inegiid": 21050,
        "name": "Chichiquila",
        "stateid": 21
    },
    "21051": {
        "id": 51,
        "inegiid": 21051,
        "name": "Chietla",
        "stateid": 21
    },
    "21052": {
        "id": 52,
        "inegiid": 21052,
        "name": "Chigmecatitlán",
        "stateid": 21
    },
    "21053": {
        "id": 53,
        "inegiid": 21053,
        "name": "Chignahuapan",
        "stateid": 21
    },
    "21054": {
        "id": 54,
        "inegiid": 21054,
        "name": "Chignautla",
        "stateid": 21
    },
    "21055": {
        "id": 55,
        "inegiid": 21055,
        "name": "Chila",
        "stateid": 21
    },
    "21056": {
        "id": 56,
        "inegiid": 21056,
        "name": "Chila de la Sal",
        "stateid": 21
    },
    "21057": {
        "id": 57,
        "inegiid": 21057,
        "name": "Honey",
        "stateid": 21
    },
    "21058": {
        "id": 58,
        "inegiid": 21058,
        "name": "Chilchotla",
        "stateid": 21
    },
    "21059": {
        "id": 59,
        "inegiid": 21059,
        "name": "Chinantla",
        "stateid": 21
    },
    "21060": {
        "id": 60,
        "inegiid": 21060,
        "name": "Domingo Arenas",
        "stateid": 21
    },
    "21061": {
        "id": 61,
        "inegiid": 21061,
        "name": "Eloxochitlán",
        "stateid": 21
    },
    "21062": {
        "id": 62,
        "inegiid": 21062,
        "name": "Epatlán",
        "stateid": 21
    },
    "21063": {
        "id": 63,
        "inegiid": 21063,
        "name": "Esperanza",
        "stateid": 21
    },
    "21064": {
        "id": 64,
        "inegiid": 21064,
        "name": "Francisco Z. Mena",
        "stateid": 21
    },
    "21065": {
        "id": 65,
        "inegiid": 21065,
        "name": "General Felipe Ángeles",
        "stateid": 21
    },
    "21066": {
        "id": 66,
        "inegiid": 21066,
        "name": "Guadalupe",
        "stateid": 21
    },
    "21067": {
        "id": 67,
        "inegiid": 21067,
        "name": "Guadalupe Victoria",
        "stateid": 21
    },
    "21068": {
        "id": 68,
        "inegiid": 21068,
        "name": "Hermenegildo Galeana",
        "stateid": 21
    },
    "21069": {
        "id": 69,
        "inegiid": 21069,
        "name": "Huaquechula",
        "stateid": 21
    },
    "21070": {
        "id": 70,
        "inegiid": 21070,
        "name": "Huatlatlauca",
        "stateid": 21
    },
    "21071": {
        "id": 71,
        "inegiid": 21071,
        "name": "Huauchinango",
        "stateid": 21
    },
    "21072": {
        "id": 72,
        "inegiid": 21072,
        "name": "Huehuetla",
        "stateid": 21
    },
    "21073": {
        "id": 73,
        "inegiid": 21073,
        "name": "Huehuetlán el Chico",
        "stateid": 21
    },
    "21074": {
        "id": 74,
        "inegiid": 21074,
        "name": "Huejotzingo",
        "stateid": 21
    },
    "21075": {
        "id": 75,
        "inegiid": 21075,
        "name": "Hueyapan",
        "stateid": 21
    },
    "21076": {
        "id": 76,
        "inegiid": 21076,
        "name": "Hueytamalco",
        "stateid": 21
    },
    "21077": {
        "id": 77,
        "inegiid": 21077,
        "name": "Hueytlalpan",
        "stateid": 21
    },
    "21078": {
        "id": 78,
        "inegiid": 21078,
        "name": "Huitzilan de Serdán",
        "stateid": 21
    },
    "21079": {
        "id": 79,
        "inegiid": 21079,
        "name": "Huitziltepec",
        "stateid": 21
    },
    "21080": {
        "id": 80,
        "inegiid": 21080,
        "name": "Atlequizayán",
        "stateid": 21
    },
    "21081": {
        "id": 81,
        "inegiid": 21081,
        "name": "Ixcamilpa de Guerrero",
        "stateid": 21
    },
    "21082": {
        "id": 82,
        "inegiid": 21082,
        "name": "Ixcaquixtla",
        "stateid": 21
    },
    "21083": {
        "id": 83,
        "inegiid": 21083,
        "name": "Ixtacamaxtitlán",
        "stateid": 21
    },
    "21084": {
        "id": 84,
        "inegiid": 21084,
        "name": "Ixtepec",
        "stateid": 21
    },
    "21085": {
        "id": 85,
        "inegiid": 21085,
        "name": "Izúcar de Matamoros",
        "stateid": 21
    },
    "21086": {
        "id": 86,
        "inegiid": 21086,
        "name": "Jalpan",
        "stateid": 21
    },
    "21087": {
        "id": 87,
        "inegiid": 21087,
        "name": "Jolalpan",
        "stateid": 21
    },
    "21088": {
        "id": 88,
        "inegiid": 21088,
        "name": "Jonotla",
        "stateid": 21
    },
    "21089": {
        "id": 89,
        "inegiid": 21089,
        "name": "Jopala",
        "stateid": 21
    },
    "21090": {
        "id": 90,
        "inegiid": 21090,
        "name": "Juan C. Bonilla",
        "stateid": 21
    },
    "21091": {
        "id": 91,
        "inegiid": 21091,
        "name": "Juan Galindo",
        "stateid": 21
    },
    "21092": {
        "id": 92,
        "inegiid": 21092,
        "name": "Juan N. Méndez",
        "stateid": 21
    },
    "21093": {
        "id": 93,
        "inegiid": 21093,
        "name": "Lafragua",
        "stateid": 21
    },
    "21094": {
        "id": 94,
        "inegiid": 21094,
        "name": "Libres",
        "stateid": 21
    },
    "21095": {
        "id": 95,
        "inegiid": 21095,
        "name": "La Magdalena Tlatlauquitepec",
        "stateid": 21
    },
    "21096": {
        "id": 96,
        "inegiid": 21096,
        "name": "Mazapiltepec de Juárez",
        "stateid": 21
    },
    "21097": {
        "id": 97,
        "inegiid": 21097,
        "name": "Mixtla",
        "stateid": 21
    },
    "21098": {
        "id": 98,
        "inegiid": 21098,
        "name": "Molcaxac",
        "stateid": 21
    },
    "21099": {
        "id": 99,
        "inegiid": 21099,
        "name": "Cañada Morelos",
        "stateid": 21
    },
    "21100": {
        "id": 100,
        "inegiid": 21100,
        "name": "Naupan",
        "stateid": 21
    },
    "21101": {
        "id": 101,
        "inegiid": 21101,
        "name": "Nauzontla",
        "stateid": 21
    },
    "21102": {
        "id": 102,
        "inegiid": 21102,
        "name": "Nealtican",
        "stateid": 21
    },
    "21103": {
        "id": 103,
        "inegiid": 21103,
        "name": "Nicolás Bravo",
        "stateid": 21
    },
    "21104": {
        "id": 104,
        "inegiid": 21104,
        "name": "Nopalucan",
        "stateid": 21
    },
    "21105": {
        "id": 105,
        "inegiid": 21105,
        "name": "Ocotepec",
        "stateid": 21
    },
    "21106": {
        "id": 106,
        "inegiid": 21106,
        "name": "Ocoyucan",
        "stateid": 21
    },
    "21107": {
        "id": 107,
        "inegiid": 21107,
        "name": "Olintla",
        "stateid": 21
    },
    "21108": {
        "id": 108,
        "inegiid": 21108,
        "name": "Oriental",
        "stateid": 21
    },
    "21109": {
        "id": 109,
        "inegiid": 21109,
        "name": "Pahuatlán",
        "stateid": 21
    },
    "21110": {
        "id": 110,
        "inegiid": 21110,
        "name": "Palmar de Bravo",
        "stateid": 21
    },
    "21111": {
        "id": 111,
        "inegiid": 21111,
        "name": "Pantepec",
        "stateid": 21
    },
    "21112": {
        "id": 112,
        "inegiid": 21112,
        "name": "Petlalcingo",
        "stateid": 21
    },
    "21113": {
        "id": 113,
        "inegiid": 21113,
        "name": "Piaxtla",
        "stateid": 21
    },
    "21114": {
        "id": 114,
        "inegiid": 21114,
        "name": "Puebla",
        "stateid": 21
    },
    "21115": {
        "id": 115,
        "inegiid": 21115,
        "name": "Quecholac",
        "stateid": 21
    },
    "21116": {
        "id": 116,
        "inegiid": 21116,
        "name": "Quimixtlán",
        "stateid": 21
    },
    "21117": {
        "id": 117,
        "inegiid": 21117,
        "name": "Rafael Lara Grajales",
        "stateid": 21
    },
    "21118": {
        "id": 118,
        "inegiid": 21118,
        "name": "Los Reyes de Juárez",
        "stateid": 21
    },
    "21119": {
        "id": 119,
        "inegiid": 21119,
        "name": "San Andrés Cholula",
        "stateid": 21
    },
    "21120": {
        "id": 120,
        "inegiid": 21120,
        "name": "San Antonio Cañada",
        "stateid": 21
    },
    "21121": {
        "id": 121,
        "inegiid": 21121,
        "name": "San Diego la Mesa Tochimiltzingo",
        "stateid": 21
    },
    "21122": {
        "id": 122,
        "inegiid": 21122,
        "name": "San Felipe Teotlalcingo",
        "stateid": 21
    },
    "21123": {
        "id": 123,
        "inegiid": 21123,
        "name": "San Felipe Tepatlán",
        "stateid": 21
    },
    "21124": {
        "id": 124,
        "inegiid": 21124,
        "name": "San Gabriel Chilac",
        "stateid": 21
    },
    "21125": {
        "id": 125,
        "inegiid": 21125,
        "name": "San Gregorio Atzompa",
        "stateid": 21
    },
    "21126": {
        "id": 126,
        "inegiid": 21126,
        "name": "San Jerónimo Tecuanipan",
        "stateid": 21
    },
    "21127": {
        "id": 127,
        "inegiid": 21127,
        "name": "San Jerónimo Xayacatlán",
        "stateid": 21
    },
    "21128": {
        "id": 128,
        "inegiid": 21128,
        "name": "San José Chiapa",
        "stateid": 21
    },
    "21129": {
        "id": 129,
        "inegiid": 21129,
        "name": "San José Miahuatlán",
        "stateid": 21
    },
    "21130": {
        "id": 130,
        "inegiid": 21130,
        "name": "San Juan Atenco",
        "stateid": 21
    },
    "21131": {
        "id": 131,
        "inegiid": 21131,
        "name": "San Juan Atzompa",
        "stateid": 21
    },
    "21132": {
        "id": 132,
        "inegiid": 21132,
        "name": "San Martín Texmelucan",
        "stateid": 21
    },
    "21133": {
        "id": 133,
        "inegiid": 21133,
        "name": "San Martín Totoltepec",
        "stateid": 21
    },
    "21134": {
        "id": 134,
        "inegiid": 21134,
        "name": "San Matías Tlalancaleca",
        "stateid": 21
    },
    "21135": {
        "id": 135,
        "inegiid": 21135,
        "name": "San Miguel Ixitlán",
        "stateid": 21
    },
    "21136": {
        "id": 136,
        "inegiid": 21136,
        "name": "San Miguel Xoxtla",
        "stateid": 21
    },
    "21137": {
        "id": 137,
        "inegiid": 21137,
        "name": "San Nicolás Buenos Aires",
        "stateid": 21
    },
    "21138": {
        "id": 138,
        "inegiid": 21138,
        "name": "San Nicolás de los Ranchos",
        "stateid": 21
    },
    "21139": {
        "id": 139,
        "inegiid": 21139,
        "name": "San Pablo Anicano",
        "stateid": 21
    },
    "21140": {
        "id": 140,
        "inegiid": 21140,
        "name": "San Pedro Cholula",
        "stateid": 21
    },
    "21141": {
        "id": 141,
        "inegiid": 21141,
        "name": "San Pedro Yeloixtlahuaca",
        "stateid": 21
    },
    "21142": {
        "id": 142,
        "inegiid": 21142,
        "name": "San Salvador el Seco",
        "stateid": 21
    },
    "21143": {
        "id": 143,
        "inegiid": 21143,
        "name": "San Salvador el Verde",
        "stateid": 21
    },
    "21144": {
        "id": 144,
        "inegiid": 21144,
        "name": "San Salvador Huixcolotla",
        "stateid": 21
    },
    "21145": {
        "id": 145,
        "inegiid": 21145,
        "name": "San Sebastián Tlacotepec",
        "stateid": 21
    },
    "21146": {
        "id": 146,
        "inegiid": 21146,
        "name": "Santa Catarina Tlaltempan",
        "stateid": 21
    },
    "21147": {
        "id": 147,
        "inegiid": 21147,
        "name": "Santa Inés Ahuatempan",
        "stateid": 21
    },
    "21148": {
        "id": 148,
        "inegiid": 21148,
        "name": "Santa Isabel Cholula",
        "stateid": 21
    },
    "21149": {
        "id": 149,
        "inegiid": 21149,
        "name": "Santiago Miahuatlán",
        "stateid": 21
    },
    "21150": {
        "id": 150,
        "inegiid": 21150,
        "name": "Huehuetlán el Grande",
        "stateid": 21
    },
    "21151": {
        "id": 151,
        "inegiid": 21151,
        "name": "Santo Tomás Hueyotlipan",
        "stateid": 21
    },
    "21152": {
        "id": 152,
        "inegiid": 21152,
        "name": "Soltepec",
        "stateid": 21
    },
    "21153": {
        "id": 153,
        "inegiid": 21153,
        "name": "Tecali de Herrera",
        "stateid": 21
    },
    "21154": {
        "id": 154,
        "inegiid": 21154,
        "name": "Tecamachalco",
        "stateid": 21
    },
    "21155": {
        "id": 155,
        "inegiid": 21155,
        "name": "Tecomatlán",
        "stateid": 21
    },
    "21156": {
        "id": 156,
        "inegiid": 21156,
        "name": "Tehuacán",
        "stateid": 21
    },
    "21157": {
        "id": 157,
        "inegiid": 21157,
        "name": "Tehuitzingo",
        "stateid": 21
    },
    "21158": {
        "id": 158,
        "inegiid": 21158,
        "name": "Tenampulco",
        "stateid": 21
    },
    "21159": {
        "id": 159,
        "inegiid": 21159,
        "name": "Teopantlán",
        "stateid": 21
    },
    "21160": {
        "id": 160,
        "inegiid": 21160,
        "name": "Teotlalco",
        "stateid": 21
    },
    "21161": {
        "id": 161,
        "inegiid": 21161,
        "name": "Tepanco de López",
        "stateid": 21
    },
    "21162": {
        "id": 162,
        "inegiid": 21162,
        "name": "Tepango de Rodríguez",
        "stateid": 21
    },
    "21163": {
        "id": 163,
        "inegiid": 21163,
        "name": "Tepatlaxco de Hidalgo",
        "stateid": 21
    },
    "21164": {
        "id": 164,
        "inegiid": 21164,
        "name": "Tepeaca",
        "stateid": 21
    },
    "21165": {
        "id": 165,
        "inegiid": 21165,
        "name": "Tepemaxalco",
        "stateid": 21
    },
    "21166": {
        "id": 166,
        "inegiid": 21166,
        "name": "Tepeojuma",
        "stateid": 21
    },
    "21167": {
        "id": 167,
        "inegiid": 21167,
        "name": "Tepetzintla",
        "stateid": 21
    },
    "21168": {
        "id": 168,
        "inegiid": 21168,
        "name": "Tepexco",
        "stateid": 21
    },
    "21169": {
        "id": 169,
        "inegiid": 21169,
        "name": "Tepexi de Rodríguez",
        "stateid": 21
    },
    "21170": {
        "id": 170,
        "inegiid": 21170,
        "name": "Tepeyahualco",
        "stateid": 21
    },
    "21171": {
        "id": 171,
        "inegiid": 21171,
        "name": "Tepeyahualco de Cuauhtémoc",
        "stateid": 21
    },
    "21172": {
        "id": 172,
        "inegiid": 21172,
        "name": "Tetela de Ocampo",
        "stateid": 21
    },
    "21173": {
        "id": 173,
        "inegiid": 21173,
        "name": "Teteles de Ávila Castillo",
        "stateid": 21
    },
    "21174": {
        "id": 174,
        "inegiid": 21174,
        "name": "Teziutlán",
        "stateid": 21
    },
    "21175": {
        "id": 175,
        "inegiid": 21175,
        "name": "Tianguismanalco",
        "stateid": 21
    },
    "21176": {
        "id": 176,
        "inegiid": 21176,
        "name": "Tilapa",
        "stateid": 21
    },
    "21177": {
        "id": 177,
        "inegiid": 21177,
        "name": "Tlacotepec de Benito Juárez",
        "stateid": 21
    },
    "21178": {
        "id": 178,
        "inegiid": 21178,
        "name": "Tlacuilotepec",
        "stateid": 21
    },
    "21179": {
        "id": 179,
        "inegiid": 21179,
        "name": "Tlachichuca",
        "stateid": 21
    },
    "21180": {
        "id": 180,
        "inegiid": 21180,
        "name": "Tlahuapan",
        "stateid": 21
    },
    "21181": {
        "id": 181,
        "inegiid": 21181,
        "name": "Tlaltenango",
        "stateid": 21
    },
    "21182": {
        "id": 182,
        "inegiid": 21182,
        "name": "Tlanepantla",
        "stateid": 21
    },
    "21183": {
        "id": 183,
        "inegiid": 21183,
        "name": "Tlaola",
        "stateid": 21
    },
    "21184": {
        "id": 184,
        "inegiid": 21184,
        "name": "Tlapacoya",
        "stateid": 21
    },
    "21185": {
        "id": 185,
        "inegiid": 21185,
        "name": "Tlapanalá",
        "stateid": 21
    },
    "21186": {
        "id": 186,
        "inegiid": 21186,
        "name": "Tlatlauquitepec",
        "stateid": 21
    },
    "21187": {
        "id": 187,
        "inegiid": 21187,
        "name": "Tlaxco",
        "stateid": 21
    },
    "21188": {
        "id": 188,
        "inegiid": 21188,
        "name": "Tochimilco",
        "stateid": 21
    },
    "21189": {
        "id": 189,
        "inegiid": 21189,
        "name": "Tochtepec",
        "stateid": 21
    },
    "21190": {
        "id": 190,
        "inegiid": 21190,
        "name": "Totoltepec de Guerrero",
        "stateid": 21
    },
    "21191": {
        "id": 191,
        "inegiid": 21191,
        "name": "Tulcingo",
        "stateid": 21
    },
    "21192": {
        "id": 192,
        "inegiid": 21192,
        "name": "Tuzamapan de Galeana",
        "stateid": 21
    },
    "21193": {
        "id": 193,
        "inegiid": 21193,
        "name": "Tzicatlacoyan",
        "stateid": 21
    },
    "21194": {
        "id": 194,
        "inegiid": 21194,
        "name": "Venustiano Carranza",
        "stateid": 21
    },
    "21195": {
        "id": 195,
        "inegiid": 21195,
        "name": "Vicente Guerrero",
        "stateid": 21
    },
    "21196": {
        "id": 196,
        "inegiid": 21196,
        "name": "Xayacatlán de Bravo",
        "stateid": 21
    },
    "21197": {
        "id": 197,
        "inegiid": 21197,
        "name": "Xicotepec",
        "stateid": 21
    },
    "21198": {
        "id": 198,
        "inegiid": 21198,
        "name": "Xicotlán",
        "stateid": 21
    },
    "21199": {
        "id": 199,
        "inegiid": 21199,
        "name": "Xiutetelco",
        "stateid": 21
    },
    "21200": {
        "id": 200,
        "inegiid": 21200,
        "name": "Xochiapulco",
        "stateid": 21
    },
    "21201": {
        "id": 201,
        "inegiid": 21201,
        "name": "Xochiltepec",
        "stateid": 21
    },
    "21202": {
        "id": 202,
        "inegiid": 21202,
        "name": "Xochitlán de Vicente Suárez",
        "stateid": 21
    },
    "21203": {
        "id": 203,
        "inegiid": 21203,
        "name": "Xochitlán Todos Santos",
        "stateid": 21
    },
    "21204": {
        "id": 204,
        "inegiid": 21204,
        "name": "Yaonáhuac",
        "stateid": 21
    },
    "21205": {
        "id": 205,
        "inegiid": 21205,
        "name": "Yehualtepec",
        "stateid": 21
    },
    "21206": {
        "id": 206,
        "inegiid": 21206,
        "name": "Zacapala",
        "stateid": 21
    },
    "21207": {
        "id": 207,
        "inegiid": 21207,
        "name": "Zacapoaxtla",
        "stateid": 21
    },
    "21208": {
        "id": 208,
        "inegiid": 21208,
        "name": "Zacatlán",
        "stateid": 21
    },
    "21209": {
        "id": 209,
        "inegiid": 21209,
        "name": "Zapotitlán",
        "stateid": 21
    },
    "21210": {
        "id": 210,
        "inegiid": 21210,
        "name": "Zapotitlán de Méndez",
        "stateid": 21
    },
    "21211": {
        "id": 211,
        "inegiid": 21211,
        "name": "Zaragoza",
        "stateid": 21
    },
    "21212": {
        "id": 212,
        "inegiid": 21212,
        "name": "Zautla",
        "stateid": 21
    },
    "21213": {
        "id": 213,
        "inegiid": 21213,
        "name": "Zihuateutla",
        "stateid": 21
    },
    "21214": {
        "id": 214,
        "inegiid": 21214,
        "name": "Zinacatepec",
        "stateid": 21
    },
    "21215": {
        "id": 215,
        "inegiid": 21215,
        "name": "Zongozotla",
        "stateid": 21
    },
    "21216": {
        "id": 216,
        "inegiid": 21216,
        "name": "Zoquiapan",
        "stateid": 21
    },
    "21217": {
        "id": 217,
        "inegiid": 21217,
        "name": "Zoquitlán",
        "stateid": 21
    },
    "22001": {
        "id": 1,
        "inegiid": 22001,
        "name": "Amealco de Bonfil",
        "stateid": 22
    },
    "22002": {
        "id": 2,
        "inegiid": 22002,
        "name": "Pinal de Amoles",
        "stateid": 22
    },
    "22003": {
        "id": 3,
        "inegiid": 22003,
        "name": "Arroyo Seco",
        "stateid": 22
    },
    "22004": {
        "id": 4,
        "inegiid": 22004,
        "name": "Cadereyta de Montes",
        "stateid": 22
    },
    "22005": {
        "id": 5,
        "inegiid": 22005,
        "name": "Colón",
        "stateid": 22
    },
    "22006": {
        "id": 6,
        "inegiid": 22006,
        "name": "Corregidora",
        "stateid": 22
    },
    "22007": {
        "id": 7,
        "inegiid": 22007,
        "name": "Ezequiel Montes",
        "stateid": 22
    },
    "22008": {
        "id": 8,
        "inegiid": 22008,
        "name": "Huimilpan",
        "stateid": 22
    },
    "22009": {
        "id": 9,
        "inegiid": 22009,
        "name": "Jalpan de Serra",
        "stateid": 22
    },
    "22010": {
        "id": 10,
        "inegiid": 22010,
        "name": "Landa de Matamoros",
        "stateid": 22
    },
    "22011": {
        "id": 11,
        "inegiid": 22011,
        "name": "El Marqués",
        "stateid": 22
    },
    "22012": {
        "id": 12,
        "inegiid": 22012,
        "name": "Pedro Escobedo",
        "stateid": 22
    },
    "22013": {
        "id": 13,
        "inegiid": 22013,
        "name": "Peñamiller",
        "stateid": 22
    },
    "22014": {
        "id": 14,
        "inegiid": 22014,
        "name": "Querétaro",
        "stateid": 22
    },
    "22015": {
        "id": 15,
        "inegiid": 22015,
        "name": "San Joaquín",
        "stateid": 22
    },
    "22016": {
        "id": 16,
        "inegiid": 22016,
        "name": "San Juan del Río",
        "stateid": 22
    },
    "22017": {
        "id": 17,
        "inegiid": 22017,
        "name": "Tequisquiapan",
        "stateid": 22
    },
    "22018": {
        "id": 18,
        "inegiid": 22018,
        "name": "Tolimán",
        "stateid": 22
    },
    "23001": {
        "id": 1,
        "inegiid": 23001,
        "name": "Cozumel",
        "stateid": 23
    },
    "23002": {
        "id": 2,
        "inegiid": 23002,
        "name": "Felipe Carrillo Puerto",
        "stateid": 23
    },
    "23003": {
        "id": 3,
        "inegiid": 23003,
        "name": "Isla Mujeres",
        "stateid": 23
    },
    "23004": {
        "id": 4,
        "inegiid": 23004,
        "name": "Othón P. Blanco",
        "stateid": 23
    },
    "23005": {
        "id": 5,
        "inegiid": 23005,
        "name": "Benito Juárez",
        "stateid": 23
    },
    "23006": {
        "id": 6,
        "inegiid": 23006,
        "name": "José María Morelos",
        "stateid": 23
    },
    "23007": {
        "id": 7,
        "inegiid": 23007,
        "name": "Lázaro Cárdenas",
        "stateid": 23
    },
    "23008": {
        "id": 8,
        "inegiid": 23008,
        "name": "Solidaridad",
        "stateid": 23
    },
    "23009": {
        "id": 9,
        "inegiid": 23009,
        "name": "Tulum",
        "stateid": 23
    },
    "24001": {
        "id": 1,
        "inegiid": 24001,
        "name": "Ahualulco",
        "stateid": 24
    },
    "24002": {
        "id": 2,
        "inegiid": 24002,
        "name": "Alaquines",
        "stateid": 24
    },
    "24003": {
        "id": 3,
        "inegiid": 24003,
        "name": "Aquismón",
        "stateid": 24
    },
    "24004": {
        "id": 4,
        "inegiid": 24004,
        "name": "Armadillo de los Infante",
        "stateid": 24
    },
    "24005": {
        "id": 5,
        "inegiid": 24005,
        "name": "Cárdenas",
        "stateid": 24
    },
    "24006": {
        "id": 6,
        "inegiid": 24006,
        "name": "Catorce",
        "stateid": 24
    },
    "24007": {
        "id": 7,
        "inegiid": 24007,
        "name": "Cedral",
        "stateid": 24
    },
    "24008": {
        "id": 8,
        "inegiid": 24008,
        "name": "Cerritos",
        "stateid": 24
    },
    "24009": {
        "id": 9,
        "inegiid": 24009,
        "name": "Cerro de San Pedro",
        "stateid": 24
    },
    "24010": {
        "id": 10,
        "inegiid": 24010,
        "name": "Ciudad del Maíz",
        "stateid": 24
    },
    "24011": {
        "id": 11,
        "inegiid": 24011,
        "name": "Ciudad Fernández",
        "stateid": 24
    },
    "24012": {
        "id": 12,
        "inegiid": 24012,
        "name": "Tancanhuitz",
        "stateid": 24
    },
    "24013": {
        "id": 13,
        "inegiid": 24013,
        "name": "Ciudad Valles",
        "stateid": 24
    },
    "24014": {
        "id": 14,
        "inegiid": 24014,
        "name": "Coxcatlán",
        "stateid": 24
    },
    "24015": {
        "id": 15,
        "inegiid": 24015,
        "name": "Charcas",
        "stateid": 24
    },
    "24016": {
        "id": 16,
        "inegiid": 24016,
        "name": "Ebano",
        "stateid": 24
    },
    "24017": {
        "id": 17,
        "inegiid": 24017,
        "name": "Guadalcázar",
        "stateid": 24
    },
    "24018": {
        "id": 18,
        "inegiid": 24018,
        "name": "Huehuetlán",
        "stateid": 24
    },
    "24019": {
        "id": 19,
        "inegiid": 24019,
        "name": "Lagunillas",
        "stateid": 24
    },
    "24020": {
        "id": 20,
        "inegiid": 24020,
        "name": "Matehuala",
        "stateid": 24
    },
    "24021": {
        "id": 21,
        "inegiid": 24021,
        "name": "Mexquitic de Carmona",
        "stateid": 24
    },
    "24022": {
        "id": 22,
        "inegiid": 24022,
        "name": "Moctezuma",
        "stateid": 24
    },
    "24023": {
        "id": 23,
        "inegiid": 24023,
        "name": "Rayón",
        "stateid": 24
    },
    "24024": {
        "id": 24,
        "inegiid": 24024,
        "name": "Rioverde",
        "stateid": 24
    },
    "24025": {
        "id": 25,
        "inegiid": 24025,
        "name": "Salinas",
        "stateid": 24
    },
    "24026": {
        "id": 26,
        "inegiid": 24026,
        "name": "San Antonio",
        "stateid": 24
    },
    "24027": {
        "id": 27,
        "inegiid": 24027,
        "name": "San Ciro de Acosta",
        "stateid": 24
    },
    "24028": {
        "id": 28,
        "inegiid": 24028,
        "name": "San Luis Potosí",
        "stateid": 24
    },
    "24029": {
        "id": 29,
        "inegiid": 24029,
        "name": "San Martín Chalchicuautla",
        "stateid": 24
    },
    "24030": {
        "id": 30,
        "inegiid": 24030,
        "name": "San Nicolás Tolentino",
        "stateid": 24
    },
    "24031": {
        "id": 31,
        "inegiid": 24031,
        "name": "Santa Catarina",
        "stateid": 24
    },
    "24032": {
        "id": 32,
        "inegiid": 24032,
        "name": "Santa María del Río",
        "stateid": 24
    },
    "24033": {
        "id": 33,
        "inegiid": 24033,
        "name": "Santo Domingo",
        "stateid": 24
    },
    "24034": {
        "id": 34,
        "inegiid": 24034,
        "name": "San Vicente Tancuayalab",
        "stateid": 24
    },
    "24035": {
        "id": 35,
        "inegiid": 24035,
        "name": "Soledad de Graciano Sánchez",
        "stateid": 24
    },
    "24036": {
        "id": 36,
        "inegiid": 24036,
        "name": "Tamasopo",
        "stateid": 24
    },
    "24037": {
        "id": 37,
        "inegiid": 24037,
        "name": "Tamazunchale",
        "stateid": 24
    },
    "24038": {
        "id": 38,
        "inegiid": 24038,
        "name": "Tampacán",
        "stateid": 24
    },
    "24039": {
        "id": 39,
        "inegiid": 24039,
        "name": "Tampamolón Corona",
        "stateid": 24
    },
    "24040": {
        "id": 40,
        "inegiid": 24040,
        "name": "Tamuín",
        "stateid": 24
    },
    "24041": {
        "id": 41,
        "inegiid": 24041,
        "name": "Tanlajás",
        "stateid": 24
    },
    "24042": {
        "id": 42,
        "inegiid": 24042,
        "name": "Tanquián de Escobedo",
        "stateid": 24
    },
    "24043": {
        "id": 43,
        "inegiid": 24043,
        "name": "Tierra Nueva",
        "stateid": 24
    },
    "24044": {
        "id": 44,
        "inegiid": 24044,
        "name": "Vanegas",
        "stateid": 24
    },
    "24045": {
        "id": 45,
        "inegiid": 24045,
        "name": "Venado",
        "stateid": 24
    },
    "24046": {
        "id": 46,
        "inegiid": 24046,
        "name": "Villa de Arriaga",
        "stateid": 24
    },
    "24047": {
        "id": 47,
        "inegiid": 24047,
        "name": "Villa de Guadalupe",
        "stateid": 24
    },
    "24048": {
        "id": 48,
        "inegiid": 24048,
        "name": "Villa de la Paz",
        "stateid": 24
    },
    "24049": {
        "id": 49,
        "inegiid": 24049,
        "name": "Villa de Ramos",
        "stateid": 24
    },
    "24050": {
        "id": 50,
        "inegiid": 24050,
        "name": "Villa de Reyes",
        "stateid": 24
    },
    "24051": {
        "id": 51,
        "inegiid": 24051,
        "name": "Villa Hidalgo",
        "stateid": 24
    },
    "24052": {
        "id": 52,
        "inegiid": 24052,
        "name": "Villa Juárez",
        "stateid": 24
    },
    "24053": {
        "id": 53,
        "inegiid": 24053,
        "name": "Axtla de Terrazas",
        "stateid": 24
    },
    "24054": {
        "id": 54,
        "inegiid": 24054,
        "name": "Xilitla",
        "stateid": 24
    },
    "24055": {
        "id": 55,
        "inegiid": 24055,
        "name": "Zaragoza",
        "stateid": 24
    },
    "24056": {
        "id": 56,
        "inegiid": 24056,
        "name": "Villa de Arista",
        "stateid": 24
    },
    "24057": {
        "id": 57,
        "inegiid": 24057,
        "name": "Matlapa",
        "stateid": 24
    },
    "24058": {
        "id": 58,
        "inegiid": 24058,
        "name": "El Naranjo",
        "stateid": 24
    },
    "25001": {
        "id": 1,
        "inegiid": 25001,
        "name": "Ahome",
        "stateid": 25
    },
    "25002": {
        "id": 2,
        "inegiid": 25002,
        "name": "Angostura",
        "stateid": 25
    },
    "25003": {
        "id": 3,
        "inegiid": 25003,
        "name": "Badiraguato",
        "stateid": 25
    },
    "25004": {
        "id": 4,
        "inegiid": 25004,
        "name": "Concordia",
        "stateid": 25
    },
    "25005": {
        "id": 5,
        "inegiid": 25005,
        "name": "Cosalá",
        "stateid": 25
    },
    "25006": {
        "id": 6,
        "inegiid": 25006,
        "name": "Culiacán",
        "stateid": 25
    },
    "25007": {
        "id": 7,
        "inegiid": 25007,
        "name": "Choix",
        "stateid": 25
    },
    "25008": {
        "id": 8,
        "inegiid": 25008,
        "name": "Elota",
        "stateid": 25
    },
    "25009": {
        "id": 9,
        "inegiid": 25009,
        "name": "Escuinapa",
        "stateid": 25
    },
    "25010": {
        "id": 10,
        "inegiid": 25010,
        "name": "El Fuerte",
        "stateid": 25
    },
    "25011": {
        "id": 11,
        "inegiid": 25011,
        "name": "Guasave",
        "stateid": 25
    },
    "25012": {
        "id": 12,
        "inegiid": 25012,
        "name": "Mazatlán",
        "stateid": 25
    },
    "25013": {
        "id": 13,
        "inegiid": 25013,
        "name": "Mocorito",
        "stateid": 25
    },
    "25014": {
        "id": 14,
        "inegiid": 25014,
        "name": "Rosario",
        "stateid": 25
    },
    "25015": {
        "id": 15,
        "inegiid": 25015,
        "name": "Salvador Alvarado",
        "stateid": 25
    },
    "25016": {
        "id": 16,
        "inegiid": 25016,
        "name": "San Ignacio",
        "stateid": 25
    },
    "25017": {
        "id": 17,
        "inegiid": 25017,
        "name": "Sinaloa",
        "stateid": 25
    },
    "25018": {
        "id": 18,
        "inegiid": 25018,
        "name": "Navolato",
        "stateid": 25
    },
    "26001": {
        "id": 1,
        "inegiid": 26001,
        "name": "Aconchi",
        "stateid": 26
    },
    "26002": {
        "id": 2,
        "inegiid": 26002,
        "name": "Agua Prieta",
        "stateid": 26
    },
    "26003": {
        "id": 3,
        "inegiid": 26003,
        "name": "Alamos",
        "stateid": 26
    },
    "26004": {
        "id": 4,
        "inegiid": 26004,
        "name": "Altar",
        "stateid": 26
    },
    "26005": {
        "id": 5,
        "inegiid": 26005,
        "name": "Arivechi",
        "stateid": 26
    },
    "26006": {
        "id": 6,
        "inegiid": 26006,
        "name": "Arizpe",
        "stateid": 26
    },
    "26007": {
        "id": 7,
        "inegiid": 26007,
        "name": "Atil",
        "stateid": 26
    },
    "26008": {
        "id": 8,
        "inegiid": 26008,
        "name": "Bacadéhuachi",
        "stateid": 26
    },
    "26009": {
        "id": 9,
        "inegiid": 26009,
        "name": "Bacanora",
        "stateid": 26
    },
    "26010": {
        "id": 10,
        "inegiid": 26010,
        "name": "Bacerac",
        "stateid": 26
    },
    "26011": {
        "id": 11,
        "inegiid": 26011,
        "name": "Bacoachi",
        "stateid": 26
    },
    "26012": {
        "id": 12,
        "inegiid": 26012,
        "name": "Bácum",
        "stateid": 26
    },
    "26013": {
        "id": 13,
        "inegiid": 26013,
        "name": "Banámichi",
        "stateid": 26
    },
    "26014": {
        "id": 14,
        "inegiid": 26014,
        "name": "Baviácora",
        "stateid": 26
    },
    "26015": {
        "id": 15,
        "inegiid": 26015,
        "name": "Bavispe",
        "stateid": 26
    },
    "26016": {
        "id": 16,
        "inegiid": 26016,
        "name": "Benjamín Hill",
        "stateid": 26
    },
    "26017": {
        "id": 17,
        "inegiid": 26017,
        "name": "Caborca",
        "stateid": 26
    },
    "26018": {
        "id": 18,
        "inegiid": 26018,
        "name": "Cajeme",
        "stateid": 26
    },
    "26019": {
        "id": 19,
        "inegiid": 26019,
        "name": "Cananea",
        "stateid": 26
    },
    "26020": {
        "id": 20,
        "inegiid": 26020,
        "name": "Carbó",
        "stateid": 26
    },
    "26021": {
        "id": 21,
        "inegiid": 26021,
        "name": "La Colorada",
        "stateid": 26
    },
    "26022": {
        "id": 22,
        "inegiid": 26022,
        "name": "Cucurpe",
        "stateid": 26
    },
    "26023": {
        "id": 23,
        "inegiid": 26023,
        "name": "Cumpas",
        "stateid": 26
    },
    "26024": {
        "id": 24,
        "inegiid": 26024,
        "name": "Divisaderos",
        "stateid": 26
    },
    "26025": {
        "id": 25,
        "inegiid": 26025,
        "name": "Empalme",
        "stateid": 26
    },
    "26026": {
        "id": 26,
        "inegiid": 26026,
        "name": "Etchojoa",
        "stateid": 26
    },
    "26027": {
        "id": 27,
        "inegiid": 26027,
        "name": "Fronteras",
        "stateid": 26
    },
    "26028": {
        "id": 28,
        "inegiid": 26028,
        "name": "Granados",
        "stateid": 26
    },
    "26029": {
        "id": 29,
        "inegiid": 26029,
        "name": "Guaymas",
        "stateid": 26
    },
    "26030": {
        "id": 30,
        "inegiid": 26030,
        "name": "Hermosillo",
        "stateid": 26
    },
    "26031": {
        "id": 31,
        "inegiid": 26031,
        "name": "Huachinera",
        "stateid": 26
    },
    "26032": {
        "id": 32,
        "inegiid": 26032,
        "name": "Huásabas",
        "stateid": 26
    },
    "26033": {
        "id": 33,
        "inegiid": 26033,
        "name": "Huatabampo",
        "stateid": 26
    },
    "26034": {
        "id": 34,
        "inegiid": 26034,
        "name": "Huépac",
        "stateid": 26
    },
    "26035": {
        "id": 35,
        "inegiid": 26035,
        "name": "Imuris",
        "stateid": 26
    },
    "26036": {
        "id": 36,
        "inegiid": 26036,
        "name": "Magdalena",
        "stateid": 26
    },
    "26037": {
        "id": 37,
        "inegiid": 26037,
        "name": "Mazatán",
        "stateid": 26
    },
    "26038": {
        "id": 38,
        "inegiid": 26038,
        "name": "Moctezuma",
        "stateid": 26
    },
    "26039": {
        "id": 39,
        "inegiid": 26039,
        "name": "Naco",
        "stateid": 26
    },
    "26040": {
        "id": 40,
        "inegiid": 26040,
        "name": "Nácori Chico",
        "stateid": 26
    },
    "26041": {
        "id": 41,
        "inegiid": 26041,
        "name": "Nacozari de García",
        "stateid": 26
    },
    "26042": {
        "id": 42,
        "inegiid": 26042,
        "name": "Navojoa",
        "stateid": 26
    },
    "26043": {
        "id": 43,
        "inegiid": 26043,
        "name": "Nogales",
        "stateid": 26
    },
    "26044": {
        "id": 44,
        "inegiid": 26044,
        "name": "Onavas",
        "stateid": 26
    },
    "26045": {
        "id": 45,
        "inegiid": 26045,
        "name": "Opodepe",
        "stateid": 26
    },
    "26046": {
        "id": 46,
        "inegiid": 26046,
        "name": "Oquitoa",
        "stateid": 26
    },
    "26047": {
        "id": 47,
        "inegiid": 26047,
        "name": "Pitiquito",
        "stateid": 26
    },
    "26048": {
        "id": 48,
        "inegiid": 26048,
        "name": "Puerto Peñasco",
        "stateid": 26
    },
    "26049": {
        "id": 49,
        "inegiid": 26049,
        "name": "Quiriego",
        "stateid": 26
    },
    "26050": {
        "id": 50,
        "inegiid": 26050,
        "name": "Rayón",
        "stateid": 26
    },
    "26051": {
        "id": 51,
        "inegiid": 26051,
        "name": "Rosario",
        "stateid": 26
    },
    "26052": {
        "id": 52,
        "inegiid": 26052,
        "name": "Sahuaripa",
        "stateid": 26
    },
    "26053": {
        "id": 53,
        "inegiid": 26053,
        "name": "San Felipe de Jesús",
        "stateid": 26
    },
    "26054": {
        "id": 54,
        "inegiid": 26054,
        "name": "San Javier",
        "stateid": 26
    },
    "26055": {
        "id": 55,
        "inegiid": 26055,
        "name": "San Luis Río Colorado",
        "stateid": 26
    },
    "26056": {
        "id": 56,
        "inegiid": 26056,
        "name": "San Miguel de Horcasitas",
        "stateid": 26
    },
    "26057": {
        "id": 57,
        "inegiid": 26057,
        "name": "San Pedro de la Cueva",
        "stateid": 26
    },
    "26058": {
        "id": 58,
        "inegiid": 26058,
        "name": "Santa Ana",
        "stateid": 26
    },
    "26059": {
        "id": 59,
        "inegiid": 26059,
        "name": "Santa Cruz",
        "stateid": 26
    },
    "26060": {
        "id": 60,
        "inegiid": 26060,
        "name": "Sáric",
        "stateid": 26
    },
    "26061": {
        "id": 61,
        "inegiid": 26061,
        "name": "Soyopa",
        "stateid": 26
    },
    "26062": {
        "id": 62,
        "inegiid": 26062,
        "name": "Suaqui Grande",
        "stateid": 26
    },
    "26063": {
        "id": 63,
        "inegiid": 26063,
        "name": "Tepache",
        "stateid": 26
    },
    "26064": {
        "id": 64,
        "inegiid": 26064,
        "name": "Trincheras",
        "stateid": 26
    },
    "26065": {
        "id": 65,
        "inegiid": 26065,
        "name": "Tubutama",
        "stateid": 26
    },
    "26066": {
        "id": 66,
        "inegiid": 26066,
        "name": "Ures",
        "stateid": 26
    },
    "26067": {
        "id": 67,
        "inegiid": 26067,
        "name": "Villa Hidalgo",
        "stateid": 26
    },
    "26068": {
        "id": 68,
        "inegiid": 26068,
        "name": "Villa Pesqueira",
        "stateid": 26
    },
    "26069": {
        "id": 69,
        "inegiid": 26069,
        "name": "Yécora",
        "stateid": 26
    },
    "26070": {
        "id": 70,
        "inegiid": 26070,
        "name": "General Plutarco Elías Calles",
        "stateid": 26
    },
    "26071": {
        "id": 71,
        "inegiid": 26071,
        "name": "Benito Juárez",
        "stateid": 26
    },
    "26072": {
        "id": 72,
        "inegiid": 26072,
        "name": "San Ignacio Río Muerto",
        "stateid": 26
    },
    "27001": {
        "id": 1,
        "inegiid": 27001,
        "name": "Balancán",
        "stateid": 27
    },
    "27002": {
        "id": 2,
        "inegiid": 27002,
        "name": "Cárdenas",
        "stateid": 27
    },
    "27003": {
        "id": 3,
        "inegiid": 27003,
        "name": "Centla",
        "stateid": 27
    },
    "27004": {
        "id": 4,
        "inegiid": 27004,
        "name": "Centro",
        "stateid": 27
    },
    "27005": {
        "id": 5,
        "inegiid": 27005,
        "name": "Comalcalco",
        "stateid": 27
    },
    "27006": {
        "id": 6,
        "inegiid": 27006,
        "name": "Cunduacán",
        "stateid": 27
    },
    "27007": {
        "id": 7,
        "inegiid": 27007,
        "name": "Emiliano Zapata",
        "stateid": 27
    },
    "27008": {
        "id": 8,
        "inegiid": 27008,
        "name": "Huimanguillo",
        "stateid": 27
    },
    "27009": {
        "id": 9,
        "inegiid": 27009,
        "name": "Jalapa",
        "stateid": 27
    },
    "27010": {
        "id": 10,
        "inegiid": 27010,
        "name": "Jalpa de Méndez",
        "stateid": 27
    },
    "27011": {
        "id": 11,
        "inegiid": 27011,
        "name": "Jonuta",
        "stateid": 27
    },
    "27012": {
        "id": 12,
        "inegiid": 27012,
        "name": "Macuspana",
        "stateid": 27
    },
    "27013": {
        "id": 13,
        "inegiid": 27013,
        "name": "Nacajuca",
        "stateid": 27
    },
    "27014": {
        "id": 14,
        "inegiid": 27014,
        "name": "Paraíso",
        "stateid": 27
    },
    "27015": {
        "id": 15,
        "inegiid": 27015,
        "name": "Tacotalpa",
        "stateid": 27
    },
    "27016": {
        "id": 16,
        "inegiid": 27016,
        "name": "Teapa",
        "stateid": 27
    },
    "27017": {
        "id": 17,
        "inegiid": 27017,
        "name": "Tenosique",
        "stateid": 27
    },
    "28001": {
        "id": 1,
        "inegiid": 28001,
        "name": "Abasolo",
        "stateid": 28
    },
    "28002": {
        "id": 2,
        "inegiid": 28002,
        "name": "Aldama",
        "stateid": 28
    },
    "28003": {
        "id": 3,
        "inegiid": 28003,
        "name": "Altamira",
        "stateid": 28
    },
    "28004": {
        "id": 4,
        "inegiid": 28004,
        "name": "Antiguo Morelos",
        "stateid": 28
    },
    "28005": {
        "id": 5,
        "inegiid": 28005,
        "name": "Burgos",
        "stateid": 28
    },
    "28006": {
        "id": 6,
        "inegiid": 28006,
        "name": "Bustamante",
        "stateid": 28
    },
    "28007": {
        "id": 7,
        "inegiid": 28007,
        "name": "Camargo",
        "stateid": 28
    },
    "28008": {
        "id": 8,
        "inegiid": 28008,
        "name": "Casas",
        "stateid": 28
    },
    "28009": {
        "id": 9,
        "inegiid": 28009,
        "name": "Ciudad Madero",
        "stateid": 28
    },
    "28010": {
        "id": 10,
        "inegiid": 28010,
        "name": "Cruillas",
        "stateid": 28
    },
    "28011": {
        "id": 11,
        "inegiid": 28011,
        "name": "Gómez Farías",
        "stateid": 28
    },
    "28012": {
        "id": 12,
        "inegiid": 28012,
        "name": "González",
        "stateid": 28
    },
    "28013": {
        "id": 13,
        "inegiid": 28013,
        "name": "Güémez",
        "stateid": 28
    },
    "28014": {
        "id": 14,
        "inegiid": 28014,
        "name": "Guerrero",
        "stateid": 28
    },
    "28015": {
        "id": 15,
        "inegiid": 28015,
        "name": "Gustavo Díaz Ordaz",
        "stateid": 28
    },
    "28016": {
        "id": 16,
        "inegiid": 28016,
        "name": "Hidalgo",
        "stateid": 28
    },
    "28017": {
        "id": 17,
        "inegiid": 28017,
        "name": "Jaumave",
        "stateid": 28
    },
    "28018": {
        "id": 18,
        "inegiid": 28018,
        "name": "Jiménez",
        "stateid": 28
    },
    "28019": {
        "id": 19,
        "inegiid": 28019,
        "name": "Llera",
        "stateid": 28
    },
    "28020": {
        "id": 20,
        "inegiid": 28020,
        "name": "Mainero",
        "stateid": 28
    },
    "28021": {
        "id": 21,
        "inegiid": 28021,
        "name": "El Mante",
        "stateid": 28
    },
    "28022": {
        "id": 22,
        "inegiid": 28022,
        "name": "Matamoros",
        "stateid": 28
    },
    "28023": {
        "id": 23,
        "inegiid": 28023,
        "name": "Méndez",
        "stateid": 28
    },
    "28024": {
        "id": 24,
        "inegiid": 28024,
        "name": "Mier",
        "stateid": 28
    },
    "28025": {
        "id": 25,
        "inegiid": 28025,
        "name": "Miguel Alemán",
        "stateid": 28
    },
    "28026": {
        "id": 26,
        "inegiid": 28026,
        "name": "Miquihuana",
        "stateid": 28
    },
    "28027": {
        "id": 27,
        "inegiid": 28027,
        "name": "Nuevo Laredo",
        "stateid": 28
    },
    "28028": {
        "id": 28,
        "inegiid": 28028,
        "name": "Nuevo Morelos",
        "stateid": 28
    },
    "28029": {
        "id": 29,
        "inegiid": 28029,
        "name": "Ocampo",
        "stateid": 28
    },
    "28030": {
        "id": 30,
        "inegiid": 28030,
        "name": "Padilla",
        "stateid": 28
    },
    "28031": {
        "id": 31,
        "inegiid": 28031,
        "name": "Palmillas",
        "stateid": 28
    },
    "28032": {
        "id": 32,
        "inegiid": 28032,
        "name": "Reynosa",
        "stateid": 28
    },
    "28033": {
        "id": 33,
        "inegiid": 28033,
        "name": "Río Bravo",
        "stateid": 28
    },
    "28034": {
        "id": 34,
        "inegiid": 28034,
        "name": "San Carlos",
        "stateid": 28
    },
    "28035": {
        "id": 35,
        "inegiid": 28035,
        "name": "San Fernando",
        "stateid": 28
    },
    "28036": {
        "id": 36,
        "inegiid": 28036,
        "name": "San Nicolás",
        "stateid": 28
    },
    "28037": {
        "id": 37,
        "inegiid": 28037,
        "name": "Soto la Marina",
        "stateid": 28
    },
    "28038": {
        "id": 38,
        "inegiid": 28038,
        "name": "Tampico",
        "stateid": 28
    },
    "28039": {
        "id": 39,
        "inegiid": 28039,
        "name": "Tula",
        "stateid": 28
    },
    "28040": {
        "id": 40,
        "inegiid": 28040,
        "name": "Valle Hermoso",
        "stateid": 28
    },
    "28041": {
        "id": 41,
        "inegiid": 28041,
        "name": "Victoria",
        "stateid": 28
    },
    "28042": {
        "id": 42,
        "inegiid": 28042,
        "name": "Villagrán",
        "stateid": 28
    },
    "28043": {
        "id": 43,
        "inegiid": 28043,
        "name": "Xicoténcatl",
        "stateid": 28
    },
    "29001": {
        "id": 1,
        "inegiid": 29001,
        "name": "Amaxac de Guerrero",
        "stateid": 29
    },
    "29002": {
        "id": 2,
        "inegiid": 29002,
        "name": "Apetatitlán de Antonio Carvajal",
        "stateid": 29
    },
    "29003": {
        "id": 3,
        "inegiid": 29003,
        "name": "Atlangatepec",
        "stateid": 29
    },
    "29004": {
        "id": 4,
        "inegiid": 29004,
        "name": "Altzayanca",
        "stateid": 29
    },
    "29005": {
        "id": 5,
        "inegiid": 29005,
        "name": "Apizaco",
        "stateid": 29
    },
    "29006": {
        "id": 6,
        "inegiid": 29006,
        "name": "Calpulalpan",
        "stateid": 29
    },
    "29007": {
        "id": 7,
        "inegiid": 29007,
        "name": "El Carmen Tequexquitla",
        "stateid": 29
    },
    "29008": {
        "id": 8,
        "inegiid": 29008,
        "name": "Cuapiaxtla",
        "stateid": 29
    },
    "29009": {
        "id": 9,
        "inegiid": 29009,
        "name": "Cuaxomulco",
        "stateid": 29
    },
    "29010": {
        "id": 10,
        "inegiid": 29010,
        "name": "Chiautempan",
        "stateid": 29
    },
    "29011": {
        "id": 11,
        "inegiid": 29011,
        "name": "Muñoz de Domingo Arenas",
        "stateid": 29
    },
    "29012": {
        "id": 12,
        "inegiid": 29012,
        "name": "Españita",
        "stateid": 29
    },
    "29013": {
        "id": 13,
        "inegiid": 29013,
        "name": "Huamantla",
        "stateid": 29
    },
    "29014": {
        "id": 14,
        "inegiid": 29014,
        "name": "Hueyotlipan",
        "stateid": 29
    },
    "29015": {
        "id": 15,
        "inegiid": 29015,
        "name": "Ixtacuixtla de Mariano Matamoros",
        "stateid": 29
    },
    "29016": {
        "id": 16,
        "inegiid": 29016,
        "name": "Ixtenco",
        "stateid": 29
    },
    "29017": {
        "id": 17,
        "inegiid": 29017,
        "name": "Mazatecochco de José María Morelos",
        "stateid": 29
    },
    "29018": {
        "id": 18,
        "inegiid": 29018,
        "name": "Contla de Juan Cuamatzi",
        "stateid": 29
    },
    "29019": {
        "id": 19,
        "inegiid": 29019,
        "name": "Tepetitla de Lardizábal",
        "stateid": 29
    },
    "29020": {
        "id": 20,
        "inegiid": 29020,
        "name": "Sanctórum de Lázaro Cárdenas",
        "stateid": 29
    },
    "29021": {
        "id": 21,
        "inegiid": 29021,
        "name": "Nanacamilpa de Mariano Arista",
        "stateid": 29
    },
    "29022": {
        "id": 22,
        "inegiid": 29022,
        "name": "Acuamanala de Miguel Hidalgo",
        "stateid": 29
    },
    "29023": {
        "id": 23,
        "inegiid": 29023,
        "name": "Natívitas",
        "stateid": 29
    },
    "29024": {
        "id": 24,
        "inegiid": 29024,
        "name": "Panotla",
        "stateid": 29
    },
    "29025": {
        "id": 25,
        "inegiid": 29025,
        "name": "San Pablo del Monte",
        "stateid": 29
    },
    "29026": {
        "id": 26,
        "inegiid": 29026,
        "name": "Santa Cruz Tlaxcala",
        "stateid": 29
    },
    "29027": {
        "id": 27,
        "inegiid": 29027,
        "name": "Tenancingo",
        "stateid": 29
    },
    "29028": {
        "id": 28,
        "inegiid": 29028,
        "name": "Teolocholco",
        "stateid": 29
    },
    "29029": {
        "id": 29,
        "inegiid": 29029,
        "name": "Tepeyanco",
        "stateid": 29
    },
    "29030": {
        "id": 30,
        "inegiid": 29030,
        "name": "Terrenate",
        "stateid": 29
    },
    "29031": {
        "id": 31,
        "inegiid": 29031,
        "name": "Tetla de la Solidaridad",
        "stateid": 29
    },
    "29032": {
        "id": 32,
        "inegiid": 29032,
        "name": "Tetlatlahuca",
        "stateid": 29
    },
    "29033": {
        "id": 33,
        "inegiid": 29033,
        "name": "Tlaxcala",
        "stateid": 29
    },
    "29034": {
        "id": 34,
        "inegiid": 29034,
        "name": "Tlaxco",
        "stateid": 29
    },
    "29035": {
        "id": 35,
        "inegiid": 29035,
        "name": "Tocatlán",
        "stateid": 29
    },
    "29036": {
        "id": 36,
        "inegiid": 29036,
        "name": "Totolac",
        "stateid": 29
    },
    "29037": {
        "id": 37,
        "inegiid": 29037,
        "name": "Zitlaltepec de Trinidad Sánchez Santos",
        "stateid": 29
    },
    "29038": {
        "id": 38,
        "inegiid": 29038,
        "name": "Tzompantepec",
        "stateid": 29
    },
    "29039": {
        "id": 39,
        "inegiid": 29039,
        "name": "Xaloztoc",
        "stateid": 29
    },
    "29040": {
        "id": 40,
        "inegiid": 29040,
        "name": "Xaltocan",
        "stateid": 29
    },
    "29041": {
        "id": 41,
        "inegiid": 29041,
        "name": "Papalotla de Xicohténcatl",
        "stateid": 29
    },
    "29042": {
        "id": 42,
        "inegiid": 29042,
        "name": "Xicohtzinco",
        "stateid": 29
    },
    "29043": {
        "id": 43,
        "inegiid": 29043,
        "name": "Yauhquemecan",
        "stateid": 29
    },
    "29044": {
        "id": 44,
        "inegiid": 29044,
        "name": "Zacatelco",
        "stateid": 29
    },
    "29045": {
        "id": 45,
        "inegiid": 29045,
        "name": "Benito Juárez",
        "stateid": 29
    },
    "29046": {
        "id": 46,
        "inegiid": 29046,
        "name": "Emiliano Zapata",
        "stateid": 29
    },
    "29047": {
        "id": 47,
        "inegiid": 29047,
        "name": "Lázaro Cárdenas",
        "stateid": 29
    },
    "29048": {
        "id": 48,
        "inegiid": 29048,
        "name": "La Magdalena Tlaltelulco",
        "stateid": 29
    },
    "29049": {
        "id": 49,
        "inegiid": 29049,
        "name": "San Damián Texoloc",
        "stateid": 29
    },
    "29050": {
        "id": 50,
        "inegiid": 29050,
        "name": "San Francisco Tetlanohcan",
        "stateid": 29
    },
    "29051": {
        "id": 51,
        "inegiid": 29051,
        "name": "San Jerónimo Zacualpan",
        "stateid": 29
    },
    "29052": {
        "id": 52,
        "inegiid": 29052,
        "name": "San José Teacalco",
        "stateid": 29
    },
    "29053": {
        "id": 53,
        "inegiid": 29053,
        "name": "San Juan Huactzinco",
        "stateid": 29
    },
    "29054": {
        "id": 54,
        "inegiid": 29054,
        "name": "San Lorenzo Axocomanitla",
        "stateid": 29
    },
    "29055": {
        "id": 55,
        "inegiid": 29055,
        "name": "San Lucas Tecopilco",
        "stateid": 29
    },
    "29056": {
        "id": 56,
        "inegiid": 29056,
        "name": "Santa Ana Nopalucan",
        "stateid": 29
    },
    "29057": {
        "id": 57,
        "inegiid": 29057,
        "name": "Santa Apolonia Teacalco",
        "stateid": 29
    },
    "29058": {
        "id": 58,
        "inegiid": 29058,
        "name": "Santa Catarina Ayometla",
        "stateid": 29
    },
    "29059": {
        "id": 59,
        "inegiid": 29059,
        "name": "Santa Cruz Quilehtla",
        "stateid": 29
    },
    "29060": {
        "id": 60,
        "inegiid": 29060,
        "name": "Santa Isabel Xiloxoxtla",
        "stateid": 29
    },
    "30001": {
        "id": 1,
        "inegiid": 30001,
        "name": "Acajete",
        "stateid": 30
    },
    "30002": {
        "id": 2,
        "inegiid": 30002,
        "name": "Acatlán",
        "stateid": 30
    },
    "30003": {
        "id": 3,
        "inegiid": 30003,
        "name": "Acayucan",
        "stateid": 30
    },
    "30004": {
        "id": 4,
        "inegiid": 30004,
        "name": "Actopan",
        "stateid": 30
    },
    "30005": {
        "id": 5,
        "inegiid": 30005,
        "name": "Acula",
        "stateid": 30
    },
    "30006": {
        "id": 6,
        "inegiid": 30006,
        "name": "Acultzingo",
        "stateid": 30
    },
    "30007": {
        "id": 7,
        "inegiid": 30007,
        "name": "Camarón de Tejeda",
        "stateid": 30
    },
    "30008": {
        "id": 8,
        "inegiid": 30008,
        "name": "Alpatláhuac",
        "stateid": 30
    },
    "30009": {
        "id": 9,
        "inegiid": 30009,
        "name": "Alto Lucero de Gutiérrez Barrios",
        "stateid": 30
    },
    "30010": {
        "id": 10,
        "inegiid": 30010,
        "name": "Altotonga",
        "stateid": 30
    },
    "30011": {
        "id": 11,
        "inegiid": 30011,
        "name": "Alvarado",
        "stateid": 30
    },
    "30012": {
        "id": 12,
        "inegiid": 30012,
        "name": "Amatitlán",
        "stateid": 30
    },
    "30013": {
        "id": 13,
        "inegiid": 30013,
        "name": "Naranjos Amatlán",
        "stateid": 30
    },
    "30014": {
        "id": 14,
        "inegiid": 30014,
        "name": "Amatlán de los Reyes",
        "stateid": 30
    },
    "30015": {
        "id": 15,
        "inegiid": 30015,
        "name": "Angel R. Cabada",
        "stateid": 30
    },
    "30016": {
        "id": 16,
        "inegiid": 30016,
        "name": "La Antigua",
        "stateid": 30
    },
    "30017": {
        "id": 17,
        "inegiid": 30017,
        "name": "Apazapan",
        "stateid": 30
    },
    "30018": {
        "id": 18,
        "inegiid": 30018,
        "name": "Aquila",
        "stateid": 30
    },
    "30019": {
        "id": 19,
        "inegiid": 30019,
        "name": "Astacinga",
        "stateid": 30
    },
    "30020": {
        "id": 20,
        "inegiid": 30020,
        "name": "Atlahuilco",
        "stateid": 30
    },
    "30021": {
        "id": 21,
        "inegiid": 30021,
        "name": "Atoyac",
        "stateid": 30
    },
    "30022": {
        "id": 22,
        "inegiid": 30022,
        "name": "Atzacan",
        "stateid": 30
    },
    "30023": {
        "id": 23,
        "inegiid": 30023,
        "name": "Atzalan",
        "stateid": 30
    },
    "30024": {
        "id": 24,
        "inegiid": 30024,
        "name": "Tlaltetela",
        "stateid": 30
    },
    "30025": {
        "id": 25,
        "inegiid": 30025,
        "name": "Ayahualulco",
        "stateid": 30
    },
    "30026": {
        "id": 26,
        "inegiid": 30026,
        "name": "Banderilla",
        "stateid": 30
    },
    "30027": {
        "id": 27,
        "inegiid": 30027,
        "name": "Benito Juárez",
        "stateid": 30
    },
    "30028": {
        "id": 28,
        "inegiid": 30028,
        "name": "Boca del Río",
        "stateid": 30
    },
    "30029": {
        "id": 29,
        "inegiid": 30029,
        "name": "Calcahualco",
        "stateid": 30
    },
    "30030": {
        "id": 30,
        "inegiid": 30030,
        "name": "Camerino Z. Mendoza",
        "stateid": 30
    },
    "30031": {
        "id": 31,
        "inegiid": 30031,
        "name": "Carrillo Puerto",
        "stateid": 30
    },
    "30032": {
        "id": 32,
        "inegiid": 30032,
        "name": "Catemaco",
        "stateid": 30
    },
    "30033": {
        "id": 33,
        "inegiid": 30033,
        "name": "Cazones",
        "stateid": 30
    },
    "30034": {
        "id": 34,
        "inegiid": 30034,
        "name": "Cerro Azul",
        "stateid": 30
    },
    "30035": {
        "id": 35,
        "inegiid": 30035,
        "name": "Citlaltépetl",
        "stateid": 30
    },
    "30036": {
        "id": 36,
        "inegiid": 30036,
        "name": "Coacoatzintla",
        "stateid": 30
    },
    "30037": {
        "id": 37,
        "inegiid": 30037,
        "name": "Coahuitlán",
        "stateid": 30
    },
    "30038": {
        "id": 38,
        "inegiid": 30038,
        "name": "Coatepec",
        "stateid": 30
    },
    "30039": {
        "id": 39,
        "inegiid": 30039,
        "name": "Coatzacoalcos",
        "stateid": 30
    },
    "30040": {
        "id": 40,
        "inegiid": 30040,
        "name": "Coatzintla",
        "stateid": 30
    },
    "30041": {
        "id": 41,
        "inegiid": 30041,
        "name": "Coetzala",
        "stateid": 30
    },
    "30042": {
        "id": 42,
        "inegiid": 30042,
        "name": "Colipa",
        "stateid": 30
    },
    "30043": {
        "id": 43,
        "inegiid": 30043,
        "name": "Comapa",
        "stateid": 30
    },
    "30044": {
        "id": 44,
        "inegiid": 30044,
        "name": "Córdoba",
        "stateid": 30
    },
    "30045": {
        "id": 45,
        "inegiid": 30045,
        "name": "Cosamaloapan de Carpio",
        "stateid": 30
    },
    "30046": {
        "id": 46,
        "inegiid": 30046,
        "name": "Cosautlán de Carvajal",
        "stateid": 30
    },
    "30047": {
        "id": 47,
        "inegiid": 30047,
        "name": "Coscomatepec",
        "stateid": 30
    },
    "30048": {
        "id": 48,
        "inegiid": 30048,
        "name": "Cosoleacaque",
        "stateid": 30
    },
    "30049": {
        "id": 49,
        "inegiid": 30049,
        "name": "Cotaxtla",
        "stateid": 30
    },
    "30050": {
        "id": 50,
        "inegiid": 30050,
        "name": "Coxquihui",
        "stateid": 30
    },
    "30051": {
        "id": 51,
        "inegiid": 30051,
        "name": "Coyutla",
        "stateid": 30
    },
    "30052": {
        "id": 52,
        "inegiid": 30052,
        "name": "Cuichapa",
        "stateid": 30
    },
    "30053": {
        "id": 53,
        "inegiid": 30053,
        "name": "Cuitláhuac",
        "stateid": 30
    },
    "30054": {
        "id": 54,
        "inegiid": 30054,
        "name": "Chacaltianguis",
        "stateid": 30
    },
    "30055": {
        "id": 55,
        "inegiid": 30055,
        "name": "Chalma",
        "stateid": 30
    },
    "30056": {
        "id": 56,
        "inegiid": 30056,
        "name": "Chiconamel",
        "stateid": 30
    },
    "30057": {
        "id": 57,
        "inegiid": 30057,
        "name": "Chiconquiaco",
        "stateid": 30
    },
    "30058": {
        "id": 58,
        "inegiid": 30058,
        "name": "Chicontepec",
        "stateid": 30
    },
    "30059": {
        "id": 59,
        "inegiid": 30059,
        "name": "Chinameca",
        "stateid": 30
    },
    "30060": {
        "id": 60,
        "inegiid": 30060,
        "name": "Chinampa de Gorostiza",
        "stateid": 30
    },
    "30061": {
        "id": 61,
        "inegiid": 30061,
        "name": "Las Choapas",
        "stateid": 30
    },
    "30062": {
        "id": 62,
        "inegiid": 30062,
        "name": "Chocamán",
        "stateid": 30
    },
    "30063": {
        "id": 63,
        "inegiid": 30063,
        "name": "Chontla",
        "stateid": 30
    },
    "30064": {
        "id": 64,
        "inegiid": 30064,
        "name": "Chumatlán",
        "stateid": 30
    },
    "30065": {
        "id": 65,
        "inegiid": 30065,
        "name": "Emiliano Zapata",
        "stateid": 30
    },
    "30066": {
        "id": 66,
        "inegiid": 30066,
        "name": "Espinal",
        "stateid": 30
    },
    "30067": {
        "id": 67,
        "inegiid": 30067,
        "name": "Filomeno Mata",
        "stateid": 30
    },
    "30068": {
        "id": 68,
        "inegiid": 30068,
        "name": "Fortín",
        "stateid": 30
    },
    "30069": {
        "id": 69,
        "inegiid": 30069,
        "name": "Gutiérrez Zamora",
        "stateid": 30
    },
    "30070": {
        "id": 70,
        "inegiid": 30070,
        "name": "Hidalgotitlán",
        "stateid": 30
    },
    "30071": {
        "id": 71,
        "inegiid": 30071,
        "name": "Huatusco",
        "stateid": 30
    },
    "30072": {
        "id": 72,
        "inegiid": 30072,
        "name": "Huayacocotla",
        "stateid": 30
    },
    "30073": {
        "id": 73,
        "inegiid": 30073,
        "name": "Hueyapan de Ocampo",
        "stateid": 30
    },
    "30074": {
        "id": 74,
        "inegiid": 30074,
        "name": "Huiloapan",
        "stateid": 30
    },
    "30075": {
        "id": 75,
        "inegiid": 30075,
        "name": "Ignacio de la Llave",
        "stateid": 30
    },
    "30076": {
        "id": 76,
        "inegiid": 30076,
        "name": "Ilamatlán",
        "stateid": 30
    },
    "30077": {
        "id": 77,
        "inegiid": 30077,
        "name": "Isla",
        "stateid": 30
    },
    "30078": {
        "id": 78,
        "inegiid": 30078,
        "name": "Ixcatepec",
        "stateid": 30
    },
    "30079": {
        "id": 79,
        "inegiid": 30079,
        "name": "Ixhuacán de los Reyes",
        "stateid": 30
    },
    "30080": {
        "id": 80,
        "inegiid": 30080,
        "name": "Ixhuatlán del Café",
        "stateid": 30
    },
    "30081": {
        "id": 81,
        "inegiid": 30081,
        "name": "Ixhuatlancillo",
        "stateid": 30
    },
    "30082": {
        "id": 82,
        "inegiid": 30082,
        "name": "Ixhuatlán del Sureste",
        "stateid": 30
    },
    "30083": {
        "id": 83,
        "inegiid": 30083,
        "name": "Ixhuatlán de Madero",
        "stateid": 30
    },
    "30084": {
        "id": 84,
        "inegiid": 30084,
        "name": "Ixmatlahuacan",
        "stateid": 30
    },
    "30085": {
        "id": 85,
        "inegiid": 30085,
        "name": "Ixtaczoquitlán",
        "stateid": 30
    },
    "30086": {
        "id": 86,
        "inegiid": 30086,
        "name": "Jalacingo",
        "stateid": 30
    },
    "30087": {
        "id": 87,
        "inegiid": 30087,
        "name": "Xalapa",
        "stateid": 30
    },
    "30088": {
        "id": 88,
        "inegiid": 30088,
        "name": "Jalcomulco",
        "stateid": 30
    },
    "30089": {
        "id": 89,
        "inegiid": 30089,
        "name": "Jáltipan",
        "stateid": 30
    },
    "30090": {
        "id": 90,
        "inegiid": 30090,
        "name": "Jamapa",
        "stateid": 30
    },
    "30091": {
        "id": 91,
        "inegiid": 30091,
        "name": "Jesús Carranza",
        "stateid": 30
    },
    "30092": {
        "id": 92,
        "inegiid": 30092,
        "name": "Xico",
        "stateid": 30
    },
    "30093": {
        "id": 93,
        "inegiid": 30093,
        "name": "Jilotepec",
        "stateid": 30
    },
    "30094": {
        "id": 94,
        "inegiid": 30094,
        "name": "Juan Rodríguez Clara",
        "stateid": 30
    },
    "30095": {
        "id": 95,
        "inegiid": 30095,
        "name": "Juchique de Ferrer",
        "stateid": 30
    },
    "30096": {
        "id": 96,
        "inegiid": 30096,
        "name": "Landero y Coss",
        "stateid": 30
    },
    "30097": {
        "id": 97,
        "inegiid": 30097,
        "name": "Lerdo de Tejada",
        "stateid": 30
    },
    "30098": {
        "id": 98,
        "inegiid": 30098,
        "name": "Magdalena",
        "stateid": 30
    },
    "30099": {
        "id": 99,
        "inegiid": 30099,
        "name": "Maltrata",
        "stateid": 30
    },
    "30100": {
        "id": 100,
        "inegiid": 30100,
        "name": "Manlio Fabio Altamirano",
        "stateid": 30
    },
    "30101": {
        "id": 101,
        "inegiid": 30101,
        "name": "Mariano Escobedo",
        "stateid": 30
    },
    "30102": {
        "id": 102,
        "inegiid": 30102,
        "name": "Martínez de la Torre",
        "stateid": 30
    },
    "30103": {
        "id": 103,
        "inegiid": 30103,
        "name": "Mecatlán",
        "stateid": 30
    },
    "30104": {
        "id": 104,
        "inegiid": 30104,
        "name": "Mecayapan",
        "stateid": 30
    },
    "30105": {
        "id": 105,
        "inegiid": 30105,
        "name": "Medellín",
        "stateid": 30
    },
    "30106": {
        "id": 106,
        "inegiid": 30106,
        "name": "Miahuatlán",
        "stateid": 30
    },
    "30107": {
        "id": 107,
        "inegiid": 30107,
        "name": "Las Minas",
        "stateid": 30
    },
    "30108": {
        "id": 108,
        "inegiid": 30108,
        "name": "Minatitlán",
        "stateid": 30
    },
    "30109": {
        "id": 109,
        "inegiid": 30109,
        "name": "Misantla",
        "stateid": 30
    },
    "30110": {
        "id": 110,
        "inegiid": 30110,
        "name": "Mixtla de Altamirano",
        "stateid": 30
    },
    "30111": {
        "id": 111,
        "inegiid": 30111,
        "name": "Moloacán",
        "stateid": 30
    },
    "30112": {
        "id": 112,
        "inegiid": 30112,
        "name": "Naolinco",
        "stateid": 30
    },
    "30113": {
        "id": 113,
        "inegiid": 30113,
        "name": "Naranjal",
        "stateid": 30
    },
    "30114": {
        "id": 114,
        "inegiid": 30114,
        "name": "Nautla",
        "stateid": 30
    },
    "30115": {
        "id": 115,
        "inegiid": 30115,
        "name": "Nogales",
        "stateid": 30
    },
    "30116": {
        "id": 116,
        "inegiid": 30116,
        "name": "Oluta",
        "stateid": 30
    },
    "30117": {
        "id": 117,
        "inegiid": 30117,
        "name": "Omealca",
        "stateid": 30
    },
    "30118": {
        "id": 118,
        "inegiid": 30118,
        "name": "Orizaba",
        "stateid": 30
    },
    "30119": {
        "id": 119,
        "inegiid": 30119,
        "name": "Otatitlán",
        "stateid": 30
    },
    "30120": {
        "id": 120,
        "inegiid": 30120,
        "name": "Oteapan",
        "stateid": 30
    },
    "30121": {
        "id": 121,
        "inegiid": 30121,
        "name": "Ozuluama de Mascareñas",
        "stateid": 30
    },
    "30122": {
        "id": 122,
        "inegiid": 30122,
        "name": "Pajapan",
        "stateid": 30
    },
    "30123": {
        "id": 123,
        "inegiid": 30123,
        "name": "Pánuco",
        "stateid": 30
    },
    "30124": {
        "id": 124,
        "inegiid": 30124,
        "name": "Papantla",
        "stateid": 30
    },
    "30125": {
        "id": 125,
        "inegiid": 30125,
        "name": "Paso del Macho",
        "stateid": 30
    },
    "30126": {
        "id": 126,
        "inegiid": 30126,
        "name": "Paso de Ovejas",
        "stateid": 30
    },
    "30127": {
        "id": 127,
        "inegiid": 30127,
        "name": "La Perla",
        "stateid": 30
    },
    "30128": {
        "id": 128,
        "inegiid": 30128,
        "name": "Perote",
        "stateid": 30
    },
    "30129": {
        "id": 129,
        "inegiid": 30129,
        "name": "Platón Sánchez",
        "stateid": 30
    },
    "30130": {
        "id": 130,
        "inegiid": 30130,
        "name": "Playa Vicente",
        "stateid": 30
    },
    "30131": {
        "id": 131,
        "inegiid": 30131,
        "name": "Poza Rica de Hidalgo",
        "stateid": 30
    },
    "30132": {
        "id": 132,
        "inegiid": 30132,
        "name": "Las Vigas de Ramírez",
        "stateid": 30
    },
    "30133": {
        "id": 133,
        "inegiid": 30133,
        "name": "Pueblo Viejo",
        "stateid": 30
    },
    "30134": {
        "id": 134,
        "inegiid": 30134,
        "name": "Puente Nacional",
        "stateid": 30
    },
    "30135": {
        "id": 135,
        "inegiid": 30135,
        "name": "Rafael Delgado",
        "stateid": 30
    },
    "30136": {
        "id": 136,
        "inegiid": 30136,
        "name": "Rafael Lucio",
        "stateid": 30
    },
    "30137": {
        "id": 137,
        "inegiid": 30137,
        "name": "Los Reyes",
        "stateid": 30
    },
    "30138": {
        "id": 138,
        "inegiid": 30138,
        "name": "Río Blanco",
        "stateid": 30
    },
    "30139": {
        "id": 139,
        "inegiid": 30139,
        "name": "Saltabarranca",
        "stateid": 30
    },
    "30140": {
        "id": 140,
        "inegiid": 30140,
        "name": "San Andrés Tenejapan",
        "stateid": 30
    },
    "30141": {
        "id": 141,
        "inegiid": 30141,
        "name": "San Andrés Tuxtla",
        "stateid": 30
    },
    "30142": {
        "id": 142,
        "inegiid": 30142,
        "name": "San Juan Evangelista",
        "stateid": 30
    },
    "30143": {
        "id": 143,
        "inegiid": 30143,
        "name": "Santiago Tuxtla",
        "stateid": 30
    },
    "30144": {
        "id": 144,
        "inegiid": 30144,
        "name": "Sayula de Alemán",
        "stateid": 30
    },
    "30145": {
        "id": 145,
        "inegiid": 30145,
        "name": "Soconusco",
        "stateid": 30
    },
    "30146": {
        "id": 146,
        "inegiid": 30146,
        "name": "Sochiapa",
        "stateid": 30
    },
    "30147": {
        "id": 147,
        "inegiid": 30147,
        "name": "Soledad Atzompa",
        "stateid": 30
    },
    "30148": {
        "id": 148,
        "inegiid": 30148,
        "name": "Soledad de Doblado",
        "stateid": 30
    },
    "30149": {
        "id": 149,
        "inegiid": 30149,
        "name": "Soteapan",
        "stateid": 30
    },
    "30150": {
        "id": 150,
        "inegiid": 30150,
        "name": "Tamalín",
        "stateid": 30
    },
    "30151": {
        "id": 151,
        "inegiid": 30151,
        "name": "Tamiahua",
        "stateid": 30
    },
    "30152": {
        "id": 152,
        "inegiid": 30152,
        "name": "Tampico Alto",
        "stateid": 30
    },
    "30153": {
        "id": 153,
        "inegiid": 30153,
        "name": "Tancoco",
        "stateid": 30
    },
    "30154": {
        "id": 154,
        "inegiid": 30154,
        "name": "Tantima",
        "stateid": 30
    },
    "30155": {
        "id": 155,
        "inegiid": 30155,
        "name": "Tantoyuca",
        "stateid": 30
    },
    "30156": {
        "id": 156,
        "inegiid": 30156,
        "name": "Tatatila",
        "stateid": 30
    },
    "30157": {
        "id": 157,
        "inegiid": 30157,
        "name": "Castillo de Teayo",
        "stateid": 30
    },
    "30158": {
        "id": 158,
        "inegiid": 30158,
        "name": "Tecolutla",
        "stateid": 30
    },
    "30159": {
        "id": 159,
        "inegiid": 30159,
        "name": "Tehuipango",
        "stateid": 30
    },
    "30160": {
        "id": 160,
        "inegiid": 30160,
        "name": "Temapache",
        "stateid": 30
    },
    "30161": {
        "id": 161,
        "inegiid": 30161,
        "name": "Tempoal",
        "stateid": 30
    },
    "30162": {
        "id": 162,
        "inegiid": 30162,
        "name": "Tenampa",
        "stateid": 30
    },
    "30163": {
        "id": 163,
        "inegiid": 30163,
        "name": "Tenochtitlán",
        "stateid": 30
    },
    "30164": {
        "id": 164,
        "inegiid": 30164,
        "name": "Teocelo",
        "stateid": 30
    },
    "30165": {
        "id": 165,
        "inegiid": 30165,
        "name": "Tepatlaxco",
        "stateid": 30
    },
    "30166": {
        "id": 166,
        "inegiid": 30166,
        "name": "Tepetlán",
        "stateid": 30
    },
    "30167": {
        "id": 167,
        "inegiid": 30167,
        "name": "Tepetzintla",
        "stateid": 30
    },
    "30168": {
        "id": 168,
        "inegiid": 30168,
        "name": "Tequila",
        "stateid": 30
    },
    "30169": {
        "id": 169,
        "inegiid": 30169,
        "name": "José Azueta",
        "stateid": 30
    },
    "30170": {
        "id": 170,
        "inegiid": 30170,
        "name": "Texcatepec",
        "stateid": 30
    },
    "30171": {
        "id": 171,
        "inegiid": 30171,
        "name": "Texhuacán",
        "stateid": 30
    },
    "30172": {
        "id": 172,
        "inegiid": 30172,
        "name": "Texistepec",
        "stateid": 30
    },
    "30173": {
        "id": 173,
        "inegiid": 30173,
        "name": "Tezonapa",
        "stateid": 30
    },
    "30174": {
        "id": 174,
        "inegiid": 30174,
        "name": "Tierra Blanca",
        "stateid": 30
    },
    "30175": {
        "id": 175,
        "inegiid": 30175,
        "name": "Tihuatlán",
        "stateid": 30
    },
    "30176": {
        "id": 176,
        "inegiid": 30176,
        "name": "Tlacojalpan",
        "stateid": 30
    },
    "30177": {
        "id": 177,
        "inegiid": 30177,
        "name": "Tlacolulan",
        "stateid": 30
    },
    "30178": {
        "id": 178,
        "inegiid": 30178,
        "name": "Tlacotalpan",
        "stateid": 30
    },
    "30179": {
        "id": 179,
        "inegiid": 30179,
        "name": "Tlacotepec de Mejía",
        "stateid": 30
    },
    "30180": {
        "id": 180,
        "inegiid": 30180,
        "name": "Tlachichilco",
        "stateid": 30
    },
    "30181": {
        "id": 181,
        "inegiid": 30181,
        "name": "Tlalixcoyan",
        "stateid": 30
    },
    "30182": {
        "id": 182,
        "inegiid": 30182,
        "name": "Tlalnelhuayocan",
        "stateid": 30
    },
    "30183": {
        "id": 183,
        "inegiid": 30183,
        "name": "Tlapacoyan",
        "stateid": 30
    },
    "30184": {
        "id": 184,
        "inegiid": 30184,
        "name": "Tlaquilpa",
        "stateid": 30
    },
    "30185": {
        "id": 185,
        "inegiid": 30185,
        "name": "Tlilapan",
        "stateid": 30
    },
    "30186": {
        "id": 186,
        "inegiid": 30186,
        "name": "Tomatlán",
        "stateid": 30
    },
    "30187": {
        "id": 187,
        "inegiid": 30187,
        "name": "Tonayán",
        "stateid": 30
    },
    "30188": {
        "id": 188,
        "inegiid": 30188,
        "name": "Totutla",
        "stateid": 30
    },
    "30189": {
        "id": 189,
        "inegiid": 30189,
        "name": "Túxpam",
        "stateid": 30
    },
    "30190": {
        "id": 190,
        "inegiid": 30190,
        "name": "Tuxtilla",
        "stateid": 30
    },
    "30191": {
        "id": 191,
        "inegiid": 30191,
        "name": "Ursulo Galván",
        "stateid": 30
    },
    "30192": {
        "id": 192,
        "inegiid": 30192,
        "name": "Vega de Alatorre",
        "stateid": 30
    },
    "30193": {
        "id": 193,
        "inegiid": 30193,
        "name": "Veracruz",
        "stateid": 30
    },
    "30194": {
        "id": 194,
        "inegiid": 30194,
        "name": "Villa Aldama",
        "stateid": 30
    },
    "30195": {
        "id": 195,
        "inegiid": 30195,
        "name": "Xoxocotla",
        "stateid": 30
    },
    "30196": {
        "id": 196,
        "inegiid": 30196,
        "name": "Yanga",
        "stateid": 30
    },
    "30197": {
        "id": 197,
        "inegiid": 30197,
        "name": "Yecuatla",
        "stateid": 30
    },
    "30198": {
        "id": 198,
        "inegiid": 30198,
        "name": "Zacualpan",
        "stateid": 30
    },
    "30199": {
        "id": 199,
        "inegiid": 30199,
        "name": "Zaragoza",
        "stateid": 30
    },
    "30200": {
        "id": 200,
        "inegiid": 30200,
        "name": "Zentla",
        "stateid": 30
    },
    "30201": {
        "id": 201,
        "inegiid": 30201,
        "name": "Zongolica",
        "stateid": 30
    },
    "30202": {
        "id": 202,
        "inegiid": 30202,
        "name": "Zontecomatlán de López y Fuentes",
        "stateid": 30
    },
    "30203": {
        "id": 203,
        "inegiid": 30203,
        "name": "Zozocolco de Hidalgo",
        "stateid": 30
    },
    "30204": {
        "id": 204,
        "inegiid": 30204,
        "name": "Agua Dulce",
        "stateid": 30
    },
    "30205": {
        "id": 205,
        "inegiid": 30205,
        "name": "El Higo",
        "stateid": 30
    },
    "30206": {
        "id": 206,
        "inegiid": 30206,
        "name": "Nanchital de Lázaro Cárdenas del Río",
        "stateid": 30
    },
    "30207": {
        "id": 207,
        "inegiid": 30207,
        "name": "Tres Valles",
        "stateid": 30
    },
    "30208": {
        "id": 208,
        "inegiid": 30208,
        "name": "Carlos A. Carrillo",
        "stateid": 30
    },
    "30209": {
        "id": 209,
        "inegiid": 30209,
        "name": "Tatahuicapan de Juárez",
        "stateid": 30
    },
    "30210": {
        "id": 210,
        "inegiid": 30210,
        "name": "Uxpanapa",
        "stateid": 30
    },
    "30211": {
        "id": 211,
        "inegiid": 30211,
        "name": "San Rafael",
        "stateid": 30
    },
    "30212": {
        "id": 212,
        "inegiid": 30212,
        "name": "Santiago Sochiapan",
        "stateid": 30
    },
    "31001": {
        "id": 1,
        "inegiid": 31001,
        "name": "Abalá",
        "stateid": 31
    },
    "31002": {
        "id": 2,
        "inegiid": 31002,
        "name": "Acanceh",
        "stateid": 31
    },
    "31003": {
        "id": 3,
        "inegiid": 31003,
        "name": "Akil",
        "stateid": 31
    },
    "31004": {
        "id": 4,
        "inegiid": 31004,
        "name": "Baca",
        "stateid": 31
    },
    "31005": {
        "id": 5,
        "inegiid": 31005,
        "name": "Bokobá",
        "stateid": 31
    },
    "31006": {
        "id": 6,
        "inegiid": 31006,
        "name": "Buctzotz",
        "stateid": 31
    },
    "31007": {
        "id": 7,
        "inegiid": 31007,
        "name": "Cacalchén",
        "stateid": 31
    },
    "31008": {
        "id": 8,
        "inegiid": 31008,
        "name": "Calotmul",
        "stateid": 31
    },
    "31009": {
        "id": 9,
        "inegiid": 31009,
        "name": "Cansahcab",
        "stateid": 31
    },
    "31010": {
        "id": 10,
        "inegiid": 31010,
        "name": "Cantamayec",
        "stateid": 31
    },
    "31011": {
        "id": 11,
        "inegiid": 31011,
        "name": "Celestún",
        "stateid": 31
    },
    "31012": {
        "id": 12,
        "inegiid": 31012,
        "name": "Cenotillo",
        "stateid": 31
    },
    "31013": {
        "id": 13,
        "inegiid": 31013,
        "name": "Conkal",
        "stateid": 31
    },
    "31014": {
        "id": 14,
        "inegiid": 31014,
        "name": "Cuncunul",
        "stateid": 31
    },
    "31015": {
        "id": 15,
        "inegiid": 31015,
        "name": "Cuzamá",
        "stateid": 31
    },
    "31016": {
        "id": 16,
        "inegiid": 31016,
        "name": "Chacsinkín",
        "stateid": 31
    },
    "31017": {
        "id": 17,
        "inegiid": 31017,
        "name": "Chankom",
        "stateid": 31
    },
    "31018": {
        "id": 18,
        "inegiid": 31018,
        "name": "Chapab",
        "stateid": 31
    },
    "31019": {
        "id": 19,
        "inegiid": 31019,
        "name": "Chemax",
        "stateid": 31
    },
    "31020": {
        "id": 20,
        "inegiid": 31020,
        "name": "Chicxulub Pueblo",
        "stateid": 31
    },
    "31021": {
        "id": 21,
        "inegiid": 31021,
        "name": "Chichimilá",
        "stateid": 31
    },
    "31022": {
        "id": 22,
        "inegiid": 31022,
        "name": "Chikindzonot",
        "stateid": 31
    },
    "31023": {
        "id": 23,
        "inegiid": 31023,
        "name": "Chocholá",
        "stateid": 31
    },
    "31024": {
        "id": 24,
        "inegiid": 31024,
        "name": "Chumayel",
        "stateid": 31
    },
    "31025": {
        "id": 25,
        "inegiid": 31025,
        "name": "Dzán",
        "stateid": 31
    },
    "31026": {
        "id": 26,
        "inegiid": 31026,
        "name": "Dzemul",
        "stateid": 31
    },
    "31027": {
        "id": 27,
        "inegiid": 31027,
        "name": "Dzidzantún",
        "stateid": 31
    },
    "31028": {
        "id": 28,
        "inegiid": 31028,
        "name": "Dzilam de Bravo",
        "stateid": 31
    },
    "31029": {
        "id": 29,
        "inegiid": 31029,
        "name": "Dzilam González",
        "stateid": 31
    },
    "31030": {
        "id": 30,
        "inegiid": 31030,
        "name": "Dzitás",
        "stateid": 31
    },
    "31031": {
        "id": 31,
        "inegiid": 31031,
        "name": "Dzoncauich",
        "stateid": 31
    },
    "31032": {
        "id": 32,
        "inegiid": 31032,
        "name": "Espita",
        "stateid": 31
    },
    "31033": {
        "id": 33,
        "inegiid": 31033,
        "name": "Halachó",
        "stateid": 31
    },
    "31034": {
        "id": 34,
        "inegiid": 31034,
        "name": "Hocabá",
        "stateid": 31
    },
    "31035": {
        "id": 35,
        "inegiid": 31035,
        "name": "Hoctún",
        "stateid": 31
    },
    "31036": {
        "id": 36,
        "inegiid": 31036,
        "name": "Homún",
        "stateid": 31
    },
    "31037": {
        "id": 37,
        "inegiid": 31037,
        "name": "Huhí",
        "stateid": 31
    },
    "31038": {
        "id": 38,
        "inegiid": 31038,
        "name": "Hunucmá",
        "stateid": 31
    },
    "31039": {
        "id": 39,
        "inegiid": 31039,
        "name": "Ixil",
        "stateid": 31
    },
    "31040": {
        "id": 40,
        "inegiid": 31040,
        "name": "Izamal",
        "stateid": 31
    },
    "31041": {
        "id": 41,
        "inegiid": 31041,
        "name": "Kanasín",
        "stateid": 31
    },
    "31042": {
        "id": 42,
        "inegiid": 31042,
        "name": "Kantunil",
        "stateid": 31
    },
    "31043": {
        "id": 43,
        "inegiid": 31043,
        "name": "Kaua",
        "stateid": 31
    },
    "31044": {
        "id": 44,
        "inegiid": 31044,
        "name": "Kinchil",
        "stateid": 31
    },
    "31045": {
        "id": 45,
        "inegiid": 31045,
        "name": "Kopomá",
        "stateid": 31
    },
    "31046": {
        "id": 46,
        "inegiid": 31046,
        "name": "Mama",
        "stateid": 31
    },
    "31047": {
        "id": 47,
        "inegiid": 31047,
        "name": "Maní",
        "stateid": 31
    },
    "31048": {
        "id": 48,
        "inegiid": 31048,
        "name": "Maxcanú",
        "stateid": 31
    },
    "31049": {
        "id": 49,
        "inegiid": 31049,
        "name": "Mayapán",
        "stateid": 31
    },
    "31050": {
        "id": 50,
        "inegiid": 31050,
        "name": "Mérida",
        "stateid": 31
    },
    "31051": {
        "id": 51,
        "inegiid": 31051,
        "name": "Mocochá",
        "stateid": 31
    },
    "31052": {
        "id": 52,
        "inegiid": 31052,
        "name": "Motul",
        "stateid": 31
    },
    "31053": {
        "id": 53,
        "inegiid": 31053,
        "name": "Muna",
        "stateid": 31
    },
    "31054": {
        "id": 54,
        "inegiid": 31054,
        "name": "Muxupip",
        "stateid": 31
    },
    "31055": {
        "id": 55,
        "inegiid": 31055,
        "name": "Opichén",
        "stateid": 31
    },
    "31056": {
        "id": 56,
        "inegiid": 31056,
        "name": "Oxkutzcab",
        "stateid": 31
    },
    "31057": {
        "id": 57,
        "inegiid": 31057,
        "name": "Panabá",
        "stateid": 31
    },
    "31058": {
        "id": 58,
        "inegiid": 31058,
        "name": "Peto",
        "stateid": 31
    },
    "31059": {
        "id": 59,
        "inegiid": 31059,
        "name": "Progreso",
        "stateid": 31
    },
    "31060": {
        "id": 60,
        "inegiid": 31060,
        "name": "Quintana Roo",
        "stateid": 31
    },
    "31061": {
        "id": 61,
        "inegiid": 31061,
        "name": "Río Lagartos",
        "stateid": 31
    },
    "31062": {
        "id": 62,
        "inegiid": 31062,
        "name": "Sacalum",
        "stateid": 31
    },
    "31063": {
        "id": 63,
        "inegiid": 31063,
        "name": "Samahil",
        "stateid": 31
    },
    "31064": {
        "id": 64,
        "inegiid": 31064,
        "name": "Sanahcat",
        "stateid": 31
    },
    "31065": {
        "id": 65,
        "inegiid": 31065,
        "name": "San Felipe",
        "stateid": 31
    },
    "31066": {
        "id": 66,
        "inegiid": 31066,
        "name": "Santa Elena",
        "stateid": 31
    },
    "31067": {
        "id": 67,
        "inegiid": 31067,
        "name": "Seyé",
        "stateid": 31
    },
    "31068": {
        "id": 68,
        "inegiid": 31068,
        "name": "Sinanché",
        "stateid": 31
    },
    "31069": {
        "id": 69,
        "inegiid": 31069,
        "name": "Sotuta",
        "stateid": 31
    },
    "31070": {
        "id": 70,
        "inegiid": 31070,
        "name": "Sucilá",
        "stateid": 31
    },
    "31071": {
        "id": 71,
        "inegiid": 31071,
        "name": "Sudzal",
        "stateid": 31
    },
    "31072": {
        "id": 72,
        "inegiid": 31072,
        "name": "Suma",
        "stateid": 31
    },
    "31073": {
        "id": 73,
        "inegiid": 31073,
        "name": "Tahdziú",
        "stateid": 31
    },
    "31074": {
        "id": 74,
        "inegiid": 31074,
        "name": "Tahmek",
        "stateid": 31
    },
    "31075": {
        "id": 75,
        "inegiid": 31075,
        "name": "Teabo",
        "stateid": 31
    },
    "31076": {
        "id": 76,
        "inegiid": 31076,
        "name": "Tecoh",
        "stateid": 31
    },
    "31077": {
        "id": 77,
        "inegiid": 31077,
        "name": "Tekal de Venegas",
        "stateid": 31
    },
    "31078": {
        "id": 78,
        "inegiid": 31078,
        "name": "Tekantó",
        "stateid": 31
    },
    "31079": {
        "id": 79,
        "inegiid": 31079,
        "name": "Tekax",
        "stateid": 31
    },
    "31080": {
        "id": 80,
        "inegiid": 31080,
        "name": "Tekit",
        "stateid": 31
    },
    "31081": {
        "id": 81,
        "inegiid": 31081,
        "name": "Tekom",
        "stateid": 31
    },
    "31082": {
        "id": 82,
        "inegiid": 31082,
        "name": "Telchac Pueblo",
        "stateid": 31
    },
    "31083": {
        "id": 83,
        "inegiid": 31083,
        "name": "Telchac Puerto",
        "stateid": 31
    },
    "31084": {
        "id": 84,
        "inegiid": 31084,
        "name": "Temax",
        "stateid": 31
    },
    "31085": {
        "id": 85,
        "inegiid": 31085,
        "name": "Temozón",
        "stateid": 31
    },
    "31086": {
        "id": 86,
        "inegiid": 31086,
        "name": "Tepakán",
        "stateid": 31
    },
    "31087": {
        "id": 87,
        "inegiid": 31087,
        "name": "Tetiz",
        "stateid": 31
    },
    "31088": {
        "id": 88,
        "inegiid": 31088,
        "name": "Teya",
        "stateid": 31
    },
    "31089": {
        "id": 89,
        "inegiid": 31089,
        "name": "Ticul",
        "stateid": 31
    },
    "31090": {
        "id": 90,
        "inegiid": 31090,
        "name": "Timucuy",
        "stateid": 31
    },
    "31091": {
        "id": 91,
        "inegiid": 31091,
        "name": "Tinum",
        "stateid": 31
    },
    "31092": {
        "id": 92,
        "inegiid": 31092,
        "name": "Tixcacalcupul",
        "stateid": 31
    },
    "31093": {
        "id": 93,
        "inegiid": 31093,
        "name": "Tixkokob",
        "stateid": 31
    },
    "31094": {
        "id": 94,
        "inegiid": 31094,
        "name": "Tixmehuac",
        "stateid": 31
    },
    "31095": {
        "id": 95,
        "inegiid": 31095,
        "name": "Tixpéhual",
        "stateid": 31
    },
    "31096": {
        "id": 96,
        "inegiid": 31096,
        "name": "Tizimín",
        "stateid": 31
    },
    "31097": {
        "id": 97,
        "inegiid": 31097,
        "name": "Tunkás",
        "stateid": 31
    },
    "31098": {
        "id": 98,
        "inegiid": 31098,
        "name": "Tzucacab",
        "stateid": 31
    },
    "31099": {
        "id": 99,
        "inegiid": 31099,
        "name": "Uayma",
        "stateid": 31
    },
    "31100": {
        "id": 100,
        "inegiid": 31100,
        "name": "Ucú",
        "stateid": 31
    },
    "31101": {
        "id": 101,
        "inegiid": 31101,
        "name": "Umán",
        "stateid": 31
    },
    "31102": {
        "id": 102,
        "inegiid": 31102,
        "name": "Valladolid",
        "stateid": 31
    },
    "31103": {
        "id": 103,
        "inegiid": 31103,
        "name": "Xocchel",
        "stateid": 31
    },
    "31104": {
        "id": 104,
        "inegiid": 31104,
        "name": "Yaxcabá",
        "stateid": 31
    },
    "31105": {
        "id": 105,
        "inegiid": 31105,
        "name": "Yaxkukul",
        "stateid": 31
    },
    "31106": {
        "id": 106,
        "inegiid": 31106,
        "name": "Yobaín",
        "stateid": 31
    },
    "32001": {
        "id": 1,
        "inegiid": 32001,
        "name": "Apozol",
        "stateid": 32
    },
    "32002": {
        "id": 2,
        "inegiid": 32002,
        "name": "Apulco",
        "stateid": 32
    },
    "32003": {
        "id": 3,
        "inegiid": 32003,
        "name": "Atolinga",
        "stateid": 32
    },
    "32004": {
        "id": 4,
        "inegiid": 32004,
        "name": "Benito Juárez",
        "stateid": 32
    },
    "32005": {
        "id": 5,
        "inegiid": 32005,
        "name": "Calera",
        "stateid": 32
    },
    "32006": {
        "id": 6,
        "inegiid": 32006,
        "name": "Cañitas de Felipe Pescador",
        "stateid": 32
    },
    "32007": {
        "id": 7,
        "inegiid": 32007,
        "name": "Concepción del Oro",
        "stateid": 32
    },
    "32008": {
        "id": 8,
        "inegiid": 32008,
        "name": "Cuauhtémoc",
        "stateid": 32
    },
    "32009": {
        "id": 9,
        "inegiid": 32009,
        "name": "Chalchihuites",
        "stateid": 32
    },
    "32010": {
        "id": 10,
        "inegiid": 32010,
        "name": "Fresnillo",
        "stateid": 32
    },
    "32011": {
        "id": 11,
        "inegiid": 32011,
        "name": "Trinidad García de la Cadena",
        "stateid": 32
    },
    "32012": {
        "id": 12,
        "inegiid": 32012,
        "name": "Genaro Codina",
        "stateid": 32
    },
    "32013": {
        "id": 13,
        "inegiid": 32013,
        "name": "General Enrique Estrada",
        "stateid": 32
    },
    "32014": {
        "id": 14,
        "inegiid": 32014,
        "name": "General Francisco R. Murguía",
        "stateid": 32
    },
    "32015": {
        "id": 15,
        "inegiid": 32015,
        "name": "El Plateado de Joaquín Amaro",
        "stateid": 32
    },
    "32016": {
        "id": 16,
        "inegiid": 32016,
        "name": "General Pánfilo Natera",
        "stateid": 32
    },
    "32017": {
        "id": 17,
        "inegiid": 32017,
        "name": "Guadalupe",
        "stateid": 32
    },
    "32018": {
        "id": 18,
        "inegiid": 32018,
        "name": "Huanusco",
        "stateid": 32
    },
    "32019": {
        "id": 19,
        "inegiid": 32019,
        "name": "Jalpa",
        "stateid": 32
    },
    "32020": {
        "id": 20,
        "inegiid": 32020,
        "name": "Jerez",
        "stateid": 32
    },
    "32021": {
        "id": 21,
        "inegiid": 32021,
        "name": "Jiménez del Teul",
        "stateid": 32
    },
    "32022": {
        "id": 22,
        "inegiid": 32022,
        "name": "Juan Aldama",
        "stateid": 32
    },
    "32023": {
        "id": 23,
        "inegiid": 32023,
        "name": "Juchipila",
        "stateid": 32
    },
    "32024": {
        "id": 24,
        "inegiid": 32024,
        "name": "Loreto",
        "stateid": 32
    },
    "32025": {
        "id": 25,
        "inegiid": 32025,
        "name": "Luis Moya",
        "stateid": 32
    },
    "32026": {
        "id": 26,
        "inegiid": 32026,
        "name": "Mazapil",
        "stateid": 32
    },
    "32027": {
        "id": 27,
        "inegiid": 32027,
        "name": "Melchor Ocampo",
        "stateid": 32
    },
    "32028": {
        "id": 28,
        "inegiid": 32028,
        "name": "Mezquital del Oro",
        "stateid": 32
    },
    "32029": {
        "id": 29,
        "inegiid": 32029,
        "name": "Miguel Auza",
        "stateid": 32
    },
    "32030": {
        "id": 30,
        "inegiid": 32030,
        "name": "Momax",
        "stateid": 32
    },
    "32031": {
        "id": 31,
        "inegiid": 32031,
        "name": "Monte Escobedo",
        "stateid": 32
    },
    "32032": {
        "id": 32,
        "inegiid": 32032,
        "name": "Morelos",
        "stateid": 32
    },
    "32033": {
        "id": 33,
        "inegiid": 32033,
        "name": "Moyahua de Estrada",
        "stateid": 32
    },
    "32034": {
        "id": 34,
        "inegiid": 32034,
        "name": "Nochistlán de Mejía",
        "stateid": 32
    },
    "32035": {
        "id": 35,
        "inegiid": 32035,
        "name": "Noria de Ángeles",
        "stateid": 32
    },
    "32036": {
        "id": 36,
        "inegiid": 32036,
        "name": "Ojocaliente",
        "stateid": 32
    },
    "32037": {
        "id": 37,
        "inegiid": 32037,
        "name": "Pánuco",
        "stateid": 32
    },
    "32038": {
        "id": 38,
        "inegiid": 32038,
        "name": "Pinos",
        "stateid": 32
    },
    "32039": {
        "id": 39,
        "inegiid": 32039,
        "name": "Río Grande",
        "stateid": 32
    },
    "32040": {
        "id": 40,
        "inegiid": 32040,
        "name": "Sain Alto",
        "stateid": 32
    },
    "32041": {
        "id": 41,
        "inegiid": 32041,
        "name": "El Salvador",
        "stateid": 32
    },
    "32042": {
        "id": 42,
        "inegiid": 32042,
        "name": "Sombrerete",
        "stateid": 32
    },
    "32043": {
        "id": 43,
        "inegiid": 32043,
        "name": "Susticacán",
        "stateid": 32
    },
    "32044": {
        "id": 44,
        "inegiid": 32044,
        "name": "Tabasco",
        "stateid": 32
    },
    "32045": {
        "id": 45,
        "inegiid": 32045,
        "name": "Tepechitlán",
        "stateid": 32
    },
    "32046": {
        "id": 46,
        "inegiid": 32046,
        "name": "Tepetongo",
        "stateid": 32
    },
    "32047": {
        "id": 47,
        "inegiid": 32047,
        "name": "Teul de González Ortega",
        "stateid": 32
    },
    "32048": {
        "id": 48,
        "inegiid": 32048,
        "name": "Tlaltenango de Sánchez Román",
        "stateid": 32
    },
    "32049": {
        "id": 49,
        "inegiid": 32049,
        "name": "Valparaíso",
        "stateid": 32
    },
    "32050": {
        "id": 50,
        "inegiid": 32050,
        "name": "Vetagrande",
        "stateid": 32
    },
    "32051": {
        "id": 51,
        "inegiid": 32051,
        "name": "Villa de Cos",
        "stateid": 32
    },
    "32052": {
        "id": 52,
        "inegiid": 32052,
        "name": "Villa García",
        "stateid": 32
    },
    "32053": {
        "id": 53,
        "inegiid": 32053,
        "name": "Villa González Ortega",
        "stateid": 32
    },
    "32054": {
        "id": 54,
        "inegiid": 32054,
        "name": "Villa Hidalgo",
        "stateid": 32
    },
    "32055": {
        "id": 55,
        "inegiid": 32055,
        "name": "Villanueva",
        "stateid": 32
    },
    "32056": {
        "id": 56,
        "inegiid": 32056,
        "name": "Zacatecas",
        "stateid": 32
    },
    "32057": {
        "id": 57,
        "inegiid": 32057,
        "name": "Trancoso",
        "stateid": 32
    },
    "32058": {
        "id": 58,
        "inegiid": 32058,
        "name": "Santa María de la Paz",
        "stateid": 32
    }
};
//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_md5_typescript__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__);
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
            Email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email])],
            Name: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3)])],
            Gender: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            Phone: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            BirthDate: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            LastName: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            LastName2: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            Password: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(12), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern(this.PASSWORD_REGEX)])],
            PasswordConfirm: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
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
                            isProvider: false,
                            imgUrl: "https://www.gravatar.com/avatar/" + __WEBPACK_IMPORTED_MODULE_0_md5_typescript__["a" /* Md5 */].init(this.Email.value)
                        };
                        if (token)
                            user[token] = token;
                        return [4 /*yield*/, this.db.collection("Users").doc(data.user.uid).set(user)];
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Registrarse</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="formgroup" (ngSubmit)="registerEvent()">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Correo Electrónico</ion-label>\n\n        <ion-input value="" type="email" formControlName="Email"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="Email.errors && Email.dirty">\n\n        <p *ngIf="Email.hasError(\'required\')">El Campo es requerido</p>\n\n        <p *ngIf="Email.hasError(\'email\')">El Correo debe ser valido </p>\n\n        <p *ngIf="Email.hasError(\'invalid\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Nombre(s)</ion-label>\n\n        <ion-input value="" type="text" formControlName="Name"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="Name.errors && Name.dirty">\n\n        <p *ngIf="Name.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Apellido Paterno</ion-label>\n\n        <ion-input value="" type="text" formControlName="LastName"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="LastName.errors && LastName.dirty">\n\n        <p *ngIf="LastName.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Apellido Materno</ion-label>\n\n        <ion-input value="" type="text" formControlName="LastName2"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="LastName2.errors && LastName2.dirty">\n\n        <p *ngIf="LastName2.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Celular/Telefono</ion-label>\n\n        <ion-input value="" type="tel" formControlName="Phone"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="Phone.errors && Phone.dirty">\n\n        <p *ngIf="Phone.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>\n\n          Genero\n\n        </ion-label>\n\n        <ion-select formControlName="Gender">\n\n          <ion-option value="M">Hombre</ion-option>\n\n          <ion-option value="F">Mujer</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="Gender.errors && Gender.dirty">\n\n        <p *ngIf="Gender.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Fecha de Nacimiento</ion-label>\n\n        <ion-datetime displayFormat="DD/MM/YYYY" formControlName="BirthDate"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item *ngIf="BirthDate.errors && BirthDate.dirty">\n\n        <p *ngIf="BirthDate.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Contraseña</ion-label>\n\n        <ion-input type="password" formControlName="Password" [pattern]="PASSWORD_REGEX"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="Password.errors && Password.dirty">\n\n        <p *ngIf="Password.hasError(\'pattern\')">El Campo debe tener almenos una letra mayuscula un numero y un caracter especial</p>\n\n        <p *ngIf="Password.hasError(\'required\')">El Campo es requerido</p>\n\n        <p *ngIf="Password.hasError(\'minlength\')">El minimo de caracteres es 8</p>\n\n        <p *ngIf="Password.hasError(\'maxlength\')">El maximo de caracteres es 12</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Confirmar Contraseña</ion-label>\n\n        <ion-input type="password" formControlName="PasswordConfirm"></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n    <div padding>\n\n      <!-- <button ion-button block color="black" (click)="registerEvent();">Registrarse</button> -->\n\n      <button ion-button full color="primary" [disabled]="!formgroup.valid" style="margin-top: 20px;" type="submit">Registrarse</button>\n\n\n\n    </div>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\register\register.html"*/,
            selector: "page-register"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], Register);
    return Register;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__ = __webpack_require__(74);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, afDB, fcm) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.fcm = fcm;
        this.editorMsg = '';
        this.user = this.afDB.collection("Users").doc(navParams.get("uid")).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (m) {
            return __assign({ $key: navParams.get("uid") }, m.payload.data());
        }));
        this.Provider = this.afDB.collection("Users").doc(navParams.get("puid")).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (m) {
            return __assign({ $key: navParams.get("puid") }, m.payload.data());
        }));
        this.Chat = this.afDB.collection("Chats").doc(navParams.get("chatid")).snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (z) {
            var $key = z.payload.id;
            var data = z.payload.data();
            return __assign({ $key: $key }, data);
        }));
        this.user.subscribe(function (s) { _this.usr = s; });
        this.Provider.subscribe(function (s) {
            _this.prv = s;
        });
        this.Chat.subscribe(function (s) { _this.Msg = s.Messages; });
    }
    ChatPage.prototype.sendMsg = function () {
        if (this.usr && this.prv) {
            if (this.Msg == undefined)
                this.Msg = [];
            this.Msg.push({
                Date: Date.now(),
                Message: this.messageInput.nativeElement.value,
                isProvider: this.usr.isProvider,
                uid: this.usr.$key
            });
            this.pushNewMsg(this.Msg, this.usr.isProvider);
        }
    };
    /**
     * @name pushNewMsg
     * @param msg
     */
    ChatPage.prototype.pushNewMsg = function (msg, isProvider) {
        var _this = this;
        this.afDB.collection("Chats").doc(this.navParams.get("chatid")).update({
            Messages: msg
        }).then(function (s) {
            _this.afDB.collection("NotPush").add({
                token: isProvider ? _this.prv.token : _this.usr.token,
                Message: msg[msg.length - 1].Message,
                Title: "Cotización",
                type: "CHAT",
                date: Date.now()
            });
        });
        this.scrollToBottom();
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    var _a, _b, _c, _d, _e, _f;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]) === "function" && _a || Object)
    ], ChatPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('chat_input'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _b || Object)
    ], ChatPage.prototype, "messageInput", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\chat\chat.html"*/'<ion-header> \n\n  <ion-navbar>\n\n    <ion-title>Cotizar Servicio de {{(Provider|async)?.FirstName}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content> \n\n  <div class="message-wrap"> \n\n    <div *ngFor="let msg of (Chat|async)?.Messages"\n\n         class="message"\n\n         [class.left]="msg.isProvider"\n\n         [class.right]="!msg.isProvider">\n\n      <!-- <img class="user-img" [src]="msg.userAvatar" alt="" src=""> -->\n\n      <!-- <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner> -->\n\n      <div class="msg-detail">\n\n        <div class="msg-info">\n\n          <p>\n\n            {{msg.uid }}\n\n          </p>\n\n        </div>\n\n        <div class="msg-content">\n\n          <span class="triangle"></span>\n\n          <p class="line-breaker ">{{msg.Message}}</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border [style.height]="\'55px\'">\n\n  <div class="input-wrap">\n\n    <!-- <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n\n      <ion-icon name="md-happy"></ion-icon>\n\n    </button> -->\n\n    <textarea #chat_input\n\n              placeholder="Text Input"\n\n              [(ngModel)]="editorMsg"\n\n              (keyup.enter)="sendMsg()"\n\n               >\n\n    </textarea>\n\n    <button ion-button clear icon-only item-right (click)="sendMsg()">\n\n      <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n\n    </button>\n\n  </div> \n\n</ion-footer>'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__["a" /* FCM */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__["a" /* FCM */]) === "function" && _f || Object])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvMainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-prov-main',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\provider\prov-main\prov-main.html"*/'<ion-tabs>\n\n    <ion-tab [root]="provProfileRoot" [rootParams]="uid" tabTitle="Perfil" tabIcon="person"></ion-tab>\n\n    <ion-tab [root]="provRequestRoot" [rootParams]="uid" tabTitle="Solicitudes" tabIcon="information-circle" tabBadgeStyle="danger" [tabBadge]="getContracts((Contracts|async))"></ion-tab>\n\n    <ion-tab [root]="provHistoryRoot" [rootParams]="uid" tabTitle="Historial" tabIcon="md-paper"></ion-tab>\n\n    <ion-tab [root]="provSettingsRoot"[rootParams]="uid" tabTitle="Configuraciones" tabIcon="md-settings"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\provider\prov-main\prov-main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["AngularFireDatabase"]])
    ], ProvMainPage);
    return ProvMainPage;
}());

//# sourceMappingURL=prov-main.js.map

/***/ }),

/***/ 214:
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
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
            ],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/categories/categories.module": [
		555,
		0
	],
	"../pages/chat/chat.module": [
		215
	],
	"../pages/chats/chats.module": [
		270
	],
	"../pages/config/config.module": [
		271
	],
	"../pages/contract-details/contract-details.module": [
		556,
		8
	],
	"../pages/home/home.module": [
		557,
		6
	],
	"../pages/main/main.module": [
		272
	],
	"../pages/profile/profile.module": [
		280
	],
	"../pages/provider/prov-history/prov-history.module": [
		558,
		5
	],
	"../pages/provider/prov-main/prov-main.module": [
		559,
		7
	],
	"../pages/provider/prov-profile/prov-profile.module": [
		560,
		4
	],
	"../pages/provider/prov-request/prov-request.module": [
		561,
		2
	],
	"../pages/provider/prov-settings/prov-settings.module": [
		562,
		1
	],
	"../pages/provider/provider-profile/provider-profile.module": [
		563,
		3
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
webpackAsyncContext.id = 256;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 269:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageModule", function() { return ChatsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chats__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatsPageModule = /** @class */ (function () {
    function ChatsPageModule() {
    }
    ChatsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chats__["a" /* ChatsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chats__["a" /* ChatsPage */]),
            ],
        })
    ], ChatsPageModule);
    return ChatsPageModule;
}());

//# sourceMappingURL=chats.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageModule", function() { return ConfigPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfigPageModule = /** @class */ (function () {
    function ConfigPageModule() {
    }
    ConfigPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ConfigPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ConfigPage */]),
            ],
        })
    ], ConfigPageModule);
    return ConfigPageModule;
}());

//# sourceMappingURL=config.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main__ = __webpack_require__(273);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */]),
            ]
        })
    ], MainPageModule);
    return MainPageModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_fcm__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(150);
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
    function MainPage(navCtrl, toast, afDB, afa, fcm, plat, navParams) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.afDB = afDB;
        this.afa = afa;
        this.fcm = fcm;
        this.plat = plat;
        this.navParams = navParams;
        this.profileRoot = 'ProfilePage';
        this.homeRoot = 'HomePage';
        this.categoriesRoot = 'CategoriesPage';
        // configRoot = 'ConfigPage'
        this.requestRoot = 'ChatsPage';
        this.uid = navParams.get("uid");
        this.Contracts = this.afDB.collection("Users").doc(this.uid.toString()).collection("Contracts").valueChanges();
    }
    MainPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.plat.is("cordova"))
            this.fcm.onTokenRefresh().subscribe(function (token) {
                _this.afDB.collection("Users").doc(_this.uid.toString()).update({
                    token: token
                });
            });
    };
    MainPage.prototype.logout = function () {
        var _this = this;
        this.afa.auth.signOut().then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* WelcomePage */]);
        });
    };
    MainPage.prototype.getContracts = function (contracts) {
        if ((contracts != null || contracts != undefined))
            return contracts.filter(function (item) { return !item.has_viewed; }).length;
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\main\main.html"*/'<ion-tabs color="primary">\n\n    <ion-tab [root]="profileRoot" [rootParams]="uid" tabTitle="Perfil"  tabIcon="person"></ion-tab>\n\n    <ion-tab [root]="homeRoot" [rootParams]="uid" tabTitle="Top" tabIcon="md-star"></ion-tab>\n\n    <ion-tab [root]="requestRoot" [rootParams]="uid" tabTitle="Solicitudes" tabIcon="ios-chatboxes" \n\n    tabBadgeStyle="danger" [tabBadge]="getContracts((Contracts|async))"></ion-tab>\n\n    <ion-tab [root]="categoriesRoot" [rootParams]="uid" tabTitle="Categorias" tabIcon="list"></ion-tab>\n\n    <!-- <ion-tab [root]="null" tabTitle="LogOut" tabIcon="list"  (ionSelect)="logout()"> ></ion-tab> -->\n\n    \n\n    <!-- <ion-tab [root]="configRoot" tabTitle="Configuracion" tabIcon="settings"></ion-tab> -->\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\main\main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UbicacionSVC; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__ = __webpack_require__(277);
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

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterProvPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Providers_catalogos_catalogos__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_alert_alert_controller__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__);
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
        this.Themes = this.cat.getThemes();
        this.formgroup = fbuild.group({
            FirstName: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('^[\u00F1A-Za-z _]*[\u00F1A-Za-z][\u00F1A-Za-z _]*'), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            CompanyName: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3)])],
            Description: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(15)])],
            Phone: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[0-9 ]*'), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            Address: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            State: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            NoExt: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(8), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[0-9 ]*'), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            CP: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern(this.CP_REGEX), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            City: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            Name: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            LastName: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            LastName2: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            Email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email])],
            EmailConfirm: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email])],
            Theme: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            Category: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            SubCategory: [''],
            Password: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(12), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern(this.PASSWORD_REGEX)])],
            PasswordConfirm: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
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
        this.Theme = this.formgroup.controls['Theme'];
        this.Category = this.formgroup.controls['Category'];
        this.Subcategory = this.formgroup.controls['SubCategory'];
        this.Categories = this.cat.getThemes();
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
                    Theme: self.Theme.value,
                    Category: self.Category.value,
                    SubCategory: self.Subcategory.value,
                    lastPayment: Date.now(),
                    // ComposeQuery: `${self.City.value}_${self.Category.value}_${self.Subcategory.value}_${self.Subcategory2.value}`,
                    isProvider: true
                };
                _this.fcm.getToken().then(function (token) {
                    _this.afDB.collection("Providers").doc(data.uid).set(prov);
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
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
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
        this.afDB.collection("Users").doc(uid).set(data)
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
    RegisterProvPage.prototype.getCategories = function (theme) {
        this.Categories = this.cat.getCategories(theme);
    };
    RegisterProvPage.prototype.getSubCategories = function (Cat) {
        this.SubCategories = this.cat.getSubCategories(Cat, this.Theme.value);
    };
    RegisterProvPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-register-prov',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\provider\register-prov\register-prov.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Registrar Proveedor</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="formgroup" (ngSubmit)="registerEvent()" >\n\n    <ion-list>\n\n      <h3> Datos del Proveedor</h3>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>\n\n          Razon Social\n\n        </ion-label>\n\n        <ion-input type="text" formControlName="FirstName"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="FirstName.errors && FirstName.dirty">\n\n        <p *ngIf="FirstName.hasError(\'required\')">El Campo es requerido</p>\n\n        <p *ngIf="FirstName.hasError(\'minlength\')">minimo de 3 caracteres</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Nombre Comercial</ion-label>\n\n        <ion-input type="text" formControlName="CompanyName"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="CompanyName.errors && CompanyName.dirty">\n\n        <p *ngIf="CompanyName.hasError(\'required\')">El Campo es requerido</p>\n\n        <p *ngIf="CompanyName.hasError(\'minlength\')">minimo de 3 caracteres</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Descripción</ion-label>\n\n        <ion-input type="text" formControlName="Description"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="Description.errors && Description.dirty">\n\n        <p *ngIf="Description.hasError(\'required\')">El Campo es requerido</p>\n\n        <p *ngIf="Description.hasError(\'minlength\')">minimo de 15 caracteres</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>\n\n          Teléfono\n\n        </ion-label>\n\n        <ion-input ion-input type="tel" formControlName="Phone"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="Phone.errors && Phone.dirty">\n\n        <p *ngIf="Phone.hasError(\'pattern\')">Debe ser numerico y debe ser de 10 digitos</p>\n\n        <p *ngIf="Phone.hasError(\'required\')">El Campo es requerido</p>\n\n        <p *ngIf="Phone.hasError(\'minlength\')">minimo de 10 caracteres</p>\n\n      </ion-item>\n\n\n\n      <h3>\n\n        Dirección\n\n      </h3>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>\n\n          Calle\n\n        </ion-label>\n\n        <ion-input type="text" formControlName="Address"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="Address.errors && Address.dirty">\n\n        <p *ngIf="Address.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>\n\n          Numero Exterior\n\n        </ion-label>\n\n        <ion-input ion-input type="number" formControlName="NoExt"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="NoExt.errors && NoExt.dirty">\n\n        <p *ngIf="NoExt.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Numero Interior</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Código Postal</ion-label>\n\n        <ion-input ion-input type="number" formControlName="CP"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="CP.errors && CP.dirty">\n\n        <p *ngIf="CP.hasError(\'required\')">El Campo es requerido</p>\n\n        <p *ngIf="CP.hasError(\'pattern\')">Debe ser un formato valido </p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>\n\n          Estado\n\n        </ion-label>\n\n        <ion-select formControlName="State" (ionChange)="getCities($event)">\n\n          <ion-option *ngFor="let item of States|async" [value]="item.$key">{{item.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="State.errors && State.dirty">\n\n        <p *ngIf="State.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item *ngIf="State!=null">\n\n        <ion-label color="primary" floating>\n\n          Ciudad\n\n        </ion-label>\n\n        <ion-select formControlName="City">\n\n          <ion-option *ngFor="let item of Cities|async" [value]="item.$key">{{item.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="City.errors && City.dirty">\n\n        <p *ngIf="City.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <h3>\n\n        Redes Sociales\n\n      </h3>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>\n\n          <ion-icon color="facebook" name="logo-facebook"></ion-icon>\n\n          Facebook</ion-label>\n\n        <ion-input ion-input type="url"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>\n\n          <ion-icon color="whatsapp" name="logo-whatsapp"></ion-icon>\n\n          WhatsApp\n\n        </ion-label>\n\n        <ion-input ion-input type="tel"></ion-input>\n\n      </ion-item>\n\n      <h3>\n\n        Datos de Contacto\n\n      </h3>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Nombre(s)</ion-label>\n\n        <ion-input type="text" formControlName="Name"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="Name.errors && Name.dirty">\n\n        <p *ngIf="Name.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Apellido Paterno</ion-label>\n\n        <ion-input type="text" formControlName="LastName"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="LastName.errors && LastName.dirty">\n\n        <p *ngIf="LastName.hasError(\'required\')">El Campo es requerido</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Apellido Materno</ion-label>\n\n        <ion-input type="text" formControlName="LastName2"></ion-input>\n\n      </ion-item>\n\n      <h3>\n\n        Datos de Acceso\n\n      </h3>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Correo Eléctronico</ion-label>\n\n        <ion-input type="email" formControlName="Email" required validateEqual="EmailConfirm" reverse="true"></ion-input>\n\n        <ion-item *ngIf="Email.errors && Email.dirty">\n\n          <p *ngIf="Email.hasError(\'required\')">El campo es requerido</p>\n\n          <p *ngIf="Email.hasError(\'email\')">El Correo debe ser valido </p>\n\n        </ion-item>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Confirmar Correo Eléctronico</ion-label>\n\n        <ion-input type="email" formControlName="EmailConfirm" required validateEqual="Email" reverse="true"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="Email.errors && Email.dirty">\n\n        <p *ngIf="Email.value != formgroup.get(\'EmailConfirm\').value">Debe ser igual al campo Correo Electrónico </p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Contraseña</ion-label>\n\n        <ion-input type="password" [pattern]="PASSWORD_REGEX" formControlName="Password"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="Password.errors && Password.dirty">\n\n        <p *ngIf="Password.hasError(\'required\')">El campo es requerido</p>\n\n        <p *ngIf="Password.hasError(\'minlength\')">Debe tener minimo 8 caracteres</p>\n\n        <p *ngIf="Password.hasError(\'pattern\')">Debe tener almenos\n\n          <ul style="color:gray; font-size: 12px">\n\n            <li>una letra mayuscula</li>\n\n            <li>un Número </li>\n\n            <li>un Caracter Especial ($#%&amp34)</li>\n\n          </ul>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Confirmar Contraseña</ion-label>\n\n        <ion-input type="password" formControlName="PasswordConfirm"></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="Password.value !=  formgroup.get(\'PasswordConfirm\').value">Debe coincidir con la contraseña</p>      \n\n      <ion-item>\n\n        <ion-label color="primary" floating>\n\n          Tema\n\n        </ion-label>\n\n        <ion-select formControlName="Theme" (ionChange)="getCategories($event)">\n\n          <ion-option *ngFor="let tema of Themes|async" [value]="tema.$key">{{tema.Name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="Theme!=null">\n\n        <ion-label color="primary" floating>\n\n          Categoria\n\n        </ion-label>\n\n        <ion-select formControlName="Category" (ionChange)="getSubCategories($event)">\n\n          <ion-option *ngFor="let cat of Categories|async" [value]="cat.$key">{{cat.Name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="Category != null">\n\n        <ion-label color="primary" floating>\n\n          Sub Categoria\n\n        </ion-label>\n\n        <ion-select formControlName="SubCategory">\n\n          <ion-option *ngFor="let subc of SubCategories|async" [value]="subc.$key">{{subc.Name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n    <div padding>\n\n      <!-- <button ion-button block color="black" (click)="registerEvent();">Registrarse</button> -->\n\n      <button ion-button full color="primary" [disabled]="!formgroup.valid" style="margin-top: 20px;" type="submit">Registrarse</button>\n\n    </div>\n\n\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\provider\register-prov\register-prov.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_0__Providers_catalogos_catalogos__["a" /* CatalogosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_auth__["a" /* Auth */]])
    ], RegisterProvPage);
    return RegisterProvPage;
}());

//# sourceMappingURL=register-prov.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(58);
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
                        return [4 /*yield*/, user.user.sendEmailVerification()];
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

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(281);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Providers_User__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, usersvc, afDB, lCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersvc = usersvc;
        this.afDB = afDB;
        this.lCtrl = lCtrl;
        this.uid = navParams.data;
        var spinload = this.lCtrl.create({
            content: "Cargando, por favor espere...",
            spinner: "dots"
        });
        spinload.present();
        // this.user = this.usersvc.getUser()
        this.user = this.afDB.collection("Users").doc(this.uid).valueChanges();
        this.user.subscribe(function (s) {
            console.log(s);
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
            imgUrl: user.imgUrl
        }).catch(function (c) {
            alert("No se a podido guardar la información");
        });
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true" color="primary">\n\n    <ion-title>Perfil</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="saveProfile(user)">\n\n        <ion-icon name="md-cloud-upload"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding color="black">\n\n  <!-- <div id="profile-bg" [style.backgroundImage]="\'url(\' + (user|async)?.images?.two + \')\' "></div> -->\n\n  <div id="profile-bg" style="background:url(\'../assets/imgs/profile/back-user2.png\'); background-size: cover;"></div>\n\n  <div id="content">\n\n    <div id="profile-info">\n\n      <img id="profile-image" [src]="(user|async)?.imgUrl">\n\n      <h3 id="profile-name">\n\n        {{ (user | async)?.FirstName + \' \' +(user | async)?.LastName + \' \'+ (user | async)?.LastName2 }}\n\n      </h3>\n\n      <h4>\n\n          <ion-icon name="mail"></ion-icon> {{ (user | async)?.Email }}\n\n      </h4>\n\n      <h4>\n\n          <ion-icon name="phone"></ion-icon>{{ (user | async)?.Phone }} \n\n      </h4>\n\n    </div>\n\n    <div>\n\n      <ion-grid>\n\n        <ion-row style="text-align: center;color:#000">\n\n          <ion-col>\n\n            <label>\n\n              {{ getCountContracted((user | async)?.Contracted)}}\n\n            </label>\n\n            <br>\n\n            <label>\n\n              Contrataciones\n\n            </label>\n\n          </ion-col>\n\n          <ion-col>\n\n            <label>\n\n              {{getComments((user | async)?.Comments)}}\n\n            </label>\n\n            <br>\n\n            <label>\n\n              Comentarios\n\n            </label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n\n\n  <!-- \n\n  <ion-grid>\n\n    <ion-row class="text-center">\n\n      <ion-col col-4> \n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <img src="{{(user|async)?.img}}" alt="" class="profile-img">\n\n      </ion-col>\n\n      <ion-col col-4> \n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="text-center">\n\n      <ion-col></ion-col>\n\n      <ion-col col-10>\n\n        <h4>{{ (user | async)?.FirstName + \' \' +(user | async)?.LastName + \' \'+ (user | async)?.LastName2 }}</h4>\n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n    <ion-row class="text-center">\n\n      <ion-col col-2></ion-col>\n\n      <ion-col col-8>\n\n        <ion-icon name="mail"></ion-icon> {{ (user | async)?.Email }}\n\n      </ion-col>\n\n      <ion-col col-2>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-2></ion-col>\n\n      <ion-col col-8 class="text-center">\n\n          <ion-icon name="phone"></ion-icon>\n\n          <ion-input type="text" [ngModel]="(user | async)?.Phone" ></ion-input>\n\n       \n\n      </ion-col>\n\n      <ion-col col-2></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col></ion-col>\n\n      <ion-col col-10>\n\n        <!-- <button ion-button block color="black" (click)="goToDetails(user)">Más Detalle</button> \n\n      \n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row> \n\n    <ion-row>\n\n      <ion-col></ion-col>\n\n      <ion-col>\n\n        <div class="rounded-last-view" *ngFor="let prov of  getProviders((user|async)?.LastView) |async" >\n\n          {{(prov|async)?.CompanyName}} \n\n         </div> \n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content> \n\n<ion-footer>\n\n  <div color="black" >\n\n    <ion-row>\n\n      <ion-col text-center>\n\n        <div class="primary">\n\n        <h5>{{ getCountContracted((user | async)?.Contracted) }}</h5>\n\n        </div>\n\n        Contrataciones\n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n      <ion-col text-center>\n\n        <div>\n\n         <h5>{{ getComments((user | async)?.Comments) }}</h5>\n\n        </div>\n\n        Comentarios\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-footer> -->'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__Providers_User__["a" /* UserSCV */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 322:
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

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_proveedores__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_modal_modal_controller__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comments_comments__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_alert_alert_controller__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contract_details_contract_details__ = __webpack_require__(327);
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
            selector: 'page-details',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\details\details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{(Provider|async)?.CompanyName}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-slides pager autoplay="5000" loop="true" speed="3000">\n\n    <ion-slide style="background-image:url(\'http://c8.alamy.com/comp/D031R1/seamless-background-pattern-with-various-drinks-cocktails-abstract-D031R1.jpg\')">\n\n    </ion-slide>\n\n    <ion-slide style="background-image:url(\'https://lanocheenvino.com/wp-content/uploads/home-vinoteca-murillo-02.jpg\');">\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-item class="transparency item-rating" style="    margin-top: -60px;z-index: 1000;">\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <span color="primary" icon-left clear nopadding *ngFor="let classname of createRating( (Provider | async)?.rating); let currindex = index"\n\n            (click)="RateProvider(currindex)">\n\n            <ion-icon color="yellow" name="{{classname}}"></ion-icon>\n\n          </span>\n\n        </ion-col>\n\n        <ion-col>\n\n          <span icon-rigth clear large style="color:#fff;float: right;" (click)="OnClickComments()">\n\n  \n\n            <ion-icon name="text"></ion-icon>\n\n            <span color="primary" style="width: 100%; text-align: right">\n\n              {{ getTotalComments((Provider | async)?.Comments) }}</span>\n\n          </span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  <button ion-button full color="primary" (click)="onContract((prove))" floating>Contratar</button>\n\n  <!-- <ion-item>\n\n        <h2>\n\n            {{(Provider|async)?.CompanyName}}\n\n        </h2>\n\n    </ion-item> -->\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\details\details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__["a" /* ObserverProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_2__services_proveedores__["a" /* ProveedorService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_modal_modal_controller__["a" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Providers_catalogos_catalogos__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigPage = /** @class */ (function () {
    function ConfigPage(navCtrl, cat, afDB, viewCtrl) {
        this.navCtrl = navCtrl;
        this.cat = cat;
        this.afDB = afDB;
        this.viewCtrl = viewCtrl;
        this.States = this.cat.getStates();
    }
    ConfigPage.prototype.dismiss = function () {
        var data = { city: this.City.value, state: this.State.value };
        this.viewCtrl.dismiss(data);
    };
    // async takePhoto() {
    //   const options: CameraOptions = {
    //     quality: 50,
    //     targetHeight: 600,
    //     targetWidth: 600,
    //     destinationType: this.camera.DestinationType.DATA_URL,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     mediaType: this.camera.MediaType.PICTURE
    //   }
    //   const result = await this.camera.getPicture(options)
    //   const image = `data:image/jpegbase64,${result}`;
    //   const pictures = storage().ref('pictures');
    //   pictures.putString(image, 'data_url');
    // }
    ConfigPage.prototype.getCities = function (stateid) {
        this.Cities = this.cat.getCities(stateid);
    };
    ConfigPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfigPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("City"),
        __metadata("design:type", Object)
    ], ConfigPage.prototype, "City", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("State"),
        __metadata("design:type", Object)
    ], ConfigPage.prototype, "State", void 0);
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\config\config.html"*/'<!--\n\n  Generated template for the ConfigPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Config</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label color="primary" floating>\n\n        Estado\n\n      </ion-label>\n\n      <ion-select #State (ionChange)="getCities($event)">\n\n        <ion-option *ngFor="let item of States|async" [value]="item.$key">{{item.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item *ngIf="State!=null">\n\n      <ion-label color="primary" floating>\n\n        Ciudad\n\n      </ion-label>\n\n      <ion-select #City>\n\n        <ion-option *ngFor="let item of Cities|async" [value]="item.$key">{{item.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" floating>\n\n        Codigo Postal\n\n      </ion-label>\n\n      <ion-input type=""></ion-input> \n\n    </ion-item>\n\n    <ion-item> \n\n      <button ion-button item-end (click)="dismiss()">\n\n        Filtrar\n\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\config\config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__Providers_catalogos_catalogos__["a" /* CatalogosProvider */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{Name}}</ion-title>\n\n    <ion-toolbar>\n\n      <ion-buttons start>\n\n      </ion-buttons>\n\n      <ion-searchbar [(ngModel)]="query"></ion-searchbar> \n\n      <ion-buttons end>\n\n        <button ion-button icon-only>\n\n          <ion-icon name="more"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="(Providers |async)?.length < 1">\n\n   \n\n    <div text-center>\n\n        Sin resultados\n\n      <img width="200" height="150" src="assets/imgs/searching.png"/>\n\n    </div>\n\n  </div>\n\n  <ion-list>\n\n    <ion-item>\n\n      <div item-left class="logo">\n\n        <img src="">\n\n      </div>\n\n      <ion-card style="border-left: 3px solid #ffae00" *ngFor="let prov of Providers | async |search:\'CompanyName,Description\':query "\n\n        (click)="itemTapped($event,prov, prov.$value, prov.$key)">\n\n\n\n        <ion-row>\n\n          <ion-col width-80>\n\n            <strong> {{prov.CompanyName}}</strong>\n\n          </ion-col>\n\n          <ion-col width-20 text-right>\n\n            <ion-badge *ngIf="getRating(prov.rating)==0" color="secondary">Nuevo</ion-badge>\n\n            <span *ngIf="getRating(prov.rating)>0">\n\n              <ion-icon color="yellow" style=" text-shadow: 1px 1px 1px rgb(54, 63, 0);" name="md-star"></ion-icon>\n\n              <!-- <ion-icon *ngFor="let item of ; let currindex = index" name="{{item}}"></ion-icon> -->\n\n              <span style="color:black;">{{getRating(prov.rating)}} </span>\n\n              <span style="color:gray">({{TotalRating(prov.rating)}}) </span>\n\n            </span>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-card-content>\n\n          <div class="text-description">\n\n            <div col-9>\n\n              {{ ( prov.Description.length>100)? ( prov.Description | slice:0:100)+\'..\':( prov.Description) }}\n\n            </div>\n\n            <div col-3> \n\n              <button (click)="Cotizar(prov)">Cotizar </button>\n\n            </div>\n\n          </div>\n\n          <div class="item-note" item-end>\n\n\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__["a" /* ObserverProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-contract-details',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\contract-details\contract-details.html"*/'<!--\n\n  Generated template for the ContractDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ContractDetails</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\contract-details\contract-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ContractDetailsPage);
    return ContractDetailsPage;
}());

//# sourceMappingURL=contract-details.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipex_pipex__ = __webpack_require__(515);
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

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(463);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_chat_chat_module__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_chats_chats_module__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_config_config_module__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_fcm__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Providers_ubicacion__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Providers_User__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_pipes_module__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_proveedores__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_geocoder__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile_module__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_main_main_module__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_list_list__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_provider_register_prov_register_prov__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_welcome_welcome__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_register_register__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_profile_profile__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_credentials__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Providers_catalogos_catalogos__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_common_http__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_http__ = __webpack_require__(554);
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


// import { AngularFireStorage } from "angularfire2/storage";

//views



// import { CommentsPage } from '../pages/comments/comments';

// import { DetailsPage } from '../pages/details/details';


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

// import { ObserverProvider } from '../Providers/observer/observer';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                // MainPage,
                __WEBPACK_IMPORTED_MODULE_20__pages_list_list__["a" /* ListPage */],
                // DetailsPage,
                __WEBPACK_IMPORTED_MODULE_22__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* Register */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_provider_register_prov_register_prov__["a" /* RegisterProvPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chats/chats.module#ChatsPageModule', name: 'ChatsPage', segment: 'chats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contract-details/contract-details.module#ContractDetailsPageModule', name: 'ContractDetailsPage', segment: 'contract-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/config/config.module#ConfigPageModule', name: 'ConfigPage', segment: 'config', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_28__services_credentials__["a" /* firebaseConfig */], 'labatanga'),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_18__pages_main_main_module__["MainPageModule"],
                __WEBPACK_IMPORTED_MODULE_2__pages_config_config_module__["ConfigPageModule"],
                __WEBPACK_IMPORTED_MODULE_1__pages_chats_chats_module__["ChatsPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__pages_chat_chat_module__["ChatPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_22__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_list_list__["a" /* ListPage */],
                // DetailsPage,
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* Register */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_provider_register_prov_register_prov__["a" /* RegisterProvPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__services_auth__["a" /* Auth */],
                __WEBPACK_IMPORTED_MODULE_8__Providers_User__["a" /* UserSCV */],
                __WEBPACK_IMPORTED_MODULE_11__services_proveedores__["a" /* ProveedorService */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                // Facebook,
                // Network,
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_7__Providers_ubicacion__["a" /* UbicacionSVC */],
                // FileTransfer,
                // FileTransferObject,
                // File,
                // Camera,
                // Badge,
                __WEBPACK_IMPORTED_MODULE_29__Providers_catalogos_catalogos__["a" /* CatalogosProvider */],
                // PayPal,
                // ObserverProvider,
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_fcm__["a" /* FCM */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
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
    CommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-comments',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\comments\comments.html"*/'<!--\n\n  Generated template for the CommentsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header> \n\n  <ion-navbar color="primary">\n\n    <ion-title>Comentarios</ion-title>\n\n  </ion-navbar> \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let  com of Comments |async" color="light">\n\n      <ion-card-header>\n\n          <strong> {{(com.user|async)?.FirstName + " " + (com.user|async)?.LastName }} </strong> \n\n          <ion-badge style="font-size:50%" float-right>{{com.time| timeAgo}}</ion-badge>\n\n         \n\n      </ion-card-header>\n\n    <ion-card-content text-wrap> \n\n      {{com.comment}} \n\n    </ion-card-content>\n\n  \n\n  </ion-card> \n\n</ion-content>\n\n'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\comments\comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__["a" /* ObserverProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */]])
    ], CommentsPage);
    return CommentsPage;
}());

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 515:
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

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_chat__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(15);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatsPage = /** @class */ (function () {
    function ChatsPage(navCtrl, navParams, afDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        var uid = navParams.data;
        this.Chats = this.afDB.collection("Chats", function (ref) { return ref
            .where("UserUid", "==", uid)
            .where("Status", "==", "N"); }).snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (m) { return m.map(function (z) {
            var $key = z.payload.doc.id;
            var data = z.payload.doc.data();
            return __assign({ $key: $key }, data);
        }); }));
        // this.Chats.subscribe(s=>{
        //   s.map(m=>{
        //     this.Provider = this.afDB.collection("Providers",r=>r.where("uid"))
        //   })
        // })
    }
    ChatsPage.prototype.onPressChat = function (chatid, ProviderUid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__chat_chat__["a" /* ChatPage */], { chatid: chatid, uid: this.navParams.data, puid: ProviderUid });
    };
    ChatsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatsPage');
    };
    ChatsPage.prototype.getLatestMessage = function (message) {
        if (message == undefined)
            return "Enviar mensaje a //TODO Nombre del proveedor";
        return message[message.length - 1].Message;
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\chats\chats.html"*/'<!--\n\n  Generated template for the ChatsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Chats</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-list >\n\n  <ion-item *ngFor="let chat of Chats|async" (click)="onPressChat(chat.$key,chat.ProviderUid)" >\n\n   <div *ngIf="chat.Messages" >\n\n    {{getLatestMessage(chat.Messages)}}\n\n   </div>\n\n  </ion-item>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\chats\chats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__["AngularFirestore"]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_prov_main_prov_main__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__ = __webpack_require__(522);
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
            selector: 'page-payment',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\payment\payment.html"*/'<!--\n\n  Generated template for the PaymentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Contratar Servicio</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n \n\n  <form name="paymentForm">\n\n		<ion-item>\n\n			<ion-label floating>Amount</ion-label>\n\n			<ion-input type="text" name="amount" [(ngModel)]="payment.amount"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Currency</ion-label>\n\n			<ion-select [(ngModel)]="payment.currency" name="currency">\n\n				<ion-option value="{{currency}}" *ngFor="let currency of currencies">{{currency}}</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Description</ion-label>\n\n			<ion-input type="text" name="description" [(ngModel)]="payment.shortDescription"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Tiempo</ion-label>\n\n			<ion-input type="text" name="intent" [(ngModel)]="months"></ion-input>\n\n		</ion-item>\n\n		<p>\n\n			<button ion-button block color="secondary" (click)="makePayment()">Realizar Pago</button>\n\n		</p>\n\n</form> \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__Providers_observer_observer__["a" /* ObserverProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__["a" /* PayPal */], __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["AngularFirestore"]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(58);
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
            selector: 'page-forget',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\forget\forget.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-title>\n\n       Recuperar contraseña\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <form [formGroup]="resetPasswordForm" (submit)="resetPassword()" novalidate>\n\n  \n\n      <ion-item>\n\n        <ion-label stacked>Correo Electrónico</ion-label>\n\n        <ion-input formControlName="email" type="email" placeholder="Tu dirección de correo"\n\n          [class.invalid]="!resetPasswordForm.controls.email.valid  "></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!resetPasswordForm.controls.email.valid">\n\n        <p>Por favor inserte un correo electrónico valido.</p>\n\n      </ion-item>\n\n  \n\n      <button ion-button block type="submit">\n\n        Recuperar Contraseña\n\n      </button>\n\n  \n\n    </form>\n\n  \n\n  </ion-content>'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\forget\forget.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ForgetPage);
    return ForgetPage;
}());

//# sourceMappingURL=forget.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_credentials__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(544);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\app\app.html"*/' <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\proys\ionic\labatanga\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 93:
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

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Providers_User__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forget_forget__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provider_prov_main_prov_main__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\login\login.html"*/'<!-- <ion-content  margin-vertical padding-vertical padding class="backgroundi-img bg">\n\n  <div text-center> \n\n   </div>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating> Correo Electronico</ion-label>\n\n      <ion-input type="text" value="invalidtruck@msn.com" #Email></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Contraseña</ion-label>\n\n      <ion-input type="password" #Password value="123456"> </ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list> \n\n  <ion-footer>\n\n    <ion-toolbar>\n\n      <div text-center> \n\n        <a href="#" color="primary" (click)="GoToForget();" >¿Olvidaste tu Contraseña?</a>\n\n      </div>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n</ion-content> -->\n\n<ion-content class="bg background">\n\n  <form [formGroup]="formgroup">\n\n    <div class="hue">\n\n      <!-- <h1>LA BATANGA</h1>  -->\n\n      <ion-card>\n\n        <ion-card-header>\n\n          Iniciar Sesión\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <ion-list no-lines>\n\n            <ion-item>\n\n              <ion-label floating color="primary">Correo Electrónico</ion-label>\n\n              <ion-input color="primary" type="email"  formControlName="Email"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating color="primary">Contraseña</ion-label>\n\n              <ion-input color="primary" type="password" formControlName="Password"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <p>¿Olvidaste tu Contraseña?\n\n                <a (click)="GoToForget();"> Presiona aqui</a>\n\n              </p>\n\n            </ion-item>\n\n\n\n            <button ion-button round block color="primary" [disabled]="!formgroup.valid" (click)="GoToLogin();">Loguearse</button>\n\n            <button ion-button round block color="primary"  (click)="GoToLoginDebug();">Debug</button>\n\n          </ion-list>\n\n          <!-- <b>OR</b>\n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button icon-left block>\n\n          <ion-icon name="logo-facebook"></ion-icon>\n\n          <div>login with facebook</div>\n\n        </button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button icon-left color="danger" block>\n\n          <ion-icon name="logo-google"></ion-icon>\n\n          <div>login with Google</div>\n\n        </button>\n\n          </ion-col>\n\n        </ion-row>\n\n   -->\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </div>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1__Providers_User__["a" /* UserSCV */],
            __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[330]);
//# sourceMappingURL=main.js.map