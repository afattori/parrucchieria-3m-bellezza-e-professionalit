import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";
const logo = { url: "/logo-3m.png" };

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt="Logo Parrucchieria 3M"
              className="h-12 w-12 shrink-0 rounded-full object-cover"
              width={48}
              height={48}
              loading="lazy"
            />
            <span className="font-display text-xl">Parrucchieria 3M</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Salone di Mauro e Fabio Mancini a Senigallia. Taglio, colore e barba curati con mano
            artigianale.
          </p>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.22em] text-accent uppercase">Contatti</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>Via Cattabeni, 26 — 60019 Senigallia (AN)</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href="tel:+3907164783" className="transition-colors hover:text-accent">
                +39 071 64783
              </a>
            </li>
            <li className="flex gap-2">
              <Instagram className="mt-0.5 size-4 shrink-0 text-accent" />
              <a
                href="https://www.instagram.com/parrucchieria3m/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                @parrucchieria3m
              </a>
            </li>
            <li className="text-primary-foreground/50">
              Email: da inserire (indirizzo reale non disponibile)
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.22em] text-accent uppercase">Orari</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>Mar — Ven: 8:30–12:30 / 15:30–19:30</span>
            </li>
            <li className="pl-6">Sabato: 8:30–12:30 / 15:00–19:30</li>
            <li className="pl-6 text-primary-foreground/60">Domenica e lunedì: chiuso</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.22em] text-accent uppercase">Informazioni</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <a href="/#servizi" className="transition-colors hover:text-accent">
                Servizi
              </a>
            </li>
            <li>
              <a href="/#contatti" className="transition-colors hover:text-accent">
                Prenota
              </a>
            </li>
            <li>
              <Link to="/privacy-policy" className="transition-colors hover:text-accent">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/cookie-policy" className="transition-colors hover:text-accent">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link to="/termini" className="transition-colors hover:text-accent">
                Termini e condizioni
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 px-5 py-6">
        <p className="mx-auto max-w-6xl text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Parrucchieria 3M — Mancini Mauro e Fabio. Tutti i diritti
          riservati. Partita IVA da inserire.
        </p>
      </div>
    </footer>
  );
}
