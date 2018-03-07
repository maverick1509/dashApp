import { Component } from '@angular/core';
import { NavController, LoadingController, MenuController, App } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

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
  data: {token: any, id: any, regNo: any };

  constructor(
    public nav: NavController,
    public diaryService: DiaryService,
    public menu: MenuController,
    public app: App,
    public http: Http,
    public storage: Storage,
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


  likePost(post){
    this.storage.get('user').then((val) => {
      this.storage.get('regNo').then((val2) => {
        this.data.id = post.id;
        this.data.token = val.token;
        this.data.regNo = val2;
        this.http.post("http://www.schooldash.xyz/services/likepost.php", post.id)
                    .subscribe(data => {
                      console.log(data);
                          if(post.liked){
                            post.liked = false;
                            post.likes = Number(post.likes) - 1;
                          }
                          else{
                            post.liked = true;
                            post.likes = Number(post.likes) + 1;
                          }

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
