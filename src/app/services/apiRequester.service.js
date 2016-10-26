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
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
var config_service_1 = require('../services/config.service');
var ApiRequester = (function () {
    function ApiRequester(http, config) {
        this.http = http;
        this.config = config;
    }
    ApiRequester.prototype.prepareRequest = function (request) {
        return this.config.getUrls().flatMap(request);
    };
    ;
    ApiRequester.prototype.getPeople = function (page, pageSize, sortOrder, sort) {
        var _this = this;
        return this.prepareRequest(function (urls) {
            return _this.http.get(urls.listOfPeople + "?searchQuery={'lname':'','revisionstrict':true,'revision':3,'wewfwefwf':true}&page=" + page + "&pageSize=" + pageSize + (sort != null ? "&sort=" + sort : "") + (sortOrder != null ? "&sortOrder=" + sortOrder : ""))
                .map(function (res) { return res.json(); });
        });
    };
    ApiRequester.prototype.getPerson = function (personId) {
        var _this = this;
        return this.prepareRequest(function (urls) {
            return _this.http.get(urls.person.replace("$PERSONID", personId)).map(function (res) { return res.json(); });
        });
    };
    ApiRequester = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.ConfigProvider])
    ], ApiRequester);
    return ApiRequester;
}());
exports.ApiRequester = ApiRequester;
//# sourceMappingURL=apiRequester.service.js.map