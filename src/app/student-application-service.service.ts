import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
  import { from } from 'rxjs';
import { StudentApplicationDTO } from './StudentApplicationDTO';

@Injectable({
  providedIn: 'root'
})
/*****
 * Student app service
 */
export class StudentApplicationServiceService {

  private baseUrl:string='http://localhost:8090/api/student/application';
  constructor(private httpClient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  /******
   * Save message to AMQ broker
   * 
   */
  saveStudentApplication(student:StudentApplicationDTO){
    let students = JSON.stringify(student)
    console.log("student application is " + students);
    return this.httpClient.post(this.baseUrl,student,{responseType:'json'});

  }
}


