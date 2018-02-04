import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'event-modal-page',
  templateUrl: 'event-modal.html'
})
export class EventModalPage {
	item: any;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {}

dismiss() {
    this.viewCtrl.dismiss();
  }

}
