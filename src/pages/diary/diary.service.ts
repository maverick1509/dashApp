import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { DiaryModel } from './diary.model';

@Injectable()
export class DiaryService {
  constructor(public http: Http) {}

  getData(): Promise<DiaryModel> {
    return this.http.get('./assets/example_data/diary.json')
     .toPromise()
     .then(response => response.json() as DiaryModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
