import Meta from '../components/Meta.jsx'
import { PageHero, TrialForm } from '../components/ui.jsx'
import { steps, faq, site } from '../data/site.js'

export default function Corsi() {
  return (
    <>
      <Meta
        title="Corsi e iscrizioni – Volley Prato Academy"
        description="Minivolley per bambine da 6 a 10 anni a Prato: come funziona, domande frequenti e modulo per la prova gratuita."
      />
      <PageHero title="Corsi e iscrizioni">Minivolley per bambine da 6 a 10 anni, con una prova gratuita.</PageHero>

      <section className="section">
        <div className="container">
          <h2>Come funziona</h2>
          <div className="grid-3" style={{ marginTop: 36 }}>
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sky">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="stack">
            <h2>Chi può iscriversi</h2>
            <p className="lead">
              Il minivolley è pensato per bambine da 6 a 10 anni. Le ragazze nate dal 2012 al 2016 possono entrare a far parte della squadra per la stagione 2026/27: contattaci per tutte le informazioni.
            </p>
          </div>
          <div className="note-box">
            <strong>Dove ci alleniamo</strong>
            {site.venues.map((v) => (
              <span key={v}>
                <br />
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Domande frequenti</h2>
          <div className="faq">
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy" id="modulo">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="stack">
            <h2 style={{ fontSize: 'clamp(3rem,6vw,4.25rem)', fontWeight: 800, lineHeight: 0.98 }}>Prova il volley, gratis</h2>
            <p className="lead" style={{ color: '#E3EAFB', maxWidth: 520 }}>
              Lasciaci i tuoi dati: ti richiamiamo per organizzare la prova.
            </p>
          </div>
          <TrialForm idPrefix="c-" />
        </div>
      </section>
    </>
  )
}
