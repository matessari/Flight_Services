import { ViewDetailsService } from './view-details/view-details.service';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AppComponent } from './app.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  redirectTo: '/'
  },
  {
    path: 'bookFlight',
    component: BookFlightComponent
  },
  {
    path: 'view-details',
    component: ViewDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
