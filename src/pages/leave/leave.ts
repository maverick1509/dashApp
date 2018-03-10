import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'leave-page',
  templateUrl: 'leave.html'
})
export class LeavePage {
  loading: any;
  event_form: FormGroup;
  co_data = { title: null, token: null, leaveFrom: null, leaveTo: null, regNo: null };


  constructor(public nav: NavController, public http: Http, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public storage: Storage) {
    this.loading = this.loadingCtrl.create();

      this.event_form = new FormGroup({     
          title: new FormControl('', Validators.required),
          leaveFrom: new FormControl('', Validators.required),
          leaveTo: new FormControl('', Validators.required)
    });
  }
  
  createEvent(){
    this.storage.get('regNo').then((val) => {
      this.storage.get('user').then((val2) => {

        this.co_data.title = this.event_form.value.title;
        this.co_data.leaveFrom = this.event_form.value.leaveFrom;
        this.co_data.leaveTo = this.event_form.value.leaveTo;
        this.co_data.regNo = val;
        this.co_data.token = val2.token;
        console.log(this.co_data)
        
        this.http.post("http://www.schooldash.xyz/services/createstudentleave.php", this.co_data)
                        .subscribe(data => {
                          console.log(data);
                          if(!data['_body'].status){
                            let alert = this.alertCtrl.create({
                              title: 'Leave not created',
                              subTitle: data['_body'].error,
                              buttons: ['Dismiss']
                            });
                            alert.present();
                          }
                        }, error => {
                        console.log(error);// Error getting the data
        });
      });
    });
    this.nav.pop();
  }
}
