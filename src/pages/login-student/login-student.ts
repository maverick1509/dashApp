import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'login-student-page',
  templateUrl: 'login-student.html'
})
export class LoginStudentPage {

  constructor(public nav: NavController, public http: Http, public storage: Storage) {

  }

  
}
