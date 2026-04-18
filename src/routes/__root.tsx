import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display text-gradient-gold">404</h1>
        <h2 className="mt-4 text-2xl font-display text-foreground">Page not found</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium text-primary-foreground hover:shadow-gold transition"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Melvin Thomas — Dubai Entrepreneur, Investor & Founder" },
      {
        name: "description",
        content:
          "Melvin Thomas is a Dubai-based entrepreneur building businesses in transportation and education. Discover his story, ventures and insights.",
      },
      { name: "author", content: "Melvin Thomas" },
      { property: "og:title", content: "Melvin Thomas — Dubai Entrepreneur, Investor & Founder" },
      {
        property: "og:description",
        content:
          "Building businesses that move people and shape futures — from Dubai to the world.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Melvin Thomas — Dubai Entrepreneur, Investor & Founder" },
      { name: "description", content: "Luxury personal brand website for Dubai entrepreneur Melvin Thomas, showcasing his vision and ventures." },
      { property: "og:description", content: "Luxury personal brand website for Dubai entrepreneur Melvin Thomas, showcasing his vision and ventures." },
      { name: "twitter:description", content: "Luxury personal brand website for Dubai entrepreneur Melvin Thomas, showcasing his vision and ventures." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/699a721a-070b-423f-8f2a-eebee1e8d7ae/id-preview-525046c7--425444c9-96e1-4e5d-b5e2-ad648f1338c7.lovable.app-1776546786234.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/699a721a-070b-423f-8f2a-eebee1e8d7ae/id-preview-525046c7--425444c9-96e1-4e5d-b5e2-ad648f1338c7.lovable.app-1776546786234.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
