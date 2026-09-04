import { createFileRoute } from "@tanstack/react-router";
import {
  Scissors,
  Sparkles,
  Palette,
  Brush,
  Clock,
  MapPin,
  Phone,
  Star,
  Instagram,
  ShieldCheck,
  Users,
  MessageSquare,
  CalendarCheck,
  HeartHandshake,
  Timer,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import salone from "@/assets/salone.png.asset.json";
import colore from "@/assets/colore.png.asset.json";
import logo from "@/assets/logo-3m.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parrucchieria 3M Senigallia — Taglio, Colore e Barba | Mancini" },
      {
        name: "description",
        content:
          "Parrucchieria 3M di Mauro e Fabio Mancini a Senigallia: taglio, colore, schiariture e barba con consulenza inclusa. 4,8/5 su 48 recensioni. Prenota al 071 64783.",
      },
      { property: "og:title", content: "Parrucchieria 3M Senigallia — Taglio, Colore e Barba" },
      {
        property: "og:description",
        content:
          "Salone storico di Senigallia in Via Cattabeni 26. Consulenza prima di ogni servizio, risultati naturali e prezzi chiari.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Parrucchieria 3M — Mancini Mauro e Fabio",
          telephone: "+39 071 64783",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Via Cattabeni, 26",
            postalCode: "60019",
            addressLocality: "Senigallia",
            addressRegion: "AN",
            addressCountry: "IT",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "48" },
          sameAs: ["https://www.instagram.com/parrucchieria3m/"],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:30",
              closes: "19:30",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "08:30",
              closes: "19:30",
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const servizi = [
  {
    icon: Scissors,
    t: "Taglio uomo",
    d: "Taglio costruito sulla forma del viso e sul modo in cui porti i capelli ogni giorno, non su una moda passeggera.",
  },
  {
    icon: Brush,
    t: "Barba e rasatura",
    d: "Rifinitura precisa dei contorni e barba curata: un servizio rapido ma mai sbrigativo.",
  },
  {
    icon: Sparkles,
    t: "Taglio donna e piega",
    d: "Lunghezze, scalature e piega pensate perché il risultato regga anche a casa, con pochi gesti.",
  },
  {
    icon: Palette,
    t: "Colore e schiariture",
    d: "Colore uniforme, colpi di sole e schiariture graduali con effetto naturale e ricrescita gestibile.",
  },
  {
    icon: HeartHandshake,
    t: "Consulenza inclusa",
    d: "Prima delle forbici parliamo: capiamo cosa vuoi ottenere e cosa il tuo capello può realmente sostenere.",
  },
  {
    icon: Users,
    t: "Famiglie e ragazzi",
    d: "Un salone dove entrano generazioni diverse: padri, figli, clienti che ci seguono da decenni.",
  },
];

const passi = [
  {
    n: "01",
    t: "Chiami o scrivi",
    d: "Telefono al 071 64783 o modulo del sito. Fissiamo giorno e ora negli orari di apertura.",
  },
  {
    n: "02",
    t: "Consulenza allo specchio",
    d: "Ascoltiamo la richiesta, guardiamo il capello e ti diciamo con onestà cosa funziona e cosa no.",
  },
  {
    n: "03",
    t: "Il servizio, con calma",
    d: "Lavoriamo con il tempo che serve al risultato: taglio, colore o barba eseguiti fino alla rifinitura.",
  },
  {
    n: "04",
    t: "Esci sapendo come gestirlo",
    d: "Ti spieghiamo come rifare la piega e quando tornare per mantenere la forma.",
  },
];

const benefici = [
  { t: "Un risultato che riconosci allo specchio", d: "Quello che chiedi viene ripetuto e confermato prima di iniziare." },
  { t: "Prezzi chiari, comunicati prima", d: "Nessuna sorpresa al momento del conto: il costo lo sai già." },
  { t: "Tempi rispettati", d: "Su appuntamento, per evitare attese lunghe e servizi affrettati." },
  { t: "Una forma che dura tra un taglio e l'altro", d: "Tagli costruiti per crescere bene, non solo per il primo giorno." },
];

const recensioni = [
  {
    q: "Ottima barba, gentile, rapido ed efficiente. Ci torno sicuramente.",
    a: "Alessio Scatolini",
    m: "Recensione Google",
  },
  {
    q: "Sono 45 anni che frequento questo salone 3M, personale gentile, disponibile, praticamente professionisti di alto livello.",
    a: "Claudio Goffredi",
    m: "Recensione Google",
  },
  {
    q: "Serietà e professionalità a prezzi contenuti.",
    a: "Recensione Google",
    m: "Estratto dalle recensioni del salone",
  },
];

