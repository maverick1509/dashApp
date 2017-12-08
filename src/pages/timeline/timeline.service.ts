import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { TimelinePost } from './timeline.model';
import { TimelineEvent } from './timeline.model';

@Injectable()
export class TimelineService {
  constructor(public http: Http) {}

  getData(): Promise<TimelinePost> {

    let headers= new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
    headers.append('Access-Control-Allow-Credentials', 'true');


    return this.http.post('http://schooldash.xyz/fetchnotifications.php', '', {headers : headers})
     .toPromise()
     .then(response => response.json())
     .catch(this.handleError);
  }

   getData2(): Promise<TimelineEvent> {
    let headers= new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
    headers.append('Access-Control-Allow-Credentials', 'true');


    return this.http.post('http://schooldash.xyz/fetch_events.php', '', {headers : headers})
     .toPromise()
     .then(response => response.json())
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
