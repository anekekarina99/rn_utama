import {INotificationData} from '@components/atoms/NotificationController/type';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

interface LinkAccountScreenParam {
  title: 'orangtua' | 'anak';
}

interface NotesScreenParam {
  title?: string;
  chapter_id?: string;
}
interface Rules {
  id?: number;
  rules?: string;
  max_duration?: number;
  min_point?: number;
  question_service_type_id?: number;
  number_of_attempts?: number;
  cannot_skip?: boolean;
}
interface MultipleChoiceQuestionScreenParam {
  chapter_id?: any;
  subject_id?: any;
  subject_name?: any;
  module?: any;
  question_service_id?: any;
  question_package_id?: any;
  number_of_attempts?: number;
  title?: string;
  subTitle?: string;
  is_done?: boolean;
  level_id?: any;
  service:
    | 'Test'
    | 'Practice'
    | 'AKM Literasi'
    | 'AKM Numerasi'
    | 'Ulangan Harian Practice'
    | 'Ulangan Harian Test'
    | 'Ujian Tengah Semester'
    | 'Ujian Akhir Semester'
    | 'Ujian Akhir Tahun'
    | 'Ujian Sekolah'
    | 'Kuis'
    | 'Bank Soal';
  serviceTypeName?:
    | 'Latihan Soal PG'
    | 'Test Adaptif'
    | 'Tanya Jawab'
    | 'Soal Pilihan Ganda'
    | 'AKM Literasi Pilihan Ganda'
    | 'AKM Numerasi Pilihan Ganda'
    | 'Soal HOTS'
    | 'Latihan Soal Uraian'
    | 'Soal Berbasis Nilai'
    | 'Soal Uraian'
    | 'AKM Literasi Uraian'
    | 'AKM Numerasi Uraian';
  rules?: Rules;
  question_data?: {
    code?: number;
    data?: {
      answers?: any[];
      finished?: boolean;
      package_history_id?: number;
      question_package_id?: number;
      end_time?: Date;
      message?: string;
      paused?: boolean;
      paused_time?: string;
      question_package_id?: number;
      question_package_service_id?: number;
      question_type_id?: number;
      total_question?: number;
    };
  };
}

interface Datum {
  id?: string | number;
  question?: string;
  answer_user?: string;
  answer_system?: string;
  is_correct?: boolean;
  number_of_attempts?: number | string;
  explanation?: string;
}

interface IUjianResultParam {
  schoolExamScheduleId: any;
  studentExamId: any;
}

type IResultServiceType =
  | 'TEST'
  | 'SOAL'
  | 'AKM'
  | 'PRACTICE'
  | 'LMS'
  | 'TRY OUT'
  | 'PTN'
  | 'UJIAN';

interface IResultExam {
  schoolExamScheduleId?: number;
  studentExamId?: number;
}

interface ResultScreenParam {
  historyId?: IUjianResultParam | any;
  examData?: IResultExam;
  serviceType: IResultServiceType;
  title?: string;
  subTitle?: string;
  duration?: string;
  questionServiceId?: number;
  data?: Datum[];
  xpGained?: number;
  correctAnswer?: number;
  wrongAnswer?: number;
  points?: number;
  subjectId?: any;
  passAnswer?: number;
  is_essay?: boolean;
  is_tryout?: boolean;
  tryOut_answered?: number;
  module?: PTNModuleType;
  progressData?: import('@services/ptn/type').SubjectProgress[];
  nextSubjectProgressData?: import('@services/ptn/type').SubjectProgress;
  isFromMultipleQuestionTypeScreen?: boolean;
  resultsParam?: any;
  isCountdownFinish?: boolean;
}

type PTNModuleType = 'saintek' | 'soshum' | 'tps';

interface KPRegularDetailBabParam {
  category: string;
  chapterData: any;
  subject_id: any;
  subject_name: string;
  subject_icon: any;
  soal_type?: string;
  isSoal?: boolean;
  questionTypeId?: string;
  questionPackageServiceId?: string;
  subject_data?: any;
  isFromSearchModal?: boolean;
}

interface DetailHistoryTanyaScreenParam {
  tanyaId: any;
  status: any;
}

interface GMeetScreenParam {
  sessionData: import('@components/pages/ClassSessionDetailScreen/type').ISessionData;
}
interface RecordClassSessionScreen {
  service_type: any;
}
interface ClassSessionsScreenParam {
  id: any;
}

interface DiscussionGrupAddMemberParam {
  name?: any;
  avatar_id?: string;
  navigate_from?: string;
}

interface MultipleQuestionTypeScreenParam {
  task_id?: any;
  question_type?: string;
  type: 'pr_projek_tugas' | 'ujian';
  prProjekTugasType?: string;
  title?: string;
  media_id?: string;
  start_data?:
    | import('@services/lms/type').ICekPRProjectTugasResponse
    | import('@services/lms/type').ILMSUjianStartResponse;
  chapter?: IBaseChapter;
  subject?: IBaseSubject;
}
interface LMSTeacherFormClassSessionScreenParam {
  navigate_from?: any;
  data?: any;
  classSessionId?: any;
  teacherId?: number;
}

interface LMSTeacherDetailClassSessionScreenParam {
  id?: any;
  navigateFrom?: string;
  navigate_from?: string;
}

interface LMSTeacherHistoryClassSessionScreenParam {
  id?: any;
  teacherData?: any;
}
interface KPRegularScreenParam {
  subject_type: string;
  subject_data: any;
  subject_name: string;
  subject_id: any;
  subject_image: string;
}

interface LMSHomeScreenParam {
  id?: any;
}
interface ReportScreenParam {
  id?: any;
  name?: any;
  class_id?: any;
  subject?: IBaseSubject;
}

interface HistoryExamScreenTeacher {
  id: any;
}

interface TeacherAbsenceHistoryScreenParams {
  role: 'admin' | 'kepsek';
}

