import { Component } from '@angular/core';
import { NavController, SegmentButton, AlertController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'leave-page',
  templateUrl: 'leave.html'
})
export class LeavePage {
  loading: any;
  event_form: FormGroup;

  constructor(public nav: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create();
    this.event_form = new FormGroup({
      title: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      from_date: new FormControl('2016-09-18', Validators.required),
      from_time: new FormControl('13:00', Validators.required),
      to_date: new FormControl('', Validators.required),
      to_time: new FormControl('', Validators.required)
    });
  }
  
  createEvent(){
    console.log(this.event_form.value);
  }
}
