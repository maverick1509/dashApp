import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';

@Component({
  selector: 'forgot-password-page',
  templateUrl: 'forgot-password.html'
})
export class ForgotPasswordPage {
  otp_login: FormGroup;
  main_page: { component: any };
  otpsent: any = false;
  error: any;

  constructor(public nav: NavController) {
    this.main_page = { component: TabsNavigationPage };

    this.otp_login = new FormGroup({
      mob: new FormControl('', Validators.required),
      otp: new FormControl('', Validators.required)
    });
  }

  getOtp(){
    var regex = /^[0]?[789]\d{9}$/;
    if(regex.test(this.otp_login.value.mob)){
      this.otpsent = true;
      this.error = "";
    }
    else{
      this.error = "Enter a valid Indian mobile number"
    }
    console.log(this.otp_login);
  }

  logIn(){
    console.log(this.otp_login);
    this.nav.setRoot(this.main_page.component);
  }

}
