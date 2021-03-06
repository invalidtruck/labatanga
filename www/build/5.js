webpackJsonp([5],{

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvProfilePageModule", function() { return ProvProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prov_profile__ = __webpack_require__(612);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProvProfilePageModule = /** @class */ (function () {
    function ProvProfilePageModule() {
    }
    ProvProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__prov_profile__["a" /* ProvProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__prov_profile__["a" /* ProvProfilePage */]),
            ],
        })
    ], ProvProfilePageModule);
    return ProvProfilePageModule;
}());

//# sourceMappingURL=prov-profile.module.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Providers_User__ = __webpack_require__(173);
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




var ProvProfilePage = /** @class */ (function () {
    function ProvProfilePage(navCtrl, afDB, navParams, user) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.navParams = navParams;
        this.user = user;
        this.uid = navParams.data;
        this.user.getUser().subscribe(function (s) {
            _this.provider = _this.afDB.object("Providers/" + s.uidProvider).valueChanges();
            _this.Loses = _this.afDB.list("Providers/" + s.uidProvider + "/Contracts/", function (ref) { return ref.orderByChild("status").equalTo("C"); }).valueChanges();
            _this.Request = _this.afDB.list("Providers/" + s.uidProvider + "/Contracts/", function (ref) { return ref.orderByChild("status").equalTo("A"); }).valueChanges();
            _this.Dones = _this.afDB.list("Providers/" + s.uidProvider + "/Contracted/").valueChanges();
        });
    }
    ProvProfilePage.prototype.getImg = function (provider) {
        if (provider == undefined)
            return;
        if (provider.backImg != undefined)
            return provider.backImg;
        var img = "assets/imgs/defaults/profiles/";
        switch (provider.Subcategory) {
            case "musicaeiluminacion":
                img = img + "musicback";
                break;
            default:
                break;
        }
        return img + ".jpg";
    };
    ProvProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProvProfilePage');
    };
    ProvProfilePage.prototype.getDones = function (Dones) {
        if (Dones != null)
            return Dones.length;
    };
    ProvProfilePage.prototype.getRequest = function (Request) {
        if (Request != null)
            return Request.length;
    };
    ProvProfilePage.prototype.getLoses = function (Loses) {
        if (Loses != null)
            return Loses.length;
    };
    ProvProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-prov-profile',template:/*ion-inline-start:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/provider/prov-profile/prov-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Perfil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <div id="profile-bg" [style.backgroundImage]="\'url(\' +  getImg(provider|async) + \')\' "></div>\n  <div id="content">\n    <div id="profile-info">\n      <img id="profile-image" [src]="( (provider|async)?.icon ==undefined) ?  (provider|async)?.icon : \'assets/imgs/defaults/profiles/profile_provider.png\'">\n      <h3 id="profile-name">{{(provider|async)?.Name}}</h3>\n      <span id="profile-description">{{(provider|async)?.Description}}</span>\n    </div>\n    <div>\n      <ion-grid>\n        <ion-row style="text-align: center;color:white">\n          <ion-col>\n            <label>\n              {{getDones( (Dones|async) )}}\n            </label>\n            <br>\n            <label>\n              Servicios Completados\n            </label>\n          </ion-col>\n          <ion-col>\n            <label>\n              {{getRequest( (Request|async) )}}\n            </label>\n            <br>\n            <label>\n              Pendientes\n            </label>\n          </ion-col>\n          <ion-col>\n            <label>\n              {{getLoses( (Loses|async) )}}\n            </label>\n            <br>\n            <label>\n              Perdidas\n            </label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <ion-list>\n      <ion-item *ngFor="let contract of (provider|async)?.contracts">\n        <img class="post-profile-image" src="assets/imgs/misc/cat.jpg"> {{contract.text}}\n        <div class="post-time">{{contract.created_at}} something</div>\n        <div class="post-options">\n          <ion-icon name="undo"></ion-icon>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/dsilva/Documentos/IONIC/LABANTANGA/src/pages/provider/prov-profile/prov-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__Providers_User__["a" /* UserSCV */]])
    ], ProvProfilePage);
    return ProvProfilePage;
}());

//# sourceMappingURL=prov-profile.js.map

/***/ })

});
//# sourceMappingURL=5.js.map