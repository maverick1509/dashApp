import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { DayTimeTableModel } from './daytimetable.model';

@Injectable()
export class DayTimeTableService {
  constructor(public http: Http) {}

  getData(): Promise<DayTimeTableModel> {
    return this.http.get('./assets/example_data/daytimetable.json')
     .toPromise()
     .then(response => response.json() as DayTimeTableModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
