"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./page/about.component");
var notfound_component_1 = require("./not-found/notfound.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: ':username', component: about_component_1.AboutUserComponent },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map