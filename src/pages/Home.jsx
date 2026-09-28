import { Link } from 'react-router-dom'
import Meta from '../components/Meta.jsx'
import { Placeholder, Person, TeamRows, TrialForm } from '../components/ui.jsx'
import { Social } from '../components/Footer.jsx'
import { facts, teams, site } from '../data/site.js'

export default function Home() {
  return (
    <>
      <Meta
        title="Volley Prato Academy – Pallavolo femminile a Prato"
        description="Volley Prato Academy: pallavolo femminile a Prato, dal minivolley alle giovanili. Prova gratuita per bambine da 6 a 10 anni."
      />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Scendi in campo con noi</h1>
            <p className="hero-sub">
              Pallavolo femminile a Prato, dal minivolley alle giovanili. Se sei nata tra il 2012 e il 2016, ti aspettiamo.
            </p>
            <div className="btn-row">
              <Link className="btn btn-red btn-lg" to="/#corsi">
                Prenota la prova gratuita
              </Link>
              <Link className="btn btn-outline-white btn-lg" to="/squadre">
                Scopri le squadre
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <img src="/logo.png" alt="Logo Volley Prato Academy con leone e pallone" width="420" height="420" />
          </div>
        </div>
      </section>

      <section className="facts" aria-label="In sintesi">
        <div className="container facts-grid">
          {facts.map((f) => (
            <div key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="societa">
        <div className="container split">
          <Placeholder className="ratio-43">[Foto di gruppo]</Placeholder>
          <div className="stack">
            <h2>Nata dalle famiglie</h2>
            <p className="lead">
              Volley Prato Academy è nata dal desiderio di alcune famiglie della provincia di Prato di far giocare a volley le proprie figlie. Da allora è cresciuta, dal minivolley alla prima squadra nel campionato Under 12.
            </p>
            <Link className="link" to="/societa">
              Leggi la nostra storia
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-sky" id="squadre">
        <div className="container">
          <div className="sec-head">
            <div>
              <h2>Le nostre squadre</h2>
              <p className="sec-intro">Un percorso completo, dal primo palleggio al campionato: tecnica, disciplina e spirito di squadra.</p>
            </div>
          </div>
          <TeamRows teams={teams} />
        </div>
      </section>

      <section className="section" id="atlete">
        <div className="container">
          <div className="sec-head">
            <h2>Le atlete</h2>
            <Link className="link" to="/atlete">
              Vedi tutte le atlete
            </Link>
          </div>
          <div className="grid-4">
            {Array.from({ length: 8 }, (_, i) => (
              <Person key={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy" id="corsi">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="stack">
            <h2 style={{ fontSize: 'clamp(3rem,6vw,4.5rem)', fontWeight: 800, lineHeight: 0.98 }}>Prova il volley, gratis</h2>
            <p className="lead" style={{ color: '#E3EAFB', maxWidth: 520 }}>
              Corsi di avviamento al minivolley per bambine da 6 a 10 anni, con istruttori qualificati. La prova è gratuita e senza impegno, negli impianti dove si tengono i corsi.
            </p>
            <div className="note-box" style={{ maxWidth: 520 }}>
              <strong>Dove ci alleniamo</strong>
              {site.venues.map((v) => (
                <span key={v}>
                  <br />
                  {v}
                </span>
              ))}
            </div>
          </div>
          <TrialForm idPrefix="h-" />
        </div>
      </section>

      <section className="section bg-sky" id="sponsor">
        <div className="container">
          <div className="sec-head">
            <div>
              <h2>Chi ci sostiene</h2>
              <p className="sec-intro">Le aziende e le realtà di Prato che credono nel volley giovanile.</p>
            </div>
            <Link className="btn btn-outline-blue" to="/sponsor#diventa-sponsor">
              Diventa sponsor
            </Link>
          </div>
          <div className="grid-6">
            {Array.from({ length: 6 }, (_, i) => (
              <Placeholder key={i} className="white sponsor-slot">
                [Logo sponsor]
              </Placeholder>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="social" style={{ padding: '72px 0' }}>
        <div className="container sec-head" style={{ marginBottom: 0, alignItems: 'center' }}>
          <h2>Seguici sui social</h2>
          <Social style={{ marginTop: 0 }} />
        </div>
      </section>
    </>
  )
}
