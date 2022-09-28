import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup} from "@angular/forms";

interface Gender {
    value: string;
    viewValue: string;
  }

@Component({
    templateUrl:"./signUp.component.html",
    selector:"signup-ui",
    styleUrls:["./signUp.component.css"]
})


export class SignUpUiComponent
{
    form: FormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      retype_password: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl(''),
      age: new FormControl('')
    });

    genderList: Gender[] = [
        {value: 'male', viewValue: 'Male'},
        {value: 'female', viewValue: 'Female'}
    ];
  
    submit() 
    {
      if (this.form.valid) {
        console.log("This is Valid Data");
      }
      else
      {
        console.log("This is Invalid data");
      }
    }
}