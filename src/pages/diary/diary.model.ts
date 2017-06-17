export class DiaryModel {

  posts: Array<DiaryPostModel> = [];
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

export class ListModel {
  name: string;
  description: string;
}

