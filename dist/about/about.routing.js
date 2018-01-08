"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var about_component_1 = require("./about.component");
var about_user_component_1 = require("./about-user.component");
var about_section_component_1 = require("./about-section.component");
var aboutRoutes = [
    {
        path: 'about',
        component: about_section_component_1.AboutSectionComponent,
        children: [
            { path: '', component: about_component_1.AboutComponent },
            { path: ':username', component: about_user_component_1.AboutUserComponent }
        ]
    }
];
exports.aboutRouting = router_1.RouterModule.forChild(aboutRoutes);
//# sourceMappingURL=about.routing.js.map