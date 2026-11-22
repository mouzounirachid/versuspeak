/** No affiliate account has been approved. Keep the offer map empty.
 * Add only owner-approved affiliate URLs after account approval and link validation.
 * Neither an environment variable alone nor a source-documentation link is an affiliate approval.
 */
export const APPROVED_AFFILIATE_OFFERS: Record<string, Record<string, string>> = {};
