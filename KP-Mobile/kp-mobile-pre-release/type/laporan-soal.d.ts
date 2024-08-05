export interface ILaporanSoal {
  video_watched: number;
  soal_completed: number;
  report: Report[];
}

export interface Report {
  subject: Subject;
  summary: Summary;
}

export interface Subject {
  id: number;
  class_id: number;
  curriculum_id: number;
  name: string;
  icon_mobile: string;
  icon_web: string;
  is_active: boolean;
  module_type: ModuleType;
  coin_default?: number;
  image?: Image;
}

export enum Image {
  Lljasdhflkasdfjh = 'lljasdhflkasdfjh',
}

export enum ModuleType {
  Empty = '{-}',
  Tps = '{tps}',
}

export interface Summary {
  total_question: number;
  user_progress: number;
  progress_percentage: number;
}
