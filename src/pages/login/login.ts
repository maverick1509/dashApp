import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginStudentPage } from '../login-student/login-student';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {

  data: any;
  err: any;
  user = { token:null, name:null }
  login: FormGroup;
  main_page: { component: any };

  constructor(public nav: NavController, public http: Http, public navParams: NavParams, public storage: Storage) {
    this.main_page = { component: LoginStudentPage };

    this.login = new FormGroup({
      mobile: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    });
  }

  doLogin(){
    console.log(this.login.value);

    this.http.post("http://www.schooldash.xyz/services/parentlogin.php", this.login.value)
                .subscribe(data => {
                  console.log(data);
                  this.data = JSON.parse(data['_body']);
                  if(!this.data.status){
                    this.err = this.data.error;
                    console.log(this.err);
                  }

                  else{
                    this.user.token = this.data.token;
                    this.user.name = this.data.name;
                    console.log(this.user)
                    this.storage.set('user', this.user);
                    this.nav.push(this.main_page.component, this.data);
                  }
                }, error => {
                console.log(error);// Error getting the data
            });
    }

    goToForgotPassword(){
      this.nav.push(ForgotPasswordPage);
    }

}
