import { Component } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
	selector: 'my-app',
	templateUrl: './app/app.component.html',
	styles: [`
		.jumbotron{
			box-shadow: 0 2px 0 rgba(0,0,0,0.2);
		}
		.active{
			color:#777 !important;
		}
	`]
})

export class AppComponent {}