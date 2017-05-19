export class DiaryModel {
  populars: Array<DiaryItemModel>;
  categories: Array<DiaryItemModel>;
  banner_title: string;
  banner_image: string;
}

export class DiaryItemModel {
  title: string;
  image: string;
}
