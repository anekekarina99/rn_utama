interface IBaseResponseData<T> {
  code?: number;
  message?: string;
  data?: T;
  log_id?: string;
  time?: string;
}

interface IBaseIdAndName {
  id: number;
  name: string;
}

interface IBasePaginationFilter {
  page?: number;
  size?: number;
  limit?: number;
  offset?: number;
}

interface IBaseChapter {
  id?: number;
  subject_id?: number;
  name?: string;
  is_active?: boolean;
  school_id?: number;
  order?: number;
  subject?: IBaseSubject;
}

interface IBaseQuestion {
  id?: any;
  uuid?: string;
  number?: number;
  type?: string;
  image_id?: string;
  question?: string;
  path_url?: string;
  answer?: string;
  value?: number;
  student_answer?: string;
  choice?: IBaseChoice[];
  chapter?: IBaseChapter;
  order?: number;
}
interface IBaseChoice {
  key?: string;
  description?: string;
  correct?: boolean;
}

interface IBaseRombelClassSchool {
  id?: number;
  rombel_id?: number;
  class_id?: number;
  school_id?: number;
  name?: string;
}

interface IBaseSubject {
  id?: number;
  class_id?: number;
  curriculum_id?: number;
  name?: string;
  icon_mobile?: string;
  icon_web?: string;
  is_active?: boolean;
  coin_default?: number;
  module_type?: string;
  path_url?: string;
  phase?: string;
}

interface IBaseService {
  id?: number;
  name?: string;
  description?: string;
  service?: string;
}

interface IBaseUser {
  id?: number;
  user_type_id?: number;
  class_id?: number;
  school_id?: number;
  username?: string;
  email?: string;
  gender?: string;
  phone_number?: string;
  registration_number?: string;
  full_name?: string;
  max_password_failed?: number;
  dummy?: boolean;
  active?: boolean;
  max_otp_failed?: number;
  max_request_otp?: number;
  attempted_request_after_failed?: number;
  avatar?: string;
  daily_check_in?: boolean;
  xp?: number;
  last_active?: string;
  coachmark_mobile_dashboard?: boolean;
  coachmark_web_dashboard?: boolean;
  coachmark_mobile_leaderboard?: boolean;
  coachmark_web_leaderboard?: boolean;
  coachmark_web_regular?: boolean;
  coachmark_mobile_tanya?: boolean;
  coachmark_web_tanya?: boolean;
  coachmark_mobile_coin?: boolean;
  prefered_video_quality?: number;
  user_type?: UserType;
  school?: School;
  class?: Class;
  school_name?: string;
  path_url?: string;
  rombel_class_school_user?: RombelClassSchoolUser[];
  approval_status?: string;
  coin?: number;
  user_token?: string;
  access_token?: string;
  services?: Service[];
  ttl?: string;
  academi_phase?: AcademiPhase;
}

interface AcademiPhase {
  id?: number;
  academic_year_id?: number;
  school_id?: number;
  type?: string;
  start_date?: string;
  end_date?: string;
}

interface Class {
  id?: number;
  degree_id?: number;
  major_id?: number;
  name?: string;
  order?: number;
  degree?: UserType;
  major?: Major;
  value?: any;
}

interface UserType {
  id?: number;
  name?: string;
  image?: string;
  icon_mobile?: string;
  icon_web?: string;
  description?: string;
}

interface Major {
  id?: number;
  name?: string;
}

interface RombelClassSchoolUser {
  id?: number;
  rombel_class_school_id?: number;
  academic_year_id?: number;
  user_id?: number;
  user_type_id?: number;
  rombel_class_school?: RombelClassSchool;
}

interface RombelClassSchool {
  id?: number;
  rombel_id?: number;
  class_id?: number;
  school_id?: number;
  name?: string;
  value?: any;
}

interface School {
  id?: number;
  degree_id?: number;
  name?: string;
  image?: string;
  address?: string;
  phone_number?: string;
  email?: string;
  has_package?: boolean;
  degree?: Degree;
  path_url?: string;
}

interface Degree {}

