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
require('rxjs/add/operator/map');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var apiRequester_service_1 = require('../../services/apiRequester.service');
var User = (function () {
    function User(http, route, router, backend) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.backend = backend;
    }
    User.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.backend.getPerson(+params['id'])
                .subscribe(function (res) { return _this.user = res; });
        });
    };
    User = __decorate([
        core_1.Component({
            selector: 'user',
            moduleId: module.id,
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute, router_1.Router, apiRequester_service_1.ApiRequester])
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.component.js.map