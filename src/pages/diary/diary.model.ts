export class DiaryModel {

  posts: Array<DiaryPostModel> = [];
  today: Array<EventModel> = [];
  upcoming: Array<EventModel> = [];
  homeworks: Array<ListModel>;

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

export class ListModel {
  name: string;
  image: string;
  description: string;
}
