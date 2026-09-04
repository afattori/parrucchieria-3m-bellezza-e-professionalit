import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Parrucchieria 3M Senigallia" },
      {
        name: "description",
        content:
          "Informativa sui cookie utilizzati dal sito di Parrucchieria 3M, salone di Mauro e Fabio Mancini a Senigallia.",
      },
      { property: "og:title", content: "Cookie Policy — Parrucchieria 3M" },
      { property: "og:description", content: "Quali cookie utilizza questo sito e come gestirli." },
      { property: "og:type", content: "article" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/cookie-policy" }],
  }),
  component: Cookie,
});

function Cookie() {
  return (
    <>
      <Header />
      <LegalPage
        title="Cookie Policy"
        intro="I cookie sono piccoli file salvati dal browser durante la navigazione. Questo sito è pensato per funzionare con il minimo indispensabile."
        sections={[
          {
            h: "Cookie tecnici",
            p: [
              "Servono al corretto funzionamento delle pagine e alla sicurezza della navigazione. Non richiedono consenso perché senza di essi il sito non potrebbe funzionare.",
            ],
          },
          {
            h: "Cookie statistici e di marketing",
            p: [
              "Al momento il sito non installa strumenti di profilazione pubblicitaria. Se in futuro vengono aggiunti servizi di statistica o pixel dei social network, questa sezione va aggiornata con l'elenco preciso degli strumenti e con la richiesta di consenso preventivo.",
            ],
          },
          {
            h: "Contenuti esterni",
            p: [
              "I collegamenti al profilo Instagram e alla mappa si aprono su siti di terze parti, che applicano le proprie informative sui cookie.",
            ],
          },
          {
            h: "Come gestire i cookie",
            p: [
              "Puoi cancellare o bloccare i cookie dalle impostazioni del tuo browser. Il blocco dei cookie tecnici può limitare alcune funzioni del sito.",
            ],
          },
        ]}
      />
      <Footer />
    </>
  );
}
