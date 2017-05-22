import { Component } from '@angular/core';
import { NavController, ModalController, SegmentButton, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

import { FeedPage } from '../feed/feed';
import 'rxjs/Rx';

import { DiaryModel } from './diary.model';
import { DiaryService } from './diary.service';

import { LeavePage } from '../leave/leave';
import { PaymentPage } from '../payment/payment';

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
    public modal: ModalController,
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
        this.diary.banner_image = data.banner_image;
        this.diary.banner_title = data.banner_title;
        this.diary.teachers = data.teachers;
        this.diary.categories = data.categories;
        this.diary.posts = data.posts;
        this.diary.today = data.today;
        this.diary.upcoming = data.upcoming;
        this.diary.homeworks = data.homeworks;
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

  showLeaveModal() {
    let modal = this.modal.create(LeavePage);
    modal.present();
  }

  showPaymentModal() {
    let modal = this.modal.create(PaymentPage);
    modal.present();
  }

}
