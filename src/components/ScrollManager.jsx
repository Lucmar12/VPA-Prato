import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Cambiando pagina torna in cima; se il link ha un ancoraggio (#corsi) scorre fin lì
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
