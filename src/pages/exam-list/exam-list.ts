import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import 'rxjs/Rx';

import { ExamListModel } from './exam-list.model';
import { ExamListService } from './exam-list.service';



@Component({
  selector: 'exam-list-page',
  templateUrl: 'exam-list.html'
})
export class ExamListPage {
  list2: ExamListModel = new ExamListModel();
  loading: any;


  constructor(
    public nav: NavController,
    public examListService: ExamListService,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.examListService
      .getData()
      .then(data => {
        console.log(data);
        this.list2.items = data.items;
        this.loading.dismiss();
      });
  }

}
