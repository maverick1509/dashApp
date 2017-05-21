import { Component } from '@angular/core';
import { NavController, SegmentButton, LoadingController } from 'ionic-angular';

import { FeedPage } from '../feed/feed';
import 'rxjs/Rx';

import { DiaryModel } from './diary.model';
import { DiaryService } from './diary.service';


@Component({
  selector: 'diary-page',
  templateUrl: 'diary.html',
})
export class DiaryPage {
  segment: string;  
  diary: DiaryModel = new DiaryModel();
  loading: any;

  constructor(
    public nav: NavController,
    public diaryService: DiaryService,
    public loadingCtrl: LoadingController
  ) {
    this.segment = "today";
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.diaryService
      .getData()
      .then(data => {
        this.diary.banner_image = data.banner_image;
        this.diary.banner_title = data.banner_title;
        this.diary.teachers = data.teachers;
        this.diary.categories = data.categories;
        this.diary.posts = data.posts;
        this.diary.today = data.today;
        this.diary.upcoming = data.upcoming;
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

}
