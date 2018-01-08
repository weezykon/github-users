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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../shared/services/user.service");
var AboutUserComponent = (function () {
    function AboutUserComponent(route, uservice, router) {
        this.route = route;
        this.uservice = uservice;
        this.router = router;
    }
    AboutUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Grab Username
        var username = this.route.snapshot.params['username'];
        this.uservice.getUser(username).then(function (user) {
            _this.user = user;
        });
        console.log(username);
    };
    AboutUserComponent.prototype.goBack = function () {
        // window.history.back();
        this.router.navigate(['/about']);
    };
    return AboutUserComponent;
}());
AboutUserComponent = __decorate([
    core_1.Component({
        selector: 'about-user',
        template: "\n\t\t<a (click)=\"goBack()\" class=\"btn btn-sm btn-info\">Back</a>\n\t\t<div class=\"row\" *ngIf=\"user\">\n\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t<img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t<h2>{{user.name}}</h2>\n\t\t\t\t<h3>{{user.username}}</h3>\n\t\t\t</div>\n\t\t</div>\n\t"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, router_1.Router])
], AboutUserComponent);
exports.AboutUserComponent = AboutUserComponent;
var _a;
//# sourceMappingURL=about-user.component.js.map