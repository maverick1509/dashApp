export class ListModel {
  id: number;
  courseName: string;
  courseId: string;
  name: string;
  examDate: string;
}
export class ExamListModel {
  items: Array<ListModel>;
}
