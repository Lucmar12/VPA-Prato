import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Landing from './pages/Landing.jsx'
import Home from './pages/Home.jsx'
import Societa from './pages/Societa.jsx'
import Squadre from './pages/Squadre.jsx'
import Atlete from './pages/Atlete.jsx'
import Corsi from './pages/Corsi.jsx'
import Sponsor from './pages/Sponsor.jsx'
import Contatti from './pages/Contatti.jsx'
import NotFound from './pages/NotFound.jsx'

// Per ora online c'è solo la landing: il sito completo è spento finché
// non arrivano foto e contenuti. Rimetti true per riaccenderlo tutto.
const SITO_COMPLETO = false

export default function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      {SITO_COMPLETO && (
        <Route element={<Layout />}>
          <Route path="sito" element={<Home />} />
          <Route path="societa" element={<Societa />} />
          <Route path="squadre" element={<Squadre />} />
          <Route path="atlete" element={<Atlete />} />
          <Route path="corsi" element={<Corsi />} />
          <Route path="sponsor" element={<Sponsor />} />
          <Route path="contatti" element={<Contatti />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      )}
      {/* Finché il sito completo è spento, ogni altro indirizzo torna alla landing. */}
      {!SITO_COMPLETO && <Route path="*" element={<Navigate to="/" replace />} />}
    </Routes>
  )
}
