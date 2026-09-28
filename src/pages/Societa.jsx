import Meta from '../components/Meta.jsx'
import { Placeholder, PageHero, Person } from '../components/ui.jsx'
import { values } from '../data/site.js'

export default function Societa() {
  return (
    <>
      <Meta
        title="La società – Volley Prato Academy"
        description="La storia di Volley Prato Academy: nata dalle famiglie di Prato, dal minivolley alla prima squadra Under 12."
      />
      <PageHero title="La nostra storia">Nata dalle famiglie di Prato che volevano far giocare a volley le proprie figlie.</PageHero>

      <section className="section">
        <div className="container split">
          <div className="stack lead">
            <p>
              Volley Prato Academy nasce per rispondere al desiderio di alcune famiglie della provincia di Prato: far avvicinare le proprie figlie alla pallavolo, in un territorio dove non trovavano una società che offrisse questa possibilità.
            </p>
            <p>
              Le famiglie si sono affidate a un'associazione già attiva e radicata, l'ASD Prato Sport Academy, con numerose squadre nei campionati locali di basket. All'inizio l'attività era rivolta alle bambine delle scuole elementari, con il minivolley.
            </p>
            <p>
              Con la crescita delle atlete e del loro numero, nella stagione 2023/24 è nata la prima squadra vera e propria, iscritta al campionato territoriale FIPAV Under 12.
            </p>
          </div>
          <Placeholder className="ratio-43">[Foto di gruppo]</Placeholder>
        </div>
      </section>

      <section className="section bg-sky">
        <div className="container">
          <h2>I nostri valori</h2>
          <div className="grid-3" style={{ marginTop: 36 }}>
            {values.map((v) => (
              <div className="value" key={v.title}>
                <div className="big-num">{v.title}</div>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Staff e dirigenti</h2>
          <div className="grid-4" style={{ marginTop: 36 }}>
            {Array.from({ length: 4 }, (_, i) => (
              <Person key={i} role="[Ruolo]" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
