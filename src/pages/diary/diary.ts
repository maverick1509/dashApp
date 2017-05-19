import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { FeedPage } from '../feed/feed';
import 'rxjs/Rx';

import { DiaryModel } from './diary.model';
import { DiaryService } from './diary.service';


@Component({
  selector: 'diary-page',
  templateUrl: 'diary.html',
})
export class DiaryPage {
  diary: DiaryModel = new DiaryModel();
  loading: any;

  constructor(
    public nav: NavController,
    public diaryService: DiaryService,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();
  }


  ionViewDidLoad() {
    this.loading.present();
    this.diaryService
      .getData()
      .then(data => {
        this.diary.banner_image = data.banner_image;
        this.diary.banner_title = data.banner_title;
        this.diary.populars = data.populars;
        this.diary.categories = data.categories;
        this.loading.dismiss();
      });
  }


  goToFeed(category: any) {
    this.nav.push(FeedPage, {
      category: category
    });
  }

}