interface StudentAbsenceHistoryScreenParams {
  role?: 'admin' | 'kepsek';
  classRombelId?: any;
  className?: string;
}
interface ClassReportScreen {
  id: any;
}
interface DetailTaskScreenParams {
  id: any;
  data: any;
  isFromTeacher?: boolean;
}

interface DetailTaskScreenTeacher {
  id: any;
  data: any;
  isFromTeacher?: boolean;
}
interface HistoryTugasScreen {
  id: any;
}

interface LmsReportTeacherParam {
  id: any;
}
interface SortBabParam {
  id: any;
}
interface ListSubjectSchoolMaterialsParam {
  curriculum_id: number;
  class_id: number;
  class_name?: string;
  subject_id?: string;
}
interface ListChapterSchoolMaterialsParam {
  subject_id: number;
  class_name?: string;
  chapter_id?: string;
}

interface AddSchoolMaterialsParam {
  subjectParams?: any;
  chapterParams?: any;
  materialsParams?: any;
}

interface ListBabParam {
  subject_id: any;
  allData: any;
  check: boolean;
}
interface ListMaterialParam {
  id: any;
  check: boolean;
}

// interface _ILMSTeacherLaporanKehadiranMuridScreenParam_data {

// }
interface LMSTeacherLaporanKehadiranMuridScreenParam {
  data: {};
}

interface SortMaterialParam {
  id: any;
}

interface DiscussionGrupDetailParam {
  userId: number;
}

interface InputScoreKKMParam {
  id: any;
}
interface StudyReportStudentParam {
  subject: any;
  student: any;
}

interface PaketSoalChapterListScreenParams {
  subject_id: any;
  subjectName?: string;
  className?: string;
  class_id: any;
  path_url?: string;
}
interface PaketSoaListScreenParams {
  subject_id: any;
  school_only: any;
  chapter_id: any;
  class_id: any;
  title?: string;
  subtitle?: string;
}

interface DetailPaketSoalListScreenParams {
  package_id: any;
  package_id_to_be_add?: any; // paket yang akan ditambah soal
  school_id?: any;
  subject_id: any;
  title?: string;
  subtitle?: string;
  mode?: 'detail' | 'add_soal';
  class_id: any;
  chapter_id: any;
}

interface CreateSoalSendiriScreenParams {
  title?: string;
  subtitle?: string;
  class_id?: string;
  subject_id?: string;
  chapter_id?: string;
  package_id?: string;
  question_id?: any;
  order?: any;
  mode?: 'Create' | 'Edit';
}
interface HistoryExamScreen {
  subject: any;
  student_id?: number;
}

interface HistoryExamScreenParent {
  subject: any;
  data?: IBaseChild;
}
interface HistoryTaskScreen {
  subject: any;
  student_id?: number;
  student?: any;
}

interface ChooseClassParam {
  id?: number;
}

interface ViewPhotoParam {
  path_url?: string;
  header_label?: string;
}

interface InputScoreStudentScreen {
  rombel_id?: number;
}
interface DetailSoalScreenParams {
  chapter_id: any;
  school_id?: any;
  order: number;
  subject_id: any;
  title?: string;
  subtitle?: string;
  mode?: 'detail' | 'add_soal';
  class_id: any;
  package_id: any;
}

interface BankSoalScreenParams {
  subject_id: any;
  package_id?: any;
  title?: string;
  subtitle?: string;
  class_id?: any;
  chapter_id?: any;
  fromCreateJadwal?: boolean;
  onSelectFromCreateJadwal?: (param: IBasePackage) => void;
}

interface InputDetailKDParam {
  id?: number?;
  academic_year?: number;
  academic_year_id?: number;
  class_id?: number;
}
interface PersonalDataParam {
  userTypeId?: any;
  userName?: any;
}

interface PromoDetailScreenParam {
  uuid?: any;
  data?: any;
}

interface LMSTeacherClassSessionScreen {
  teacher?: any;
}

interface MeetingLiveSessionChatParam {
  service_type?: string;
  academi_class_session_id?: any;
  card_id?: string;
}

interface InputDetailKDReportParam {
  student_data: any;
  class_id: any;
  years: any;
  years_id: any;
}
interface CreateJadwalUjianScreenParam {
  schedule_id?: any;
  isEdit?: boolean;
  isDuplicate?: boolean;
}

interface KetidakhadiranScreenParams {
  subTitle?: string;
  rombelClassSchoolId?: number;
  type?: 'Kelas Online' | 'Tatap Muka';
}

interface RiwayatKetidakhadiranScreenParams {
  subTitle?: string;
  rombelClassSchoolId?: number;
  type?: 'Kelas Online' | 'Tatap Muka';
}

interface DetailKehadiranScreenParams {
  subTitle?: string;
  rombelClassSchoolId?: number;
  type?: 'Kelas Online' | 'Tatap Muka';
  className?: string;
  totalStudents?: number;
}

interface DetailKehadiranDokumenScreenParams {
  data?: any;
  subTitle?: string;
}

interface PengajuanKetidakHadiranScreenParams {
  type?: 'Kelas Online' | 'Tatap Muka';
}
interface LMSUjianTestCameraScreenParam {
  data: import('@services/lms/type').ILMSMuridUjianListResponseData;
}

interface GlobalSearchScreensParam {
  query?: string;
}

interface ClassSessionDetailGURUScreenParams {
  id: any;
  service_type?: ServiceType;
}

interface RapatVirtualTeacherScreen {
  type: 'ADMIN' | 'MURID' | 'ORANG TUA' | 'GURU' | 'KEPSEK';
}

interface DetailTeacherParam {
  id: any;
  data: any;
}

interface ReportAbsentTeacherParam {
  id: any;
  type: any;
  full_name: any;
}
interface ReportDetailAbsentTeacherParam {
  id: any;
  type: any;
  full_name: any;
}

interface ListScheduleParam {
  id: any;
  data: any;
}

interface DetailSessionClassParam {
  id: any;
  item?: any;
  full_name: any;
}

interface RapatVirtualTestCamerascreen {
  data: any;
}

