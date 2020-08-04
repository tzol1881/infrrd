import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RidesService } from '../../services/rides.service';
import { empIdCheck, timeValidator } from './ride-validators';

@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['./add-ride.component.css']
})
export class AddRideComponent implements OnInit {
  addRideForm: FormGroup;
  // below parameter is to confirm ride is already scheduled or not by login user
  rideScheduled;
  @Output() hideRideDialog = new EventEmitter();
  constructor(private rideBuilder: FormBuilder, private ridesService: RidesService) { }

  ngOnInit(): void {
    this.rideScheduled = this.ridesService.rides.find(ride => ride.empId === sessionStorage.getItem('username'));
    this.addRideForm = this.rideBuilder.group({
      empId: [sessionStorage.getItem('username'), [Validators.required, empIdCheck(this.ridesService.rides)]],
      vehicleType: ['bike', Validators.required],
      vehicleNo: ['', Validators.required],
      vacantSeats: ['', Validators.required],
      time: ['', [Validators.required, timeValidator]],
      pickupPoint: ['', Validators.required],
      destination: ['', Validators.required],
      bookedBy: [[]]
    });
  }

  onSubmit() {
    const ride = this.addRideForm.getRawValue();
    ride.time = Number((ride.time).replace(':', '.'));
    this.ridesService.addRide(ride);
    this.hideRideDialog.emit(false);
  }
}
