import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { HOST_URL } from './host.config';




@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  HOST_URL:string = "http://localhost:8080/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  info:any ={};
  constructor(private http:HttpClient,private router:Router) { }

  getLoginValidate(user){

    var url = this.HOST_URL+"send";

    this.http.post(url,user,this.httpOptions).subscribe(data =>{
       //code read all records, if a valid user
      this.info = data; 
      if(this.info.length ==0){
        this.router.navigate(['/login'])
      }else{

       this.getEmployeeDetails().subscribe(info =>{
        
         localStorage.setItem("employees",JSON.stringify(info));
         this.router.navigate(['/app-employeedetails']);
       });
      }
      },
     error=>{
      console.error("POST call with url"+url+" failed")
     })
  }

  getEmployeeDetails(){
    return this.http.get(this.HOST_URL+"getEmployees");
  }

  getEmployee(username){
   return this.http.get(this.HOST_URL+"edit?username="+username,this.httpOptions);
  //  localStorage.setItem("employee",JSON.stringify(data));
  }

  deleteEmployee(username){
    this.http.get(this.HOST_URL+"delete?username="+username,this.httpOptions).subscribe(data=>{
      this.getEmployeeDetails().subscribe(data=>{
        localStorage.setItem("employees",JSON.stringify(data));  
      })
    })
  }

  updateEmployee(payload){
    // return   this.http.post("http://localhost:8080/editUser",data[0]);
    debugger;
    this.http.post(this.HOST_URL+"editUser",payload,this.httpOptions).subscribe(data =>{
     console.log("post data..."+data)
     this.getEmployeeDetails().subscribe(data=>{
      localStorage.setItem("employees",JSON.stringify(data));
     
    })
     },
    error=>{
     console.error("POST call with url http://localhost:8080/editUser"+" failed")
    })
  }

  addNewEmployee(employee){
   const payload ={
      "fname":employee.fname,
      "lname":employee.lname,
      "mname":employee.mname,
      "email":employee.email,
      "username":employee.uname,
      "pass":employee.pwd
    }
    
    return this.http.post(this.HOST_URL+'addNewEmployee',payload,this.httpOptions).subscribe(data=>{
      localStorage.setItem("employees",JSON.stringify(data));
    });
  }


}
