import { Component } from '@angular/core';
import { NavController, SegmentButton, LoadingController, MenuController, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

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
  co_data = {token: null, regNo: null, eventId: null};

  constructor(
    public nav: NavController,
    public diaryService: DiaryService,
    public menu: MenuController,
    public app: App,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public http: Http
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

  likePost(post){
    if(post.liked){
              post.liked = false;
              post.likes = Number(post.likes) - 1;
            }
            else{
              post.liked = true;
              post.likes = Number(post.likes) + 1;
            }
    this.storage.get('regNo').then((val) => {
          this.storage.get('user').then((val2) => {
            this.co_data.regNo = val;
            this.co_data.token = val2.token;
            this.co_data.eventId = post.id;
            console.log(this.co_data)
            
            this.http.post("http://www.schooldash.xyz/services/likepost.php", this.co_data)
                            .subscribe(data => {
                              console.log(data);
                            }, error => {
                            console.log(error);// Error getting the data
            });
          });
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
