import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { rideList } from '../../assets/mock-data';

@Injectable()
export class RidesService {
  rides = rideList;
  sessionUser = sessionStorage.getItem('username');
  changeRideCount = new BehaviorSubject<any>([]);

  constructor() {
    this.getRides();
  }

  getRides() {
    const today = new Date();
    const filteredRides = this.rides.filter(ride => {
      return ((Number((today.getHours() + 1) + '.' + today.getMinutes())) >= ride.time) &&
        (Number((today.getHours() - 1) + '.' + today.getMinutes()) <= ride.time);
    });
    this.changeRideCount.next(filteredRides);
  }

  addRide(ride) {
    const existingRideIndex = this.rides.findIndex(ride => ride.empId === this.sessionUser);
    if (existingRideIndex !== -1) {
      this.rides.splice(existingRideIndex, 1);
    }
    this.rides.push(ride);
    this.getRides();
  }

  bookRideAction(empId, operation) {
    this.rides.find(ride => {
      if (ride.empId === empId) {
        if (operation === 'book') {
          ride.vacantSeats--;
          ride.bookedBy.push(sessionStorage.getItem('username'));
        } else {
          ride.vacantSeats++;
          ride.bookedBy = ride.bookedBy.filter(employee => employee !== this.sessionUser);
        }
      }
    });
    this.getRides();
  }
}
