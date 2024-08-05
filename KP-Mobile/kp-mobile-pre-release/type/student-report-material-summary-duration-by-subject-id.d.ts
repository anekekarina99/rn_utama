export interface IStudentReportMaterialSummaryDurationBySubject {
  total: Total;
  total_per_week: Total;
  total_per_day: TotalPerDay[];
}

export interface Total {
  hour: number;
  minute: number;
}

export interface TotalPerDay {
  id: number;
  day: string;
  hour: number;
  minute: number;
}
