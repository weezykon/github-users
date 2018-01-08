import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {appRouting} from './app.routing';
import {AppComponent} from './app.component';
import {HomeComponent } from './home/home.component';
import {AboutUserComponent } from './page/about.component';
import {NotFoundComponent} from './not-found/notfound.component';
import {Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		Ng2SearchPipeModule,
		appRouting
	],
	declarations: [
		AppComponent,
		HomeComponent,
		NotFoundComponent,
		AboutUserComponent
	],
	providers: [
	],
	bootstrap: [AppComponent]
})

export class AppModule {}