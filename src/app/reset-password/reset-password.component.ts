import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from '../forgot-password.service'
import{ UserRegistrationDTO } from '../StudendRegistration';
import { from } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  studentRegistration:UserRegistrationDTO = new UserRegistrationDTO();
  message:any
  username:string
  constructor(private forgotPasswordService:ForgotPasswordService) { }

  ngOnInit() {
  }

  newStudentRegistation():void{
  
    this.studentRegistration = new UserRegistrationDTO();
}
  /*
     reset password button
  */
  sendResetpasswordEmail(){
    this.forgotPasswordService.sendUsername(this.studentRegistration.username)
                              .subscribe(data => this.message =data,error => console.log(error));
                   
  }
}
