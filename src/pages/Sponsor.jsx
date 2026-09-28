import Meta from '../components/Meta.jsx'
import { Placeholder, PageHero } from '../components/ui.jsx'
import { site } from '../data/site.js'

export default function Sponsor() {
  return (
    <>
      <Meta title="Sponsor – Volley Prato Academy" description="Le aziende che sostengono Volley Prato Academy e come diventare sponsor." />
      <PageHero title="Chi ci sostiene">Le aziende e le realtà di Prato che credono nel volley giovanile.</PageHero>

      <section className="section bg-sky">
        <div className="container">
          <div className="grid-4">
            {Array.from({ length: 8 }, (_, i) => (
              <Placeholder key={i} className="white" style={{ height: 150, borderRadius: 14 }}>
                [Logo sponsor]
              </Placeholder>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy" id="diventa-sponsor">
        <div className="container split">
          <div className="stack">
            <h2 style={{ fontSize: 'clamp(3rem,6vw,4.25rem)', fontWeight: 800, lineHeight: 0.98 }}>Diventa sponsor</h2>
            <p className="lead" style={{ color: '#E3EAFB', maxWidth: 520 }}>
              Vuoi sostenere le nostre atlete? Scrivici e ti raccontiamo come.
            </p>
            <p>
              <a className="btn btn-red btn-lg sponsor-cta" href={'mailto:' + site.email}>
                Scrivici
              </a>
            </p>
          </div>
          <div className="note-box">
            <strong>Come sostenerci</strong>
            <br />
            [Da definire con la società: modalità e vantaggi per gli sponsor]
          </div>
        </div>
      </section>
    </>
  )
}
