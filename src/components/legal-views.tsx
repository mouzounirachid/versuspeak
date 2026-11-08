'use client';

import { SITE } from '@/lib/data';

const CONTACT_EMAIL = 'contact@versuspeak.com';

function LegalShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-4xl font-bold text-stone-900">{title}</h1>
      <div className="mt-8 space-y-6 leading-relaxed text-stone-700">{children}</div>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-xl font-bold text-stone-900">{children}</h2>;
}

export function PrivacyView() {
  return (
    <LegalShell title="Privacy Policy">
      <p>
        <em>Last updated: November 2026. This policy explains what data {SITE.name} collects and how it is
        used, in plain language.</em>
      </p>
      <H2>Information we collect</H2>
      <p>
        VersusPeak collects standard, anonymous analytics: pages visited, approximate region, device and browser
        type, and referral source. This data comes from Google Analytics and our ad partners and never includes
        your name unless you send it to us directly (for example, by emailing us).
      </p>
      <H2>Cookies and advertising</H2>
      <p>
        This site is supported by advertising. Third-party vendors, including Google, use cookies to serve ads
        based on prior visits to this and other websites. Google’s use of advertising cookies enables it and its
        partners to serve ads based on your visits. You may opt out of personalized advertising by visiting{' '}
        <a className="font-semibold text-orange-700 underline underline-offset-2" href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
          Google Ads Settings
        </a>{' '}
        or{' '}
        <a className="font-semibold text-orange-700 underline underline-offset-2" href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">
          aboutads.info/choices
        </a>
        . We also use affiliate cookies (Amazon Associates and similar networks) that track purchases made after
        you click a product link, so we can earn a commission.
      </p>
      <H2>How we use data</H2>
      <p>
        We use aggregate analytics to decide which appliances to test next and which buying guides to update.
        We do not sell personal data, we do not build advertising profiles ourselves, and we do not email you
        unless you explicitly ask us to.
      </p>
      <H2>Your rights (GDPR / CCPA)</H2>
      <p>
        If you are in the EEA, UK, or California, you can request a copy of any personal data we hold about you
        or ask us to delete it at any time. California residents may exercise the right to opt out of the “sale”
        of personal information (as that term is defined by the CCPA) by disabling personalized ads above.
        Requests are handled within 30 days through our contact page.
      </p>
      <H2>Contact</H2>
      <p>
        Questions about this policy can be sent to {CONTACT_EMAIL}. We answer every legitimate
        privacy request.
      </p>
    </LegalShell>
  );
}

export function DisclosureView() {
  return (
    <LegalShell title="Affiliate Disclosure">
      <p>
        <em>Last updated: November 2026.</em>
      </p>
      <p>
        VersusPeak is reader-supported. When you buy appliances through links on our site, we may earn an
        affiliate commission from the retailer. This costs you nothing extra — the price is identical whether you
        use our link or go to the retailer directly.
      </p>
      <H2>How commissions work</H2>
      <p>
        We participate in affiliate programs operated by Amazon Associates, Best Buy, Lowe’s, and Home Depot, as
        well as affiliate networks such as Skimlinks and Sovrn. When a reader clicks a “Check Price” button and
        completes a purchase within the retailer’s attribution window, the retailer pays us a small percentage of
        the sale. This is our primary source of funding, alongside display advertising.
      </p>
      <H2>What money does not buy</H2>
      <p>
        Commission rates do not influence our rankings. We score every product on the same lab tests before any
        commercial relationship is considered, and several of our top picks earn lower commissions than the
        products we recommend against. When a manufacturer offers a placement deal — which happens — we decline
        it. Sponsored content, if it ever appears, would be labeled unmistakably; today there is none on the site.
      </p>
      <H2>Amazon Associates statement</H2>
      <p>
        As an Amazon Associate, VersusPeak earns from qualifying purchases. Amazon and the Amazon logo are
        trademarks of Amazon.com, Inc. or its affiliates.
      </p>
      <H2>Questions</H2>
      <p>
        If you ever want to know whether a link on this page is an affiliate link, contact us and we will tell
        you directly. Full editorial independence is a precondition of our testing program.
      </p>
    </LegalShell>
  );
}

export function TermsView() {
  return (
    <LegalShell title="Terms of Use">
      <p>
        <em>Effective: November 2026. By using VersusPeak you agree to these terms.</em>
      </p>
      <H2>Use of content</H2>
      <p>
        All test data, reviews, rankings, and guides on VersusPeak are copyrighted. You may quote short
        excerpts with attribution and a link; scraping, republishing full reviews, or presenting our scores as
        your own is prohibited. Product names and trademarks belong to their respective owners and are used for
        identification purposes only.
      </p>
      <H2>Accuracy and prices</H2>
      <p>
        We test with the care of an engineer and the humility of someone whose dishwasher will eventually leak.
        Prices, specifications, and availability change constantly; figures on this site are indicative and
        verified at the date shown. The price at checkout is the only price that counts. VersusPeak is not
        liable for purchasing decisions, price differences, or product performance claims made by manufacturers.
      </p>
      <H2>External links</H2>
      <p>
        Retailer and advertiser links take you to third-party sites governed by their own terms and privacy
        policies. We are not responsible for their content or practices.
      </p>
      <H2>Limitation of liability</H2>
      <p>
        VersusPeak is provided “as is.” To the maximum extent permitted by law, we disclaim warranties of
        merchantability and fitness for a particular purpose, and our total liability for any claim related to
        the site is limited to $100.
      </p>
      <H2>Changes</H2>
      <p>
        We may update these terms as the site evolves. Material changes will be noted at the top of this page
        with a new effective date.
      </p>
    </LegalShell>
  );
}

export function ContactView() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-4xl font-bold text-stone-900">Contact VersusPeak</h1>
      <p className="mt-5 leading-relaxed text-stone-700">
        Questions about a ranking, a correction request, a press inquiry, or a privacy request — we read
        everything and reply to legitimate messages within two business days.
      </p>

      <div className="mt-8 rounded-lg border border-stone-300 bg-stone-50 p-6 text-center sm:p-8">
        <h2 className="font-serif text-xl font-bold text-stone-900">Email us directly</h2>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-3 inline-block text-2xl font-bold text-orange-700 underline underline-offset-4 hover:text-orange-800"
        >
          {CONTACT_EMAIL}
        </a>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          We reply from this address — add it to your contacts so our answer never lands in spam.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="font-serif text-xl font-bold text-stone-900">What readers write us about</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-stone-700">
          <li>Questions about a ranking or a test score</li>
          <li>Correction requests — we fix confirmed errors within 48 hours</li>
          <li>Privacy and data requests (GDPR / CCPA), answered within 30 days</li>
          <li>Press and partnership inquiries</li>
        </ul>
      </div>

      <p className="mt-8 text-sm leading-relaxed text-stone-600">
        Please note: we cannot place orders on your behalf, resolve delivery disputes, or process returns —
        for anything after checkout, contact the retailer you bought from directly (Amazon, Best Buy, Lowe’s,
        or Home Depot).
      </p>
    </div>
  );
}
