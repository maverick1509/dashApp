export class DiaryModel {
  teachers: Array<DiaryItemModel>;
  categories: Array<DiaryItemModel>;
  banner_title: string;
  banner_image: string;
  posts: Array<DiaryPostModel> = [];
  today: Array<EventModel> = [];
  upcoming: Array<EventModel> = [];

}

export class DiaryItemModel {
  title: string;
  image: string;
}

export class DiaryPostModel {
    date: Date;
	image: string;
	description: string;
	likes: number = 0;
	comments: number = 0;
	liked: boolean = false;
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
