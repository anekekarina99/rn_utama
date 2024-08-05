/**
 * @format
 */

if (__DEV__) {
  // eslint-disable-next-line no-console
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import {registerGlobals} from '@livekit/react-native';
import React, {StrictMode} from 'react';
import {AppRegistry, Platform} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './src/redux/store';
import TrackPlayer from 'react-native-track-player';
import {startNetworkLogging} from 'react-native-network-logger';
import {LogBox} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {displayPushNotification} from './src/components/atoms/NotificationController/utils';
import notifee, {EventType, Event} from '@notifee/react-native';

export const store = configureStore();
const handlerBgMessage = async remoteMessage => {
  if (!remoteMessage) {
    return;
  }
  // remoteMessage.data.notification_state = 'quit';
  // console.log('cekkk remote message ', JSON.stringify(remoteMessage));
  // displayPushNotification(remoteMessage);
  // const notificationData = JSON.stringify(remoteMessage);
  // await AsyncStorage.setItem(Keys.notificationData, notificationData);
};
messaging().setBackgroundMessageHandler(handlerBgMessage);
notifee.onBackgroundEvent(handlerBgMessage);

const ReduxApp = () => (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  return <ReduxApp />;
}

registerGlobals();
startNetworkLogging({forceEnable: true});
AppRegistry.registerComponent(appName, () => HeadlessCheck);
TrackPlayer.registerPlaybackService(() =>
  require('./src/services/trackerPlayerService'),
);
LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'new NativeEventEmitter',
  'ColorPropType will be removed',
  'ReactImageView: Image source "null" doesn\'t exist',
  'Unsupported dashed / dotted border style',
]);
