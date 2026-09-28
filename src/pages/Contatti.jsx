import Meta from '../components/Meta.jsx'
import { Placeholder, PageHero, Field } from '../components/ui.jsx'
import { site } from '../data/site.js'

export default function Contatti() {
  return (
    <>
      <Meta title="Contatti – Volley Prato Academy" description="Contatti di Volley Prato Academy: indirizzo, telefono, email e modulo di contatto." />
      <PageHero title="Contatti">Scrivici o vieni a trovarci.</PageHero>

      <section className="section">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="contact-list">
            <h3>Sede legale</h3>
            {site.address[0]}
            <br />
            {site.address[1]}
            <h3>Telefono e WhatsApp</h3>
            <a href={site.phoneHref}>{site.phone}</a>
            <h3>Email</h3>
            <a href={'mailto:' + site.email}>{site.email}</a>
            <h3>Dove ci alleniamo</h3>
            {site.venues.map((v, i) => (
              <span key={v}>
                {i > 0 && <br />}
                {v}
              </span>
            ))}
            <p style={{ marginTop: 24, fontSize: '1rem', color: 'var(--ph-text)' }}>P.IVA {site.piva}</p>
          </div>

          <form className="form-card sky" action={'mailto:' + site.email} method="post" encType="text/plain">
            <h3>Scrivici un messaggio</h3>
            <Field id="nome" label="Nome" placeholder="Il tuo nome" autoComplete="name" />
            <Field id="email" label="Email" type="email" placeholder="nome@email.it" autoComplete="email" />
            <div className="field">
              <label htmlFor="msg">Messaggio</label>
              <textarea id="msg" name="messaggio" rows="5" placeholder="Come possiamo aiutarti?" required />
            </div>
            <button className="btn btn-red btn-lg" type="submit">
              Invia il messaggio
            </button>
          </form>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <Placeholder className="map">[Mappa delle sedi]</Placeholder>
        </div>
      </section>
    </>
  )
}