interface ListScheduleHistoryParam {
  id: any;
  data: any;
  full_name;
}

interface TryOutParam {
  id: any;
}

interface TryOutQuestionScreenParam {
  data: import('@services/ptn/type').IStartTryoutPersubjectResponseData;
  progressData?: import('@services/ptn/type').SubjectProgress[];
  nextProgressData?: import('@services/ptn/type').SubjectProgress;
  type: PTNModuleType;
  title: string;
  subjectId?: number;
}
interface RaporPreviewParam {
  raporId: any;
  studentName: any;
}
interface MenuRaporByClassParam {
  classId: any;
  className: any;
  isHistory: any;
}

interface AdminListDetailScreenParams {
  user_id?: number;
  full_name?: any;
  rombel_class_school_name?: any;
  rombel_class_school_id?: number;
  class_id?: number;
  class_name?: string;
  registration_number?: number | string;
  request_tab?: string;
}

interface AdminUploadEvidenceScreenParams {
  class_id?: number;
  class_name?: string;
  full_name?: string;
  id?: number;
  registration_number?: number | string;
  rombel_class_school_id?: number;
  rombel_class_school_name?: number;
  student?: string;
  school_name?: string;
}
interface AdminListScreenParams {
  class_id: number;
  class_name: any;
}
interface AdminListHistoryScreenParams {
  rombel_class_school_name?: any;
  rombel_class_school_id?: number;
  class_id: number;
  class_name: string;
}

interface StudentListMenuParam {
  classId: any;
  className: any;
}

interface TeacherCheckExamParam {
  student_exam_id: any;
  question_package_id?: number;
  student_name: any;
  exam_name?: string;
  exam_id: any;
  mode: 'HISTORY' | 'SCORING';
  student_paper_id?: string;
}
interface PTNLiveClassRecordParam {
  subject_id?: any;
}

interface TryOutSubjectParam {
  title: any;
  id: any?;
  register_id: any?;
}

interface TryOutDetailHistoryParam {
  id: any;
  dataHistory: any;
}

interface DiagnoticTestParam {
  gender: string;
}

interface DiagnoticTestResultScreenParam {
  data: any;
}

interface DiagnoticRecommendationParam {
  professions?: any;
  majors?: any;
  profession?: any;
}

interface LKSListScreenParam {
  class_id: any;
}

interface DetailLKSScreenParam {
  data: import('@services/lms/type').IDetailLKSResponseData;
}

interface TeacherAbsenceHistoryDetailScreenParam {
  role_id: number;
  absence_id: any;
  actionType?: 'diterima' | 'ditolak';
  rejectNotes?: string;
  subTitle?: string;
}

interface StudentAbsenceHistoryDetailScreenParam {
  absence_id: any;
  withoutApprovalButton?: boolean;
}
interface ChapterKPRegularScreenParam {
  subject_type: string;
  subject_data: {
    id?: any;
    user_id?: number;
    subject_id?: number;
    class_id?: number;
    order?: number;
    subject?: {
      id?: any;
      class_id?: number;
      curriculum_id?: number;
      name?: string;
      icon_mobile?: string;
      icon_web?: string;
      is_active?: boolean;
      coin_default?: number;
      module_type?: string;
    };
    path_url?: string;
    path_id?: string;
    icon_mobile?: string;
    icon_path_id?: string;
    icon_path_url?: string;
    icon_web?: string;
    is_active?: true;
    name?: string;
  };
  isFromSoal?: boolean;
}
interface DiagnoticProfessionparam {
  profession: any;
}

interface DiagnoticCheckOpportunityParam {
  profession?: any;
  queryMajor1?: any;
  queryMajor2?: any;
  queryMajor3?: any;
  queryUniversity1?: any;
  queryUniversity2?: any;
  queryUniversity3?: any;
  queryUniversityId?: any;
  queryUniversityMajorId?: any;
  result?: IReqResultSearchUniversity[];
}

interface DiagnoticSearchParam {
  profession?: any;
  search?: string;
  searchType?: string;
  searchVal?: string;
  queryMajor1?: any;
  queryMajor2?: any;
  queryMajor3?: any;
  queryUniversity1?: any;
  queryUniversity2?: any;
  queryUniversity3?: any;
  queryUniversityId?: any;
  queryUniversityMajorId?: any;
  result?: IReqResultSearchUniversity[];
}
interface HistoryLKSScreenParam {
  subject: IBaseSubject;
  userId?: any;
  token?: string;
}

interface DiagnoticDescriptionParam {
  source?: any;
}
interface AnnouncementManageCreateScreenParam {
  type?: 'EDIT';
  id?: number;
  isFrom?: 'Dijadwalkan' | 'Aktif';
}

interface ExamDetailGuruParam {
  exam_id: number;
}

interface BlogDetailParam {
  idBlog: number;
}
interface StudentDetailParam {
  id_student: number;
}
interface LearningObjectiveScreenParam {
  chapterData: {
    id?: any;
    name?: string;
    description?: string;
    type?: string;
    chapter_material?: {
      id?: any;
      chapter_id?: any;
      learning_method_id?: number;
      title?: string;
      description?: string;
      orders?: number;
      file_id?: string;
      is_active?: boolean;
      service?: string;
      is_done?: boolean;
    }[];
  };
  contentData: {points: string[]; title: string};
}

interface LearningReportStudentOnParentScreen {
  data: any;
}
interface LMSOnParentScreen {
  data: any;
}

interface FormCreateScheduleOnParentScreen {
  filter: string;
  screen: string;
  loginAs: string;
  token: string;
  data?: object;
}
interface ProjectPancasilaScreenParam {
  service_type: 'guru' | 'kepsek';
}

interface PancasilaAllStatusProyekScreenParameters {
  service_type: 'guru' | 'kepsek';
  type: 'proyek_berlangsung' | 'riwayat_proyek';
}
interface PancasilaKirimProyekScreenParam {
  role: 'guru' | 'kepsek';
  type: 'kirim' | 'edit';
  project_id?: any;
  data?: any;
}
interface ReportOnParentScreen {
  data: any;
  subject: any;
  student?: any;
}

