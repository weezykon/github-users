import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'home-page',
	templateUrl: './app/home/home.component.html'
})

export class HomeComponent {
	URL = 'https://api.github.com/users';

	users = [];

	user: any;

	constructor(
		// Inject HTTP service
		private http: Http
	) { }

	ngOnInit() {
		this.getUsers();
	}

	getUsers() {
		this.http.get(this.URL)
			.map((res: Response) => res.json())
			.subscribe(
			data => { this.users = data },
			err => console.error(err),
			() => console.log('done')
			);
	}

}