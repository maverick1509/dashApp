import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';

@Component({
  selector: 'login-student-page',
  templateUrl: 'login-student.html'
})
export class LoginStudentPage {

  constructor(public nav: NavController, public http: Http, public storage: Storage, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create();
  }

  selectedChild: any;
  children: any;
  co_data = { token: null, name: null, lastTokenDate: null };
  data: any;
  loading: any;

    ionViewWillEnter(){
        this.storage.get('user').then((val) => {
            this.co_data.token = val.token;
            console.log(this.co_data)
            this.http.post("http://www.schooldash.xyz/services/getchildrenlist.php", this.co_data)
                    .subscribe(data => {
                      console.log(data);
                      this.data = JSON.parse(data['_body']);
                      if(this.data.status){
                        this.children = this.data.response;
                        console.log(this.children)
                      }

                      else{

                      }
                    }, error => {
                    console.log(error);// Error getting the data
            });
        });
    }

    goToDiary(child){
      this.storage.set('regNo', child);
      this.loading.present();
      setTimeout( () => {
        this.nav.setRoot(TabsNavigationPage);
        this.loading.dismiss();
      }, 1000);
    }


  
}
