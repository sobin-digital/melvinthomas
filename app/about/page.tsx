import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Melvin Thomas — From Humble Beginnings to Dubai Entrepreneur",
  description:
    "The story of Melvin Thomas — leadership, resilience and vision behind ventures like Concord Transport, Sanika Academy and Anchuthyckal Transport.",
  alternates: { canonical: "https://www.melvinthomas.com/about" },
  openGraph: {
    title: "About Melvin Thomas",
    description: "Self-made entrepreneur. Builder of institutions. Based in Dubai.",
    url: "https://www.melvinthomas.com/about",
  },
  twitter: {
    title: "About Melvin Thomas",
    description: "Self-made entrepreneur. Builder of institutions. Based in Dubai.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
