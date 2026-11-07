'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SITE } from '@/lib/data';

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
        your name unless you send it to us directly (for example, through the contact form).
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
        Questions about this policy can be sent through the contact form on this site. We answer every legitimate
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
  const [sent, setSent] = useState(false);
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || !subject) {
      setError('Please fill in every field, including the subject.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-4xl font-bold text-stone-900">Contact VersusPeak</h1>
      <p className="mt-5 leading-relaxed text-stone-700">
        Questions about a ranking, a correction request, a press inquiry, or a privacy request — send it here.
        We read everything and reply to legitimate messages within two business days.
      </p>

      {sent ? (
        <div className="mt-8 rounded-lg border border-green-700 bg-green-50 p-6">
          <h2 className="font-serif text-xl font-bold text-green-800">Message received</h2>
          <p className="mt-2 text-sm leading-relaxed text-green-900">
            Thank you, {name.trim()}. A member of the team will reply to {email.trim()} within two business
            days. (Demo form — connect your email backend or a service like Formspree before launch.)
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-8 space-y-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Your name</Label>
              <Input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Smith" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input id="contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-subject">Subject</Label>
            <Select value={subject} onValueChange={setSubject}>
              <SelectTrigger id="contact-subject">
                <SelectValue placeholder="Choose a topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ranking">Question about a ranking</SelectItem>
                <SelectItem value="correction">Correction request</SelectItem>
                <SelectItem value="testing">Suggest an appliance to test</SelectItem>
                <SelectItem value="privacy">Privacy / data request</SelectItem>
                <SelectItem value="press">Press & partnerships</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-message">Message</Label>
            <Textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              placeholder="Tell us what is on your mind…"
            />
          </div>
          {error && (
            <p role="alert" className="text-sm font-semibold text-red-600">
              {error}
            </p>
          )}
          <Button type="submit" className="bg-orange-600 px-8 text-sm font-bold uppercase tracking-wide hover:bg-orange-700">
            Send message
          </Button>
        </form>
      )}
    </div>
  );
}
