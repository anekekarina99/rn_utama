interface IReqSearchUniversityV2 {
  professionId?: number;
  majorId?: number;
  name?: string;
  limit?: number;
  offset?: number;
}

interface IReqSearchUniversityMajorV2 {
  professionId?: number;
  universityId?: number;
  majorName?: string;
  limit?: number;
  offset?: number;
  distinctMajor?: boolean;
}

interface IReqResultSearchUniversity {
  univ_major_choice?: string | 'choice1' | 'choice2' | 'choice3';
  major_id?: number;
  university_id?: number;
  major?: any;
  university?: University;
}
interface IReqMatchUniversity {
  major_id?: number;
  university_id?: number;
}

interface IResMatchUniversity {
  id?: number;
  name?: string;
  university_id?: number;
  accreditation?: string;
  capacity?: number;
  enthusiast?: number;
  strictness?: string;
  passing_grade?: number;
  deleted_at?: null;
  university?: University;
}

interface University {
  id?: number;
  name?: string;
  province?: string;
  city?: string;
  website?: string;
  logo?: string;
  latitude?: number;
  longitude?: number;
  deleted_at?: null;
  university_major?: UniversityMajor[];
}

interface UniversityMajor {
  id?: number;
  name?: string;
  university_id?: number;
  accreditation?: string;
  capacity?: number;
  enthusiast?: number;
  strictness?: string;
  passing_grade?: number;
  deleted_at?: null;
}

interface IReqBatchUniversity {
  major_id: number;
}

interface IReqChoosenMajor {
  university_major_id: number | undefined;
}

interface IReqSetUserPersonalMajor {
  choosen_majors: IReqChoosenMajor[];
}

interface IReqBasicCompetencyList {
  school_id?: string | number;
  academic_year_id?: string | number;
  class_id?: string | number;
  user_id?: string | number;
}
