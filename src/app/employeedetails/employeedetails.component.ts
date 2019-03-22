import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';
import { DialogService, BuiltInOptions } from "ngx-bootstrap-modal";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeepopupComponent } from '../employeepopup/employeepopup.component';
import { AddemployeeComponent } from '../addemployee/addemployee.component';


@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  private data:any ={};
  private employee:any ={};
  private modalRef:BsModalRef;


  constructor(private route:Router,private activatedRoute:ActivatedRoute, private service: EmployeeserviceService,
    private dialogService:DialogService, private modalService:BsModalService) { }

  ngOnInit() {
   this.data = JSON.parse(localStorage.getItem("employees"));
   
   debugger;
   console.log('url....'+this.route.url)

  }

  showEditPopup(username){
   debugger;
    this.service.getEmployee(username).subscribe(
      (results:any) => {
        this.employee=results;
        localStorage.setItem("employee",JSON.stringify(this.employee));
        this.modalRef = this.modalService.show(EmployeepopupComponent,{
          initialState:{
            title:'Edit Employee user('+username+')'
          }
        });

      }
    );
  }

  deleteEmployee(username){
    this.service.deleteEmployee(username);
    location.reload();
  }

  addEmployee(){
    this.modalRef = this.modalService.show(AddemployeeComponent,{
      initialState:{
        title:'Add new employee '
      }
    });
  }
}
