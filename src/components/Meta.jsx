import { useEffect } from 'react'

// Imposta titolo e descrizione della pagina (utile per Google e per la scheda del browser)
export default function Meta({ title, description }) {
  useEffect(() => {
    document.title = title
    const tag = document.querySelector('meta[name="description"]')
    if (tag && description) tag.setAttribute('content', description)
  }, [title, description])
  return null
}
