# capacitor-elapsed-clock

A Capacitor plugin that reads the device elapsed clock: the time since boot, counting while the phone sleeps. The user cannot move it by changing the date or time, so it works for things like lockouts and cooldowns that must not end early when someone sets the clock forward.

| Platform | Clock | Counts sleep | Resets |
| -------- | ----- | ------------ | ------ |
| Android  | `SystemClock.elapsedRealtime()` | yes | on reboot |
| iOS      | `clock_gettime_nsec_np(CLOCK_MONOTONIC_RAW)` (same as `mach_continuous_time`) | yes | on reboot |
| Web      | `performance.now()` | not always | on page load |

Works with Capacitor 7 and 8.

## Install

```bash
npm install capacitor-elapsed-clock
npx cap sync
```

## Usage

```typescript
import { ElapsedClock } from 'capacitor-elapsed-clock';

const { value: start } = await ElapsedClock.now();
// save `start` together with your data

// later, maybe after the app was closed
const { value: now } = await ElapsedClock.now();
// a lower reading means the device rebooted, so count nothing for that gap
const elapsed = now >= start ? now - start : 0;
```

After a reboot you cannot know how much time passed, so the safe choice for a lockout is to count none of it and save the new reading.

## API

<docgen-index>

* [`now()`](#now)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### now()

```typescript
now() => Promise<NowResult>
```

Read the elapsed clock.

On Android and iOS the value is the time since the device booted. It
keeps counting while the device sleeps, and changing the date, time or
time zone does not move it. It goes back to zero on reboot, so only
compare readings taken in the same boot. A reading lower than one you
saved means the device rebooted in between.

On web it is `performance.now()`, which starts again on every page load
and may not count while the device sleeps.

**Returns:** <code>Promise&lt;<a href="#nowresult">NowResult</a>&gt;</code>

**Since:** 0.1.0

--------------------


### Interfaces


#### NowResult

| Prop        | Type                | Description                                                             | Since |
| ----------- | ------------------- | ----------------------------------------------------------------------- | ----- |
| **`value`** | <code>number</code> | Milliseconds since an arbitrary point (device boot on Android and iOS). | 0.1.0 |

</docgen-api>
