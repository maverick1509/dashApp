import { Component } from '@angular/core';
import { NavController, MenuController, App, NavParams, SegmentButton, LoadingController } from 'ionic-angular';


import 'rxjs/Rx';

import { TimelineModel } from './timeline.model';
import { TimelineService } from './timeline.service';

@Component({
  selector: 'timeline-page',
  templateUrl: 'timeline.html'
})
export class TimelinePage {
  display: string;
  timeline: TimelineModel = new TimelineModel();
  loading: any;

  constructor(
    public menu: MenuController,
    public app: App,
    public nav: NavController,
    public navParams: NavParams,
    public timelineService: TimelineService,
    public loadingCtrl: LoadingController
  ) {
    this.display = "notices";

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.timelineService
      .getData()
      .then(data => {
        this.timeline.posts = data.posts;
        this.timeline.today = data.today;
        this.loading.dismiss();
      });
  }

  
onSegmentChanged(segmentButton: SegmentButton) {
     console.log('Segment changed to', segmentButton.value);
  }

  onSegmentSelected(segmentButton: SegmentButton) {
     console.log('Segment selected', segmentButton.value);
  }
}
