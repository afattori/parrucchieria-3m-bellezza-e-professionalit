import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Send } from "lucide-react";

const services = ["Taglio uomo", "Barba", "Taglio donna", "Colore o schiariture", "Piega", "Altro"];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", telefono: "", servizio: services[0], note: "" });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.nome.trim() || form.telefono.trim().length < 6) {
      toast.error("Controlla nome e numero di telefono: servono per richiamarti.");
      return;
    }
    setSent(true);
    toast.success("Richiesta inviata: ti richiamiamo per confermare l'orario.");
  }

  if (sent) {
    return (
      <div className="surface-card flex flex-col items-start gap-4 p-7">
        <CheckCircle2 className="size-9 text-accent" />
        <h3 className="text-2xl">Richiesta ricevuta, {form.nome.split(" ")[0]}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Ti ricontattiamo al numero {form.telefono} negli orari di apertura per confermare giorno e
          ora. Se hai bisogno di una risposta immediata, chiamaci al 071 64783.
        </p>
        <Button variant="outline" className="rounded-full" onClick={() => setSent(false)}>
          Invia un'altra richiesta
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card space-y-5 p-6 md:p-7" noValidate>
      <div>
        <h3 className="text-2xl">Richiedi il tuo appuntamento</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Compila i campi contrassegnati con * e ti richiamiamo noi.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome e cognome *</Label>
          <Input
            id="nome"
            required
            autoComplete="name"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            placeholder="Es. Giulia Rossi"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefono">Telefono *</Label>
          <Input
            id="telefono"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            placeholder="Es. 333 1234567"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="servizio">Servizio desiderato</Label>
        <select
          id="servizio"
          value={form.servizio}
          onChange={(e) => setForm({ ...form, servizio: e.target.value })}
          className="h-10 w-full rounded-md border border-input bg-card px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="note">Giorni e orari preferiti</Label>
        <Textarea
          id="note"
          rows={3}
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
          placeholder="Es. giovedì pomeriggio o sabato mattina"
        />
      </div>

      <Button type="submit" size="lg" className="w-full rounded-full">
        <Send className="size-4" /> Invia la richiesta
      </Button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Inviando il modulo accetti il trattamento dei dati per essere ricontattato. La richiesta
        diventa prenotazione solo dopo la nostra conferma telefonica.
      </p>
    </form>
  );
}
