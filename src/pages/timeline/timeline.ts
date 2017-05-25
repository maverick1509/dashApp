import { Component } from '@angular/core';
import { MenuController, App, NavParams, LoadingController } from 'ionic-angular';


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
    public navParams: NavParams,
    public timelineService: TimelineService,
    public loadingCtrl: LoadingController
  ) {
    this.display = "list";

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
  }
}
