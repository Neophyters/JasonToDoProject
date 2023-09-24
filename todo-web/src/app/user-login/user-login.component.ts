import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  storeLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.storeLogin = this.formBuilder.group({
      storeUsername: "",
      storePassword: ""
      });
  }

  submitLoginInfo() {
    console.log(this.storeLogin.get("storeUsername")?.value);
    this.storeLogin.get("storeUsername")?.setValue(""); 
    console.log(this.storeLogin.get("storePassword")?.value);
    this.storeLogin.get("storePassword")?.setValue(""); 

  }

}
