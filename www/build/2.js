webpackJsonp([2],{

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvRequestPageModule", function() { return ProvRequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prov_request__ = __webpack_require__(610);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProvRequestPageModule = /** @class */ (function () {
    function ProvRequestPageModule() {
    }
    ProvRequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__prov_request__["a" /* ProvRequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__prov_request__["a" /* ProvRequestPage */]),
            ],
        })
    ], ProvRequestPageModule);
    return ProvRequestPageModule;
}());

//# sourceMappingURL=prov-request.module.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_detail_request_detail__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__);
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
 * Generated class for the ProvRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProvRequestPage = /** @class */ (function () {
    function ProvRequestPage(navCtrl, navParams, modalCtrl, afDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.afDB = afDB;
        this.uid = navParams.data;
        this.Contracts = this.afDB.collection("Providers/" + this.uid + "/Contracts", function (ref) { return ref.where("status", "==", "A"); })
            .snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (items) {
            return items.map(function (com) {
                var con = com.payload.doc.data();
                return {
                    key: con.$key,
                    // user: this.afDB.doc("Users/" + con..UserID).valueChanges(),
                    // Description: com.payload,
                    // timestamp: com.payload.val().timestamp,
                    time: con.contracted_date
                };
            });
        }));
    }
    ProvRequestPage.prototype.onAccept = function (key) {
        var contract = this.afDB.doc("Providers/" + this.uid + "/Contracts/" + key);
        contract.update({
            status: "D",
            composeview: "D_true",
            viewed: true
        });
    };
    ProvRequestPage.prototype.onReview = function (key) {
        var contract = this.afDB.doc("Providers/" + this.uid + "/Contracts/" + key);
        contract.update({
            composeview: "A_true",
            viewed: true
        });
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__request_detail_request_detail__["a" /* RequestDetailPage */], { uid: this.uid, key: key });
        profileModal.present();
    };
    ProvRequestPage.prototype.onCancel = function (key) {
        var contract = this.afDB.doc("Providers/" + this.uid + "/Contracts/" + key);
        contract.update({
            status: "C",
            composeview: "C_true",
            viewed: true
        });
    };
    ProvRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProvRequestPage');
    };
    ProvRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-prov-request',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\provider\prov-request\prov-request.html"*/'<!--\n\n  Generated template for the ProvRequestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>prov-request</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let con of (Contracts|async)">\n\n      <ion-item [ngClass]="(con !=null && con.viewed ) ? \'\':\'notview\'">\n\n        <h2>{{(con.user|async)?.FirstName}}</h2>\n\n        <label>{{con.Description}}</label>\n\n        <label>Tiempo:{{(con.time)}}</label>\n\n\n\n      </ion-item>\n\n      <ion-item-options side="left">\n\n        <button ion-button color="secondary" (click)="onAccept(con.key)">\n\n          <ion-icon style="color:white" name="md-checkmark-circle"></ion-icon>\n\n          Aceptar\n\n        </button>\n\n        <button ion-button color="primary" (click)="onReview(con.key)">\n\n          <ion-icon style="color:white" name="md-trash"></ion-icon>\n\n          Revisar\n\n        </button>\n\n        <button ion-button color="danger" (click)="onCancel(con.key)">\n\n          <ion-icon style="color:white" name="md-trash"></ion-icon>\n\n          Cancelar\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\provider\prov-request\prov-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"]])
    ], ProvRequestPage);
    return ProvRequestPage;
}());

//# sourceMappingURL=prov-request.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Providers_User__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// @IonicPage()
var RequestDetailPage = /** @class */ (function () {
    function RequestDetailPage(navCtrl, afDB, usrsvc, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.usrsvc = usrsvc;
        this.navParams = navParams;
        this.uid = navParams.get("uid");
        usrsvc.getUser().toPromise().then(function (e) {
            // let key = navParams.get("key")
            _this.afDB.doc("Providers/" + _this.uid + "/Contracts/" + e.$key)
                .snapshotChanges().subscribe(function (s) {
                _this.request = s.payload.data();
                _this.getUser(s.payload.data().UserID);
            });
        });
    }
    RequestDetailPage.prototype.getUser = function (UserID) {
        var _this = this;
        var subuser = this.afDB.collection("Users").doc(UserID).snapshotChanges()
            .subscribe(function (s) {
            _this.user = s.payload.data();
        });
    };
    RequestDetailPage.prototype.getUserName = function (user) { return user ? user.FirstName + " " + user.LastName + " " + user.LastName2 : ""; };
    RequestDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestDetailPage');
    };
    RequestDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-request-detail',template:/*ion-inline-start:"C:\proys\ionic\labatanga\src\pages\provider\request-detail\request-detail.html"*/'<!--\n\n  Generated template for the RequestDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detalles</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-card>\n\n  <ion-item>\n\n    <h2>{{getUserName(user)}} </h2>\n\n    <p></p>\n\n  </ion-item> \n\n  <ion-card-content>\n\n    <p>{{request?.Description}} en {{request?.time}}</p>\n\n    <p>\n\n      <img [src]="request?.img">\n\n    </p>\n\n  </ion-card-content> \n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\proys\ionic\labatanga\src\pages\provider\request-detail\request-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_3__Providers_User__["a" /* UserSCV */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], RequestDetailPage);
    return RequestDetailPage;
}());

//# sourceMappingURL=request-detail.js.map

/***/ })

});
//# sourceMappingURL=2.js.map