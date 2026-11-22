import { GtmLoader } from './gtm-loader';

/** Default consent is denied before hydration. The client loader requires an explicit analytics opt-in. */
export const DEFAULT_GTM_ID = 'GTM-P44DRGH4';

export function TagManager() {
  const id = process.env.NEXT_PUBLIC_GTM_ID || DEFAULT_GTM_ID;
  const enabled = process.env.NEXT_PUBLIC_GTM_ENABLED === 'true';
  const valid = /^GTM-[A-Z0-9]+$/.test(id);
  const consent = "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});";

  return (
    <>
      <script id="consent-defaults" dangerouslySetInnerHTML={{ __html: consent }} />
      <GtmLoader id={id} enabled={enabled && valid} />
    </>
  );
}
