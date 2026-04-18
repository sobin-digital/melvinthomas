import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Send, Phone, Check } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Melvin Thomas — Book a Consultation in Dubai" },
      {
        name: "description",
        content:
          "Reach out to Melvin Thomas for ventures, investments or partnerships. WhatsApp +971 52 924 8514 or send a message directly.",
      },
      { property: "og:title", content: "Contact Melvin Thomas" },
      {
        property: "og:description",
        content: "Book a consultation or message Melvin directly.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <>
      <section className="pt-32 pb-16 container-luxe">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's start a conversation."
          subtitle="Whether you're exploring a partnership, considering an investment, or simply have a thoughtful question — I read every message personally."
        />
      </section>

      <section className="container-luxe pb-24">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10">
          {/* FORM */}
          <div className="p-8 md:p-10 rounded-2xl bg-card border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-30" style={{ background: "var(--gradient-radial-gold)" }} />
            <form onSubmit={onSubmit} className="relative space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-primary mb-2">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-primary mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-primary mb-2">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition resize-none"
                  placeholder="Tell me about the venture, opportunity or question you'd like to discuss…"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em] font-medium hover:shadow-gold transition-all"
              >
                {submitted ? (
                  <>
                    <Check size={16} /> Message Sent
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>

              {submitted && (
                <p className="text-sm text-primary animate-fade-up">
                  Thank you. I'll respond personally within 24 hours.
                </p>
              )}
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <a
              href="https://wa.me/971529248514"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-card border border-border hover-lift group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <MessageCircle className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary mb-1">WhatsApp</p>
                  <p className="text-lg font-display group-hover:text-primary transition">+971 52 924 8514</p>
                  <p className="text-sm text-muted-foreground mt-1">Fastest response · 9 AM – 9 PM GST</p>
                </div>
              </div>
            </a>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary mb-1">Direct line</p>
                  <p className="text-lg font-display">+971 52 924 8514</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary mb-1">Based in</p>
                  <p className="text-lg font-display">Dubai, UAE</p>
                  <p className="text-sm text-muted-foreground mt-1">Available globally for ventures</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary mb-1">Response time</p>
                  <p className="text-lg font-display">Within 24 hours</p>
                  <p className="text-sm text-muted-foreground mt-1">Every message read personally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
