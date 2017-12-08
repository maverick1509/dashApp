import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { DashboardModel } from './dashboard.model';

@Injectable()
export class DashboardService {
  constructor(public http: Http) {}

  getData(): Promise<DashboardModel> {
    return this.http.get('./assets/example_data/dashboard.json')
     .toPromise()
     .then(response => response.json() as DashboardModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
