import{ UserRegistrationDTO } from '../StudendRegistration';
import{ StudentRegistrationService } from '../student-registration.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup,FormBuilder} from '@angular/forms';
import{ Router } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-create-student-registration',
  templateUrl: './create-student-registration.component.html',
  styleUrls: ['./create-student-registration.component.css']
})

export class CreateStudentRegistrationComponent implements OnInit {

  /*****
   * 
   * StudentRegistation instance
   */
     registerForm:FormGroup;
     studentRegistration:UserRegistrationDTO = new UserRegistrationDTO();
     submitted = false;
     message:any;
     //constructor injection , injecting the StudentRegistrationService and the Router using the contructor
  constructor(private studentRegistrationService:StudentRegistrationService, 
                        private  router:Router, private formBuilder:FormBuilder) {}

 
  ngOnInit() {
   
    this.registerForm = this.formBuilder.group({
     
      sname : ['', Validators.required]
    })
  }

  newStudentRegistation():void{
       this.submitted = false;
       this.studentRegistration = new UserRegistrationDTO();
       
  }

  save(){
    this.studentRegistrationService.createStudentRegistration(this.studentRegistration).
             subscribe(data => this.message = data,error => console.log(error));
            // this.studentRegistration = new StudentRegistation();
   
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  

  /**
 * goToRegPage url
 */
goToRegPage () {

  this.router.navigateByUrl('/registration').then(nav =>{
        console.log(nav);
     },err => {
       console.log(err);
     });
   }
}


