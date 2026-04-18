import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { getPost, posts } from "../data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Post not found" }] };
    return {
      meta: [
        { title: `${post.title} — Melvin Thomas` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center container-luxe">
      <div className="text-center">
        <h1 className="text-3xl font-display mb-4">Essay not found</h1>
        <Link to="/blog" className="text-primary uppercase text-xs tracking-[0.2em]">
          ← Back to all essays
        </Link>
      </div>
    </div>
  ),
});

function BlogDetail() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <>
      <article className="pt-32 pb-16 container-luxe max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary mb-10"
        >
          <ArrowLeft size={14} /> All Essays
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary px-3 py-1 border border-primary/40 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">{post.readTime} · {post.date}</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.05]">
          {post.title}
        </h1>

        <p className="mt-6 text-lg text-muted-foreground italic leading-relaxed">
          {post.excerpt}
        </p>

        <div className="gold-divider my-12" />

        <div className="space-y-7 text-base md:text-lg text-foreground/85 leading-[1.85]">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-10 rounded-2xl border border-primary/30 bg-card relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Continue the conversation</p>
            <h3 className="text-2xl font-display mb-4">Have a question or a venture to discuss?</h3>
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
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="p-6 rounded-2xl bg-card border border-border hover-lift block"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">{p.category}</p>
                <h4 className="text-xl font-display mb-2">{p.title}</h4>
                <p className="text-sm text-muted-foreground">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
