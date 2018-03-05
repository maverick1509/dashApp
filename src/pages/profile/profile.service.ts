import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/toPromise';
import { ProfileModel } from './profile.model';

@Injectable()
export class ProfileService {
  constructor(public http: Http, public storage: Storage) {}

    data: any = {token: null, key: null};

    public getData(): Promise<ProfileModel> {
    return Promise.all([this.storage.get('regNo'), this.storage.get('user')]).then(([val1, val2]) => {
      this.data.token = val2.token;
      this.data.key = val1;
      console.log(this.data);
      return this.http.post('http://www.schooldash.xyz/services/fetchstudentapp.php', this.data)
        .toPromise();
    })
      .then(response => response.json() as ProfileModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
