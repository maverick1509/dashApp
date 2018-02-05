import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';

@Component({
  selector: 'login-student-page',
  templateUrl: 'login-student.html'
})
export class LoginStudentPage {

  children: any;

  lastSlide = false;

  @ViewChild('slider') slider: Slides;

  constructor(public nav: NavController, public navParams: NavParams, public storage: Storage) {

  }

  ionViewWillEnter(){
    this.children = this.navParams.get('response');
  }

  onSlideChanged() {
    // If it's the last slide, then hide the 'Skip' button on the header
    this.lastSlide = this.slider.isEnd();
  }

  goToLogin() {
    this.nav.push(LoginPage);
  }

  openMainPage(child){
    this.storage.set('regNo', child);
    this.storage.get('regNo').then((val) => {
    console.log('Your regNo is', val);
  });
    this.nav.setRoot(TabsNavigationPage);
  }
}
