import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormLayoutPage } from '../form-layout/form-layout';
import { FiltersPage } from '../filters/filters';

@Component({
  selector: 'timetablelist-page',
  templateUrl: 'timetablelist.html'
})
export class TimeTablelistPage {
  items: Array<{title: string, note?: string, component: any}>;

  constructor(public nav: NavController) {
    this.items = [
      { title: "Today's time table", component: FormLayoutPage },
      { title: 'Daywise time table', component: FiltersPage },
      { title: 'Datewise time table', component: FiltersPage }
    ];
  }

  itemTapped(event, item) {
    this.nav.push(item.component);
  }
}
