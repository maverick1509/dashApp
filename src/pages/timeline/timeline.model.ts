export class UserModel {
  image: string;
  location: string;
  about: string;
  email: string;
  phone: string;
  name: string;
}

export class TimelinePostModel {
  date: Date;
	image: string;
	description: string;
	likes: number = 0;
	comments: number = 0;
	liked: boolean = false;
}

export class TimelineModel {
  user: UserModel = new UserModel();
  following: Array<UserModel> = [];
  followers: Array<UserModel> = [];
  posts: Array<TimelinePostModel> = [];
}
