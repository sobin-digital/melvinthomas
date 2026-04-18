import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Melvin Thomas" },
      {
        name: "description",
        content: "Privacy policy for the personal website of Melvin Thomas.",
      },
      { property: "og:title", content: "Privacy Policy — Melvin Thomas" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-12 container-luxe">
        <SectionHeading
          eyebrow="Legal"
          title="Privacy Policy"
          subtitle={`Last updated: ${new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}`}
        />
      </section>

      <section className="container-luxe pb-24 max-w-3xl">
        <div className="space-y-10 text-base text-muted-foreground leading-[1.85]">
          <div>
            <h2 className="text-2xl font-display text-foreground mb-3">1. Introduction</h2>
            <p>
              This privacy policy explains how the personal website of Melvin Thomas
              ("we", "us", "our") collects, uses and protects information you share with us through this
              site. By using this website you agree to the practices described here.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display text-foreground mb-3">2. Information we collect</h2>
            <p className="mb-3">
              When you use our contact form or reach out via WhatsApp, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>The content of any message you send us</li>
              <li>Basic technical information such as browser type and device</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display text-foreground mb-3">3. How we use information</h2>
            <p>
              We use the information you provide to respond to your enquiries, schedule consultations,
              and improve the quality of our services. We do not sell your personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display text-foreground mb-3">4. Cookies</h2>
            <p>
              This website may use minimal cookies to remember your preferences and to understand how
              visitors interact with the site. You can disable cookies through your browser settings at
              any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display text-foreground mb-3">5. Data security</h2>
            <p>
              We implement reasonable technical and organisational measures to protect personal data
              against unauthorised access, alteration, disclosure or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display text-foreground mb-3">6. Third-party links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices or content of those sites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display text-foreground mb-3">7. Your rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of any personal
              information we hold about you. To exercise these rights, contact us via the details on
              the contact page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display text-foreground mb-3">8. Changes to this policy</h2>
            <p>
              We may update this privacy policy from time to time. The most current version will always
              be available on this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display text-foreground mb-3">9. Contact</h2>
            <p>
              For any questions about this privacy policy or your personal data, reach out via WhatsApp
              at +971 52 924 8514 or use the contact form on this site.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
