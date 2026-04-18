import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-24">
      <div className="container-luxe py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="font-display text-3xl mb-4">
              <span className="text-gradient-gold">Melvin</span>{" "}
              <span className="text-foreground">Thomas</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Building businesses that move people and shape futures — from Dubai to the world.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Navigate</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Connect</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="https://wa.me/971529248514" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                  WhatsApp: +971 52 924 8514
                </a>
              </li>
              <li>Dubai, United Arab Emirates</li>
            </ul>
          </div>
        </div>

        <div className="gold-divider my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground tracking-wider">
          <p>© {new Date().getFullYear()} Melvin Thomas. All rights reserved.</p>
          <p className="uppercase tracking-[0.3em]">Crafted with intention</p>
        </div>
      </div>
    </footer>
  );
}
