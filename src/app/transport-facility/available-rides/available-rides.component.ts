import { Component, OnInit } from '@angular/core';
import { RidesService } from '../../services/rides.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-available-rides',
  templateUrl: './available-rides.component.html',
  styleUrls: ['./available-rides.component.css'],
  viewProviders: [RidesService]
})
export class AvailableRidesComponent implements OnInit {
  // below parameter is to hide and show add-rode component
  showAddRide = false;
  availableRides: Observable<any>;
  rideType = '';
  sessionUser = sessionStorage.getItem('username');

  constructor(private rideService: RidesService, private router: Router) { }

  ngOnInit(): void {
    this.availableRides = this.rideService.changeRideCount.pipe();
  }

  bookRide(empId, operation) {
    this.rideService.bookRideAction(empId, operation);
  }

  isAllowedToBook(ride) {
    if (ride.empId === this.sessionUser) {
      return true;
    } else if ((ride.bookedBy).includes(this.sessionUser)) {
      return true;
    } else if (ride.vacantSeats === 0) {
      return true;
    }
  }

  isAllowedToCancel(ride) {
    return (ride.bookedBy).includes(this.sessionUser) ? false : true;
  }
}
