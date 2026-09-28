import { Link } from 'react-router-dom'
import Meta from '../components/Meta.jsx'
import { Placeholder, PageHero } from '../components/ui.jsx'
import { teams } from '../data/site.js'

export default function Squadre() {
  return (
    <>
      <Meta
        title="Le squadre – Volley Prato Academy"
        description="Le squadre di Volley Prato Academy: minivolley per bambine da 6 a 10 anni e Under 12 nel campionato territoriale FIPAV."
      />
      <PageHero title="Le squadre">Dal primo palleggio al campionato: un percorso completo per ogni età.</PageHero>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          {teams.map((t) => (
            <div className="team-block" key={t.name}>
              <Placeholder className="ratio-43">[Foto squadra]</Placeholder>
              <div>
                <h2>{t.name}</h2>
                <p className="lead" style={{ marginTop: 16 }}>
                  {t.long}
                </p>
                <div className="facts-list">
                  <strong>Allenamenti:</strong> [giorni e orari]
                  <br />
                  <strong>Sede:</strong> [palestra]
                  <br />
                  <strong>Allenatore:</strong> [Nome Cognome]
                </div>
                <div className="links">
                  <Link className="link" to="/atlete">
                    Vedi le atlete
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
