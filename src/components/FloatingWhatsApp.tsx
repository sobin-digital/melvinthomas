import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/971529248514"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-gold text-primary-foreground shadow-gold hover:scale-110 transition-transform duration-300">
        <MessageCircle size={26} strokeWidth={2} />
      </span>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-card border border-border text-xs uppercase tracking-[0.2em] px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
        WhatsApp Now
      </span>
    </a>
  );
}
