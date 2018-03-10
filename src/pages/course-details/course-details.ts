import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'course-details-page',
  templateUrl: 'course-details.html'
})
export class CourseDetailsPage {
  loading: any;
  co_data = { title: null, token: null, leaveFrom: null, leaveTo: null, regNo: null };


  constructor(public nav: NavController, public http: Http, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create();

  }

}
