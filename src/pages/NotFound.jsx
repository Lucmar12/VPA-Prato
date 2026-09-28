import { Link } from 'react-router-dom'
import Meta from '../components/Meta.jsx'
import { PageHero } from '../components/ui.jsx'

export default function NotFound() {
  return (
    <>
      <Meta title="Pagina non trovata – Volley Prato Academy" />
      <PageHero title="Pagina non trovata">La pagina che cerchi non esiste o è stata spostata.</PageHero>
      <section className="section">
        <div className="container">
          <Link className="btn btn-red btn-lg" to="/">
            Torna alla home
          </Link>
        </div>
      </section>
    </>
  )
}
