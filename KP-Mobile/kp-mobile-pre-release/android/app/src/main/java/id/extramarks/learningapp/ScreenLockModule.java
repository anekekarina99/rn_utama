package id.extramarks.learningapp;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

public class ScreenLockModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;
    private ScreenReceiver screenReceiver;

    ScreenLockModule(ReactApplicationContext context) {
        super(context);
        this.reactContext = context;
    }

    private class ScreenReceiver extends BroadcastReceiver {

        @Override
        public void onReceive(Context context, Intent intent) {
            WritableMap params = Arguments.createMap();
            if (intent.getAction().equals(Intent.ACTION_SCREEN_ON)) {
                params.putString("type", "unlock");
                sendEvent("ScreenLockState", params);
            } else if (intent.getAction().equals(Intent.ACTION_SCREEN_OFF)) {
                params.putString("type", "lock");
                sendEvent("ScreenLockState", params);
            }
        }
    }

    private void sendEvent(String eventName, @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }

    @ReactMethod
    private void subscribeScreenLock(Promise promise) {
        // Register BroadcastReceiver to listen for screen on/off events
        screenReceiver = new ScreenReceiver();
        IntentFilter filter = new IntentFilter(Intent.ACTION_SCREEN_ON);
        filter.addAction(Intent.ACTION_SCREEN_OFF);
        reactContext.registerReceiver(screenReceiver, filter);
        promise.resolve("ScreenLockStatus : Success Subscribe Screen");
    }

    @ReactMethod
    private void unSubscribeScreenLock(Promise promise) {
        reactContext.unregisterReceiver(screenReceiver);
        promise.resolve("ScreenLockStatus : Success UnSubscribe Screen");
    }

    @NonNull
    @Override
    public String getName() {
        return "ScreenLockModule";
    }

    @ReactMethod
    public void addListener(String eventName) {
        // Required for rn built in EventEmitter Calls.
    }

    @ReactMethod
    public void removeListeners(Integer count) {
        // Required for rn built in EventEmitter Calls.
    }
}