interface ExplanationTryoutParam {
  tyroutHistoryId: any;
  subjectId: any;
  testName: any;
}

interface LembarKehadiranScreenParam {
  rombel_class_school_id?: any;
  subTitle?: string;
}

interface TanggalKehadiranScreenParam {
  rombel_class_school_id?: any;
  className?: string;
  subTitle?: string;
  studentData?: {
    absent_count?: number;
    attend_count?: number;
    attendance_type?: string;
    full_name?: string;
    id?: any;
    registration_number?: string;
    semester?: string;
    attend_precentage?: number;
    absent_precentage?: number;
    permit_percentage?: number;
    alpha_percentage?: number;
    sick_percentage?: number;
    permit_count?: number;
    sick_count?: number;
    alpha_count?: number;
  };
}

interface IResponseDuplicateTask {
  id: number;
  user_id: number;
  type: string;
  question_type: (typeof IQUESTION_TYPES)[keyof typeof IQUESTION_TYPES] | '';
  curriculum_id: number;
  rombel_class_school_id: number;
  subject_id: number;
  chapter_id: number;
  title: string;
  time_start?: string;
  time_finish?: string;
  instructions: string;
  media_id?: string;
  status: string;
  curriculum?: any;
  subject?: any;
  chapter?: any;
  rombel_class_school?: any;
}

interface IDataDuplicateTask {
  data: IResponseDuplicateTask;
}
interface PTNReportScreen {
  data?: any;
  isFromParent?: boolean;
}

interface IDataTaskTeacher {
  task_teacher: IResponseDuplicateTask;
}
interface IDataEditTask {
  data: IDataTaskTeacher;
}
interface LMSTeacherTaskCreateParam {
  duplicateTask?: IDataDuplicateTask;
  editTask?: IDataEditTask;
  taskParams?: IResponseDuplicateTask;
  isFrom?: string;
}

interface MonitoringExamGuruScreenParam {
  subTitle: string;
  data?: import('@redux').IExamDetailResponseData | ITeacherExamDetail;
}
interface DetailEraporParam {
  id_rapor?: any;
  classes_name: any;
}

interface HomeScreenKepsek {}

interface ScheduleScreen {
  filter: string;
  screen: string;
  loginAs: string;
  token: string;
  data?: object;
}

interface RapatVirtualCreateScreen {
  type?: 'create' | 'edit';
  data?: any;
}
interface RapatVirtualDetailScreen {
  data: any;
}

// interface RapatVirtualHistoryScreen {}

interface HotsScreenParams {
  chapterData: any;
  title: string;
  question_service_type_id: any;
}

interface HomeScreenAdmin {}

interface RapatVirtualListParticipantsScreen {}
interface HomeScreenAdmin {}

interface UjianParam {
  isFromLaporan?: boolean;
  class_id?: number;
}

interface NewEbookParam {
  data: any;
}

interface HomeScreenGuruParam {
  Coachmarks: any[];
  scrollViewRef: any;
  doneCoachMark: () => void;
  totalCoachMark: number;
}

interface ReportViewScreenParam {
  filePath: string;
  fileName: string;
}

interface EditSchoolMaterialsParam {
  materialsParams?: any;
}

interface TestScreenParam {}
interface ERaportGuruScreenParam {}

interface WebViewScreenParam {
  title: string;
  url: string;
  data?: INotificationData | any;
}

interface VideoAnimationParam {
  chapterData?: any;
  allChapterData?: any;
  type?: 'PTN' | 'guru' | 'learn' | 'soal';
}

interface LMSPRTugasScreenParams {
  data?: any;
}

interface HistoryShareEraporScreenParams {
  classes_data?: any;
  academic_phase_id?: any;
}

interface ScheduleScreenParams {
  data?: Data;
  filter?: string;
  loginAs?: AccountRole;
  screen?: string;
  token?: string;
  murid?: any;
  feature?: any;
}

interface Data {}

interface PDFPreviewScreenParam {
  data?: any;
  getResHeader?: boolean;
  serviceType?: 'Analisis Butir Soal' | '';
}

interface PDFViewerIKMScreenParam {
  id?: any;
  data?: any;
  accountRole?: AccountRole;
  services?: any;
  title?: any;
}
interface PPTViewerIKMScreenParam {
  data?: any;
  accountRole?: AccountRole;
  services?: any;
  title?: any;
}
interface ListSubjectByPhaseScreenParam {
  title?: any;
}

interface IkmListItemScreenParam {
  title?: any;
  services: IkmLMSScreenType;
  data?: any;
}
interface VideoPlayerIkmScreenParam {
  title?: any;
  data?: any;
}

interface LembarKerjaScreenParam {
  userRole: UserRole;
  title?: string;
  id?: number;
  task_student_id?: number;
}

interface UploadFileIkmScreenParam {
  type?: 'Unggah' | 'Ubah';
  serviceType?: 'Modul Ajar' | 'ATP';
  data?: IBaseSubject;
  defaultValue?: any;
}

interface CreateLkpdScreenParam {
  task_id?: number;
  mode: 'CREATE' | 'DUPLICATE' | 'EDIT';
}
interface DetailPeriksaLkpdScreenParam {
  id?: number;
}
interface LkpdTeacherHistoryDetailScreenParam {
  id?: number;
}

interface PDFViewerIKMScreenParam {
  id?: any;
  data?: any;
  accountRole?: AccountRole;
  services?: any;
  title?: any;
}
interface PPTViewerIKMScreenParam {
  data?: any;
  accountRole?: AccountRole;
  services?: any;
  title?: any;
}
interface ListSubjectByPhaseScreenParam {
  title?: any;
}

interface IkmListItemScreenParam {
  title?: any;
  services: IkmLMSScreenType;
  data?: any;
}
interface VideoPlayerIkmScreenParam {
  title?: any;
  data?: any;
  userRole?: UserRole;
}

