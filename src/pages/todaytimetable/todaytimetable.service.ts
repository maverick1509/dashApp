import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { TodayTimeTableModel } from './todaytimetable.model';

@Injectable()
export class TodayTimeTableService {
  constructor(public http: Http) {}

  getData(): Promise<TodayTimeTableModel> {
    return this.http.get('./assets/example_data/todaytimetable.json')
     .toPromise()
     .then(response => response.json() as TodayTimeTableModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
