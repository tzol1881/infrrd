import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RideFilterPipe } from './pipes/ride-filter.pipe';
import { AddRideComponent } from '../transport-facility/add-ride/add-ride.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AvailableRidesComponent } from '../transport-facility/available-rides/available-rides.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppTransportFacilityRoutingModule } from './app-transport-facility-routing-module';

@NgModule({
  declarations: [
    RideFilterPipe,
    AddRideComponent,
    AvailableRidesComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppTransportFacilityRoutingModule
  ]
})
export class TransportFacilityModule { }
