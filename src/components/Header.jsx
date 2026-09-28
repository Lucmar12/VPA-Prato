import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../data/site.js'
import { MenuIcon } from './Icons.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={'site-header' + (open ? ' open' : '')}>
      <div className="header-inner">
        <Link className="brand" to="/">
          <img src="/logo.png" alt="" width="60" height="60" />
          <span>{site.name}</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? 'Chiudi il menu' : 'Apri il menu'}
          onClick={() => setOpen(!open)}
        >
          <MenuIcon open={open} />
        </button>
        <nav className="nav" id="nav" aria-label="Principale">
          {nav.map((item) =>
            item.hash ? (
              <Link key={item.label} to={item.to}>
                {item.label}
              </Link>
            ) : (
              <NavLink key={item.label} to={item.to}>
                {item.label}
              </NavLink>
            )
          )}
          <Link className="btn btn-red" to="/corsi#modulo">
            Prova gratuita
          </Link>
        </nav>
      </div>
    </header>
  )
}
