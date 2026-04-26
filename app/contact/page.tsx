import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Melvin Thomas — Book a Consultation in Dubai",
  description:
    "Reach out to Melvin Thomas for ventures, investments or partnerships. WhatsApp +971 52 924 8514 or send a message directly.",
  alternates: { canonical: "https://www.melvinthomas.com/contact" },
  openGraph: {
    title: "Contact Melvin Thomas",
    description: "Book a consultation or message Melvin directly.",
    url: "https://www.melvinthomas.com/contact",
  },
  twitter: {
    title: "Contact Melvin Thomas",
    description: "Book a consultation or message Melvin directly.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
