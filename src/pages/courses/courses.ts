import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import 'rxjs/Rx';

import { CourseModel } from './courses.model';
import { CourseService } from './courses.service';

import { CourseDetailsPage } from '../course-details/course-details';



@Component({
  selector: 'courses-page',
  templateUrl: 'courses.html'
})
export class CoursePage {
  list2: CourseModel = new CourseModel();
  loading: any;


  constructor(
    public nav: NavController,
    public courseService: CourseService,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.courseService
      .getData()
      .then(data => {
        console.log(data);
        this.list2.items = data.items;
        this.loading.dismiss();
      });
  }

  goToCourseDetails(item){
    console.log("HI")
    this.nav.push(CourseDetailsPage,item);
  }

}
