import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Parrucchieria 3M Senigallia" },
      {
        name: "description",
        content:
          "Come Parrucchieria 3M di Senigallia tratta i dati personali raccolti tramite il sito e il modulo di contatto.",
      },
      { property: "og:title", content: "Privacy Policy — Parrucchieria 3M" },
      { property: "og:description", content: "Informativa sul trattamento dei dati personali." },
      { property: "og:type", content: "article" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <Header />
      <LegalPage
        title="Privacy Policy"
        intro="Questa informativa spiega quali dati raccogliamo attraverso il sito di Parrucchieria 3M e come li utilizziamo. I dati inseriti nel modulo di contatto servono unicamente a rispondere alla tua richiesta di appuntamento o informazione."
        sections={[
          {
            h: "Titolare del trattamento",
            p: [
              "Parrucchieria 3M — Mancini Mauro e Fabio, Via Cattabeni 26, 60019 Senigallia (AN), telefono +39 071 64783.",
              "Indirizzo email del titolare e Partita IVA: da inserire con i dati reali dell'attività.",
            ],
          },
          {
            h: "Dati raccolti",
            p: [
              "Dal modulo di contatto: nome, numero di telefono, eventuale email e il testo del messaggio.",
              "Non raccogliamo dati particolari e non chiediamo informazioni che non siano necessarie a fissare o gestire un appuntamento.",
            ],
          },
          {
            h: "Finalità e base giuridica",
            p: [
              "Utilizziamo i dati per rispondere alle richieste ricevute e organizzare gli appuntamenti in salone. La base giuridica è il consenso che presti inviando il modulo e l'interesse legittimo a gestire il rapporto con il cliente.",
            ],
          },
          {
            h: "Conservazione e comunicazione",
            p: [
              "Conserviamo i messaggi per il tempo necessario a gestire la richiesta e gli obblighi di legge collegati. I dati non vengono venduti né ceduti a terzi per finalità commerciali.",
            ],
          },
          {
            h: "I tuoi diritti",
            p: [
              "Puoi chiedere in qualsiasi momento accesso, rettifica, cancellazione o limitazione dei tuoi dati, oppure opporti al trattamento, contattandoci al numero indicato sopra.",
            ],
          },
        ]}
      />
      <Footer />
    </>
  );
}
