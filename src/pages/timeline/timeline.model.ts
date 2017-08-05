export class TimelinePostModel {
  date: Date;
	url: string;
	brief: string;
  userID: string;
  photoFlag: boolean;
  id: any;
  likes: number = 0;
	liked: boolean = false;

}

export class TimelinePost {
  posts: Array<TimelinePostModel> = [];
}

export class TimelineEvent {
  today: Array<EventModel> = [];
}

export class EventModel {
  subject: string;
  location: string;
  date: EventDate;
}

export class EventDate {
  day: string;
  month: string;
  month_name: string;
  time: string;
  full: string;
}
