import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

import { TermsOfServicePage } from '../terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';

import { WalkthroughPage } from '../walkthrough/walkthrough';
import 'rxjs/Rx';
import { Storage } from '@ionic/storage';

import { ProfileModel } from '../profile/profile.model';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'settings-page',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  settingsForm: FormGroup;
  // make WalkthroughPage the root (or first) page
  rootPage: any = WalkthroughPage;
  loading: any;
  profile: ProfileModel = new ProfileModel();

  constructor(
    public nav: NavController,
    public modal: ModalController,
    public loadingCtrl: LoadingController,
    public profileService: ProfileService,
    public storage: Storage,
    public alertCtrl: AlertController
  ) {
    this.loading = this.loadingCtrl.create();

    this.settingsForm = new FormGroup({
      name: new FormControl(),
      location: new FormControl(),
      currency: new FormControl(),
      weather: new FormControl(),
      notifications: new FormControl()
    });
  }

  ionViewDidLoad() {
    this.loading.present();
    this.profileService
      .getData()
      .then(data => {
        this.profile.user = data.user[0];

        this.settingsForm.setValue({
          name: data.user[0].name,
          location: data.user[0].location,
          currency: 'dollar',
          weather: 'fahrenheit',
          notifications: true
        });

        this.loading.dismiss();
      });
  }

  logoutAlert(){
    let alert = this.alertCtrl.create({
    title: 'Logout',
    message: 'Are you sure you want to logout?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          this.logout();
          console.log('Logged out!');
        }
      }
    ]
  });
  alert.present();
  }

  logout(){
    this.storage.remove('user');
    this.storage.remove('regNo');
    this.profile = null;
  }

  showTermsModal() {
    let modal = this.modal.create(TermsOfServicePage);
    modal.present();
  }

  showPrivacyModal() {
    let modal = this.modal.create(PrivacyPolicyPage);
    modal.present();
  }
}
