import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display text-gradient-gold">404</h1>
        <h2 className="mt-4 text-2xl font-display text-foreground">Page not found</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium text-primary-foreground hover:shadow-gold transition"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
