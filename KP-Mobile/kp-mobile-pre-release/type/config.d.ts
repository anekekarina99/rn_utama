declare module 'react-native-config' {
  export interface NativeConfig {
    ENV_MODE: ENVModeType;
    MINI_GAMES: string;
    BASEURL: string;
    ENABLE_SCREENSHOT: string;
    ZOOM_WEBVIEW_URL: string;
    LIVEKIT_URL: string;
    TELEGRAM_ALERT_BOT_ID: string;
    TELEGRAM_ALERT_CHAT_ID: string;
  }

  export const Config: NativeConfig;
  export default Config;
}

export type ENVModeType = 'development' | 'production' | 'staging';
