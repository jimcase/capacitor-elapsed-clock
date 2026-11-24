import { registerPlugin } from '@capacitor/core';

import type { ElapsedClockPlugin } from './definitions';

const ElapsedClock = registerPlugin<ElapsedClockPlugin>('ElapsedClock', {
  web: () => import('./web').then((m) => new m.ElapsedClockWeb()),
});

export * from './definitions';
export { ElapsedClock };
