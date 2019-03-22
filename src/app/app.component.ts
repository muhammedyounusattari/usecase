import { Component } from '@angular/core';
import { EmployeeserviceService } from './employeeservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usecase';

   constructor(private empService: EmployeeserviceService,private route:Router ){
  }
  
  validateLogin(event,user){
    event.preventDefault();
    localStorage.setItem("employees",'');
    
      user ={
        "username":user.uname,
        "pass":user.pass
     };

    var data =  this.empService.getLoginValidate(user);
    
    this.route.navigate([''])
   }
}
