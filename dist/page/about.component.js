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
var http_1 = require("@angular/http");
// Observable class extensions
require("rxjs/add/observable/of");
require("rxjs/add/observable/throw");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/do");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var AboutUserComponent = (function () {
    function AboutUserComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.username = this.route.snapshot.params['username'];
        this.repos = [];
    }
    AboutUserComponent.prototype.ngOnInit = function () {
        //Grab Username
        // let username = this.route.snapshot.params['username'];
        // this.uservice.getUser(username).then(user => {
        //     this.user = user
        // });
        // console.log(username);
        this.getUser();
        this.getRepos();
    };
    AboutUserComponent.prototype.getUser = function () {
        var _this = this;
        this.http.get('https://api.github.com/users/' + this.username)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { _this.user = data; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    AboutUserComponent.prototype.getRepos = function () {
        var _this = this;
        this.http.get('https://api.github.com/users/' + this.username + '/repos')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { _this.repos = data; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    AboutUserComponent.prototype.goBack = function () {
        // window.history.back();
        this.router.navigate(['/']);
    };
    return AboutUserComponent;
}());
AboutUserComponent = __decorate([
    core_1.Component({
        selector: 'about-page',
        templateUrl: './app/page/about.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        http_1.Http])
], AboutUserComponent);
exports.AboutUserComponent = AboutUserComponent;
//# sourceMappingURL=about.component.js.map