import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },{
    path:'edit', component:EmployeedetailsComponent
  },{
    path:'delete', component:EmployeedetailsComponent
  },
  {
    path:'app-employeedetails', component:EmployeedetailsComponent
  },{
    path:'login',component:LoginComponent
  },{
    path:'**',component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  



 }
