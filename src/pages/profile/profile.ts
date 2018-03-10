import { Component } from '@angular/core';
import { MenuController, App, NavParams, LoadingController, SegmentButton } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import 'rxjs/Rx';

import { ProfileModel } from './profile.model';
import { ProfileService } from './profile.service';


@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  profile: ProfileModel = new ProfileModel();
  loading: any;
  student: any;
  display: string;

  constructor(
    public menu: MenuController,
    public app: App,
    public navParams: NavParams,
    public profileService: ProfileService,
    public storage: Storage,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();
    this.display = "personal";
  }

  ionViewWillLoad(){
    this.loading.present();
    this.profileService
      .getData()
      .then(data => {
        console.log(data.user);
        this.profile.user = data.user[0];
        this.loading.dismiss();
      });
    this.storage.get('regNo').then((data) => {
     this.student = data;
     console.log(this.student);
    });
  }
  onSegmentChanged(segmentButton: SegmentButton) {
    // console.log('Segment changed to', segmentButton.value);
  }
  

  onSegmentSelected(segmentButton: SegmentButton) {
    // console.log('Segment selected', segmentButton.value);
  }
}