const faq = [
  {
    q: "Come prenoto un appuntamento?",
    a: "Il modo più rapido è chiamare il 071 64783 negli orari di apertura. Puoi anche compilare il modulo del sito: ti richiamiamo noi per confermare giorno e ora.",
  },
  {
    q: "Quali sono gli orari del salone?",
    a: "Da martedì a venerdì 8:30–12:30 e 15:30–19:30. Il sabato 8:30–12:30 e 15:00–19:30. Domenica e lunedì siamo chiusi.",
  },
  {
    q: "Dove si trova Parrucchieria 3M?",
    a: "In Via Cattabeni 26, a Senigallia (AN), a pochi minuti dal centro.",
  },
  {
    q: "Lavorate su uomo e donna?",
    a: "Sì. In salone facciamo taglio uomo, barba, taglio donna, piega, colore e schiariture.",
  },
  {
    q: "Posso venire senza appuntamento?",
    a: "Quando c'è disponibilità ti accogliamo volentieri, ma con l'appuntamento hai il tempo dedicato e nessuna attesa.",
  },
  {
    q: "Cosa succede se non sono sicuro del taglio che voglio?",
    a: "È il caso più frequente. Partiamo dalla consulenza: guardiamo insieme forma del viso, tipo di capello e quanto tempo vuoi dedicare alla piega, poi scegliamo.",
  },
];

