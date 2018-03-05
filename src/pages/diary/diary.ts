import { Component } from '@angular/core';
import { NavController, SegmentButton, LoadingController, MenuController, App } from 'ionic-angular';

import { FeedPage } from '../feed/feed';
import 'rxjs/Rx';

import { DiaryModel } from './diary.model';
import { DiaryService } from './diary.service';

import { LeavePage } from '../leave/leave';
import { TimeTablelistPage } from '../timetablelist/timetablelist';


@Component({
  selector: 'diary-page',
  templateUrl: 'diary.html',
})
export class DiaryPage {
  display: string;  
  diary: DiaryModel = new DiaryModel();
  loading: any;

  constructor(
    public nav: NavController,
    public diaryService: DiaryService,
    public menu: MenuController,
    public app: App,
    public loadingCtrl: LoadingController
  ) {
    this.display = "notices";
    
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.diaryService
      .getData()
      .then(data => {
      console.log(data)
        this.diary.posts = data.posts;
        //this.diary.homeworks = data.homeworks;
        this.loading.dismiss();
      });
  }


  onSegmentChanged(segmentButton: SegmentButton) {
    // console.log('Segment changed to', segmentButton.value);
  }
  

  onSegmentSelected(segmentButton: SegmentButton) {
    // console.log('Segment selected', segmentButton.value);
  }


  goToFeed(category: any) {
    this.nav.push(FeedPage, {
      category: category
    });
  }

  goToLeave(){
    this.menu.close();
    this.app.getRootNav().push(LeavePage);
  }
   goToTimeTable(){
    this.menu.close();
    this.app.getRootNav().push(TimeTablelistPage);
  }
}
