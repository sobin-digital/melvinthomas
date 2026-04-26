import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { getPost, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: "Post not found" };
  }
  return {
    title: `${post.title} — Melvin Thomas`,
    description: post.excerpt,
    alternates: { canonical: `https://www.melvinthomas.com/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://www.melvinthomas.com/blog/${post.slug}`,
      images: [post.cover.src],
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
      images: [post.cover.src],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="pt-32 pb-16 container-luxe max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary mb-10"
        >
          <ArrowLeft size={14} /> All Essays
        </Link>

        <div className="relative aspect-video overflow-hidden rounded-2xl border border-border mb-10">
          <Image
            src={post.cover}
            alt={post.title}
            width={1280}
            height={720}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs text-muted-foreground">
            {post.readTime} · {post.date}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.05]">
          {post.title}
        </h1>

        <p className="mt-6 text-lg text-muted-foreground italic leading-relaxed">{post.excerpt}</p>

        <div className="gold-divider my-12" />

        <div className="space-y-7 text-base md:text-lg text-foreground/85 leading-[1.85]">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-10 rounded-2xl border border-primary/30 bg-card relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              Continue the conversation
            </p>
            <h3 className="text-2xl font-display mb-4">
              Have a question or a venture to discuss?
            </h3>
            <a
              href="https://wa.me/971529248514"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em]"
            >
              <MessageCircle size={14} /> WhatsApp Melvin
            </a>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="container-luxe pb-24 max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Related essays</p>
          <div className="grid md:grid-cols-2 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-2xl bg-card border border-border hover-lift block overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-display mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
