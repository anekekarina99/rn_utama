export interface IStudentReportMaterialBySubjectId {
  subject: Subject;
  total_chapter: number;
  total_progress_percentage: number;
  total_history: TotalHistory;
  average_test: any[];
}

export interface Subject {
  id: number;
  class_id: number;
  curriculum_id: number;
  name: string;
  icon_mobile: string;
  icon_web: string;
  is_active: boolean;
  coin_default: number;
  module_type: string;
}

export interface TotalHistory {
  learn: Learn;
  practice: Learn;
  test: Learn;
}

export interface Learn {
  total_materi: number;
  user_progress: number;
  percentage: number;
}
