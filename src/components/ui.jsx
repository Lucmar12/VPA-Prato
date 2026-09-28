import { Link } from 'react-router-dom'
import { Silhouette } from './Icons.jsx'
import { site } from '../data/site.js'

// Riquadro segnaposto: sostituiscilo con <img> quando hai le foto
export function Placeholder({ className = '', children, style }) {
  return (
    <div className={('ph ' + className).trim()} style={style}>
      {children}
    </div>
  )
}

export function PageHero({ title, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  )
}

export function Person({ role = '[Ruolo], [numero di maglia]' }) {
  return (
    <div className="person">
      <Placeholder className="ratio-34">
        <Silhouette />
        <span>[Foto]</span>
      </Placeholder>
      <h3>[Nome Cognome]</h3>
      <p>{role}</p>
    </div>
  )
}

export function Field({ id, label, type = 'text', placeholder, name, required = true, autoComplete }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name || id} type={type} placeholder={placeholder} required={required} autoComplete={autoComplete} />
    </div>
  )
}

// Modulo provvisorio: apre il programma di posta. Da collegare a un servizio di invio prima della pubblicazione.
export function TrialForm({ idPrefix = '' }) {
  return (
    <form className="form-card" action={'mailto:' + site.email} method="post" encType="text/plain">
      <h3>Richiedi la prova gratuita</h3>
      <Field id={idPrefix + 'genitore'} name="genitore" label="Nome del genitore" placeholder="Nome e cognome" autoComplete="name" />
      <Field id={idPrefix + 'bambina'} name="bambina" label="Nome e anno di nascita della bambina" placeholder="Es. nome, 2015" />
      <div className="field-row">
        <Field id={idPrefix + 'telefono'} name="telefono" label="Telefono" type="tel" placeholder="Il tuo numero" autoComplete="tel" />
        <Field id={idPrefix + 'email'} name="email" label="Email" type="email" placeholder="nome@email.it" autoComplete="email" />
      </div>
      <button className="btn btn-red btn-lg" type="submit">
        Richiedi la prova gratuita
      </button>
      <p className="form-note">
        Preferisci scriverci?{' '}
        <a href={site.whatsapp}>
          <strong>Apri WhatsApp</strong>
        </a>
      </p>
    </form>
  )
}

export function TeamRows({ teams }) {
  return (
    <div className="rows">
      {teams.map((t) => (
        <div className="team-row" key={t.name}>
          <Placeholder>[Foto squadra]</Placeholder>
          <h3>{t.name}</h3>
          <p>{t.short}</p>
          <Link className="link" to="/squadre">
            Vai alla squadra
          </Link>
        </div>
      ))}
    </div>
  )
}
