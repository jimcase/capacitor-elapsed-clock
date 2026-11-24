package io.github.jimcase.elapsedclock;

import android.os.SystemClock;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "ElapsedClock")
public class ElapsedClockPlugin extends Plugin {

    @PluginMethod
    public void now(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", SystemClock.elapsedRealtime());
        call.resolve(ret);
    }
}
