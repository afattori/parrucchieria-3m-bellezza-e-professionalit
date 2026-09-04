import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-3m.png.asset.json";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/#servizi", label: "Servizi" },
  { href: "/#metodo", label: "Il metodo" },
  { href: "/#salone", label: "Il salone" },
  { href: "/#recensioni", label: "Recensioni" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contatti", label: "Contatti" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Parrucchieria 3M, home">
          <img
            src={logo.url}
            alt="Logo Parrucchieria 3M Mancini"
            className="h-11 w-11 shrink-0 rounded-full object-cover"
            width={44}
            height={44}
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight">Parrucchieria 3M</span>
            <span className="block truncate text-[0.68rem] tracking-[0.22em] text-muted-foreground uppercase">
              Senigallia
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigazione principale">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-foreground/80 transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="lg" className="rounded-full">
            <a href="tel:+3907164783">
              <Phone className="size-4" /> Prenota al 071 64783
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent active:scale-95 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/98 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2" aria-label="Navigazione mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 text-base last:border-0"
              >
                {l.label}
              </a>
            ))}
            <Button asChild size="lg" className="my-4 rounded-full">
              <a href="tel:+3907164783">
                <Phone className="size-4" /> Prenota al 071 64783
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
