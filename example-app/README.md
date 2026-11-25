# Example app

Capacitor 7 app to check the plugin on a real device.

On a fresh clone, run `npm install` and `npm run build` in the repo root first. Then:

```bash
cd example-app
npm install
npm run build
npx cap sync
npx cap run ios      # or: npx cap run android
```

For a real iPhone, pick your signing team in Xcode first (`npx cap open ios`, then Signing & Capabilities).

Check on the device, unplugged and with no debugger or wireless debugging attached. A phone on the cable, under Xcode or with Wi-Fi adb connected may never sleep.

1. Tap Read, lock the phone for 15 minutes or more, unlock and tap Read again. The `ElapsedClock.now()` delta should match the `Date.now()` delta within a second.
2. Turn off automatic date and time, move the clock forward one hour and tap Read. `Date.now()` jumps, `ElapsedClock.now()` does not. Turn automatic date and time back on after.

The `performance.now()` row shows the WebView clock, which stops while the phone sleeps. Step 1 only counts if its `performance.now()` delta is clearly smaller than the `Date.now()` one, because that shows the phone really slept.
