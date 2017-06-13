import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import 'rxjs/Rx';

import { DayTimeTableModel } from './daytimetable.model';
import { DayTimeTableService } from './daytimetable.service';

@Component({
  selector: 'daytimetable-page',
  templateUrl: 'daytimetable.html'
})
export class DayTimeTablePage {
  segment: string;
  daytimetable: DayTimeTableModel = new DayTimeTableModel();
  loading: any;

  constructor(
    public nav: NavController,
    public DayTimeTableService: DayTimeTableService,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.DayTimeTableService
      .getData()
      .then(data => {
        this.daytimetable.today = data.today;
        this.loading.dismiss();
      });
  }
}
