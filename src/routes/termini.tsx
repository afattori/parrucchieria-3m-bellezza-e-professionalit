import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/termini")({
  head: () => ({
    meta: [
      { title: "Termini e condizioni — Parrucchieria 3M Senigallia" },
      {
        name: "description",
        content:
          "Condizioni di utilizzo del sito e regole di prenotazione degli appuntamenti in Parrucchieria 3M a Senigallia.",
      },
      { property: "og:title", content: "Termini e condizioni — Parrucchieria 3M" },
      {
        property: "og:description",
        content: "Regole di prenotazione e condizioni di utilizzo del sito.",
      },
      { property: "og:type", content: "article" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/termini" }],
  }),
  component: Termini,
});

function Termini() {
  return (
    <>
      <Header />
      <LegalPage
        title="Termini e condizioni"
        intro="Queste condizioni riguardano l'uso del sito e la gestione delle richieste di appuntamento inviate online o per telefono."
        sections={[
          {
            h: "Contenuti del sito",
            p: [
              "I testi, il logo e le immagini presenti in queste pagine appartengono a Parrucchieria 3M e non possono essere riprodotti senza autorizzazione.",
              "Le informazioni su orari e servizi sono aggiornate con cura, ma possono variare: per una conferma certa consigliamo sempre una telefonata al salone.",
            ],
          },
          {
            h: "Richieste di appuntamento",
            p: [
              "Il modulo online è una richiesta di contatto, non una prenotazione confermata. L'appuntamento è valido solo dopo la nostra conferma telefonica.",
              "Se non puoi presentarti, ti chiediamo di avvisarci con un preavviso ragionevole: liberare l'orario permette di servire un'altra persona.",
            ],
          },
          {
            h: "Servizi in salone",
            p: [
              "Ogni servizio inizia con una breve consulenza. Se la richiesta non è realizzabile in modo sano sul capello, lo diciamo in modo chiaro e proponiamo l'alternativa migliore.",
              "Il listino aggiornato viene comunicato in salone prima di iniziare il servizio.",
            ],
          },
          {
            h: "Legge applicabile",
            p: [
              "Il rapporto è regolato dalla legge italiana. Per qualsiasi chiarimento puoi contattarci al +39 071 64783.",
            ],
          },
        ]}
      />
      <Footer />
    </>
  );
}
