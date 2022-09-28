import { Component } from "@angular/core";
import { FormControl, FormGroup} from "@angular/forms"
import { Router } from '@angular/router'

@Component({
    templateUrl:"./loginUi.component.html",
    selector:"login-ui",
    styleUrls:["./loginUi.component.css"]
})

export class LoginUiComponent
{
    //@Input() error: string =  "";

    constructor(private routerService : Router){}
  
    form: FormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  
    submit() 
    {
      if (this.form.valid) {
        console.log("This is Valid Data");
            this.routerService.navigate(['/main-cards']);
        //Activate Root
      }
      else
      {
        console.log("This is Invalid data");
      }
    }
}