interface LembarKerjaScreenParam {
  userRole: UserRole;
  title?: string;
  id?: number;
  task_student_id?: number;
}

interface UploadFileIkmScreenParam {
  type?: 'Unggah' | 'Ubah';
  serviceType?: 'Modul Ajar' | 'ATP';
  data?: IBaseSubject;
  defaultValue?: any;
}

interface CreateLkpdScreenParam {
  task_id?: number;
  mode: 'CREATE' | 'DUPLICATE' | 'EDIT';
}
interface DetailPeriksaLkpdScreenParam {
  id?: number;
}
interface LkpdTeacherHistoryDetailScreenParam {
  id?: number;
}
interface LkpdStudentScreenParam {
  id?: number;
}
interface LkpdTeacherScreenParam {
  id?: number;
}

interface PDFViewerIKMScreenParam {
  id?: any;
  data?: any;
  accountRole?: AccountRole;
  services?: any;
  title?: any;
}
interface PPTViewerIKMScreenParam {
  data?: any;
  accountRole?: AccountRole;
  services?: any;
  title?: any;
}
interface ListSubjectByPhaseScreenParam {
  title?: any;
}

interface IkmListItemScreenParam {
  title?: any;
  services: IkmLMSScreenType;
  data?: any;
}
interface VideoPlayerIkmScreenParam {
  title?: any;
  data?: any;
  userRole?: UserRole;
}

interface LembarKerjaScreenParam {
  userRole: UserRole;
  title?: string;
  id?: number;
  task_student_id?: number;
}

interface UploadFileIkmScreenParam {
  type?: 'Unggah' | 'Ubah';
  serviceType?: 'Modul Ajar' | 'ATP';
  data?: IBaseSubject;
  defaultValue?: any;
}

interface CreateLkpdScreenParam {
  task_id?: number;
  mode: 'CREATE' | 'DUPLICATE' | 'EDIT';
}
interface DetailPeriksaLkpdScreenParam {
  id?: number;
}
interface LkpdTeacherHistoryDetailScreenParam {
  id?: number;
}
interface LkpdStudentScreenParam {
  id?: number;
}
interface LkpdTeacherScreenParam {
  id?: number;
}

interface UjianExplanationScreenParam {
  id?: number;
  role: UserRole;
}
interface DetailReportStudentScreenParam {
  data?: any;
}

interface CheckPRProjectTeacherScreenParam {
  student?: any;
  task?: any;
  taask_student_id?: number | string;
  taskId?: number | string;
}

interface LoginScreenParam {
  username?: string;
  fullname?: string;
  rolename?: string;
  phone_number?: string;
  avatar?: string;
}
interface AdminListVerificationScreenParam extends IBaseUser {
  user_id?: any;
  full_name?: any;
  rombel_class_school_name?: any;
  rombel_class_school_id?: any;
  class_id?: any;
  class_name?: any;
  registration_number?: any;
  request_tab?: any;
}

interface PracticeSoalReportDetailScreenParam {
  data?: any;
  Data?: any;
  user?: any;
}

interface HistoryTestAndExamScreenParam {
  type?: any;
  subjectData?: any;
  questionPackageServiceId?: any;
  user?: any;
}

interface KPRegularLaporanDetailScreenParam {
  subject_id?: string | number;
  icon_mobile?: string;
  user?: any;
}

interface KPRegularHistoryScoreScreenParam {
  user?: any;
  report?: any;
  student?: any;
}

interface CartHistoryScreenParams {
  access_token?: string;
  activeTab?: number;
}

