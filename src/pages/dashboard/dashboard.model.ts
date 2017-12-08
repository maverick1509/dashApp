export class DashboardModel {
  categories: Array<DashboardItemModel>;
  banner_title: string;
  banner_image: string;
  items: string;
}

export class DashboardItemModel {
  title: string;
  image: string;
}