interface IContact {
  phoneNumbers?: PhoneNumber[];
  isStarred?: boolean;
  postalAddresses?: any[];
  thumbnailPath?: string;
  department?: string;
  jobTitle?: string;
  emailAddresses?: any[];
  urlAddresses?: any[];
  suffix?: null;
  company?: string;
  imAddresses?: any[];
  note?: string;
  middleName?: string;
  displayName?: string;
  familyName?: string;
  givenName?: string;
  prefix?: null;
  hasThumbnail?: boolean;
  rawContactId?: string;
  recordID?: string;
}

interface PhoneNumber {
  id?: string;
  label?: string;
  number?: string;
}

interface IBaseZoom {
  ID?: number;
  id_zoom?: number;
  start_url?: string;
  join_url?: string;
  zak_token?: string;
  media_id?: string;
}

interface IBasePackage {
  id?: number;
  name?: string;
  total_question?: number;
  class_id?: number;
  subject_id?: number;
  chapter_id?: number;
  school_id?: number;
  multiple_choice_count?: number;
  multiple_choice_complex_count?: number;
  essay_count?: number;
  package_question?: IBasePackageQuestion[];
}

interface IBasePackageQuestion {
  id?: number;
  question_package_id?: number;
  question_id?: number;
  orders?: number;
  order?: number;
  question_detail?: IBaseQuestionDetail;
  question?: string;
  isChecked?: boolean;
  question_type?: IBaseQuestionType;
}

interface IBaseQuestionDetail {
  id?: number;
  instructions?: string;
  question?: string;
  marks?: number;
  file_id?: string;
  path_url?: string;
  chapter_id?: number;
  subject_id?: number;
  class_id?: number;
  question_service_type_id?: number;
  question_id?: number;
  question_options_id?: number;
  question_type_id?: number;
  question_level_id?: number;
  options?: IBaseOption[];
  status?: string;
  student_answer?: string;
  answer?: {
    user_input?: string;
    selected_options?: number;
    status?: string;
  };
  question_discuss?: IBaseQuestionDiscuss;
  question_type?: IBaseQuestionType;
}

interface IBaseQuestionType {
  description?: string;
  evaluation_type?: string;
  id?: number;
  question_type?: string;
}

interface IBaseOption {
  id?: number;
  key?: string;
  answer?: string;
  is_correct?: boolean;
  question_id?: number;
  description?: string;
  file_id?: string;
  file_name?: string;
  path_url?: string;
  checked?: boolean;
  correct?: boolean;
}

interface IBaseQuestionDiscuss {
  id?: number;
  explanation?: string;
  question_id?: number;
  file_id?: string;
}

interface IBaseQuestionLevel {
  id?: number;
  level?: number;
  name?: string;
}

interface IBaseCurricullum {
  id?: number;
  name?: string;
}

interface IBaseRombelClass {
  rombel_class_school_id?: number;
  class_id?: any;
  class_name?: string;
  rombel_class_school_name?: string;
}

interface IBaseRombelUser {
  id?: number;
  full_name?: string;
  fullname?: string;
  registration_number?: string;
  avatar?: string;
  email?: string;
  phone_number?: string;
  user_type_id?: number;
  user_type_name?: string;
  user_rombel?: IBaseRombelClass[];
}

interface IBaseJWTUser {
  id?: number;
  fullname?: string;
  phone_number?: string;
  gender?: string;
  email?: string;
  avatar?: string;
  locked?: boolean;
  fcm_token?: string;
  user_type_id?: number;
  user_type_name?: string;
  user_type_image?: string;
  school_id?: number;
  school_name?: string;
  school_image?: string;
  school_phone_number?: string;
  school_email?: string;
  school_address?: string;
  class_id?: number;
  class_name?: string;
  major_id?: number;
  major_name?: string;
  degree_id?: number;
  degree_name?: string;
  services?: Service[];
  is_dummy?: boolean;
  exp?: number;
  context?: Context;
  aud?: string;
  iss?: string;
  sub?: string;
  room?: string;
}

interface IBaseContext {
  user?: IBaseUser;
}

interface IBaseServices {
  name?: string;
  class_id?: number;
}

interface IResSearchUniversityMajorV2 {
  id?: number;
  major?: Major;
  major_id?: number;
  profession?: Profession;
  profession_id?: number;
}

