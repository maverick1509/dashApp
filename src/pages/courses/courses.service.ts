import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/toPromise';
import { CourseModel } from './courses.model';

@Injectable()
export class CourseService {
  constructor(public http: Http, public storage: Storage) {}

    data: any = {token: null, regNo: null};

    public getData(): Promise<CourseModel> {
    return Promise.all([this.storage.get('regNo'), this.storage.get('user')]).then(([val1, val2]) => {
      this.data.token = val2.token;
      this.data.regNo = val1;
      console.log(this.data)
      return this.http.post('http://www.schooldash.xyz/services/fetchexamslist.php', this.data)
        .toPromise();
    })
      .then(response => response.json() as CourseModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
