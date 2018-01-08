import {RouterModule} from '@angular/router';
import {HomeComponent } from './home/home.component';
import {AboutUserComponent } from './page/about.component';
import {NotFoundComponent} from './not-found/notfound.component';

const appRoutes = [
	{ path: '', component: HomeComponent},
	{ path: ':username', component: AboutUserComponent },
	{ path: '**', component: NotFoundComponent}
];

export const appRouting = RouterModule.forRoot(appRoutes);