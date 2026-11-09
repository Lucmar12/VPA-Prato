import Meta from '../components/Meta.jsx'
import { WhatsAppIcon } from '../components/Icons.jsx'
import { site, steps, values, faq, sponsor } from '../data/site.js'

// Messaggio già scritto nella chat: chi arriva da WhatsApp deve solo premere invio.
const waText = encodeURIComponent('Ciao! Vorrei far provare il volley a mia figlia.')
const waHref = `${site.whatsapp}?text=${waText}`

// In attesa dei contenuti definitivi mostriamo solo ciò che è già compilato.
const faqPronte = faq.filter((f) => !f.a.includes('['))

export default function Landing() {
  return (
    <>
      <Meta
        title="Prova gratuita di pallavolo a Prato – Volley Prato Academy"
        description="Volley Prato Academy: pallavolo femminile a Prato, dal minivolley alle giovanili. Prova gratuita e senza impegno. Scrivici su WhatsApp."
      />

      <main className="lp">
        <section className="lp-hero">
          <div className="container lp-hero-inner">
            <img className="lp-logo" src="/logo.png" alt="Logo Volley Prato Academy" width="200" height="200" />
            <p className="lp-eyebrow">Pallavolo femminile a Prato</p>
            <h1>
              Fai provare il volley
              <br />a tua figlia. Gratis.
            </h1>
            <p className="lp-sub">
              Dal minivolley alle giovanili, con allenatori qualificati. Il primo allenamento è gratuito e senza
              impegno: se le piace, ne riparliamo.
            </p>
            <div className="lp-cta">
              <a className="btn btn-red btn-lg" href={waHref} target="_blank" rel="noopener noreferrer">
                Scrivici su WhatsApp
              </a>
              <a className="btn btn-outline-white btn-lg" href={site.phoneHref}>
                Chiama {site.phone}
              </a>
            </div>
            <p className="lp-note">Rispondiamo di persona, di solito in giornata.</p>
          </div>
        </section>

        <section className="lp-section" id="come-funziona">
          <div className="container">
            <h2>Come funziona</h2>
            <p className="lp-intro">Tre passaggi, nessun modulo da stampare.</p>
            <ol className="lp-steps">
              {steps.map((s) => (
                <li key={s.n}>
                  <span className="lp-step-num">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <a className="btn btn-red btn-lg lp-inline-cta" href={waHref} target="_blank" rel="noopener noreferrer">
              Prenota la prova gratuita
            </a>
          </div>
        </section>

        <section className="lp-section lp-sky" id="chi-siamo">
          <div className="container lp-split">
            <div>
              <h2>Nata dalle famiglie</h2>
              <p className="lp-body">
                Volley Prato Academy è nata dal desiderio di alcune famiglie della provincia di Prato di far giocare a
                volley le proprie figlie. Da allora è cresciuta: dal minivolley alla prima squadra nel campionato Under
                12.
              </p>
              <p className="lp-body">
                Cerchiamo nuove atlete nate tra il 2012 e il 2016 per la stagione 2026/27. Non serve esperienza: si
                comincia da zero, insieme alle altre.
              </p>
            </div>
            <ul className="lp-values">
              {values.map((v) => (
                <li key={v.title}>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {faqPronte.length > 0 && (
          <section className="lp-section" id="domande">
            <div className="container lp-narrow">
              <h2>Domande frequenti</h2>
              <div className="faq">
                {faqPronte.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="lp-section lp-sky" id="sponsor">
          <div className="container">
            <h2>Chi ci sostiene</h2>
            <p className="lp-intro">Le aziende e le realtà di Prato che credono nel volley giovanile.</p>
            <ul className="lp-sponsor">
              {sponsor.map((s) => (
                <li key={s.slug}>
                  <img src={`/sponsor/${s.slug}.jpg`} alt={s.nome} loading="lazy" width="360" height="160" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="lp-final" id="contatti">
          <div className="container lp-narrow">
            <h2>Scrivici quando vuoi</h2>
            <p className="lp-body">
              Un messaggio basta: ti diciamo giorni, orari e dove ci alleniamo, e fissiamo la prova.
            </p>
            <div className="lp-cta">
              <a className="btn btn-red btn-lg" href={waHref} target="_blank" rel="noopener noreferrer">
                Scrivici su WhatsApp
              </a>
              <a className="btn btn-outline-white btn-lg" href={site.phoneHref}>
                {site.phone}
              </a>
            </div>
            <ul className="lp-contatti">
              <li>
                {site.address[0]}, {site.address[1]}
              </li>
              <li className="lp-social">
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Tasto sempre a portata di pollice: scrivere non deve mai costare uno scroll. */}
        <a className="lp-fab" href={waHref} target="_blank" rel="noopener noreferrer" aria-label="Scrivici su WhatsApp">
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>

        <footer className="lp-foot">
          <div className="container">
            <span>{site.name}</span>
            <span>P.IVA {site.piva}</span>
          </div>
        </footer>
      </main>
    </>
  )
}
