import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Calendar, Sparkles } from "lucide-react";
import portrait from "@/assets/melvin-portrait.jpg";
import skyline from "@/assets/dubai-skyline.jpg";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Melvin Thomas | Entrepreneur in Dubai | Transport & Education Leader",
  description:
    "Melvin Thomas is a Dubai-based entrepreneur and co-founder of Concord Transport and founder of Sanika Academy, offering premium bus rental Dubai, car rental Dubai, and online tutoring Dubai services. Connect for business, partnerships, and investment opportunities.",
  alternates: { canonical: "https://www.melvinthomas.com" },
  openGraph: {
    title: "Melvin Thomas | Entrepreneur & Business Leader in Dubai",
    description:
      "Discover Melvin Thomas's journey in building successful transportation and education businesses in Dubai.",
    url: "https://www.melvinthomas.com",
    images: ["https://www.melvinthomas.com/og-image.jpg"],
  },
  twitter: {
    title: "Melvin Thomas | Entrepreneur in Dubai",
    description:
      "Dubai-based entrepreneur leading transport and education businesses. Connect for services and partnerships.",
    images: ["https://www.melvinthomas.com/og-image.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Melvin Thomas",
  jobTitle: "Entrepreneur",
  url: "https://www.melvinthomas.com",
  worksFor: {
    "@type": "Organization",
    name: "The Concord Passengers Transporting L.L.C",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  sameAs: ["#", "#", "#"],
};

const stats = [
  { value: "15+", label: "Years Building" },
  { value: "3", label: "Active Ventures" },
  { value: "1000+", label: "Lives Touched" },
  { value: "Dubai", label: "Home Base" },
];

const pillars = [
  {
    icon: Sparkles,
    title: "Vision",
    text: "Anticipating tomorrow's markets and shaping ventures that endure beyond cycles.",
  },
  {
    icon: ArrowRight,
    title: "Execution",
    text: "Turning ambitious blueprints into operating businesses with measurable outcomes.",
  },
  {
    icon: Calendar,
    title: "Legacy",
    text: "Building institutions that continue to move people and shape futures for decades.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* HERO */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={skyline}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />

        <div className="container-luxe relative grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <div className="animate-fade-up">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">
              Dubai · Entrepreneur · Investor
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1.02]">
              Building Businesses That{" "}
              <span className="text-gradient-gold italic">Move People</span> &amp; Shape{" "}
              <span className="text-gradient-gold italic">Futures</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              From the streets of humble beginnings to the boardrooms of Dubai — Melvin Thomas
              founds ventures across transportation and education, designed to outlast trends and
              transform lives.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/971529248514"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em] font-medium hover:shadow-gold transition-all duration-300"
              >
                <MessageCircle size={16} /> WhatsApp Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-primary/40 text-primary text-xs uppercase tracking-[0.25em] font-medium hover:bg-primary/10 transition-all duration-300"
              >
                <Calendar size={16} /> Book Consultation
              </Link>
            </div>
          </div>

          <div
            className="relative flex justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-gold opacity-30 blur-3xl" />
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden ring-gold border-2 border-primary/40">
                <Image
                  src={portrait}
                  alt="Melvin Thomas, Dubai entrepreneur"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:bottom-2 md:right-2 bg-card border border-primary/30 backdrop-blur px-5 py-3 rounded-full text-xs uppercase tracking-[0.2em]">
                <span className="text-primary">●</span>{" "}
                <span className="text-foreground">Available for Ventures</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-luxe py-16 border-y border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-display text-gradient-gold">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="container-luxe py-24 md:py-32">
        <SectionHeading
          eyebrow="The Operating Philosophy"
          title="Three pillars that define every venture I touch."
          subtitle="Whether transporting executives across Dubai or teaching a child their first physics formula online — the standard is uncompromising."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group p-8 rounded-2xl bg-card border border-border hover-lift relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "var(--gradient-radial-gold)" }}
              />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                  <p.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-2xl font-display mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="container-luxe pb-24 md:pb-32">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 border border-primary/30 bg-card">
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
          <div className="relative grid md:grid-cols-[2fr_1fr] gap-8 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">
                Let&apos;s build something
              </p>
              <h3 className="text-3xl md:text-4xl font-display leading-tight">
                Ready to discuss a venture, partnership or investment?
              </h3>
              <p className="mt-4 text-muted-foreground max-w-xl">
                A 30-minute conversation can change a decade. Reach out and let&apos;s see where alignment lives.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em] font-medium hover:shadow-gold transition"
              >
                Book Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
