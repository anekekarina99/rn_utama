/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';
import Reactotron, {
  networking,
  openInEditor,
  trackGlobalErrors,
} from 'reactotron-react-native';
import {appVersion} from '@constants/functional';

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: `Kelas Pintar ${Config.ENV_MODE}: ${appVersion}`,
    environment: Config.ENV_MODE,
  }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(
    networking({
      ignoreUrls: /media\/v1\/image/,
    }),
  )
  .use(trackGlobalErrors())
  .use(openInEditor())
  .connect(); // let's connect!

// swizzle the old one
const yeOldeConsoleLog = console.log;

// make a new one
console.log = (...args) => {
  // always call the old one, because React Native does magic swizzling too
  yeOldeConsoleLog();
  yeOldeConsoleLog(...args);

  // send this off to Reactotron.
  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
  });
};
