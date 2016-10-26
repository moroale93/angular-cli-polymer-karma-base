"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var Config = (function () {
    function Config() {
    }
    return Config;
}());
var ConfigProvider = (function () {
    //private configJSON: Config;
    function ConfigProvider(http) {
        this.http = http;
        this.configUrl = 'app/configs/config.json';
        /*this.configJSON={
            "urls":{
                "listOfPeople":"http://private-20f531-ed2016.apiary-mock.com/vts-ed-rest-api/profiles"
            },
            "portal":{
                "home":"http://localhost:3000/html/index.html",
                "secondPage":"http://localhost:3000/html/secondPage.html"
            }
        };*/
    }
    ConfigProvider.prototype.getConfig = function () {
        return this.http.get(this.configUrl).map(function (res) { return res.json(); });
    };
    ;
    ConfigProvider.prototype.getUrls = function () {
        return this.http.get(this.configUrl).map(function (res) { return res.json().urls; });
    };
    ;
    ConfigProvider.prototype.getPages = function () { return { secondPage: "" }; }; //TODO
    ConfigProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ConfigProvider);
    return ConfigProvider;
}());
exports.ConfigProvider = ConfigProvider;
//# sourceMappingURL=config.service.js.map