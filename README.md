# Volley Prato Academy – sito in React

Progetto React con Vite e React Router. Stesso design del sito in HTML, ma con componenti riutilizzabili.

## Come partire
Serve Node.js (versione 18 o successiva).

```bash
npm install
npm run dev      # sito di prova su http://localhost:5173
npm run build    # crea la cartella dist/ da pubblicare
npm run preview  # prova la versione finale
```

## Dove si modificano le cose
- `src/data/site.js`: contatti, menu, squadre, domande frequenti. È il posto principale per i contenuti.
- `src/pages/`: una pagina per file (Home, Societa, Squadre, Atlete, Corsi, Sponsor, Contatti).
- `src/components/`: pezzi riutilizzabili (intestazione, piè di pagina, atleta, riga documento, modulo).
- `src/style.css`: tutti gli stili; i colori sono nelle variabili in cima al file.
- `public/logo.png`: logo (da sostituire con il file originale). I PDF vanno in `public/documenti/`.

Ciò che è tra parentesi quadre, per esempio `[Nome Cognome]`, va ancora compilato.
Le foto sono riquadri tratteggiati (`Placeholder`): sostituiscili con `<img src="/foto/nome.jpg" alt="descrizione" />`.

## Moduli
I due moduli (prova gratuita e contatti) usano `mailto:` e aprono il programma di posta: è una soluzione provvisoria.
Prima di andare online collegali a un servizio di invio (Formspree, Netlify Forms o l'hosting) cambiando l'attributo `action`.

## Pubblicazione
Dopo `npm run build` carica la cartella `dist/` su un hosting statico (Netlify, Cloudflare Pages, Vercel).
Le pagine hanno indirizzi puliti (per esempio `/squadre`): il file `public/_redirects` è già pronto per Netlify e Cloudflare Pages.
Su altri hosting serve una regola che rimandi tutte le richieste a `index.html`.
