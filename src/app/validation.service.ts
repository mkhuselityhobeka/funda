import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static getValidationErrorMessage(validatorName: string, validatorValue?: any){

       let config = {
        'required': 'This field is required',
        'email': 'The ' + validatorName + ' must contain a valid email address',
        'invalidPassword': 'Password must be at least 6 characters long, and contain a number.',
        'minLength': `Minimum length ${validatorValue.requiredLength}`,
        'invalidMatch': 'The password and confirm password must match'
 
    };

  }
}
