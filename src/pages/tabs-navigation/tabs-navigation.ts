import { Component } from '@angular/core';

import { DiaryPage } from '../diary/diary';
import { ProfilePage } from '../profile/profile';
import { MessagesPage } from '../messages/messages';
import { NotificationsPage } from '../notifications/notifications';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;
  tab5Root: any;

  constructor() {
    this.tab1Root = DiaryPage;
    this.tab2Root = DashboardPage;
    this.tab3Root = NotificationsPage;
    this.tab4Root = MessagesPage;
    this.tab5Root = ProfilePage;
  }
}
