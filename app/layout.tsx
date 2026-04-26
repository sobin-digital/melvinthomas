import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.melvinthomas.com"),
  title: {
    default: "Melvin Thomas | Entrepreneur in Dubai | Transport & Education Leader",
    template: "%s | Melvin Thomas",
  },
  description:
    "Melvin Thomas is a Dubai-based entrepreneur and co-founder of Concord Transport and founder of Sanika Academy, offering premium bus rental Dubai, car rental Dubai, and online tutoring Dubai services.",
  keywords: [
    "Melvin Thomas",
    "entrepreneur Dubai",
    "transportation companies in Dubai",
    "bus rental Dubai",
    "luxury bus rental Dubai",
    "minibus rental Dubai",
    "car rental Dubai",
    "desert safari Dubai",
    "online class Dubai",
    "online tutoring Dubai",
    "maths tuition online",
    "online physics tutor",
    "english tuition online",
    "french class online",
  ],
  authors: [{ name: "Melvin Thomas" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Melvin Thomas",
    url: "https://www.melvinthomas.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@melvinthomas",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
        />
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
