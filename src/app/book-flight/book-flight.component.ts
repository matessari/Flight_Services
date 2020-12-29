import { ViewDetailsService } from './../view-details/view-details.service';
import { FlightBooking } from './../shared/FlightBooking';
import { Flights } from './../shared/Flight';
import { PassengerNameValidator } from './passenger-name.validator';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup
} from '@angular/forms';
import { BookFlightService } from './book-flight.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
  providers: [BookFlightService, ViewDetailsService]
})
export class BookFlightComponent implements OnInit {
  noOfTickets:any;
  errorMessage: String;
  successMessage: String;
  flight: Flights[];
  flightBooking: FormGroup;
  selectedFlight: string;
  this.myGroup = new FormGroup({
    flightId: new FormControl()
  });

  constructor(
    private fb: FormBuilder,
    private bookFlightService: BookFlightService,
    private viewDetailsService: ViewDetailsService
  ) {}

  bookingForm = this.fb.group({
    passengerName: ['', Validators.required],
    noOfTickets: ['', [Validators.required, Validators.min(1)]],
    flightId: ['', [Validators.required, validateFlight]]
  });

  ngOnInit() {}

  book() {
    this.successMessage = null;
    this.errorMessage = null;
    console.log(JSON.stringify(this.bookingForm.value));
    this.bookFlightService.getData(this.bookingForm.value).subscribe(
      response => {
        this.successMessage = response.message;
        console.log('Success' + this.successMessage);
      },
      err => (this.errorMessage = err.error.message)
    );
    console.log(this.bookingForm.value.flightId);
  }
}
function validateFlight(c: FormControl) {
  const FLIGHT_REGEX = /^[A-Z]{3}-[0-9]{3}$/;

  const val: string = c.value;
  console.log(c.value);
  console.log('Regex ' + val.match(/[A-Z][A-Z][A-Z]-{0-9][0-9][0-9]/));
  return FLIGHT_REGEX.test(c.value)
    ? null
    : {
        flightError: {
          message: 'Invalid flightID'
        }
      };
}
// must be invoked when the Book Flight button is clicked and necessary operations must be performed.
// invoke getData() of book flight service.ts and handle hte success and error messages.
// all validation messsages must be displayed if the original data of the field was modified
