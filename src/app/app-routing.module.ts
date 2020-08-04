import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TransportFacilityModule } from '../app/transport-facility/transport-facility.module';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'available-rides', loadChildren: '../app/transport-facility/transport-facility.module#TransportFacilityModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
