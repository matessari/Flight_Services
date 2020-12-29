import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpClientModule
} from '@angular/common/http';
import { FlightBooking } from '../shared/FlightBooking';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class ViewDetailsService {
  baseUrl = 'http://localhost:1020';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  view(): Observable<FlightBooking[]> {
    // Consume the exposed URI's specified in QP
    // performs to get request to the URL getallId
    const url = 'http://localhost:1020/getallId';
    return this.http
      .get<FlightBooking[]>(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

delete(flights, index): Observable<any> {
    // Consume the exposed URI's specified in QP
    const url = `${this.baseUrl}/delete/${index}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(this.errorMgmt);
    return throwError(errorMessage);
  }
}
/*
showAllRides(): Observable<Rides[]> {
  return this.http.get<Rides[]>(this.ridesUrl).pipe(
    tap(data => console.log('Data fetched: ' + JSON.stringify(data))),
    catchError(this.handleError));
}
toDestination(): Observable<Rides[]> {
  return this.http.get<Rides[]>(this.ridesUrl).pipe(
    tap(data => console.log('Data fetched: ' + JSON.stringify(data))),
    catchError(this.handleError));
}
offerRide(): Observable<Rides[]> {
  return this.http.get<Rides[]>(this.ridesUrl).pipe(
    tap(data => console.log('Data fetched: ' + JSON.stringify(data))),
    catchError(this.handleError));
}
 shService.getSuperHeroDetail().subscribe(
            (data)=>{
                this.superHeros = data.forEach(_=>_.age<25);
            }
        );
    }
    export class ApiService {
endpoint: string = 'http://localhost:4000/api';
headers = new HttpHeaders().set('Content-Type', 'application/json');
constructor(private http: HttpClient) { }
// Add student
AddStudent(data: Student): Observable {
let API_URL = `${this.endpoint}/add-student`;
return this.http.post(API_URL, data)
.pipe(
catchError(this.errorMgmt)
)
}
// Get all students
GetStudents() {
return this.http.get(`${this.endpoint}`);
}
// Get student
GetStudent(id): Observable {
let API_URL = `${this.endpoint}/read-student/${id}`;
return this.http.get(API_URL, { headers: this.headers }).pipe(
map((res: Response) => {
return res || {}
}),
catchError(this.errorMgmt)
)
}
// Update student
UpdateStudent(id, data: Student): Observable {
let API_URL = `${this.endpoint}/update/${id}`;
return this.http.put(API_URL, data, { headers: this.headers }).pipe(
catchError(this.errorMgmt)
)
}
// Delete student
DeleteStudent(id): Observable {
var API_URL = `${this.endpoint}/delete-student/${id}`;
return this.http.delete(API_URL).pipe(
catchError(this.errorMgmt)
)
}
// Error handling 
errorMgmt(error: HttpErrorResponse) {
let errorMessage = '';
if (error.error instanceof ErrorEvent) {
// Get client-side error
errorMessage = error.error.message;
} else {
// Get server-side error
errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
}
console.log(errorMessage);
return throwError(errorMessage);
}
}
}

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.title.indexOf(filter.title) !== -1);
    }
}










*/
