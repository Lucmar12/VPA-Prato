import { Link } from 'react-router-dom'
import { nav, site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/logo.png" alt="Logo Volley Prato Academy" width="72" height="72" />
              <span>{site.name}</span>
            </div>
            <p>Associazione sportiva dilettantistica di pallavolo femminile a Prato. Dal minivolley alle categorie giovanili.</p>
            <Social />
          </div>
          <div>
            <h3>Contatti</h3>
            <address>
              {site.address[0]}
              <br />
              {site.address[1]}
              <br />
              <a href={site.phoneHref}>{site.phone}</a>
              <br />
              <a href={'mailto:' + site.email}>{site.email}</a>
            </address>
          </div>
          <div>
            <h3>Il sito</h3>
            <nav className="footer-nav" aria-label="Piè di pagina">
              {nav.map((item) => (
                <Link key={item.label} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="legal">P.IVA {site.piva}</div>
      </div>
    </footer>
  )
}

export function Social({ style }) {
  return (
    <div className="social" style={style}>
      <a href={site.instagram} target="_blank" rel="noopener noreferrer">
        {site.instagramLabel}
      </a>
      <a href={site.facebook} target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
    </div>
  )
}
