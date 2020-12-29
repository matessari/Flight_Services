import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  agree: boolean = false;

  constructor(private router: Router) {}

  agreed(val) {
    if (val === 1) {
      this.agree = true;
      this.router.navigate(['/bookFlight']);
    } else if (val === 2) {
      this.agree = true;
      this.router.navigate(['/viewBookings']);
    }
  }
  /*
  import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } 
from '@angular/http';
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

@Injectable()
export class WebApiObservableService {                                                                    SERVICE CLASS
    headers: Headers;
    options: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    deleteServiceWithId(url: string, key: string, val: string): Observable {
    return this.http
        .delete(url + "/?" + key + "=" + val, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }     

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
Usage Code:
import { Component, OnInit } from '@angular/core';

import { SearchMovieModel } from './search-movie.model';
import { WebApiObservableService } from './web-api-observable.service';

@Component({
    selector: 'search-movie-list',
    templateUrl: '../../Scripts/app/search-list.component.html'
})

export class SearchMovieListComponent implements OnInit {                                                       COMPONENT CLass
    searchMovieModel: SearchMovieModel;
    
    constructor(
        private movieObservableService: WebApiObservableService) {
       
        this.searchMovieModel = {id: '12' , name: 'abc'};
    }

    ngOnInit() {
        this.movieObservableService
            .deleteServiceWithId('api/Movie/TestDeleteWithId', "id", "123")
            .subscribe(
                result => console.log(result),
                error => this.errorMessage = error
        );  
    }
}
  */
}
