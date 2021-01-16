import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import{ UserRegistrationDTO } from './StudendRegistration';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  
  
  studentRegistration:UserRegistrationDTO = new UserRegistrationDTO();
  
  constructor(private httpClient:HttpClient) { }
  newStudentRegistation():void{
  
    this.studentRegistration = new UserRegistrationDTO();
}
   private baseUrl:string='http://localhost:8082/funda/user/reset-password'
  httpOtion={
    headers: new Headers({
        'Content-type':'application\json'
    })
  }


  sendUsername(username){
    console.log("username sent is " + username)
    return this.httpClient.post(this.baseUrl,username,{responseType:'json'})// call reset-password api
  }
  
}
