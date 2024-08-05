type HistoryStatusType = 'pending' | 'cancel' | 'closed';

interface RemoteMessage {
  /**
   * The collapse key a message was sent with. Used to override existing messages with the same
   * key.
   */
  collapseKey?: string;

  /**
   * A unique ID assigned to every message.
   *
   * If not provided, a random unique ID is generated.
   */
  messageId?: string;

  /**
   * The message type of the message.
   */
  messageType?: string;
  /**
   * The topic name or message identifier.
   */
  from?: string;
  /**
   * The address for the message.
   */
  to?: string;

  /**
   * The time to live for the message in seconds.
   *
   * Defaults to 3600.
   */
  ttl?: number;

  /**
   * The time the message was sent, in milliseconds since the start of unix epoch
   */
  sentTime?: number;

  /**
   * Any additional data sent with the message.
   */
  data?: {[key: string]: string};

  /**
   * Additional NotificationPayload data sent with the message
   */
  notification?: NotificationPayload;

  /**
   * Whether the iOS APNs message was configured as a background update notification.
   *
   * @platform ios iOS
   */
  contentAvailable?: boolean;

  /**
   * Whether the iOS APNs `mutable-content` property on the message was set
   * allowing the app to modify the notification via app extensions.
   *
   * @platform ios iOS
   */
  mutableContent?: boolean;

  /**
   * The iOS category this notification is assigned to.
   *
   * @platform ios iOS
   */
  category?: string;

  /**
     * An iOS app specific identifier used for notification grouping.
    threadId?: string;
    */
  threadId?: string;

  /**
   * Options for features provided by the FCM SDK for Web.
   */
  fcmOptions: FcmOptions;
}

type TopicEnum =
  | 'guru finish live'
  | 'guru send message'
  | 'guru call'
  | 'guru join'
  | 'guru leave join'
  | 'absensi'
  | 'discussion-group'
  | 'tugas'
  | 'announcement'
  | 'hubungkan-orangtua-murid'
  | 'TANYA';
interface IMuridCallGuruData extends RemoteMessage {
  data?: {
    id: string;
    topic?: TopicEnum;
  };
}

type ServiceType =
  | 'guru'
  | 'ptn'
  | 'LMS'
  | 'soal'
  | 'tanya'
  | 'iap'
  | 'general_service';
type PTNModule = 'tps' | 'saintek' | 'soshum';
type PTNFeature = 'live_class' | 'try_out' | 'bank_soal';
type LMSUjianFilterTypeEnum =
  | 'done_scoring'
  | 'scheduled'
  | 'on_progress'
  | 'done';

type UploadImageProps = {
  type: string;
  sub_type?: string;
  showLoadingIndicator?: boolean;
  uploadProgress?: CallBackWithParams<void, number>;
};

type ImageFileValidationProps =
  | 'Format Not Valid'
  | 'Higher Than Max Limit'
  | 'Lower Than Max Limit';

type StringReplaceType = {
  searchValue: string | RegExp;
  replaceValue: string;
};

type VoidCallBack = () => void;
type CallBack<T> = () => T;
type CallBackWithParams<T, U> = (data: U) => T;
type CallBackWith2Params<T, U, V> = (data1: U, data2: V) => T;

type ConvertDateProps = {
  useLocalTime?: boolean;
  toUTC?: boolean;
};

type ConvertToQueryStringProps = {
  toSnakeCase?: boolean;
  queryStringOpt?: queryString.StringifyOptions | undefined;
};

interface IRemainDuration {
  day?: string;
  hours?: string;
  minutes?: string;
  seconds?: string;
  milliseconds?: string;
}

type RemainingDurationProps = {
  remainDuration: IRemainDuration;
};

type RemainingDuration = {
  remainDuration: string;
  parsedRemainDuration?: IRemainDuration;
};

interface ArrayReplaceOptions {
  pushWhenEmpty?: boolean;
}

interface CheckDate {
  type: 'after' | 'before';
  useIsSameDate?: boolean;
}

type AccountRole =
  | 'ADMIN'
  | 'GURU'
  | 'KEPSEK'
  | 'MURID'
  | 'ORANG-TUA'
  | 'MENTOR'
  | 'ADMIN-INTERNAL';

type UserRole = AccountRole;

type IkmLMSScreenType =
  | 'Capaian Pembelajaran'
  | 'Alur Tujuan Pembelajaran'
  | 'Modul Ajar'
  | 'Video Tutorial';

interface IHandleUserTypeId {
  id?: number;
  name?: string;
  role?: UserRole;
}

interface IHandlerFileValidation {
  resultFile: any;
  minLimitInMb?: number;
  maxLimitInMb?: number;
  listFileExtension?: Array<string>;
}

type FileValidationProps = ImageFileValidationProps;

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

type IFileExt = 'doc' | 'docx' | 'pdf' | 'png' | 'jpeg' | 'jpg';

type IDownloadFile = {
  full_path: string;
  fileExt: IFileExt;
  successToastMessage?: string;
  errorToastMessage?: string;
  appendCurrentDateInFileName?: boolean;
  headers?: {
    [key: string]: string;
  };
} & Pick<ApiDownloadFileProps, 'mime' | 'mediaType' | 'fileNameWithExt'>;

type IHandlerOpenFile = {
  fileToLargeMessage?: string;
  FormatFileNotValidMessage?: string;
  onError?: CallBackWithParams<void, string>;
  uploadProgress?: CallBackWithParams<void, number>;
  onUpload?: CallBack<void>;
  onUploaded?: CallCallback<void>;
  uploadType: string;
  uploadSubType?: string;
  showLoadingIndicator?: boolean;
  localFileName?: CallBackWithParams<void, string>;
  showSnackBar?: boolean;
} & Omit<IHandlerFileValidation, 'resultFile'>;

type IUploadFile = {
  fileName: string;
  fileType: string;
  uri: string;
} & UploadImageProps;

type IBasePagination = {
  page?: number;
  limit?: number;
  offset?: number;
};

type ITelegramSendMessage = {
  chatId: string;
  text: string;
};

interface IReqCreateLembarKerja {
  type?: string;
  question_type?: string;
  curriculum_id?: number;
  rombel_class_school_id?: number;
  subject_id?: number;
  chapter_id?: number;
  title?: string;
  time_start?: string;
  time_finish?: string;
  instructions?: string;
  media_id?: string | undefined;
  class_id?: number;
  kp_ikm_worksheet_master_id?: number | undefined;
}

type IReqEditLembarKerja = {
  body: IReqCreateLembarKerja;
  task_id: number;
};

type IReqDeleteLembarKerja = {
  task_id: number;
};

interface IFormLembarKerja {
  type?: string;
  question_type?: string;
  curriculum: ICurriculum;
  rombel_class_school?: RombelClassSchool;
  subject: Subject;
  chapter: Chapter;
  title?: string;
  time_start?: {};
  time_finish?: {};
  instructions?: string;
  media: any;
  class: Class;
  kp_ikm_worksheet_master?: IWorksheet;
  instructions?: string;
}

type DynamicObject = {
  [key: string]: any;
};

type IClassName = 'SD' | 'SMP' | 'SMA' | 'OTHER';

interface IHandleUserGrade {
  id: number;
  name: IClassName;
}

type IFlatListItem<T = any> = {
  item: T;
  index: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum timezoneDate {
  '+07:00' = 'WIB',
  '+08:00' = 'WITA',
  '+09:00' = 'WIT',
}

type LoginMode = 'ADMIN' | 'USER';

type IDownloadDataOption = AtLeast<
  IDownloadFile,
  'fileNameWithExt' | 'fileExt' | 'full_path'
>;
