import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    selector: 'about-page',
    templateUrl: './app/page/about.component.html'
})

export class AboutUserComponent {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private http: Http
    ) { }

    username = this.route.snapshot.params['username'];

    user: any;
    repos = [];
    repo: any;

    ngOnInit() {
        //Grab Username
        // let username = this.route.snapshot.params['username'];
        // this.uservice.getUser(username).then(user => {
        //     this.user = user
        // });
        // console.log(username);
        this.getUser();
        this.getRepos();
    }

    getUser() {
    this.http.get('https://api.github.com/users/'+this.username)
            .map((res: Response) => res.json())
            .subscribe(
            data => { this.user = data },
            err => console.error(err),
            () => console.log('done')
            );
    }

    getRepos() {
        this.http.get('https://api.github.com/users/' + this.username +'/repos')
            .map((res: Response) => res.json())
            .subscribe(
            data => { this.repos = data },
            err => console.error(err),
            () => console.log('done')
            );
    }

    goBack() {
        // window.history.back();
        this.router.navigate(['/']);
    }
}