interface Major {
  flag?: string;
  id?: number;
  name?: string;
}

interface Profession {
  id?: number;
  name?: string;
}

interface IResGetFCMToken {
  id?: number;
  user_id?: number;
  fcm_token?: string;
  platform?: string;
}

interface ISelectMultiRombel {
  rombel_class_school_name: string;
  rombel_class_school_id: number;
  rombel_user: IBaseRombelUser[];
}

interface IMultipleRombel {
  item: ISelectMultiRombel;
  index: number;
  separators: DynamicObject;
}

interface IBaseChild {
  id?: number;
  user_id?: number;
  full_name?: string;
  school_id?: number;
  school_name?: string;
  class_id?: number;
  rombel_name?: string;
  account_type?: string;
  approval_status?: string;
  last_active?: string;
  avatar?: string;
  access_token?: string;
  compressed_token?: string;
}

interface IBaseReduxState<T = any> {
  loading: boolean;
  data: T;
  error: string;
}

interface IStoreAcademicYearData {
  id?: number;
  rombel_class_school_id?: number;
  academic_year_id?: number;
  academic_phase_id?: number;
  issue_date?: string;
  paper_size?: string;
  official_paper?: string;
  school_id?: number;
  class_id?: number;
}

type IStoreAcademicYearRdx = {} & IBaseReduxState<IStoreAcademicYearData>;

type IAcademicPhaseRdx = {} & IBaseReduxState<IAcademicPhaseRdxData>;

interface IAcademicPhaseRdxData {
  code?: number;
  message?: string;
  data?: IAcademicPhaseRdxDataDetail[];
  time?: string;
  log_id?: string;
}

interface IAcademicPhaseRdxDataDetail {
  id?: number;
  school_id?: number;
  start_date?: string;
  end_date?: string;
  years?: string;
  academic_phase?: AcademicPhase[];
}

interface AcademicPhase {
  id?: number;
  academic_year_id?: number;
  school_id?: number;
  type?: string;
  start_date?: string;
  end_date?: string;
}

interface IEraportShareList {
  code?: number;
  message?: string;
  data?: IEraportShareListData;
  time?: string;
  log_id?: string;
}

interface IEraportShareListData {
  id?: number;
  academic_year?: AcademicYear;
  academic_phase?: AcademicPhase;
  issue_date?: string;
  paper_size?: string;
  official_paper?: string;
  assessment_erapor_share_student?: AssessmentEraporShareStudent[];
}

interface AcademicPhase {
  id?: number;
  academic_year_id?: number;
  school_id?: number;
  type?: string;
  start_date?: string;
  end_date?: string;
}

interface AcademicYear {
  id?: number;
  school_id?: number;
  start_date?: string;
  end_date?: string;
}

interface AssessmentEraporShareStudent {
  id?: number;
  assessment_erapor_share_id?: number;
  assessment_erapor_share?: AssessmentEraporShare;
  user_id?: number;
  user?: IBaseUser;
  share?: boolean;
  ui_button_edit_erapor_student?: boolean;
}

interface AssessmentEraporShare {
  id?: number;
  rombel_class_school_id?: number;
  academic_year_id?: number;
  academic_phase_id?: number;
  academic_phase?: AcademicPhase;
  issue_date?: string;
  paper_size?: string;
  official_paper?: string;
  school_id?: number;
  class_id?: number;
}

interface IEraportAssesmentSettings {
  code?: number;
  message?: string;
  data?: IEraportAssesmentSettingsData;
  time?: string;
  log_id?: string;
}

interface IEraportAssesmentSettingsData {
  semester?: Semester[];
  type_assessment?: TypeAssessment[];
}

interface Semester {
  choose?: boolean;
  id?: number;
  academic_year_id?: number;
  school_id?: number;
  type?: string;
  start_date?: string;
  end_date?: string;
}

interface TypeAssessment {
  subject_id?: number;
  name?: string;
  basic_competency_detail?: BasicCompetencyDetail[];
}

interface BasicCompetencyDetail {
  choose?: boolean;
  id?: number;
  basic_competency_id?: number;
  no?: number;
  name?: string;
  chapter?: string;
  title?: string;
  notes?: string;
}
