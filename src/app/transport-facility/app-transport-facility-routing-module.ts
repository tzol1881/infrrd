import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailableRidesComponent } from './available-rides/available-rides.component';
import { CheckAuthenticationGuard } from '../guards/check-authentication.guard';

const routes: Routes = [
  { path: '', component: AvailableRidesComponent, canActivate: [CheckAuthenticationGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppTransportFacilityRoutingModule { }
