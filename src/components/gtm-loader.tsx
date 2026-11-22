'use client';

import { useSyncExternalStore } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

/** Do not render the remote Script on the server: Next.js can preload it.
 * Mount after hydration so the preceding native consent-default script has run.
 */
export function GtmLoader({ id, enabled }: { id: string; enabled: boolean }) {
  const hydrated = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
  if (!enabled || !hydrated) return null;
  return <GoogleTagManager gtmId={id} />;
}
