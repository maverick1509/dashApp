import { Component } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';

@Component({
  selector: 'login-student-page',
  templateUrl: 'login-student.html'
})
export class LoginStudentPage {

  constructor(public nav: NavController, public http: Http, public storage: Storage) {

  }

  children: any;
  co_data = { token: null, name: null };
  data: any;

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

    goToDiary(){
      this.nav.setRoot(TabsNavigationPage);
    }


  
}
