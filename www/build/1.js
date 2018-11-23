webpackJsonp([1],{

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvRequestPageModule", function() { return ProvRequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prov_request__ = __webpack_require__(613);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__prov_request__["a" /* ProvRequestPage */]),
            ],
        })
    ], ProvRequestPageModule);
    return ProvRequestPageModule;
}());

//# sourceMappingURL=prov-request.module.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_detail_request_detail__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
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




/**
 * Generated class for the ProvRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProvRequestPage = /** @class */ (function () {
    function ProvRequestPage(navCtrl, navParams, modalCtrl, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.afDB = afDB;
        this.uid = navParams.data;
        this.Contracts = this.afDB.list("Providers/" + this.uid + "/Contracts", function (ref) { return ref.orderByChild("status").equalTo("A"); })
            .snapshotChanges()
            .map(function (items) {
            return items.map(function (com) {
                return {
                    key: com.key,
                    user: _this.afDB.object("Users/" + com.payload.val().UserID).valueChanges(),
                    Description: com.payload.val().Description,
                    timestamp: com.payload.val().timestamp,
                    time: com.payload.val().time
                };
            });
        });
    }
    ProvRequestPage.prototype.onAccept = function (key) {
        var contract = this.afDB.object("Providers/" + this.uid + "/Contracts/" + key);
        contract.update({
            status: "D",
            composeview: "D_true",
            viewed: true
        });
    };
    ProvRequestPage.prototype.onReview = function (key) {
        var contract = this.afDB.object("Providers/" + this.uid + "/Contracts/" + key);
        contract.update({
            composeview: "A_true",
            viewed: true
        });
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__request_detail_request_detail__["a" /* RequestDetailPage */], { uid: this.uid, key: key });
        profileModal.present();
    };
    ProvRequestPage.prototype.onCancel = function (key) {
        var contract = this.afDB.object("Providers/" + this.uid + "/Contracts/" + key);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-prov-request',template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/provider/prov-request/prov-request.html"*/'<!--\n  Generated template for the ProvRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>prov-request</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let con of (Contracts|async)">\n      <ion-item [ngClass]="(con !=null && con.viewed ) ? \'\':\'notview\'">\n        <h2>{{(con.user|async)?.FirstName}}</h2>\n        <label>{{con.Description}}</label>\n        <label>Tiempo:{{(con.time)}}</label>\n\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="secondary" (click)="onAccept(con.key)">\n          <ion-icon style="color:white" name="md-checkmark-circle"></ion-icon>\n          Aceptar\n        </button>\n        <button ion-button color="primary" (click)="onReview(con.key)">\n          <ion-icon style="color:white" name="md-trash"></ion-icon>\n          Revisar\n        </button>\n        <button ion-button color="danger" (click)="onCancel(con.key)">\n          <ion-icon style="color:white" name="md-trash"></ion-icon>\n          Cancelar\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/provider/prov-request/prov-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], ProvRequestPage);
    return ProvRequestPage;
}());

//# sourceMappingURL=prov-request.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Providers_observer_observer__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
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




/**
 * Generated class for the RequestDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var RequestDetailPage = /** @class */ (function () {
    function RequestDetailPage(navCtrl, afDB, subs, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.subs = subs;
        this.navParams = navParams;
        this.uid = navParams.get("uid");
        var key = navParams.get("key");
        var subContracts = this.afDB.object("Providers/" + this.uid + "/Contracts/" + key)
            .snapshotChanges().subscribe(function (s) {
            _this.request = s.payload.val();
            _this.getUser(s.payload.val().UserID);
        });
        this.subs.add(subContracts);
    }
    RequestDetailPage.prototype.getUser = function (UserID) {
        var _this = this;
        var subuser = this.afDB.object("Users/" + UserID).snapshotChanges()
            .subscribe(function (s) {
            _this.user = s.payload.val();
        });
        this.subs.add(subuser);
    };
    RequestDetailPage.prototype.getUserName = function (user) {
        if (user != null)
            return user.FirstName + " " + user.LastName + " " + user.LastName2;
    };
    RequestDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestDetailPage');
    };
    RequestDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-request-detail',template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/provider/request-detail/request-detail.html"*/'<!--\n  Generated template for the RequestDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalles</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card>\n  <ion-item>\n    <h2>{{getUserName(user)}} </h2>\n    <p></p>\n  </ion-item> \n  <ion-card-content>\n    <p>{{request?.Description}} en {{request?.time}}</p>\n    <p>\n      <img [src]="request?.img">\n    </p>\n  </ion-card-content> \n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/provider/request-detail/request-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_0__Providers_observer_observer__["a" /* ObserverProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */]])
    ], RequestDetailPage);
    return RequestDetailPage;
}());

//# sourceMappingURL=request-detail.js.map

/***/ })

});
//# sourceMappingURL=1.js.map