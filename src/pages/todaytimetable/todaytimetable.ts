import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import 'rxjs/Rx';

import { TodayTimeTableModel } from './todaytimetable.model';
import { TodayTimeTableService } from './todaytimetable.service';

@Component({
  selector: 'todaytimetable-page',
  templateUrl: 'todaytimetable.html'
})
export class TodayTimeTablePage {
  segment: string;
  todaytimetable: TodayTimeTableModel = new TodayTimeTableModel();
  loading: any;

  constructor(
    public nav: NavController,
    public TodayTimeTableService: TodayTimeTableService,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.TodayTimeTableService
      .getData()
      .then(data => {
        this.todaytimetable.today = data.today;
        this.loading.dismiss();
      });
  }
}
