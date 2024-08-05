export interface IRombelUserDetail {
  id: number;
  full_name: string;
  registration_number: string;
  avatar: string;
  email: string;
  phone_number: string;
  school_id: number;
  school_name: string;
  academic_phase_id: number;
  semester: string;
  academic_year_id: number;
  academic_year: string;
  academic_year_start: Date;
  academic_year_end: Date;
  user_type_id: number;
  user_type_name: string;
  user_rombel: UserRombel[];
}

export interface UserRombel {
  class_id: number;
  class_name: string;
  rombel_class_school_id: number;
  rombel_class_school_name: string;
}
