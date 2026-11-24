import Foundation
import Capacitor

@objc(ElapsedClockPlugin)
public class ElapsedClockPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "ElapsedClockPlugin"
    public let jsName = "ElapsedClock"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "now", returnType: CAPPluginReturnPromise)
    ]

    @objc func now(_ call: CAPPluginCall) {
        // RAW keeps counting in sleep (same as mach_continuous_time), UPTIME_RAW does not
        let nanos = clock_gettime_nsec_np(CLOCK_MONOTONIC_RAW)
        call.resolve([
            "value": Double(nanos) / 1_000_000
        ])
    }
}
