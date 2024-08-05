export interface IStudentReportExamBySubject {
  total_exam: number;
  average_value: number;
  average_kkm: number;
  highest: Highest[];
  lowest: any[];
}

export interface Highest {
  title_id: number;
  title: string;
  point: number;
}
