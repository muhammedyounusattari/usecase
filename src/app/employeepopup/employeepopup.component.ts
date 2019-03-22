import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employeepopup',
  templateUrl: './employeepopup.component.html',
  styleUrls: ['./employeepopup.component.css']
})
export class EmployeepopupComponent implements OnInit {

  data:any={};

  constructor(private service:EmployeeserviceService, private bsModalRef:BsModalRef,private router:Router) { }

  ngOnInit() {  
   this.data = JSON.parse(localStorage.getItem("employee"));
  }

  sumbitForm(data){
   this.service.updateEmployee(data[0]);   
   this.hideForm(); 
   location.reload();
  }

  hideForm(){
    this.bsModalRef.hide();
  }
}
