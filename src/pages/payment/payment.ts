import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'payment-page',
  templateUrl: 'payment.html'
})
export class PaymentPage {
  loading: any;
  card_form: FormGroup;

  constructor(public nav: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create();
    this.card_form = new FormGroup({
      card_number: new FormControl('', Validators.required),
      card_holder: new FormControl('', Validators.required),
      cvc: new FormControl('', Validators.required),
      exp_date: new FormControl('', Validators.required),
      save_card: new FormControl(true, Validators.required)
    });
  }

  createCard(){
    console.log(this.card_form.value);
  }

}
