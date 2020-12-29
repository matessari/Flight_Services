import { FlightBooking } from "./../shared/FlightBooking";
import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, Validators, FormsModule } from "@angular/forms";
import { ViewDetailsService } from "./view-details.service";

@Component({
  selector: "app-view-details",
  templateUrl: "./view-details.component.html",
  styleUrls: ["./view-details.component.css"],
  providers: [ViewDetailsService]
})
export class ViewDetailsComponent implements OnInit {
  @Input() flightDetails: FlightBooking[];
  successMessage: string;
  errorMessage: string;
  totalAmount: number;

  constructor(private viewDetailsService: ViewDetailsService) {}

  ngOnInit() {
    this.view();
  }

  view() {
    this.viewDetailsService.view().subscribe(data => {
      this.flightDetails = data;
    });
    // performs a get to the URL :/getallId
  }
  /*
delete the booking detail by inoking delete() of view-details.service and passing the .
the booking detail must be remoed from the table on the page and a success message should be disjplayed ("Successfully deleted Id: 2006");
*/
  delete(flights, index) {
    this.viewDetailsService.delete(flights._id, index).subscribe(data => {
      this.flightDetails.splice(index, 1);
    });
  }

  isValid(flightDetails) {
    let totalAmount = null;
    if (this.totalAmount > 5000) {
      return false;
    }
  }
}
/*
apiRoot: string = "https://httpbin.org";

  constructor(private http: HttpClient) {}
doGet() {
  console.log("get");
  let url = '${this.apiRoot}/get';
  const httpOptions = {
    params: new HttpParams().set("foo,", "moo").set("limit", "25")
  };
  this.http.get(url, httpOptions).subscribe(res=> console.log(res));
}

doPost() {
  console.log("post");
  let url = `${this.apiRoot}/post`;
  const httpOptions
}

export class StudentsListComponent implements OnInit {
StudentData: any = [];
dataSource: MatTableDataSource;
@ViewChild(MatPaginator) paginator: MatPaginator;
displayedColumns: string[] = ['_id', 'student_name', 'student_email', 'section', 'action'];
    constructor(private studentApi: ApiService) {
        this.studentApi.GetStudents().subscribe(data => {
        this.StudentData = data;
        this.dataSource = new MatTableDataSource(this.StudentData);
        setTimeout(() => {  
          this.dataSource.paginator = this.paginator;
            }, 0);
          })    
        }
ngOnInit() { }

deleteStudent(index: number, e){
        if(window.confirm('Are you sure')) {
        const data = this.dataSource.data;
        data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
        this.dataSource.data = data;
          this.studentApi.DeleteStudent(e._id).subscribe()
          }
        }
  }
*/
