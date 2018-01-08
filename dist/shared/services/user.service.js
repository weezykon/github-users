"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var usersPromise = Promise.resolve([
    {
        id: 1,
        username: 'weezykon',
        name: 'Akinbode Akinlolu',
        avatar: 'https://pbs.twimg.com/profile_images/753772628700192772/bkzAHsJ2_400x400.jpg'
    },
    {
        id: 2,
        username: 'uncooloj',
        name: 'Ojimaojo Udale-Ameh',
        avatar: 'https://pbs.twimg.com/profile_images/835416346154389504/YQGIxtSQ_400x400.jpg'
    },
    {
        id: 1,
        username: 'tonia_tony',
        name: 'Emem Tony',
        avatar: 'https://pbs.twimg.com/profile_images/854760889949487107/iirAp0_t_400x400.jpg'
    }
]);
var UserService = (function () {
    function UserService() {
    }
    // get all users
    UserService.prototype.getUsers = function () {
        return usersPromise;
    };
    // find a user
    UserService.prototype.getUser = function (username) {
        return usersPromise.then(function (users) { return users.find(function (user) { return user.username === username; }); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map