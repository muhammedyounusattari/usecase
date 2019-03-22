import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private errorMsg:string ="";

  ngOnInit() {
    
  }
  constructor(private empService: EmployeeserviceService,private route:Router ){

  }

  validateLogin(event,user){
    event.preventDefault();
    this.errorMsg="";
    
    if(!user.uname){
      this.errorMsg ="Username is required ";
    }
    if(!user.pass){
      this.errorMsg+= "Password is required";
    }
    
    user ={
       "username":user.uname,
       "pass":user.pass
    };
    
   var data =  this.empService.getLoginValidate(user);
  
   this.errorMsg+=localStorage.getItem("loginValidationError");
  }

}
