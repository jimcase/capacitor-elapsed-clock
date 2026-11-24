import { WebPlugin } from '@capacitor/core';

import type { ElapsedClockPlugin, NowResult } from './definitions';

export class ElapsedClockWeb extends WebPlugin implements ElapsedClockPlugin {
  async now(): Promise<NowResult> {
    return { value: performance.now() };
  }
}
