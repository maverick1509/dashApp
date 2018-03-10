export class ListModel {
  id: number;
  courseName: string;
  courseId: string;
  name: string;
  examDate: string;
}
export class CourseModel {
  items: Array<ListModel>;
}
