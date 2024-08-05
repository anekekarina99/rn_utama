export interface IStudentReportExam {
  total_exam: number;
  average_value: number;
  average_kkm: number;
  highest: Highest[];
  lowest: null;
}

export interface Highest {
  subject_id: number;
  subject: string;
  point: number;
}
