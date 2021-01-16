import { Routes, RouterModule } from "@angular/router";
import { CreateStudentRegistrationComponent } from "./create-student-registration/create-student-registration.component";
import { AboutPageComponent } from './about-page/about-page.component';
import{ LoginComponent } from './login/login.component';
import { StudentApplicationFormComponent } from './student-application-form/student-application-form.component';
import{ HomePageComponent } from './home-page/home-page.component';
import { ConfirmRegistrationComponent } from './confirm-registration/confirm-registration.component'; 
import { ResetPasswordComponent } from './reset-password/reset-password.component'
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component'
import { NgModule } from '@angular/core';
import { from } from 'rxjs';


const routes : Routes = [
   
    { path: '', redirectTo:"home", pathMatch:'full'},
    { path: 'home', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'application', component: StudentApplicationFormComponent },
    { path: 'registration', component: CreateStudentRegistrationComponent },
    {path : 'confirm',component:ConfirmRegistrationComponent},
    {path : 'forgot-password',component:ResetPasswordComponent},
    {path : 'reset-password-page',component:ResetPasswordPageComponent}

];

@NgModule({
   
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})

export class AppRoutingModule { }