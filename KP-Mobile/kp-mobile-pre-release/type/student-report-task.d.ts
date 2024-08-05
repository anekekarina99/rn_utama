export interface IStudentReportTask {
  task_done: number;
  task_undone: number;
  average_value: number;
  average_kkm: number;
  highest: Est[];
  lowest: Est[];
}

export interface Est {
  subject_id: number;
  subject: string;
  value: number;
}
