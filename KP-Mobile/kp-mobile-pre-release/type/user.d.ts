interface IGetUser {
  loading?: boolean;
  data: IBaseUser;
  error?: string;
  refetch?: boolean;
}

interface Data {
  id?: number;
  user_type_id?: number;
  class_id?: number;
  school_name?: string;
  username?: string;
  email?: string;
  gender?: string;
  phone_number?: string;
  full_name?: string;
  password?: string;
  max_password_failed?: number;
  active?: boolean;
  max_otp_failed?: number;
  max_request_otp?: number;
  attempted_request_after_failed?: number;
  avatar?: string;
  xp?: number;
  last_active?: Date;
  coachmark_mobile_dashboard?: boolean;
  coachmark_web_dashboard?: boolean;
  coachmark_mobile_chapter?: boolean;
  coachmark_mobile_soal?: boolean;
  domicile_id?: number;
  parent_phone_number?: string;
  prefered_video_quality?: number;
  user_type?: UserType;
  class?: Class;
  prefered_video_quality_data?: PreferedVideoQualityData;
  deleted_at?: null;
  created_at?: Date;
  register_platform?: string;
  xp_rank?: number;
  expired_at?: Date;
  services?: Service[];
  context?: Context;
  room?: string;
  coin?: number;
  referral_code?: string;
  path_url?: string;
}

interface Class {
  id?: number;
  degree_id?: number;
  major_id?: number;
  name?: string;
  order?: number;
  degree?: Degree;
  major?: Major;
}

interface Degree {
  id?: number;
  name?: string;
  image?: string;
  icon_mobile?: string;
  icon_web?: string;
}

interface Major {
  id?: number;
  name?: string;
}

interface Context {
  user?: User;
}

interface User {
  name?: string;
  avatar?: string;
  email?: string;
}

interface PreferedVideoQualityData {
  id?: number;
  size?: string;
  resolution?: string;
  description?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum Name {
  Guru = 'Guru',
  KPReguler = 'KP Reguler',
  Koin = 'Koin',
  Ptn = 'PTN',
  Soal = 'Soal',
}

interface UserType {
  id?: number;
  name?: string;
  icon_mobile?: string;
  icon_web?: string;
  description?: string;
  display?: boolean;
}