type ParamList = {
  RapatVirtualListParticipantsScreen: RapatVirtualListParticipantsScreen;
  RapatVirtualCreateScreen: RapatVirtualCreateScreen;
  RapatVirtualDetailScreen: RapatVirtualDetailScreen;
  RapatVirtualHistoryScreen: any;
  HomeScreenAdmin: HomeScreenAdmin;
  HomeScreenKepsek: HomeScreenKepsek;
  ReportOnParentScreen: ReportOnParentScreen;
  FormCreateScheduleOnParentScreen: FormCreateScheduleOnParentScreen;
  LMSOnParentScreen: LMSOnParentScreen;
  ReportViewScreen: ReportViewScreenParam;
  LearningReportStudentOnParentScreen: LearningReportStudentOnParentScreen;
  JitsiScreen: JitsiScreen;
  RapatVirtualTestCamerascreen: RapatVirtualTestCamerascreen;
  RapatVirtualTeacherScreen: RapatVirtualTeacherScreen;
  LinkAccountScreen: LinkAccountScreenParam;
  NotesScreen: NotesScreenParam;
  NotificationScreen: undefined;
  MyNotesScreen: NotesScreenParam;
  HomeScreen: undefined;
  LMSHomeScreen: LMSHomeScreenParam;
  MultipleChoiceQuestionScreen: MultipleChoiceQuestionScreenParam;
  ResultScreen: ResultScreenParam;
  KPRegularScreen: KPRegularScreenParam;
  KPRegularDetailBab: KPRegularDetailBabParam;
  KPRegularLaporanDetailScreen: KPRegularLaporanDetailScreenParam;
  KPRegularHistoryScoreScreen: KPRegularHistoryScoreScreenParam;
  EssayScreen: MultipleChoiceQuestionScreenParam;
  LMSUjian: undefined;
  HistoryTanyaScreen: undefined;
  BelumDijawabTabScreen: undefined;
  TerjawabTabScreen: undefined;
  TidakSesuaiTabScreen: undefined;
  DetailHistoryTanyaScreen: DetailHistoryTanyaScreenParam;
  AskScreen: undefined;
  GMeetScreen: GMeetScreenParam;
  RecordClassSessionScreen: RecordClassSessionScreenParam;
  MeetingLiveSessionScreen: MeetingLiveSessionScreen;
  MeetingLiveSessionV2Screen: MeetingLiveSessionScreen;
  MeetingLiveSessionChatScreen: MeetingLiveSessionChatParam;
  GuruScreen: undefined;
  AKMLaporanScreen: undefined;
  ClassSessionsScreen: ClassSessionsScreenParam;
  MultipleQuestionTypeScreen: MultipleQuestionTypeScreenParam;
  ReportScreen: ReportScreenParam;
  HistoryExamScreenParent: HistoryExamScreenParent;
  HistoryExamScreen: HistoryExamScreenParam;
  HistoryExamScreenTeacher: HistoryExamScreenTeacher;
  HistoryTugasScreen: HistoryTugasScreenParam;
  LMSTeacherTaskScreen: undefined;
  LMSTeacherTaskCreateScreen: LMSTeacherTaskCreateParam;
  TeacherAbsenceHistoryScreen: TeacherAbsenceHistoryScreenParams;
  StudentAbsenceHistoryScreen: StudentAbsenceHistoryScreenParams;
  AnnouncementManageScreen: undefined;
  AnnouncementManageHistoryScreen: undefined;
  AnnouncementManageCreateScreen: AnnouncementManageCreateScreenParam;
  ExamDetailGuruScreen: ExamDetailGuruParam;
  LMSTeacherFormClassSessionScreen: LMSTeacherFormClassSessionScreenParam;
  LMSTeacherFormErrorClassSessionScreen: undefined;
  LMSTeacherDetailClassSessionScreen: LMSTeacherDetailClassSessionScreenParam;
  LMSTeacherHistoryClassSessionScreen: LMSTeacherHistoryClassSessionScreenParam;
  LmsReportTeacherScreen: LmsReportTeacherParam;
  ListBabScreen: ListBabParam;
  ListMaterialScreen: ListMaterialParam;
  SortBabScreen: SortBabParam;
  LMSTeacherMeetingLiveSessionScreen: undefined;
  SortMaterialScreen: SortMaterialParam;
  ManageSchoolMaterialsScreen: undefined;
  LMSMuridUjianScreen: undefined;
  MenuGuru: undefined;
  MenuGuruIKM: undefined;
  RowMenuGuruIKM: undefined;
  ListSubjectSchoolMaterialsScreen: ListSubjectSchoolMaterialsParam;
  ListChapterSchoolMaterialsScreen: ListChapterSchoolMaterialsParam;
  UjianScreen: UjianParam;
  PerluDiperiksaTab: undefined;
  DijadwalkanTab: undefined;
  HomeScreenGuru: HomeScreenGuruParam;
  LMSTeacherLaporanKehadiranMuridScreen: undefined;
  PaketSoalSubjectListScreen: undefined;
  PaketSoalChapterListScreen: PaketSoalChapterListScreenParams;
  PaketSoalListScreen: PaketSoaListScreenParams;
  DetailPaketSoalListScreen: DetailPaketSoalListScreenParams;
  InputScoreKKMScreen: InputScoreKKMParam;
  StudyReportStudentScreen: StudyReportStudentParam;
  CreateSoalSendiriScreen: CreateSoalSendiriScreenParams;
  HistoryTaskScreen: HistoryTaskScreen;

  // update routeapp, stack navigator with paramlist
  TeacherAbsenceHistoryDetailScreen: TeacherAbsenceHistoryDetailScreenParam;
  StudentAbsenceHistoryDetailScreen: StudentAbsenceHistoryDetailScreenParam;
  Splash: SplashScreenParam;
  HotsScreen: HotsScreenParams;
  ThinkNShareScreen: ThinkNShareScreen;
  VideoAnimationScreen: VideoAnimationParam;
  TeacherAbsenceApplicationScreen: undefined;
  StudentAbsenceApplicationScreen: undefined;
  RecordSessionClassSession: RecordSessionClassSessionParam;
  GuruPencarianScreen: GuruPencarianParam;
  KPRegularLaporanScreen: KPRegularLaporanParam;
  EbookScreen: EbookParam;
  LoginEditProfileScreen: LoginEditProfileParam;
  ScheduleScreen: ScheduleScreenParams;
  ForgotPasswordScreen: ForgotPasswordParam;
  ConceptScreen: ConceptParam;
  Onboarding: OnboardingParam;
  Autentikasi: AutentikasiParam;
  LoginScreen: LoginScreenParam;
  LoginOTPScreen: LoginOTPParam;
  ChangeNumberScreen: ChangeNumberParam;
  HistoryTestScreen: HistoryTestParam;
  SelectRoleScreen: SelectRoleParam;
  PersonalDataScreen: PersonalDataParam;
  PromoDetailScreen: PromoDetailScreenParam;
  DetailAnakScreen: DetailAnakParam;
  ClassScreen: ClassScreen;
  InputPasswordScreen: InputPasswordScreen;
  AskCameraScreen: AskCameraScreen;
  AskPreviewPhotoScreen: AskPreviewPhotoScreen;
  VerificationScreen: VerificationScreen;
  LeaderboardScreen: LeaderboardScreen;
  VideoPresentationScreen: VideoPresentationScreen;
  SuccessRegisterScreen: SuccessRegisterScreen;
  QuestionBabScreen: QuestionBabScreen;

  AdminListDetailScreen: AdminListDetailScreenParams;
  AdminListVerificationScreen: AdminListVerificationScreenParam;
  AdminUploadEvidenceScreen: AdminUploadEvidenceScreenParams;
  AdminListScreen: AdminListScreenParams;
  AdminListHistoryScreen: AdminListHistoryScreenParams;

  BottomTabNavigator: BottomTabNavigator;
  BottomTabNavigatorKepsek: BottomTabNavigatorKepsek;
  BottomTabNavigatorParent: BottomTabNavigatorParent;
  BottomTabNavigatorGuru: BottomTabNavigatorGuru;
  BottomTabNavigatorAdmin: BottomTabNavigatorAdmin;
  BottomTabNavigatorLMS: BottomTabNavigatorLMS;
  DailyCheckInScreen: DailyCheckInScreen;
  PusatBantuanScreen: PusatBantuanScreen;
  ERaportGuruAssesmentScreen: ERaportGuruAssesmentScreen;
  ERaportGuruChooseClassScreen: ERaportGuruChooseClassScreen;
  CreateScheduleScreen: CreateScheduleScreen;
  EditPasswordScreen: EditPasswordScreen;
  ProfileEditScreen: ProfileEditScreen;
  ExplanationScreen: ExplanationScreen;
  AttendanceScreen: AttendanceScreen;
  DiscussionGrupSearchMemberScreen: undefined;
  DiscussionGrupAddMemberScreen: DiscussionGrupAddMemberParam;
  DiscussionGrupMessageScreen: undefined;
  DiscussionCreateGroupScreen: undefined;
  DiscussionGrupDetailScreen: DiscussionGrupDetailParam;
  DiscussionGrupScreen: undefined;
  AttendancePresensiHistoryScreen: AttendancePresensiHistoryScreen;
  AttendanceApprovalFormScreen: AttendanceApprovalFormScreen;
  AttendanceAprovalListHistoryScreen: AttendanceAprovalListHistoryScreen;
  AttendanceApprovalDetailHistoryScreen: AttendanceApprovalDetailHistoryScreen;
  ViewAttachmentScreen: ViewAttachmentScreen;
  HistoryTestAndExamScreen: HistoryTestAndExamScreenParam;
  VideoDownloadScreen: VideoDownloadScreen;
  SavedVideoScreen: SavedVideoScreen;
  MyActivityScreen: MyActivityScreen;
  ERaportGuruScreen: ERaportGuruScreenParam;
  BlogScreen: BlogScreen;
  BlogDetailScreen: BlogDetailScreen;
  CartHistoryScreen: CartHistoryScreenParams;
  HomeCoinScreen: HomeCoinScreen;
  PackageScreen: PackageScreen;
  PackageCoinScreen: any;
  MiniGameScreen: MiniGameScreen;
  PracticeSoalReportScreen: PracticeSoalReportScreen;
  PracticeSoalReportDetailScreen: PracticeSoalReportDetailScreenParam;
  AnnouncementDetailScreen: AnnouncementDetailScreen;
  Cart: CartScreen;
  CartHistoryDetailScreen: CartHistoryDetailScreen;
  EssayScreen: EssayScreen;
  ViewPhotoScreen: ViewPhotoParam;
  LinkAccountScreen: LinkAccountScreen;
  MultipleChoiceQuestionScreen: MultipleChoiceQuestionScreen;
  QuestionScreen: QuestionScreen;
  LMSReportScreen: LMSReportScreen;
  AKMLaporanScreen: AKMLaporanScreen;
  QuestionDetailScreen: QuestionDetailScreen;
  AdministrativeScreen: AdministrativeScreen;
  MeetingLiveSessionScreen: MeetingLiveSessionScreen;
  ClassSessionDetailScreen: ClassSessionDetailScreen;
  LMSTeacherClassSessionScreen: LMSTeacherClassSessionScreen;
  LMSTeacherFormClassSessionScreen: LMSTeacherFormClassSessionScreen;
  LMSTeacherDetailClassSessionScreen: LMSTeacherDetailClassSessionScreen;
  LMSTeacherHistoryClassSessionScreen: LMSTeacherHistoryClassSessionScreen;
  HistoryAndRecordsScreen: HistoryAndRecordsScreen;
  MultipleQuestionTypeScreen: MultipleQuestionTypeScreen;
  LMSPRTugasScreen: LMSPRTugasScreenParams;
  ManageSchoolMaterialsScreen: ManageSchoolMaterials;
  AddSchoolMaterialsScreen: AddSchoolMaterials;
  ListSubjectSchoolMaterialsScreen: ListSubjectSchoolMaterialsScreen;
  ListChapterSchoolMaterialsScreen: ListChapterSchoolMaterialsScreen;
  LMSMuridUjianScreen: LMSMuridUjianScreen;
  StudentHistoryExamScreen: StudentHistoryExamScreen;
  StudentHistoryTaskScreen: StudentHistoryTaskScreen;
  GlobalSearchScreen: undefined;
  SemuaTabScreen: GlobalSearchScreensParam;
  MateriTabScreen: GlobalSearchScreensParam;
  VideoTabScreen: GlobalSearchScreensParam;
  SoalTabScreen: GlobalSearchScreensParam;
  LainnyaTabScreen: GlobalSearchScreensParam;
  CreateScheduleScreen: CreateScheduleScreen;
  PengajuanKetidakHadiranScreen: PengajuanKetidakHadiranScreenParams;
  DetailKehadiranScreen: DetailKehadiranScreenParams;
  DetailKehadiranDokumenScreen: DetailKehadiranDokumenScreenParams;
  KetidakhadiranScreen: KetidakhadiranScreenParams;
  RiwayatKetidakhadiranScreen: RiwayatKetidakhadiranScreenParams;
  LembarKehadiranScreen: LembarKehadiranScreenParam;
  TanggalKehadiranScreen: TanggalKehadiranScreenParam;
  DetailSoalScreen: DetailSoalScreenParams;
  RiwayatUjianScreen: undefined;
  ClassReportScreen: ClassReportScreen;
  DetailTaskScreen: DetailTaskScreenParams;
  BankSoalScreen: BankSoalScreenParams;
  ChooseClassScreen: ChooseClassParam;
  InputScoreStudentScreen: InputScoreStudentParam;
  SelectSoalToAddToPaketSoalScreen: DetailPaketSoalListScreenParams;
  AdministrativeReportScreen: AdministrativeReportScreen;
  PancasilaProjectScreen: PancasilaProjectParam;
  CreateJadwalUjianScreen: CreateJadwalUjianScreenParam;
  InputDetailKDScreen: InputDetailKDParam;
  LMSUjianTestCameraScreen: LMSUjianTestCameraScreenParam;
  InputDetailKDReportScreen: InputDetailKDReportParam;
  TaskDetailTeacherScreen: TaskDetailTeacherParam;
  PRProjectTaskHistoryScreen: PRProjectTaskHistoryParam;
  PancasilaNotesScreen: PancasilaNotesParam;
  ClassSessionDetailGURUScreen: ClassSessionDetailGURUScreenParams;
  CreateQuestionTaskScreen: CreateQuestionTaskParam;
  DetailTaskScreenTeacher: DetailTaskScreenTeacher;
  DetailReportStudentScreen: DetailReportStudentScreenParam;
  DetailTeacherScreen: DetailTeacherParam;
  ReportAbsentTeacherScreen: ReportAbsentTeacherParam;
  ReportDetailAbsentTeacherScreen: ReportDetailAbsentTeacherParam;
  CheckPRProjectTeacherScreen: CheckPRProjectTeacherScreen;
  ListScheduleScreen: ListScheduleParam;
  DetailSessionClassScreen: DetailSessionClassParam;
  ListScheduleHistoryScreen: ListScheduleHistoryParam;
  TryOutScreen: TryOutParam;
  TryOutQuestionScreen: TryOutQuestionScreenParam;
  RemoveAccountScreen: RemoveAccountParam;
  RemoveAccountOTPScreen: RemoveAccountOTPParam;
  RemoveAccountGoodByeScreen: RemoveAccountGoodByeParam;
  PTNScreen: undefined;
  PTNBankSoalScreen: undefined;
  PTNReportScreen: PTNReportScreen;
  MenuRaporPreviewScreen: RaporPreviewParam;
  MenuRaporScreen: undefined;
  MenuRaporByClassScreen: MenuRaporByClassParam;
  MonitoringExamGuruScreen: MonitoringExamGuruScreenParam;
  TeacherListMenuScreen: undefined;
  StudentListMenuScreen: StudentListMenuParam;
  TeacherCheckExamScreen: TeacherCheckExamParam;
  FormDiagnosticTestScreen: undefined;
  PTNLiveClassHomeScreen: undefined;
  PTNLiveClassRecordScreen: PTNLiveClassRecordParam;
  TryOutSubjectScreen: TryOutSubjectParam;
  TryOutDetailHistoryScreen: TryOutDetailHistoryScreen;
  DiagnoticTestScreen: DiagnoticTestParam;
  DiagnoticTestResultScreen: DiagnoticTestResultScreenParam;
  DiagnoticRecommendationScreen: DiagnoticRecommendationParam;
  LKSListScreen: LKSListScreenParam;
  DetailLKSScreen: DetailLKSScreenParam;
  DiagnoticProfessionScreen: DiagnoticProfessionparam;
  DiagnoticCheckOpportunityScreen: DiagnoticCheckOpportunityParam;
  DiagnoticSearchScreen: DiagnoticSearchParam;
  ChapterKPRegularScreen: ChapterKPRegularScreenParam;
  ChapterAKMScreen: ChapterKPRegularScreenParam;
  ChapterSOALScreen: ChapterKPRegularScreenParam;
  ChapterLMSScreen: ChapterKPRegularScreenParam;
  HistoryLKSScreen: HistoryLKSScreenParam;
  DiagnoticDescriptionScreen: DiagnoticDescriptionParam;
  BlogDetailScreen: BlogDetailParam;
  StudentDetailScreen: StudentDetailParam;
  StudentAttendanceReportScreen: StudentDetailParam;
  StudentAbsentReportScreen: StudentDetailParam;
  LearningObjectiveScreen: LearningObjectiveScreenParam;
  KPKonsepPelajaran: undefined;
  StudentAbsenceListRombelScreen: undefined;
  ProjectPancasilaScreen: ProjectPancasilaScreenParam;
  PancasilaAllStatusProyekScreen: PancasilaAllStatusProyekScreenParameters;
  PancasilaKirimProyekScreen: PancasilaKirimProyekScreenParam;
  ExplanationTryOutScreen: ExplanationTryoutParam;
  NetworkLoggerScreen: undefined;
  DetailEraporScreen: DetailEraporParam;
  NewEbookScreen: NewEbookParam;
  EditSchoolMaterialsScreen: EditSchoolMaterialsParam;
  TestScreen: TestScreenParam;
  SchedulePTNScreen: any;
  VerificationRegisterScreen: any;
  HistoryShareEraporScreen: HistoryShareEraporScreenParams;
  WebViewScreen: WebViewScreenParam;
  PDFPreviewScreen: PDFPreviewScreenParam;
  PDFScreen: PDFPreviewScreenParam;

  //MARK: START IKM
  PDFViewerIKMScreen: PDFViewerIKMScreenParam;
  PPTViewerIKMScreen: PPTViewerIKMScreenParam;
  ListSubjectByPhaseScreen: ListSubjectByPhaseScreenParam;
  IkmListItemScreen: IkmListItemScreenParam;
  VideoPlayerIkmScreen: VideoPlayerIkmScreenParam;
  PerangkatAjarScreen: any;
  AsesmenMuridScreen: any;
  KomunitasScreen: any;
  LkpdTeacherScreen: LkpdTeacherScreenParam;
  LkpdTeacherHistoryScreen: any;
  LkpdStudentScreen: LkpdStudentScreenParam;
  LembarKerjaScreen: LembarKerjaScreenParam;
  UploadFileIkmScreen: UploadFileIkmScreenParam;
  CreateLkpdScreen: CreateLkpdScreenParam;
  DetailPeriksaLkpdScreen: DetailPeriksaLkpdScreenParam;
  LkpdTeacherHistoryDetailScreen: LkpdTeacherHistoryDetailScreenParam;
  UjianExplanationScreen: UjianExplanationScreenParam;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type INavigation<RouteName extends keyof ParamList = keyof ParamList> =
  StackNavigationProp<ParamList, T>;
type IRoute<RouteName extends keyof ParamList = keyof ParamList> = RouteProp<
  ParamList,
  RouteName
>;
