import { Component } from '@angular/core';
import { NavController, SegmentButton, AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'leave-page',
  templateUrl: 'leave.html'
})
export class LeavePage {
  section: string;

  event_form: FormGroup;

  constructor(public nav: NavController, public alertCtrl: AlertController) {
    this.section = "event";
  }

  onSegmentChanged(segmentButton: SegmentButton) {
    // console.log('Segment changed to', segmentButton.value);
  }

  onSegmentSelected(segmentButton: SegmentButton) {
    // console.log('Segment selected', segmentButton.value);
  }

  createEvent(){
    console.log(this.event_form.value);
  }
}
