export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { h: string; p: string[] }[];
}) {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <p className="eyebrow">Documenti legali</p>
      <h1 className="mt-3 text-4xl md:text-5xl">{title}</h1>
      <div className="hairline mt-6" />
      <p className="mt-6 text-base leading-relaxed text-muted-foreground">{intro}</p>

      <div className="mt-10 space-y-9">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-2xl">{s.h}</h2>
            {s.p.map((par) => (
              <p key={par} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {par}
              </p>
            ))}
          </section>
        ))}
      </div>

      <p className="mt-12 rounded-xl border border-border bg-secondary/60 p-4 text-xs leading-relaxed text-muted-foreground">
        Nota per il titolare: questo testo è una base redazionale e va completato con i dati reali
        dell'attività (Partita IVA, email, eventuali strumenti di analisi utilizzati) e verificato da
        un consulente prima della pubblicazione definitiva.
      </p>
    </main>
  );
}
