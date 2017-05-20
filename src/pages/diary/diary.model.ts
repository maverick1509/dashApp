export class DiaryModel {
  populars: Array<DiaryItemModel>;
  categories: Array<DiaryItemModel>;
  banner_title: string;
  banner_image: string;
  posts: Array<DiaryPostModel> = [];

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