function Home() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--gradient-brass)" }}
          />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24 lg:pb-24">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs">
                  <Star className="size-3.5 fill-accent text-accent" />
                  <strong className="font-medium">4,8/5</strong>
                  <span className="text-muted-foreground">su 48 recensioni Google</span>
                </span>
                <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
                  Senigallia — Via Cattabeni 26
                </span>
              </div>

              <h1 className="mt-7 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.1rem]">
                Il taglio giusto
                <br />
                nasce da un
                <span className="text-brass-gradient"> ascolto vero</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Parrucchieria 3M è il salone di Mauro e Fabio Mancini a Senigallia. Taglio, colore e
                barba eseguiti con calma, dopo una consulenza che parte da come porti i capelli ogni
                giorno.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-7 transition-transform active:scale-[0.98]">
                  <a href="#contatti">
                    <CalendarCheck className="size-4" /> Prenota il tuo appuntamento
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-7">
                  <a href="#servizi">Guarda i servizi</a>
                </Button>
              </div>

              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-7">
                {[
                  ["4,8/5", "valutazione Google"],
                  ["48", "recensioni ricevute"],
                  ["2", "professionisti in salone"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="font-display text-3xl">{v}</dt>
                    <dd className="mt-1 text-xs leading-snug text-muted-foreground">{l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <img
                  src={salone.url}
                  alt="Interno della Parrucchieria 3M a Senigallia con poltrone e postazioni davanti agli specchi"
                  className="aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-lift)]"
                  width={616}
                  height={770}
                />
                <div className="surface-card absolute -bottom-6 left-4 hidden max-w-[15rem] p-4 sm:block md:-left-8">
                  <img
                    src={logo.url}
                    alt="Logo Parrucchieria 3M Mancini"
                    className="size-10 rounded-full"
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                  <p className="mt-3 text-sm leading-snug">
                    Salone storico di Senigallia, gestito da Mauro e Fabio Mancini.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <Reveal>
              <p className="eyebrow">Perché tanti cambiano salone</p>
              <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
                Il problema non è il taglio. È non essere ascoltati.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Chi arriva da noi spesso racconta la stessa esperienza: spiega cosa vuole e si ritrova
                con qualcosa di diverso. Da lì nasce la sfiducia.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Timer,
                  t: "Servizi fatti di corsa",
                  d: "Un taglio chiuso in cinque minuti non può rispettare la forma che avevi in mente.",
                },
                {
                  icon: MessageSquare,
                  t: "Richieste non rispettate",
                  d: "Dici una cosa, esci con un'altra: la parte davanti resta uguale, la lunghezza sparisce.",
                },
                {
                  icon: ShieldCheck,
                  t: "Nessuna spiegazione",
                  d: "Nessuno ti dice cosa è realizzabile sul tuo capello e come mantenerlo a casa.",
                },
              ].map((c, i) => (
                <Reveal key={c.t} delay={i * 90}>
                  <article className="surface-card h-full p-6">
                    <c.icon className="size-6 text-accent" />
                    <h3 className="mt-4 text-xl">{c.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUZIONE */}
        <section id="metodo" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <img
                src={colore.url}
                alt="Risultato di colpi di sole e schiariture su capelli mossi realizzati in salone"
                className="aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-lift)]"
                width={548}
                height={685}
                loading="lazy"
              />
            </Reveal>

            <Reveal delay={100}>
              <p className="eyebrow">Il metodo 3M</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">
                Prima si capisce, poi si taglia
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Ogni servizio comincia allo specchio, con una domanda semplice: come vuoi vederti quando
                esci di casa la mattina? Da quella risposta costruiamo il resto.
              </p>

              <ul className="mt-8 space-y-6">
                {[
                  {
                    t: "Ripetiamo la richiesta ad alta voce",
                    d: "Così sei sicuro che abbiamo capito, e noi siamo sicuri di non interpretare.",
                  },
                  {
                    t: "Diciamo con onestà cosa è realizzabile",
                    d: "Se una lunghezza o una schiaritura non regge sul tuo capello, te lo spieghiamo e proponiamo l'alternativa.",
                  },
                  {
                    t: "Lavoriamo con il tempo necessario",
                    d: "Su appuntamento, per dedicare a ogni persona la sua fascia oraria.",
                  },
                  {
                    t: "Ti lasciamo istruzioni pratiche",
                    d: "Come asciugarlo, cosa evitare, ogni quanto tornare per mantenere la forma.",
                  },
                ].map((s) => (
                  <li key={s.t} className="flex gap-4">
                    <span className="mt-1 size-2.5 shrink-0 rounded-full bg-accent" />
                    <div className="min-w-0">
                      <h3 className="text-lg">{s.t}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* BENEFICI */}
        <section className="border-y border-border" style={{ background: "var(--gradient-ink)" }}>
          <div className="mx-auto max-w-6xl px-5 py-16 text-primary-foreground md:py-24">
            <Reveal>
              <p className="eyebrow">Cosa ottieni</p>
              <h2 className="mt-3 max-w-2xl text-3xl text-primary-foreground sm:text-4xl">
                Uscire dal salone senza dover rimediare a casa
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {benefici.map((b, i) => (
                <Reveal key={b.t} delay={i * 80}>
                  <article className="h-full rounded-2xl border border-primary-foreground/12 bg-primary-foreground/5 p-6 transition-colors hover:border-accent/60">
                    <h3 className="text-xl text-primary-foreground">{b.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{b.d}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVIZI */}
        <section id="servizi" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
          <Reveal>
            <p className="eyebrow">Servizi</p>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
              Tutto quello che serve alla tua testa, in un solo salone
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Il listino aggiornato viene comunicato in salone prima di iniziare, così sai sempre cosa
              stai spendendo.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servizi.map((s, i) => (
              <Reveal key={s.t} delay={i * 70}>
                <article className="surface-card group h-full p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-accent/20">
                    <s.icon className="size-5 text-accent" />
                  </span>
                  <h3 className="mt-4 text-xl">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full px-7">
                <a href="#contatti">
                  <CalendarCheck className="size-4" /> Richiedi informazioni sul servizio
                </a>
              </Button>
            </div>
          </Reveal>
        </section>

        {/* COME FUNZIONA */}
        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <Reveal>
              <p className="eyebrow">Come funziona</p>
              <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
                Dalla telefonata al risultato, in quattro passaggi
              </h2>
            </Reveal>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {passi.map((p, i) => (
                <Reveal key={p.n} delay={i * 90}>
                  <li className="surface-card h-full list-none p-6">
                    <span className="font-display text-3xl text-accent">{p.n}</span>
                    <h3 className="mt-3 text-lg">{p.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* PER CHI È */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <p className="eyebrow">Per chi è</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Un salone per chi vuole essere capito</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Non siamo il salone dei ritocchi lampo senza dialogo. Siamo il posto dove si parla due
                minuti in più e si esce con la testa a posto.
              </p>
            </Reveal>
            <Reveal delay={110}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Uomini che cercano un taglio pulito e una barba curata con continuità",
                  "Donne che vogliono colore e schiariture dall'effetto naturale",
                  "Chi ha cambiato troppi saloni e vuole finalmente un punto fisso",
                  "Famiglie che portano in salone genitori e figli, come si fa da anni",
                  "Chi non sa cosa chiedere e vuole un consiglio sincero",
                  "Chi vive o lavora a Senigallia e cerca comodità e orari affidabili",
                ].map((t) => (
                  <p
                    key={t}
                    className="rounded-xl border border-border bg-card p-4 text-sm leading-relaxed shadow-[var(--shadow-soft)]"
                  >
                    {t}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* TEAM / SALONE */}
        <section id="salone" className="scroll-mt-24 border-y border-border bg-secondary/50">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Chi siamo</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Mauro e Fabio Mancini</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Parrucchieria 3M porta il cognome della famiglia Mancini. Mauro e Fabio lavorano fianco
                a fianco in Via Cattabeni, con clienti che frequentano il salone da decenni: c'è chi
                racconta di venire qui da 45 anni.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                È un salone di quartiere nel modo migliore: ti riconoscono, ricordano come porti i
                capelli e non hanno bisogno di ricominciare da zero ogni volta.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <a
                    href="https://www.instagram.com/parrucchieria3m/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="size-4" /> Guarda i lavori su Instagram
                  </a>
                </Button>
                <Button asChild size="lg" className="rounded-full">
                  <a href="tel:+3907164783">
                    <Phone className="size-4" /> Chiama il salone
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={110}>
              <div className="grid gap-4 sm:grid-cols-2">
                <img
                  src={salone.url}
                  alt="Postazioni e specchi della Parrucchieria 3M di Senigallia"
                  className="aspect-[3/4] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
                  width={420}
                  height={560}
                  loading="lazy"
                />
                <div className="flex flex-col gap-4">
                  <img
                    src={colore.url}
                    alt="Dettaglio di colpi di sole biondi su base castana realizzati in salone"
                    className="aspect-square w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
                    width={420}
                    height={420}
                    loading="lazy"
                  />
                  <div className="surface-card flex flex-1 flex-col justify-center p-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Spazio disponibile per nuove foto del salone: consigliamo immagini reali di
                      postazioni, dettagli di taglio e risultati colore.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* RECENSIONI */}
        <section id="recensioni" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
          <Reveal>
            <p className="eyebrow">Recensioni</p>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
              4,8 su 5, con 48 recensioni Google
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Riportiamo alcune recensioni pubbliche ricevute dal salone, senza modificarne il
              contenuto.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {recensioni.map((r, i) => (
              <Reveal key={r.q} delay={i * 90}>
                <figure className="surface-card flex h-full flex-col p-6">
                  <div className="flex gap-1" aria-label="Cinque stelle">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="size-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 font-display text-lg leading-snug">
                    “{r.q}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4 text-sm">
                    <span className="block font-medium">{r.a}</span>
                    <span className="text-muted-foreground">{r.m}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 border-y border-border bg-secondary/50">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="eyebrow">Domande frequenti</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Le risposte più utili prima di venire</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Se non trovi quello che cerchi, una telefonata risolve in un minuto.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <Accordion type="single" collapsible className="w-full">
                {faq.map((f, i) => (
                  <AccordionItem key={f.q} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* CONTATTI / CTA FINALE */}
        <section id="contatti" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <p className="eyebrow">Prenota</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">
                Fissiamo il tuo prossimo appuntamento
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Scegli il modo che preferisci: una telefonata è la via più rapida, il modulo va bene se
                preferisci essere richiamato.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="surface-card flex items-start gap-3 p-5">
                  <Phone className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-lg">Telefono</h3>
                    <a href="tel:+3907164783" className="text-sm text-muted-foreground hover:text-accent">
                      +39 071 64783
                    </a>
                  </div>
                </li>
                <li className="surface-card flex items-start gap-3 p-5">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-lg">Dove siamo</h3>
                    <p className="text-sm text-muted-foreground">
                      Via Cattabeni, 26 — 60019 Senigallia (AN)
                    </p>
                    <a
                      href="https://maps.google.com/?q=Via+Cattabeni+26+Senigallia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm text-accent hover:underline"
                    >
                      Apri le indicazioni su Maps
                    </a>
                  </div>
                </li>
                <li className="surface-card flex items-start gap-3 p-5">
                  <Clock className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-lg">Orari</h3>
                    <p className="text-sm text-muted-foreground">
                      Mar–Ven 8:30–12:30 / 15:30–19:30 · Sab 8:30–12:30 / 15:00–19:30 · Dom e Lun
                      chiuso
                    </p>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
