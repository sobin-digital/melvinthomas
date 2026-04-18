import { createFileRoute, Link } from "@tanstack/react-router";
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

function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-12 container-luxe">
        <SectionHeading
          eyebrow="Insights"
          title="Essays on building, leading and learning."
          subtitle="Long-form reflections on transportation, education and the discipline of building things that outlast us."
        />
      </section>

      <section className="container-luxe pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <article
              key={p.slug}
              className="group p-8 rounded-2xl bg-card border border-border hover-lift relative overflow-hidden flex flex-col animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "var(--gradient-radial-gold)" }}
              />
              <div className="relative flex flex-col h-full">
                <span className="text-xs text-muted-foreground mb-5 tracking-wider">
                  {p.readTime}
                </span>
                <h3 className="text-2xl font-display leading-snug mb-4 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                  {p.excerpt}
                </p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary group-hover:gap-3 transition-all self-start border-b border-primary/40 pb-1"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
