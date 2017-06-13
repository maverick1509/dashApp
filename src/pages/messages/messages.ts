import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import 'rxjs/Rx';

import { MessagesModel } from './messages.model';
import { MessagesService } from './messages.service';

import { iMessagePage } from '../imessage/imessage';

@Component({
  selector: 'messages-page',
  templateUrl: 'messages.html'
})
export class MessagesPage {
  messages: MessagesModel = new MessagesModel();
  loading: any;

  constructor(
    public nav: NavController,
    public messagesService: MessagesService,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.messagesService
      .getData()
      .then(data => {
        this.messages.today = data.today;
        this.messages.yesterday = data.yesterday;
          this.loading.dismiss();
      });
  }
  goToMessage(message: any) {
    this.nav.push(iMessagePage, {
      message: message
    });
  }


}
