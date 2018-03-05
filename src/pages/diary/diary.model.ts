export class DiaryModel {

  posts: Array<DiaryPostModel> = [];
  error: string;
  errorCode: string;
  status: boolean;
  //homeworks: Array<ListModel>;

}

export class DiaryPostModel {
	id: number;
	title: string;
	brief: string;
	venue: string;
	eventDate: string; 
	isRecurring: boolean;
	timeFrom: string;
	timeTo: string;
	host: string;
	isPhoto: boolean;
	photoURL: string;
	status: string;
	timestamp: string;

 //    date: Date;
	// image: string;
	// description: string;
	// likes: number = 0;
	// comments: number = 0;
	// liked: boolean = false;
}

export class ListModel {
  name: string;
  description: string;
}

