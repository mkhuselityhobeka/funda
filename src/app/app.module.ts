import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { CreateStudentRegistrationComponent } from './create-student-registration/create-student-registration.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { StudentApplicationFormComponent } from './student-application-form/student-application-form.component';
import { from } from 'rxjs';
import { ConfirmRegistrationComponent } from './confirm-registration/confirm-registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentRegistrationComponent,
    LoginComponent,
    HomePageComponent,
    AboutPageComponent,
    StudentApplicationFormComponent,
    ConfirmRegistrationComponent,
    ResetPasswordComponent,
    ResetPasswordPageComponent,    
  ],
  
    imports: [
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
