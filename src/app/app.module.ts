import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { DiaryPage } from '../pages/diary/diary';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { FeedPage } from '../pages/feed/feed';
import { LandingPage } from '../pages/landing/landing';
import { FollowersPage } from '../pages/followers/followers';
import { LayoutsPage } from '../pages/layouts/layouts';
import { FormsPage } from '../pages/forms/forms';
import { LoginPage } from '../pages/login/login';
import { CoursePage } from '../pages/courses/courses';
import { LoginStudentPage } from '../pages/login-student/login-student';
import { TimelinePage } from '../pages/timeline/timeline';
import { MessagesPage } from '../pages/messages/messages';
import { ChatPage } from '../pages/chat/chat';
import { ProfilePage } from '../pages/profile/profile';
import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { SettingsPage } from '../pages/settings/settings';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { SchedulePage } from '../pages/schedule/schedule';
import { List1Page } from '../pages/list-1/list-1';
import { List2Page } from '../pages/list-2/list-2';
import { GridPage } from '../pages/grid/grid';
import { ResultsPage } from '../pages/results/results';
import { FormLayoutPage } from '../pages/form-layout/form-layout';
import { FiltersPage } from '../pages/filters/filters';
import { TimeTablelistPage } from '../pages/timetablelist/timetablelist';
import { DayTimeTableListPage } from '../pages/daytimetablelist/daytimetablelist';
import { TodayTimeTablePage } from '../pages/todaytimetable/todaytimetable';
import { DayTimeTablePage } from '../pages/daytimetable/daytimetable';
import { EventModalPage } from '../pages/event-modal/event-modal';


import { TermsOfServicePage } from '../pages/terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { LeavePage } from '../pages/leave/leave';
import { PaymentPage } from '../pages/payment/payment';

import { PreloadImage } from '../components/preload-image/preload-image';
import { BackgroundImage } from '../components/background-image/background-image';
import { ShowHideContainer } from '../components/show-hide-password/show-hide-container';
import { ShowHideInput } from '../components/show-hide-password/show-hide-input';
import { ColorRadio } from '../components/color-radio/color-radio';
import { CounterInput } from '../components/counter-input/counter-input';
import { Rating } from '../components/rating/rating';
import {ElasticTextarea} from '../components/elasticTextarea';
import {ProfileHeader} from '../components/profileHeader';
import {ChatBubble} from '../components/chatBubble/chatBubble';

import { FeedService } from '../pages/feed/feed.service';
import { DiaryService } from '../pages/diary/diary.service';
import { CourseService } from '../pages/courses/courses.service';
import { DashboardService } from '../pages/dashboard/dashboard.service';
import { ProfileService } from '../pages/profile/profile.service';
import { TimelineService } from '../pages/timeline/timeline.service';
import { MessagesService } from '../pages/messages/messages.service';
import { List1Service } from '../pages/list-1/list-1.service';
import { List2Service } from '../pages/list-2/list-2.service';
import { ScheduleService } from '../pages/schedule/schedule.service';
import { TodayTimeTableService } from '../pages/todaytimetable/todaytimetable.service';
import { DayTimeTableService } from '../pages/daytimetable/daytimetable.service';

@NgModule({
  declarations: [
    MyApp,
    DiaryPage,
    DashboardPage,
    CoursePage,
    EventModalPage,
    FeedPage,
    FollowersPage,
    ResultsPage,
    LayoutsPage,
    LandingPage,
    FormsPage,
    TimeTablelistPage,
    TodayTimeTablePage,
    DayTimeTablePage,
    DayTimeTableListPage,
    LoginPage,
    LoginStudentPage,
    TimelinePage,
    MessagesPage,
    ChatPage,
    ProfilePage,
    TabsNavigationPage,
    WalkthroughPage,
    SettingsPage,
    ForgotPasswordPage,
    SchedulePage,
    List1Page,
    List2Page,
    GridPage,
    FormLayoutPage,
    FiltersPage,
    TermsOfServicePage,
    PrivacyPolicyPage,
    LeavePage,
    PaymentPage,

    PreloadImage,
    BackgroundImage,
    ShowHideContainer,
    ShowHideInput,
    ColorRadio,
    CounterInput,
    Rating,
    ElasticTextarea,
    ProfileHeader,
    ChatBubble
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiaryPage,
    DashboardPage,
    FeedPage,
    EventModalPage,
    ResultsPage,
    FollowersPage,
    LandingPage,
    CoursePage,
    LayoutsPage,
    FormsPage,
    TimeTablelistPage,
    TodayTimeTablePage,
    DayTimeTablePage,
    DayTimeTableListPage,
    LoginPage,
    LoginStudentPage,
    TimelinePage,
    MessagesPage,
    ChatPage,
    ProfilePage,
    TabsNavigationPage,
    WalkthroughPage,
    SettingsPage,
    ForgotPasswordPage,
    SchedulePage,
    List1Page,
    List2Page,
    GridPage,
    FormLayoutPage,
    FiltersPage,
    TermsOfServicePage,
    PrivacyPolicyPage,
    LeavePage,
    PaymentPage
  ],
  providers: [FeedService,CourseService, TodayTimeTableService, DiaryService, DashboardService, ProfileService, TimelineService, MessagesService, DayTimeTableService, List1Service, List2Service, ScheduleService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
