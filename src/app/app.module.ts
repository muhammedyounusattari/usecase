import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { BootstrapModalModule } from 'ngx-bootstrap-modal';
import {ModalModule} from 'ngx-bootstrap/modal';
import { EmployeepopupComponent } from './employeepopup/employeepopup.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailsComponent,
    PagenotfoundComponent,
    LoginComponent,
    EmployeepopupComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BootstrapModalModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[EmployeepopupComponent,AddemployeeComponent]
})
export class AppModule { }
