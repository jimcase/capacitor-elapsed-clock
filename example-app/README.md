# Example app

Capacitor 7 app to check the plugin on a real device.

```bash
cd example-app
npm install
npm run build
npx cap sync
npx cap run ios      # or: npx cap run android
```

Run `npm run build` in the repo root first if `dist/` is missing.

Check on the device:

1. Tap Read, lock the phone for 5 minutes or more, unlock and tap Read again. The `ElapsedClock.now()` delta should match the `Date.now()` delta within a second.
2. Move the device clock forward one hour and tap Read. `Date.now()` jumps, `ElapsedClock.now()` does not.

The `performance.now()` row shows the WebView clock, which usually stops while the phone sleeps.
