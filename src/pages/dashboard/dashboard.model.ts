export class DashboardModel {
  populars: Array<DashboardItemModel>;
  categories: Array<DashboardItemModel>;
  banner_title: string;
  banner_image: string;
}

export class DashboardItemModel {
  title: string;
  image: string;
}
