import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private empService:EmployeeserviceService, private bsModalRef:BsModalRef,private router:Router) { }

  ngOnInit() {
  }

  addNewEmployee(employee){
    this.empService.addNewEmployee(employee);
    this.bsModalRef.hide();
    location.reload();
  }
}
