
import { from } from 'rxjs';
export class StudentApplicationDTO{

	  firstName:string
	  lastName:string
	  pob:string
	  dob:string	
	  idNumber:string	
	  homeLanguage:string	
	  citizenship:string	
	  previousSchool:string	
	  reasonForLeaving:string
	  pastResults:string
	  address:AddressDTO
}


export class AddressDTO{

	streetName:string
	houseNumber:string
    city:string
	province:string
	zipCode:string
	country:string

}