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
var user_service_1 = require("../shared/services/user.service");
var AboutComponent = (function () {
    function AboutComponent(uservice) {
        this.uservice = uservice;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uservice.getUsers().then(function (users) { return _this.users = users; });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about-page',
        styles: [
            "\n\t\t.card-profile{\n\t\t\tbackground:#eee;\n\t\t\tborder-radius:4px;\n\t\t\tpadding:30px;\n\t\t\ttext-align:center;\n\t\t\theight:auto;\n\t\t}\n\t\t.card-profile img{\n\t\t\tmax-width:50%;\n\t\t\tmarging:15px auto;\n\t\t}\n\t"
        ],
        template: "\n\t\t<div class=\"row\" *ngIf=\"users\">\n\t\t\t<div class=\"col-sm-3\" *ngFor=\"let user of users\">\n\t\t\t\t<div class=\"card-profile\" [routerLink]=\"['/about', user.username]\">\n\t\t\t\t\t<img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n\t\t\t\t\t<h2>{{user.name}}</h2>\n\t\t\t\t\t<p><a href=\"https://twitter.com/{{user.username}}\" target=\"_blank\">{{user.username}}</a></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object])
], AboutComponent);
exports.AboutComponent = AboutComponent;
var _a;
//# sourceMappingURL=about.component.js.map