import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DayTimeTablePage } from '../daytimetable/daytimetable';

@Component({
  selector: 'daytimetablelist-page',
  templateUrl: 'daytimetablelist.html'
})
export class DayTimeTableListPage {
  items: Array<{title: string, note?: string, component: any}>;

  constructor(public nav: NavController) {
    this.items = [
      { title: "Monday", component: DayTimeTablePage },
      { title: 'Tuesday', component: DayTimeTablePage },
      { title: 'Wednesday', component: DayTimeTablePage },
      { title: 'Thrusday', component: DayTimeTablePage },
      { title: 'Friday', component: DayTimeTablePage },
      { title: 'Saturday', component: DayTimeTablePage }
    ];
  }

  itemTapped(event, item) {
    this.nav.push(item.component);
  }
}
