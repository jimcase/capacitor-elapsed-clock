export interface ElapsedClockPlugin {
  /**
   * Read the elapsed clock.
   *
   * On Android and iOS the value is the time since the device booted. It
   * keeps counting while the device sleeps, and changing the date, time or
   * time zone does not move it. It goes back to zero on reboot, so only
   * compare readings taken in the same boot. A reading lower than one you
   * saved means the device rebooted in between.
   *
   * On web it is `performance.now()`, which starts again on every page load
   * and may not count while the device sleeps.
   *
   * @since 0.1.0
   */
  now(): Promise<NowResult>;
}

export interface NowResult {
  /**
   * Milliseconds since an arbitrary point (device boot on Android and iOS).
   *
   * @since 0.1.0
   */
  value: number;
}
