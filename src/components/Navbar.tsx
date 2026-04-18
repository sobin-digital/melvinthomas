import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container-luxe flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="font-display text-2xl tracking-wider">
            <span className="text-gradient-gold">M</span>
            <span className="text-foreground">T</span>
          </span>
          <span className="hidden sm:block text-xs uppercase tracking-[0.3em] text-muted-foreground border-l border-border pl-3">
            Melvin Thomas
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-300"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/971529248514"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.2em] font-medium hover:shadow-gold transition-all duration-300"
        >
          Let's Talk
        </a>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-up">
          <ul className="container-luxe py-6 flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/971529248514"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.2em]"
              >
                WhatsApp Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
