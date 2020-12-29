import { FlightBooking } from './../shared/FlightBooking';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//should display all the bookings done by the user
//the delete button should only be enabled only for the bookins whose total amount is less than 5000
@Injectable()
export class BookFlightService {

  errorMessage: String;
  url = 'http://localhost:1020/bookFlight';

  constructor(private http: HttpClient) { }
getData(data: any): Observable<any> {
  return <Observable<any>> this.http.post(this.url, data);
}
 /* book(data): Observable<any> {
    return this.http.post(this.url, data)
    .map(response => response.json()).catch(this.handleError);
   //Consume the exposed REST api from http://localhost:1020/bookFlight
   //must send post request to backend service running
  }
  */
  handleError(error) {
    return Observable.throw(error.json() || error);
  }

}
