export class TimelinePostModel {
  date: Date;
	image: string;
	description: string;
	likes: number = 0;
	comments: number = 0;
	liked: boolean = false;
}

export class TimelineModel {
  posts: Array<TimelinePostModel> = [];
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
