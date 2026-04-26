import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { posts } from "@/data/posts";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Insights by Melvin Thomas — Entrepreneurship, Transport & Education",
  description:
    "Essays on transportation companies in Dubai, online education, leadership and the discipline of building businesses that last.",
  alternates: { canonical: "https://www.melvinthomas.com/blog" },
  openGraph: {
    title: "Insights by Melvin Thomas",
    description: "Honest essays on building, leading and learning.",
    url: "https://www.melvinthomas.com/blog",
  },
  twitter: {
    title: "Insights by Melvin Thomas",
    description: "Honest essays on building, leading and learning.",
  },
};

export default function BlogPage() {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((p, i) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-border mb-6">
                <Image
                  src={p.cover}
                  alt={p.title}
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "var(--gradient-radial-gold)" }}
                />
              </div>

              <h3 className="text-2xl font-display leading-snug mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                {p.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary group-hover:gap-3 transition-all self-start border-b border-primary/40 pb-1">
                Read More <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
