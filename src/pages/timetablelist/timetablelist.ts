import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TodayTimeTablePage } from '../todaytimetable/todaytimetable';
import { DayTimeTableListPage } from '../daytimetablelist/daytimetablelist';

@Component({
  selector: 'timetablelist-page',
  templateUrl: 'timetablelist.html'
})
export class TimeTablelistPage {
  items: Array<{title: string, note?: string, component: any}>;

  constructor(public nav: NavController) {
    this.items = [
      { title: "Today's time table", component: TodayTimeTablePage },
      { title: 'Daywise time table', component: DayTimeTableListPage }
    ];
  }

  itemTapped(event, item) {
    this.nav.push(item.component);
  }
}
