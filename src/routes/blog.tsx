import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { posts } from "../data/posts";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights by Melvin Thomas — Entrepreneurship, Transport & Education" },
      {
        name: "description",
        content:
          "Essays on transportation companies in Dubai, online education, leadership and the discipline of building businesses that last.",
      },
      { property: "og:title", content: "Insights by Melvin Thomas" },
      {
        property: "og:description",
        content: "Honest essays on building, leading and learning.",
      },
    ],
  }),
  component: BlogPage,
});

const categories = ["All", "Awareness", "Educational", "Motivational"] as const;

function BlogPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = filter === "All" ? posts : posts.filter((p) => p.category === filter);

  return (
    <>
      <section className="pt-32 pb-12 container-luxe">
        <SectionHeading
          eyebrow="Insights"
          title="Essays on building, leading and learning."
          subtitle="Long-form reflections on transportation, education and the discipline of building things that outlast us."
        />

        <div className="mt-12 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] border transition-all ${
                filter === c
                  ? "bg-gradient-gold text-primary-foreground border-transparent"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-luxe pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group p-8 rounded-2xl bg-card border border-border hover-lift relative overflow-hidden flex flex-col animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "var(--gradient-radial-gold)" }}
              />
              <div className="relative flex flex-col h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary px-3 py-1 border border-primary/40 rounded-full">
                    {p.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{p.readTime}</span>
                </div>
                <h3 className="text-2xl font-display leading-snug mb-4 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {p.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary group-hover:gap-3 transition-all">
                  Read essay <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
