package id.extramarks.learningapp;

import android.app.Activity;
import android.app.ActivityManager;
import android.content.Context;
import android.os.Process;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class NativeHelperModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;
    NativeHelperModule(ReactApplicationContext context) {
        super(context);
        this.reactContext = context;
    }

    @ReactMethod
    public void forceQuitApp() {
        Activity activity = getCurrentActivity();
        if (activity != null) {
            ActivityManager activityManager = (ActivityManager) activity.getSystemService(Context.ACTIVITY_SERVICE);
            activityManager.killBackgroundProcesses(activity.getPackageName());
            Process.killProcess(Process.myPid());
        }
    }

    private void sendEvent(String eventName, @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }

    @NonNull
    @Override
    public String getName() {
        return "NativeHelperModule";
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
