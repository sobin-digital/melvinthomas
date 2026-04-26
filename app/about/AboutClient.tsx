"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Bus, GraduationCap, Truck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import portrait from "@/assets/melvin-portrait.jpg";

const brands = [
  {
    id: "concord",
    name: "Concord Transport",
    icon: Bus,
    tagline: "Premium transportation across the UAE",
    description:
      "A full-service transportation company offering luxury bus rentals, minibus hire and corporate fleet solutions across Dubai and the Emirates.",
    link: "https://www.theconcordtransport.com",
  },
  {
    id: "sanika",
    name: "Sanika Academy",
    icon: GraduationCap,
    tagline: "World-class online education",
    description:
      "Online learning platform delivering personalised tutoring in physics, mathematics, French and English to students globally — including Dubai.",
    link: "https://www.sanikaacademy.com",
  },
  {
    id: "anchuthyckal",
    name: "Anchuthyckal Transport",
    icon: Truck,
    tagline: "Heritage logistics, modern execution",
    description:
      "A trusted logistics and transport operation rooted in family heritage — moving goods and people with precision, care and reliability.",
    link: "#",
  },
];

export default function AboutClient() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <section className="pt-32 pb-16 container-luxe">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-gold opacity-20 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-primary/30">
              <Image
                src={portrait}
                alt="Melvin Thomas portrait"
                width={600}
                height={700}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">The Story</p>
            <h1 className="text-5xl md:text-6xl font-display leading-[1.05]">
              From humble beginnings to{" "}
              <span className="text-gradient-gold italic">building institutions</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              I did not inherit privilege. I inherited principles — discipline, devotion and a deep
              respect for hard work. Everything else, I had to build.
            </p>
          </div>
        </div>
      </section>

      <section className="container-luxe py-16 md:py-24">
        <div className="max-w-3xl mx-auto space-y-8 text-lg text-muted-foreground leading-[1.9]">
          <p>
            My earliest memory of ambition is not a boardroom or a balance sheet. It is a small
            room, a thin notebook, and a quiet conviction that the life I was born into would not
            be the life I died in. That conviction is the one asset I have never spent.
          </p>
          <p>
            <span className="text-foreground font-medium">Leadership, to me, is not a title.</span>{" "}
            It is the discipline of taking responsibility when no one is watching, and the
            generosity of crediting your team when everyone is. I have led drivers across Dubai
            highways at 4 AM and tutors across continents at midnight. The principle does not
            change.
          </p>
          <p>
            <span className="text-foreground font-medium">Resilience is not a slogan.</span> It is
            what you do on the seventh failed pitch, the third lost contract, the hundredth night
            you wonder if you chose the harder path for nothing. It is choosing the path again,
            anyway, with a little more wisdom and a lot more patience.
          </p>
          <p>
            <span className="text-foreground font-medium">Vision is the long game.</span> Concord
            Transport is not a fleet of vehicles — it is a promise of reliability. Sanika Academy
            is not a website — it is a child&apos;s first formula understood. Anchuthyckal is not a
            logistics company — it is a family name carried forward. Every venture I touch is built
            to outlast me.
          </p>
          <p>
            Dubai gave me the canvas. Discipline gave me the brush. The work — that part is still
            being painted, every single day.
          </p>
        </div>
      </section>

      <section className="container-luxe pb-24 md:pb-32">
        <SectionHeading
          eyebrow="Ventures"
          title="The brands I build, lead and steward."
          align="center"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {brands.map((b) => {
            const isActive = active === b.id;
            return (
              <button
                key={b.id}
                onClick={() => setActive(isActive ? null : b.id)}
                className="text-left p-8 rounded-2xl bg-card border border-border hover-lift relative overflow-hidden group"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "var(--gradient-radial-gold)" }}
                />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                    <b.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-display mb-2">{b.name}</h3>
                  <p className="text-sm text-primary mb-4 uppercase tracking-wider">{b.tagline}</p>

                  {isActive && (
                    <div className="animate-fade-up mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {b.description}
                      </p>
                      {b.link !== "#" ? (
                        <a
                          href={b.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary hover:gap-3 transition-all"
                        >
                          Visit Website <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          Private venture
                        </span>
                      )}
                    </div>
                  )}

                  {!isActive && (
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Click to explore →
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}
