import { Component } from '@angular/core';
import { NavController, MenuController, App, NavParams, SegmentButton, LoadingController } from 'ionic-angular';


import 'rxjs/Rx';

import { TimelineEvent } from './timeline.model';
import { TimelinePost } from './timeline.model';
import { TimelineService } from './timeline.service';

@Component({
  selector: 'timeline-page',
  templateUrl: 'timeline.html'
})
export class TimelinePage {
  display: string;
  timeline: TimelinePost = new TimelinePost();
  timeline2: TimelineEvent = new TimelineEvent();
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
        this.loading.dismiss();
      });

    this.timelineService
      .getData2()
      .then(data => {
        this.timeline2.posts = data.posts;
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
